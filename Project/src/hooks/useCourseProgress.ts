'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { 
  getCourseProgress,
  completeLevelFlow
} from '@/lib/supabase/courses-queries';
import type { Course, LevelResult } from '@/types/courses';

export function useCourseProgress(course: Course) {
  const { user } = useAuth();
  const [courseState, setCourseState] = useState(course);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    loadProgress();
  }, [user, course.id]);

  const loadProgress = async () => {
    if (!user) return;

    try {
      setLoading(true);
      const progress = await getCourseProgress(user.id, course.id);

      if (progress) {
        // Atualizar níveis desbloqueados baseado no progresso
        const updatedLevels = course.levels.map(level => ({
          ...level,
          unlocked: level.levelNumber === 1 || progress.completed_levels.includes(level.levelNumber - 1)
        }));

        setCourseState({
          ...course,
          levels: updatedLevels,
          completedLevels: progress.completed_levels.length
        });
      } else {
        setCourseState(course);
      }
    } catch (error) {
      console.error('Error loading course progress:', error);
      setCourseState(course);
    } finally {
      setLoading(false);
    }
  };

  const handleLevelComplete = async (result: LevelResult) => {
    if (!user) return;

    try {
      // Salvar resultado no Supabase
      const flowResult = await completeLevelFlow(user.id, course.id, result);

      // Atualizar estado local
      const updatedLevels = courseState.levels.map(level => {
        // Marcar nível atual como desbloqueado
        if (level.id === result.levelId) {
          return { ...level, unlocked: true };
        }
        // Desbloquear próximo nível se passou
        if (result.passed && level.levelNumber === result.levelNumber + 1) {
          return { ...level, unlocked: true };
        }
        return level;
      });

      const completedLevels = result.passed 
        ? Math.max(courseState.completedLevels, result.levelNumber)
        : courseState.completedLevels;

      // Verificar se completou o curso
      const allLevelsCompleted = completedLevels === courseState.totalLevels;

      setCourseState({
        ...courseState,
        levels: updatedLevels,
        completedLevels,
        medal: allLevelsCompleted ? courseState.medal : undefined
      });

      // Atualizar resultado com info de level up
      result.newLevel = flowResult.newLevel;
      result.newPlayerLevel = flowResult.newPlayerLevel;

      return result;
    } catch (error) {
      console.error('Error completing level:', error);
      throw error;
    }
  };

  return {
    courseState,
    loading,
    handleLevelComplete,
    refreshProgress: loadProgress
  };
}
