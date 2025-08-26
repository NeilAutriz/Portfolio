@echo off
echo Starting Sunday Moses Portfolio development server...
echo.
echo This script will:
echo 1. Install dependencies if needed
echo 2. Configure the environment
echo 3. Start the development server
echo.

:: Go to project directory
cd /d "%~dp0"

:: Install dependencies if node_modules doesn't exist
if not exist node_modules (
    echo Installing dependencies...
    npm install
    if %errorlevel% neq 0 (
        echo Error installing dependencies. Please check your internet connection and try again.
        pause
        exit /b 1
    )
)

:: Set environment variables for local development
set NODE_TLS_REJECT_UNAUTHORIZED=0

:: Start development server
echo Starting development server...
echo.
echo Open http://localhost:3000 in your browser
echo Press Ctrl+C to stop the server
echo.
npm run dev
