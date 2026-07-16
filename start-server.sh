#!/bin/bash
# GregTech Odyssey Server Launcher

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

info() { echo -e "${GREEN}[INFO]${NC} $1"; }
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

    if [ ! -f "pack.toml" ] || [ ! -f "index.toml" ]; then
        error "pack.toml or index.toml not found"
    fi

    PACKWIZ_CMD=""
    OS="$(uname -s)"
    
    if [ "$OS" = "Linux" ] && [ -x "./packwiz-bin/packwiz-linux" ]; then
        PACKWIZ_CMD="./packwiz-bin/packwiz-linux"
    elif [ "$OS" = "Darwin" ] && [ -x "./packwiz-bin/packwiz-macos" ]; then
        PACKWIZ_CMD="./packwiz-bin/packwiz-macos"
    fi

    if [ -z "$PACKWIZ_CMD" ]; then
        error "packwiz not found for your platform"
    fi

    info "Starting packwiz server in $PWD..."
    $PACKWIZ_CMD serve &
    PACKWIZ_PID=$!

    info "Waiting for server to start..."
    sleep 3

    for i in {1..10}; do
        if curl -s http://localhost:8080/pack.toml > /dev/null 2>&1; then
            info "Server is ready"
            break
        fi
        sleep 1
    done

    info "Installing mods..."
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
