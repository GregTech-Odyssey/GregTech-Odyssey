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

cleanup() {
    if [ -n "$PACKWIZ_PID" ]; then
        kill $PACKWIZ_PID 2>/dev/null || true
    fi
}
trap cleanup EXIT

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

install_mods() {
    if ls mods/*.jar 1> /dev/null 2>&1; then
        info "Mods already installed, skipping..."
        return
    fi

    if [ ! -f "./packwiz-bin/packwiz-installer-bootstrap.jar" ]; then
        error "packwiz-installer-bootstrap.jar not found"
    fi

    PACKWIZ_CMD=""
    OS="$(uname -s)"
    
    if [ "$OS" = "Linux" ] && [ -f "./packwiz-bin/packwiz-linux" ] && [ -x "./packwiz-bin/packwiz-linux" ]; then
        PACKWIZ_CMD="./packwiz-bin/packwiz-linux"
    elif [ "$OS" = "Darwin" ] && [ -f "./packwiz-bin/packwiz-macos" ] && [ -x "./packwiz-bin/packwiz-macos" ]; then
        PACKWIZ_CMD="./packwiz-bin/packwiz-macos"
    elif [ -f "./packwiz" ] && [ -x "./packwiz" ]; then
        PACKWIZ_CMD="./packwiz"
    fi

    if [ -z "$PACKWIZ_CMD" ]; then
        error "packwiz CLI not found for your platform"
    fi

    info "Starting packwiz server..."
    $PACKWIZ_CMD serve &
    PACKWIZ_PID=$!
    
    info "Waiting for packwiz server to start..."
    sleep 5

    info "Installing mods via packwiz-installer..."
    if ! $JAVA_CMD -jar packwiz-bin/packwiz-installer-bootstrap.jar -g -s server http://localhost:8080/pack.toml; then
        error "Failed to install mods"
    fi

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
    install_mods
    start_server "$@"
}

main "$@"
