'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import CourseDetail from './CourseDetail';
import { 
  Server, 
  HardDrive, 
  Database, 
  Network,
  Lock,
  Trophy,
  Star,
  ChevronRight,
  Zap,
  Loader2
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useCourses } from '@/hooks/useCourses';
import type { Course } from '@/types/courses';

const iconMap: Record<string, React.ElementType> = {
  Server,
  HardDrive,
  Database,
  Network,
  Zap
};

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

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const { courses, loading, refreshCourses } = useCourses();

  // Se um curso foi selecionado, mostrar detalhes
  if (selectedCourse) {
    return (
      <CourseDetail 
        course={selectedCourse} 
        onBack={() => {
          setSelectedCourse(null);
          refreshCourses();
        }} 
      />
    );
  }

  // Loading state
  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-violet-600" />
          <p className="text-muted-foreground">Carregando cursos...</p>
        </div>
      </div>
    );
  }

  // Agrupar cursos por categoria
  const categories = [
    { id: 'all', name: 'Todos', icon: Star, color: 'from-violet-500 to-fuchsia-500' },
    { id: 'compute', name: 'Computação', icon: Server, color: 'from-blue-500 to-cyan-500' },
    { id: 'storage', name: 'Armazenamento', icon: HardDrive, color: 'from-emerald-500 to-green-500' },
    { id: 'database', name: 'Banco de Dados', icon: Database, color: 'from-purple-500 to-fuchsia-500' },
    { id: 'networking', name: 'Redes', icon: Network, color: 'from-amber-500 to-orange-500' }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(c => c.category === selectedCategory);

  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto bg-gradient-to-br from-background via-background to-violet-50/30 dark:to-violet-950/10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
            Cursos AWS
          </h1>
          <p className="text-muted-foreground">
            Escolha um curso e comece sua jornada de aprendizado
          </p>
        </motion.div>

        {/* Filtros de Categoria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all
                    ${isActive 
                      ? `bg-gradient-to-r ${cat.color} text-white shadow-lg` 
                      : 'bg-card border border-border hover:border-violet-500/50'
                    }
                  `}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Grid de Cursos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {filteredCourses.map((course, index) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              index={index}
              onSelect={() => setSelectedCourse(course)}
            />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum curso encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function CourseCard({ course, index, onSelect }: { course: Course; index: number; onSelect: () => void }) {
  const Icon = iconMap[course.icon] || Server;
  const progress = (course.completedLevels / course.totalLevels) * 100;
  const nextLevel = course.levels.find(l => l.unlocked && !course.levels.find(cl => cl.levelNumber === l.levelNumber && course.completedLevels >= l.levelNumber));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card className="p-6 border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] group">
        {/* Header do Curso */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
            <Icon size={28} className="text-white" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1">{course.name.pt}</h3>
            <p className="text-sm text-muted-foreground">{course.description.pt}</p>
          </div>

          {course.medal && (
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
              <Trophy size={20} className="text-white" />
            </div>
          )}
        </div>

        {/* Progresso */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-muted-foreground">Progresso</span>
            <span className="font-medium">
              {course.completedLevels} / {course.totalLevels} níveis
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Níveis */}
        <div className="space-y-2 mb-4">
          <p className="text-sm font-medium text-muted-foreground mb-2">Níveis disponíveis:</p>
          <div className="grid grid-cols-5 gap-2">
            {course.levels.map((level) => {
              const isCompleted = course.completedLevels >= level.levelNumber;
              const isUnlocked = level.unlocked;
              const isCurrent = nextLevel?.id === level.id;

              return (
                <div
                  key={level.id}
                  className={`
                    relative aspect-square rounded-lg flex items-center justify-center text-sm font-bold
                    ${isCompleted 
                      ? `bg-gradient-to-br ${difficultyColors[level.difficulty]} text-white shadow-md` 
                      : isUnlocked
                        ? 'bg-muted border-2 border-dashed border-violet-500/50 text-foreground'
                        : 'bg-muted/50 text-muted-foreground'
                    }
                  `}
                >
                  {isCompleted ? (
                    <Star size={16} className="fill-white" />
                  ) : isUnlocked ? (
                    level.levelNumber
                  ) : (
                    <Lock size={14} />
                  )}
                  
                  {isCurrent && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-violet-500 animate-pulse" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Próximo Nível Info */}
        {nextLevel && (
          <div className="mb-4 p-3 rounded-lg bg-violet-500/10 border border-violet-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Próximo nível</p>
                <p className="text-sm font-medium">{nextLevel.name.pt}</p>
              </div>
              <Badge className={`bg-gradient-to-r ${difficultyColors[nextLevel.difficulty]} text-white border-0`}>
                {difficultyLabels[nextLevel.difficulty].pt}
              </Badge>
            </div>
          </div>
        )}

        {/* Botão de Ação */}
        <Button
          onClick={onSelect}
          className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90 text-white shadow-lg`}
        >
          {course.completedLevels === 0 ? 'Começar Curso' : 'Continuar'}
          <ChevronRight size={18} className="ml-2" />
        </Button>
      </Card>
    </motion.div>
  );
}
