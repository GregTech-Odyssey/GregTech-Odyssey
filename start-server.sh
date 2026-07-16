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
        fi
    fi
    
    if [ -z "$JAVA_CMD" ]; then
        for d in ./jdk-21* ./jdk ./jre; do
            if [ -x "$d/bin/java" ]; then
                version=$("$d/bin/java" -version 2>&1 | head -1 | grep -oE '[0-9]+' | head -1)
                if [ "$version" -ge 21 ] 2>/dev/null; then
                    JAVA_CMD="$d/bin/java"
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
    if ! $JAVA_CMD -jar "$INSTALLER" --installServer > /dev/null 2>&1; then
        error "Forge installation failed"
    fi

    rm -f "$INSTALLER" run.sh run.bat
    info "Forge installed successfully"
}

# ============ Download mods ============
get_curseforge_url() {
    local file_id=$1
    local filename=$2
    local prefix=${file_id:0:4}
    local suffix=${file_id:4}
    local encoded_filename=$(echo "$filename" | sed 's/ /%20/g; s/+/%2B/g; s/&/%26/g; s/#/%23/g')
    echo "https://edge.forgecdn.net/files/${prefix}/${suffix}/${encoded_filename}"
}

download_mods() {
    local downloaded=0
    local skipped=0
    
    for toml in mods/*pw.toml mods/*.pw.toml; do
        [ -f "$toml" ] || continue
        
        side=$(grep -E '^side = ' "$toml" 2>/dev/null | head -1 | sed 's/side = "//;s/"//')
        if [ "$side" = "client" ]; then
            skipped=$((skipped + 1))
            continue
        fi
        
        filename=$(grep -E '^filename = ' "$toml" 2>/dev/null | head -1 | sed 's/filename = "//;s/"//')
        if [ -z "$filename" ]; then
            skipped=$((skipped + 1))
            continue
        fi
        
        if [ -f "mods/$filename" ] && [ -s "mods/$filename" ]; then
            skipped=$((skipped + 1))
            continue
        fi
        
        url=$(grep -E '^url = ' "$toml" 2>/dev/null | head -1 | sed 's/url = "//;s/"//')
        
        if [ -z "$url" ]; then
            file_id=$(grep -E 'file-id = ' "$toml" 2>/dev/null | head -1 | sed 's/.*file-id = //')
            if [ -n "$file_id" ]; then
                url=$(get_curseforge_url "$file_id" "$filename")
            fi
        fi
        
        if [ -n "$url" ]; then
            info "Downloading $filename..."
            if curl -fsSL -L -A "Mozilla/5.0" -o "mods/$filename" "$url"; then
                downloaded=$((downloaded + 1))
            else
                error "Failed to download $filename"
            fi
        else
            skipped=$((skipped + 1))
        fi
    done
    
    info "Downloaded: $downloaded, Skipped: $skipped"
    
    if [ "$downloaded" -gt 0 ]; then
        rm -f mods/*pw.toml 2>/dev/null
        info "Cleaned up metadata files"
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
    
    ARGS_FILE=""
    if [ -f "unix_args.txt" ]; then
        ARGS_FILE="unix_args.txt"
    else
        ARGS_FILE=$(find libraries -name "unix_args.txt" 2>/dev/null | head -1)
    fi
    
    if [ -z "$ARGS_FILE" ]; then
        error "unix_args.txt not found"
    fi
    
    USER_ARGS=""
    if [ -f "user_jvm_args.txt" ]; then
        USER_ARGS=$(grep -v '^\s*#' user_jvm_args.txt | grep -v '^\s*$' | tr '\n' ' ')
    fi
    
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
