# 🚀 Desenvolvimento Local

## Pré-requisitos

- Node.js 18+ instalado
- Conta no Supabase configurada

## Passo 1: Instalar Dependências

```bash
cd Project
npm install
```

## Passo 2: Configurar Variáveis de Ambiente

O arquivo `.env.local` já existe com as configurações do Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=https://tbveadogyqmbhjylpssk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_ew2jscYqsylUEY-V4D3xVA_QbwJ77Ig
```

## Passo 3: Executar a Migration no Supabase (IMPORTANTE!)

Antes de testar localmente, você PRECISA executar a migration:

1. Acesse: https://supabase.com/dashboard/project/tbveadogyqmbhjylpssk
2. Vá em **SQL Editor**
3. Clique em **New Query**
4. Copie o conteúdo de `supabase/migrations/002_friends_and_storage.sql`
5. Cole e clique em **Run**

## Passo 4: Iniciar o Servidor de Desenvolvimento

```bash
npm run dev
```

O servidor vai iniciar em: http://localhost:3000

## Passo 5: Testar as Funcionalidades

### Login
1. Acesse: http://localhost:3000/login
2. Faça login com sua conta

### Dashboard
- Acesse: http://localhost:3000
- Veja as categorias de flashcards

### Meu Perfil
- Acesse: http://localhost:3000/profile
- Teste o botão **Editar Perfil**
  - Faça upload de uma foto
  - Altere seu nome
- Teste o botão **Adicionar Amigos**
  - Busque usuários
  - Envie solicitações
- Teste o botão **Sair da Conta**

## 🔥 Hot Reload

O Next.js tem hot reload automático. Qualquer alteração nos arquivos será refletida automaticamente no navegador!

## 🐛 Troubleshooting

### Erro: "Module not found"
```bash
npm install
```

### Erro: "Port 3000 is already in use"
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Ou use outra porta
npm run dev -- -p 3001
```

### Erro ao fazer upload de foto
- Verifique se executou a migration no Supabase
- Verifique se o bucket "avatars" existe no Storage

### Erro ao buscar usuários
- Verifique se executou a migration no Supabase
- Verifique se as policies estão ativas

## 📝 Comandos Úteis

```bash
# Instalar dependências
npm install

# Iniciar dev server
npm run dev

# Build para produção
npm run build

# Iniciar produção local
npm start

# Lint
npm run lint

# Type check
npx tsc --noEmit
```

## 🔄 Sincronizar com o Repositório

```bash
# Puxar últimas alterações
git pull origin develop

# Ver status
git status

# Ver diferenças
git diff
```

## 🌐 Diferenças entre Local e Produção

### Local (localhost:3000)
- OAuth redirect: `http://localhost:3000/auth/callback`
- Variável `NEXT_PUBLIC_SITE_URL` não é necessária (usa `window.location.origin`)

### Produção (Vercel)
- OAuth redirect: `https://aws-estudos-typescript-react.vercel.app/auth/callback`
- Variável `NEXT_PUBLIC_SITE_URL` é obrigatória

## ✅ Tudo Funcionando?

Se tudo estiver funcionando localmente, você pode fazer o merge com a main e testar na Vercel!
