@echo off
REM GregTech Odyssey Server Launcher

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

if not exist "index.toml" (
    echo [ERROR] index.toml not found
    echo.
    pause
    exit /b 1
)

echo [INFO] Downloading mods from index.toml...
mkdir mods 2>nul

for /f "tokens=2 delims== " %%A in ('findstr /b "file = " index.toml') do (
    set "FILE=%%~A"
    set "FILE=!FILE:"=!"
    
    if "!FILE:~0,5!"=="mods\" (
        if "!FILE:~-8!"==".pw.toml" (
            if exist "!FILE!" (
                for /f "tokens=2 delims== " %%B in ('findstr /b "download.url = " "!FILE!" 2^>nul') do (
                    set "URL=%%~B"
                    set "URL=!URL:"=!"
                    
                    for /f "tokens=2 delims== " %%C in ('findstr /b "filename = " "!FILE!" 2^>nul') do (
                        set "FILENAME=%%~C"
                        set "FILENAME=!FILENAME:"=!"
                        
                        if not exist "mods\!FILENAME!" (
                            echo [INFO] Downloading !FILENAME!...
                            curl -fsSL -o "mods\!FILENAME!" "!URL!"
                            if !ERRORLEVEL! NEQ 0 (
                                echo [ERROR] Failed to download !FILENAME!
                                echo.
                                pause
                                exit /b 1
                            )
                        )
                    )
                )
            )
        )
    )
)

echo.
echo [INFO] All mods downloaded
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
