@echo off
cd /d %~dp0

echo Cleaning site...
call bundle exec jekyll clean

echo Starting Jekyll server...
start cmd /k "cd /d %~dp0 && bundle exec jekyll serve"

timeout /t 5 /nobreak

start http://127.0.0.1:4000/