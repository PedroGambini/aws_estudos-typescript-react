@echo off
echo ========================================
echo Limpando instalacao anterior...
echo ========================================

if exist node_modules (
    echo Removendo node_modules...
    rmdir /s /q node_modules
)

if exist .next (
    echo Removendo .next...
    rmdir /s /q .next
)

if exist package-lock.json (
    echo Removendo package-lock.json...
    del /f package-lock.json
)

echo.
echo ========================================
echo Instalando dependencias...
echo ========================================
npm install

echo.
echo ========================================
echo Instalacao concluida!
echo ========================================
echo.
echo Agora execute: npm run dev
echo.
pause
