Write-Host "Setting up development environment..." -ForegroundColor Green

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

# Create necessary directories
Write-Host "Setting up directories..." -ForegroundColor Yellow
if (-not (Test-Path -Path "./public")) {
    New-Item -ItemType Directory -Force -Path "./public" | Out-Null
}

# Start development server
Write-Host "Starting development server..." -ForegroundColor Green
npm run dev
