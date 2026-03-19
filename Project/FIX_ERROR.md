# 🔧 Corrigir Erro "next/font"

## ❌ Erro que você está vendo:

```
Build Error
An error occurred in 'next/font'.
Error: Your custom PostCSS configuration must export a 'plugins' key.
```

## ✅ Solução:

### Passo 1: Instalar Dependências

O erro ocorre porque as dependências do Next.js não estão instaladas. Execute:

**Windows (PowerShell):**
```powershell
cd Project
.\install.ps1
```

**Windows (CMD):**
```cmd
cd Project
install.bat
```

**Linux/Mac:**
```bash
cd Project
rm -rf node_modules .next package-lock.json
npm install
```

### Passo 2: Aguardar Instalação

A instalação pode levar 2-5 minutos. Aguarde até ver:

```
added XXX packages in XXs
```

### Passo 3: Executar o Projeto

```bash
npm run dev
```

## 🎯 O que foi corrigido:

1. ✅ Arquivo `postcss.config.js` atualizado para usar `module.exports`
2. ✅ Todas as dependências do Next.js adicionadas ao `package.json`
3. ✅ Scripts de instalação criados (`install.bat` e `install.ps1`)

## 🐛 Se o erro persistir:

### 1. Verifique a versão do Node.js

```bash
node --version
```

Deve ser **18.17.0 ou superior**. Se não for, atualize o Node.js.

### 2. Limpe o cache do npm

```bash
npm cache clean --force
```

### 3. Reinstale tudo

```bash
# Remova tudo
rmdir /s /q node_modules
rmdir /s /q .next
del package-lock.json

# Reinstale
npm install
```

### 4. Verifique se o arquivo `postcss.config.js` está correto

Deve conter:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

**NÃO** deve ter `export default`.

## 📝 Checklist de Verificação:

- [ ] Node.js versão 18.17.0 ou superior instalado
- [ ] Executou `npm install` na pasta `Project`
- [ ] Aguardou a instalação completa
- [ ] Arquivo `postcss.config.js` usa `module.exports`
- [ ] Pasta `node_modules` existe em `Project/`
- [ ] Não há erros durante `npm install`

## 🆘 Ainda com problemas?

1. Tire um print do erro completo
2. Verifique o arquivo `TROUBLESHOOTING.md`
3. Abra uma issue no GitHub com:
   - Versão do Node.js (`node --version`)
   - Sistema operacional
   - Print do erro
   - Saída completa de `npm install`

---

**Após seguir estes passos, o erro deve desaparecer e você poderá executar `npm run dev` com sucesso!** 🚀
