// Global type definitions

export interface Flashcard {
  id: string;
  category: string;
  question: string;
  answer: string;
  proTip?: string;
  codeSnippet?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  totalCards: number;
  completedCards: number;
}

export interface StudyProgress {
  categoryId: string;
  completedCards: string[];
  lastStudied: string;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  autoFlip: boolean;
  showProTips: boolean;
}
