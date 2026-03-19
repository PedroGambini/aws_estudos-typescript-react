-- Migration: Sistema de Cursos Gamificado
-- Descrição: Adiciona tabelas para cursos, progresso, medalhas, conquistas e estatísticas

-- Tabela de progresso do curso
CREATE TABLE IF NOT EXISTS course_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id TEXT NOT NULL,
  current_level INTEGER DEFAULT 1,
  completed_levels INTEGER[] DEFAULT '{}',
  total_xp_earned INTEGER DEFAULT 0,
  best_times JSONB DEFAULT '{}', -- { "1": 120, "2": 150, ... }
  scores JSONB DEFAULT '{}', -- { "1": 85, "2": 92, ... }
  last_played TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, course_id)
);

-- Índices para course_progress
CREATE INDEX idx_course_progress_user ON course_progress(user_id);
CREATE INDEX idx_course_progress_course ON course_progress(course_id);
CREATE INDEX idx_course_progress_last_played ON course_progress(last_played);

-- Tabela de medalhas de curso
CREATE TABLE IF NOT EXISTS course_medals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id TEXT NOT NULL,
  course_name JSONB NOT NULL, -- { "pt": "EC2", "en": "EC2" }
  rank TEXT NOT NULL CHECK (rank IN ('bronze', 'silver', 'gold', 'platinum')),
  earned_at TIMESTAMP DEFAULT NOW(),
  completion_time INTEGER, -- tempo total em segundos
  average_score INTEGER, -- porcentagem média
  UNIQUE(user_id, course_id)
);

-- Índices para course_medals
CREATE INDEX idx_course_medals_user ON course_medals(user_id);
CREATE INDEX idx_course_medals_rank ON course_medals(rank);
CREATE INDEX idx_course_medals_earned ON course_medals(earned_at);

-- Tabela de conquistas do usuário
CREATE TABLE IF NOT EXISTS user_achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  achievement_id TEXT NOT NULL,
  progress INTEGER DEFAULT 0,
  unlocked BOOLEAN DEFAULT FALSE,
  unlocked_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, achievement_id)
);

-- Índices para user_achievements
CREATE INDEX idx_user_achievements_user ON user_achievements(user_id);
CREATE INDEX idx_user_achievements_unlocked ON user_achievements(unlocked);
CREATE INDEX idx_user_achievements_achievement ON user_achievements(achievement_id);

-- Tabela de estatísticas do jogador
CREATE TABLE IF NOT EXISTS player_stats (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  level INTEGER DEFAULT 1,
  total_xp INTEGER DEFAULT 0,
  total_questions_answered INTEGER DEFAULT 0,
  total_correct_answers INTEGER DEFAULT 0,
  total_study_time INTEGER DEFAULT 0, -- segundos
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  last_study_date DATE,
  courses_completed INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Índices para player_stats
CREATE INDEX idx_player_stats_level ON player_stats(level);
CREATE INDEX idx_player_stats_total_xp ON player_stats(total_xp);
CREATE INDEX idx_player_stats_streak ON player_stats(current_streak);

-- Tabela de histórico de níveis (para analytics)
CREATE TABLE IF NOT EXISTS level_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id TEXT NOT NULL,
  level_id TEXT NOT NULL,
  level_number INTEGER NOT NULL,
  score INTEGER NOT NULL, -- porcentagem
  correct_answers INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  time_spent INTEGER NOT NULL, -- segundos
  xp_earned INTEGER NOT NULL,
  time_bonus TEXT, -- 'gold', 'silver', 'bronze', null
  time_bonus_xp INTEGER DEFAULT 0,
  combo_multiplier DECIMAL(3,1) DEFAULT 1.0,
  passed BOOLEAN NOT NULL,
  played_at TIMESTAMP DEFAULT NOW()
);

-- Índices para level_history
CREATE INDEX idx_level_history_user ON level_history(user_id);
CREATE INDEX idx_level_history_course ON level_history(course_id);
CREATE INDEX idx_level_history_played ON level_history(played_at);

-- Tabela de streak tracking
CREATE TABLE IF NOT EXISTS user_streaks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  study_date DATE NOT NULL,
  questions_answered INTEGER DEFAULT 0,
  time_spent INTEGER DEFAULT 0, -- segundos
  xp_earned INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, study_date)
);

-- Índices para user_streaks
CREATE INDEX idx_user_streaks_user ON user_streaks(user_id);
CREATE INDEX idx_user_streaks_date ON user_streaks(study_date);

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers para atualizar updated_at
CREATE TRIGGER update_course_progress_updated_at
  BEFORE UPDATE ON course_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_achievements_updated_at
  BEFORE UPDATE ON user_achievements
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_player_stats_updated_at
  BEFORE UPDATE ON player_stats
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Função para calcular e atualizar streak
CREATE OR REPLACE FUNCTION update_user_streak()
RETURNS TRIGGER AS $$
DECLARE
  last_date DATE;
  streak_count INTEGER;
BEGIN
  -- Buscar última data de estudo
  SELECT study_date INTO last_date
  FROM user_streaks
  WHERE user_id = NEW.user_id
    AND study_date < NEW.study_date
  ORDER BY study_date DESC
  LIMIT 1;

  -- Calcular streak
  IF last_date IS NULL THEN
    streak_count := 1;
  ELSIF NEW.study_date = last_date + INTERVAL '1 day' THEN
    SELECT current_streak + 1 INTO streak_count
    FROM player_stats
    WHERE user_id = NEW.user_id;
  ELSIF NEW.study_date = last_date THEN
    SELECT current_streak INTO streak_count
    FROM player_stats
    WHERE user_id = NEW.user_id;
  ELSE
    streak_count := 1;
  END IF;

  -- Atualizar player_stats
  UPDATE player_stats
  SET 
    current_streak = streak_count,
    longest_streak = GREATEST(longest_streak, streak_count),
    last_study_date = NEW.study_date
  WHERE user_id = NEW.user_id;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para atualizar streak
CREATE TRIGGER update_streak_on_study
  AFTER INSERT ON user_streaks
  FOR EACH ROW
  EXECUTE FUNCTION update_user_streak();

-- Função para criar player_stats ao criar usuário
CREATE OR REPLACE FUNCTION create_player_stats_for_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO player_stats (user_id)
  VALUES (NEW.id)
  ON CONFLICT (user_id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para criar player_stats
CREATE TRIGGER create_player_stats_on_user_creation
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION create_player_stats_for_new_user();

-- RLS (Row Level Security) Policies

-- course_progress
ALTER TABLE course_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own course progress"
  ON course_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own course progress"
  ON course_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own course progress"
  ON course_progress FOR UPDATE
  USING (auth.uid() = user_id);

-- course_medals
ALTER TABLE course_medals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own medals"
  ON course_medals FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own medals"
  ON course_medals FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- user_achievements
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own achievements"
  ON user_achievements FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own achievements"
  ON user_achievements FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own achievements"
  ON user_achievements FOR UPDATE
  USING (auth.uid() = user_id);

-- player_stats
ALTER TABLE player_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own stats"
  ON player_stats FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own stats"
  ON player_stats FOR UPDATE
  USING (auth.uid() = user_id);

-- level_history
ALTER TABLE level_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own level history"
  ON level_history FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own level history"
  ON level_history FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- user_streaks
ALTER TABLE user_streaks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own streaks"
  ON user_streaks FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own streaks"
  ON user_streaks FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own streaks"
  ON user_streaks FOR UPDATE
  USING (auth.uid() = user_id);

-- Comentários nas tabelas
COMMENT ON TABLE course_progress IS 'Armazena o progresso do usuário em cada curso';
COMMENT ON TABLE course_medals IS 'Armazena as medalhas conquistadas pelos usuários';
COMMENT ON TABLE user_achievements IS 'Armazena as conquistas desbloqueadas pelos usuários';
COMMENT ON TABLE player_stats IS 'Armazena estatísticas gerais do jogador';
COMMENT ON TABLE level_history IS 'Armazena histórico de todas as tentativas de níveis';
COMMENT ON TABLE user_streaks IS 'Armazena o histórico diário de estudo para cálculo de streak';
