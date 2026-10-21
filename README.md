![GregTech Odyssey](https://github.com/user-attachments/assets/89f48741-a6ab-4f45-9dd6-e3669fd49cde)

<p align="center">
  <a href="https://gtodyssey.com/">Website</a> ·
  <a href="https://gtodyssey.com/en-us/start">How to Play</a> ·
  <a href="https://github.com/GregTech-Odyssey/GregTech-Odyssey/releases">Download</a> ·
  <a href="https://github.com/GregTech-Odyssey/GregTech-Odyssey/issues">Report an Issue</a>
</p>

<p align="center">
  <a href="https://discord.gg/PxruFSbtCn"><img src="https://discordapp.com/api/guilds/1361351361257672876/widget.png" alt="Discord"></a>
  <a href="https://qm.qq.com/q/tXFd03HMki"><img src="https://img.shields.io/badge/QQ-Delta%20Dept.-12B7F5?logo=qq&logoColor=white" alt="QQ Delta Dept."></a>
  <a href="https://qm.qq.com/q/dLIEOowqE8"><img src="https://img.shields.io/badge/QQ-Alpha%20Dept.%20(Full)-lightgrey?logo=qq&logoColor=white" alt="QQ Alpha Dept. (Full)"></a>
  <a href="https://qm.qq.com/q/gIWx9iUxck"><img src="https://img.shields.io/badge/QQ-Beta%20Dept.%20(Full)-lightgrey?logo=qq&logoColor=white" alt="QQ Beta Dept. (Full)"></a>
  <a href="https://qm.qq.com/q/Pm3WkA85qw"><img src="https://img.shields.io/badge/QQ-Gamma%20Dept.%20(Full)-lightgrey?logo=qq&logoColor=white" alt="QQ Gamma Dept. (Full)"></a>
</p>

<p align="center">
  <strong>English</strong> | <a href="README_zh.md">简体中文</a>
</p>

## Introduction

GregTech Odyssey (GTO) is a tech-oriented modpack built around GregTech Modern. It is heavily optimized for performance and aims to offer a diverse and challenging experience.

- **Custom machines**: many machines with intricate, engaging mechanics, plus functional hatches that greatly boost production.
- **Technology and magic**: magic mods such as Botania, along with quality-of-life and optimization mods.
- **GTOCore, the core mod**: more tailored progression, an enhanced blocking mode for ME Pattern Providers, cross-recipe parallelism, multithreading optimizations, and more.

## Getting Started

New players should start with [How to Play](https://gtodyssey.com/en-us/start) on our website.

### Download from Releases (Recommended)

Download from the [Releases](https://github.com/GregTech-Odyssey/GregTech-Odyssey/releases) page. Releases marked Latest are stable versions; releases marked Pre-release are development builds.

| File | Description |
|---|---|
| `GregTech.Odyssey-<version>.zip` | Client modpack, can be imported into CurseForge and other launchers |
| `GregTech.Odyssey-<version>-all-locales.zip` | Same as above, bundled with the latest community translations (available for some versions) |
| `GregTech-Odyssey-server.zip` | Server package; run the installer as described in the bundled `README-SERVER.md` |

### Other Options

- **packwiz-installer**: installs and updates packwiz modpacks directly. See the [packwiz-installer guide](https://packwiz.infra.link/tutorials/installing/packwiz-installer/).

## Contributing

Content choices, balancing, and release planning for the modpack need to be coordinated as a whole, so changes are currently made by the development team. If you would like to help make GTO better, the most effective way is to open an [Issue](https://github.com/GregTech-Odyssey/GregTech-Odyssey/issues):

- **Found a bug**: include the modpack version, steps to reproduce, the actual and expected results, and attach logs or crash reports.
- **Have an idea or suggestion**: describe the problem you want to solve and the approach you recommend.

The more detail you give, the faster we can track it down and act on it. We read every Issue carefully, and suitable ones are picked up by the maintainers for future releases.

## License

This section is the unified licensing statement for this modpack and the related mods in its repository (such as GTOCore).

This project is released for non-commercial purposes. Except for third-party content, no part of this project may be used for commercial purposes.

### Licenses by Component

| Content | License |
|---|---|
| The modpack (this repository: mod selection, configuration, scripts, and overall arrangement) | All Rights Reserved |
| [GTOCore](https://github.com/GregTech-Odyssey/GTOCore-Main) code | [PolyForm Noncommercial 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0) |
| GTOCore non-code assets (original textures, models, texts, etc.) | [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) |
| GTOCore quest data | All Rights Reserved |
| GTOCore monitor system | All Rights Reserved |
| gtolib | Closed source, All Rights Reserved |
| [Community translations](https://github.com/GregTech-Odyssey/GTO-Translations) | CC BY-NC-SA 4.0 |
| Third-party content | Their respective original licenses or permission terms, see [Third-Party Content](#third-party-content) |

- You may download, install, and play this modpack from the official release channels, including running a server for it. Any other copying, modification, or redistribution requires our prior permission.
- GTOCore quest data consists of: all files under `src/main/java/com/gtocore/data/quest/`, `assets/gtocore/textures/quest/`, `assets/gtocore/textures/gui/quest_icons.png`, `assets/gtocore/ui/questbook.json`, and language entries whose keys start with `gtocore.quest.`. Quest content with clearly indicated sources remains the copyright of its original authors.
- The GTOCore monitor system refers to the `com.gtocore.common.machine.monitor` package.
- Any use of GTOCore code must keep its copyright notices and `Required Notice` lines.

### Third-Party Content

This modpack and the related mods in its repository (such as GTOCore) include code and assets from other mods and resource packs. Copyright in such material remains with the respective rightsholders. This project's own licenses do not relicense this material, and its inclusion in the modpack or those mods grants no rights beyond its original terms. This list aims to be complete but may not be exhaustive; all third-party content, listed or not, remains subject to its original license, and omissions will be corrected as they are found.

| Project | License | Used Content |
|---|---|---|
| [Ender IO](https://github.com/Team-EnderIO/EnderIO) | CC0 1.0 | Code, textures |
| [Re:Avaritia](https://github.com/Nova-Committee/Re-Avaritia) | Code MIT, assets CC BY-NC-SA 4.0 | Code, textures |
| [Darkpuppey's Modded Overhauls!](https://www.curseforge.com/minecraft/texture-packs/darkpuppeys-modded-overhauls) | All Rights Reserved, used with the author's permission ([proof](docs/darkpuppey.png)) | Textures |
| [Mystical Agriculture](https://github.com/BlakeBr0/MysticalAgriculture) | MIT | Textures |
| [Draconic Evolution](https://github.com/Draconic-Inc/Draconic-Evolution) | "Don't Be a Jerk" License | Code, textures |
| [GT New Horizons](https://github.com/GTNewHorizons/GT-New-Horizons-Modpack) | CC BY-NC-SA 4.0 | Code, textures |
| [Astral Sorcery](https://github.com/HellFirePvP/AstralSorcery) | All Rights Reserved, used with the author's permission ([proof](docs/AstralSorcery.md)) | Textures |
| [GT-Not-Leisure](https://github.com/ABKQPO/GT-Not-Leisure) | LGPLv3 | Code |
| [Ars Énergistique](https://github.com/62832/ArsEnergistique) | LGPLv3 | Code |
| [SuperFactoryManager](https://github.com/TeamDman/SuperFactoryManager) | MPL-2.0 | Code |

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=GregTech-Odyssey/GregTech-Odyssey&type=Date)](https://www.star-history.com/#GregTech-Odyssey/GregTech-Odyssey&Date)
