@echo off
echo ========================================================
echo   Starting Romantic Birthday Surprise Local Preview
echo ========================================================
echo.
cd /d "%~dp0"
call npm run preview
pause
