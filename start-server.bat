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

echo [INFO] Downloading server mods...
mkdir mods 2>nul

for /f "tokens=2 delims== " %%A in ('findstr /b "file = " index.toml') do (
    set "FILE=%%~A"
    set "FILE=!FILE:"=!"
    
    if "!FILE:~0,5!"=="mods\" (
        if exist "!FILE!" (
            set "SKIP=0"
            set "URL="
            set "FILENAME="
            set "FILE_ID="
            
            for /f "tokens=2 delims== " %%B in ('findstr /b "side = " "!FILE!" 2^>nul') do (
                set "SIDE=%%~B"
                set "SIDE=!SIDE:"=!"
                if "!SIDE!"=="client" set "SKIP=1"
            )
            
            for /f "tokens=2 delims== " %%C in ('findstr /b "filename = " "!FILE!" 2^>nul') do (
                set "FILENAME=%%~C"
                set "FILENAME=!FILENAME:"=!"
            )
            
            if "!SKIP!"=="0" if not "!FILENAME!"=="" (
                if exist "mods\!FILENAME!" (
                    set "SKIP=1"
                ) else (
                    for /f "tokens=2 delims== " %%D in ('findstr /b "url = " "!FILE!" 2^>nul') do (
                        set "URL=%%~D"
                        set "URL=!URL:"=!"
                    )
                    
                    if "!URL!"=="" (
                        for /f "tokens=2 delims== " %%E in ('findstr /b "file-id = " "!FILE!" 2^>nul') do (
                            set "FILE_ID=%%~E"
                        )
                        if not "!FILE_ID!"=="" (
                            set "PREFIX=!FILE_ID:~0,4!"
                            set "SUFFIX=!FILE_ID:~4!"
                            set "URL=https://edge.forgecdn.net/files/!PREFIX!/!SUFFIX!/!FILENAME!"
                        )
                    )
                    
                    if not "!URL!"=="" (
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
