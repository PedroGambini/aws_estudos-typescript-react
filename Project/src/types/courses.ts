// Tipos para o sistema de cursos gamificado

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type CourseCategory = 'compute' | 'storage' | 'database' | 'networking' | 'security' | 'serverless' | 'containers' | 'analytics';

export interface Question {
  id: string;
  question: {
    pt: string;
    en: string;
  };
  options: {
    pt: string[];
    en: string[];
  };
  correctAnswer: number; // índice da resposta correta
  explanation: {
    pt: string;
    en: string;
  };
  proTip?: {
    pt: string;
    en: string;
  };
  codeSnippet?: string;
  difficulty: DifficultyLevel;
  xpReward: number; // XP base da questão
}

export interface CourseLevel {
  id: string;
  levelNumber: number;
  name: {
    pt: string;
    en: string;
  };
  difficulty: DifficultyLevel;
  questions: Question[];
  requiredScore: number; // % mínimo para passar (ex: 70)
  xpReward: number; // XP bônus por completar o nível
  timeBonus: {
    gold: number; // segundos para ganhar bônus gold (ex: 120s)
    silver: number; // segundos para ganhar bônus silver (ex: 180s)
    bronze: number; // segundos para ganhar bônus bronze (ex: 240s)
  };
  unlocked: boolean;
}

export interface Course {
  id: string;
  name: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  icon: string;
  category: CourseCategory;
  levels: CourseLevel[];
  totalLevels: number;
  completedLevels: number;
  medal?: CourseMedal;
  color: string; // cor do gradiente
}

export interface CourseMedal {
  id: string;
  user_id: string;
  course_id: string;
  course_name: {
    pt: string;
    en: string;
  };
  earned_at: string;
  completion_time: number; // tempo total em segundos
  average_score: number; // % média de acerto
  rank: 'bronze' | 'silver' | 'gold' | 'platinum';
}

export interface CourseProgress {
  user_id: string;
  course_id: string;
  current_level: number;
  completed_levels: number[];
  total_xp_earned: number;
  best_times: Record<number, number>; // levelNumber -> tempo em segundos
  scores: Record<number, number>; // levelNumber -> % de acerto
  last_played: string;
}

export interface LevelResult {
  levelId: string;
  levelNumber: number;
  score: number; // % de acerto
  correctAnswers: number;
  totalQuestions: number;
  timeSpent: number; // segundos
  xpEarned: number;
  timeBonus: 'gold' | 'silver' | 'bronze' | null;
  timeBonusXp: number;
  passed: boolean;
  newLevel: boolean; // subiu de nível?
  newPlayerLevel: number;
  comboMultiplier: number; // multiplicador de combo
}

export interface Achievement {
  id: string;
  name: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  icon: string;
  category: 'time' | 'questions' | 'streak' | 'speed' | 'accuracy' | 'special';
  requirement: number;
  progress: number;
  unlocked: boolean;
  unlockedAt?: string;
  xpReward: number;
}

export interface PlayerStats {
  user_id: string;
  level: number;
  total_xp: number;
  total_questions_answered: number;
  total_correct_answers: number;
  total_study_time: number; // segundos
  current_streak: number; // dias consecutivos
  longest_streak: number;
  last_study_date: string | null;
  courses_completed: number;
  created_at: string;
  updated_at: string;
}

export interface CategoryGroup {
  id: string;
  name: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  icon: string;
  courses: Course[];
  color: string;
}
