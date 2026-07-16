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
    if [ -f "./packwiz" ] && file "./packwiz" | grep -q "executable"; then
        info "packwiz found"
        return
    fi

    info "Downloading packwiz..."
    OS="$(uname -s)"
    ARCH="$(uname -m)"
    
    case "$OS" in
        Linux*)
            if [ "$ARCH" = "x86_64" ]; then
                PACKWIZ_URL="https://github.com/packwiz/packwiz/releases/latest/download/packwiz-linux-amd64"
            elif [ "$ARCH" = "aarch64" ]; then
                PACKWIZ_URL="https://github.com/packwiz/packwiz/releases/latest/download/packwiz-linux-arm64"
            else
                error "Unsupported architecture: $ARCH"
            fi
            ;;
        Darwin*)
            if [ "$ARCH" = "x86_64" ]; then
                PACKWIZ_URL="https://github.com/packwiz/packwiz/releases/latest/download/packwiz-darwin-amd64"
            elif [ "$ARCH" = "arm64" ]; then
                PACKWIZ_URL="https://github.com/packwiz/packwiz/releases/latest/download/packwiz-darwin-arm64"
            else
                error "Unsupported architecture: $ARCH"
            fi
            ;;
        MINGW*|MSYS*|CYGWIN*)
            PACKWIZ_URL="https://github.com/packwiz/packwiz/releases/latest/download/packwiz-windows-amd64.exe"
            ;;
        *)
            error "Unsupported OS: $OS"
            ;;
    esac
    
    rm -f ./packwiz ./packwiz.exe
    curl -fsSL "$PACKWIZ_URL" -o packwiz
    chmod +x packwiz
    info "packwiz installed successfully"
}

install_mods() {
    info "Installing mods via packwiz..."
    ./packwiz install --all
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
