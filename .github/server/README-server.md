# GregTech Odyssey 服务器包

**中文** | [English](#english)

轻量级服务端包：发布物 **不预装** 从 CurseForge 下载的 mod JAR，也不预装 Forge。首次启动时由脚本自动安装 Forge、按元数据下载服务端 mod，并启动服务器。

发布产物文件名：`GregTech-Odyssey-server.zip`（与 GitHub Release / CI 一致）。

---

## 系统要求

- **Java 21+**（JDK 或 JRE；推荐 [Eclipse Temurin 21](https://adoptium.net/)）
- 可访问 CurseForge / Maven 的网络（首次安装 Forge 与下载 mod）  
  - Forge 安装器：**先官方 Maven**，失败后自动回退 **[BMCLAPI](https://bmclapidoc.bangbang93.com/)** 镜像
- Windows 10/11 或 Windows Server 2016+（`start-server.bat` / `start-server.ps1`）
- Linux 或 macOS（`start-server.sh`）
- 建议可用内存 **8GB+**（默认 JVM：`-Xms8G -Xmx8G`，见 `user_jvm_args.txt`）

## 快速开始

### Windows

1. 从 [Releases](https://github.com/GregTech-Odyssey/GregTech-Odyssey/releases) 下载 `GregTech-Odyssey-server.zip`
2. 解压。若解压后出现一层 `server/` 目录，请**进入该目录**再操作
3. 双击 `start-server.bat`  
   - 若 PowerShell 提示执行策略限制，在 PowerShell 中执行：  
     `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`
4. 首次运行会安装 Forge 并下载 mod（视网络约数分钟到十余分钟），完成后自动启动服务端

### Linux / macOS

```bash
# 解压后若存在 server/ 子目录，先 cd 进去
chmod +x start-server.sh
./start-server.sh
```

## 包内实际包含什么

| 内容 | 是否打包 | 说明 |
|------|----------|------|
| `config/`、`defaultconfigs/` | 是 | 服务端配置 |
| `pack.toml`、`index.toml` | 是 | 整合包与文件索引 |
| `mods/*.pw.toml` | 是 | packwiz 元数据（用于首次下载；**不含** 客户端-only 条目） |
| `mods/gtocore-forge-*.jar`、`mods/gtonativelib-*.jar` | **是** | 本地核心 mod，不在 CurseForge，必须随包分发 |
| 其余 mod JAR | **否** | 首次运行从 CurseForge 下载 |
| Forge / `libraries/` / `unix_args.txt` 等 | **否** | 首次运行由启动脚本安装 |

## 首次运行流程

1. **检测 Java 21+**
2. **安装 Forge**（从 `pack.toml` 读取版本；安装器 JAR 先下官方 Maven，失败再试 BMCLAPI；随后 installer 仍需拉取 libraries）
3. **按 `mods/*.pw.toml` 下载** 服务端兼容 mod 到 `mods/`
4. **启动** Minecraft Forge 服务端（`nogui`）

之后再次运行：已有 Forge 与已下载的 JAR 会跳过对应步骤。

## 目录说明

### 解压后（首次启动前）

```
.（或 server/）
├── mods/
│   ├── gtocore-forge-*.jar      # 已随包提供的核心 mod
│   ├── gtonativelib-*.jar
│   └── *.pw.toml                # 待下载 mod 的元数据
├── config/
├── defaultconfigs/
├── pack.toml
├── index.toml
├── user_jvm_args.txt            # JVM 参数（默认 8G 堆）
├── start-server.bat             # Windows 入口
├── start-server.ps1
├── start-server.sh              # Linux / macOS 入口
└── README.md                    # 本说明
```

### 首次成功启动后还会出现（示例）

```
├── libraries/                   # Forge / Minecraft 库
├── unix_args.txt（或 libraries 下同名文件）
├── world/                       # 存档（运行后生成）
├── logs/
└── mods/*.jar                   # 已下载的其余 mod
```

## 更新 Mod

**不要直接删除整个 `mods/` 目录。**  
`gtocore-forge-*.jar` 与 `gtonativelib-*.jar` **无法** 通过启动脚本从 CurseForge 重新下载；删掉后服务端将无法正常启动，除非重新解压完整服务器包。

推荐做法：

1. **整包升级**：下载新的 `GregTech-Odyssey-server.zip`，将存档 `world/`、自定义配置等迁移到新目录（注意合并你改过的 `config/`）
2. **仅重下已损坏的下载型 mod**：删除对应 **已下载的 JAR**（不要删两个核心 JAR，也不要清空整个 `mods/`），再运行启动脚本。启动器只在对应 JAR 校验通过后才删除该 mod 的 `*.pw.toml`；失败或未解析到 URL 时会**保留元数据**以便重试。若元数据已不在，需从服务器包中重新解压对应 `mods/*.pw.toml`

## 停止服务器

在运行启动脚本的终端 / 控制台中按 **Ctrl+C**。也可在服务端控制台输入 `stop`。

## 常见问题

| 问题 | 处理 |
|------|------|
| `Java 21 or later not found` | 安装 Java 21+，或设置 `JAVA_HOME` 指向 JDK/JRE 根目录 |
| `Download failed / 下载失败`（Forge 或 mod） | 脚本会打印 **原因** 与 URL。Forge 安装器会依次尝试 **官方 Maven → BMCLAPI**；若 installer 已下完但安装失败，多半是 libraries 仍需直连 Maven（镜像只管 installer JAR）。Mod 仍走 CurseForge CDN。大陆网络建议代理/VPN 或换 DNS；仅删失败的不完整 JAR，**勿**删两个核心 JAR |
| PowerShell 无法运行脚本 | `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` |
| 解压后找不到 `start-server.bat` | 进入 zip 内的 `server/` 子目录 |
| 启动即崩溃 | 查看 `logs/latest.log`；确认核心 JAR 仍在 `mods/` |
| 内存不足 / OOM | 编辑 `user_jvm_args.txt` 中的 `-Xms` / `-Xmx`（需小于本机可用内存） |

## 相关链接

- 整合包仓库： [GregTech-Odyssey/GregTech-Odyssey](https://github.com/GregTech-Odyssey/GregTech-Odyssey)
- 发布页： [Releases](https://github.com/GregTech-Odyssey/GregTech-Odyssey/releases)

---

# English

<a id="english"></a>

Lightweight **server** package for GregTech Odyssey. The release zip does **not** ship CurseForge mod JARs or a preinstalled Forge. On first run the launcher installs Forge, downloads server-side mods from metadata, then starts the server.

Release artifact name: **`GregTech-Odyssey-server.zip`** (matches GitHub Releases / CI).

## Requirements

- **Java 21+** (JDK or JRE; [Eclipse Temurin 21](https://adoptium.net/) recommended)
- Network access to CurseForge / Maven (first-run Forge install and mod downloads)  
  - Forge installer: **official Maven first**, then **[BMCLAPI](https://bmclapidoc.bangbang93.com/)** fallback
- Windows 10/11 or Windows Server 2016+ (`.bat` / `.ps1`), or Linux / macOS (`.sh`)
- **8GB+** RAM recommended (default JVM: `-Xms8G -Xmx8G` in `user_jvm_args.txt`)

## Quick start

### Windows

1. Download `GregTech-Odyssey-server.zip` from [Releases](https://github.com/GregTech-Odyssey/GregTech-Odyssey/releases)
2. Extract. If you get a nested `server/` folder, **open that folder** before launching
3. Double-click `start-server.bat`  
   - If PowerShell blocks scripts:  
     `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`
4. First run installs Forge and downloads mods, then starts the server

### Linux / macOS

```bash
# If the zip has a server/ directory, cd into it first
chmod +x start-server.sh
./start-server.sh
```

## What is in the package

| Content | Bundled? | Notes |
|---------|----------|--------|
| `config/`, `defaultconfigs/` | Yes | Server configs |
| `pack.toml`, `index.toml` | Yes | Pack metadata / index |
| `mods/*.pw.toml` | Yes | packwiz metadata for download (client-only entries omitted) |
| `mods/gtocore-forge-*.jar`, `mods/gtonativelib-*.jar` | **Yes** | Local core mods (not on CurseForge) |
| Other mod JARs | **No** | Downloaded on first run |
| Forge / `libraries/` / `unix_args.txt` | **No** | Installed on first run |

## First-run flow

1. Detect **Java 21+**
2. Install **Forge** (versions from `pack.toml`; installer JAR: official Maven then BMCLAPI; libraries still fetched by the installer)
3. Download server mods from `mods/*.pw.toml`
4. Start the Forge server (`nogui`)

Later runs skip steps that are already done.

## Layout

### As shipped (before first run)

```
. (or server/)
├── mods/
│   ├── gtocore-forge-*.jar      # bundled core mods
│   ├── gtonativelib-*.jar
│   └── *.pw.toml                # download metadata
├── config/
├── defaultconfigs/
├── pack.toml
├── index.toml
├── user_jvm_args.txt
├── start-server.bat
├── start-server.ps1
├── start-server.sh
└── README.md
```

### After a successful first start (examples)

```
├── libraries/
├── unix_args.txt (or under libraries/)
├── world/
├── logs/
└── mods/*.jar                   # downloaded mods
```

## Updating mods

**Do not delete the entire `mods/` folder.**  
`gtocore-forge-*.jar` and `gtonativelib-*.jar` **cannot** be re-downloaded by the launcher. Removing them breaks the server until you restore them from a full server zip.

Recommended:

1. **Full upgrade**: download a new `GregTech-Odyssey-server.zip` and migrate `world/` / custom configs
2. **Re-fetch a broken downloadable mod**: delete that JAR only (keep the two core JARs), then re-run the launcher. Metadata (`*.pw.toml`) is removed only after that JAR downloads successfully; failed/unresolved entries are kept for retry. If metadata is already gone, re-extract it from the server zip

## Stopping the server

Press **Ctrl+C** in the launcher console, or type `stop` at the server prompt.

## Troubleshooting

| Problem | What to try |
|---------|-------------|
| `Java 21 or later not found` | Install Java 21+ or set `JAVA_HOME` |
| `Download failed` (Forge or mods) | The launcher prints the **reason** and URL. Forge installer tries **official Maven → BMCLAPI**; if the installer runs but fails, libraries still need direct Maven access (mirror covers the installer JAR only). Mods use CurseForge CDN. Use proxy/VPN or switch DNS; delete only failed partial JARs, not the two core JARs |
| PowerShell execution policy | `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` |
| Cannot find `start-server.bat` | Enter the nested `server/` directory from the zip |
| Crash on start | Check `logs/latest.log`; ensure core JARs remain under `mods/` |
| Out of memory | Lower `-Xms` / `-Xmx` in `user_jvm_args.txt` |

## Links

- Repository: [GregTech-Odyssey/GregTech-Odyssey](https://github.com/GregTech-Odyssey/GregTech-Odyssey)
- Releases: [Releases](https://github.com/GregTech-Odyssey/GregTech-Odyssey/releases)
