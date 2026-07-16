#!/bin/bash
# GregTech Odyssey Server Launcher
# Automatically installs packwiz and downloads all required mods

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

info() { echo -e "${GREEN}[INFO]${NC} $1"; }
warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
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

ensure_packwiz() {
    PACKWIZ_CMD=""
    
    if [ -f "./packwiz" ] && [ -x "./packwiz" ]; then
        if ./packwiz version &> /dev/null; then
            PACKWIZ_CMD="./packwiz"
            info "packwiz found"
            return
        fi
    fi
    
    if command -v packwiz &> /dev/null; then
        if packwiz version &> /dev/null; then
            PACKWIZ_CMD="packwiz"
            info "packwiz found in PATH"
            return
        fi
    fi

    info "Downloading packwiz..."
    OS="$(uname -s)"
    ARCH="$(uname -m)"
    
    ARTIFACT_ID=""
    case "$OS" in
        Linux*)
            if [ "$ARCH" = "x86_64" ]; then
                ARTIFACT_ID="8109649028"
            elif [ "$ARCH" = "aarch64" ]; then
                ARTIFACT_ID="8109649028"
            fi
            ;;
        Darwin*)
            ARTIFACT_ID="8109649761"
            ;;
    esac
    
    if [ -z "$ARTIFACT_ID" ]; then
        error "Unsupported OS: $OS. Use start-server.bat on Windows."
    fi
    
    if command -v gh &> /dev/null; then
        info "Using gh to download packwiz..."
        if gh api "repos/packwiz/packwiz/actions/artifacts/$ARTIFACT_ID/zip" > packwiz.zip 2>/dev/null; then
            unzip -o packwiz.zip -d .
            rm -f packwiz.zip
            chmod +x packwiz
            if [ -f "./packwiz" ] && ./packwiz version &> /dev/null; then
                PACKWIZ_CMD="./packwiz"
                info "packwiz installed successfully"
                return
            fi
        fi
    fi
    
    info "Trying direct download..."
    if curl -fsSL -H "Accept: application/octet-stream" \
        "https://api.github.com/repos/packwiz/packwiz/actions/artifacts/$ARTIFACT_ID/zip" \
        -o packwiz.zip 2>/dev/null; then
        unzip -o packwiz.zip -d .
        rm -f packwiz.zip
        chmod +x packwiz
        if [ -f "./packwiz" ] && ./packwiz version &> /dev/null; then
            PACKWIZ_CMD="./packwiz"
            info "packwiz installed successfully"
            return
        fi
    fi
    
    error "Could not download packwiz.
Please download manually from:
https://github.com/packwiz/packwiz/actions/runs/28793198419
Then extract packwiz to this folder."
}

install_mods() {
    info "Installing mods via packwiz..."
    $PACKWIZ_CMD install --all
    info "All mods installed"
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
    ensure_packwiz
    install_mods
    start_server "$@"
}

main "$@"
