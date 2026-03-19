# 📖 Exemplos de Uso - Supabase Integration

## 🔐 Autenticação

### Obter usuário atual
```tsx
'use client';

import { useAuth } from '@/hooks/useAuth';

export default function MyComponent() {
  const { user, loading, signOut } = useAuth();

  if (loading) return <div>Carregando...</div>;
  if (!user) return <div>Não autenticado</div>;

  return (
    <div>
      <p>Olá, {user.email}</p>
      <button onClick={signOut}>Sair</button>
    </div>
  );
}
```

## 💾 Salvando Histórico de Jogo

```tsx
'use client';

import { saveGameHistory, updateCategoryStats } from '@/lib/supabase/queries';
import { useAuth } from '@/hooks/useAuth';

export default function FlashcardGame() {
  const { user } = useAuth();

  const handleGameComplete = async (results: {
    categoryId: string;
    score: number;
    totalQuestions: number;
    correctAnswers: number;
    timeSpent: number;
  }) => {
    if (!user) return;

    try {
      // Salvar histórico do jogo
      await saveGameHistory({
        user_id: user.id,
        category_id: results.categoryId,
        score: results.score,
        total_questions: results.totalQuestions,
        correct_answers: results.correctAnswers,
        time_spent: results.timeSpent,
        completed_at: new Date().toISOString(),
      });

      // Atualizar estatísticas da categoria
      await updateCategoryStats(user.id, results.categoryId, {
        correct: results.correctAnswers,
        incorrect: results.totalQuestions - results.correctAnswers,
        score: results.score,
      });

      console.log('Progresso salvo com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar progresso:', error);
    }
  };

  return (
    // Seu componente de jogo
    <div>...</div>
  );
}
```

## 📊 Exibindo Estatísticas

```tsx
'use client';

import { useEffect, useState } from 'react';
import { getAllCategoryStats } from '@/lib/supabase/queries';
import { useAuth } from '@/hooks/useAuth';

export default function StatsPage() {
  const { user } = useAuth();
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const loadStats = async () => {
      try {
        const data = await getAllCategoryStats(user.id);
        setStats(data);
      } catch (error) {
        console.error('Erro ao carregar estatísticas:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, [user]);

  if (loading) return <div>Carregando estatísticas...</div>;

  return (
    <div>
      <h2>Suas Estatísticas</h2>
      {stats.map((stat) => (
        <div key={stat.id}>
          <h3>{stat.category_id}</h3>
          <p>Total estudado: {stat.total_studied}</p>
          <p>Acertos: {stat.total_correct}</p>
          <p>Erros: {stat.total_incorrect}</p>
          <p>Média: {stat.average_score.toFixed(1)}%</p>
        </div>
      ))}
    </div>
  );
}
```

## 🔄 Repetição Espaçada (Spaced Repetition)

### Algoritmo SM-2 (SuperMemo 2)

```tsx
'use client';

import { upsertFlashcardProgress, getFlashcardProgress } from '@/lib/supabase/queries';
import { useAuth } from '@/hooks/useAuth';

// Qualidade da resposta: 0-5
// 0: Não lembrou
// 1: Resposta incorreta, mas lembrou ao ver a resposta
// 2: Resposta incorreta, mas quase acertou
// 3: Resposta correta, mas com dificuldade
// 4: Resposta correta, com hesitação
// 5: Resposta correta, fácil

function calculateNextReview(
  quality: number,
  easeFactor: number,
  interval: number,
  repetitions: number
) {
  let newEaseFactor = easeFactor;
  let newInterval = interval;
  let newRepetitions = repetitions;

  if (quality >= 3) {
    // Resposta correta
    if (repetitions === 0) {
      newInterval = 1; // 1 dia
    } else if (repetitions === 1) {
      newInterval = 6; // 6 dias
    } else {
      newInterval = Math.round(interval * easeFactor);
    }
    newRepetitions += 1;
  } else {
    // Resposta incorreta - reiniciar
    newRepetitions = 0;
    newInterval = 1;
  }

  // Ajustar ease factor
  newEaseFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  
  // Ease factor mínimo de 1.3
  if (newEaseFactor < 1.3) {
    newEaseFactor = 1.3;
  }

  return {
    easeFactor: newEaseFactor,
    interval: newInterval,
    repetitions: newRepetitions,
  };
}

export default function FlashcardReview() {
  const { user } = useAuth();

  const handleAnswer = async (
    flashcardId: string,
    categoryId: string,
    quality: number
  ) => {
    if (!user) return;

    try {
      // Buscar progresso atual
      const currentProgress = await getFlashcardProgress(user.id, flashcardId);

      const easeFactor = currentProgress?.ease_factor || 2.5;
      const interval = currentProgress?.interval || 0;
      const repetitions = currentProgress?.repetitions || 0;

      // Calcular próxima revisão
      const { easeFactor: newEaseFactor, interval: newInterval, repetitions: newRepetitions } =
        calculateNextReview(quality, easeFactor, interval, repetitions);

      // Calcular data da próxima revisão
      const nextReviewDate = new Date();
      nextReviewDate.setDate(nextReviewDate.getDate() + newInterval);

      // Salvar progresso
      await upsertFlashcardProgress({
        user_id: user.id,
        flashcard_id: flashcardId,
        category_id: categoryId,
        ease_factor: newEaseFactor,
        interval: newInterval,
        repetitions: newRepetitions,
        next_review_date: nextReviewDate.toISOString(),
        last_reviewed_at: new Date().toISOString(),
      });

      console.log(`Próxima revisão em ${newInterval} dias`);
    } catch (error) {
      console.error('Erro ao salvar progresso:', error);
    }
  };

  return (
    <div>
      {/* Seus flashcards */}
      <button onClick={() => handleAnswer('card-1', 'aws-saa', 5)}>
        Muito Fácil (5)
      </button>
      <button onClick={() => handleAnswer('card-1', 'aws-saa', 4)}>
        Fácil (4)
      </button>
      <button onClick={() => handleAnswer('card-1', 'aws-saa', 3)}>
        Médio (3)
      </button>
      <button onClick={() => handleAnswer('card-1', 'aws-saa', 0)}>
        Não Lembrei (0)
      </button>
    </div>
  );
}
```

## 📅 Buscar Cards para Revisar Hoje

```tsx
'use client';

import { useEffect, useState } from 'react';
import { getFlashcardsForReview } from '@/lib/supabase/queries';
import { useAuth } from '@/hooks/useAuth';

export default function TodayReview() {
  const { user } = useAuth();
  const [cardsToReview, setCardsToReview] = useState([]);

  useEffect(() => {
    if (!user) return;

    const loadCards = async () => {
      try {
        // Buscar todos os cards que precisam ser revisados hoje
        const cards = await getFlashcardsForReview(user.id);
        setCardsToReview(cards);
      } catch (error) {
        console.error('Erro ao carregar cards:', error);
      }
    };

    loadCards();
  }, [user]);

  return (
    <div>
      <h2>Cards para Revisar Hoje</h2>
      <p>{cardsToReview.length} cards aguardando revisão</p>
      {/* Renderizar cards */}
    </div>
  );
}
```

## ⚙️ Preferências do Usuário

```tsx
'use client';

import { useEffect, useState } from 'react';
import { getUserPreferences, updateUserPreferences } from '@/lib/supabase/queries';
import { useAuth } from '@/hooks/useAuth';

export default function SettingsPage() {
  const { user } = useAuth();
  const [preferences, setPreferences] = useState({
    language: 'pt',
    theme: 'system',
    notifications_enabled: true,
  });

  useEffect(() => {
    if (!user) return;

    const loadPreferences = async () => {
      try {
        const prefs = await getUserPreferences(user.id);
        if (prefs) {
          setPreferences({
            language: prefs.language,
            theme: prefs.theme,
            notifications_enabled: prefs.notifications_enabled,
          });
        }
      } catch (error) {
        console.error('Erro ao carregar preferências:', error);
      }
    };

    loadPreferences();
  }, [user]);

  const handleSave = async () => {
    if (!user) return;

    try {
      await updateUserPreferences(user.id, preferences);
      console.log('Preferências salvas!');
    } catch (error) {
      console.error('Erro ao salvar preferências:', error);
    }
  };

  return (
    <div>
      <h2>Configurações</h2>
      
      <label>
        Idioma:
        <select
          value={preferences.language}
          onChange={(e) => setPreferences({ ...preferences, language: e.target.value })}
        >
          <option value="pt">Português</option>
          <option value="en">English</option>
        </select>
      </label>

      <label>
        Tema:
        <select
          value={preferences.theme}
          onChange={(e) => setPreferences({ ...preferences, theme: e.target.value })}
        >
          <option value="light">Claro</option>
          <option value="dark">Escuro</option>
          <option value="system">Sistema</option>
        </select>
      </label>

      <label>
        <input
          type="checkbox"
          checked={preferences.notifications_enabled}
          onChange={(e) =>
            setPreferences({ ...preferences, notifications_enabled: e.target.checked })
          }
        />
        Ativar notificações
      </label>

      <button onClick={handleSave}>Salvar</button>
    </div>
  );
}
```

## 📈 Histórico de Jogos

```tsx
'use client';

import { useEffect, useState } from 'react';
import { getGameHistory } from '@/lib/supabase/queries';
import { useAuth } from '@/hooks/useAuth';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function HistoryPage() {
  const { user } = useAuth();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (!user) return;

    const loadHistory = async () => {
      try {
        const data = await getGameHistory(user.id, 20); // Últimos 20 jogos
        setHistory(data);
      } catch (error) {
        console.error('Erro ao carregar histórico:', error);
      }
    };

    loadHistory();
  }, [user]);

  return (
    <div>
      <h2>Histórico de Jogos</h2>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Categoria</th>
            <th>Score</th>
            <th>Acertos</th>
            <th>Tempo</th>
          </tr>
        </thead>
        <tbody>
          {history.map((game) => (
            <tr key={game.id}>
              <td>
                {format(new Date(game.completed_at), 'dd/MM/yyyy HH:mm', {
                  locale: ptBR,
                })}
              </td>
              <td>{game.category_id}</td>
              <td>{game.score}%</td>
              <td>
                {game.correct_answers}/{game.total_questions}
              </td>
              <td>{Math.floor(game.time_spent / 60)}min</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

## 🔄 Migrar Dados do localStorage

```tsx
'use client';

import { useEffect } from 'react';
import { saveGameHistory } from '@/lib/supabase/queries';
import { useAuth } from '@/hooks/useAuth';

export default function MigrateLocalData() {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const migrateData = async () => {
      // Verificar se já migrou
      const migrated = localStorage.getItem('data_migrated');
      if (migrated) return;

      try {
        // Buscar dados do localStorage
        const localHistory = localStorage.getItem('gameHistory');
        if (!localHistory) return;

        const history = JSON.parse(localHistory);

        // Migrar cada registro
        for (const game of history) {
          await saveGameHistory({
            user_id: user.id,
            category_id: game.categoryId,
            score: game.score,
            total_questions: game.totalQuestions,
            correct_answers: game.correctAnswers,
            time_spent: game.timeSpent,
            completed_at: game.completedAt,
          });
        }

        // Marcar como migrado
        localStorage.setItem('data_migrated', 'true');
        console.log('Dados migrados com sucesso!');
      } catch (error) {
        console.error('Erro ao migrar dados:', error);
      }
    };

    migrateData();
  }, [user]);

  return null; // Componente invisível
}
```

## 🎯 Dicas de Performance

### 1. Use React Query para Cache
```tsx
import { useQuery } from '@tanstack/react-query';
import { getAllCategoryStats } from '@/lib/supabase/queries';

const { data, isLoading } = useQuery({
  queryKey: ['categoryStats', user?.id],
  queryFn: () => getAllCategoryStats(user!.id),
  enabled: !!user,
  staleTime: 5 * 60 * 1000, // 5 minutos
});
```

### 2. Realtime Subscriptions (Opcional)
```tsx
useEffect(() => {
  if (!user) return;

  const supabase = createClient();
  
  const channel = supabase
    .channel('game_history_changes')
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'game_history',
        filter: `user_id=eq.${user.id}`,
      },
      (payload) => {
        console.log('Novo jogo adicionado!', payload);
        // Atualizar estado
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}, [user]);
```
