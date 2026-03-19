'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Clock, 
  Trophy, 
  Star,
  Zap,
  Target,
  Award,
  TrendingUp,
  ChevronRight
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import type { Question, CourseLevel as CourseLevelType, LevelResult } from '@/types/courses';

interface CourseLevelProps {
  courseId: string;
  courseName: string;
  level: CourseLevelType;
  questions: Question[];
  onComplete: (result: LevelResult) => void;
  onBack: () => void;
}

export default function CourseLevel({ 
  courseId, 
  courseName,
  level, 
  questions,
  onComplete,
  onBack 
}: CourseLevelProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [startTime] = useState(Date.now());
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<LevelResult | null>(null);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
  };

  const handleConfirm = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === question.correctAnswer;
    setAnswers([...answers, isCorrect]);
    
    if (isCorrect) {
      setConsecutiveCorrect(consecutiveCorrect + 1);
    } else {
      setConsecutiveCorrect(0);
    }

    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // Finalizar nível
      finishLevel();
    }
  };

  const finishLevel = () => {
    const correctAnswers = answers.filter(a => a).length;
    const totalQuestions = questions.length;
    const score = Math.round((correctAnswers / totalQuestions) * 100);
    const timeSpent = timeElapsed;

    // Calcular bônus de tempo
    let timeBonus: 'gold' | 'silver' | 'bronze' | null = null;
    let timeBonusXp = 0;

    if (timeSpent <= level.timeBonus.gold) {
      timeBonus = 'gold';
      timeBonusXp = 100;
    } else if (timeSpent <= level.timeBonus.silver) {
      timeBonus = 'silver';
      timeBonusXp = 50;
    } else if (timeSpent <= level.timeBonus.bronze) {
      timeBonus = 'bronze';
      timeBonusXp = 25;
    }

    // Calcular XP total
    const baseXp = questions.reduce((sum, q) => sum + q.xpReward, 0);
    const comboMultiplier = Math.max(...answers.map((_, i) => {
      let combo = 0;
      for (let j = i; j >= 0 && answers[j]; j--) combo++;
      return combo >= 10 ? 3 : combo >= 5 ? 2 : combo >= 3 ? 1.5 : 1;
    }));
    
    const xpEarned = Math.floor(baseXp * comboMultiplier) + timeBonusXp + (score >= level.requiredScore ? level.xpReward : 0);
    const passed = score >= level.requiredScore;

    const levelResult: LevelResult = {
      levelId: level.id,
      levelNumber: level.levelNumber,
      score,
      correctAnswers,
      totalQuestions,
      timeSpent,
      xpEarned,
      timeBonus,
      timeBonusXp,
      passed,
      newLevel: false, // será calculado pelo componente pai
      newPlayerLevel: 0, // será calculado pelo componente pai
      comboMultiplier
    };

    setResult(levelResult);
    setShowResult(true);
  };

  const handleFinish = () => {
    if (result) {
      onComplete(result);
    }
  };

  if (showResult && result) {
    return (
      <LevelResultScreen 
        result={result}
        courseName={courseName}
        levelName={level.name.pt}
        onFinish={handleFinish}
      />
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-br from-background via-background to-violet-50/30 dark:to-violet-950/10 min-h-screen">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto p-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="text-sm">Voltar</span>
          </button>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Clock size={16} className="text-violet-600" />
              <span className="font-mono font-medium">{formatTime(timeElapsed)}</span>
            </div>
            
            {consecutiveCorrect >= 3 && (
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 animate-pulse">
                <Zap size={12} className="mr-1" />
                Combo x{consecutiveCorrect >= 10 ? 3 : consecutiveCorrect >= 5 ? 2 : 1.5}
              </Badge>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto px-4 pb-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-muted-foreground">{level.name.pt}</span>
            <span className="font-medium">
              {currentQuestion + 1} / {questions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Question Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 sm:p-8 mb-6 border-border/50 bg-card/80 backdrop-blur-sm shadow-xl">
                {/* Difficulty Badge */}
                <Badge className="mb-4">
                  Nível {level.levelNumber} • {question.difficulty}
                </Badge>

                {/* Question */}
                <h2 className="text-xl sm:text-2xl font-bold mb-6">
                  {question.question.pt}
                </h2>

                {/* Code Snippet */}
                {question.codeSnippet && (
                  <pre className="mb-6 p-4 rounded-lg bg-muted overflow-x-auto">
                    <code className="text-sm">{question.codeSnippet}</code>
                  </pre>
                )}

                {/* Options */}
                <div className="space-y-3">
                  {question.options.pt.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === question.correctAnswer;
                    const showCorrect = showExplanation && isCorrect;
                    const showWrong = showExplanation && isSelected && !isCorrect;

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showExplanation}
                        className={`
                          w-full p-4 rounded-xl text-left transition-all border-2
                          ${showCorrect 
                            ? 'border-green-500 bg-green-500/10' 
                            : showWrong
                              ? 'border-red-500 bg-red-500/10'
                              : isSelected
                                ? 'border-violet-500 bg-violet-500/10'
                                : 'border-border hover:border-violet-500/50 bg-card'
                          }
                          ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`
                            w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                            ${showCorrect 
                              ? 'bg-green-500 text-white' 
                              : showWrong
                                ? 'bg-red-500 text-white'
                                : isSelected
                                  ? 'bg-violet-500 text-white'
                                  : 'bg-muted text-muted-foreground'
                            }
                          `}>
                            {String.fromCharCode(65 + index)}
                          </div>
                          <span className="flex-1">{option}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                <AnimatePresence>
                  {showExplanation && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20"
                    >
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                        Explicação:
                      </p>
                      <p className="text-sm">{question.explanation.pt}</p>
                      
                      {question.proTip && (
                        <div className="mt-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                          <p className="text-sm font-medium text-amber-600 dark:text-amber-400 mb-1">
                            💡 Dica Pro:
                          </p>
                          <p className="text-sm">{question.proTip.pt}</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="border-t border-border bg-card/50 backdrop-blur-sm p-4">
        <div className="max-w-4xl mx-auto flex justify-end gap-3">
          {!showExplanation ? (
            <Button
              onClick={handleConfirm}
              disabled={selectedAnswer === null}
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg"
            >
              Confirmar Resposta
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg"
            >
              {currentQuestion < questions.length - 1 ? 'Próxima Questão' : 'Ver Resultado'}
              <ChevronRight size={18} className="ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function LevelResultScreen({ 
  result, 
  courseName,
  levelName,
  onFinish 
}: { 
  result: LevelResult;
  courseName: string;
  levelName: string;
  onFinish: () => void;
}) {
  const timeBonusColors = {
    gold: 'from-amber-400 to-yellow-500',
    silver: 'from-gray-300 to-gray-400',
    bronze: 'from-orange-600 to-orange-700'
  };

  const timeBonusLabels = {
    gold: 'Ouro',
    silver: 'Prata',
    bronze: 'Bronze'
  };

  return (
    <div className="flex-1 flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-violet-50/30 dark:to-violet-950/10 min-h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full"
      >
        <Card className="p-8 border-border/50 bg-card/80 backdrop-blur-sm shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            {result.passed ? (
              <>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4 shadow-lg"
                >
                  <Trophy size={40} className="text-white" />
                </motion.div>
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
                  Nível Concluído!
                </h2>
              </>
            ) : (
              <>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-4 shadow-lg"
                >
                  <Target size={40} className="text-white" />
                </motion.div>
                <h2 className="text-3xl font-bold mb-2">
                  Continue Tentando!
                </h2>
              </>
            )}
            <p className="text-muted-foreground">{courseName} • {levelName}</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Card className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-900">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                  <Target size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.score}%</p>
                  <p className="text-xs text-muted-foreground">Pontuação</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 border-purple-200 dark:border-purple-900">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center">
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {Math.floor(result.timeSpent / 60)}:{(result.timeSpent % 60).toString().padStart(2, '0')}
                  </p>
                  <p className="text-xs text-muted-foreground">Tempo</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-900">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center">
                  <Star size={20} className="text-white fill-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {result.correctAnswers}/{result.totalQuestions}
                  </p>
                  <p className="text-xs text-muted-foreground">Acertos</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 border-violet-200 dark:border-violet-900">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet-500 flex items-center justify-center">
                  <Zap size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-violet-600 dark:text-violet-400">+{result.xpEarned}</p>
                  <p className="text-xs text-muted-foreground">XP Ganho</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Bonuses */}
          {(result.timeBonus || result.comboMultiplier > 1) && (
            <div className="mb-6 space-y-3">
              {result.timeBonus && (
                <div className={`p-4 rounded-lg bg-gradient-to-r ${timeBonusColors[result.timeBonus]} text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award size={20} />
                      <span className="font-medium">Bônus de Tempo {timeBonusLabels[result.timeBonus]}</span>
                    </div>
                    <span className="font-bold">+{result.timeBonusXp} XP</span>
                  </div>
                </div>
              )}

              {result.comboMultiplier > 1 && (
                <div className="p-4 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap size={20} />
                      <span className="font-medium">Multiplicador de Combo x{result.comboMultiplier}</span>
                    </div>
                    <span className="font-bold">Ativo!</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Level Up */}
          {result.newLevel && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="mb-6 p-6 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-center"
            >
              <TrendingUp size={32} className="mx-auto mb-2" />
              <p className="text-2xl font-bold">Subiu de Nível!</p>
              <p className="text-lg">Agora você é nível {result.newPlayerLevel}</p>
            </motion.div>
          )}

          {/* Action Button */}
          <Button
            onClick={onFinish}
            size="lg"
            className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg"
          >
            {result.passed ? 'Continuar' : 'Tentar Novamente'}
          </Button>
        </Card>
      </motion.div>
    </div>
  );
}
