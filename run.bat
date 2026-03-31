@echo off
cd /d %~dp0

REM Default: do not clean
set "DO_CLEAN=0"

REM If argument is "clean", set to clean
if /i "%~1"=="clean" set "DO_CLEAN=1"

REM Detect double-click: no arguments AND not running in interactive terminal
if "%~1"=="" (
    echo %CMDCMDLINE% | find /i "cmd.exe" >nul
    if errorlevel 1 set "DO_CLEAN=1"
)

REM Clean if needed
if %DO_CLEAN%==1 (
    echo Cleaning site...
    call bundle exec jekyll clean
)

REM Start Jekyll server
echo Starting Jekyll server...
start cmd /k "cd /d %~dp0 && bundle exec jekyll serve"

REM Open browser after slight delay
timeout /t 5 /nobreak
start http://127.0.0.1:4000/