// Application constants

export const APP_CONFIG = {
  name: 'AWS Flashcards',
  version: '1.0.0',
  description: 'Aplicação para estudo de certificações AWS',
} as const;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/decks',
  STUDY: '/study',
  SIMULADOS: '/simulados',
  SETTINGS: '/settings',
} as const;

export const STORAGE_KEYS = {
  THEME: 'theme',
  PROGRESS: 'study-progress',
  USER_PREFERENCES: 'user-preferences',
} as const;

export const ANIMATION_DURATION = {
  FAST: 0.2,
  NORMAL: 0.3,
  SLOW: 0.5,
} as const;
