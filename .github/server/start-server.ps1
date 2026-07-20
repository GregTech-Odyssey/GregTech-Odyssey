#requires -Version 5.0
# UTF-8 with BOM required: Windows PowerShell 5.1 on Chinese locales misparses UTF-8-no-BOM scripts.
$ErrorActionPreference = "Stop"
$baseDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $baseDir

# Console / path encoding (WinPS 5.1)
try {
    if ($PSVersionTable.PSVersion.Major -lt 6) {
        chcp 65001 | Out-Null
    }
    [Console]::OutputEncoding = [System.Text.Encoding]::UTF8
    $OutputEncoding = [System.Text.Encoding]::UTF8
} catch {}

Write-Host '[INFO] GregTech Odyssey Server Launcher' -ForegroundColor Green
Write-Host '[INFO] =================================' -ForegroundColor Green
Write-Host ''

# ============ Configuration ============
$packToml = Get-Content -LiteralPath 'pack.toml' -Raw -Encoding UTF8
$mcMatch = [regex]::Match($packToml, 'minecraft\s*=\s*"([^"]*)"')
$forgeMatch = [regex]::Match($packToml, 'forge\s*=\s*"([^"]*)"')

if (-not $mcMatch.Success -or -not $forgeMatch.Success) {
    Write-Host '[ERROR] Cannot read versions from pack.toml' -ForegroundColor Red
    pause
    exit 1
}

$MC_VERSION = $mcMatch.Groups[1].Value
$FORGE_VERSION_NUM = $forgeMatch.Groups[1].Value
$FORGE_VERSION = $MC_VERSION + '-' + $FORGE_VERSION_NUM
# Official first, then BMCLAPI (https://bmclapidoc.bangbang93.com/)
$FORGE_INSTALLER_SOURCES = @(
    [pscustomobject]@{
        Name = 'Forge official Maven'
        Url  = 'https://maven.minecraftforge.net/net/minecraftforge/forge/' + $FORGE_VERSION + '/forge-' + $FORGE_VERSION + '-installer.jar'
    },
    [pscustomobject]@{
        Name = 'BMCLAPI'
        Url  = 'https://bmclapi2.bangbang93.com/maven/net/minecraftforge/forge/' + $FORGE_VERSION + '/forge-' + $FORGE_VERSION + '-installer.jar'
    }
)

Write-Host ('[INFO] Minecraft: ' + $MC_VERSION + ', Forge: ' + $FORGE_VERSION_NUM) -ForegroundColor Green
Write-Host ('[INFO] Forge installer: 先尝试官方 Maven，失败后回退 BMCLAPI 镜像') -ForegroundColor Green
Write-Host ''

# ============ Check Java 21+ ============
$javaCmd = $null

function Get-JavaVersion {
    param([string]$Path)
    try {
        $p = New-Object System.Diagnostics.Process
        $p.StartInfo.FileName = $Path
        $p.StartInfo.Arguments = '-version'
        $p.StartInfo.RedirectStandardError = $true
        $p.StartInfo.RedirectStandardOutput = $true
        $p.StartInfo.UseShellExecute = $false
        $p.StartInfo.CreateNoWindow = $true
        $p.Start() | Out-Null
        $stderr = $p.StandardError.ReadToEnd()
        $p.WaitForExit()
        $match = [regex]::Match($stderr, 'version "(\d+)')
        if ($match.Success) { return [int]$match.Groups[1].Value }
    } catch {}
    return 0
}

function Write-DownloadFailureHint {
    param(
        [string]$What,
        [string]$Url,
        [string]$Reason = '',
        [string]$Extra = ''
    )
    Write-Host ''
    Write-Host ('[ERROR] ========== Download failed / 下载失败 ==========') -ForegroundColor Red
    Write-Host ('[ERROR] Target / 目标: ' + $What) -ForegroundColor Red
    if ($Url) {
        Write-Host ('[ERROR] URL: ' + $Url) -ForegroundColor Red
    }
    if ($Reason) {
        Write-Host ('[ERROR] Reason / 原因: ' + $Reason) -ForegroundColor Red
    }
    if ($Extra) {
        Write-Host ('[ERROR] ' + $Extra) -ForegroundColor Red
    }
    Write-Host ''
    Write-Host ('[HINT] Common causes (especially in mainland China) / 常见原因（中国大陆网络尤为常见）:') -ForegroundColor Yellow
    Write-Host '  1. Cannot reach CurseForge CDN or Forge Maven (blocked / unstable / DNS).' -ForegroundColor Yellow
    Write-Host ('     无法访问 CurseForge CDN / Forge Maven' + ' (屏蔽 / 不稳定 / DNS 污染).') -ForegroundColor Yellow
    Write-Host '  2. TLS/proxy/firewall interrupted the connection.' -ForegroundColor Yellow
    Write-Host ('     TLS、代理或防火墙中断了连接。') -ForegroundColor Yellow
    Write-Host '  3. Timeout or partial download due to slow/unstable network.' -ForegroundColor Yellow
    Write-Host ('     网络慢或不稳定导致超时、文件不完整。') -ForegroundColor Yellow
    Write-Host ''
    Write-Host ('[HINT] What to try / 建议处理:') -ForegroundColor Yellow
    Write-Host '  - Use a reliable proxy/VPN, then re-run this script (metadata is kept for retry).' -ForegroundColor Yellow
    Write-Host ('    使用稳定的代理/VPN 后重新运行本脚本（元数据会保留以便重试）。') -ForegroundColor Yellow
    Write-Host '  - Switch DNS (e.g. 223.5.5.5 / 1.1.1.1) and retry.' -ForegroundColor Yellow
    Write-Host ('    更换 DNS（如 223.5.5.5 / 1.1.1.1）后重试。') -ForegroundColor Yellow
    Write-Host '  - Delete only the failed partial JAR under mods\, then re-run.' -ForegroundColor Yellow
    Write-Host ('    仅删除 mods\ 下失败的不完整 JAR，再重新运行。') -ForegroundColor Yellow
    Write-Host '  - Do NOT delete gtocore-forge-*.jar / gtonativelib-*.jar (bundled core mods).' -ForegroundColor Yellow
    Write-Host ('    不要删除 gtocore-forge-*.jar / gtonativelib-*.jar（随包核心 mod）。') -ForegroundColor Yellow
    Write-Host '[ERROR] ==================================================' -ForegroundColor Red
    Write-Host ''
}

function Get-RemoteFile {
    param(
        [string]$Url,
        [string]$OutFile
    )
    $ProgressPreference = 'SilentlyContinue'
    Invoke-WebRequest -Uri $Url -OutFile $OutFile -UseBasicParsing -Headers @{
        'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
    $file = Get-Item -LiteralPath $OutFile -ErrorAction SilentlyContinue
    if (-not $file -or $file.Length -lt 1024) {
        throw 'Downloaded file too small or empty / 文件过小或为空'
    }
}

if ($env:JAVA_HOME -and (Test-Path ($env:JAVA_HOME + '\bin\java.exe'))) {
    if ((Get-JavaVersion ($env:JAVA_HOME + '\bin\java.exe')) -ge 21) {
        $javaCmd = $env:JAVA_HOME + '\bin\java.exe'
    }
}

if (-not $javaCmd) {
    $javaPaths = @(
        '.\jdk-21*\bin\java.exe',
        '.\jdk\bin\java.exe',
        '.\jre\bin\java.exe',
        'C:\Program Files\Java\jdk-21*\bin\java.exe',
        'C:\Program Files\Eclipse Adoptium\jdk-21*\bin\java.exe'
    )
    foreach ($pattern in $javaPaths) {
        $found = Get-Item $pattern -ErrorAction SilentlyContinue | Select-Object -First 1
        if ($found -and (Get-JavaVersion $found.FullName) -ge 21) {
            $javaCmd = $found.FullName
            break
        }
    }
}

if (-not $javaCmd -and (Get-Command java -ErrorAction SilentlyContinue)) {
    if ((Get-JavaVersion 'java') -ge 21) {
        $javaCmd = 'java'
    }
}

if (-not $javaCmd) {
    Write-Host '[ERROR] Java 21 or later not found. Please install Java 21+.' -ForegroundColor Red
    pause
    exit 1
}
Write-Host ('[INFO] Using Java: ' + $javaCmd) -ForegroundColor Green
Write-Host ''

# ============ Helpers ============
function Test-ForgeInstalled {
    if (Test-Path 'win_args.txt') { return $true }
    if (Test-Path 'unix_args.txt') { return $true }
    if (Get-ChildItem -Path 'libraries' -Recurse -Filter 'win_args.txt' -ErrorAction SilentlyContinue | Select-Object -First 1) { return $true }
    if (Get-ChildItem -Path 'libraries' -Recurse -Filter 'unix_args.txt' -ErrorAction SilentlyContinue | Select-Object -First 1) { return $true }
    return $false
}

function Find-ForgeArgsFile {
    $preferWin = $IsWindows -or $env:OS -eq 'Windows_NT'
    $names = if ($preferWin) { @('win_args.txt', 'unix_args.txt') } else { @('unix_args.txt', 'win_args.txt') }
    foreach ($name in $names) {
        if (Test-Path $name) { return (Resolve-Path $name).Path }
        $found = Get-ChildItem -Path 'libraries' -Recurse -Filter $name -ErrorAction SilentlyContinue | Select-Object -First 1
        if ($found) { return $found.FullName }
    }
    return $null
}

# ============ Install Forge if not present ============
if (-not (Test-ForgeInstalled)) {
    Write-Host '[INFO] Forge not installed. Downloading...' -ForegroundColor Yellow

    $installerPath = 'forge-' + $FORGE_VERSION + '-installer.jar'
    if (-not (Test-Path $installerPath)) {
        Write-Host '[INFO] Downloading Forge installer...' -ForegroundColor Green
        $success = $false
        $lastError = ''
        $lastUrl = ''
        $triedLines = New-Object System.Collections.Generic.List[string]

        foreach ($src in $FORGE_INSTALLER_SOURCES) {
            Write-Host ('[INFO] Trying source: ' + $src.Name) -ForegroundColor Green
            Write-Host ('[INFO]   ' + $src.Url) -ForegroundColor DarkGray
            $srcOk = $false
            for ($i = 1; $i -le 2; $i++) {
                try {
                    Remove-Item -LiteralPath $installerPath -Force -ErrorAction SilentlyContinue
                    Get-RemoteFile -Url $src.Url -OutFile $installerPath
                    $srcOk = $true
                    $success = $true
                    $lastUrl = $src.Url
                    Write-Host ('[INFO] 已从 ' + $src.Name + ' 下载') -ForegroundColor Green
                    break
                } catch {
                    $lastError = $_.Exception.Message
                    if ($_.Exception.InnerException) {
                        $lastError = $lastError + ' | ' + $_.Exception.InnerException.Message
                    }
                    $lastUrl = $src.Url
                    Write-Host ('[WARN] ' + $src.Name + ' attempt ' + $i + '/2 failed: ' + $lastError) -ForegroundColor Yellow
                    Start-Sleep -Seconds 2
                }
            }
            if ($srcOk) { break }
            $triedLines.Add($src.Name + ' -> ' + $src.Url + ' :: ' + $lastError)
            Write-Host ('[WARN] Source failed, trying next if any: ' + $src.Name) -ForegroundColor Yellow
        }

        if (-not $success) {
            Remove-Item -LiteralPath $installerPath -Force -ErrorAction SilentlyContinue
            $extra = 'Tried: official Maven then BMCLAPI (https://bmclapidoc.bangbang93.com/). ' + [string]::Join(' | ', $triedLines)
            Write-DownloadFailureHint -What 'Forge installer' -Url $lastUrl -Reason $lastError -Extra $extra
            pause
            exit 1
        }
    }

    Write-Host '[INFO] Installing Forge...' -ForegroundColor Green

    $process = Start-Process -FilePath $javaCmd -ArgumentList '-jar', $installerPath, '--installServer' -NoNewWindow -Wait -PassThru -RedirectStandardOutput ($env:TEMP + '\forge-install.log') -RedirectStandardError ($env:TEMP + '\forge-install-err.log')

    if ($process.ExitCode -ne 0) {
        Write-Host ('[ERROR] Forge installation failed (installer exit code: ' + $process.ExitCode + ')') -ForegroundColor Red
        $errLogPath = $env:TEMP + '\forge-install-err.log'
        if (Test-Path $errLogPath) {
            $errorLog = Get-Content $errLogPath -Tail 10 -ErrorAction SilentlyContinue
            if ($errorLog) {
                Write-Host '[ERROR] Installer stderr (tail):' -ForegroundColor Red
                $errorLog | ForEach-Object { Write-Host ('[ERROR]   ' + $_) -ForegroundColor Red }
            }
        }
        Write-Host ''
        Write-Host '[HINT] Installer may fail if libraries cannot be downloaded from Maven (network).' -ForegroundColor Yellow
        Write-Host ('       安装器若无法从 Maven 拉取 libraries，也会因网络失败。') -ForegroundColor Yellow
        Write-Host '       BMCLAPI only mirrors the installer JAR; libraries still need network/proxy.' -ForegroundColor Yellow
        Write-Host '       Use proxy/VPN and re-run; partial downloads can be cleaned then retried.' -ForegroundColor Yellow
        Write-Host ('       请使用代理/VPN 后重试；不完整文件可清理后再跑。') -ForegroundColor Yellow
        pause
        exit 1
    }

    Remove-Item $installerPath -Force -ErrorAction SilentlyContinue
    Get-ChildItem -Path '.' -Filter 'forge-*.log' -ErrorAction SilentlyContinue | Remove-Item -Force -ErrorAction SilentlyContinue
    Remove-Item 'run.sh', 'run.bat' -Force -ErrorAction SilentlyContinue
    Remove-Item ($env:TEMP + '\forge-install.log'), ($env:TEMP + '\forge-install-err.log') -Force -ErrorAction SilentlyContinue
    Write-Host '[INFO] Forge installed successfully' -ForegroundColor Green
    Write-Host ''
} else {
    Write-Host '[INFO] Forge already installed' -ForegroundColor Green
    Write-Host ''
}

# ============ Download mods ============
$downloaded = 0
$skipped = 0
$unresolved = 0
$cleanedMeta = 0

$pwTomls = Get-ChildItem -Path 'mods' -Filter '*.pw.toml' -ErrorAction SilentlyContinue

foreach ($toml in $pwTomls) {
    $content = Get-Content -LiteralPath $toml.FullName -Raw -Encoding UTF8

    $sideMatch = [regex]::Match($content, '^side\s*=\s*"([^"]*)"', 'Multiline')
    if ($sideMatch.Success -and $sideMatch.Groups[1].Value -eq 'client') {
        $skipped++
        continue
    }

    $filenameMatch = [regex]::Match($content, '^filename\s*=\s*"([^"]*)"', 'Multiline')
    if (-not $filenameMatch.Success) {
        $skipped++
        continue
    }
    $filename = $filenameMatch.Groups[1].Value

    $jarPath = Join-Path 'mods' $filename
    if ((Test-Path $jarPath) -and (Get-Item $jarPath).Length -gt 0) {
        Remove-Item $toml.FullName -Force -ErrorAction SilentlyContinue
        $cleanedMeta++
        $skipped++
        continue
    }

    $url = $null
    $urlMatch = [regex]::Match($content, '^\s*url\s*=\s*"([^"]*)"', 'Multiline')
    if ($urlMatch.Success) {
        $url = $urlMatch.Groups[1].Value
    }

    if (-not $url) {
        $fileIdMatch = [regex]::Match($content, 'file-id\s*=\s*(\d+)')
        if ($fileIdMatch.Success) {
            $fileId = $fileIdMatch.Groups[1].Value
            $prefix = $fileId.Substring(0, [Math]::Min(4, $fileId.Length))
            $suffix = $fileId.Substring([Math]::Min(4, $fileId.Length))
            $encodedFilename = [Uri]::EscapeDataString($filename)
            $url = 'https://edge.forgecdn.net/files/' + $prefix + '/' + $suffix + '/' + $encodedFilename
        }
    }

    if ($url) {
        Write-Host ('[INFO] Downloading ' + $filename + '...') -ForegroundColor Green
        try {
            Get-RemoteFile -Url $url -OutFile $jarPath
            Remove-Item $toml.FullName -Force -ErrorAction SilentlyContinue
            $cleanedMeta++
            $downloaded++
        } catch {
            Remove-Item $jarPath -Force -ErrorAction SilentlyContinue
            $reason = $_.Exception.Message
            if ($_.Exception.InnerException) {
                $reason = $reason + ' | ' + $_.Exception.InnerException.Message
            }
            if ($_.Exception.Response -and $_.Exception.Response.StatusCode) {
                $reason = 'HTTP ' + [int]$_.Exception.Response.StatusCode + ' ' + $reason
            }
            Write-DownloadFailureHint -What $filename -Url $url -Reason $reason 
                -Extra ('Metadata kept for retry: ' + $toml.Name + ' | Source: CurseForge CDN (edge.forgecdn.net)')
            pause
            exit 1
        }
    } else {
        Write-Host ('[WARN] No download URL for ' + $filename + ' - keeping ' + $toml.Name + ' for retry') -ForegroundColor Yellow
        $unresolved++
    }
}

Write-Host ('[INFO] Downloaded: ' + $downloaded + ', Skipped: ' + $skipped + ', Unresolved: ' + $unresolved + ', Metadata removed: ' + $cleanedMeta) -ForegroundColor Green
if ($unresolved -gt 0) {
    Write-Host ('[WARN] ' + $unresolved + ' mod(s) have no URL; server may be missing mods. Re-extract pack metadata or fix network, then re-run.') -ForegroundColor Yellow
}
Write-Host ''

# ============ Start server ============
Write-Host '[INFO] Starting GregTech Odyssey server...' -ForegroundColor Green
Write-Host ''

# Minecraft EULA: https://aka.ms/MinecraftEULA — require explicit consent
if (-not (Test-Path 'eula.txt') -or ((Get-Content 'eula.txt' -Raw -ErrorAction SilentlyContinue) -notmatch 'eula=true')) {
    Write-Host ''
    Write-Host '[EULA] By running this server you must agree to the Minecraft EULA:' -ForegroundColor Yellow
    Write-Host '[EULA] https://aka.ms/MinecraftEULA' -ForegroundColor Yellow
    Write-Host '[EULA] 运行此服务端即表示你必须同意 Minecraft EULA（见上方链接）。' -ForegroundColor Yellow
    Write-Host ''
    $answer = Read-Host 'Do you agree to the Minecraft EULA? [y/N] / 是否同意 Minecraft EULA？[y/N]'
    if ($answer -notmatch '^(y|Y|yes|YES)$') {
        Write-Host '[ERROR] EULA not accepted. Server will not start. / 未同意 EULA，服务端不会启动。' -ForegroundColor Red
        if (-not (Test-Path 'eula.txt')) {
            Set-Content -Path 'eula.txt' -Value "#By changing the setting below to TRUE you are indicating your agreement to our EULA (https://aka.ms/MinecraftEULA).`r`neula=false" -Encoding ASCII
        }
        pause
        exit 1
    }
    Set-Content -Path 'eula.txt' -Value "#By changing the setting below to TRUE you are indicating your agreement to our EULA (https://aka.ms/MinecraftEULA).`r`neula=true" -Encoding ASCII
    Write-Host '[INFO] EULA accepted / 已同意 EULA' -ForegroundColor Green
}

$argsFile = Find-ForgeArgsFile

if (-not $argsFile) {
    Write-Host '[ERROR] Forge args file not found (win_args.txt / unix_args.txt)' -ForegroundColor Red
    pause
    exit 1
}
Write-Host ('[INFO] Using args file: ' + $argsFile) -ForegroundColor Green

$userArgs = @()
if (Test-Path 'user_jvm_args.txt') {
    $userArgs = @(Get-Content 'user_jvm_args.txt' -Encoding UTF8 | Where-Object { $_ -notmatch '^\s*#' -and $_.Trim() -ne '' } | ForEach-Object { $_.Trim() } | Where-Object { $_ -ne '' })
}

$jvmArgs = (Get-Content $argsFile -Raw -Encoding UTF8) -replace "`r`n", ' ' -replace "`n", ' '
$jvmArgs = @(($jvmArgs -split '\s+') | Where-Object { $_ -ne '' })

$usingUnixArgs = ([System.IO.Path]::GetFileName($argsFile) -eq 'unix_args.txt')
if ($usingUnixArgs -and ($IsWindows -or $env:OS -eq 'Windows_NT')) {
    Write-Host '[WARN] Falling back to unix_args.txt on Windows; rewriting classpath separators' -ForegroundColor Yellow
    $jvmArgs = @($jvmArgs | ForEach-Object {
        if ($_ -match '^[a-zA-Z]:\\') { $_ }
        elseif ($_ -match ':') { $_ -replace ':', ';' }
        else { $_ }
    })
}

& $javaCmd @userArgs @jvmArgs nogui @args

pause