// Utilitários para gerenciar histórico do jogo de flashcards

export interface CardResult {
  cardId: string;
  question: string;
  category: string;
  wasCorrect: boolean;
  selectedAnswer: string | null;
  correctAnswer: string;
  timestamp: string;
  markedForReview: boolean;
}

export interface GameHistory {
  results: CardResult[];
  totalGames: number;
  lastPlayed: string;
}

const STORAGE_KEY = "flashcard-game-history";

/**
 * Obtém o histórico completo do localStorage
 */
export function getGameHistory(): GameHistory {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      return { results: [], totalGames: 0, lastPlayed: "" };
    }
    return JSON.parse(data);
  } catch (error) {
    console.error("Erro ao ler histórico:", error);
    return { results: [], totalGames: 0, lastPlayed: "" };
  }
}

/**
 * Obtém estatísticas gerais do histórico
 */
export function getGameStats() {
  const history = getGameHistory();
  const totalCards = history.results.length;
  const correctCards = history.results.filter((r) => r.wasCorrect).length;
  const markedForReview = history.results.filter((r) => r.markedForReview).length;
  
  // Estatísticas por categoria
  const categoryStats = history.results.reduce((acc, result) => {
    if (!acc[result.category]) {
      acc[result.category] = { total: 0, correct: 0 };
    }
    acc[result.category].total++;
    if (result.wasCorrect) {
      acc[result.category].correct++;
    }
    return acc;
  }, {} as Record<string, { total: number; correct: number }>);

  // Cards que mais erraram
  const cardErrors = history.results
    .filter((r) => !r.wasCorrect)
    .reduce((acc, result) => {
      if (!acc[result.cardId]) {
        acc[result.cardId] = {
          question: result.question,
          category: result.category,
          count: 0,
        };
      }
      acc[result.cardId].count++;
      return acc;
    }, {} as Record<string, { question: string; category: string; count: number }>);

  const mostMissedCards = Object.values(cardErrors)
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return {
    totalGames: history.totalGames,
    totalCards,
    correctCards,
    incorrectCards: totalCards - correctCards,
    accuracy: totalCards > 0 ? Math.round((correctCards / totalCards) * 100) : 0,
    markedForReview,
    lastPlayed: history.lastPlayed,
    categoryStats,
    mostMissedCards,
  };
}

/**
 * Obtém cards marcados para revisão
 */
export function getCardsForReview(): CardResult[] {
  const history = getGameHistory();
  return history.results.filter((r) => r.markedForReview);
}

/**
 * Limpa o histórico
 */
export function clearGameHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Erro ao limpar histórico:", error);
  }
}

/**
 * Exporta histórico como JSON para download
 */
export function exportHistory(): string {
  const history = getGameHistory();
  return JSON.stringify(history, null, 2);
}
