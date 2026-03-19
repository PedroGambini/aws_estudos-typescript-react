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

export default function Profile() {
  // Dados fake do usuário
  const userData = {
    name: "João Silva",
    email: "joao.silva@email.com",
    avatar: "JS",
    level: 12,
    xp: 2450,
    xpToNextLevel: 3000,
    accountCreated: "2024-01-15",
    totalStudyTime: "24h 35min",
  };

  // Pega estatísticas reais do jogo
  const stats = getGameStats();
  
  // Calcula qual dificuldade mais jogou (fake por enquanto)
  const mostPlayedDifficulty = "Médio";
  
  // Calcula tempo médio por card (fake)
  const averageTimePerCard = stats.totalCards > 0 
    ? Math.round((24 * 60 + 35) / stats.totalCards) 
    : 0;

  const levelProgress = (userData.xp / userData.xpToNextLevel) * 100;

  return (
    <div className="flex-1 p-8 overflow-y-auto bg-gradient-to-br from-background via-background to-violet-50/30 dark:to-violet-950/10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">Meu Perfil</h1>
            <p className="text-muted-foreground">
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
          <Card className="p-8 mb-6 border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-xl">
            <div className="flex items-start gap-6">
              {/* Avatar */}
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-violet-500/30">
                  {userData.avatar}
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center border-4 border-background shadow-lg">
                  <Star size={20} className="text-white fill-white" />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-bold">{userData.name}</h2>
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-sm font-medium">
                    Nível {userData.level}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{userData.email}</p>

                {/* Barra de Progresso XP */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progresso para o próximo nível</span>
                    <span className="font-medium">
                      {userData.xp} / {userData.xpToNextLevel} XP
                    </span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card className="p-6 border-border/50 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <Trophy size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{stats.correctCards}</p>
                  <p className="text-sm text-muted-foreground">Cards Acertados</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card className="p-6 border-border/50 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{averageTimePerCard}s</p>
                  <p className="text-sm text-muted-foreground">Tempo Médio</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Card className="p-6 border-border/50 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <Target size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">{mostPlayedDifficulty}</p>
                  <p className="text-sm text-muted-foreground">Dificuldade Favorita</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Card className="p-6 border-border/50 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.accuracy}%</p>
                  <p className="text-sm text-muted-foreground">Taxa de Acerto</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Informações Detalhadas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Estatísticas de Jogo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Zap size={20} className="text-primary" />
                <h3 className="text-lg font-semibold">Estatísticas de Jogo</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Total de Jogos</span>
                  <span className="font-semibold">{stats.totalGames}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Total de Cards</span>
                  <span className="font-semibold">{stats.totalCards}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Cards Corretos</span>
                  <span className="font-semibold text-green-500">{stats.correctCards}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Cards Incorretos</span>
                  <span className="font-semibold text-red-500">{stats.incorrectCards}</span>
                </div>
                <div className="flex items-center justify-between py-3">
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
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <User size={20} className="text-primary" />
                <h3 className="text-lg font-semibold">Informações da Conta</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Nome</span>
                  <span className="font-semibold">{userData.name}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Email</span>
                  <span className="font-semibold text-sm">{userData.email}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Nível Atual</span>
                  <span className="font-semibold">{userData.level}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Tempo Total de Estudo</span>
                  <span className="font-semibold">{userData.totalStudyTime}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    <span>Membro desde</span>
                  </div>
                  <span className="font-semibold">
                    {new Date(userData.accountCreated).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'long',
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
          className="mt-6"
        >
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Award size={20} className="text-primary" />
              <h3 className="text-lg font-semibold">Conquistas Recentes</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-muted text-center">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-2">
                  <Trophy size={24} className="text-yellow-500" />
                </div>
                <p className="text-sm font-medium">Primeira Vitória</p>
                <p className="text-xs text-muted-foreground mt-1">Complete um jogo</p>
              </div>

              <div className="p-4 rounded-lg bg-muted text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-2">
                  <Zap size={24} className="text-blue-500" />
                </div>
                <p className="text-sm font-medium">Velocista</p>
                <p className="text-xs text-muted-foreground mt-1">10 acertos seguidos</p>
              </div>

              <div className="p-4 rounded-lg bg-muted text-center opacity-50">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-2">
                  <Target size={24} className="text-purple-500" />
                </div>
                <p className="text-sm font-medium">Mestre</p>
                <p className="text-xs text-muted-foreground mt-1">100% de acerto</p>
              </div>

              <div className="p-4 rounded-lg bg-muted text-center opacity-50">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-2">
                  <TrendingUp size={24} className="text-green-500" />
                </div>
                <p className="text-sm font-medium">Dedicado</p>
                <p className="text-xs text-muted-foreground mt-1">7 dias seguidos</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
