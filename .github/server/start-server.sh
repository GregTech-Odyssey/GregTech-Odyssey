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

# Print bilingual download-failure hints (network issues common in CN).
# Usage: download_failure_hint <what> <url> <reason> [extra]
download_failure_hint() {
    local what="$1"
    local url="$2"
    local reason="$3"
    local extra="${4:-}"
    echo ""
    echo -e "${RED}[ERROR] ========== Download failed / 下载失败 ==========${NC}"
    echo -e "${RED}[ERROR] Target / 目标: ${what}${NC}"
    if [ -n "$url" ]; then
        echo -e "${RED}[ERROR] URL: ${url}${NC}"
    fi
    if [ -n "$reason" ]; then
        echo -e "${RED}[ERROR] Reason / 原因: ${reason}${NC}"
    fi
    if [ -n "$extra" ]; then
        echo -e "${RED}[ERROR] ${extra}${NC}"
    fi
    echo ""
    echo -e "${YELLOW}[HINT] Common causes (especially in mainland China) / 常见原因（中国大陆网络尤为常见）:${NC}"
    echo -e "${YELLOW}  1. Cannot reach CurseForge CDN or Forge Maven (blocked / unstable / DNS).${NC}"
    echo -e "${YELLOW}     无法访问 CurseForge CDN 或 Forge Maven（屏蔽 / 不稳定 / DNS 污染）。${NC}"
    echo -e "${YELLOW}  2. TLS/proxy/firewall interrupted the connection.${NC}"
    echo -e "${YELLOW}     TLS、代理或防火墙中断了连接。${NC}"
    echo -e "${YELLOW}  3. Timeout or partial download due to slow/unstable network.${NC}"
    echo -e "${YELLOW}     网络慢或不稳定导致超时、文件不完整。${NC}"
    echo ""
    echo -e "${YELLOW}[HINT] What to try / 建议处理:${NC}"
    echo -e "${YELLOW}  - Use a reliable proxy/VPN, then re-run this script (metadata is kept for retry).${NC}"
    echo -e "${YELLOW}    使用稳定的代理/VPN 后重新运行本脚本（元数据会保留以便重试）。${NC}"
    echo -e "${YELLOW}  - Switch DNS (e.g. 223.5.5.5 / 1.1.1.1) and retry.${NC}"
    echo -e "${YELLOW}    更换 DNS（如 223.5.5.5 / 1.1.1.1）后重试。${NC}"
    echo -e "${YELLOW}  - Delete only the failed partial JAR under mods/, then re-run.${NC}"
    echo -e "${YELLOW}    仅删除 mods/ 下失败的不完整 JAR，再重新运行。${NC}"
    echo -e "${YELLOW}  - Do NOT delete gtocore-forge-*.jar / gtonativelib-*.jar (bundled core mods).${NC}"
    echo -e "${YELLOW}    不要删除 gtocore-forge-*.jar / gtonativelib-*.jar（随包核心 mod）。${NC}"
    echo -e "${RED}[ERROR] ==================================================${NC}"
    echo ""
}

# Map curl exit code to a short human-readable reason.
curl_fail_reason() {
    local code="$1"
    case "$code" in
        6)  echo "curl exit 6: Could not resolve host (DNS failure / 无法解析主机名)" ;;
        7)  echo "curl exit 7: Failed to connect to host (network blocked or unreachable / 无法连接主机)" ;;
        22) echo "curl exit 22: HTTP error (404/403/5xx etc. / HTTP 状态错误)" ;;
        28) echo "curl exit 28: Operation timeout (slow or unstable network / 下载超时)" ;;
        35) echo "curl exit 35: SSL/TLS connect error (proxy or MITM / TLS 握手失败)" ;;
        56) echo "curl exit 56: Failure in receiving network data (connection reset / 接收数据失败)" ;;
        60) echo "curl exit 60: SSL certificate problem (proxy/cert / 证书校验失败)" ;;
        *)  echo "curl exit $code: see https://curl.se/libcurl/c/libcurl-errors.html" ;;
    esac
}

# ============ Configuration ============
# Read versions from pack.toml
MC_VERSION=$(grep 'minecraft' pack.toml | head -1 | sed 's/.*= *"\([^"]*\)".*/\1/')
FORGE_VERSION_NUM=$(grep 'forge' pack.toml | head -1 | sed 's/.*= *"\([^"]*\)".*/\1/')
FORGE_VERSION="${MC_VERSION}-${FORGE_VERSION_NUM}"
# Official Maven first, then BMCLAPI (https://bmclapidoc.bangbang93.com/)
FORGE_INSTALLER_OFFICIAL="https://maven.minecraftforge.net/net/minecraftforge/forge/${FORGE_VERSION}/forge-${FORGE_VERSION}-installer.jar"
FORGE_INSTALLER_BMCLAPI="https://bmclapi2.bangbang93.com/maven/net/minecraftforge/forge/${FORGE_VERSION}/forge-${FORGE_VERSION}-installer.jar"

if [ -z "$MC_VERSION" ] || [ -z "$FORGE_VERSION_NUM" ]; then
    error "Cannot read versions from pack.toml"
fi

info "Minecraft: $MC_VERSION, Forge: $FORGE_VERSION_NUM"
info "Forge installer: try official Maven, then BMCLAPI mirror"

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

# Map official library URLs to BMCLAPI mirrors (https://bmclapidoc.bangbang93.com/)
bmclapi_mirror_url() {
    local url="$1"
    case "$url" in
        https://maven.minecraftforge.net/*)
            echo "https://bmclapi2.bangbang93.com/maven/${url#https://maven.minecraftforge.net/}"
            ;;
        https://maven.creeperhost.net/*)
            echo "https://bmclapi2.bangbang93.com/maven/${url#https://maven.creeperhost.net/}"
            ;;
        https://libraries.minecraft.net/*)
            echo "https://bmclapi2.bangbang93.com/${url#https://libraries.minecraft.net/}"
            ;;
        https://launcher.mojang.com/*)
            echo "https://bmclapi2.bangbang93.com/${url#https://launcher.mojang.com/}"
            ;;
        https://piston-data.mojang.com/*)
            echo "https://bmclapi2.bangbang93.com/${url#https://piston-data.mojang.com/}"
            ;;
        https://piston-meta.mojang.com/*)
            echo "https://bmclapi2.bangbang93.com/${url#https://piston-meta.mojang.com/}"
            ;;
        *)
            echo ""
            ;;
    esac
}

# Prefetch libraries listed in installer JSONs (official then BMCLAPI).
prefetch_forge_libraries() {
    local installer="$1"
    local tmpdir list_file path url dest mirror
    if ! command -v unzip >/dev/null 2>&1; then
        warn "unzip not found; skip library prefetch"
        return 0
    fi
    if ! command -v python3 >/dev/null 2>&1 && ! command -v python >/dev/null 2>&1; then
        warn "python not found; skip library prefetch (installer will download libraries itself)"
        return 0
    fi
    local py=python3
    command -v python3 >/dev/null 2>&1 || py=python

    tmpdir=$(mktemp -d)
    list_file="$tmpdir/libs.tsv"
    for json_name in install_profile.json version.json; do
        unzip -p "$installer" "$json_name" >"$tmpdir/$json_name" 2>/dev/null || continue
        "$py" - "$tmpdir/$json_name" >>"$list_file" <<'PY'
import json, sys
data = json.load(open(sys.argv[1], encoding="utf-8"))
for lib in data.get("libraries") or []:
    art = (lib.get("downloads") or {}).get("artifact") or {}
    path, url, sha1 = art.get("path"), art.get("url"), art.get("sha1") or ""
    if path and url:
        print(f"{path}\t{url}\t{sha1}")
PY
    done

    if [ ! -s "$list_file" ]; then
        warn "No library list in installer; skip prefetch"
        rm -rf "$tmpdir"
        return 0
    fi

    # unique by path
    sort -u -t $'\t' -k1,1 "$list_file" -o "$list_file"
    local total
    total=$(wc -l <"$list_file" | tr -d ' ')
    info "Prefetching $total Forge libraries (official then BMCLAPI)..."
    info "预下载 Forge 依赖库（先官方，失败再 BMCLAPI）；随后安装器会输出实时日志。"

    local i=0 ok=0 skip=0 fail=0
    while IFS=$'\t' read -r path url sha1; do
        [ -n "$path" ] || continue
        i=$((i + 1))
        dest="libraries/$path"
        if [ -f "$dest" ] && [ -s "$dest" ]; then
            if [ -n "$sha1" ] && command -v sha1sum >/dev/null 2>&1; then
                actual=$(sha1sum "$dest" | awk '{print $1}')
                if [ "$actual" = "$sha1" ]; then
                    skip=$((skip + 1))
                    continue
                fi
            else
                skip=$((skip + 1))
                continue
            fi
        fi
        info "[$i/$total] $(basename "$path")"
        mkdir -p "$(dirname "$dest")"
        got=0
        for try_url_name in "official|$url" "BMCLAPI|$(bmclapi_mirror_url "$url")"; do
            try_name="${try_url_name%%|*}"
            try_url="${try_url_name#*|}"
            [ -n "$try_url" ] || continue
            info "  try $try_name: $try_url"
            if curl -fsSL --retry 2 --retry-delay 1 --connect-timeout 20 --max-time 90 \
                -A "Mozilla/5.0" -o "$dest.part" "$try_url"; then
                if [ -n "$sha1" ] && command -v sha1sum >/dev/null 2>&1; then
                    actual=$(sha1sum "$dest.part" | awk '{print $1}')
                    if [ "$actual" != "$sha1" ]; then
                        rm -f "$dest.part"
                        warn "  $try_name SHA1 mismatch"
                        continue
                    fi
                fi
                mv -f "$dest.part" "$dest"
                info "  ok via $try_name"
                got=1
                ok=$((ok + 1))
                break
            fi
            rm -f "$dest.part"
            warn "  $try_name failed"
        done
        if [ "$got" -ne 1 ]; then
            fail=$((fail + 1))
            warn "Prefetch failed for $(basename "$path") (installer will retry)"
        fi
    done <"$list_file"

    info "Prefetch done: downloaded=$ok skipped=$skip failed=$fail"
    rm -rf "$tmpdir"
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
        success=0
        last_url=""
        last_reason=""
        tried_summary=""

        # name|url pairs — official first, BMCLAPI fallback
        for entry in \
            "Forge official Maven|${FORGE_INSTALLER_OFFICIAL}" \
            "BMCLAPI|${FORGE_INSTALLER_BMCLAPI}"
        do
            src_name="${entry%%|*}"
            src_url="${entry#*|}"
            info "Trying source: $src_name"
            info "  $src_url"
            CURL_ERR=$(mktemp)
            if curl -fsSL --retry 2 --retry-delay 2 -A "Mozilla/5.0" -o "$INSTALLER" "$src_url" 2>"$CURL_ERR"; then
                size=$(wc -c < "$INSTALLER" 2>/dev/null | tr -d ' ')
                if [ -n "$size" ] && [ "$size" -ge 1024 ]; then
                    rm -f "$CURL_ERR"
                    success=1
                    last_url="$src_url"
                    info "Downloaded from $src_name"
                    break
                fi
                last_reason="Invalid download (file too small or empty / 文件过小或为空)"
            else
                code=$?
                detail=$(tr '\n' ' ' <"$CURL_ERR" | sed 's/[[:space:]]\+/ /g')
                last_reason="$(curl_fail_reason "$code")${detail:+ | $detail}"
            fi
            last_url="$src_url"
            tried_summary="${tried_summary}${tried_summary:+; }${src_name} -> ${src_url} :: ${last_reason}"
            rm -f "$CURL_ERR" "$INSTALLER"
            warn "Source failed, trying next if any: $src_name"
        done

        if [ "$success" -ne 1 ]; then
            download_failure_hint "Forge installer" "$last_url" "$last_reason" \
                "Tried: official Maven then BMCLAPI (https://bmclapidoc.bangbang93.com/). ${tried_summary}"
            exit 1
        fi
    fi

    # Prefetch libs so installer is less likely to hang on Maven timeouts
    prefetch_forge_libraries "$INSTALLER" || warn "Library prefetch had errors; continuing"

    info "Installing Forge (live log below; may take several minutes)..."
    info "正在安装 Forge（下方为实时日志；拉依赖可能需数分钟，请勿关闭）..."
    set +e
    set -o pipefail
    $JAVA_CMD -jar "$INSTALLER" --installServer 2>&1 | tee forge-install-server.log
    install_code=${PIPESTATUS[0]}
    set +o pipefail

    if [ "$install_code" -ne 0 ] || { [ ! -d "libraries/net/minecraftforge/forge/$FORGE_VERSION" ] && [ ! -f "unix_args.txt" ] && [ ! -f "win_args.txt" ]; }; then
        echo ""
        echo -e "${RED}[ERROR] Forge installation failed (exit code: ${install_code})${NC}"
        echo -e "${YELLOW}[HINT] Installer downloads many libraries; CN networks often time out on Maven/creeperhost.${NC}"
        echo -e "${YELLOW}       安装器会下载大量 libraries；国内访问 Maven 超时很常见。${NC}"
        echo -e "${YELLOW}       Script already tried BMCLAPI prefetch; remaining failures usually need proxy/VPN.${NC}"
        echo -e "${YELLOW}       脚本已尝试 BMCLAPI 预下载；仍失败时请开代理/VPN 后重试。${NC}"
        echo -e "${YELLOW}       Full log: forge-install-server.log — or delete incomplete libraries/ and re-run.${NC}"
        exit 1
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
            CURL_ERR=$(mktemp)
            if curl -fsSL -L --retry 2 --retry-delay 2 -A "Mozilla/5.0" -o "mods/$filename" "$url" 2>"$CURL_ERR"; then
                # Basic size check; keep metadata if download looks invalid
                size=$(wc -c < "mods/$filename" 2>/dev/null | tr -d ' ')
                if [ -z "$size" ] || [ "$size" -lt 1024 ]; then
                    rm -f "mods/$filename" "$CURL_ERR"
                    download_failure_hint "$filename" "$url" \
                        "Invalid download (file too small or empty / 文件过小或为空)" \
                        "Metadata kept for retry: $toml"
                    exit 1
                fi
                rm -f "$toml" "$CURL_ERR"
                cleaned_meta=$((cleaned_meta + 1))
                downloaded=$((downloaded + 1))
            else
                code=$?
                detail=$(tr '\n' ' ' <"$CURL_ERR" | sed 's/[[:space:]]\+/ /g')
                rm -f "mods/$filename" "$CURL_ERR"
                download_failure_hint "$filename" "$url" \
                    "$(curl_fail_reason "$code")${detail:+ | $detail}" \
                    "Metadata kept for retry: $toml | Source: CurseForge CDN (edge.forgecdn.net)"
                exit 1
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
    
    # Minecraft EULA: https://aka.ms/MinecraftEULA — require explicit consent
    if [ ! -f "eula.txt" ] || ! grep -q "eula=true" "eula.txt" 2>/dev/null; then
        echo ""
        echo -e "${YELLOW}[EULA] By running this server you must agree to the Minecraft EULA:${NC}"
        echo -e "${YELLOW}[EULA] https://aka.ms/MinecraftEULA${NC}"
        echo -e "${YELLOW}[EULA] 运行此服务端即表示你必须同意 Minecraft EULA（见上方链接）。${NC}"
        echo ""
        printf "Do you agree to the Minecraft EULA? [y/N] / 是否同意 Minecraft EULA？[y/N] "
        read -r answer
        case "$answer" in
            y|Y|yes|YES) ;;
            *)
                echo -e "${RED}[ERROR] EULA not accepted. Server will not start. / 未同意 EULA，服务端不会启动。${NC}"
                if [ ! -f "eula.txt" ]; then
                    printf '%s\n' \
                        '#By changing the setting below to TRUE you are indicating your agreement to our EULA (https://aka.ms/MinecraftEULA).' \
                        'eula=false' > eula.txt
                fi
                exit 1
                ;;
        esac
        printf '%s\n' \
            '#By changing the setting below to TRUE you are indicating your agreement to our EULA (https://aka.ms/MinecraftEULA).' \
            'eula=true' > eula.txt
        info "EULA accepted / 已同意 EULA"
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
