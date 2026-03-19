import { Course, CategoryGroup, Achievement } from '@/types/courses';

// Grupos de categorias organizados
export const categoryGroups: CategoryGroup[] = [
  {
    id: 'compute-group',
    name: {
      pt: 'Computação',
      en: 'Compute'
    },
    description: {
      pt: 'Serviços de processamento e execução',
      en: 'Processing and execution services'
    },
    icon: 'Server',
    color: 'from-blue-500 to-cyan-500',
    courses: []
  },
  {
    id: 'storage-group',
    name: {
      pt: 'Armazenamento',
      en: 'Storage'
    },
    description: {
      pt: 'Soluções de armazenamento de dados',
      en: 'Data storage solutions'
    },
    icon: 'HardDrive',
    color: 'from-emerald-500 to-green-500',
    courses: []
  },
  {
    id: 'database-group',
    name: {
      pt: 'Banco de Dados',
      en: 'Database'
    },
    description: {
      pt: 'Serviços de banco de dados gerenciados',
      en: 'Managed database services'
    },
    icon: 'Database',
    color: 'from-purple-500 to-fuchsia-500',
    courses: []
  },
  {
    id: 'networking-group',
    name: {
      pt: 'Redes',
      en: 'Networking'
    },
    description: {
      pt: 'Serviços de rede e conectividade',
      en: 'Network and connectivity services'
    },
    icon: 'Network',
    color: 'from-amber-500 to-orange-500',
    courses: []
  }
];

// Cursos disponíveis
export const courses: Course[] = [
  // COMPUTE
  {
    id: 'ec2-fundamentals',
    name: {
      pt: 'EC2 - Fundamentos',
      en: 'EC2 - Fundamentals'
    },
    description: {
      pt: 'Aprenda os conceitos básicos do Amazon EC2',
      en: 'Learn the basics of Amazon EC2'
    },
    icon: 'Server',
    category: 'compute',
    color: 'from-blue-500 to-cyan-500',
    totalLevels: 5,
    completedLevels: 0,
    levels: [
      {
        id: 'ec2-level-1',
        levelNumber: 1,
        name: { pt: 'Introdução ao EC2', en: 'Introduction to EC2' },
        difficulty: 'beginner',
        questions: [],
        requiredScore: 70,
        xpReward: 100,
        timeBonus: { gold: 120, silver: 180, bronze: 240 },
        unlocked: true
      },
      {
        id: 'ec2-level-2',
        levelNumber: 2,
        name: { pt: 'Tipos de Instância', en: 'Instance Types' },
        difficulty: 'beginner',
        questions: [],
        requiredScore: 70,
        xpReward: 150,
        timeBonus: { gold: 150, silver: 210, bronze: 270 },
        unlocked: false
      },
      {
        id: 'ec2-level-3',
        levelNumber: 3,
        name: { pt: 'Modelos de Preço', en: 'Pricing Models' },
        difficulty: 'intermediate',
        questions: [],
        requiredScore: 75,
        xpReward: 200,
        timeBonus: { gold: 180, silver: 240, bronze: 300 },
        unlocked: false
      },
      {
        id: 'ec2-level-4',
        levelNumber: 4,
        name: { pt: 'Auto Scaling', en: 'Auto Scaling' },
        difficulty: 'intermediate',
        questions: [],
        requiredScore: 75,
        xpReward: 250,
        timeBonus: { gold: 200, silver: 270, bronze: 340 },
        unlocked: false
      },
      {
        id: 'ec2-level-5',
        levelNumber: 5,
        name: { pt: 'Otimização Avançada', en: 'Advanced Optimization' },
        difficulty: 'advanced',
        questions: [],
        requiredScore: 80,
        xpReward: 300,
        timeBonus: { gold: 240, silver: 320, bronze: 400 },
        unlocked: false
      }
    ]
  },
  {
    id: 'lambda-serverless',
    name: {
      pt: 'Lambda - Serverless',
      en: 'Lambda - Serverless'
    },
    description: {
      pt: 'Domine a computação serverless com AWS Lambda',
      en: 'Master serverless computing with AWS Lambda'
    },
    icon: 'Zap',
    category: 'serverless',
    color: 'from-violet-500 to-purple-500',
    totalLevels: 4,
    completedLevels: 0,
    levels: [
      {
        id: 'lambda-level-1',
        levelNumber: 1,
        name: { pt: 'Conceitos Básicos', en: 'Basic Concepts' },
        difficulty: 'beginner',
        questions: [],
        requiredScore: 70,
        xpReward: 100,
        timeBonus: { gold: 120, silver: 180, bronze: 240 },
        unlocked: true
      },
      {
        id: 'lambda-level-2',
        levelNumber: 2,
        name: { pt: 'Triggers e Eventos', en: 'Triggers and Events' },
        difficulty: 'intermediate',
        questions: [],
        requiredScore: 75,
        xpReward: 200,
        timeBonus: { gold: 150, silver: 210, bronze: 270 },
        unlocked: false
      },
      {
        id: 'lambda-level-3',
        levelNumber: 3,
        name: { pt: 'Otimização', en: 'Optimization' },
        difficulty: 'advanced',
        questions: [],
        requiredScore: 80,
        xpReward: 300,
        timeBonus: { gold: 180, silver: 240, bronze: 300 },
        unlocked: false
      },
      {
        id: 'lambda-level-4',
        levelNumber: 4,
        name: { pt: 'Arquiteturas Avançadas', en: 'Advanced Architectures' },
        difficulty: 'expert',
        questions: [],
        requiredScore: 85,
        xpReward: 400,
        timeBonus: { gold: 200, silver: 270, bronze: 340 },
        unlocked: false
      }
    ]
  },
  // STORAGE
  {
    id: 's3-storage',
    name: {
      pt: 'S3 - Armazenamento de Objetos',
      en: 'S3 - Object Storage'
    },
    description: {
      pt: 'Domine o Amazon S3 e suas classes de armazenamento',
      en: 'Master Amazon S3 and its storage classes'
    },
    icon: 'Database',
    category: 'storage',
    color: 'from-emerald-500 to-green-500',
    totalLevels: 5,
    completedLevels: 0,
    levels: [
      {
        id: 's3-level-1',
        levelNumber: 1,
        name: { pt: 'Fundamentos do S3', en: 'S3 Fundamentals' },
        difficulty: 'beginner',
        questions: [],
        requiredScore: 70,
        xpReward: 100,
        timeBonus: { gold: 120, silver: 180, bronze: 240 },
        unlocked: true
      },
      {
        id: 's3-level-2',
        levelNumber: 2,
        name: { pt: 'Classes de Armazenamento', en: 'Storage Classes' },
        difficulty: 'intermediate',
        questions: [],
        requiredScore: 75,
        xpReward: 200,
        timeBonus: { gold: 150, silver: 210, bronze: 270 },
        unlocked: false
      },
      {
        id: 's3-level-3',
        levelNumber: 3,
        name: { pt: 'Segurança e Permissões', en: 'Security and Permissions' },
        difficulty: 'intermediate',
        questions: [],
        requiredScore: 75,
        xpReward: 200,
        timeBonus: { gold: 180, silver: 240, bronze: 300 },
        unlocked: false
      },
      {
        id: 's3-level-4',
        levelNumber: 4,
        name: { pt: 'Lifecycle Policies', en: 'Lifecycle Policies' },
        difficulty: 'advanced',
        questions: [],
        requiredScore: 80,
        xpReward: 300,
        timeBonus: { gold: 200, silver: 270, bronze: 340 },
        unlocked: false
      },
      {
        id: 's3-level-5',
        levelNumber: 5,
        name: { pt: 'Performance e Otimização', en: 'Performance and Optimization' },
        difficulty: 'expert',
        questions: [],
        requiredScore: 85,
        xpReward: 400,
        timeBonus: { gold: 240, silver: 320, bronze: 400 },
        unlocked: false
      }
    ]
  },
  {
    id: 'ebs-volumes',
    name: {
      pt: 'EBS - Volumes de Bloco',
      en: 'EBS - Block Volumes'
    },
    description: {
      pt: 'Aprenda sobre volumes EBS e suas aplicações',
      en: 'Learn about EBS volumes and their applications'
    },
    icon: 'HardDrive',
    category: 'storage',
    color: 'from-teal-500 to-cyan-500',
    totalLevels: 3,
    completedLevels: 0,
    levels: [
      {
        id: 'ebs-level-1',
        levelNumber: 1,
        name: { pt: 'Introdução ao EBS', en: 'Introduction to EBS' },
        difficulty: 'beginner',
        questions: [],
        requiredScore: 70,
        xpReward: 100,
        timeBonus: { gold: 120, silver: 180, bronze: 240 },
        unlocked: true
      },
      {
        id: 'ebs-level-2',
        levelNumber: 2,
        name: { pt: 'Tipos de Volume', en: 'Volume Types' },
        difficulty: 'intermediate',
        questions: [],
        requiredScore: 75,
        xpReward: 200,
        timeBonus: { gold: 150, silver: 210, bronze: 270 },
        unlocked: false
      },
      {
        id: 'ebs-level-3',
        levelNumber: 3,
        name: { pt: 'Snapshots e Backup', en: 'Snapshots and Backup' },
        difficulty: 'advanced',
        questions: [],
        requiredScore: 80,
        xpReward: 300,
        timeBonus: { gold: 180, silver: 240, bronze: 300 },
        unlocked: false
      }
    ]
  }
];

// Conquistas disponíveis
export const achievements: Achievement[] = [
  {
    id: 'first-course',
    name: { pt: 'Primeira Jornada', en: 'First Journey' },
    description: { pt: 'Complete seu primeiro curso', en: 'Complete your first course' },
    icon: 'Trophy',
    category: 'special',
    requirement: 1,
    progress: 0,
    unlocked: false,
    xpReward: 500
  },
  {
    id: 'speed-demon',
    name: { pt: 'Demônio da Velocidade', en: 'Speed Demon' },
    description: { pt: 'Ganhe 10 bônus de tempo Gold', en: 'Earn 10 Gold time bonuses' },
    icon: 'Zap',
    category: 'speed',
    requirement: 10,
    progress: 0,
    unlocked: false,
    xpReward: 300
  },
  {
    id: 'perfect-score',
    name: { pt: 'Perfeição', en: 'Perfection' },
    description: { pt: 'Acerte 100% das questões em um nível', en: 'Get 100% correct in a level' },
    icon: 'Target',
    category: 'accuracy',
    requirement: 1,
    progress: 0,
    unlocked: false,
    xpReward: 200
  },
  {
    id: 'week-streak',
    name: { pt: 'Dedicação Semanal', en: 'Weekly Dedication' },
    description: { pt: 'Estude por 7 dias consecutivos', en: 'Study for 7 consecutive days' },
    icon: 'Calendar',
    category: 'streak',
    requirement: 7,
    progress: 0,
    unlocked: false,
    xpReward: 400
  },
  {
    id: 'hundred-questions',
    name: { pt: 'Centenário', en: 'Centurion' },
    description: { pt: 'Responda 100 questões', en: 'Answer 100 questions' },
    icon: 'BookOpen',
    category: 'questions',
    requirement: 100,
    progress: 0,
    unlocked: false,
    xpReward: 300
  },
  {
    id: 'five-hours',
    name: { pt: 'Maratonista', en: 'Marathon Runner' },
    description: { pt: 'Acumule 5 horas de estudo', en: 'Accumulate 5 hours of study' },
    icon: 'Clock',
    category: 'time',
    requirement: 18000, // 5 horas em segundos
    progress: 0,
    unlocked: false,
    xpReward: 500
  },
  {
    id: 'early-bird',
    name: { pt: 'Madrugador', en: 'Early Bird' },
    description: { pt: 'Estude entre 5h e 7h da manhã', en: 'Study between 5am and 7am' },
    icon: 'Sunrise',
    category: 'special',
    requirement: 1,
    progress: 0,
    unlocked: false,
    xpReward: 150
  },
  {
    id: 'night-owl',
    name: { pt: 'Coruja Noturna', en: 'Night Owl' },
    description: { pt: 'Estude entre 23h e 1h da manhã', en: 'Study between 11pm and 1am' },
    icon: 'Moon',
    category: 'special',
    requirement: 1,
    progress: 0,
    unlocked: false,
    xpReward: 150
  },
  {
    id: 'combo-master',
    name: { pt: 'Mestre do Combo', en: 'Combo Master' },
    description: { pt: 'Acerte 10 questões seguidas', en: 'Get 10 correct answers in a row' },
    icon: 'Flame',
    category: 'accuracy',
    requirement: 10,
    progress: 0,
    unlocked: false,
    xpReward: 250
  },
  {
    id: 'all-categories',
    name: { pt: 'Polivalente', en: 'Jack of All Trades' },
    description: { pt: 'Complete pelo menos um curso de cada categoria', en: 'Complete at least one course from each category' },
    icon: 'Award',
    category: 'special',
    requirement: 4,
    progress: 0,
    unlocked: false,
    xpReward: 1000
  }
];

// Função para calcular XP necessário para próximo nível
export function getXpForLevel(level: number): number {
  // Fórmula: 100 * level^1.5
  return Math.floor(100 * Math.pow(level, 1.5));
}

// Função para calcular nível baseado no XP total
export function getLevelFromXp(totalXp: number): number {
  let level = 1;
  let xpNeeded = 0;
  
  while (xpNeeded <= totalXp) {
    xpNeeded += getXpForLevel(level);
    if (xpNeeded <= totalXp) {
      level++;
    }
  }
  
  return level;
}

// Função para calcular XP do bônus de tempo
export function calculateTimeBonus(timeSpent: number, timeBonus: { gold: number; silver: number; bronze: number }): { rank: 'gold' | 'silver' | 'bronze' | null; xp: number } {
  if (timeSpent <= timeBonus.gold) {
    return { rank: 'gold', xp: 100 };
  } else if (timeSpent <= timeBonus.silver) {
    return { rank: 'silver', xp: 50 };
  } else if (timeSpent <= timeBonus.bronze) {
    return { rank: 'bronze', xp: 25 };
  }
  return { rank: null, xp: 0 };
}

// Função para calcular multiplicador de combo
export function getComboMultiplier(consecutiveCorrect: number): number {
  if (consecutiveCorrect >= 10) return 3;
  if (consecutiveCorrect >= 5) return 2;
  if (consecutiveCorrect >= 3) return 1.5;
  return 1;
}
