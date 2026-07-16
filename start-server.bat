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

REM Test if packwiz in PATH actually works
where packwiz >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    packwiz version >nul 2>nul
    if !ERRORLEVEL! EQU 0 (
        set "PACKWIZ_CMD=packwiz"
        echo [INFO] packwiz found in PATH
        goto :packwiz_found
    )
)

if exist ".\packwiz.exe" (
    .\packwiz.exe version >nul 2>nul
    if !ERRORLEVEL! EQU 0 (
        set "PACKWIZ_CMD=.\packwiz.exe"
        echo [INFO] packwiz found
        goto :packwiz_found
    )
)

echo [INFO] Installing packwiz...

where go >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [INFO] Go found, installing packwiz via go install...
    go install github.com/packwiz/packwiz@latest
    if %ERRORLEVEL% EQU 0 (
        set "PACKWIZ_CMD=%USERPROFILE%\go\bin\packwiz.exe"
        if exist "!PACKWIZ_CMD!" (
            "!PACKWIZ_CMD!" version >nul 2>nul
            if !ERRORLEVEL! EQU 0 (
                echo [INFO] packwiz installed successfully
                goto :packwiz_found
            )
        )
    )
)

where scoop >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [INFO] Installing packwiz via scoop...
    scoop install packwiz
    if %ERRORLEVEL% EQU 0 (
        set "PACKWIZ_CMD=packwiz"
        echo [INFO] packwiz installed successfully
        goto :packwiz_found
    )
)

where choco >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [INFO] Installing packwiz via chocolatey...
    choco install packwiz -y
    if %ERRORLEVEL% EQU 0 (
        set "PACKWIZ_CMD=packwiz"
        echo [INFO] packwiz installed successfully
        goto :packwiz_found
    )
)

echo.
echo [ERROR] Could not install packwiz automatically.
echo Please install packwiz manually using one of these methods:
echo   1. Go: go install github.com/packwiz/packwiz@latest
echo   2. Scoop: scoop install packwiz
echo   3. Chocolatey: choco install packwiz
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
