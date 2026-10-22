# Contributing Guidelines / 贡献指南

感谢你愿意为 GregTech Odyssey 做贡献。

本指南仅适用于 **GregTech Odyssey 整合包仓库（本仓库）**，介绍开发环境、维护要求与提交流程。同项目下其他仓库的贡献指南，请到各自仓库查询。

参与贡献前，请阅读[贡献政策](docs/CONTRIBUTION_POLICY.md)。该政策适用于 **GregTech Odyssey 项目下所有仓库**，统一说明贡献者责任和 AI 使用规范。

如果只是报告问题或提出建议，请前往 [Issues](https://github.com/GregTech-Odyssey/GregTech-Odyssey/issues)。

## 开发环境

- 使用 Git 克隆仓库；下文中的本地命令均在仓库根目录执行。需要本地管理模组、刷新索引或导出时，再安装 [packwiz](https://packwiz.infra.link/)。
- Windows 下可将 packwiz 加入 `PATH`，或将命令中的 `packwiz` 替换为 `./packwiz.exe`。

packwiz 的基础用法见[官方教程](https://packwiz.infra.link/tutorials/creating/getting-started/)。

## 文件维护

| 路径 | 用途 |
|---|---|
| `mods/` | 模组的 `.pw.toml` 元数据及仓库维护的 JAR |
| `config/`、`defaultconfigs/` | 整合包配置与默认配置 |
| `config/ftbquests/quests/` | 本仓库维护的 FTB Quests 任务源文件 |
| `.github/localization/quests/` | 本地化脚本生成的任务文件 |
| `pack.toml`、`index.toml` | 整合包信息与文件索引 |

新增、修改或删除整合包文件后，需要更新索引，可选择以下方式：

- **云端处理**：在已启用 Actions 且工作流有回写权限的仓库中，将修改提交并推送到非 `main` 分支，由 [Refresh 工作流](.github/workflows/refresh.yml) 刷新索引并自动提交结果。完成后检查工作流和自动提交，并同步到本地。
- **本地处理（可选）**：需要在本地测试、导出，或 Actions 不可用时，运行：

```sh
packwiz refresh
```

本地执行时，检查并一并提交相关文件、`index.toml` 和 `pack.toml` 的变化。不要手工填写索引中的哈希。

Refresh 也支持在 PR 创建、重新打开时运行，以及手动触发；直接推送到 `main` 不触发此工作流。云端执行失败或无法回写时，可改用本地处理。

仅修改 README、贡献文档等已被 [.packwizignore](.packwizignore) 排除的文件时，无需刷新索引。添加新的仓库文档时，也应将其排除在整合包分发内容之外。

## 模组管理

### 安装模组

优先通过 CurseForge 或 Modrinth 安装，保留下载来源与更新信息：

```sh
packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/ex-pattern-provider
packwiz modrinth install https://modrinth.com/mod/appleskin
```

检查生成的 `mods/*.pw.toml`。其中 `side` 表示安装范围，可取 `both`、`client` 或 `server`；应按模组实际用途设置，避免将客户端专用模组打入服务端。

需要提供其他下载地址时，应在 `.pw.toml` 中记录文件名、下载地址和文件哈希，格式见 [packwiz 元数据说明](https://packwiz.infra.link/reference/pack-format/mod-toml/)。

直接提供 JAR 时，先核对 `.gitignore` 与 `.packwizignore`：普通的 `mods/*.jar` 默认被排除，仓库只对部分自有模组设置了例外，不能仅复制文件便认为它会进入提交或安装包。

可选的 [fixup.sh](fixup.sh) 可整理元数据中的下载链接，脚本来自 [Misterio77/Modpack](https://github.com/Misterio77/Modpack)。运行前需准备 Bash、packwiz、`tomlq`、`jq` 和 HTTPie 的 `https` 命令；使用时指定需要处理的单个 `.pw.toml` 文件，并检查修改结果。

### 更新模组

**请勿自动更新以下模组：**

- ModernFix
- Open Parties and Claims
- Xaero's World Map
- Xaero's Minimap

上述四项已通过 `packwiz pin` 持久固定，固定状态保存在各自的 `.pw.toml` 中。日常批量更新无需重复执行 `pin`，可直接运行：

```sh
packwiz update --all
```

需要固定其他模组时，一次性执行 `packwiz pin <名称>`，并提交产生的元数据与索引变化即可。参数使用 `.pw.toml` 文件名去掉扩展名后的名称；后续 `update --all` 会跳过已固定的模组。

`update --all` 会列出可更新项后统一确认，不提供逐项勾选菜单。只更新指定模组时，仍可使用：

```sh
packwiz update applied-energistics-2
```

上述四个模组如需升级，应单独处理并验证相关功能。更新已固定的模组前需先运行 `packwiz unpin <名称>`；完成单独升级后，再用 `packwiz pin <名称>` 恢复固定。

检查模组版本、下载地址、哈希及安装范围的变化，并验证相关配置和依赖是否仍然兼容。

命令说明见 packwiz 官方文档：[pin](https://packwiz.infra.link/reference/commands/packwiz/pin/)、[unpin](https://packwiz.infra.link/reference/commands/packwiz/unpin/) 和 [update](https://packwiz.infra.link/reference/commands/packwiz/update/)。

## 任务与本地化

修改任务时，编辑 `config/ftbquests/quests/` 下的源文件。`.github/localization/quests/` 是生成目录，不要只修改其中的文件。

任务本地化与索引刷新都可交由 [Refresh 工作流](.github/workflows/refresh.yml) 在云端执行，只需要先提交任务源文件，待工作流完成后检查生成的任务文件、语言文件和索引变化。

## 本地导出与验证

可使用 packwiz 导出 CurseForge 格式的客户端安装包：

```sh
packwiz cf export
```

导出内容由当前工作区决定。

根据改动验证相关内容：模组或配置变化应检查受影响的客户端、服务端及依赖；任务变化应检查任务书显示与任务条件；涉及存档兼容的变化应使用备份或测试存档验证。

## 提交 Pull Request

保持改动范围集中，提交前检查差异，避免混入个人配置、游戏日志、存档或构建产物。

提交 PR 时，如果涉及到以下部分，请尽量说明：

- 你改了什么
- 为什么需要这个改动
- 如何测试或验证
- 是否影响存档兼容、平衡、性能、任务线或客户端/服务端行为

未完成的验证请如实说明。贡献责任与 AI 使用要求见[贡献政策](docs/CONTRIBUTION_POLICY.md)。
