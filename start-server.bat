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

echo [INFO] Downloading server mods...
mkdir mods 2>nul

set "DOWNLOADED=0"
set "SKIPPED=0"

for %%F in (mods\*pw.toml) do (
    set "TOML=%%F"
    set "SKIP=0"
    set "URL="
    set "FILENAME="
    set "FILE_ID="
    
    for /f "tokens=2 delims== " %%B in ('findstr /b "side = " "!TOML!" 2^>nul') do (
        set "SIDE=%%~B"
        set "SIDE=!SIDE:"=!"
        if "!SIDE!"=="client" set "SKIP=1"
    )
    
    for /f "tokens=2 delims== " %%C in ('findstr /b "filename = " "!TOML!" 2^>nul') do (
        set "FILENAME=%%~C"
        set "FILENAME=!FILENAME:"=!"
    )
    
    if "!SKIP!"=="0" if not "!FILENAME!"=="" (
        if exist "mods\!FILENAME!" (
            set /a SKIPPED+=1
        ) else (
            for /f "tokens=2 delims== " %%D in ('findstr /b "url = " "!TOML!" 2^>nul') do (
                set "URL=%%~D"
                set "URL=!URL:"=!"
            )
            
            if "!URL!"=="" (
                for /f "tokens=2 delims== " %%E in ('findstr /b "file-id = " "!TOML!" 2^>nul') do (
                    set "FILE_ID=%%~E"
                )
                if not "!FILE_ID!"=="" (
                    set "PREFIX=!FILE_ID:~0,4!"
                    set "SUFFIX=!FILE_ID:~4!"
                    powershell -Command "$u='https://edge.forgecdn.net/files/!PREFIX!/!SUFFIX!/' + [uri]::EscapeDataString('!FILENAME!'); $u" > "%TEMP%\url.txt" 2>nul
                    set /p URL=<"%TEMP%\url.txt"
                )
            )
            
            if not "!URL!"=="" (
                echo [INFO] Downloading !FILENAME!...
                powershell -Command "try { $ProgressPreference='SilentlyContinue'; Invoke-WebRequest -Uri '!URL!' -OutFile 'mods\!FILENAME!' -UseBasicParsing -Headers @{'User-Agent'='Mozilla/5.0'; 'Referer'='https://www.curseforge.com/'}; exit 0 } catch { exit 1 }"
                if !ERRORLEVEL! EQU 0 (
                    set /a DOWNLOADED+=1
                ) else (
                    echo [ERROR] Failed to download !FILENAME!
                    echo.
                    pause
                    exit /b 1
                )
            ) else (
                set /a SKIPPED+=1
            )
        )
    )
)

echo.
echo [INFO] Downloaded: !DOWNLOADED!, Skipped: !SKIPPED!
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
