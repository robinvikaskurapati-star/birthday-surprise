# ==========================================================
# 🚀 1-Click Birthday Surprise GitHub Deployment Script
# ==========================================================
Write-Host "💖 Starting Birthday Surprise Deployment..." -ForegroundColor Magenta

# Ensure Git and GitHub CLI are in PATH
$gitDir = "$env:LOCALAPPDATA\Programs\Git\cmd"
$ghDir = "$env:LOCALAPPDATA\Programs\gh\bin"
$env:Path = "$gitDir;$ghDir;" + $env:Path

# Check Git Status
git status

# Check if authenticated with GitHub
$authCheck = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "`n🔑 GitHub authorization required. Please follow the prompt below to sign into your account (robinvikaskurapati-star):" -ForegroundColor Cyan
    gh auth login --hostname github.com --git-protocol https --web
}

# Create GitHub Repository if it does not already exist
Write-Host "`n📦 Checking/creating repository 'birthday-surprise' on GitHub..." -ForegroundColor Yellow
$repoCheck = gh repo view robinvikaskurapati-star/birthday-surprise 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Creating new public repository 'birthday-surprise'..." -ForegroundColor Green
    gh repo create birthday-surprise --public --source=. --remote=origin --push
} else {
    Write-Host "Repository exists. Pushing latest changes..." -ForegroundColor Green
    git remote remove origin 2>$null
    git remote add origin https://github.com/robinvikaskurapati-star/birthday-surprise.git
    git push -u origin main --force
}

# Enable GitHub Pages via GitHub Actions
Write-Host "`n🌐 Configuring GitHub Pages to build from GitHub Actions..." -ForegroundColor Cyan
gh api repos/robinvikaskurapati-star/birthday-surprise/pages -X POST -F "build_type=workflow" 2>$null

Write-Host "`n🎉 Deployment triggered successfully!" -ForegroundColor Green
Write-Host "Your website will be live in 1-2 minutes at:" -ForegroundColor Yellow
Write-Host "https://robinvikaskurapati-star.github.io/birthday-surprise/" -ForegroundColor Cyan
Write-Host "`nPress any key to close..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
