![GregTech Odyssey](https://github.com/user-attachments/assets/89f48741-a6ab-4f45-9dd6-e3669fd49cde)

<p align="center">
  <a href="https://gtodyssey.com/">官方网站</a> ·
  <a href="https://gtodyssey.com/zh-hans/start/">开始游玩</a> ·
  <a href="https://github.com/GregTech-Odyssey/GregTech-Odyssey/releases">下载</a> ·
  <a href="https://github.com/GregTech-Odyssey/GregTech-Odyssey/issues">反馈问题</a>
</p>

<p align="center">
  <a href="https://discord.gg/PxruFSbtCn"><img src="https://discordapp.com/api/guilds/1361351361257672876/widget.png" alt="Discord"></a>
  <a href="https://qm.qq.com/q/tXFd03HMki"><img src="https://img.shields.io/badge/QQ-Delta部门-12B7F5?logo=qq&logoColor=white" alt="QQ Delta部门"></a>
  <a href="https://qm.qq.com/q/dLIEOowqE8"><img src="https://img.shields.io/badge/QQ-Alpha部门(已满)-lightgrey?logo=qq&logoColor=white" alt="QQ Alpha部门（已满）"></a>
  <a href="https://qm.qq.com/q/gIWx9iUxck"><img src="https://img.shields.io/badge/QQ-Beta部门(已满)-lightgrey?logo=qq&logoColor=white" alt="QQ Beta部门（已满）"></a>
  <a href="https://qm.qq.com/q/Pm3WkA85qw"><img src="https://img.shields.io/badge/QQ-Gamma部门(已满)-lightgrey?logo=qq&logoColor=white" alt="QQ Gamma部门（已满）"></a>
</p>

<p align="center">
  <a href="README.md">English</a> | <strong>简体中文</strong>
</p>

## 简介

GregTech Odyssey（GTO）是一个以现代格雷（GregTech Modern）为核心的科技向整合包，经过深度性能优化，致力于提供多样且富有挑战的游戏体验。

- **自定义机器**：大量机制复杂而有趣的机器，以及能大幅提升产能的功能仓室。
- **科技与魔法**：收录植物魔法等魔法模组，以及提升体验的辅助模组与优化模组。
- **核心模组 GTOCore**：更多定制化的游戏流程，并实现了 ME 样板供应器的增强阻挡模式、机器跨配方并行、多线程优化等功能。

## 开始游玩

新手入门请看官网的 [开始游玩 GTO](https://gtodyssey.com/zh-hans/start/)。

### 从 Releases 下载（推荐）

在 [Releases](https://github.com/GregTech-Odyssey/GregTech-Odyssey/releases) 页面下载。标有 Latest 的是正式版，标有 Pre-release 的是开发测试版。

| 文件 | 说明 |
|---|---|
| `GregTech.Odyssey-<版本>.zip` | 客户端整合包，可导入 CurseForge 等启动器 |
| `GregTech.Odyssey-<版本>-all-locales.zip` | 同上，额外附带最新的全部社区翻译（部分版本提供） |
| `GregTech-Odyssey-server.zip` | 服务端包，按包内 `README-SERVER.md` 运行安装脚本 |

### 其他方式

- **GitHub Actions**：`main` 分支的模组或配置有改动时会自动构建，可在 [Actions](https://github.com/GregTech-Odyssey/GregTech-Odyssey/actions) 中下载构建产物（需登录 GitHub）。
- **packwiz-installer**：可以直接安装并更新 packwiz 整合包，见 [packwiz-installer 教程](https://packwiz.infra.link/tutorials/installing/packwiz-installer/)。
- **Nix (flake)**：`flake.nix` 中提供了客户端整合包与服务端包的构建。

## 参与开发

整合包的内容取舍、数值平衡与版本节奏需要整体把控，因此改动目前统一由开发团队完成。如果你想帮助 GTO 变得更好，最有效的方式是到 [Issues](https://github.com/GregTech-Odyssey/GregTech-Odyssey/issues) 提出：

- **遇到 Bug**：写明整合包版本、复现步骤、实际结果与预期结果，并附上日志或崩溃报告。
- **有想法或建议**：写明想解决的问题，以及你推荐的做法。

描述越详细，我们越能快速定位和落实。每一条 Issue 我们都会认真阅读，合适的内容会由维护者整理进后续版本。

## 许可证

本章是本整合包及 GTOCore 模组的统一许可证说明。

本项目整体以非商业用途为目的发布。除第三方内容外，本项目的任何部分均不得用于商业用途。

### 各部分许可

| 内容 | 许可 |
|---|---|
| 整合包（本仓库：模组选择、配置、脚本与整体编排） | 保留所有权利（All Rights Reserved） |
| [GTOCore](https://github.com/GregTech-Odyssey/GTOCore-Main) 代码 | [PolyForm Noncommercial 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0/) |
| GTOCore 非代码资源（原创纹理、模型、文本等） | [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) |
| GTOCore 任务数据 | 保留所有权利（All Rights Reserved） |
| GTOCore 监控器系统 | 保留所有权利（All Rights Reserved） |
| gtolib | 闭源，保留所有权利（All Rights Reserved） |
| [社区翻译](https://github.com/GregTech-Odyssey/GTO-Translations) | CC BY-NC-SA 4.0 |
| 第三方内容 | 各自的原始许可证或授权条款，见[第三方内容](#第三方内容) |

- 你可以通过官方发布渠道下载、安装和游玩本整合包，包括开设服务器；超出这一范围的复制、修改与再发布，需事先取得我们的授权。
- GTOCore 任务数据包括：`src/main/java/com/gtocore/data/quest/` 下的全部文件、`assets/gtocore/textures/quest/`、`assets/gtocore/textures/gui/quest_icons.png`、`assets/gtocore/ui/questbook.json`，以及语言文件中以 `gtocore.quest.` 开头的文本。已明确标注来源的任务内容，版权归其原作者所有。
- GTOCore 监控器系统指 `com.gtocore.common.machine.monitor` 包。
- 使用 GTOCore 代码须保留其中的版权声明与 `Required Notice` 行。

### 第三方内容

GTOCore 包含来自其他模组与资源包的代码和素材，其版权归各自的权利人所有。GTOCore 自身的许可证不会改变这些内容的许可，收录进 GTOCore 也不授予超出其原始条款的权利。本表力求完整，但可能有遗漏；无论是否列出，第三方内容都适用其原始许可证，发现遗漏会及时补上。

| 项目 | 许可 | 使用内容 |
|---|---|---|
| [Ender IO](https://github.com/Team-EnderIO/EnderIO) | CC0 1.0 | 代码、纹理：部分物品（合金、流体、水晶、传送杖等） |
| [Re:Avaritia](https://github.com/Nova-Committee/Re-Avaritia) | 代码 MIT，资源 CC BY-NC-SA 4.0 | 代码、纹理：部分物品（锭、奇点等） |
| [Darkpuppey's Modded Overhauls!](https://www.curseforge.com/minecraft/texture-packs/darkpuppeys-modded-overhauls) | 保留所有权利，经作者授权使用（[凭证](docs/darkpuppey.png)） | 纹理：部分纹理（含为龙之进化设计的变体） |
| [Mystical Agriculture](https://github.com/BlakeBr0/MysticalAgriculture) | MIT | 纹理：部分纹理（含受精精华） |
| [Draconic Evolution](https://github.com/Draconic-Inc/Draconic-Evolution) | "Don't Be a Jerk" License | 代码、纹理：部分物品（方块、核心等） |
| [GT New Horizons](https://github.com/GTNewHorizons/GT-New-Horizons-Modpack) | CC BY-NC-SA 4.0 | 代码、纹理：部分物品与纹理 |
| [Astral Sorcery](https://github.com/HellFirePvP/AstralSorcery) | 保留所有权利，经作者授权使用（[凭证](docs/AstralSorcery.md)） | 纹理：部分物品与纹理（含共鸣宝石、液态星能） |
| [GT-Not-Leisure](https://github.com/ABKQPO/GT-Not-Leisure) | LGPLv3 | 代码：部分动画 |
| [Ars Énergistique](https://github.com/62832/ArsEnergistique) | LGPLv3 | 代码：抄写台从 ME 网络取物 |
| [SuperFactoryManager](https://github.com/TeamDman/SuperFactoryManager) | MPL-2.0 | 代码：容器槽位调试工具 |

## Star 历史

[![Star History Chart](https://api.star-history.com/svg?repos=GregTech-Odyssey/GregTech-Odyssey&type=Date)](https://www.star-history.com/#GregTech-Odyssey/GregTech-Odyssey&Date)
