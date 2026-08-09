#!/usr/bin/env bash

set -u

cd -- "$(dirname "$0")" || exit 1
server_root=$(pwd -P)

printf '%s\n' "1. 中文" "2. English"
printf '> '
IFS= read -r language_choice

if [ "$language_choice" = "2" ]; then
  msg_java_missing="Java was not found. Install Java 21 or newer and try again."
  msg_java_unknown="Unable to determine the Java version."
  msg_java_old="Java 21 or newer is required. Detected version:"
  msg_forge_installing="Installing Forge..."
  msg_forge_ready="Forge is already installed."
  msg_forge_failed="Forge installation failed."
  msg_mods_installing="Downloading and updating server mods..."
  msg_mods_failed="Mod installation failed."
  msg_complete="Installation completed successfully. Run bash run.sh to start the server."
  msg_missing_files="Installer files are missing. Extract the complete server package and try again."
else
  msg_java_missing="未找到 Java。请安装 Java 21 或更高版本后重试。"
  msg_java_unknown="无法识别 Java 版本。"
  msg_java_old="需要 Java 21 或更高版本。当前版本："
  msg_forge_installing="正在安装 Forge……"
  msg_forge_ready="Forge 已安装，跳过安装。"
  msg_forge_failed="Forge 安装失败。"
  msg_mods_installing="正在下载并更新服务端模组……"
  msg_mods_failed="模组安装失败。"
  msg_complete="安装已成功完成。请运行 bash run.sh 启动服务端。"
  msg_missing_files="安装器文件缺失。请完整解压服务端包后重试。"
fi

fail() {
  printf '%s\n' "$1" >&2
  exit 1
}

if ! command -v java >/dev/null 2>&1; then
  fail "$msg_java_missing"
fi

java_version=$(java -XshowSettings:properties -version 2>&1 | awk -F= '/^[[:space:]]*java\.specification\.version[[:space:]]*=/{gsub(/[[:space:]]/, "", $2); print $2; exit}')
java_major=${java_version%%.*}
case "$java_major" in
  ''|*[!0-9]*) fail "$msg_java_unknown" ;;
esac

if [ "$java_major" -lt 21 ]; then
  fail "$msg_java_old $java_version"
fi

forge_installer="$server_root/gto-installer/tools/forge-1.20.1-47.4.20-installer.jar"
packwiz_installer="$server_root/gto-installer/tools/packwiz-installer-v0.5.14.jar"
pack_file="$server_root/gto-installer/pack/pack.toml"
forge_library="$server_root/libraries/net/minecraftforge/forge/1.20.1-47.4.20/forge-1.20.1-47.4.20-universal.jar"
forge_unix_args="$server_root/libraries/net/minecraftforge/forge/1.20.1-47.4.20/unix_args.txt"
forge_win_args="$server_root/libraries/net/minecraftforge/forge/1.20.1-47.4.20/win_args.txt"
minecraft_server="$server_root/libraries/net/minecraft/server/1.20.1/server-1.20.1.jar"

if [ ! -f "$forge_installer" ] || [ ! -f "$packwiz_installer" ] || [ ! -f "$pack_file" ]; then
  fail "$msg_missing_files"
fi

if [ -f "$server_root/run.sh" ] && [ -f "$server_root/run.bat" ] \
  && [ -f "$server_root/user_jvm_args.txt" ] && [ -f "$forge_library" ] \
  && [ -f "$forge_unix_args" ] && [ -f "$forge_win_args" ] \
  && [ -f "$minecraft_server" ]; then
  printf '%s\n' "$msg_forge_ready"
else
  printf '%s\n' "$msg_forge_installing"
  java -jar "$forge_installer" --installServer "$server_root" || fail "$msg_forge_failed"
fi

if [ ! -f "$server_root/run.sh" ] || [ ! -f "$forge_library" ] || [ ! -f "$forge_unix_args" ]; then
  fail "$msg_forge_failed"
fi
chmod +x "$server_root/run.sh" || fail "$msg_forge_failed"

printf '%s\n' "$msg_mods_installing"
# The pinned installer JAR normally delegates to its bootstrapper, so call its CLI entry point directly.
java -cp "$packwiz_installer" link.infra.packwiz.installer.Main \
  -g -s server --pack-folder "$server_root" "$pack_file" \
  || fail "$msg_mods_failed"

printf '%s\n' "$msg_complete"
