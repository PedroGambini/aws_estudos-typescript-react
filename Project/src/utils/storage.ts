// Local storage utilities with type safety

import { STORAGE_KEYS } from '@/constants';
import type { StudyProgress, UserPreferences } from '@/types';

/**
 * Generic function to safely get data from localStorage
 */
export function getFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error reading from localStorage key "${key}":`, error);
    return defaultValue;
  }
}

/**
 * Generic function to safely set data in localStorage
 */
export function setInStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing to localStorage key "${key}":`, error);
  }
}

/**
 * Remove item from localStorage
 */
export function removeFromStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing from localStorage key "${key}":`, error);
  }
}

// Specific storage functions

export function getStudyProgress(): StudyProgress[] {
  return getFromStorage<StudyProgress[]>(STORAGE_KEYS.PROGRESS, []);
}

export function saveStudyProgress(progress: StudyProgress[]): void {
  setInStorage(STORAGE_KEYS.PROGRESS, progress);
}

export function getUserPreferences(): UserPreferences {
  return getFromStorage<UserPreferences>(STORAGE_KEYS.USER_PREFERENCES, {
    theme: 'system',
    autoFlip: false,
    showProTips: true,
  });
}

export function saveUserPreferences(preferences: UserPreferences): void {
  setInStorage(STORAGE_KEYS.USER_PREFERENCES, preferences);
}
