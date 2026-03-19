# Guia de Configuração - Migração para Next.js + Supabase

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Conta no Supabase (gratuita)
- Conta Google Cloud (para OAuth)

## 🚀 Passo a Passo

### 1. Instalar Dependências

```bash
cd Project
npm install
```

### 2. Configurar Supabase

#### 2.1 Criar Projeto no Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Clique em "New Project"
3. Preencha os dados:
   - Nome do projeto
   - Database Password (guarde bem!)
   - Região (escolha a mais próxima)

#### 2.2 Executar Migrations

1. No dashboard do Supabase, vá em "SQL Editor"
2. Clique em "New Query"
3. Copie todo o conteúdo do arquivo `supabase/migrations/001_initial_schema.sql`
4. Cole no editor e clique em "Run"

#### 2.3 Configurar Google OAuth

1. No dashboard do Supabase, vá em "Authentication" > "Providers"
2. Encontre "Google" e clique em "Enable"
3. Você precisará criar credenciais no Google Cloud:

**No Google Cloud Console:**
1. Acesse [console.cloud.google.com](https://console.cloud.google.com)
2. Crie um novo projeto ou selecione um existente
3. Vá em "APIs & Services" > "Credentials"
4. Clique em "Create Credentials" > "OAuth 2.0 Client ID"
5. Configure:
   - Application type: Web application
   - Authorized JavaScript origins: `http://localhost:3000`
   - Authorized redirect URIs: 
     - `https://[SEU-PROJETO].supabase.co/auth/v1/callback`
     - `http://localhost:3000/auth/callback`
6. Copie o Client ID e Client Secret

**De volta ao Supabase:**
1. Cole o Client ID e Client Secret nos campos correspondentes
2. Clique em "Save"

#### 2.4 Obter Chaves do Supabase

1. No dashboard, vá em "Settings" > "API"
2. Copie:
   - Project URL
   - anon/public key

### 3. Configurar Variáveis de Ambiente

1. Copie o arquivo de exemplo:
```bash
cp .env.example .env.local
```

2. Edite `.env.local` e preencha:
```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-aqui
```

### 4. Remover Arquivos Antigos do Vite

```bash
# Remover arquivos de configuração do Vite
rm vite.config.ts
rm vitest.config.ts
rm index.html
rm src/main.tsx
rm src/App.tsx
rm src/vite-env.d.ts

# Remover arquivos de configuração antigos do TypeScript
rm tsconfig.app.json
rm tsconfig.node.json
```

### 5. Executar o Projeto

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## 🗄️ Estrutura do Banco de Dados

### Tabelas Criadas:

1. **profiles** - Perfis dos usuários
   - Criado automaticamente quando usuário faz login
   - Sincronizado com auth.users

2. **flashcard_progress** - Progresso individual de cada flashcard
   - Implementa repetição espaçada (Spaced Repetition)
   - Campos: ease_factor, interval, repetitions, next_review_date

3. **game_history** - Histórico de jogos/sessões de estudo
   - Registra score, tempo, acertos/erros

4. **user_preferences** - Preferências do usuário
   - Idioma, tema, notificações

5. **category_stats** - Estatísticas por categoria
   - Total estudado, média de acertos, última vez estudada

## 🔐 Segurança

- Row Level Security (RLS) habilitado em todas as tabelas
- Usuários só podem acessar seus próprios dados
- Políticas de segurança configuradas automaticamente

## 📝 Próximos Passos

1. Testar login com Google
2. Implementar salvamento de progresso
3. Criar hooks para sincronizar dados locais com Supabase
4. Implementar sistema de repetição espaçada
5. Adicionar dashboard com estatísticas

## 🐛 Troubleshooting

### Erro: "Invalid API key"
- Verifique se copiou a chave correta do Supabase
- Certifique-se de usar a "anon/public" key, não a "service_role"

### Erro: "redirect_uri_mismatch"
- Verifique se adicionou todas as URLs de redirect no Google Cloud Console
- Certifique-se de que a URL do Supabase está correta

### Erro ao executar migrations
- Verifique se copiou todo o SQL corretamente
- Execute as queries uma por vez se houver erro

## 📚 Recursos

- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação Supabase](https://supabase.com/docs)
- [Supabase Auth com Next.js](https://supabase.com/docs/guides/auth/server-side/nextjs)
