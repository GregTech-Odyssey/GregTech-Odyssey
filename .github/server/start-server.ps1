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

function Get-FileSha1Hex {
    param([string]$FilePath)
    $sha1 = [System.Security.Cryptography.SHA1]::Create()
    $fs = [System.IO.File]::OpenRead($FilePath)
    try {
        $hash = $sha1.ComputeHash($fs)
        return (-join ($hash | ForEach-Object { $_.ToString('x2') }))
    } finally {
        $fs.Dispose()
        $sha1.Dispose()
    }
}

function Get-BmclapiMirrorUrl {
    param([string]$Url)
    if ([string]::IsNullOrWhiteSpace($Url)) { return $null }
    # BMCLAPI maven mirror: https://bmclapidoc.bangbang93.com/
    if ($Url -match '^https?://maven\.minecraftforge\.net/(.+)$') {
        return 'https://bmclapi2.bangbang93.com/maven/' + $Matches[1]
    }
    if ($Url -match '^https?://maven\.creeperhost\.net/(.+)$') {
        return 'https://bmclapi2.bangbang93.com/maven/' + $Matches[1]
    }
    if ($Url -match '^https?://libraries\.minecraft\.net/(.+)$') {
        return 'https://bmclapi2.bangbang93.com/' + $Matches[1]
    }
    if ($Url -match '^https?://launcher\.mojang\.com/(.+)$') {
        return 'https://bmclapi2.bangbang93.com/' + $Matches[1]
    }
    if ($Url -match '^https?://piston-data\.mojang\.com/(.+)$') {
        return 'https://bmclapi2.bangbang93.com/' + $Matches[1]
    }
    if ($Url -match '^https?://piston-meta\.mojang\.com/(.+)$') {
        return 'https://bmclapi2.bangbang93.com/' + $Matches[1]
    }
    return $null
}

function Get-RemoteFileTimed {
    param(
        [string]$Url,
        [string]$OutFile,
        [int]$TimeoutSec = 60
    )
    $dir = Split-Path -Parent $OutFile
    if ($dir -and -not (Test-Path $dir)) {
        New-Item -ItemType Directory -Force -Path $dir | Out-Null
    }
    $tmp = $OutFile + '.part'
    Remove-Item -LiteralPath $tmp -Force -ErrorAction SilentlyContinue

    # Prefer curl.exe (Win10+) for reliable timeouts; fallback to HttpWebRequest.
    $curl = Get-Command curl.exe -ErrorAction SilentlyContinue
    if ($curl) {
        $args = @(
            '-fL', '--retry', '2', '--retry-delay', '1',
            '--connect-timeout', '20', '--max-time', ([string]$TimeoutSec),
            '-A', 'Mozilla/5.0',
            '-o', $tmp, $Url
        )
        $p = Start-Process -FilePath $curl.Source -ArgumentList $args -NoNewWindow -Wait -PassThru
        if ($p.ExitCode -ne 0) {
            Remove-Item -LiteralPath $tmp -Force -ErrorAction SilentlyContinue
            throw ('curl exit ' + $p.ExitCode + ' for ' + $Url)
        }
    } else {
        $req = [System.Net.HttpWebRequest]::Create($Url)
        $req.Method = 'GET'
        $req.Timeout = $TimeoutSec * 1000
        $req.ReadWriteTimeout = $TimeoutSec * 1000
        $req.UserAgent = 'Mozilla/5.0'
        $req.AllowAutoRedirect = $true
        $resp = $null
        $stream = $null
        $fs = $null
        try {
            $resp = $req.GetResponse()
            $stream = $resp.GetResponseStream()
            $fs = [System.IO.File]::Open($tmp, [System.IO.FileMode]::Create, [System.IO.FileAccess]::Write)
            $stream.CopyTo($fs)
        } finally {
            if ($fs) { $fs.Dispose() }
            if ($stream) { $stream.Dispose() }
            if ($resp) { $resp.Dispose() }
        }
    }

    $file = Get-Item -LiteralPath $tmp -ErrorAction SilentlyContinue
    if (-not $file -or $file.Length -lt 64) {
        Remove-Item -LiteralPath $tmp -Force -ErrorAction SilentlyContinue
        throw 'Downloaded file too small or empty'
    }
    Move-Item -LiteralPath $tmp -Destination $OutFile -Force
}

function Get-InstallerJsonText {
    param(
        [string]$InstallerJar,
        [string]$EntryName
    )
    Add-Type -AssemblyName System.IO.Compression.FileSystem -ErrorAction SilentlyContinue
    $zip = [System.IO.Compression.ZipFile]::OpenRead((Resolve-Path $InstallerJar).Path)
    try {
        $entry = $zip.Entries | Where-Object { $_.FullName -eq $EntryName } | Select-Object -First 1
        if (-not $entry) { return $null }
        $reader = New-Object System.IO.StreamReader($entry.Open())
        try { return $reader.ReadToEnd() } finally { $reader.Dispose() }
    } finally {
        $zip.Dispose()
    }
}

function Get-ForgeLibraryArtifacts {
    param([string]$InstallerJar)
    $items = New-Object System.Collections.Generic.List[object]
    foreach ($name in @('install_profile.json', 'version.json')) {
        $raw = Get-InstallerJsonText -InstallerJar $InstallerJar -EntryName $name
        if (-not $raw) { continue }
        $json = $raw | ConvertFrom-Json
        if (-not $json.libraries) { continue }
        foreach ($lib in $json.libraries) {
            $art = $lib.downloads.artifact
            if (-not $art -or -not $art.path -or -not $art.url) { continue }
            $items.Add([pscustomobject]@{
                Path = [string]$art.path
                Url  = [string]$art.url
                Sha1 = [string]$art.sha1
            })
        }
    }
    return @($items | Sort-Object Path -Unique)
}

function Install-ForgeLibrariesPrefetch {
    param(
        [string]$InstallerJar,
        [string]$LibrariesRoot = 'libraries'
    )
    $artifacts = @(Get-ForgeLibraryArtifacts -InstallerJar $InstallerJar)
    if ($artifacts.Count -eq 0) {
        Write-Host '[WARN] No library list found in installer; skipping prefetch.' -ForegroundColor Yellow
        return
    }

    Write-Host ('[INFO] Prefetching ' + $artifacts.Count + ' Forge libraries (official then BMCLAPI)...') -ForegroundColor Green
    Write-Host '[INFO] 预下载 Forge 依赖库（先官方，失败再 BMCLAPI）；安装阶段会显示实时日志。' -ForegroundColor Green

    $ok = 0
    $skip = 0
    $fail = 0
    $i = 0
    foreach ($art in $artifacts) {
        $i++
        $dest = Join-Path $LibrariesRoot ($art.Path -replace '/', [IO.Path]::DirectorySeparatorChar)
        $need = $true
        if (Test-Path -LiteralPath $dest) {
            if ($art.Sha1) {
                try {
                    if ((Get-FileSha1Hex -FilePath $dest) -eq $art.Sha1.ToLowerInvariant()) {
                        $need = $false
                    }
                } catch { $need = $true }
            } else {
                if ((Get-Item -LiteralPath $dest).Length -gt 64) { $need = $false }
            }
        }
        if (-not $need) {
            $skip++
            continue
        }

        $name = Split-Path $art.Path -Leaf
        Write-Host ('[INFO] [' + $i + '/' + $artifacts.Count + '] ' + $name) -ForegroundColor Cyan

        $candidates = New-Object System.Collections.Generic.List[object]
        $candidates.Add([pscustomobject]@{ Name = 'official'; Url = $art.Url })
        $mirror = Get-BmclapiMirrorUrl -Url $art.Url
        if ($mirror) {
            $candidates.Add([pscustomobject]@{ Name = 'BMCLAPI'; Url = $mirror })
        }

        $got = $false
        foreach ($c in $candidates) {
            try {
                Write-Host ('[INFO]   try ' + $c.Name + ': ' + $c.Url) -ForegroundColor DarkGray
                Get-RemoteFileTimed -Url $c.Url -OutFile $dest -TimeoutSec 90
                if ($art.Sha1) {
                    $actual = Get-FileSha1Hex -FilePath $dest
                    if ($actual -ne $art.Sha1.ToLowerInvariant()) {
                        Remove-Item -LiteralPath $dest -Force -ErrorAction SilentlyContinue
                        throw ('SHA1 mismatch: expected ' + $art.Sha1 + ' got ' + $actual)
                    }
                }
                Write-Host ('[INFO]   ok via ' + $c.Name) -ForegroundColor Green
                $got = $true
                $ok++
                break
            } catch {
                Write-Host ('[WARN]   ' + $c.Name + ' failed: ' + $_.Exception.Message) -ForegroundColor Yellow
                Remove-Item -LiteralPath $dest -Force -ErrorAction SilentlyContinue
            }
        }
        if (-not $got) {
            $fail++
            Write-Host ('[WARN] Prefetch failed for ' + $name + ' (installer will retry)') -ForegroundColor Yellow
        }
    }
    Write-Host ('[INFO] Prefetch done: downloaded=' + $ok + ' skipped=' + $skip + ' failed=' + $fail) -ForegroundColor Green
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

    # Prefetch libraries via official + BMCLAPI so installer does not hang silently on Maven timeouts
    try {
        Install-ForgeLibrariesPrefetch -InstallerJar $installerPath -LibrariesRoot 'libraries'
    } catch {
        Write-Host ('[WARN] Library prefetch error: ' + $_.Exception.Message) -ForegroundColor Yellow
        Write-Host '[WARN] Continuing with Forge installer anyway...' -ForegroundColor Yellow
    }

    Write-Host ''
    Write-Host '[INFO] Installing Forge (live log below; library download may take several minutes)...' -ForegroundColor Green
    Write-Host '[INFO] 正在安装 Forge（下方为实时日志；拉依赖可能需数分钟，请勿关闭窗口）...' -ForegroundColor Green
    Write-Host ''

    $installLog = Join-Path $PWD 'forge-install-server.log'
    $installErr = Join-Path $PWD 'forge-install-server.err.log'
    Remove-Item -LiteralPath $installLog, $installErr -Force -ErrorAction SilentlyContinue

    # Redirect to files but stream new lines + heartbeat so the console never looks frozen
    $proc = Start-Process -FilePath $javaCmd -ArgumentList @('-jar', $installerPath, '--installServer') `
        -NoNewWindow -PassThru -RedirectStandardOutput $installLog -RedirectStandardError $installErr

    $shownOut = 0
    $shownErr = 0
    $lastActivity = Get-Date
    $lastHeartbeat = Get-Date
    while (-not $proc.HasExited) {
        Start-Sleep -Milliseconds 800
        foreach ($pair in @(
            @{ Path = $installLog; Shown = [ref]$shownOut },
            @{ Path = $installErr; Shown = [ref]$shownErr }
        )) {
            if (-not (Test-Path -LiteralPath $pair.Path)) { continue }
            $lines = @(Get-Content -LiteralPath $pair.Path -ErrorAction SilentlyContinue)
            if ($lines.Count -gt $pair.Shown.Value) {
                for ($li = $pair.Shown.Value; $li -lt $lines.Count; $li++) {
                    Write-Host $lines[$li]
                }
                $pair.Shown.Value = $lines.Count
                $lastActivity = Get-Date
            }
        }
        if (((Get-Date) - $lastActivity).TotalSeconds -ge 20 -and ((Get-Date) - $lastHeartbeat).TotalSeconds -ge 20) {
            $libCount = 0
            if (Test-Path 'libraries') {
                $libCount = @(Get-ChildItem 'libraries' -Recurse -File -ErrorAction SilentlyContinue).Count
            }
            Write-Host ('[INFO] Still installing Forge... libraries files so far: ' + $libCount + ' (network may be slow)') -ForegroundColor Yellow
            Write-Host ('[INFO] 仍在安装 Forge… 当前 libraries 文件数: ' + $libCount + '（网络慢时属正常，请耐心等待）') -ForegroundColor Yellow
            $lastHeartbeat = Get-Date
        }
    }
    $proc.WaitForExit()
    $installExit = $proc.ExitCode

    # Flush any remaining log lines
    foreach ($pair in @(
        @{ Path = $installLog; Shown = [ref]$shownOut },
        @{ Path = $installErr; Shown = [ref]$shownErr }
    )) {
        if (-not (Test-Path -LiteralPath $pair.Path)) { continue }
        $lines = @(Get-Content -LiteralPath $pair.Path -ErrorAction SilentlyContinue)
        if ($lines.Count -gt $pair.Shown.Value) {
            for ($li = $pair.Shown.Value; $li -lt $lines.Count; $li++) {
                Write-Host $lines[$li]
            }
        }
    }

    if ($installExit -ne 0 -or -not (Test-ForgeInstalled)) {
        Write-Host ''
        Write-Host ('[ERROR] Forge installation failed (exit code: ' + $installExit + ')') -ForegroundColor Red
        if (Test-Path -LiteralPath $installLog) {
            Write-Host '[ERROR] Last log lines:' -ForegroundColor Red
            Get-Content -LiteralPath $installLog -Tail 25 -ErrorAction SilentlyContinue | ForEach-Object {
                Write-Host ('[ERROR]   ' + $_) -ForegroundColor Red
            }
        }
        Write-Host ''
        Write-Host '[HINT] Installer downloads many libraries (Maven / creeperhost). Timeouts are common in CN networks.' -ForegroundColor Yellow
        Write-Host '       安装器会下载大量 libraries；国内访问 Maven 超时很常见。' -ForegroundColor Yellow
        Write-Host '       Script already tried BMCLAPI prefetch; remaining failures usually need proxy/VPN.' -ForegroundColor Yellow
        Write-Host '       脚本已尝试 BMCLAPI 预下载；仍失败时请开代理/VPN 后重试。' -ForegroundColor Yellow
        Write-Host '       Full log: forge-install-server.log' -ForegroundColor Yellow
        Write-Host '       You may delete incomplete libraries\ folder and re-run.' -ForegroundColor Yellow
        Write-Host '       可删除不完整的 libraries\ 目录后重新运行。' -ForegroundColor Yellow
        pause
        exit 1
    }

    Remove-Item $installerPath -Force -ErrorAction SilentlyContinue
    Get-ChildItem -Path '.' -Filter 'forge-*.log' -ErrorAction SilentlyContinue | Remove-Item -Force -ErrorAction SilentlyContinue
    Remove-Item 'run.sh', 'run.bat' -Force -ErrorAction SilentlyContinue
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