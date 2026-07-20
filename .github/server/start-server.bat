@echo off
REM GregTech Odyssey Server Launcher
REM Calls PowerShell script for reliable downloading
REM UTF-8 code page helps Chinese console output; the .ps1 itself must be UTF-8 with BOM.
chcp 65001 >nul
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-server.ps1" %*
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo If PowerShell is not available, please install PowerShell or use start-server.ps1 directly.
    pause
)
