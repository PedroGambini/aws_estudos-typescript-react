# Integração do Sistema de Cursos com Supabase

## ✅ Concluído

A integração do sistema de cursos gamificado com o Supabase foi concluída com sucesso!

## Arquivos Criados/Modificados

### 1. Migration do Banco de Dados
- `supabase/migrations/003_courses_system.sql`
  - Tabelas: course_progress, course_medals, user_achievements, player_stats, level_history, user_streaks
  - Triggers automáticos para streak e timestamps
  - RLS (Row Level Security) configurado
  - Funções para cálculo de streak e criação automática de player_stats

### 2. Queries do Supabase
- `src/lib/supabase/courses-queries.ts`
  - Funções para gerenciar progresso de cursos
  - Sistema de medalhas e conquistas
  - Estatísticas do jogador
  - Histórico de níveis
  - Sistema de streaks
  - Leaderboard global
  - Fluxo completo de conclusão de nível

### 3. Hooks Customizados
- `src/hooks/useCourses.ts`
  - Carrega todos os cursos com progresso do usuário
  - Sincroniza medalhas e estatísticas
  - Gerencia estado global dos cursos

- `src/hooks/useCourseProgress.ts`
  - Gerencia progresso individual de cada curso
  - Salva resultados de níveis no Supabase
  - Atualiza desbloqueio de níveis

### 4. Componentes Atualizados
- `src/components-pages/Courses.tsx`
  - Usa hook `useCourses` para carregar dados do Supabase
  - Mostra loading state
  - Atualiza lista após completar curso

- `src/components-pages/CourseDetail.tsx`
  - Usa hook `useCourseProgress` para gerenciar progresso
  - Salva resultados no Supabase ao completar nível
  - Mostra loading state

### 5. Tipos Atualizados
- `src/types/courses.ts`
  - Ajustados para usar snake_case (padrão do Supabase)
  - Interfaces: CourseProgress, CourseMedal, PlayerStats

## Funcionalidades Implementadas

### ✅ Progresso de Cursos
- Salva progresso de cada curso por usuário
- Rastreia níveis completados
- Armazena melhores tempos e scores
- Calcula XP total ganho por curso

### ✅ Sistema de Medalhas
- Medalhas por curso completado
- Ranks: Bronze, Silver, Gold, Platinum
- Baseado em tempo de conclusão e score médio

### ✅ Conquistas (Achievements)
- Sistema de progresso incremental
- Conquistas desbloqueáveis
- Categorias: tempo, questões, streak, velocidade, precisão, especiais

### ✅ Estatísticas do Jogador
- Nível do jogador baseado em XP total
- Total de questões respondidas
- Taxa de acerto
- Tempo total de estudo
- Streak atual e recorde
- Cursos completados

### ✅ Histórico de Níveis
- Registra cada tentativa de nível
- Armazena score, tempo, XP ganho
- Bônus de tempo (gold, silver, bronze)
- Multiplicador de combo

### ✅ Sistema de Streaks
- Rastreamento diário de estudo
- Cálculo automático via trigger
- Histórico de 30 dias

### ✅ Leaderboard
- Ranking global por XP
- Posição do usuário no ranking

## Como Usar

### 1. Aplicar Migration
```bash
cd Project
npx supabase db push
```

### 2. Usar nos Componentes
```tsx
import { useCourses } from '@/hooks/useCourses';

function MeuComponente() {
  const { courses, loading, refreshCourses } = useCourses();
  
  if (loading) return <Loading />;
  
  return <div>{/* renderizar cursos */}</div>;
}
```

### 3. Completar Nível
```tsx
import { useCourseProgress } from '@/hooks/useCourseProgress';

function CourseDetail({ course }) {
  const { handleLevelComplete } = useCourseProgress(course);
  
  const onComplete = async (result) => {
    await handleLevelComplete(result);
    // Resultado salvo automaticamente no Supabase
  };
}
```

## Fluxo de Dados

1. Usuário completa um nível
2. `handleLevelComplete` é chamado
3. `completeLevelFlow` executa:
   - Salva resultado no `level_history`
   - Atualiza `course_progress`
   - Incrementa `player_stats`
   - Registra sessão em `user_streaks`
   - Verifica e atualiza `user_achievements`
4. Estado local é atualizado
5. UI reflete as mudanças

## Segurança

- RLS habilitado em todas as tabelas
- Usuários só podem ver/editar seus próprios dados
- Triggers garantem integridade dos dados
- Validações no banco de dados

## Próximos Passos (Opcional)

- [ ] Adicionar sistema de notificações para conquistas
- [ ] Implementar leaderboard de amigos
- [ ] Adicionar gráficos de progresso
- [ ] Sistema de recompensas por streak
- [ ] Badges visuais para conquistas
- [ ] Exportar estatísticas

## Notas Técnicas

- Todos os campos do banco usam `snake_case`
- Interfaces TypeScript refletem estrutura do banco
- Hooks gerenciam sincronização automática
- Loading states implementados
- Error handling em todas as queries
