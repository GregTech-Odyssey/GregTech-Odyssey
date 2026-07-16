@echo off
REM GregTech Odyssey Server Launcher (Windows)
REM Automatically installs packwiz and downloads all required mods

setlocal enabledelayedexpansion

cd /d "%~dp0"

echo [INFO] GregTech Odyssey Server Launcher
echo [INFO] =================================
echo.

where java >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    set "JAVA_CMD=java"
    goto :java_found
)

if exist ".\jdk\bin\java.exe" (
    set "JAVA_CMD=.\jdk\bin\java.exe"
    goto :java_found
)

if exist ".\jre\bin\java.exe" (
    set "JAVA_CMD=.\jre\bin\java.exe"
    goto :java_found
)

echo [ERROR] Java not found. Please install Java 17 or later.
echo.
pause
exit /b 1

:java_found
echo [INFO] Using Java: %JAVA_CMD%
echo.

set "PACKWIZ_CMD="

if exist ".\packwiz.exe" (
    .\packwiz.exe version >nul 2>nul
    if !ERRORLEVEL! EQU 0 (
        set "PACKWIZ_CMD=.\packwiz.exe"
        echo [INFO] packwiz found
        goto :packwiz_found
    )
)

where packwiz >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    packwiz version >nul 2>nul
    if !ERRORLEVEL! EQU 0 (
        set "PACKWIZ_CMD=packwiz"
        echo [INFO] packwiz found in PATH
        goto :packwiz_found
    )
)

echo [INFO] Downloading packwiz...

where gh >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [INFO] Using gh to download packwiz...
    gh api repos/packwiz/packwiz/actions/artifacts/8109648450/zip -q . > packwiz.zip 2>nul
    if !ERRORLEVEL! EQU 0 (
        goto :extract_packwiz
    )
)

echo [INFO] Trying direct download...
curl -fsSL -H "Accept: application/octet-stream" "https://api.github.com/repos/packwiz/packwiz/actions/artifacts/8109648450/zip" -o packwiz.zip 2>nul
if %ERRORLEVEL% EQU 0 (
    goto :extract_packwiz
)

echo [ERROR] Failed to download packwiz.
echo Please download manually from:
echo https://github.com/packwiz/packwiz/actions/runs/28793198419
echo Then extract packwiz.exe to this folder.
echo.
pause
exit /b 1

:extract_packwiz
echo [INFO] Extracting packwiz...
tar -xf packwiz.zip
del packwiz.zip

if not exist ".\packwiz.exe" (
    REM Check in subdirectory
    for /d %%D in (*) do (
        if exist "%%D\packwiz.exe" (
            move "%%D\packwiz.exe" .
            rmdir "%%D" 2>nul
        )
    )
)

if not exist ".\packwiz.exe" (
    echo [ERROR] Failed to extract packwiz.exe
    echo.
    pause
    exit /b 1
)
echo [INFO] packwiz installed successfully
echo.

:packwiz_found
echo [INFO] Installing mods via packwiz...
echo.
%PACKWIZ_CMD% install --all
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Failed to install mods
    echo.
    pause
    exit /b 1
)
echo.
echo [INFO] All mods installed
echo.

echo [INFO] Starting GregTech Odyssey server...
echo.
if exist ".\run.bat" (
    call .\run.bat nogui %*
) else if exist ".\forge.jar" (
    %JAVA_CMD% -jar forge.jar nogui %*
) else (
    echo [ERROR] No server launcher found
    echo.
    pause
    exit /b 1
)

pause
endlocal
