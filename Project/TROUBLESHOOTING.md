# 🔧 Troubleshooting Guide

## 🚨 Problemas Comuns e Soluções

### 1. Erro: "Invalid API key" ou "Failed to fetch"

**Sintomas:**
- Erro ao tentar fazer login
- Console mostra erro de API key inválida

**Soluções:**

```bash
# 1. Verifique se o arquivo .env.local existe
ls -la .env.local

# 2. Verifique o conteúdo
cat .env.local

# 3. Certifique-se de usar a chave ANON, não SERVICE_ROLE
# ❌ ERRADO: Usar service_role key
# ✅ CORRETO: Usar anon/public key
```

**Como obter as chaves corretas:**
1. Supabase Dashboard → Settings → API
2. Copie "Project URL" e "anon public" key
3. Cole em `.env.local`

---

### 2. Erro: "redirect_uri_mismatch" no Google OAuth

**Sintomas:**
- Ao clicar em "Continuar com Google", aparece erro de redirect URI

**Soluções:**

1. **No Google Cloud Console:**
   - APIs & Services → Credentials → Seu OAuth Client
   - Authorized redirect URIs deve conter:
     ```
     https://[SEU-PROJETO].supabase.co/auth/v1/callback
     http://localhost:3000/auth/callback
     ```

2. **No Supabase:**
   - Authentication → URL Configuration
   - Site URL: `http://localhost:3000` (dev) ou sua URL de produção
   - Redirect URLs: `http://localhost:3000/**`

---

### 3. Erro ao executar migrations SQL

**Sintomas:**
- Erro ao executar o SQL no Supabase
- Tabelas não são criadas

**Soluções:**

```sql
-- 1. Verifique se a extensão UUID está habilitada
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Execute as queries em partes se houver erro
-- Primeiro: Criar tabelas
-- Depois: Criar índices
-- Por último: Criar triggers e functions

-- 3. Verifique se não há tabelas duplicadas
DROP TABLE IF EXISTS public.profiles CASCADE;
-- Depois execute a criação novamente
```

---

### 4. Componente não renderiza / Erro de hidratação

**Sintomas:**
- Erro: "Text content does not match server-rendered HTML"
- Componente não aparece na tela

**Soluções:**

```tsx
// 1. Adicione 'use client' no topo do arquivo
'use client';

import { useState } from 'react';

export default function MyComponent() {
  // seu código
}

// 2. Para dados que mudam no cliente, use useEffect
'use client';

import { useEffect, useState } from 'react';

export default function MyComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <div>Conteúdo</div>;
}
```

---

### 5. Erro: "useRouter only works in Client Components"

**Sintomas:**
- Erro ao usar `useRouter()` ou `usePathname()`

**Soluções:**

```tsx
// ❌ ERRADO: Sem 'use client'
import { useRouter } from 'next/navigation';

export default function MyPage() {
  const router = useRouter();
  // ...
}

// ✅ CORRETO: Com 'use client'
'use client';

import { useRouter } from 'next/navigation';

export default function MyPage() {
  const router = useRouter();
  // ...
}
```

---

### 6. Dados não são salvos no Supabase

**Sintomas:**
- Função de salvar não retorna erro, mas dados não aparecem no banco

**Soluções:**

```tsx
// 1. Verifique se o usuário está autenticado
const { user } = useAuth();
if (!user) {
  console.error('Usuário não autenticado');
  return;
}

// 2. Verifique se está passando o user_id correto
await saveGameHistory({
  user_id: user.id, // ✅ Correto
  // user_id: user.email, // ❌ Errado
  // ...
});

// 3. Verifique as políticas RLS no Supabase
// Table Editor → Sua tabela → RLS Policies
// Deve ter política de INSERT para o usuário

// 4. Teste a query diretamente no SQL Editor
INSERT INTO game_history (user_id, category_id, score, total_questions, correct_answers, time_spent)
VALUES ('seu-user-id', 'aws-saa', 85, 20, 17, 300);
```

---

### 7. Erro: "Cannot find module '@/...' "

**Sintomas:**
- Imports com `@/` não funcionam

**Soluções:**

```json
// Verifique tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]  // ✅ Deve estar presente
    }
  }
}
```

```bash
# Reinicie o servidor
# Ctrl+C para parar
npm run dev
```

---

### 8. Erro: "Module not found: Can't resolve 'react-router-dom'"

**Sintomas:**
- Erro ao tentar importar do react-router-dom

**Soluções:**

```tsx
// ❌ ERRADO: Ainda usando react-router-dom
import { useNavigate, Link } from 'react-router-dom';

// ✅ CORRETO: Usar next/navigation e next/link
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Substituir:
// useNavigate() → useRouter()
// useLocation() → usePathname()
// <Link to=""> → <Link href="">
```

---

### 9. Build falha com erro de tipo

**Sintomas:**
- `npm run build` falha com erros TypeScript

**Soluções:**

```bash
# 1. Limpe o cache
rm -rf .next
rm -rf node_modules/.cache

# 2. Reinstale dependências
rm -rf node_modules
npm install

# 3. Verifique erros específicos
npm run build 2>&1 | grep "error TS"

# 4. Corrija os tipos
# Exemplo: adicione tipos faltantes
const user: User | null = null;
```

---

### 10. Middleware não protege rotas

**Sintomas:**
- Consegue acessar rotas protegidas sem login

**Soluções:**

```typescript
// Verifique middleware.ts
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

// Verifique se as rotas estão corretas em middleware
const protectedRoutes = ['/', '/decks', '/study', '/flashcards', '/settings'];
```

---

### 11. Imagens não carregam

**Sintomas:**
- Imagens aparecem quebradas

**Soluções:**

```tsx
// ❌ ERRADO: Usar <img> diretamente
<img src="/logo.png" />

// ✅ CORRETO: Usar next/image
import Image from 'next/image';

<Image 
  src="/logo.png" 
  width={100} 
  height={100} 
  alt="Logo" 
/>

// Para imagens externas, configure next.config.ts
const nextConfig = {
  images: {
    domains: ['example.com'],
  },
};
```

---

### 12. Variáveis de ambiente não funcionam

**Sintomas:**
- `process.env.NEXT_PUBLIC_...` retorna undefined

**Soluções:**

```bash
# 1. Certifique-se de usar o prefixo NEXT_PUBLIC_
# ❌ ERRADO
SUPABASE_URL=...

# ✅ CORRETO
NEXT_PUBLIC_SUPABASE_URL=...

# 2. Reinicie o servidor após alterar .env.local
# Ctrl+C
npm run dev

# 3. Verifique se o arquivo está no lugar certo
# Deve estar em: Project/.env.local
# NÃO em: .env.local (raiz do repo)
```

---

### 13. React Query não atualiza dados

**Sintomas:**
- Dados antigos aparecem mesmo após atualização

**Soluções:**

```tsx
import { useQueryClient } from '@tanstack/react-query';

const queryClient = useQueryClient();

// Após salvar dados, invalide o cache
await saveGameHistory(data);

// Invalida queries específicas
queryClient.invalidateQueries({ queryKey: ['gameHistory', user.id] });

// Ou invalida todas
queryClient.invalidateQueries();
```

---

### 14. Erro de CORS

**Sintomas:**
- Erro de CORS no console

**Soluções:**

```typescript
// No Supabase Dashboard:
// Settings → API → CORS
// Adicione suas URLs permitidas

// Para desenvolvimento local:
http://localhost:3000

// Para produção:
https://seu-dominio.com
```

---

### 15. Performance lenta

**Sintomas:**
- Aplicação demora para carregar

**Soluções:**

```tsx
// 1. Use React Query com cache
const { data } = useQuery({
  queryKey: ['stats'],
  queryFn: getStats,
  staleTime: 5 * 60 * 1000, // 5 minutos
});

// 2. Lazy load componentes pesados
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Carregando...</p>,
});

// 3. Otimize imagens
import Image from 'next/image';

<Image 
  src="/large-image.jpg"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="data:image/..."
/>

// 4. Use índices no banco de dados
// Já criados nas migrations, mas verifique:
CREATE INDEX idx_game_history_user_id ON game_history(user_id);
```

---

## 🔍 Ferramentas de Debug

### 1. Console do Navegador
```javascript
// Verifique variáveis de ambiente
console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);

// Verifique usuário
console.log('User:', user);

// Verifique dados
console.log('Data:', data);
```

### 2. React DevTools
- Instale a extensão React DevTools
- Inspecione componentes e props
- Verifique hooks e estado

### 3. Network Tab
- Abra DevTools → Network
- Verifique requisições ao Supabase
- Veja status codes e respostas

### 4. Supabase Logs
- Dashboard → Logs
- Veja queries executadas
- Identifique erros de RLS

---

## 📞 Ainda com Problemas?

1. **Verifique os logs:**
   ```bash
   # Terminal onde o servidor está rodando
   # Procure por erros em vermelho
   ```

2. **Limpe tudo e recomece:**
   ```bash
   rm -rf .next
   rm -rf node_modules
   npm install
   npm run dev
   ```

3. **Consulte a documentação:**
   - [Next.js Docs](https://nextjs.org/docs)
   - [Supabase Docs](https://supabase.com/docs)

4. **Peça ajuda:**
   - [Next.js Discord](https://discord.gg/nextjs)
   - [Supabase Discord](https://discord.supabase.com)
   - [Stack Overflow](https://stackoverflow.com)

---

## 📝 Checklist de Debug

Antes de pedir ajuda, verifique:

- [ ] `.env.local` existe e está preenchido corretamente
- [ ] Migrations SQL foram executadas no Supabase
- [ ] Google OAuth está configurado (Client ID e Secret)
- [ ] Redirect URIs estão corretas no Google e Supabase
- [ ] `npm install` foi executado
- [ ] Servidor foi reiniciado após mudanças em `.env.local`
- [ ] Componentes com hooks têm `'use client'`
- [ ] Imports estão corretos (next/navigation, não react-router-dom)
- [ ] Console do navegador não mostra erros
- [ ] Network tab mostra requisições bem-sucedidas

---

**Boa sorte! 🍀**
