@echo off
REM GregTech Odyssey Server Launcher (Windows)

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
if exist ".\jdk\bin\java.exe" ( set "JAVA_CMD=.\jdk\bin\java.exe" & goto :java_found )
if exist ".\jre\bin\java.exe" ( set "JAVA_CMD=.\jre\bin\java.exe" & goto :java_found )

echo [ERROR] Java not found. Please install Java 17 or later.
echo.
pause
exit /b 1

:java_found
echo [INFO] Using Java: %JAVA_CMD%
echo.

REM Skip if mods already installed
if exist ".\mods\*.jar" (
    echo [INFO] Mods already installed, skipping...
    goto :start_server
)

REM Check required files
if not exist "pack.toml" (
    echo [ERROR] pack.toml not found. Please re-download the server pack.
    echo.
    pause
    exit /b 1
)

if not exist "index.toml" (
    echo [ERROR] index.toml not found. Please re-download the server pack.
    echo.
    pause
    exit /b 1
)

set "PACKWIZ_CMD="
if exist ".\packwiz-bin\packwiz-windows.exe" ( set "PACKWIZ_CMD=%~dp0packwiz-bin\packwiz-windows.exe" )
if "!PACKWIZ_CMD!"=="" (
    echo [ERROR] packwiz not found
    echo.
    pause
    exit /b 1
)

echo [INFO] Starting packwiz server in %~dp0...
cd /d "%~dp0"
start "packwiz-serve" /min cmd /c "cd /d "%~dp0" && "!PACKWIZ_CMD!" serve"

echo [INFO] Waiting for server to start...
timeout /t 3 /nobreak >nul

REM Test connection
set "READY=0"
for /l %%i in (1,1,10) do (
    if !READY! EQU 0 (
        curl -s http://localhost:8080/pack.toml >nul 2>nul
        if !ERRORLEVEL! EQU 0 (
            set "READY=1"
            echo [INFO] Server is ready
        ) else (
            timeout /t 1 /nobreak >nul
        )
    )
)

if !READY! EQU 0 (
    echo [WARN] Server might not be responding, trying anyway...
)

echo [INFO] Installing mods...
java -jar "%~dp0packwiz-bin\packwiz-installer-bootstrap.jar" -g -s server http://localhost:8080/pack.toml
set "INSTALL_RESULT=!ERRORLEVEL!"

echo [INFO] Stopping packwiz server...
taskkill /f /fi "WINDOWTITLE eq packwiz-serve" >nul 2>&1
taskkill /f /im packwiz.exe >nul 2>&1

if !INSTALL_RESULT! NEQ 0 (
    echo.
    echo [ERROR] Failed to install mods
    echo.
    pause
    exit /b 1
)

echo.
echo [INFO] All mods installed
echo.

:start_server
echo [INFO] Starting GregTech Odyssey server...
echo.
if exist "run.bat" (
    call run.bat nogui %*
) else if exist "forge.jar" (
    java -jar forge.jar nogui %*
) else (
    echo [ERROR] No server launcher found
    echo.
    pause
    exit /b 1
)

pause
endlocal
