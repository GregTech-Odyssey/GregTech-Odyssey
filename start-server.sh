#!/bin/bash
# GregTech Odyssey Server Launcher

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

info() { echo -e "${GREEN}[INFO]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1"; exit 1; }

check_java() {
    if command -v java &> /dev/null; then
        JAVA_CMD="java"
    elif [ -f "./jdk/bin/java" ]; then
        JAVA_CMD="./jdk/bin/java"
    elif [ -f "./jre/bin/java" ]; then
        JAVA_CMD="./jre/bin/java"
    else
        error "Java not found. Please install Java 17 or later."
    fi
    info "Using Java: $JAVA_CMD"
}

get_curseforge_url() {
    local file_id=$1
    local filename=$2
    local prefix=${file_id:0:4}
    local suffix=${file_id:4}
    echo "https://edge.forgecdn.net/files/${prefix}/${suffix}/${filename}"
}

download_mods() {
    if ls mods/*.jar 1> /dev/null 2>&1; then
        info "Mods already installed, skipping..."
        return
    fi

    if [ ! -f "index.toml" ]; then
        error "index.toml not found"
    fi

    info "Downloading server mods..."
    mkdir -p mods
    
    local total=0
    local downloaded=0
    local skipped=0
    
    while IFS= read -r line; do
        file=$(echo "$line" | sed 's/file = "//;s/"//')
        
        if [[ "$file" == mods/*.pw.toml ]]; then
            mod_toml="$file"
            if [ -f "$mod_toml" ]; then
                total=$((total + 1))
                
                side=$(grep -E '^side = ' "$mod_toml" 2>/dev/null | head -1 | sed 's/side = "//;s/"//')
                if [ "$side" = "client" ]; then
                    skipped=$((skipped + 1))
                    continue
                fi
                
                filename=$(grep -E '^filename = ' "$mod_toml" 2>/dev/null | head -1 | sed 's/filename = "//;s/"//')
                if [ -z "$filename" ]; then
                    skipped=$((skipped + 1))
                    continue
                fi
                
                if [ -f "mods/$filename" ]; then
                    skipped=$((skipped + 1))
                    continue
                fi
                
                url=$(grep -E '^url = ' "$mod_toml" 2>/dev/null | head -1 | sed 's/url = "//;s/"//')
                
                if [ -z "$url" ]; then
                    file_id=$(grep -E 'file-id = ' "$mod_toml" 2>/dev/null | head -1 | sed 's/.*file-id = //')
                    if [ -n "$file_id" ]; then
                        url=$(get_curseforge_url "$file_id" "$filename")
                    fi
                fi
                
                if [ -n "$url" ]; then
                    info "Downloading $filename..."
                    if curl -fsSL -o "mods/$filename" "$url"; then
                        downloaded=$((downloaded + 1))
                    else
                        error "Failed to download $filename"
                    fi
                else
                    skipped=$((skipped + 1))
                fi
            fi
        elif [[ "$file" == mods/*.jar ]]; then
            skipped=$((skipped + 1))
        fi
    done < <(grep -E '^file = ' index.toml)
    
    info "Downloaded: $downloaded, Skipped: $skipped"
}

start_server() {
    info "Starting GregTech Odyssey server..."
    if [ -f "./run.sh" ]; then
        ./run.sh nogui "$@"
    elif [ -f "./forge.jar" ]; then
        $JAVA_CMD -jar forge.jar nogui "$@"
    else
        error "No server launcher found"
    fi
}

main() {
    info "GregTech Odyssey Server Launcher"
    info "================================="
    check_java
    download_mods
    start_server "$@"
}

main "$@"
read -p "Press Enter to continue..."
