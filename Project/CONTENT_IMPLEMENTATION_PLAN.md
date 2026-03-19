# Plano de Implementação de Conteúdo - Cursos AWS

## 📋 Status Atual

### ✅ Já Implementado
- Sistema de cursos gamificado completo
- Estrutura de níveis e progressão
- Sistema de XP, medalhas e conquistas
- Integração com Supabase
- 4 cursos base: EC2, S3, Lambda, EBS
- Questões de exemplo para nível 1 de cada curso

### 🎯 Próximo Passo: Popular com Conteúdo Real

## 📚 Fontes de Conteúdo (Documentação AWS Oficial)

### 1. EC2 - Fundamentos
**Documentação Base:**
- [O que é o Amazon EC2?](https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/concepts.html)
- [Segurança no Amazon EC2](https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/ec2-security.html)

**Estrutura de Níveis:**
- **Nível 1**: Introdução ao EC2 (Conceitos básicos, tipos de instância, AMIs)
- **Nível 2**: Tipos de Instância (Famílias, casos de uso, otimização)
- **Nível 3**: Modelos de Preço (On-Demand, Reserved, Spot, Savings Plans)
- **Nível 4**: Auto Scaling (Grupos, políticas, métricas)
- **Nível 5**: Otimização Avançada (Performance, custos, segurança)

### 2. S3 - Armazenamento de Objetos
**Documentação Base:**
- [O que é o Amazon S3?](https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html)
- [Classes de Armazenamento do S3](https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/storage-class-intro.html)

**Estrutura de Níveis:**
- **Nível 1**: Fundamentos do S3 (Buckets, objetos, conceitos básicos)
- **Nível 2**: Classes de Armazenamento (Standard, IA, Glacier, comparações)
- **Nível 3**: Segurança e Permissões (IAM, Bucket Policies, ACLs, Encryption)
- **Nível 4**: Lifecycle Policies (Transições, expiração, otimização de custos)
- **Nível 5**: Performance e Otimização (Transfer Acceleration, Multipart, CloudFront)

### 3. Lambda - Serverless
**Documentação Base:**
- [O que é o AWS Lambda?](https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html)

**Estrutura de Níveis:**
- **Nível 1**: Conceitos Básicos (Funções, triggers, execução)
- **Nível 2**: Triggers e Eventos (S3, API Gateway, EventBridge, SQS)
- **Nível 3**: Otimização (Memória, timeout, cold starts, layers)
- **Nível 4**: Arquiteturas Avançadas (Step Functions, event-driven, microservices)

### 4. EBS - Volumes de Bloco
**Documentação Base:**
- [O que é o Amazon EBS?](https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/AmazonEBS.html)

**Estrutura de Níveis:**
- **Nível 1**: Introdução ao EBS (Volumes, conceitos, diferenças do Instance Store)
- **Nível 2**: Tipos de Volume (SSD: gp3, gp2, io2 | HDD: st1, sc1)
- **Nível 3**: Snapshots e Backup (Criação, restauração, lifecycle, custos)

## 🎮 Sistema de Progressão Implementado

### Ganho de XP
```typescript
// XP por questão: 10-50 XP (baseado na dificuldade)
// XP por nível completo: 100-400 XP (bônus)
// Bônus de tempo:
//   - Gold: +100 XP (< gold threshold)
//   - Silver: +50 XP (< silver threshold)  
//   - Bronze: +25 XP (< bronze threshold)
// Multiplicador de combo:
//   - 3+ acertos: x1.5
//   - 5+ acertos: x2.0
//   - 10+ acertos: x3.0
```

### Fórmula de Nível
```typescript
// XP necessário = 100 * nível^1.5
// Nível 1 → 2: 100 XP
// Nível 2 → 3: 282 XP
// Nível 3 → 4: 519 XP
// Nível 10 → 11: 3,162 XP
```

### Sistema de Desbloqueio
- Primeiro nível de cada curso: **Sempre desbloqueado**
- Níveis seguintes: **Desbloqueados ao completar o anterior com 70-85% de acerto**
- Cursos avançados (futuro): **Requerem nível mínimo do jogador**

## 📝 Formato de Questões

### Estrutura TypeScript
```typescript
interface Question {
  id: string;
  question: { pt: string; en: string };
  options: { pt: string[]; en: string[] };
  correctAnswer: number; // índice da resposta correta
  explanation: { pt: string; en: string };
  proTip?: { pt: string; en: string }; // opcional
  codeSnippet?: string; // opcional
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  xpReward: number;
}
```

### Exemplo de Questão Técnica
```typescript
{
  id: 's3-l2-q1',
  question: {
    pt: 'Qual classe de armazenamento do S3 é ideal para dados acessados raramente, mas que exigem acesso em milissegundos quando necessário?',
    en: 'Which S3 storage class is ideal for infrequently accessed data that requires millisecond access when needed?'
  },
  options: {
    pt: [
      'S3 Standard',
      'S3 Standard-IA',
      'S3 Glacier Instant Retrieval',
      'S3 Glacier Flexible Retrieval'
    ],
    en: [
      'S3 Standard',
      'S3 Standard-IA',
      'S3 Glacier Instant Retrieval',
      'S3 Glacier Flexible Retrieval'
    ]
  },
  correctAnswer: 1,
  explanation: {
    pt: 'S3 Standard-IA (Infrequent Access) é otimizado para dados acessados com pouca frequência, mas que requerem acesso rápido (milissegundos) quando necessário. Oferece menor custo de armazenamento que S3 Standard, mas cobra por recuperação.',
    en: 'S3 Standard-IA (Infrequent Access) is optimized for infrequently accessed data that requires rapid access (milliseconds) when needed. It offers lower storage cost than S3 Standard but charges for retrieval.'
  },
  proTip: {
    pt: 'Use S3 Intelligent-Tiering se você não tem certeza dos padrões de acesso - ele move automaticamente os dados entre tiers baseado no uso.',
    en: 'Use S3 Intelligent-Tiering if you\'re unsure of access patterns - it automatically moves data between tiers based on usage.'
  },
  difficulty: 'intermediate',
  xpReward: 20
}
```

## 🎯 Diretrizes para Criação de Questões

### Tipos de Questões

#### 1. Conceituais (Beginner)
- O que é X?
- Qual é a diferença entre X e Y?
- Para que serve X?
- Quando usar X?

#### 2. Técnicas (Intermediate)
- Qual é o limite de X?
- Como configurar X para Y?
- Qual opção é mais adequada para cenário Z?
- Quais são as melhores práticas para X?

#### 3. Cenários (Advanced)
- Dado o cenário X, qual é a melhor solução?
- Como otimizar X para Y?
- Qual arquitetura resolve o problema Z?
- Como troubleshoot X?

#### 4. Certificação (Expert)
- Questões estilo AWS Certified Solutions Architect
- Múltiplos fatores a considerar
- Trade-offs entre soluções
- Casos de uso complexos

### Qualidade das Questões

✅ **BOM:**
- Baseado em documentação oficial
- Resposta clara e objetiva
- Explicação técnica detalhada
- ProTip com informação adicional relevante
- Opções plausíveis (não óbvias)

❌ **EVITAR:**
- Questões genéricas ou vagas
- Respostas óbvias demais
- Informações desatualizadas
- Pegadinhas sem valor educacional
- Opções absurdas

## 📊 Métricas de Sucesso

### Por Questão
- Taxa de acerto esperada: 60-80%
- Tempo médio de resposta: 30-60 segundos
- Feedback positivo dos usuários

### Por Nível
- Taxa de conclusão: >70%
- Taxa de repetição: <30%
- Progressão para próximo nível: >60%

### Por Curso
- Taxa de conclusão completa: >40%
- Tempo médio de conclusão: 2-4 horas
- Satisfação do usuário: >4.5/5

## 🚀 Próximos Passos

### Fase 1: Expansão de Conteúdo (Prioridade Alta)
1. ✅ Criar questões para EC2 Nível 2-5 (baseado na doc oficial)
2. ✅ Criar questões para S3 Nível 2-5 (baseado na doc oficial)
3. ✅ Criar questões para Lambda Nível 2-4 (baseado na doc oficial)
4. ✅ Criar questões para EBS Nível 2-3 (baseado na doc oficial)

### Fase 2: Novos Cursos (Prioridade Média)
1. VPC - Redes e Conectividade
2. RDS - Banco de Dados Relacional
3. DynamoDB - Banco de Dados NoSQL
4. IAM - Identidade e Acesso

### Fase 3: Recursos Avançados (Prioridade Baixa)
1. Sistema de hints (dicas progressivas)
2. Modo de prática (sem limite de tempo)
3. Revisão de erros (questões que errou)
4. Flashcards tradicionais (complemento aos cursos)

## 💡 Integração Cursos ↔ Flashcards

### Fluxo Proposto
1. **Aba Cursos**: Usuário estuda o conteúdo teórico (questões de múltipla escolha)
2. **Progresso**: Ao completar níveis, ganha XP e desbloqueia próximos níveis
3. **Aba Flashcards**: Pratica com repetição espaçada os conceitos aprendidos
4. **Sincronização**: Flashcards são desbloqueados conforme cursos são completados

### Lógica de Desbloqueio
```typescript
// Exemplo: Flashcards de EC2 só são liberados após completar EC2 Nível 1
if (courseProgress['ec2-fundamentals'].completedLevels.includes(1)) {
  unlockFlashcardDeck('ec2-basics');
}
```

## 🗄️ Estrutura de Dados Atual

### Tabelas Supabase (Já Criadas)
- ✅ `course_progress`: Progresso do usuário em cada curso
- ✅ `course_medals`: Medalhas conquistadas
- ✅ `user_achievements`: Conquistas desbloqueadas
- ✅ `player_stats`: Estatísticas gerais do jogador
- ✅ `level_history`: Histórico de todas as tentativas
- ✅ `user_streaks`: Rastreamento de streak diário

### Queries Implementadas
- ✅ `getCourseProgress()`: Busca progresso de um curso
- ✅ `completeLevelFlow()`: Fluxo completo de conclusão de nível
- ✅ `getPlayerStats()`: Estatísticas do jogador
- ✅ `getUserAchievements()`: Conquistas do usuário
- ✅ `getGlobalLeaderboard()`: Ranking global

## 📖 Referências

### Documentação AWS Oficial
- [AWS Documentation](https://docs.aws.amazon.com/)
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)
- [AWS Certification Exam Guides](https://aws.amazon.com/certification/)

### Recursos Adicionais
- AWS Skill Builder
- AWS Training and Certification
- AWS Whitepapers
- AWS Architecture Center

---

**Nota**: Este documento serve como guia para a criação de conteúdo educacional de alta qualidade baseado na documentação oficial da AWS. Todas as questões devem ser verificadas quanto à precisão técnica e alinhamento com as melhores práticas atuais da AWS.
