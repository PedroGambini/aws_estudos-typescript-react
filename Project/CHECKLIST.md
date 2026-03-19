# ✅ Checklist de Migração

## 🎯 Fase 1: Configuração Inicial

- [ ] **Instalar dependências**
  ```bash
  cd Project
  npm install
  ```

- [ ] **Criar projeto no Supabase**
  - Acesse [supabase.com](https://supabase.com)
  - Clique em "New Project"
  - Anote a senha do banco de dados

- [ ] **Executar migrations SQL**
  - Abra SQL Editor no Supabase
  - Cole o conteúdo de `supabase/migrations/001_initial_schema.sql`
  - Execute (Run)

- [ ] **Configurar Google OAuth**
  - [ ] Criar projeto no Google Cloud Console
  - [ ] Criar OAuth 2.0 Client ID
  - [ ] Adicionar redirect URIs
  - [ ] Copiar Client ID e Secret
  - [ ] Configurar no Supabase (Authentication > Providers > Google)

- [ ] **Configurar variáveis de ambiente**
  ```bash
  cp .env.example .env.local
  ```
  - [ ] Adicionar `NEXT_PUBLIC_SUPABASE_URL`
  - [ ] Adicionar `NEXT_PUBLIC_SUPABASE_ANON_KEY`

- [ ] **Limpar arquivos do Vite**
  ```bash
  # Linux/Mac
  bash cleanup.sh
  
  # Windows (PowerShell)
  Remove-Item vite.config.ts, vitest.config.ts, index.html, src/main.tsx, src/App.tsx, src/vite-env.d.ts, tsconfig.app.json, tsconfig.node.json
  ```

- [ ] **Testar servidor de desenvolvimento**
  ```bash
  npm run dev
  ```
  - Deve abrir em http://localhost:3000

## 🔐 Fase 2: Testar Autenticação

- [ ] **Testar login com Google**
  - Acesse http://localhost:3000/login
  - Clique em "Continuar com Google"
  - Faça login com sua conta Google
  - Deve redirecionar para a home

- [ ] **Verificar perfil criado**
  - No Supabase, vá em Table Editor > profiles
  - Deve ter um registro com seu email

- [ ] **Testar logout**
  - Clique no botão "Sair" na sidebar
  - Deve redirecionar para /login

- [ ] **Testar proteção de rotas**
  - Faça logout
  - Tente acessar http://localhost:3000/
  - Deve redirecionar para /login

## 🔄 Fase 3: Migrar Componentes

### Componentes de Página

- [ ] **Profile.tsx**
  - [ ] Adicionar `'use client'` se necessário
  - [ ] Substituir `useNavigate` por `useRouter`
  - [ ] Substituir `Link` do react-router por next/link
  - [ ] Testar navegação

- [ ] **Dashboard.tsx**
  - [ ] Adicionar `'use client'` se necessário
  - [ ] Atualizar imports de navegação
  - [ ] Testar funcionalidade

- [ ] **StudyView.tsx**
  - [ ] Adicionar `'use client'` se necessário
  - [ ] Usar `useParams()` do next/navigation para pegar categoryId
  - [ ] Atualizar navegação

- [ ] **FlashcardGame.tsx**
  - [ ] Adicionar `'use client'` se necessário
  - [ ] Integrar salvamento no Supabase
  - [ ] Testar salvamento de histórico

- [ ] **Settings.tsx**
  - [ ] Adicionar `'use client'` se necessário
  - [ ] Integrar com user_preferences
  - [ ] Testar salvamento de preferências

### Componentes Compartilhados

- [ ] **NavLink.tsx**
  - Verificar se usa react-router-dom
  - Atualizar se necessário

- [ ] **CategoryGrid.tsx**
  - Verificar navegação
  - Atualizar Links se necessário

- [ ] **Flashcard.tsx**
  - Verificar se precisa de alterações

## 💾 Fase 4: Integrar Banco de Dados

- [ ] **Salvar histórico de jogos**
  - [ ] Importar `saveGameHistory` em FlashcardGame
  - [ ] Chamar ao finalizar jogo
  - [ ] Testar salvamento
  - [ ] Verificar no Supabase (Table Editor > game_history)

- [ ] **Atualizar estatísticas**
  - [ ] Importar `updateCategoryStats`
  - [ ] Chamar junto com saveGameHistory
  - [ ] Testar atualização
  - [ ] Verificar no Supabase (Table Editor > category_stats)

- [ ] **Exibir estatísticas no Profile**
  - [ ] Buscar stats com `getAllCategoryStats`
  - [ ] Renderizar no componente
  - [ ] Testar visualização

- [ ] **Exibir histórico**
  - [ ] Buscar com `getGameHistory`
  - [ ] Criar componente de histórico
  - [ ] Testar visualização

## 🔄 Fase 5: Repetição Espaçada

- [ ] **Implementar algoritmo SM-2**
  - [ ] Copiar função `calculateNextReview` do USAGE_EXAMPLES.md
  - [ ] Criar componente de revisão
  - [ ] Testar cálculo de intervalos

- [ ] **Salvar progresso de flashcards**
  - [ ] Usar `upsertFlashcardProgress`
  - [ ] Salvar ao responder card
  - [ ] Testar salvamento

- [ ] **Buscar cards para revisar**
  - [ ] Usar `getFlashcardsForReview`
  - [ ] Criar página "Revisar Hoje"
  - [ ] Testar busca

- [ ] **Adicionar botões de qualidade**
  - [ ] Muito Fácil (5)
  - [ ] Fácil (4)
  - [ ] Médio (3)
  - [ ] Difícil (2)
  - [ ] Muito Difícil (1)
  - [ ] Não Lembrei (0)

## 🎨 Fase 6: Melhorias de UX

- [ ] **Loading states**
  - [ ] Adicionar spinners durante carregamento
  - [ ] Skeleton screens para listas

- [ ] **Error handling**
  - [ ] Toast notifications para erros
  - [ ] Mensagens amigáveis

- [ ] **Feedback visual**
  - [ ] Animações ao salvar
  - [ ] Confirmações de sucesso

- [ ] **Otimizações**
  - [ ] Usar React Query para cache
  - [ ] Debounce em inputs
  - [ ] Lazy loading de componentes

## 🧪 Fase 7: Testes

- [ ] **Testar fluxo completo**
  - [ ] Login → Estudar → Salvar → Ver estatísticas
  - [ ] Testar em diferentes categorias
  - [ ] Testar repetição espaçada

- [ ] **Testar edge cases**
  - [ ] Primeiro uso (sem dados)
  - [ ] Muitos dados
  - [ ] Conexão lenta
  - [ ] Offline (deve mostrar erro)

- [ ] **Testar em diferentes dispositivos**
  - [ ] Desktop
  - [ ] Tablet
  - [ ] Mobile

## 🚀 Fase 8: Deploy

- [ ] **Preparar para produção**
  - [ ] Revisar variáveis de ambiente
  - [ ] Testar build: `npm run build`
  - [ ] Testar produção local: `npm start`

- [ ] **Deploy na Vercel**
  ```bash
  npm i -g vercel
  vercel
  ```
  - [ ] Adicionar variáveis de ambiente
  - [ ] Testar URL de produção

- [ ] **Configurar URLs de produção**
  - [ ] Adicionar no Google OAuth (redirect URIs)
  - [ ] Adicionar no Supabase (Site URL e Redirect URLs)

- [ ] **Testar em produção**
  - [ ] Login funciona
  - [ ] Dados são salvos
  - [ ] Navegação funciona

## 📊 Fase 9: Monitoramento

- [ ] **Configurar analytics** (opcional)
  - [ ] Google Analytics
  - [ ] Vercel Analytics

- [ ] **Monitorar erros** (opcional)
  - [ ] Sentry
  - [ ] LogRocket

- [ ] **Monitorar performance**
  - [ ] Lighthouse scores
  - [ ] Core Web Vitals

## 🎉 Conclusão

- [ ] **Documentação**
  - [ ] Atualizar README.md
  - [ ] Documentar APIs customizadas
  - [ ] Criar guia de contribuição

- [ ] **Backup**
  - [ ] Fazer backup do banco Supabase
  - [ ] Documentar schema

- [ ] **Celebrar! 🎊**
  - Você migrou com sucesso para Next.js + Supabase!

---

## 📝 Notas

Use este espaço para anotar problemas encontrados ou decisões tomadas:

```
Data: ___/___/___
Problema: 
Solução:

Data: ___/___/___
Problema:
Solução:
```

## 🆘 Precisa de Ajuda?

- [Next.js Discord](https://discord.gg/nextjs)
- [Supabase Discord](https://discord.supabase.com)
- [Stack Overflow](https://stackoverflow.com)

## 📚 Recursos Úteis

- [SETUP.md](./SETUP.md) - Guia de configuração detalhado
- [MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md) - Resumo das mudanças
- [USAGE_EXAMPLES.md](./USAGE_EXAMPLES.md) - Exemplos de código
