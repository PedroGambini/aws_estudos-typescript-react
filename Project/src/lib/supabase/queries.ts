import { createClient } from './client';
import type { Database } from '@/types/database.types';

type FlashcardProgress = Database['public']['Tables']['flashcard_progress']['Row'];
type GameHistory = Database['public']['Tables']['game_history']['Row'];
type CategoryStats = Database['public']['Tables']['category_stats']['Row'];
type UserPreferences = Database['public']['Tables']['user_preferences']['Row'];

// Flashcard Progress Queries
export async function getFlashcardProgress(userId: string, flashcardId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('flashcard_progress')
    .select('*')
    .eq('user_id', userId)
    .eq('flashcard_id', flashcardId)
    .single();

  if (error && error.code !== 'PGRST116') throw error;
  return data;
}

export async function upsertFlashcardProgress(progress: Partial<FlashcardProgress> & { user_id: string; flashcard_id: string }) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('flashcard_progress')
    .upsert(progress, { onConflict: 'user_id,flashcard_id' })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getFlashcardsForReview(userId: string, categoryId?: string) {
  const supabase = createClient();
  let query = supabase
    .from('flashcard_progress')
    .select('*')
    .eq('user_id', userId)
    .lte('next_review_date', new Date().toISOString())
    .order('next_review_date', { ascending: true });

  if (categoryId) {
    query = query.eq('category_id', categoryId);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
}

// Game History Queries
export async function saveGameHistory(history: Omit<GameHistory, 'id' | 'created_at'>) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('game_history')
    .insert(history)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getGameHistory(userId: string, limit = 10) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('game_history')
    .select('*')
    .eq('user_id', userId)
    .order('completed_at', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data;
}

export async function getGameHistoryByCategory(userId: string, categoryId: string, limit = 10) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('game_history')
    .select('*')
    .eq('user_id', userId)
    .eq('category_id', categoryId)
    .order('completed_at', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data;
}

// Category Stats Queries
export async function getCategoryStats(userId: string, categoryId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('category_stats')
    .select('*')
    .eq('user_id', userId)
    .eq('category_id', categoryId)
    .single();

  if (error && error.code !== 'PGRST116') throw error;
  return data;
}

export async function getAllCategoryStats(userId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('category_stats')
    .select('*')
    .eq('user_id', userId)
    .order('last_studied_at', { ascending: false, nullsFirst: false });

  if (error) throw error;
  return data;
}

export async function updateCategoryStats(
  userId: string,
  categoryId: string,
  updates: {
    correct?: number;
    incorrect?: number;
    score?: number;
  }
) {
  const supabase = createClient();
  
  // Get current stats
  const currentStats = await getCategoryStats(userId, categoryId);
  
  const totalStudied = (currentStats?.total_studied || 0) + 1;
  const totalCorrect = (currentStats?.total_correct || 0) + (updates.correct || 0);
  const totalIncorrect = (currentStats?.total_incorrect || 0) + (updates.incorrect || 0);
  const currentAverage = currentStats?.average_score || 0;
  const newAverage = currentStats
    ? (currentAverage * currentStats.total_studied + (updates.score || 0)) / totalStudied
    : updates.score || 0;

  const { data, error } = await supabase
    .from('category_stats')
    .upsert({
      user_id: userId,
      category_id: categoryId,
      total_studied: totalStudied,
      total_correct: totalCorrect,
      total_incorrect: totalIncorrect,
      average_score: newAverage,
      last_studied_at: new Date().toISOString(),
    }, { onConflict: 'user_id,category_id' })
    .select()
    .single();

  if (error) throw error;
  return data;
}

// User Preferences Queries
export async function getUserPreferences(userId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('user_preferences')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error && error.code !== 'PGRST116') throw error;
  return data;
}

export async function updateUserPreferences(userId: string, preferences: Partial<UserPreferences>) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('user_preferences')
    .upsert({
      user_id: userId,
      ...preferences,
    }, { onConflict: 'user_id' })
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Profile Queries
export async function getProfile(userId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data;
}

export async function updateProfile(userId: string, updates: { full_name?: string; avatar_url?: string }) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();

  if (error) throw error;
  return data;
}
