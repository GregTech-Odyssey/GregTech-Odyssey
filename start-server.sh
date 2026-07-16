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

download_mods() {
    if ls mods/*.jar 1> /dev/null 2>&1; then
        info "Mods already installed, skipping..."
        return
    fi

    if [ ! -f "index.toml" ]; then
        error "index.toml not found"
    fi

    info "Downloading mods from index.toml..."
    
    mkdir -p mods
    
    grep -E '^file = ' index.toml | while read -r line; do
        file=$(echo "$line" | sed 's/file = "//;s/"//')
        if [[ "$file" == mods/*.pw.toml ]]; then
            mod_toml="$file"
            if [ -f "$mod_toml" ]; then
                url=$(grep -E '^download\.url = ' "$mod_toml" 2>/dev/null | head -1 | sed 's/download\.url = "//;s/"//')
                filename=$(grep -E '^filename = ' "$mod_toml" 2>/dev/null | head -1 | sed 's/filename = "//;s/"//')
                
                if [ -n "$url" ] && [ -n "$filename" ]; then
                    if [ ! -f "mods/$filename" ]; then
                        info "Downloading $filename..."
                        curl -fsSL -o "mods/$filename" "$url"
                        if [ $? -ne 0 ]; then
                            error "Failed to download $filename"
                        fi
                    fi
                fi
            fi
        fi
    done
    
    info "All mods downloaded"
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
