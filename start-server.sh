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
    
    if command -v packwiz &> /dev/null; then
        if packwiz version &> /dev/null; then
            PACKWIZ_CMD="packwiz"
            info "packwiz found in PATH"
            return
        fi
    fi
    
    if [ -f "./packwiz" ] && [ -x "./packwiz" ]; then
        if ./packwiz version &> /dev/null; then
            PACKWIZ_CMD="./packwiz"
            info "packwiz found"
            return
        fi
    fi

    info "Installing packwiz..."
    
    if command -v go &> /dev/null; then
        info "Go found, installing packwiz via go install..."
        if go install github.com/packwiz/packwiz@latest; then
            PACKWIZ_CMD="$HOME/go/bin/packwiz"
            if [ -f "$PACKWIZ_CMD" ] && [ -x "$PACKWIZ_CMD" ]; then
                info "packwiz installed successfully"
                return
            fi
        fi
    fi
    
    if command -v brew &> /dev/null; then
        info "Installing packwiz via brew..."
        if brew install packwiz; then
            PACKWIZ_CMD="packwiz"
            info "packwiz installed successfully"
            return
        fi
    fi
    
    if command -v scoop &> /dev/null; then
        info "Installing packwiz via scoop..."
        if scoop install packwiz; then
            PACKWIZ_CMD="packwiz"
            info "packwiz installed successfully"
            return
        fi
    fi
    
    error "Could not install packwiz automatically.
Please install packwiz manually:
  1. Go: go install github.com/packwiz/packwiz@latest
  2. Homebrew: brew install packwiz
  3. Scoop: scoop install packwiz"
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
