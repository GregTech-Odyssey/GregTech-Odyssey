# GregTech Odyssey Dedicated Server

## 中文

要求：Java 21 或更高版本（推荐 Java 25），并保持网络连接。

- Windows：运行 `install-mods.bat`
- Linux / macOS：运行 `bash install-mods.sh`

按提示选择语言。脚本会在本地安装 Forge，并下载全部服务端模组。

安装完成后，Windows 运行 `run.bat`，Linux / macOS 运行 `bash run.sh`。首次启动后，请在 `eula.txt` 中接受 Minecraft EULA，然后重新启动。内存参数可在 `user_jvm_args.txt` 中调整。

安装脚本可以安全地重复运行。若需要强制重新检查模组，请删除根目录的 `packwiz.json` 后重新运行。不要同时打开多个安装窗口；不在整合包索引中的自定义模组不会被清理。

第三方许可证位于 `gto-installer/licenses/`。

## English

Requirements: Java 21 or newer (Java 25 recommended) and an Internet connection.

- Windows: run `install-mods.bat`
- Linux / macOS: run `bash install-mods.sh`

Choose a language when prompted. The script installs Forge locally and downloads all server-side mods.

After installation, run `run.bat` on Windows or `bash run.sh` on Linux/macOS. After the first launch, accept the Minecraft EULA in `eula.txt`, then start the server again. Memory settings can be changed in `user_jvm_args.txt`.

The installer can be safely run again. To force a full mod check, delete `packwiz.json` from the server root and rerun it. Do not run multiple installer windows at the same time. Custom mods not managed by the modpack index will not be removed.

Third-party licenses are available in `gto-installer/licenses/`.
