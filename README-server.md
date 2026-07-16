# GregTech Odyssey Server Pack

**English** | [中文](#中文)

---

## Overview

This is a lightweight server package for GregTech Odyssey modpack. Mods are not included in the package - they are automatically downloaded from CurseForge on first run.

## Requirements

- **Java 21+** (JDK or JRE)
- Internet connection (for downloading mods)
- Windows 10/11 or Windows Server 2016+ (for `.bat`/`.ps1`)
- Linux or macOS (for `.sh`)

## Quick Start

### Windows

1. Download and extract `GregTech-Odyssey-server-packwiz.zip`
2. Double-click `start-server.bat`
3. Wait for mods to download (~5-10 minutes on first run)
4. Server starts automatically after download

### Linux / macOS

1. Download and extract `GregTech-Odyssey-server-packwiz.zip`
2. Run the following commands:

```bash
chmod +x start-server.sh
./start-server.sh
```

## What Happens on First Run

1. **Java Detection** - Script finds Java 21+ on your system
2. **Mod Download** - Downloads all server-compatible mods from CurseForge
3. **Server Start** - Launches Minecraft server with Forge

Subsequent runs skip the download step if mods are already present.

## Directory Structure

```
server-packwiz/
├── mods/                    # Downloaded mod JARs + metadata
├── config/                  # Mod configurations
├── defaultconfigs/          # Default configurations
├── libraries/               # Minecraft and Forge libraries
├── unix_args.txt            # Java JVM arguments
├── pack.toml                # Modpack metadata
├── index.toml               # File index
├── start-server.bat         # Windows launcher (calls PowerShell)
├── start-server.ps1         # Windows PowerShell script
├── start-server.sh          # Linux/macOS launcher
└── README.md                # This file
```

## Updating Mods

Delete the `mods/` folder and re-run the launcher to re-download all mods with latest versions.

## Stopping the Server

- **Windows**: Press `Ctrl+C` in the console window
- **Linux/macOS**: Press `Ctrl+C` in the terminal

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Java 21 or later not found" | Install [Eclipse Temurin JDK 21](https://adoptium.net/) or [Oracle JDK 21](https://www.oracle.com/java/technologies/downloads/) |
| "Failed to download [mod]" | Check internet connection, try again later |
| PowerShell execution error | Run: `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` |
| Server crashes on start | Check `logs/latest.log` for error details |

## Links

- Modpack Repository: [GregTech-Odyssey/GregTech-Odyssey](https://github.com/GregTech-Odyssey/GregTech-Odyssey)

---

# 中文

---

## 概述

这是 GregTech Odyssey 整合包的轻量级服务器端。Mod 不包含在包中，首次运行时会自动从 CurseForge 下载。

## 系统要求

- **Java 21+**（JDK 或 JRE）
- 网络连接（用于下载 Mod）
- Windows 10/11 或 Windows Server 2016+（使用 `.bat`/`.ps1`）
- Linux 或 macOS（使用 `.sh`）

## 快速开始

### Windows

1. 下载并解压 `GregTech-Odyssey-server-packwiz.zip`
2. 双击 `start-server.bat`
3. 等待 Mod 下载完成（首次约 5-10 分钟）
4. 下载完成后服务器自动启动

### Linux / macOS

1. 下载并解压 `GregTech-Odyssey-server-packwiz.zip`
2. 运行以下命令：

```bash
chmod +x start-server.sh
./start-server.sh
```

## 首次运行流程

1. **检测 Java** - 脚本查找系统中的 Java 21+
2. **下载 Mod** - 从 CurseForge 下载所有服务端兼容的 Mod
3. **启动服务器** - 使用 Forge 启动 Minecraft 服务器

后续运行会跳过下载步骤（如果 Mod 已存在）。

## 目录结构

```
server-packwiz/
├── mods/                    # 下载的 Mod JAR 文件 + 元数据
├── config/                  # Mod 配置文件
├── defaultconfigs/          # 默认配置
├── libraries/               # Minecraft 和 Forge 库文件
├── unix_args.txt            # Java JVM 参数
├── pack.toml                # 整合包元数据
├── index.toml               # 文件索引
├── start-server.bat         # Windows 启动器（调用 PowerShell）
├── start-server.ps1         # Windows PowerShell 脚本
├── start-server.sh          # Linux/macOS 启动器
└── README.md                # 本文件
```

## 更新 Mod

删除 `mods/` 文件夹后重新运行启动器，即可重新下载最新版本的 Mod。

## 停止服务器

- **Windows**: 在控制台窗口按 `Ctrl+C`
- **Linux/macOS**: 在终端按 `Ctrl+C`

## 常见问题

| 问题 | 解决方案 |
|------|----------|
| "Java 21 or later not found" | 安装 [Eclipse Temurin JDK 21](https://adoptium.net/) 或 [Oracle JDK 21](https://www.oracle.com/java/technologies/downloads/) |
| "Failed to download [mod]" | 检查网络连接，稍后重试 |
| PowerShell 执行错误 | 运行：`Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` |
| 服务器启动崩溃 | 查看 `logs/latest.log` 获取错误详情 |

## 相关链接

- 整合包仓库：[GregTech-Odyssey/GregTech-Odyssey](https://github.com/GregTech-Odyssey/GregTech-Odyssey)
