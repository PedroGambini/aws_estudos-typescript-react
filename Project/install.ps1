Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Limpando instalacao anterior..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

if (Test-Path "node_modules") {
    Write-Host "Removendo node_modules..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force "node_modules"
}

if (Test-Path ".next") {
    Write-Host "Removendo .next..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force ".next"
}

if (Test-Path "package-lock.json") {
    Write-Host "Removendo package-lock.json..." -ForegroundColor Yellow
    Remove-Item -Force "package-lock.json"
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Instalando dependencias..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

npm install

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "Instalacao concluida!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Agora execute: npm run dev" -ForegroundColor Yellow
Write-Host ""
