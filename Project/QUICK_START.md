# ⚡ Quick Start - Migração Next.js + Supabase

## 🚀 Começar em 5 Minutos

### 1️⃣ Instalar (1 min)
```bash
cd Project
npm install
```

### 2️⃣ Configurar Supabase (2 min)

1. Acesse [supabase.com](https://supabase.com) → New Project
2. SQL Editor → New Query → Cole `supabase/migrations/001_initial_schema.sql` → Run
3. Settings → API → Copie URL e anon key

### 3️⃣ Configurar Ambiente (1 min)
```bash
cp .env.example .env.local
```

Edite `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=sua-url-aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-aqui
```

### 4️⃣ Limpar Vite (30 seg)
```bash
# Linux/Mac
bash cleanup.sh

# Windows
del vite.config.ts vitest.config.ts index.html src\main.tsx src\App.tsx src\vite-env.d.ts tsconfig.app.json tsconfig.node.json
```

### 5️⃣ Executar (30 seg)
```bash
npm run dev
```

Acesse: http://localhost:3000

---

## 🔐 Configurar Google OAuth (Depois)

### No Google Cloud Console:
1. [console.cloud.google.com](https://console.cloud.google.com)
2. APIs & Services → Credentials → Create OAuth 2.0 Client ID
3. Authorized redirect URIs:
   - `https://[SEU-PROJETO].supabase.co/auth/v1/callback`
   - `http://localhost:3000/auth/callback`

### No Supabase:
1. Authentication → Providers → Google → Enable
2. Cole Client ID e Secret
3. Save

---

## 📝 Próximos Passos

1. ✅ Testar login com Google
2. ✅ Migrar componentes (ver CHECKLIST.md)
3. ✅ Integrar salvamento de dados (ver USAGE_EXAMPLES.md)
4. ✅ Implementar repetição espaçada
5. ✅ Deploy na Vercel

---

## 🆘 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Produção local
npm start

# Lint
npm run lint

# Testes
npm test
```

---

## 📚 Documentação Completa

- [SETUP.md](./SETUP.md) - Guia completo de configuração
- [MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md) - O que mudou
- [USAGE_EXAMPLES.md](./USAGE_EXAMPLES.md) - Exemplos de código
- [CHECKLIST.md](./CHECKLIST.md) - Checklist completo

---

## 🐛 Problemas Comuns

### "Invalid API key"
→ Verifique se copiou a chave correta em `.env.local`

### "redirect_uri_mismatch"
→ Adicione todas as URLs no Google Cloud Console

### Erro ao executar migrations
→ Execute as queries uma por vez no SQL Editor

### Componente não funciona
→ Adicione `'use client'` no topo do arquivo

---

## 💡 Dica Pro

Use React Query para cache automático:

```tsx
import { useQuery } from '@tanstack/react-query';
import { getAllCategoryStats } from '@/lib/supabase/queries';

const { data, isLoading } = useQuery({
  queryKey: ['stats', user?.id],
  queryFn: () => getAllCategoryStats(user!.id),
  enabled: !!user,
});
```

---

**Pronto para começar? Execute `npm install` e siga os passos acima! 🚀**
