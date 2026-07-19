@echo off
echo ============================================
echo  Magdy Portfolio - Starting Servers
echo ============================================
echo.

:: Start Flask backend
echo [1/2] Starting Flask backend on port 5000...
start "Flask Backend" cmd /k "cd /d %~dp0backend && python app.py"

:: Wait a moment for Flask to start
timeout /t 3 /nobreak > nul

:: Start React frontend
echo [2/2] Starting React frontend on port 5173...
start "React Frontend" cmd /k "cd /d %~dp0frontend && npm run dev"

echo.
echo ============================================
echo  Both servers are starting!
echo  Frontend: http://localhost:5173
echo  Backend:  http://localhost:5000
echo ============================================
echo.
pause
