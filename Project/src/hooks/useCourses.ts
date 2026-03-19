'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { 
  getAllCourseProgress,
  getUserMedals,
  getPlayerStats
} from '@/lib/supabase/courses-queries';
import { courses as staticCourses } from '@/data/courses';
import type { Course, CourseMedal, PlayerStats } from '@/types/courses';

export function useCourses() {
  const { user } = useAuth();
  const [courses, setCourses] = useState<Course[]>(staticCourses);
  const [medals, setMedals] = useState<CourseMedal[]>([]);
  const [playerStats, setPlayerStats] = useState<PlayerStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    loadUserData();
  }, [user]);

  const loadUserData = async () => {
    if (!user) return;

    try {
      setLoading(true);

      // Carregar progresso, medalhas e stats em paralelo
      const [progressData, medalsData, statsData] = await Promise.all([
        getAllCourseProgress(user.id),
        getUserMedals(user.id),
        getPlayerStats(user.id)
      ]);

      // Atualizar cursos com progresso do usuário
      const updatedCourses = staticCourses.map(course => {
        const progress = progressData.find(p => p.course_id === course.id);
        const medal = medalsData.find(m => m.course_id === course.id);

        if (!progress) return course;

        // Atualizar níveis desbloqueados
        const updatedLevels = course.levels.map(level => ({
          ...level,
          unlocked: level.levelNumber === 1 || progress.completed_levels.includes(level.levelNumber - 1)
        }));

        return {
          ...course,
          levels: updatedLevels,
          completedLevels: progress.completed_levels.length,
          medal: medal || undefined
        };
      });

      setCourses(updatedCourses);
      setMedals(medalsData);

      if (statsData) {
        setPlayerStats(statsData);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const refreshCourses = () => {
    loadUserData();
  };

  return {
    courses,
    medals,
    playerStats,
    loading,
    refreshCourses
  };
}
