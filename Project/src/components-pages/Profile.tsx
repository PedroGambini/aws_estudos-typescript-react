'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  User, 
  Trophy, 
  Clock, 
  Target, 
  Calendar,
  TrendingUp,
  Award,
  Zap,
  Star
} from "lucide-react";
import { getGameStats } from "@/utils/gameHistory";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { getProfile, getAllCategoryStats, getGameHistory } from "@/lib/supabase/queries";

export default function Profile() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    name: "Carregando...",
    email: "...",
    avatar: "?",
    level: 1,
    xp: 0,
    xpToNextLevel: 100,
    accountCreated: new Date().toISOString(),
    totalStudyTime: "0h 0min",
  });
  const [categoryStats, setCategoryStats] = useState<any[]>([]);
  const [gameHistory, setGameHistory] = useState<any[]>([]);

  useEffect(() => {
    if (!user) return;

    const loadUserData = async () => {
      try {
        // Buscar perfil do usuário
        const profile = await getProfile(user.id);
        
        // Buscar estatísticas por categoria
        const stats = await getAllCategoryStats(user.id);
        setCategoryStats(stats);

        // Buscar histórico de jogos
        const history = await getGameHistory(user.id, 20);
        setGameHistory(history);

        // Calcular estatísticas gerais
        const totalStudied = stats.reduce((acc, stat) => acc + stat.total_studied, 0);
        const totalCorrect = stats.reduce((acc, stat) => acc + stat.total_correct, 0);
        const totalIncorrect = stats.reduce((acc, stat) => acc + stat.total_incorrect, 0);
        const totalCards = totalCorrect + totalIncorrect;
        
        // Calcular tempo total (estimativa: 30s por card)
        const totalMinutes = Math.floor((totalCards * 30) / 60);
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;

        // Calcular nível baseado no total de acertos (100 acertos = 1 nível)
        const level = Math.floor(totalCorrect / 100) + 1;
        const xp = totalCorrect % 100;
        const xpToNextLevel = 100;

        // Pegar iniciais do nome
        const nameParts = (profile?.full_name || user.email || "User").split(' ');
        const initials = nameParts.length > 1 
          ? `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase()
          : nameParts[0].substring(0, 2).toUpperCase();

        setUserData({
          name: profile?.full_name || user.email?.split('@')[0] || "Usuário",
          email: user.email || "",
          avatar: initials,
          level,
          xp,
          xpToNextLevel,
          accountCreated: profile?.created_at || user.created_at || new Date().toISOString(),
          totalStudyTime: `${hours}h ${minutes}min`,
        });
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, [user]);

  // Pega estatísticas reais do jogo (localStorage)
  const stats = getGameStats();
  
  // Calcula estatísticas combinadas (localStorage + Supabase)
  const totalCorrectCards = stats.correctCards + categoryStats.reduce((acc, stat) => acc + stat.total_correct, 0);
  const totalIncorrectCards = stats.incorrectCards + categoryStats.reduce((acc, stat) => acc + stat.total_incorrect, 0);
  const totalCards = totalCorrectCards + totalIncorrectCards;
  const accuracy = totalCards > 0 ? Math.round((totalCorrectCards / totalCards) * 100) : 0;
  
  // Calcula qual dificuldade mais jogou (fake por enquanto)
  const mostPlayedDifficulty = "Médio";
  
  // Calcula tempo médio por card
  const averageTimePerCard = totalCards > 0 
    ? Math.round((parseInt(userData.totalStudyTime.split('h')[0]) * 3600 + parseInt(userData.totalStudyTime.split('h')[1].split('min')[0]) * 60) / totalCards) 
    : 0;

  const levelProgress = (userData.xp / userData.xpToNextLevel) * 100;

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600"></div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto bg-gradient-to-br from-background via-background to-violet-50/30 dark:to-violet-950/10 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">Meu Perfil</h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Acompanhe seu progresso e estatísticas
            </p>
          </div>
        </div>

        {/* Perfil Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-xl">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              {/* Avatar */}
              <div className="relative mx-auto sm:mx-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-lg shadow-violet-500/30">
                  {userData.avatar}
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center border-4 border-background shadow-lg">
                  <Star size={16} className="text-white fill-white sm:w-5 sm:h-5" />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center sm:text-left w-full">
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 mb-2">
                  <h2 className="text-xl sm:text-2xl font-bold">{userData.name}</h2>
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-sm font-medium">
                    Nível {userData.level}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 break-all">{userData.email}</p>

                {/* Barra de Progresso XP */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-muted-foreground">Progresso para o próximo nível</span>
                    <span className="font-medium">
                      {userData.xp} / {userData.xpToNextLevel} XP
                    </span>
                  </div>
                  <div className="h-2 sm:h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 shadow-lg shadow-violet-500/50"
                      initial={{ width: 0 }}
                      animate={{ width: `${levelProgress}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Estatísticas Principais */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card className="p-4 sm:p-6 border-border/50 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <Trophy size={20} className="text-white sm:w-6 sm:h-6" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400">{totalCorrectCards}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Cards Acertados</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card className="p-4 sm:p-6 border-border/50 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Clock size={20} className="text-white sm:w-6 sm:h-6" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">{averageTimePerCard}s</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Tempo Médio</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Card className="p-4 sm:p-6 border-border/50 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <Target size={20} className="text-white sm:w-6 sm:h-6" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-xl sm:text-2xl font-bold text-amber-600 dark:text-amber-400">{mostPlayedDifficulty}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Dificuldade Favorita</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Card className="p-4 sm:p-6 border-border/50 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <TrendingUp size={20} className="text-white sm:w-6 sm:h-6" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400">{accuracy}%</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Taxa de Acerto</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Informações Detalhadas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Estatísticas de Jogo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Card className="p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <Zap size={18} className="text-primary sm:w-5 sm:h-5" />
                <h3 className="text-base sm:text-lg font-semibold">Estatísticas de Jogo</h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between py-2 sm:py-3 border-b border-border text-sm sm:text-base">
                  <span className="text-muted-foreground">Total de Jogos</span>
                  <span className="font-semibold">{stats.totalGames + gameHistory.length}</span>
                </div>
                <div className="flex items-center justify-between py-2 sm:py-3 border-b border-border text-sm sm:text-base">
                  <span className="text-muted-foreground">Total de Cards</span>
                  <span className="font-semibold">{totalCards}</span>
                </div>
                <div className="flex items-center justify-between py-2 sm:py-3 border-b border-border text-sm sm:text-base">
                  <span className="text-muted-foreground">Cards Corretos</span>
                  <span className="font-semibold text-green-500">{totalCorrectCards}</span>
                </div>
                <div className="flex items-center justify-between py-2 sm:py-3 border-b border-border text-sm sm:text-base">
                  <span className="text-muted-foreground">Cards Incorretos</span>
                  <span className="font-semibold text-red-500">{totalIncorrectCards}</span>
                </div>
                <div className="flex items-center justify-between py-2 sm:py-3 text-sm sm:text-base">
                  <span className="text-muted-foreground">Marcados para Revisão</span>
                  <span className="font-semibold text-yellow-500">{stats.markedForReview}</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Informações da Conta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <Card className="p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <User size={18} className="text-primary sm:w-5 sm:h-5" />
                <h3 className="text-base sm:text-lg font-semibold">Informações da Conta</h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between py-2 sm:py-3 border-b border-border text-sm sm:text-base">
                  <span className="text-muted-foreground">Nome</span>
                  <span className="font-semibold truncate ml-2">{userData.name}</span>
                </div>
                <div className="flex items-center justify-between py-2 sm:py-3 border-b border-border text-sm sm:text-base">
                  <span className="text-muted-foreground">Email</span>
                  <span className="font-semibold text-xs sm:text-sm truncate ml-2">{userData.email}</span>
                </div>
                <div className="flex items-center justify-between py-2 sm:py-3 border-b border-border text-sm sm:text-base">
                  <span className="text-muted-foreground">Nível Atual</span>
                  <span className="font-semibold">{userData.level}</span>
                </div>
                <div className="flex items-center justify-between py-2 sm:py-3 border-b border-border text-sm sm:text-base">
                  <span className="text-muted-foreground">Tempo Total de Estudo</span>
                  <span className="font-semibold">{userData.totalStudyTime}</span>
                </div>
                <div className="flex items-center justify-between py-2 sm:py-3 text-sm sm:text-base">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={14} className="sm:w-4 sm:h-4" />
                    <span>Membro desde</span>
                  </div>
                  <span className="font-semibold text-xs sm:text-sm">
                    {new Date(userData.accountCreated).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Conquistas (Preview) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="mt-4 sm:mt-6"
        >
          <Card className="p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Award size={18} className="text-primary sm:w-5 sm:h-5" />
              <h3 className="text-base sm:text-lg font-semibold">Conquistas Recentes</h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-lg bg-muted text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-2">
                  <Trophy size={20} className="text-yellow-500 sm:w-6 sm:h-6" />
                </div>
                <p className="text-xs sm:text-sm font-medium">Primeira Vitória</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">Complete um jogo</p>
              </div>

              <div className="p-3 sm:p-4 rounded-lg bg-muted text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-2">
                  <Zap size={20} className="text-blue-500 sm:w-6 sm:h-6" />
                </div>
                <p className="text-xs sm:text-sm font-medium">Velocista</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">10 acertos seguidos</p>
              </div>

              <div className="p-3 sm:p-4 rounded-lg bg-muted text-center opacity-50">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-2">
                  <Target size={20} className="text-purple-500 sm:w-6 sm:h-6" />
                </div>
                <p className="text-xs sm:text-sm font-medium">Mestre</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">100% de acerto</p>
              </div>

              <div className="p-3 sm:p-4 rounded-lg bg-muted text-center opacity-50">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-2">
                  <TrendingUp size={20} className="text-green-500 sm:w-6 sm:h-6" />
                </div>
                <p className="text-xs sm:text-sm font-medium">Dedicado</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">7 dias seguidos</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
