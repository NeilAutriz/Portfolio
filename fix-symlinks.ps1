# PowerShell script to fix symlink issues with Next.js

# Check if .next directory exists
if (Test-Path -Path ".next") {
    Write-Host "Removing .next directory..."
    Remove-Item -Recurse -Force .next
    Write-Host ".next directory removed."
}

# Check if node_modules directory exists
if (Test-Path -Path "node_modules") {
    Write-Host "Removing node_modules directory..."
    Remove-Item -Recurse -Force node_modules
    Write-Host "node_modules directory removed."
}

# Install dependencies
Write-Host "Reinstalling dependencies..."
npm install

Write-Host "Starting development server..."
npm run dev
