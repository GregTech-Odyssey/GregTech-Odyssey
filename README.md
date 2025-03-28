# GregTech-Odyssey

- QQ群：1011067298

## 使用

### 导出 Curseforge 整合包

- 安装 [packwiz](https://github.com/packwiz/packwiz)
- 克隆该仓库
```
git clone https://github.com/GregTech-Odyssey/GregTech-Odyssey.git
```
- 使用 packwiz 导出
```
packwiz cf export
```

### 下载 github actions 自动构建的整合包

todo

## 开发

详细用法见 <https://packwiz.infra.link/tutorials/creating/getting-started/>

安装 [packwiz](https://github.com/packwiz/packwiz)

### 管理整合包文件

- 将文件复制至所需的文件夹 (如 `config/ftbquests/quests`)
- 执行 `packwiz refresh`
- 用 git 提交更改

### 管理模组

#### CurseForge 或 Modrinth 模组

```
packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/ex-pattern-provider
packwiz modrinth install https://modrinth.com/mod/appleskin
```

会在 `mods` 文件夹下生成 `.pw.toml` 文件记录 mod 信息，其中 `side` 声明了该 mod 是否应该存在于客户端或服务端，可取值 `both, client, server`

(可选：添加 curseforge 模组后运行 `fixup.sh` 生成下载链接，须安装 [yq](https://github.com/mikefarah/yq)，脚本来自 [Misterio77/Modpack](https://github.com/Misterio77/Modpack))

使用 `packwiz update [mod]` 更新

如更新 `mods/applied-energistics-2.pw.toml`: `packwiz update applied-energistics-2`
更新全部模组: `packwiz update --all`

#### 直接提供 jar

同管理整合包文件

#### 提供其他下载地址

需要手写 .pw.toml 文件，提供文件名，下载地址和 hash

```toml
name = "Flamingo"
filename = "flamingo.jar"
side = "both"

[download]
url = "https://example.com/flamingo.jar"

# A number of tools can generate the hash for you, including 7-zip and sha256sum
# packwiz supports a number of hashes, including sha256, sha512, sha1 and md5
hash-format = "sha256"
hash = "b22d1d8fe5752533954028172c9bf3ac01b57f40c82946a3e7b1eaff389e2b87"
```