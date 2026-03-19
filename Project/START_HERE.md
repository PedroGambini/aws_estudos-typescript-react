# 🚀 Começar Aqui - Ambiente Pronto!

## ✅ O que já está pronto:

- ✅ Arquivos do Vite removidos
- ✅ Next.js 15 configurado
- ✅ Supabase integrado
- ✅ Todos os componentes atualizados para Next.js
- ✅ Rotas do App Router criadas
- ✅ Middleware de autenticação configurado
- ✅ Hooks e utilitários prontos
- ✅ Documentação completa

## 📝 O que VOCÊ precisa fazer:

### 1️⃣ Instalar Dependências (2 minutos)

**Opção A - Usando o script (Recomendado):**

No Windows, abra o PowerShell ou CMD na pasta `Project` e execute:

```bash
# PowerShell
.\install.ps1

# OU CMD/Terminal
install.bat
```

**Opção B - Manual:**

```bash
cd Project

# Limpar instalação anterior (se houver)
rmdir /s /q node_modules
rmdir /s /q .next
del package-lock.json

# Instalar
npm install
```

**Importante:** Aguarde a instalação completa (pode levar 2-5 minutos).

### 2️⃣ Configurar Supabase (5 minutos)

#### A. Criar Projeto no Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Clique em "New Project"
3. Preencha:
   - Nome do projeto: `aws-flashcards` (ou outro nome)
   - Database Password: **ANOTE ESTA SENHA!**
   - Região: Escolha a mais próxima (ex: South America)
4. Aguarde a criação (1-2 minutos)

#### B. Executar Migrations SQL

1. No dashboard do Supabase, vá em **SQL Editor**
2. Clique em **New Query**
3. Abra o arquivo `supabase/migrations/001_initial_schema.sql`
4. Copie TODO o conteúdo
5. Cole no SQL Editor
6. Clique em **Run** (ou pressione Ctrl+Enter)
7. Aguarde a confirmação "Success"

#### C. Obter Chaves do Supabase

1. No dashboard, vá em **Settings** → **API**
2. Copie:
   - **Project URL** (algo como `https://xxxxx.supabase.co`)
   - **anon public** key (a chave grande que começa com `eyJ...`)

### 3️⃣ Configurar Variáveis de Ambiente (1 minuto)

1. Abra o arquivo `.env.local` (já existe na pasta Project)
2. Substitua os valores:

```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-aqui
```

3. Salve o arquivo

### 4️⃣ Executar o Projeto (30 segundos)

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## 🎉 Pronto!

Você verá a tela de login. Mas ainda não pode fazer login porque precisa configurar o Google OAuth.

---

## 🔐 Configurar Google OAuth (Opcional - 10 minutos)

### A. Criar Credenciais no Google Cloud

1. Acesse [console.cloud.google.com](https://console.cloud.google.com)
2. Crie um novo projeto ou selecione um existente
3. Vá em **APIs & Services** → **Credentials**
4. Clique em **Create Credentials** → **OAuth 2.0 Client ID**
5. Se solicitado, configure a tela de consentimento OAuth:
   - User Type: **External**
   - App name: `AWS Flashcards`
   - User support email: seu email
   - Developer contact: seu email
   - Salve
6. Volte para criar o OAuth Client ID:
   - Application type: **Web application**
   - Name: `AWS Flashcards`
   - Authorized JavaScript origins:
     ```
     http://localhost:3000
     ```
   - Authorized redirect URIs:
     ```
     http://localhost:3000/auth/callback
     https://[SEU-PROJETO].supabase.co/auth/v1/callback
     ```
     (Substitua `[SEU-PROJETO]` pela URL do seu projeto Supabase)
7. Clique em **Create**
8. Copie o **Client ID** e **Client Secret**

### B. Configurar no Supabase

1. No dashboard do Supabase, vá em **Authentication** → **Providers**
2. Encontre **Google** e clique para expandir
3. Ative o toggle **Enable Sign in with Google**
4. Cole:
   - **Client ID** (do Google Cloud)
   - **Client Secret** (do Google Cloud)
5. Clique em **Save**

### C. Testar Login

1. Acesse [http://localhost:3000/login](http://localhost:3000/login)
2. Clique em **Continuar com Google**
3. Faça login com sua conta Google
4. Deve redirecionar para a home!

---

## 📚 Próximos Passos

Agora que está funcionando:

1. **Explore a aplicação**
   - Teste os flashcards
   - Veja seu perfil
   - Ajuste as configurações

2. **Leia a documentação**
   - [QUICK_START.md](./QUICK_START.md) - Guia rápido
   - [USAGE_EXAMPLES.md](./USAGE_EXAMPLES.md) - Exemplos de código
   - [DOCS_INDEX.md](./DOCS_INDEX.md) - Índice completo

3. **Implemente features**
   - Integre salvamento de progresso
   - Adicione repetição espaçada
   - Crie estatísticas

4. **Faça deploy**
   - [DEPLOY.md](./DEPLOY.md) - Guia de deploy na Vercel

---

## 🐛 Problemas?

### "npm install" falha
```bash
# Limpe o cache e tente novamente
rm -rf node_modules package-lock.json
npm install
```

### "Invalid API key"
- Verifique se copiou a chave **anon public**, não a service_role
- Verifique se não há espaços extras no `.env.local`
- Reinicie o servidor: Ctrl+C e `npm run dev`

### "redirect_uri_mismatch"
- Verifique se adicionou TODAS as URLs no Google Cloud Console
- Use exatamente: `http://localhost:3000/auth/callback`
- Certifique-se de que a URL do Supabase está correta

### Mais problemas?
Consulte [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)

---

## 📞 Precisa de Ajuda?

1. Verifique [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)
2. Leia [DOCS_INDEX.md](./DOCS_INDEX.md)
3. Abra uma issue no GitHub

---

**Boa sorte! 🚀**

*Tempo estimado total: 10-15 minutos*
