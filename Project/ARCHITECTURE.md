# 🏗️ Arquitetura do Sistema

## 📊 Visão Geral

```
┌─────────────────────────────────────────────────────────────┐
│                         USUÁRIO                              │
│                    (Navegador Web)                           │
└────────────────────┬────────────────────────────────────────┘
                     │
                     │ HTTPS
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                      NEXT.JS APP                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              App Router (RSC)                        │   │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐    │   │
│  │  │   Login    │  │  Protected │  │   Auth     │    │   │
│  │  │   /login   │  │  /(routes) │  │ /callback  │    │   │
│  │  └────────────┘  └────────────┘  └────────────┘    │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Middleware Layer                        │   │
│  │  • Proteção de rotas                                 │   │
│  │  • Refresh de sessão                                 │   │
│  │  • Redirecionamentos                                 │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Client Components                       │   │
│  │  • React Query (cache)                               │   │
│  │  • Hooks customizados                                │   │
│  │  • Componentes UI                                    │   │
│  └──────────────────────────────────────────────────────┘   │
└────────────────────┬────────────────────────────────────────┘
                     │
                     │ API Calls
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                    SUPABASE (BaaS)                           │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Supabase Auth                           │   │
│  │  • Google OAuth 2.0                                  │   │
│  │  • JWT Tokens                                        │   │
│  │  • Session Management                                │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │           PostgreSQL Database                        │   │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐    │   │
│  │  │  profiles  │  │  progress  │  │  history   │    │   │
│  │  └────────────┘  └────────────┘  └────────────┘    │   │
│  │  ┌────────────┐  ┌────────────┐                     │   │
│  │  │preferences │  │   stats    │                     │   │
│  │  └────────────┘  └────────────┘                     │   │
│  │                                                       │   │
│  │  • Row Level Security (RLS)                          │   │
│  │  • Triggers & Functions                              │   │
│  │  • Índices otimizados                                │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Supabase Storage (futuro)               │   │
│  │  • Avatares de usuários                              │   │
│  │  • Imagens de flashcards                             │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## 🔐 Fluxo de Autenticação

```
┌──────────┐
│ Usuário  │
└────┬─────┘
     │
     │ 1. Clica "Login com Google"
     ▼
┌─────────────────┐
│  Login Page     │
│  /login         │
└────┬────────────┘
     │
     │ 2. signInWithOAuth()
     ▼
┌─────────────────┐
│ Supabase Auth   │
└────┬────────────┘
     │
     │ 3. Redirect para Google
     ▼
┌─────────────────┐
│ Google OAuth    │
└────┬────────────┘
     │
     │ 4. Usuário autoriza
     ▼
┌─────────────────┐
│ Supabase Auth   │
│ /auth/callback  │
└────┬────────────┘
     │
     │ 5. exchangeCodeForSession()
     ▼
┌─────────────────┐
│  Middleware     │
│  (verifica JWT) │
└────┬────────────┘
     │
     │ 6. Redirect para home
     ▼
┌─────────────────┐
│  Home Page      │
│  /              │
└─────────────────┘
```

## 💾 Fluxo de Dados - Salvamento de Progresso

```
┌──────────────────┐
│ FlashcardGame    │
│ (Client)         │
└────┬─────────────┘
     │
     │ 1. Usuário completa jogo
     │    { score, correct, time }
     ▼
┌──────────────────┐
│ handleGameEnd()  │
└────┬─────────────┘
     │
     ├─────────────────────────────────┐
     │                                 │
     │ 2a. saveGameHistory()           │ 2b. updateCategoryStats()
     ▼                                 ▼
┌──────────────────┐            ┌──────────────────┐
│ Supabase Client  │            │ Supabase Client  │
│ INSERT INTO      │            │ UPSERT INTO      │
│ game_history     │            │ category_stats   │
└────┬─────────────┘            └────┬─────────────┘
     │                                │
     │ 3. RLS verifica user_id        │
     ▼                                ▼
┌──────────────────────────────────────┐
│         PostgreSQL                    │
│  • Valida políticas RLS              │
│  • Executa INSERT/UPSERT             │
│  • Dispara triggers                  │
│  • Atualiza updated_at               │
└────┬─────────────────────────────────┘
     │
     │ 4. Retorna dados salvos
     ▼
┌──────────────────┐
│ React Query      │
│ • Invalida cache │
│ • Refetch data   │
└────┬─────────────┘
     │
     │ 5. UI atualizada
     ▼
┌──────────────────┐
│ Stats Component  │
│ (mostra novos    │
│  dados)          │
└──────────────────┘
```

## 🔄 Sistema de Repetição Espaçada

```
┌──────────────────┐
│ Usuário responde │
│ flashcard        │
└────┬─────────────┘
     │
     │ quality: 0-5
     ▼
┌──────────────────────────────┐
│ calculateNextReview()        │
│ (Algoritmo SM-2)             │
│                              │
│ Input:                       │
│  • quality (0-5)             │
│  • easeFactor (1.3-2.5)      │
│  • interval (dias)           │
│  • repetitions (contador)    │
│                              │
│ Output:                      │
│  • newEaseFactor             │
│  • newInterval               │
│  • newRepetitions            │
│  • nextReviewDate            │
└────┬─────────────────────────┘
     │
     ▼
┌──────────────────────────────┐
│ upsertFlashcardProgress()    │
│                              │
│ UPSERT INTO                  │
│ flashcard_progress           │
│ SET                          │
│   ease_factor = ...          │
│   interval = ...             │
│   repetitions = ...          │
│   next_review_date = ...     │
│   last_reviewed_at = NOW()   │
└────┬─────────────────────────┘
     │
     ▼
┌──────────────────────────────┐
│ PostgreSQL                   │
│ • Salva progresso            │
│ • Índice em next_review_date │
└────┬─────────────────────────┘
     │
     │ Próxima sessão
     ▼
┌──────────────────────────────┐
│ getFlashcardsForReview()     │
│                              │
│ SELECT * FROM                │
│ flashcard_progress           │
│ WHERE user_id = $1           │
│   AND next_review_date <= NOW()│
│ ORDER BY next_review_date    │
└────┬─────────────────────────┘
     │
     ▼
┌──────────────────────────────┐
│ Cards prontos para revisão   │
└──────────────────────────────┘
```

## 📦 Estrutura de Componentes

```
app/
├── layout.tsx (Root)
│   └── Providers
│       ├── QueryClientProvider
│       ├── ThemeProvider
│       ├── LanguageProvider
│       └── TooltipProvider
│
├── login/page.tsx
│   └── Login Component
│       └── useAuth()
│
└── (protected)/
    ├── layout.tsx
    │   └── AppSidebar
    │       ├── useAuth()
    │       └── usePathname()
    │
    ├── page.tsx (Home)
    │   └── Profile
    │       ├── useAuth()
    │       └── getAllCategoryStats()
    │
    ├── flashcards/page.tsx
    │   └── FlashcardGame
    │       ├── useAuth()
    │       ├── saveGameHistory()
    │       └── updateCategoryStats()
    │
    ├── settings/page.tsx
    │   └── Settings
    │       ├── useAuth()
    │       ├── getUserPreferences()
    │       └── updateUserPreferences()
    │
    └── study/[categoryId]/page.tsx
        └── StudyView
            ├── useParams()
            ├── getFlashcardsForReview()
            └── upsertFlashcardProgress()
```

## 🗄️ Schema do Banco de Dados

```sql
┌─────────────────────────────────────────────────────────┐
│                     auth.users                          │
│  (Gerenciado pelo Supabase)                            │
│  • id (UUID)                                            │
│  • email                                                │
│  • encrypted_password                                   │
│  • email_confirmed_at                                   │
│  • raw_user_meta_data (JSON)                           │
└────────────────┬────────────────────────────────────────┘
                 │
                 │ FK: id
                 ▼
┌─────────────────────────────────────────────────────────┐
│                   public.profiles                       │
│  • id (UUID) PK, FK → auth.users                       │
│  • email (TEXT)                                         │
│  • full_name (TEXT)                                     │
│  • avatar_url (TEXT)                                    │
│  • created_at, updated_at                               │
└────────────────┬────────────────────────────────────────┘
                 │
                 │ FK: user_id
                 │
    ┌────────────┼────────────┬────────────┬──────────────┐
    │            │            │            │              │
    ▼            ▼            ▼            ▼              ▼
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐  ┌─────────┐
│flashcard│ │  game   │ │category │ │  user   │  │ (futuro)│
│progress │ │ history │ │  stats  │ │  prefs  │  │         │
└─────────┘ └─────────┘ └─────────┘ └─────────┘  └─────────┘

Todas as tabelas têm:
• RLS habilitado
• Políticas: SELECT, INSERT, UPDATE, DELETE
• Filtro: auth.uid() = user_id
• Triggers: updated_at
```

## 🔒 Segurança - Row Level Security

```sql
-- Exemplo de política RLS

CREATE POLICY "Users can view own data"
ON public.game_history
FOR SELECT
USING (auth.uid() = user_id);

-- Fluxo de verificação:
┌──────────────┐
│ Client Query │
│ SELECT *     │
│ FROM history │
└──────┬───────┘
       │
       ▼
┌──────────────────┐
│ PostgreSQL RLS   │
│ Verifica:        │
│ auth.uid() ==    │
│ user_id?         │
└──────┬───────────┘
       │
       ├─── SIM ──→ Retorna dados
       │
       └─── NÃO ──→ Retorna vazio (sem erro)
```

## 🚀 Performance & Otimizações

### 1. React Query (Cache)
```
┌──────────────┐
│ Component    │
│ useQuery()   │
└──────┬───────┘
       │
       │ 1ª chamada: Fetch do servidor
       ▼
┌──────────────┐
│ Supabase     │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Cache        │
│ (5 min)      │
└──────┬───────┘
       │
       │ 2ª chamada: Retorna do cache
       ▼
┌──────────────┐
│ Component    │
│ (instantâneo)│
└──────────────┘
```

### 2. Índices do Banco
```sql
-- Otimizam queries frequentes

CREATE INDEX idx_flashcard_progress_next_review
ON flashcard_progress(user_id, next_review_date);

-- Query otimizada:
SELECT * FROM flashcard_progress
WHERE user_id = 'xxx'
  AND next_review_date <= NOW()
-- ↑ Usa índice, muito rápido!
```

### 3. Server Components (RSC)
```
┌──────────────────┐
│ Server Component │
│ (sem 'use client')│
└────────┬─────────┘
         │
         │ Renderiza no servidor
         │ • Fetch de dados
         │ • HTML pronto
         ▼
┌──────────────────┐
│ Cliente recebe   │
│ HTML renderizado │
│ (mais rápido!)   │
└──────────────────┘
```

## 📊 Monitoramento (Futuro)

```
┌──────────────┐
│ Next.js App  │
└──────┬───────┘
       │
       ├──→ Vercel Analytics (Performance)
       ├──→ Sentry (Errors)
       ├──→ LogRocket (Session Replay)
       └──→ Google Analytics (Usage)
```

## 🔄 CI/CD Pipeline

```
┌──────────────┐
│ Git Push     │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ GitHub       │
└──────┬───────┘
       │
       │ Webhook
       ▼
┌──────────────┐
│ Vercel       │
│ • Build      │
│ • Test       │
│ • Deploy     │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Production   │
│ (Live)       │
└──────────────┘
```

---

## 📚 Tecnologias por Camada

### Frontend
- Next.js 15 (React 18)
- TypeScript
- Tailwind CSS
- Shadcn UI
- Framer Motion

### Estado & Cache
- TanStack Query
- React Context
- Zustand (futuro)

### Backend & Database
- Supabase (BaaS)
- PostgreSQL
- Row Level Security

### Autenticação
- Supabase Auth
- Google OAuth 2.0
- JWT Tokens

### Deploy & Hosting
- Vercel (Frontend)
- Supabase (Backend)
- Vercel Edge Network (CDN)

---

**Esta arquitetura foi projetada para ser escalável, segura e performática! 🚀**
