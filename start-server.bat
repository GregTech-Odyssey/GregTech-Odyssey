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
    set "PACKWIZ_CMD=.\packwiz.exe"
    echo [INFO] packwiz found
    goto :packwiz_found
)

if exist ".\packwiz-bin\packwiz-windows.exe" (
    set "PACKWIZ_CMD=.\packwiz-bin\packwiz-windows.exe"
    echo [INFO] packwiz found
    goto :packwiz_found
)

echo [ERROR] packwiz not found. Please re-download the server pack.
echo.
pause
exit /b 1

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
