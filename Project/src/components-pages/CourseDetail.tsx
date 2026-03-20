'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Lock, 
  Star, 
  Trophy,
  Clock,
  Target,
  Play,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import CourseLevel from './CourseLevel';
import { useCourseProgress } from '@/hooks/useCourseProgress';
import type { Course, CourseLevel as CourseLevelType, LevelResult } from '@/types/courses';
import { questionsByLevel } from '@/data/questions';

const difficultyColors = {
  beginner: 'from-green-500 to-emerald-500',
  intermediate: 'from-blue-500 to-cyan-500',
  advanced: 'from-purple-500 to-fuchsia-500',
  expert: 'from-red-500 to-orange-500'
};

const difficultyLabels = {
  beginner: { pt: 'Iniciante', en: 'Beginner' },
  intermediate: { pt: 'Intermediário', en: 'Intermediate' },
  advanced: { pt: 'Avançado', en: 'Advanced' },
  expert: { pt: 'Especialista', en: 'Expert' }
};

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
}

export default function CourseDetail({ course, onBack }: CourseDetailProps) {
  const [selectedLevel, setSelectedLevel] = useState<CourseLevelType | null>(null);
  const { courseState, loading, handleLevelComplete: saveLevelComplete } = useCourseProgress(course);

  const handleLevelComplete = async (result: LevelResult) => {
    try {
      // Salvar no Supabase e atualizar estado
      const updatedResult = await saveLevelComplete(result);
      setSelectedLevel(null);
      return updatedResult;
    } catch (error) {
      console.error('Error completing level:', error);
      setSelectedLevel(null);
    }
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-violet-600" />
          <p className="text-muted-foreground">Carregando progresso...</p>
        </div>
      </div>
    );
  }

  if (selectedLevel) {
    const questions = questionsByLevel[selectedLevel.id] || [];
    
    return (
      <CourseLevel
        courseId={courseState.id}
        courseName={courseState.name.pt}
        level={selectedLevel}
        questions={questions}
        onComplete={handleLevelComplete}
        onBack={() => setSelectedLevel(null)}
      />
    );
  }

  const progress = (courseState.completedLevels / courseState.totalLevels) * 100;

  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto bg-gradient-to-br from-background via-background to-violet-50/30 dark:to-violet-950/10">
      <div className="max-w-5xl mx-auto pb-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            <span>Voltar para Cursos</span>
          </button>

          <Card className="p-6 sm:p-8 border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-xl">
            <div className="flex items-start gap-6">
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${courseState.color} flex items-center justify-center shadow-lg`}>
                <Star size={32} className="text-white sm:w-10 sm:h-10" />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold mb-2">{courseState.name.pt}</h1>
                    <p className="text-muted-foreground">{courseState.description.pt}</p>
                  </div>

                  {courseState.medal && (
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                        <Trophy size={24} className="text-white" />
                      </div>
                      <span className="text-xs font-medium">Concluído</span>
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progresso do Curso</span>
                    <span className="font-medium">
                      {courseState.completedLevels} / {courseState.totalLevels} níveis
                    </span>
                  </div>
                  <Progress value={progress} className="h-3" />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Níveis */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Níveis do Curso</h2>

          {courseState.levels.map((level, index) => {
            const isCompleted = courseState.completedLevels >= level.levelNumber;
            const isUnlocked = level.unlocked;
            const questions = questionsByLevel[level.id] || [];

            return (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className={`
                  p-6 border-border/50 backdrop-blur-sm shadow-lg transition-all
                  ${isUnlocked ? 'hover:shadow-xl hover:scale-[1.01]' : 'opacity-60'}
                `}>
                  <div className="flex items-start gap-4">
                    {/* Level Number */}
                    <div className={`
                      w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold
                      ${isCompleted 
                        ? `bg-gradient-to-br ${difficultyColors[level.difficulty]} text-white shadow-lg` 
                        : isUnlocked
                          ? 'bg-muted border-2 border-dashed border-violet-500/50'
                          : 'bg-muted/50'
                      }
                    `}>
                      {isCompleted ? (
                        <CheckCircle2 size={28} />
                      ) : isUnlocked ? (
                        level.levelNumber
                      ) : (
                        <Lock size={24} />
                      )}
                    </div>

                    {/* Level Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-bold mb-1">
                            Nível {level.levelNumber}: {level.name.pt}
                          </h3>
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge className={`bg-gradient-to-r ${difficultyColors[level.difficulty]} text-white border-0`}>
                              {difficultyLabels[level.difficulty].pt}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              {questions.length} questões
                            </span>
                          </div>
                        </div>

                        {isUnlocked && (
                          <Button
                            onClick={() => setSelectedLevel(level)}
                            className={`bg-gradient-to-r ${courseState.color} hover:opacity-90 text-white`}
                          >
                            {isCompleted ? (
                              <>
                                <Star size={16} className="mr-2" />
                                Refazer
                              </>
                            ) : (
                              <>
                                <Play size={16} className="mr-2" />
                                Começar
                              </>
                            )}
                          </Button>
                        )}
                      </div>

                      {/* Level Stats */}
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Target size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">
                            Mínimo: {level.requiredScore}%
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Trophy size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">
                            +{level.xpReward} XP
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">
                            Ouro: {Math.floor(level.timeBonus.gold / 60)}min
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
