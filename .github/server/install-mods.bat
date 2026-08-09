@echo off
setlocal EnableExtensions DisableDelayedExpansion
cd /d "%~dp0"

echo 1. Chinese
echo 2. English
set "GTO_LANGUAGE=zh"
set /p "GTO_LANGUAGE_CHOICE=> "
if "%GTO_LANGUAGE_CHOICE%"=="2" set "GTO_LANGUAGE=en"
chcp 65001 >nul

if /I "%GTO_LANGUAGE%"=="en" goto messages_english

set "MSG_JAVA_MISSING=未找到 Java。请安装 Java 21 或更高版本后重试。"
set "MSG_JAVA_UNKNOWN=无法识别 Java 版本。"
set "MSG_JAVA_OLD=需要 Java 21 或更高版本。当前版本："
set "MSG_FORGE_INSTALLING=正在安装 Forge……"
set "MSG_FORGE_READY=Forge 已安装，跳过安装。"
set "MSG_FORGE_FAILED=Forge 安装失败。"
set "MSG_MODS_INSTALLING=正在下载并更新服务端模组……"
set "MSG_MODS_FAILED=模组安装失败。"
set "MSG_COMPLETE=安装已成功完成。请运行 run.bat 启动服务端。"
set "MSG_MISSING_FILES=安装器文件缺失。请完整解压服务端包后重试。"
set "MSG_PRESS_KEY=按任意键关闭此窗口……"
goto messages_ready

:messages_english
set "MSG_JAVA_MISSING=Java was not found. Install Java 21 or newer and try again."
set "MSG_JAVA_UNKNOWN=Unable to determine the Java version."
set "MSG_JAVA_OLD=Java 21 or newer is required. Detected version:"
set "MSG_FORGE_INSTALLING=Installing Forge..."
set "MSG_FORGE_READY=Forge is already installed."
set "MSG_FORGE_FAILED=Forge installation failed."
set "MSG_MODS_INSTALLING=Downloading and updating server mods..."
set "MSG_MODS_FAILED=Mod installation failed."
set "MSG_COMPLETE=Installation completed successfully. Run run.bat to start the server."
set "MSG_MISSING_FILES=Installer files are missing. Extract the complete server package and try again."
set "MSG_PRESS_KEY=Press any key to close this window..."

:messages_ready
where java >nul 2>&1
if errorlevel 1 goto java_missing

set "JAVA_SPEC="
for /f "tokens=2 delims==" %%V in ('java -XshowSettings:properties -version 2^>^&1 ^| findstr /C:"java.specification.version ="') do set "JAVA_SPEC=%%V"
set "JAVA_SPEC=%JAVA_SPEC: =%"
if not defined JAVA_SPEC goto java_unknown

set "JAVA_MAJOR="
for /f "tokens=1 delims=." %%V in ("%JAVA_SPEC%") do set "JAVA_MAJOR=%%V"
if not defined JAVA_MAJOR goto java_unknown
for /f "delims=0123456789" %%V in ("%JAVA_MAJOR%") do goto java_unknown
if %JAVA_MAJOR% LSS 21 goto java_too_old

set "FORGE_INSTALLER=%CD%\gto-installer\tools\forge-1.20.1-47.4.20-installer.jar"
set "PACKWIZ_INSTALLER=%CD%\gto-installer\tools\packwiz-installer-v0.5.14.jar"
set "PACK_FILE=%CD%\gto-installer\pack\pack.toml"
set "FORGE_LIBRARY=%CD%\libraries\net\minecraftforge\forge\1.20.1-47.4.20\forge-1.20.1-47.4.20-universal.jar"
set "FORGE_UNIX_ARGS=%CD%\libraries\net\minecraftforge\forge\1.20.1-47.4.20\unix_args.txt"
set "FORGE_WIN_ARGS=%CD%\libraries\net\minecraftforge\forge\1.20.1-47.4.20\win_args.txt"
set "MINECRAFT_SERVER=%CD%\libraries\net\minecraft\server\1.20.1\server-1.20.1.jar"

if not exist "%FORGE_INSTALLER%" goto missing_files
if not exist "%PACKWIZ_INSTALLER%" goto missing_files
if not exist "%PACK_FILE%" goto missing_files

if not exist "%CD%\run.sh" goto install_forge
if not exist "%CD%\run.bat" goto install_forge
if not exist "%CD%\user_jvm_args.txt" goto install_forge
if not exist "%FORGE_LIBRARY%" goto install_forge
if not exist "%FORGE_UNIX_ARGS%" goto install_forge
if not exist "%FORGE_WIN_ARGS%" goto install_forge
if not exist "%MINECRAFT_SERVER%" goto install_forge
echo %MSG_FORGE_READY%
goto install_mods

:install_forge
echo %MSG_FORGE_INSTALLING%
java -jar "%FORGE_INSTALLER%" --installServer "%CD%"
if errorlevel 1 goto forge_failed
if not exist "%CD%\run.bat" goto forge_failed
if not exist "%FORGE_LIBRARY%" goto forge_failed
if not exist "%FORGE_WIN_ARGS%" goto forge_failed

:install_mods
echo %MSG_MODS_INSTALLING%
rem The pinned installer JAR normally delegates to its bootstrapper, so call its CLI entry point directly.
java -cp "%PACKWIZ_INSTALLER%" link.infra.packwiz.installer.Main -g -s server --pack-folder "%CD%" "%PACK_FILE%"
if errorlevel 1 goto mods_failed

echo %MSG_COMPLETE%
echo %MSG_PRESS_KEY%
pause >nul
exit /b 0

:java_missing
echo %MSG_JAVA_MISSING%
goto failed

:java_unknown
echo %MSG_JAVA_UNKNOWN%
goto failed

:java_too_old
echo %MSG_JAVA_OLD% %JAVA_SPEC%
goto failed

:missing_files
echo %MSG_MISSING_FILES%
goto failed

:forge_failed
echo %MSG_FORGE_FAILED%
goto failed

:mods_failed
echo %MSG_MODS_FAILED%

:failed
echo %MSG_PRESS_KEY%
pause >nul
exit /b 1
