# Sistema de Gamificação - Cursos AWS

## Visão Geral

O sistema foi transformado de flashcards simples para uma plataforma de cursos gamificada com níveis, XP, medalhas e conquistas.

## Estrutura de Cursos

### Categorias
Os cursos são organizados em categorias:
- **Computação**: EC2, Lambda, ECS, Fargate
- **Armazenamento**: S3, EBS, EFS, Glacier
- **Banco de Dados**: RDS, DynamoDB, Aurora, ElastiCache
- **Redes**: VPC, CloudFront, Route 53, API Gateway
- **Segurança**: IAM, KMS, Secrets Manager, WAF

### Estrutura de Curso
Cada curso contém:
- **Múltiplos Níveis**: 3-5 níveis progressivos
- **Dificuldade Crescente**: Beginner → Intermediate → Advanced → Expert
- **Sistema de Desbloqueio**: Níveis são desbloqueados sequencialmente

### Níveis
Cada nível possui:
- **Questões**: 5-10 questões de múltipla escolha
- **Pontuação Mínima**: 70-85% para passar
- **XP Base**: 100-400 XP dependendo da dificuldade
- **Bônus de Tempo**: Gold/Silver/Bronze

## Sistema de XP e Níveis

### Ganho de XP
- **XP por Questão**: 10-50 XP baseado na dificuldade
- **XP por Nível Completo**: 100-400 XP bônus
- **Bônus de Tempo**:
  - 🥇 Gold: +100 XP (tempo < gold threshold)
  - 🥈 Silver: +50 XP (tempo < silver threshold)
  - 🥉 Bronze: +25 XP (tempo < bronze threshold)
- **Multiplicador de Combo**:
  - 3+ acertos seguidos: x1.5
  - 5+ acertos seguidos: x2.0
  - 10+ acertos seguidos: x3.0

### Progressão de Nível
- Fórmula: `XP necessário = 100 * nível^1.5`
- Nível 1 → 2: 100 XP
- Nível 2 → 3: 282 XP
- Nível 3 → 4: 519 XP
- Nível 10 → 11: 3,162 XP

## Sistema de Medalhas

### Medalhas de Curso
Ganhas ao completar todos os níveis de um curso:
- **Bronze**: Completou com tempo médio
- **Prata**: Completou com bom tempo
- **Ouro**: Completou com tempo excelente
- **Platina**: Completou com 100% de acerto e tempo gold em todos os níveis

### Exibição
- Medalhas aparecem no perfil do usuário
- Mostram o curso, data de conclusão e rank

## Sistema de Conquistas

### Categorias de Conquistas

#### 🏆 Especiais
- **Primeira Jornada**: Complete seu primeiro curso (500 XP)
- **Polivalente**: Complete um curso de cada categoria (1000 XP)
- **Madrugador**: Estude entre 5h-7h (150 XP)
- **Coruja Noturna**: Estude entre 23h-1h (150 XP)

#### ⚡ Velocidade
- **Demônio da Velocidade**: Ganhe 10 bônus Gold (300 XP)
- **Relâmpago**: Complete um nível em menos de 1 minuto (200 XP)

#### 🎯 Precisão
- **Perfeição**: 100% de acerto em um nível (200 XP)
- **Mestre do Combo**: 10 acertos seguidos (250 XP)
- **Infalível**: 50 acertos seguidos (500 XP)

#### 📚 Questões
- **Centenário**: Responda 100 questões (300 XP)
- **Milhar**: Responda 1000 questões (1000 XP)

#### ⏰ Tempo
- **Maratonista**: 5 horas de estudo (500 XP)
- **Dedicado**: 20 horas de estudo (1000 XP)

#### 🔥 Streak
- **Dedicação Semanal**: 7 dias consecutivos (400 XP)
- **Dedicação Mensal**: 30 dias consecutivos (1500 XP)

## Interface de Resultado

Após completar um nível, o usuário vê:
1. **Status**: Passou ou não passou
2. **Estatísticas**:
   - Pontuação (%)
   - Tempo gasto
   - Acertos/Total
   - XP ganho
3. **Bônus**:
   - Bônus de tempo (se aplicável)
   - Multiplicador de combo (se aplicável)
4. **Progressão**:
   - Se subiu de nível
   - Novo nível do jogador

## Perfil do Usuário

### Estatísticas Exibidas
- **Nível Atual**: Com barra de progresso para próximo nível
- **XP Total**: XP acumulado
- **Cursos Completados**: Número de cursos finalizados
- **Medalhas**: Grid de medalhas conquistadas
- **Conquistas**: Lista de conquistas desbloqueadas
- **Streak Atual**: Dias consecutivos estudando
- **Tempo Total**: Horas de estudo acumuladas
- **Taxa de Acerto**: Porcentagem geral de acertos

## Ideias Futuras

### Sistema de Ranking
- Ranking semanal/mensal entre amigos
- Leaderboard global por categoria
- Competições temporárias

### Power-ups
- **Dica Extra**: Revela uma dica adicional
- **Tempo Extra**: +30 segundos no timer
- **50/50**: Remove 2 opções incorretas
- **Pular Questão**: Pula uma questão difícil

### Desafios Diários
- Desafio diário com XP bônus
- Missões semanais (ex: "Complete 3 cursos de Storage")
- Eventos especiais com recompensas exclusivas

### Sistema Social
- Adicionar amigos
- Ver progresso dos amigos
- Desafiar amigos para duelos
- Compartilhar conquistas

### Personalização
- Avatares customizáveis
- Temas de interface
- Badges personalizados
- Títulos especiais

### Analytics
- Gráfico de progresso ao longo do tempo
- Heatmap de atividade
- Análise de pontos fortes/fracos por categoria
- Recomendações personalizadas

## Implementação Técnica

### Arquivos Principais
- `src/types/courses.ts`: Tipos TypeScript
- `src/data/courses.ts`: Dados dos cursos e funções auxiliares
- `src/data/questions.ts`: Banco de questões
- `src/components-pages/Courses.tsx`: Lista de cursos
- `src/components-pages/CourseDetail.tsx`: Detalhes do curso
- `src/components-pages/CourseLevel.tsx`: Interface de jogo

### Próximos Passos
1. ✅ Criar estrutura de tipos
2. ✅ Criar dados de cursos e questões
3. ✅ Implementar interface de cursos
4. ✅ Implementar interface de jogo
5. ⏳ Integrar com Supabase para persistência
6. ⏳ Adicionar mais questões
7. ⏳ Implementar sistema de conquistas
8. ⏳ Adicionar medalhas ao perfil
9. ⏳ Implementar streak tracking
10. ⏳ Adicionar analytics e gráficos

### Banco de Dados (Supabase)

Tabelas necessárias:
```sql
-- Progresso do curso
CREATE TABLE course_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  course_id TEXT NOT NULL,
  current_level INTEGER DEFAULT 1,
  completed_levels INTEGER[] DEFAULT '{}',
  total_xp_earned INTEGER DEFAULT 0,
  best_times JSONB DEFAULT '{}',
  scores JSONB DEFAULT '{}',
  last_played TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Medalhas
CREATE TABLE course_medals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  course_id TEXT NOT NULL,
  rank TEXT NOT NULL, -- bronze, silver, gold, platinum
  earned_at TIMESTAMP DEFAULT NOW(),
  completion_time INTEGER, -- segundos
  average_score INTEGER -- porcentagem
);

-- Conquistas
CREATE TABLE user_achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  achievement_id TEXT NOT NULL,
  progress INTEGER DEFAULT 0,
  unlocked BOOLEAN DEFAULT FALSE,
  unlocked_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Estatísticas do jogador
CREATE TABLE player_stats (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id),
  level INTEGER DEFAULT 1,
  total_xp INTEGER DEFAULT 0,
  total_questions_answered INTEGER DEFAULT 0,
  total_correct_answers INTEGER DEFAULT 0,
  total_study_time INTEGER DEFAULT 0, -- segundos
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  last_study_date DATE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```
