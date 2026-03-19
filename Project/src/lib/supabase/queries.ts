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

// Avatar Upload
export async function uploadAvatar(userId: string, file: File) {
  const supabase = createClient();
  const fileExt = file.name.split('.').pop();
  const fileName = `${userId}/${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from('avatars')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: true
    });

  if (error) throw error;

  const { data: { publicUrl } } = supabase.storage
    .from('avatars')
    .getPublicUrl(fileName);

  return publicUrl;
}

export async function deleteAvatar(avatarUrl: string) {
  const supabase = createClient();
  const path = avatarUrl.split('/avatars/')[1];
  
  if (!path) return;

  const { error } = await supabase.storage
    .from('avatars')
    .remove([path]);

  if (error) throw error;
}

// Friends Queries
export async function searchUsers(searchTerm: string, limit = 10) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('profiles')
    .select('id, full_name, email, avatar_url')
    .or(`full_name.ilike.%${searchTerm}%,email.ilike.%${searchTerm}%`)
    .limit(limit);

  if (error) throw error;
  return data;
}

export async function sendFriendRequest(userId: string, friendId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('friendships')
    .insert({
      user_id: userId,
      friend_id: friendId,
      status: 'pending'
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function acceptFriendRequest(friendshipId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('friendships')
    .update({ status: 'accepted' })
    .eq('id', friendshipId)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function rejectFriendRequest(friendshipId: string) {
  const supabase = createClient();
  const { error } = await supabase
    .from('friendships')
    .delete()
    .eq('id', friendshipId);

  if (error) throw error;
}

export async function removeFriend(friendshipId: string) {
  const supabase = createClient();
  const { error } = await supabase
    .from('friendships')
    .delete()
    .eq('id', friendshipId);

  if (error) throw error;
}

export async function getFriends(userId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('friendships')
    .select(`
      id,
      status,
      created_at,
      user:user_id(id, full_name, email, avatar_url),
      friend:friend_id(id, full_name, email, avatar_url)
    `)
    .or(`user_id.eq.${userId},friend_id.eq.${userId}`)
    .eq('status', 'accepted');

  if (error) throw error;
  
  // Format the data to always show the other person
  return data.map(friendship => {
    const isUser = friendship.user.id === userId;
    return {
      id: friendship.id,
      friend: isUser ? friendship.friend : friendship.user,
      created_at: friendship.created_at
    };
  });
}

export async function getPendingFriendRequests(userId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('friendships')
    .select(`
      id,
      created_at,
      user:user_id(id, full_name, email, avatar_url)
    `)
    .eq('friend_id', userId)
    .eq('status', 'pending');

  if (error) throw error;
  return data;
}

export async function getSentFriendRequests(userId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('friendships')
    .select(`
      id,
      created_at,
      friend:friend_id(id, full_name, email, avatar_url)
    `)
    .eq('user_id', userId)
    .eq('status', 'pending');

  if (error) throw error;
  return data;
}

export async function checkFriendshipStatus(userId: string, friendId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('friendships')
    .select('id, status, user_id, friend_id')
    .or(`and(user_id.eq.${userId},friend_id.eq.${friendId}),and(user_id.eq.${friendId},friend_id.eq.${userId})`)
    .maybeSingle();

  if (error) throw error;
  return data;
}
