$ErrorActionPreference = "Stop"
$baseDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $baseDir

# Fix Chinese path issues
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "[INFO] GregTech Odyssey Server Launcher" -ForegroundColor Green
Write-Host "[INFO] =================================" -ForegroundColor Green
Write-Host ""

# ============ Configuration ============
# Read versions from pack.toml
$packToml = Get-Content "pack.toml" -Raw
$mcMatch = [regex]::Match($packToml, 'minecraft\s*=\s*"([^"]*)"')
$forgeMatch = [regex]::Match($packToml, 'forge\s*=\s*"([^"]*)"')

if (-not $mcMatch.Success -or -not $forgeMatch.Success) {
    Write-Host "[ERROR] Cannot read versions from pack.toml" -ForegroundColor Red
    pause
    exit 1
}

$MC_VERSION = $mcMatch.Groups[1].Value
$FORGE_VERSION_NUM = $forgeMatch.Groups[1].Value
$FORGE_VERSION = "$MC_VERSION-$FORGE_VERSION_NUM"
$FORGE_MAVEN = "https://maven.minecraftforge.net/net/minecraftforge/forge/$FORGE_VERSION/forge-$FORGE_VERSION-installer.jar"

Write-Host "[INFO] Minecraft: $MC_VERSION, Forge: $FORGE_VERSION_NUM" -ForegroundColor Green
Write-Host ""

# ============ Check Java 21+ ============
$javaCmd = $null

function Get-JavaVersion {
    param([string]$Path)
    try {
        $p = New-Object System.Diagnostics.Process
        $p.StartInfo.FileName = $Path
        $p.StartInfo.Arguments = "-version"
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

if ($env:JAVA_HOME -and (Test-Path "$env:JAVA_HOME\bin\java.exe")) {
    if ((Get-JavaVersion "$env:JAVA_HOME\bin\java.exe") -ge 21) {
        $javaCmd = "$env:JAVA_HOME\bin\java.exe"
    }
}

if (-not $javaCmd) {
    $javaPaths = @(
        ".\jdk-21*\bin\java.exe",
        ".\jdk\bin\java.exe",
        ".\jre\bin\java.exe",
        "C:\Program Files\Java\jdk-21*\bin\java.exe",
        "C:\Program Files\Eclipse Adoptium\jdk-21*\bin\java.exe"
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
    if ((Get-JavaVersion "java") -ge 21) {
        $javaCmd = "java"
    }
}

if (-not $javaCmd) {
    Write-Host "[ERROR] Java 21 or later not found. Please install Java 21+." -ForegroundColor Red
    pause
    exit 1
}
Write-Host "[INFO] Using Java: $javaCmd" -ForegroundColor Green
Write-Host ""

# ============ Helpers ============
function Test-ForgeInstalled {
    if (Test-Path "win_args.txt") { return $true }
    if (Test-Path "unix_args.txt") { return $true }
    if (Get-ChildItem -Path "libraries" -Recurse -Filter "win_args.txt" -ErrorAction SilentlyContinue | Select-Object -First 1) { return $true }
    if (Get-ChildItem -Path "libraries" -Recurse -Filter "unix_args.txt" -ErrorAction SilentlyContinue | Select-Object -First 1) { return $true }
    return $false
}

function Find-ForgeArgsFile {
    # Prefer Windows args on Windows; fall back to unix_args only if needed.
    $preferWin = $IsWindows -or $env:OS -eq "Windows_NT"
    $names = if ($preferWin) { @("win_args.txt", "unix_args.txt") } else { @("unix_args.txt", "win_args.txt") }
    foreach ($name in $names) {
        if (Test-Path $name) { return (Resolve-Path $name).Path }
        $found = Get-ChildItem -Path "libraries" -Recurse -Filter $name -ErrorAction SilentlyContinue | Select-Object -First 1
        if ($found) { return $found.FullName }
    }
    return $null
}

# ============ Install Forge if not present ============
if (-not (Test-ForgeInstalled)) {
    Write-Host "[INFO] Forge not installed. Downloading..." -ForegroundColor Yellow

    # Download Forge installer with retry
    $installerPath = "forge-$FORGE_VERSION-installer.jar"
    if (-not (Test-Path $installerPath)) {
        Write-Host "[INFO] Downloading Forge installer..." -ForegroundColor Green
        $success = $false
        for ($i = 1; $i -le 3; $i++) {
            try {
                $ProgressPreference = 'SilentlyContinue'
                Invoke-WebRequest -Uri $FORGE_MAVEN -OutFile $installerPath -UseBasicParsing -Headers @{
                    'User-Agent' = 'Mozilla/5.0'
                }
                $success = $true
                break
            } catch {
                Write-Host "[WARN] Download attempt $i/3 failed, retrying..." -ForegroundColor Yellow
                Start-Sleep -Seconds 3
            }
        }
        if (-not $success) {
            Write-Host "[ERROR] Failed to download Forge installer after 3 attempts" -ForegroundColor Red
            pause
            exit 1
        }
    }

    # Install Forge
    Write-Host "[INFO] Installing Forge..." -ForegroundColor Green
    
    $process = Start-Process -FilePath $javaCmd -ArgumentList "-jar", $installerPath, "--installServer" -NoNewWindow -Wait -PassThru -RedirectStandardOutput "$env:TEMP\forge-install.log" -RedirectStandardError "$env:TEMP\forge-install-err.log"
    
    if ($process.ExitCode -ne 0) {
        Write-Host "[ERROR] Forge installation failed" -ForegroundColor Red
        $errorLog = Get-Content "$env:TEMP\forge-install-err.log" -Tail 5
        Write-Host "[ERROR] $errorLog" -ForegroundColor Red
        pause
        exit 1
    }

    # Cleanup
    Remove-Item $installerPath -Force -ErrorAction SilentlyContinue
    Get-ChildItem -Path "." -Filter "forge-*.log" -ErrorAction SilentlyContinue | Remove-Item -Force -ErrorAction SilentlyContinue
    Remove-Item "run.sh", "run.bat" -Force -ErrorAction SilentlyContinue
    Remove-Item "$env:TEMP\forge-install.log", "$env:TEMP\forge-install-err.log" -Force -ErrorAction SilentlyContinue
    Write-Host "[INFO] Forge installed successfully" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "[INFO] Forge already installed" -ForegroundColor Green
    Write-Host ""
}

# ============ Download mods ============
$downloaded = 0
$skipped = 0
$unresolved = 0
$cleanedMeta = 0

$pwTomls = Get-ChildItem -Path "mods" -Filter "*.pw.toml" -ErrorAction SilentlyContinue

foreach ($toml in $pwTomls) {
    $content = Get-Content $toml.FullName -Raw

    $sideMatch = [regex]::Match($content, '^side\s*=\s*"([^"]*)"', 'Multiline')
    if ($sideMatch.Success -and $sideMatch.Groups[1].Value -eq "client") {
        $skipped++
        continue
    }

    $filenameMatch = [regex]::Match($content, '^filename\s*=\s*"([^"]*)"', 'Multiline')
    if (-not $filenameMatch.Success) {
        $skipped++
        continue
    }
    $filename = $filenameMatch.Groups[1].Value

    # JAR already present and non-empty: drop only this metadata file
    if ((Test-Path "mods\$filename") -and (Get-Item "mods\$filename").Length -gt 0) {
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
            $url = "https://edge.forgecdn.net/files/$prefix/$suffix/$encodedFilename"
        }
    }

    if ($url) {
        Write-Host "[INFO] Downloading $filename..." -ForegroundColor Green
        try {
            $ProgressPreference = 'SilentlyContinue'
            Invoke-WebRequest -Uri $url -OutFile "mods\$filename" -UseBasicParsing -Headers @{
                'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                'Referer' = 'https://www.curseforge.com/'
            }
            # Validate download
            $file = Get-Item "mods\$filename" -ErrorAction SilentlyContinue
            if (-not $file -or $file.Length -lt 1024) {
                Remove-Item "mods\$filename" -Force -ErrorAction SilentlyContinue
                Write-Host "[ERROR] Invalid download for $filename (file too small or empty)" -ForegroundColor Red
                Write-Host "[ERROR] URL: $url" -ForegroundColor Red
                Write-Host "[ERROR] Metadata kept for retry: $($toml.Name)" -ForegroundColor Red
                pause
                exit 1
            }
            # Only remove metadata after a validated successful download
            Remove-Item $toml.FullName -Force -ErrorAction SilentlyContinue
            $cleanedMeta++
            $downloaded++
        } catch {
            Remove-Item "mods\$filename" -Force -ErrorAction SilentlyContinue
            Write-Host "[ERROR] Failed to download $filename" -ForegroundColor Red
            Write-Host "[ERROR] URL: $url" -ForegroundColor Red
            Write-Host "[ERROR] Metadata kept for retry: $($toml.Name)" -ForegroundColor Red
            pause
            exit 1
        }
    } else {
        Write-Host "[WARN] No download URL for $filename — keeping $($toml.Name) for retry" -ForegroundColor Yellow
        $unresolved++
    }
}

Write-Host "[INFO] Downloaded: $downloaded, Skipped: $skipped, Unresolved: $unresolved, Metadata removed: $cleanedMeta" -ForegroundColor Green
if ($unresolved -gt 0) {
    Write-Host "[WARN] $unresolved mod(s) have no URL; server may be missing mods. Re-extract pack metadata or fix network, then re-run." -ForegroundColor Yellow
}
Write-Host ""

# ============ Start server ============
Write-Host "[INFO] Starting GregTech Odyssey server..." -ForegroundColor Green
Write-Host ""

# Auto agree EULA
if (-not (Test-Path "eula.txt") -or (Get-Content "eula.txt" -Raw) -notmatch "eula=true") {
    Set-Content -Path "eula.txt" -Value "eula=true"
    Write-Host "[INFO] EULA accepted" -ForegroundColor Green
}

# Prefer win_args.txt on Windows (correct separators); unix_args only as fallback
$argsFile = Find-ForgeArgsFile

if (-not $argsFile) {
    Write-Host "[ERROR] Forge args file not found (win_args.txt / unix_args.txt)" -ForegroundColor Red
    pause
    exit 1
}
Write-Host "[INFO] Using args file: $argsFile" -ForegroundColor Green

# Read user_jvm_args.txt if exists
$userArgs = @()
if (Test-Path "user_jvm_args.txt") {
    $userArgs = @(Get-Content "user_jvm_args.txt" | Where-Object { $_ -notmatch '^\s*#' -and $_.Trim() -ne "" } | ForEach-Object { $_.Trim() } | Where-Object { $_ -ne "" })
}

$jvmArgs = (Get-Content $argsFile -Raw) -replace "`r`n", " " -replace "`n", " "
$jvmArgs = @(($jvmArgs -split '\s+') | Where-Object { $_ -ne "" })

# Colon rewrite only when forced to use unix_args on Windows (win_args already has ';')
$usingUnixArgs = ([System.IO.Path]::GetFileName($argsFile) -eq "unix_args.txt")
if ($usingUnixArgs -and ($IsWindows -or $env:OS -eq "Windows_NT")) {
    Write-Host "[WARN] Falling back to unix_args.txt on Windows; rewriting classpath separators" -ForegroundColor Yellow
    $jvmArgs = @($jvmArgs | ForEach-Object {
        if ($_ -match '^[a-zA-Z]:\\') { $_ }
        elseif ($_ -match ':') { $_ -replace ':', ';' }
        else { $_ }
    })
}

# Forward extra args from start-server.bat / powershell (... %* / $args)
& $javaCmd @userArgs @jvmArgs nogui @args

pause
