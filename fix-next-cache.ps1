# PowerShell script to fix Next.js cache issues
Write-Host "Fixing Next.js cache issues..." -ForegroundColor Green

# Stop any running Next.js processes
try {
    Write-Host "Stopping any running Next.js processes..."
    Stop-Process -Name "node" -ErrorAction SilentlyContinue
}
catch {
    Write-Host "No Node.js processes found to stop." -ForegroundColor Yellow
}

# Delete the problematic .next folder
Write-Host "Removing .next folder..."
if (Test-Path -Path ".\.next") {
    # Force remove the .next directory
    try {
        Remove-Item -Path ".\.next" -Recurse -Force -ErrorAction Stop
        Write-Host ".next folder successfully removed." -ForegroundColor Green
    }
    catch {
        Write-Host "Warning: Could not remove some files in the .next folder." -ForegroundColor Yellow
        Write-Host "Attempting to remove specific problematic files/folders..."
        
        # Try to remove specific problematic files that often cause issues
        if (Test-Path -Path ".\.next\server\middleware-manifest.json") {
            try {
                Remove-Item -Path ".\.next\server\middleware-manifest.json" -Force -ErrorAction SilentlyContinue
                Write-Host "Removed middleware-manifest.json" -ForegroundColor Green
            }
            catch {
                Write-Host "Could not remove middleware-manifest.json" -ForegroundColor Red
            }
        }
        
        # Remove cache folders
        if (Test-Path -Path ".\.next\cache") {
            try {
                Remove-Item -Path ".\.next\cache" -Recurse -Force -ErrorAction SilentlyContinue
                Write-Host "Removed cache folder" -ForegroundColor Green
            }
            catch {
                Write-Host "Could not remove cache folder" -ForegroundColor Red
            }
        }
    }
}
else {
    Write-Host ".next folder does not exist. No cleanup needed." -ForegroundColor Green
}

# Install or reinstall dependencies if needed
$reinstall = Read-Host "Do you want to reinstall node modules as well? (y/n)"
if ($reinstall -eq "y") {
    Write-Host "Removing node_modules folder..."
    if (Test-Path -Path ".\node_modules") {
        Remove-Item -Path ".\node_modules" -Recurse -Force
        Write-Host "Installing npm dependencies..."
        npm install
    }
}

Write-Host "Cache cleanup completed. You can now run 'npm run dev' to start the development server." -ForegroundColor Green
