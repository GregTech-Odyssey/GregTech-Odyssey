$ErrorActionPreference = "Stop"
$baseDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $baseDir

Write-Host "[INFO] GregTech Odyssey Server Launcher" -ForegroundColor Green
Write-Host "[INFO] =================================" -ForegroundColor Green
Write-Host ""

# Check Java 21+
$javaCmd = $null

function Get-JavaVersion {
    param([string]$Path)
    try {
        $output = & cmd /c "`"$Path`" -version 2>&1"
        $match = [regex]::Match($output, 'version "(\d+)')
        if ($match.Success) { return [int]$match.Groups[1].Value }
    } catch {}
    return 0
}

# Check JAVA_HOME first
if ($env:JAVA_HOME -and (Test-Path "$env:JAVA_HOME\bin\java.exe")) {
    if ((Get-JavaVersion "$env:JAVA_HOME\bin\java.exe") -ge 21) {
        $javaCmd = "$env:JAVA_HOME\bin\java.exe"
    }
}

# Check common Java 21+ locations
if (-not $javaCmd) {
    $javaPaths = @(
        ".\jdk-21*\bin\java.exe",
        ".\jdk\bin\java.exe",
        ".\jre\bin\java.exe",
        "C:\Program Files\Java\jdk-21*\bin\java.exe",
        "C:\Program Files\Eclipse Adoptium\jdk-21*.*/bin/java.exe"
    )
    foreach ($pattern in $javaPaths) {
        $found = Get-Item $pattern -ErrorAction SilentlyContinue | Select-Object -First 1
        if ($found -and (Get-JavaVersion $found.FullName) -ge 21) {
            $javaCmd = $found.FullName
            break
        }
    }
}

# Fallback: any java in PATH
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

# Download mods
$downloaded = 0
$skipped = 0

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

    if ((Test-Path "mods\$filename") -and (Get-Item "mods\$filename").Length -gt 0) {
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
            $downloaded++
        } catch {
            Write-Host "[ERROR] Failed to download $filename" -ForegroundColor Red
            Write-Host "[ERROR] URL: $url" -ForegroundColor Red
            pause
            exit 1
        }
    } else {
        $skipped++
    }
}

Write-Host "[INFO] Downloaded: $downloaded, Skipped: $skipped" -ForegroundColor Green
Write-Host ""

# Start server
Write-Host "[INFO] Starting GregTech Odyssey server..." -ForegroundColor Green
Write-Host ""

# Directly run Java instead of run.bat to keep server in same window
$serverJar = $null
if (Test-Path "forge.jar") {
    $serverJar = "forge.jar"
} elseif (Test-Path "libraries\net\minecraftforge\forge\*\forge-*.jar") {
    $serverJar = (Get-Item "libraries\net\minecraftforge\forge\*\forge-*.jar" | Select-Object -First 1).FullName
}

if ($serverJar) {
    & $javaCmd @((Get-Content "unix_args.txt" -ErrorAction SilentlyContinue) -split '\s+') -jar $serverJar nogui @args
} elseif (Test-Path "run.bat") {
    & cmd /c "run.bat nogui" @args
} else {
    Write-Host "[ERROR] No server launcher found" -ForegroundColor Red
    pause
    exit 1
}

pause
