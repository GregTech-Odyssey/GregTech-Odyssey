$ErrorActionPreference = "Stop"
$baseDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $baseDir

Write-Host "[INFO] GregTech Odyssey Server Launcher" -ForegroundColor Green
Write-Host "[INFO] =================================" -ForegroundColor Green
Write-Host ""

# Check Java
$javaCmd = $null
if (Get-Command java -ErrorAction SilentlyContinue) {
    $javaCmd = "java"
} elseif (Test-Path ".\jdk\bin\java.exe") {
    $javaCmd = ".\jdk\bin\java.exe"
} elseif (Test-Path ".\jre\bin\java.exe") {
    $javaCmd = ".\jre\bin\java.exe"
} else {
    Write-Host "[ERROR] Java not found. Please install Java 17 or later." -ForegroundColor Red
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
if (Test-Path "run.bat") {
    & .\run.bat nogui @args
} elseif (Test-Path "forge.jar") {
    & $javaCmd -jar forge.jar nogui @args
} else {
    Write-Host "[ERROR] No server launcher found" -ForegroundColor Red
    pause
    exit 1
}

pause
