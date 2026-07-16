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

if exist ".\mods\*.jar" (
    echo [INFO] Mods already installed, skipping...
    goto :start_server
)

if not exist ".\packwiz-bin\packwiz-installer-bootstrap.jar" (
    echo [ERROR] packwiz-installer-bootstrap.jar not found
    echo.
    pause
    exit /b 1
)

set "PACKWIZ_CMD="
if exist ".\packwiz-bin\packwiz-windows.exe" (
    set "PACKWIZ_CMD=.\packwiz-bin\packwiz-windows.exe"
) else if exist ".\packwiz.exe" (
    set "PACKWIZ_CMD=.\packwiz.exe"
)

if "!PACKWIZ_CMD!"=="" (
    echo [ERROR] packwiz CLI not found
    echo.
    pause
    exit /b 1
)

echo [INFO] Starting packwiz server...
start "packwiz-serve" /b cmd /c "!PACKWIZ_CMD!" serve

echo [INFO] Waiting for packwiz server to start...
timeout /t 5 /nobreak >nul

echo [INFO] Testing packwiz server connection...
curl -s http://localhost:8080/pack.toml >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [WARN] Server might not be ready, waiting longer...
    timeout /t 5 /nobreak >nul
)

echo [INFO] Installing mods via packwiz-installer...
%JAVA_CMD% -jar packwiz-bin\packwiz-installer-bootstrap.jar -g -s server http://localhost:8080/pack.toml
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Failed to install mods
    taskkill /f /im packwiz.exe >nul 2>&1
    pause
    exit /b 1
)

echo [INFO] Stopping packwiz server...
taskkill /f /im packwiz.exe >nul 2>&1

echo [INFO] All mods installed
echo.

:start_server
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
