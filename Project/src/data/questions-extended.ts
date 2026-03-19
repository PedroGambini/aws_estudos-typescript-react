import type { Question } from '@/types/courses';

// Este arquivo contém questões adicionais para completar todos os níveis dos cursos
// Será importado e mesclado com questions.ts

// ============================================
// EC2 - NÍVEL 5: OTIMIZAÇÃO AVANÇADA
// ============================================
export const ec2Level5Questions: Question[] = [
  {
    id: 'ec2-l5-q1',
    question: {
      pt: 'O que é Enhanced Networking e quais são seus benefícios?',
      en: 'What is Enhanced Networking and what are its benefits?'
    },
    options: {
      pt: [
        'Rede com maior largura de banda, menor latência e menor jitter usando SR-IOV',
        'Rede com firewall integrado',
        'Rede com VPN automática',
        'Rede com balanceamento de carga integrado'
      ],
      en: [
        'Network with higher bandwidth, lower latency, and lower jitter using SR-IOV',
        'Network with integrated firewall',
        'Network with automatic VPN',
        'Network with integrated load balancing'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Enhanced Networking usa SR-IOV (Single Root I/O Virtualization) para fornecer alto desempenho de rede com largura de banda de até 100 Gbps, baixa latência e baixo jitter. Disponível sem custo adicional em instâncias suportadas.',
      en: 'Enhanced Networking uses SR-IOV (Single Root I/O Virtualization) to provide high network performance with bandwidth up to 100 Gbps, low latency, and low jitter. Available at no additional cost on supported instances.'
    },
    proTip: {
      pt: 'ENA (Elastic Network Adapter) é o driver recomendado para Enhanced Networking.',
      en: 'ENA (Elastic Network Adapter) is the recommended driver for Enhanced Networking.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'ec2-l5-q2',
    question: {
      pt: 'O que é Placement Group e quais são os três tipos?',
      en: 'What is Placement Group and what are the three types?'
    },
    options: {
      pt: [
        'Cluster, Spread e Partition',
        'High, Medium e Low',
        'Fast, Normal e Slow',
        'Primary, Secondary e Tertiary'
      ],
      en: [
        'Cluster, Spread, and Partition',
        'High, Medium, and Low',
        'Fast, Normal, and Slow',
        'Primary, Secondary, and Tertiary'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Placement Groups controlam como instâncias são colocadas no hardware: Cluster (baixa latência, mesma AZ), Spread (alta disponibilidade, hardware separado), Partition (grandes workloads distribuídos como Hadoop/Cassandra).',
      en: 'Placement Groups control how instances are placed on hardware: Cluster (low latency, same AZ), Spread (high availability, separate hardware), Partition (large distributed workloads like Hadoop/Cassandra).'
    },
    proTip: {
      pt: 'Use Cluster para HPC, Spread para aplicações críticas, Partition para big data distribuído.',
      en: 'Use Cluster for HPC, Spread for critical applications, Partition for distributed big data.'
    },
    difficulty: 'advanced',
    xpReward: 30
  },
  {
    id: 'ec2-l5-q3',
    question: {
      pt: 'O que é Elastic Fabric Adapter (EFA)?',
      en: 'What is Elastic Fabric Adapter (EFA)?'
    },
    options: {
      pt: [
        'Interface de rede para HPC com suporte a OS-bypass',
        'Adaptador de armazenamento elástico',
        'Balanceador de carga automático',
        'Firewall de aplicação'
      ],
      en: [
        'Network interface for HPC with OS-bypass support',
        'Elastic storage adapter',
        'Automatic load balancer',
        'Application firewall'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'EFA é uma interface de rede para workloads HPC e ML que requerem alto throughput e baixa latência. Suporta OS-bypass permitindo que aplicações HPC comuniquem diretamente com a interface de rede, reduzindo latência.',
      en: 'EFA is a network interface for HPC and ML workloads requiring high throughput and low latency. Supports OS-bypass allowing HPC applications to communicate directly with the network interface, reducing latency.'
    },
    proTip: {
      pt: 'EFA suporta MPI (Message Passing Interface) e é ideal para simulações e modelagem.',
      en: 'EFA supports MPI (Message Passing Interface) and is ideal for simulations and modeling.'
    },
    difficulty: 'expert',
    xpReward: 30
  },
  {
    id: 'ec2-l5-q4',
    question: {
      pt: 'Como você pode otimizar custos de EC2 usando AWS Compute Optimizer?',
      en: 'How can you optimize EC2 costs using AWS Compute Optimizer?'
    },
    options: {
      pt: [
        'Analisa métricas de utilização e recomenda tipos de instância mais adequados',
        'Automaticamente muda tipos de instância',
        'Compra Reserved Instances automaticamente',
        'Desliga instâncias não utilizadas'
      ],
      en: [
        'Analyzes utilization metrics and recommends more suitable instance types',
        'Automatically changes instance types',
        'Automatically purchases Reserved Instances',
        'Shuts down unused instances'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'AWS Compute Optimizer usa machine learning para analisar métricas históricas de utilização (CPU, memória, rede) e recomendar tipos de instância otimizados. Pode identificar over-provisioning e under-provisioning.',
      en: 'AWS Compute Optimizer uses machine learning to analyze historical utilization metrics (CPU, memory, network) and recommend optimized instance types. Can identify over-provisioning and under-provisioning.'
    },
    proTip: {
      pt: 'Compute Optimizer é gratuito e pode economizar até 25% em custos de EC2.',
      en: 'Compute Optimizer is free and can save up to 25% on EC2 costs.'
    },
    difficulty: 'intermediate',
    xpReward: 25
  },
  {
    id: 'ec2-l5-q5',
    question: {
      pt: 'O que é Hibernation em EC2 e quando usá-la?',
      en: 'What is Hibernation in EC2 and when to use it?'
    },
    options: {
      pt: [
        'Salva conteúdo da RAM no EBS permitindo retomar rapidamente',
        'Para a instância sem salvar estado',
        'Faz backup automático da instância',
        'Reduz o tamanho da instância'
      ],
      en: [
        'Saves RAM content to EBS allowing quick resume',
        'Stops the instance without saving state',
        'Automatically backs up the instance',
        'Reduces instance size'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Hibernation salva o conteúdo da RAM no volume EBS root, permitindo que a instância retome exatamente onde parou. Útil para aplicações com inicialização lenta ou que mantêm estado em memória. Você paga apenas pelo EBS durante hibernação.',
      en: 'Hibernation saves RAM content to the EBS root volume, allowing the instance to resume exactly where it stopped. Useful for applications with slow startup or that maintain state in memory. You pay only for EBS during hibernation.'
    },
    proTip: {
      pt: 'Hibernation requer volume EBS root criptografado e RAM < 150 GB.',
      en: 'Hibernation requires encrypted EBS root volume and RAM < 150 GB.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'ec2-l5-q6',
    question: {
      pt: 'O que são Capacity Reservations e como diferem de Reserved Instances?',
      en: 'What are Capacity Reservations and how do they differ from Reserved Instances?'
    },
    options: {
      pt: [
        'Reservam capacidade em AZ específica sem compromisso de longo prazo ou desconto',
        'São iguais a Reserved Instances',
        'Oferecem maior desconto que RIs',
        'São apenas para Spot Instances'
      ],
      en: [
        'Reserve capacity in specific AZ without long-term commitment or discount',
        'Are the same as Reserved Instances',
        'Offer higher discount than RIs',
        'Are only for Spot Instances'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Capacity Reservations garantem capacidade EC2 em AZ específica quando você precisa, sem compromisso de 1-3 anos. Não oferecem desconto (paga On-Demand). Combine com Savings Plans para desconto + garantia de capacidade.',
      en: 'Capacity Reservations guarantee EC2 capacity in specific AZ when you need it, without 1-3 year commitment. Do not offer discount (pay On-Demand). Combine with Savings Plans for discount + capacity guarantee.'
    },
    proTip: {
      pt: 'Use para workloads críticos que precisam garantia de capacidade em eventos específicos.',
      en: 'Use for critical workloads that need capacity guarantee for specific events.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'ec2-l5-q7',
    question: {
      pt: 'Como você pode monitorar performance detalhada de instâncias EC2?',
      en: 'How can you monitor detailed EC2 instance performance?'
    },
    options: {
      pt: [
        'Habilitar Detailed Monitoring (métricas a cada 1 minuto) e usar CloudWatch Agent para métricas de SO',
        'Apenas usar Basic Monitoring',
        'Instalar software de terceiros',
        'Não é possível monitorar performance'
      ],
      en: [
        'Enable Detailed Monitoring (metrics every 1 minute) and use CloudWatch Agent for OS metrics',
        'Only use Basic Monitoring',
        'Install third-party software',
        'Cannot monitor performance'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Detailed Monitoring fornece métricas a cada 1 minuto (vs 5 minutos no Basic). CloudWatch Agent coleta métricas de nível de SO (memória, disco, processos) que não estão disponíveis por padrão. Essencial para troubleshooting e otimização.',
      en: 'Detailed Monitoring provides metrics every 1 minute (vs 5 minutes in Basic). CloudWatch Agent collects OS-level metrics (memory, disk, processes) not available by default. Essential for troubleshooting and optimization.'
    },
    proTip: {
      pt: 'Use CloudWatch Logs Insights para análise avançada de logs de aplicação.',
      en: 'Use CloudWatch Logs Insights for advanced application log analysis.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ec2-l5-q8',
    question: {
      pt: 'O que é Nitro System e quais são seus benefícios?',
      en: 'What is Nitro System and what are its benefits?'
    },
    options: {
      pt: [
        'Plataforma de virtualização da AWS com melhor performance, segurança e inovação mais rápida',
        'Sistema de backup automático',
        'Sistema de monitoramento',
        'Sistema de balanceamento de carga'
      ],
      en: [
        'AWS virtualization platform with better performance, security, and faster innovation',
        'Automatic backup system',
        'Monitoring system',
        'Load balancing system'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Nitro System é a plataforma de virtualização moderna da AWS que offload funções de virtualização para hardware dedicado. Resulta em melhor performance (quase bare-metal), segurança aprimorada e permite inovação mais rápida em tipos de instância.',
      en: 'Nitro System is AWS modern virtualization platform that offloads virtualization functions to dedicated hardware. Results in better performance (near bare-metal), enhanced security, and enables faster innovation in instance types.'
    },
    proTip: {
      pt: 'Todas as instâncias novas (C6i, M6i, R6i, etc.) são baseadas em Nitro.',
      en: 'All new instances (C6i, M6i, R6i, etc.) are Nitro-based.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'ec2-l5-q9',
    question: {
      pt: 'Como você pode proteger dados em trânsito entre instâncias EC2?',
      en: 'How can you protect data in transit between EC2 instances?'
    },
    options: {
      pt: [
        'Usar TLS/SSL, VPN, ou AWS PrivateLink',
        'Apenas usar Security Groups',
        'Dados são automaticamente criptografados',
        'Não é possível criptografar dados em trânsito'
      ],
      en: [
        'Use TLS/SSL, VPN, or AWS PrivateLink',
        'Only use Security Groups',
        'Data is automatically encrypted',
        'Cannot encrypt data in transit'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Para proteger dados em trânsito: 1) Use TLS/SSL na camada de aplicação, 2) Configure VPN entre VPCs, 3) Use AWS PrivateLink para acesso privado a serviços, 4) Habilite encryption em EBS e S3. Security Groups controlam acesso mas não criptografam.',
      en: 'To protect data in transit: 1) Use TLS/SSL at application layer, 2) Configure VPN between VPCs, 3) Use AWS PrivateLink for private service access, 4) Enable encryption in EBS and S3. Security Groups control access but do not encrypt.'
    },
    proTip: {
      pt: 'AWS Certificate Manager (ACM) fornece certificados TLS/SSL gratuitos.',
      en: 'AWS Certificate Manager (ACM) provides free TLS/SSL certificates.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'ec2-l5-q10',
    question: {
      pt: 'O que é EC2 Image Builder e qual seu propósito?',
      en: 'What is EC2 Image Builder and what is its purpose?'
    },
    options: {
      pt: [
        'Serviço para automatizar criação, teste e distribuição de AMIs',
        'Ferramenta para editar imagens',
        'Serviço de backup de instâncias',
        'Ferramenta de monitoramento'
      ],
      en: [
        'Service to automate creation, testing, and distribution of AMIs',
        'Tool for editing images',
        'Instance backup service',
        'Monitoring tool'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'EC2 Image Builder automatiza o processo de criação, manutenção, validação e distribuição de AMIs. Pode aplicar patches de segurança, instalar software, executar testes e distribuir para múltiplas regiões/contas. Reduz esforço manual e melhora segurança.',
      en: 'EC2 Image Builder automates the process of creating, maintaining, validating, and distributing AMIs. Can apply security patches, install software, run tests, and distribute to multiple regions/accounts. Reduces manual effort and improves security.'
    },
    proTip: {
      pt: 'Use pipelines do Image Builder com schedule para manter AMIs sempre atualizadas.',
      en: 'Use Image Builder pipelines with schedule to keep AMIs always updated.'
    },
    difficulty: 'advanced',
    xpReward: 25
  }
];
