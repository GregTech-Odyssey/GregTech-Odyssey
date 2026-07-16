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

url_encode() {
    echo "$1" | sed 's/ /%20/g; s/+/%2B/g; s/&/%26/g; s/#/%23/g'
}

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
            if curl -fsSL -o "mods/$filename" "$url"; then
                downloaded=$((downloaded + 1))
            else
                error "Failed to download $filename"
            fi
        else
            skipped=$((skipped + 1))
        fi
    done
    
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
