#!/bin/bash
# GregTech Odyssey Server Launcher

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

info() { echo -e "${GREEN}[INFO]${NC} $1"; }
warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1"; exit 1; }

# ============ Configuration ============
# Read versions from pack.toml
MC_VERSION=$(grep 'minecraft' pack.toml | head -1 | sed 's/.*= *"\([^"]*\)".*/\1/')
FORGE_VERSION_NUM=$(grep 'forge' pack.toml | head -1 | sed 's/.*= *"\([^"]*\)".*/\1/')
FORGE_VERSION="${MC_VERSION}-${FORGE_VERSION_NUM}"
FORGE_MAVEN="https://maven.minecraftforge.net/net/minecraftforge/forge/${FORGE_VERSION}/forge-${FORGE_VERSION}-installer.jar"

if [ -z "$MC_VERSION" ] || [ -z "$FORGE_VERSION_NUM" ]; then
    error "Cannot read versions from pack.toml"
fi

info "Minecraft: $MC_VERSION, Forge: $FORGE_VERSION_NUM"

# ============ Check Java 21+ ============
check_java() {
    JAVA_CMD=""
    
    if [ -n "$JAVA_HOME" ] && [ -x "$JAVA_HOME/bin/java" ]; then
        version=$("$JAVA_HOME/bin/java" -version 2>&1 | head -1 | grep -oE '[0-9]+' | head -1)
        if [ "$version" -ge 21 ] 2>/dev/null; then
            JAVA_CMD="$JAVA_HOME/bin/java"
            JAVA_DIR="$JAVA_HOME"
        fi
    fi
    
    if [ -z "$JAVA_CMD" ]; then
        for d in ./jdk-21* ./jdk-21 ./jdk ./jre; do
            if [ -x "$d/bin/java" ]; then
                version=$("$d/bin/java" -version 2>&1 | head -1 | grep -oE '[0-9]+' | head -1)
                if [ "$version" -ge 21 ] 2>/dev/null; then
                    JAVA_CMD="$d/bin/java"
                    JAVA_DIR="$d"
                    break
                fi
            fi
        done
    fi
    
    if [ -z "$JAVA_CMD" ] && command -v java &> /dev/null; then
        version=$(java -version 2>&1 | head -1 | grep -oE '[0-9]+' | head -1)
        if [ "$version" -ge 21 ] 2>/dev/null; then
            JAVA_CMD="java"
        fi
    fi
    
    if [ -z "$JAVA_CMD" ]; then
        error "Java 21 or later not found. Please install Java 21+."
    fi

    # Fix libjli.so not found on some JDK builds
    if [ -n "$JAVA_DIR" ]; then
        for libdir in "$JAVA_DIR/lib" "$JAVA_DIR/lib/server" "$JAVA_DIR/lib/jli"; do
            if [ -f "$libdir/libjli.so" ]; then
                export LD_LIBRARY_PATH="$libdir:${LD_LIBRARY_PATH:-}"
                break
            fi
        done
    fi

    info "Using Java: $JAVA_CMD"
}

# ============ Install Forge ============
install_forge() {
    if [ -d "libraries/net/minecraftforge/forge/$FORGE_VERSION" ]; then
        info "Forge already installed"
        return
    fi

    info "Forge not installed. Downloading..."

    INSTALLER="forge-${FORGE_VERSION}-installer.jar"
    if [ ! -f "$INSTALLER" ]; then
        info "Downloading Forge installer..."
        if ! curl -fsSL -o "$INSTALLER" "$FORGE_MAVEN"; then
            error "Failed to download Forge installer"
        fi
    fi

    info "Installing Forge..."
    if ! $JAVA_CMD -jar "$INSTALLER" --installServer; then
        error "Forge installation failed (exit code: $?)"
    fi

    rm -f "$INSTALLER" run.sh run.bat
    info "Forge installed successfully"
}

url_encode() {
    local string="$1"
    local length=${#string}
    local encoded=""
    for (( i = 0; i < length; i++ )); do
        local c="${string:$i:1}"
        case "$c" in
            [a-zA-Z0-9.~_-]) encoded+="$c" ;;
            *) encoded+=$(printf '%%%02X' "'$c") ;;
        esac
    done
    echo "$encoded"
}

# ============ Download mods ============
get_curseforge_url() {
    local file_id=$1
    local filename=$2
    local prefix=${file_id:0:4}
    local suffix=${file_id:4}
    local encoded_filename=$(url_encode "$filename")
    echo "https://edge.forgecdn.net/files/${prefix}/${suffix}/${encoded_filename}"
}

download_mods() {
    local downloaded=0
    local skipped=0
    local unresolved=0
    local cleaned_meta=0
    
    for toml in mods/*.pw.toml; do
        [ -f "$toml" ] || continue
        
        side=$(grep -E '^side = ' "$toml" 2>/dev/null | head -1 | sed 's/side = "//;s/"//' | tr -d '\r')
        if [ "$side" = "client" ]; then
            skipped=$((skipped + 1))
            continue
        fi
        
        filename=$(grep -E '^filename = ' "$toml" 2>/dev/null | head -1 | sed 's/filename = "//;s/"//' | tr -d '\r')
        if [ -z "$filename" ]; then
            skipped=$((skipped + 1))
            continue
        fi
        
        # JAR already present: drop only this metadata file (keep others for retry)
        if [ -f "mods/$filename" ] && [ -s "mods/$filename" ]; then
            rm -f "$toml"
            cleaned_meta=$((cleaned_meta + 1))
            skipped=$((skipped + 1))
            continue
        fi
        
        url=$(grep -E '^download = |^url = ' "$toml" 2>/dev/null | head -1 | sed 's/^download = "//;s/^url = "//;s/"$//' | tr -d '\r')
        
        if [ -z "$url" ]; then
            file_id=$(grep -E 'file-id = ' "$toml" 2>/dev/null | head -1 | sed 's/.*file-id = //' | tr -d '\r')
            if [ -n "$file_id" ]; then
                url=$(get_curseforge_url "$file_id" "$filename")
            fi
        fi
        
        if [ -n "$url" ]; then
            info "Downloading $filename..."
            if curl -fsSL -L -A "Mozilla/5.0" -o "mods/$filename" "$url"; then
                # Basic size check; keep metadata if download looks invalid
                size=$(wc -c < "mods/$filename" 2>/dev/null | tr -d ' ')
                if [ -z "$size" ] || [ "$size" -lt 1024 ]; then
                    rm -f "mods/$filename"
                    error "Invalid download for $filename (file too small); metadata kept: $toml"
                fi
                rm -f "$toml"
                cleaned_meta=$((cleaned_meta + 1))
                downloaded=$((downloaded + 1))
            else
                rm -f "mods/$filename"
                error "Failed to download $filename (metadata kept: $toml)"
            fi
        else
            warn "No download URL for $filename — keeping $toml for retry"
            unresolved=$((unresolved + 1))
        fi
    done
    
    info "Downloaded: $downloaded, Skipped: $skipped, Unresolved: $unresolved, Metadata removed: $cleaned_meta"
    if [ "$unresolved" -gt 0 ]; then
        warn "$unresolved mod(s) have no URL; server may be missing mods. Re-extract pack metadata or fix network, then re-run."
    fi
}

# ============ Start server ============
start_server() {
    info "Starting GregTech Odyssey server..."
    
    # Auto agree EULA
    if [ ! -f "eula.txt" ] || ! grep -q "eula=true" "eula.txt" 2>/dev/null; then
        echo "eula=true" > eula.txt
        info "EULA accepted"
    fi
    
    # Prefer unix_args on Unix; win_args is a last resort
    ARGS_FILE=""
    if [ -f "unix_args.txt" ]; then
        ARGS_FILE="unix_args.txt"
    elif [ -f "win_args.txt" ]; then
        ARGS_FILE="win_args.txt"
    else
        ARGS_FILE=$(find libraries -name "unix_args.txt" 2>/dev/null | head -1)
        if [ -z "$ARGS_FILE" ]; then
            ARGS_FILE=$(find libraries -name "win_args.txt" 2>/dev/null | head -1)
        fi
    fi
    
    if [ -z "$ARGS_FILE" ]; then
        error "Forge args file not found (unix_args.txt / win_args.txt)"
    fi
    info "Using args file: $ARGS_FILE"
    
    USER_ARGS=""
    if [ -f "user_jvm_args.txt" ]; then
        USER_ARGS=$(grep -v '^\s*#' user_jvm_args.txt | grep -v '^\s*$' | tr '\n' ' ')
    fi
    
    # shellcheck disable=SC2086
    $JAVA_CMD $USER_ARGS $(cat "$ARGS_FILE") nogui "$@"
}

# ============ Main ============
main() {
    info "GregTech Odyssey Server Launcher"
    info "================================="
    check_java
    install_forge
    download_mods
    start_server "$@"
}

main "$@"
