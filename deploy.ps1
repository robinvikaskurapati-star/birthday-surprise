# ==========================================================
# 🚀 Birthday Surprise GitHub Deployment Script
# ==========================================================
Write-Host "`n💖 Starting Birthday Surprise Deployment for chowhan1008..." -ForegroundColor Magenta

# Check Git Status
git status

# Check if authenticated with GitHub
$authCheck = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "`n🔑 GitHub authorization needed. Please sign in below to your account (chowhan1008):" -ForegroundColor Cyan
    gh auth login --hostname github.com --git-protocol https --web
}

# Create GitHub Repository if it does not already exist
Write-Host "`n📦 Checking/creating repository 'birthday-surprise' on GitHub..." -ForegroundColor Yellow
$repoCheck = gh repo view chowhan1008/birthday-surprise 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Creating new public repository 'birthday-surprise'..." -ForegroundColor Green
    gh repo create birthday-surprise --public --source=. --remote=origin --push
} else {
    Write-Host "Repository exists. Pushing latest changes..." -ForegroundColor Green
    git remote remove origin 2>$null
    git remote add origin https://github.com/chowhan1008/birthday-surprise.git
    git push -u origin main
}

# Deploy built website to gh-pages branch
Write-Host "`n🌐 Deploying website to gh-pages branch..." -ForegroundColor Cyan
npm run build
Push-Location dist
git init
git checkout -B gh-pages
git add -A
git commit -m "Deploy birthday surprise to GitHub Pages"
git remote add origin https://github.com/chowhan1008/birthday-surprise.git 2>$null
git push -f origin gh-pages
Remove-Item -Recurse -Force .git
Pop-Location

Write-Host "`n🎉 Deployment triggered successfully!" -ForegroundColor Green
Write-Host "Your website will be live in 1-2 minutes at:" -ForegroundColor Yellow
Write-Host "https://chowhan1008.github.io/birthday-surprise/" -ForegroundColor Cyan
Write-Host "`nPress any key to close..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
