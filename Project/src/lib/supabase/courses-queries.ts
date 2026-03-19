import { createClient } from '@/lib/supabase/client';
import type { 
  CourseProgress, 
  CourseMedal, 
  Achievement, 
  PlayerStats, 
  LevelResult 
} from '@/types/courses';

// ==================== COURSE PROGRESS ====================

export async function getCourseProgress(userId: string, courseId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('course_progress')
    .select('*')
    .eq('user_id', userId)
    .eq('course_id', courseId)
    .single();

  if (error && error.code !== 'PGRST116') { // PGRST116 = not found
    console.error('Error fetching course progress:', error);
    return null;
  }

  return data;
}

export async function getAllCourseProgress(userId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('course_progress')
    .select('*')
    .eq('user_id', userId);

  if (error) {
    console.error('Error fetching all course progress:', error);
    return [];
  }

  return data || [];
}

export async function upsertCourseProgress(progress: Partial<CourseProgress>) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('course_progress')
    .upsert(progress, { onConflict: 'user_id,course_id' })
    .select()
    .single();

  if (error) {
    console.error('Error upserting course progress:', error);
    throw error;
  }

  return data;
}

// ==================== MEDALS ====================

export async function getUserMedals(userId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('course_medals')
    .select('*')
    .eq('user_id', userId)
    .order('earned_at', { ascending: false });

  if (error) {
    console.error('Error fetching medals:', error);
    return [];
  }

  return data || [];
}

export async function awardMedal(medal: Omit<CourseMedal, 'id'>) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('course_medals')
    .insert(medal)
    .select()
    .single();

  if (error) {
    console.error('Error awarding medal:', error);
    throw error;
  }

  return data;
}

// ==================== ACHIEVEMENTS ====================

export async function getUserAchievements(userId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('user_achievements')
    .select('*')
    .eq('user_id', userId);

  if (error) {
    console.error('Error fetching achievements:', error);
    return [];
  }

  return data || [];
}

export async function updateAchievementProgress(
  userId: string,
  achievementId: string,
  progress: number,
  unlocked: boolean = false
) {
  const supabase = createClient();
  const updateData: any = {
    user_id: userId,
    achievement_id: achievementId,
    progress,
    unlocked
  };

  if (unlocked) {
    updateData.unlocked_at = new Date().toISOString();
  }

  const { data, error } = await supabase
    .from('user_achievements')
    .upsert(updateData, { onConflict: 'user_id,achievement_id' })
    .select()
    .single();

  if (error) {
    console.error('Error updating achievement:', error);
    throw error;
  }

  return data;
}

// ==================== PLAYER STATS ====================

export async function getPlayerStats(userId: string): Promise<PlayerStats | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('player_stats')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error && error.code !== 'PGRST116') {
    console.error('Error fetching player stats:', error);
    return null;
  }

  if (!data) {
    // Criar stats se não existir
    const { data: newData, error: insertError } = await supabase
      .from('player_stats')
      .insert({ user_id: userId })
      .select()
      .single();

    if (insertError) {
      console.error('Error creating player stats:', insertError);
      return null;
    }

    return newData;
  }

  return data;
}

export async function updatePlayerStats(userId: string, updates: Partial<PlayerStats>) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('player_stats')
    .update(updates)
    .eq('user_id', userId)
    .select()
    .single();

  if (error) {
    console.error('Error updating player stats:', error);
    throw error;
  }

  return data;
}

export async function incrementPlayerStats(
  userId: string,
  increments: {
    xp?: number;
    questionsAnswered?: number;
    correctAnswers?: number;
    studyTime?: number;
    coursesCompleted?: number;
  }
) {
  const supabase = createClient();
  const stats = await getPlayerStats(userId);
  if (!stats) throw new Error('Player stats not found');

  const updates: any = {
    total_xp: stats.total_xp + (increments.xp || 0),
    total_questions_answered: stats.total_questions_answered + (increments.questionsAnswered || 0),
    total_correct_answers: stats.total_correct_answers + (increments.correctAnswers || 0),
    total_study_time: stats.total_study_time + (increments.studyTime || 0),
    courses_completed: stats.courses_completed + (increments.coursesCompleted || 0)
  };

  // Calcular novo nível baseado no XP total
  const newLevel = calculateLevelFromXp(updates.total_xp);
  if (newLevel > stats.level) {
    updates.level = newLevel;
  }

  return updatePlayerStats(userId, updates);
}

// ==================== LEVEL HISTORY ====================

export async function saveLevelResult(
  userId: string,
  courseId: string,
  result: LevelResult
) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('level_history')
    .insert({
      user_id: userId,
      course_id: courseId,
      level_id: result.levelId,
      level_number: result.levelNumber,
      score: result.score,
      correct_answers: result.correctAnswers,
      total_questions: result.totalQuestions,
      time_spent: result.timeSpent,
      xp_earned: result.xpEarned,
      time_bonus: result.timeBonus,
      time_bonus_xp: result.timeBonusXp,
      combo_multiplier: result.comboMultiplier,
      passed: result.passed
    })
    .select()
    .single();

  if (error) {
    console.error('Error saving level result:', error);
    throw error;
  }

  return data;
}

export async function getLevelHistory(userId: string, courseId?: string, limit: number = 50) {
  const supabase = createClient();
  let query = supabase
    .from('level_history')
    .select('*')
    .eq('user_id', userId)
    .order('played_at', { ascending: false })
    .limit(limit);

  if (courseId) {
    query = query.eq('course_id', courseId);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching level history:', error);
    return [];
  }

  return data || [];
}

// ==================== STREAKS ====================

export async function recordStudySession(
  userId: string,
  questionsAnswered: number,
  timeSpent: number,
  xpEarned: number
) {
  const supabase = createClient();
  const today = new Date().toISOString().split('T')[0];

  const { data, error } = await supabase
    .from('user_streaks')
    .upsert({
      user_id: userId,
      study_date: today,
      questions_answered: questionsAnswered,
      time_spent: timeSpent,
      xp_earned: xpEarned
    }, { 
      onConflict: 'user_id,study_date',
      ignoreDuplicates: false 
    })
    .select()
    .single();

  if (error) {
    console.error('Error recording study session:', error);
    throw error;
  }

  return data;
}

export async function getUserStreakHistory(userId: string, days: number = 30) {
  const supabase = createClient();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  const { data, error } = await supabase
    .from('user_streaks')
    .select('*')
    .eq('user_id', userId)
    .gte('study_date', startDate.toISOString().split('T')[0])
    .order('study_date', { ascending: false });

  if (error) {
    console.error('Error fetching streak history:', error);
    return [];
  }

  return data || [];
}

// ==================== LEADERBOARD ====================

export async function getGlobalLeaderboard(limit: number = 100) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('player_stats')
    .select(`
      user_id,
      level,
      total_xp,
      profiles:user_id (
        full_name,
        avatar_url
      )
    `)
    .order('total_xp', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching leaderboard:', error);
    return [];
  }

  return data || [];
}

export async function getUserRank(userId: string) {
  const supabase = createClient();
  const { data: userStats } = await supabase
    .from('player_stats')
    .select('total_xp')
    .eq('user_id', userId)
    .single();

  if (!userStats) return null;

  const { count } = await supabase
    .from('player_stats')
    .select('*', { count: 'exact', head: true })
    .gt('total_xp', userStats.total_xp);

  return (count || 0) + 1;
}

// ==================== HELPER FUNCTIONS ====================

function calculateLevelFromXp(totalXp: number): number {
  let level = 1;
  let xpNeeded = 0;
  
  while (xpNeeded <= totalXp) {
    xpNeeded += Math.floor(100 * Math.pow(level, 1.5));
    if (xpNeeded <= totalXp) {
      level++;
    }
  }
  
  return level;
}

// ==================== COMPLETE LEVEL FLOW ====================

export async function completeLevelFlow(
  userId: string,
  courseId: string,
  result: LevelResult
) {
  try {
    // 1. Salvar resultado no histórico
    await saveLevelResult(userId, courseId, result);

    // 2. Atualizar progresso do curso
    const currentProgress = await getCourseProgress(userId, courseId);
    const completedLevels = currentProgress?.completed_levels || [];
    
    if (result.passed && !completedLevels.includes(result.levelNumber)) {
      completedLevels.push(result.levelNumber);
      completedLevels.sort((a: number, b: number) => a - b);
    }

    await upsertCourseProgress({
      user_id: userId,
      course_id: courseId,
      current_level: result.levelNumber,
      completed_levels: completedLevels,
      total_xp_earned: (currentProgress?.total_xp_earned || 0) + result.xpEarned,
      best_times: {
        ...(currentProgress?.best_times || {}),
        [result.levelNumber]: Math.min(
          result.timeSpent,
          (currentProgress?.best_times as any)?.[result.levelNumber] || Infinity
        )
      },
      scores: {
        ...(currentProgress?.scores || {}),
        [result.levelNumber]: Math.max(
          result.score,
          (currentProgress?.scores as any)?.[result.levelNumber] || 0
        )
      }
    });

    // 3. Atualizar estatísticas do jogador
    const updatedStats = await incrementPlayerStats(userId, {
      xp: result.xpEarned,
      questionsAnswered: result.totalQuestions,
      correctAnswers: result.correctAnswers,
      studyTime: result.timeSpent
    });

    // 4. Registrar sessão de estudo (para streak)
    await recordStudySession(
      userId,
      result.totalQuestions,
      result.timeSpent,
      result.xpEarned
    );

    // 5. Verificar e atualizar conquistas
    await checkAndUpdateAchievements(userId, result, updatedStats);

    return {
      success: true,
      newLevel: updatedStats.level > (await getPlayerStats(userId))!.level,
      newPlayerLevel: updatedStats.level
    };
  } catch (error) {
    console.error('Error in complete level flow:', error);
    throw error;
  }
}

async function checkAndUpdateAchievements(
  userId: string,
  result: LevelResult,
  stats: PlayerStats
) {
  const supabase = createClient();
  
  // Verificar conquista de perfeição
  if (result.score === 100) {
    await updateAchievementProgress(userId, 'perfect-score', 1, true);
  }

  // Verificar conquista de velocidade
  if (result.timeBonus === 'gold') {
    const achievement = await supabase
      .from('user_achievements')
      .select('progress')
      .eq('user_id', userId)
      .eq('achievement_id', 'speed-demon')
      .single();

    const newProgress = (achievement.data?.progress || 0) + 1;
    await updateAchievementProgress(
      userId,
      'speed-demon',
      newProgress,
      newProgress >= 10
    );
  }

  // Verificar conquista de questões
  await updateAchievementProgress(
    userId,
    'hundred-questions',
    stats.total_questions_answered,
    stats.total_questions_answered >= 100
  );

  // Verificar conquista de tempo
  await updateAchievementProgress(
    userId,
    'five-hours',
    stats.total_study_time,
    stats.total_study_time >= 18000
  );

  // Verificar conquista de streak
  await updateAchievementProgress(
    userId,
    'week-streak',
    stats.current_streak,
    stats.current_streak >= 7
  );
}
