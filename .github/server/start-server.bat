@echo off
REM GregTech Odyssey Server Launcher
REM Calls PowerShell script for reliable downloading
powershell -ExecutionPolicy Bypass -File "%~dp0start-server.ps1" %*
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo If PowerShell is not available, please install PowerShell or use start-server.ps1 directly.
    pause
)
