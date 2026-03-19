#!/bin/bash

echo "🧹 Limpando arquivos do Vite..."

# Remover arquivos de configuração do Vite
rm -f vite.config.ts
rm -f vitest.config.ts
rm -f index.html
rm -f src/main.tsx
rm -f src/App.tsx
rm -f src/vite-env.d.ts

# Remover arquivos de configuração antigos do TypeScript
rm -f tsconfig.app.json
rm -f tsconfig.node.json

echo "✅ Arquivos removidos com sucesso!"
echo ""
echo "📦 Agora execute: npm install"
echo "🚀 Depois execute: npm run dev"
