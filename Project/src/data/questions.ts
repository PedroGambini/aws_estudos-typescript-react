import type { Question } from '@/types/courses';

// Questões para EC2 - Nível 1 (Iniciante)
export const ec2Level1Questions: Question[] = [
  {
    id: 'ec2-l1-q1',
    question: {
      pt: 'O que é Amazon EC2?',
      en: 'What is Amazon EC2?'
    },
    options: {
      pt: [
        'Um serviço de computação em nuvem que fornece capacidade de computação redimensionável',
        'Um serviço de armazenamento de objetos',
        'Um serviço de banco de dados relacional',
        'Um serviço de rede de entrega de conteúdo'
      ],
      en: [
        'A cloud computing service that provides resizable compute capacity',
        'An object storage service',
        'A relational database service',
        'A content delivery network service'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Amazon EC2 (Elastic Compute Cloud) é um serviço web que fornece capacidade de computação redimensionável na nuvem. Ele permite que você execute servidores virtuais (instâncias) conforme necessário.',
      en: 'Amazon EC2 (Elastic Compute Cloud) is a web service that provides resizable compute capacity in the cloud. It allows you to run virtual servers (instances) as needed.'
    },
    proTip: {
      pt: 'EC2 é um dos serviços mais fundamentais da AWS e aparece em praticamente todos os exames de certificação.',
      en: 'EC2 is one of the most fundamental AWS services and appears in virtually all certification exams.'
    },
    difficulty: 'beginner',
    xpReward: 10
  },
  {
    id: 'ec2-l1-q2',
    question: {
      pt: 'Qual é a menor unidade de tempo pela qual você é cobrado ao usar instâncias EC2 On-Demand?',
      en: 'What is the smallest unit of time you are charged for when using EC2 On-Demand instances?'
    },
    options: {
      pt: [
        'Por minuto',
        'Por segundo (mínimo 60 segundos)',
        'Por hora',
        'Por dia'
      ],
      en: [
        'Per minute',
        'Per second (minimum 60 seconds)',
        'Per hour',
        'Per day'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'As instâncias EC2 On-Demand são cobradas por segundo, com um mínimo de 60 segundos. Isso se aplica à maioria dos tipos de instância e sistemas operacionais.',
      en: 'EC2 On-Demand instances are charged per second, with a minimum of 60 seconds. This applies to most instance types and operating systems.'
    },
    difficulty: 'beginner',
    xpReward: 10
  },
  {
    id: 'ec2-l1-q3',
    question: {
      pt: 'Qual componente você precisa anexar a uma instância EC2 para permitir acesso à internet?',
      en: 'Which component do you need to attach to an EC2 instance to allow internet access?'
    },
    options: {
      pt: [
        'Security Group',
        'Internet Gateway',
        'Elastic IP ou IP público',
        'NAT Gateway'
      ],
      en: [
        'Security Group',
        'Internet Gateway',
        'Elastic IP or Public IP',
        'NAT Gateway'
      ]
    },
    correctAnswer: 2,
    explanation: {
      pt: 'Para que uma instância EC2 tenha acesso à internet, ela precisa ter um endereço IP público ou Elastic IP. Além disso, a VPC precisa ter um Internet Gateway e as rotas configuradas corretamente.',
      en: 'For an EC2 instance to have internet access, it needs to have a public IP address or Elastic IP. Additionally, the VPC needs to have an Internet Gateway and routes configured correctly.'
    },
    proTip: {
      pt: 'Elastic IPs são endereços IP estáticos que você pode associar e desassociar de instâncias. Você é cobrado quando um Elastic IP não está associado a uma instância em execução.',
      en: 'Elastic IPs are static IP addresses that you can associate and disassociate from instances. You are charged when an Elastic IP is not associated with a running instance.'
    },
    difficulty: 'beginner',
    xpReward: 15
  },
  {
    id: 'ec2-l1-q4',
    question: {
      pt: 'O que acontece com os dados armazenados no Instance Store quando você para uma instância EC2?',
      en: 'What happens to data stored in Instance Store when you stop an EC2 instance?'
    },
    options: {
      pt: [
        'Os dados são preservados',
        'Os dados são perdidos',
        'Os dados são movidos para o EBS',
        'Os dados são arquivados no S3'
      ],
      en: [
        'Data is preserved',
        'Data is lost',
        'Data is moved to EBS',
        'Data is archived to S3'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'Instance Store é um armazenamento temporário (efêmero). Quando você para ou termina uma instância, todos os dados no Instance Store são perdidos. Use EBS para armazenamento persistente.',
      en: 'Instance Store is temporary (ephemeral) storage. When you stop or terminate an instance, all data in Instance Store is lost. Use EBS for persistent storage.'
    },
    proTip: {
      pt: 'Instance Store oferece alto desempenho de I/O, mas é volátil. É ideal para buffers, caches e dados temporários.',
      en: 'Instance Store offers high I/O performance but is volatile. It\'s ideal for buffers, caches, and temporary data.'
    },
    difficulty: 'beginner',
    xpReward: 15
  },
  {
    id: 'ec2-l1-q5',
    question: {
      pt: 'Qual é a diferença entre "parar" e "terminar" uma instância EC2?',
      en: 'What is the difference between "stopping" and "terminating" an EC2 instance?'
    },
    options: {
      pt: [
        'Não há diferença, ambos desligam a instância',
        'Parar preserva a instância e dados do EBS; terminar deleta a instância',
        'Parar deleta a instância; terminar apenas desliga',
        'Ambos deletam a instância, mas terminar é mais rápido'
      ],
      en: [
        'There is no difference, both shut down the instance',
        'Stop preserves the instance and EBS data; terminate deletes the instance',
        'Stop deletes the instance; terminate only shuts down',
        'Both delete the instance, but terminate is faster'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'Parar uma instância a desliga mas preserva os volumes EBS e a configuração. Você pode reiniciá-la depois. Terminar deleta permanentemente a instância (volumes EBS podem ser preservados se configurado).',
      en: 'Stopping an instance shuts it down but preserves EBS volumes and configuration. You can restart it later. Terminating permanently deletes the instance (EBS volumes can be preserved if configured).'
    },
    difficulty: 'beginner',
    xpReward: 10
  }
];

// Questões para S3 - Nível 1 (Iniciante)
export const s3Level1Questions: Question[] = [
  {
    id: 's3-l1-q1',
    question: {
      pt: 'O que é Amazon S3?',
      en: 'What is Amazon S3?'
    },
    options: {
      pt: [
        'Um serviço de armazenamento de objetos',
        'Um serviço de banco de dados',
        'Um serviço de computação',
        'Um serviço de rede'
      ],
      en: [
        'An object storage service',
        'A database service',
        'A compute service',
        'A networking service'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Amazon S3 (Simple Storage Service) é um serviço de armazenamento de objetos que oferece escalabilidade, disponibilidade de dados, segurança e performance.',
      en: 'Amazon S3 (Simple Storage Service) is an object storage service that offers scalability, data availability, security, and performance.'
    },
    proTip: {
      pt: 'S3 é um dos serviços mais usados da AWS e é fundamental para muitas arquiteturas.',
      en: 'S3 is one of the most used AWS services and is fundamental to many architectures.'
    },
    difficulty: 'beginner',
    xpReward: 10
  },
  {
    id: 's3-l1-q2',
    question: {
      pt: 'Qual é o tamanho máximo de um objeto que pode ser armazenado no S3?',
      en: 'What is the maximum size of an object that can be stored in S3?'
    },
    options: {
      pt: [
        '5 GB',
        '5 TB',
        '500 GB',
        'Ilimitado'
      ],
      en: [
        '5 GB',
        '5 TB',
        '500 GB',
        'Unlimited'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'O tamanho máximo de um objeto no S3 é 5 TB. Para objetos maiores que 5 GB, você deve usar multipart upload.',
      en: 'The maximum size of an object in S3 is 5 TB. For objects larger than 5 GB, you must use multipart upload.'
    },
    proTip: {
      pt: 'Multipart upload melhora a performance e permite retomar uploads interrompidos.',
      en: 'Multipart upload improves performance and allows resuming interrupted uploads.'
    },
    difficulty: 'beginner',
    xpReward: 15
  },
  {
    id: 's3-l1-q3',
    question: {
      pt: 'O S3 garante qual nível de durabilidade para objetos?',
      en: 'What level of durability does S3 guarantee for objects?'
    },
    options: {
      pt: [
        '99.9%',
        '99.99%',
        '99.999999999% (11 noves)',
        '100%'
      ],
      en: [
        '99.9%',
        '99.99%',
        '99.999999999% (11 nines)',
        '100%'
      ]
    },
    correctAnswer: 2,
    explanation: {
      pt: 'O S3 oferece 99.999999999% (11 noves) de durabilidade, armazenando dados redundantemente em múltiplas instalações e dispositivos.',
      en: 'S3 offers 99.999999999% (11 nines) durability by storing data redundantly across multiple facilities and devices.'
    },
    difficulty: 'beginner',
    xpReward: 15
  },
  {
    id: 's3-l1-q4',
    question: {
      pt: 'Como os objetos são organizados no S3?',
      en: 'How are objects organized in S3?'
    },
    options: {
      pt: [
        'Em pastas e subpastas',
        'Em buckets com chaves (keys)',
        'Em tabelas',
        'Em volumes'
      ],
      en: [
        'In folders and subfolders',
        'In buckets with keys',
        'In tables',
        'In volumes'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'No S3, objetos são armazenados em buckets e identificados por chaves (keys). Embora você possa usar "/" nas chaves para simular pastas, o S3 é um armazenamento flat.',
      en: 'In S3, objects are stored in buckets and identified by keys. Although you can use "/" in keys to simulate folders, S3 is flat storage.'
    },
    proTip: {
      pt: 'Nomes de bucket devem ser globalmente únicos em toda a AWS.',
      en: 'Bucket names must be globally unique across all of AWS.'
    },
    difficulty: 'beginner',
    xpReward: 10
  },
  {
    id: 's3-l1-q5',
    question: {
      pt: 'Qual classe de armazenamento do S3 é mais econômica para dados acessados raramente?',
      en: 'Which S3 storage class is most cost-effective for infrequently accessed data?'
    },
    options: {
      pt: [
        'S3 Standard',
        'S3 Intelligent-Tiering',
        'S3 Standard-IA (Infrequent Access)',
        'S3 Glacier'
      ],
      en: [
        'S3 Standard',
        'S3 Intelligent-Tiering',
        'S3 Standard-IA (Infrequent Access)',
        'S3 Glacier'
      ]
    },
    correctAnswer: 2,
    explanation: {
      pt: 'S3 Standard-IA é otimizado para dados acessados com pouca frequência, mas que requerem acesso rápido quando necessário. É mais barato que S3 Standard, mas cobra por recuperação.',
      en: 'S3 Standard-IA is optimized for infrequently accessed data that requires rapid access when needed. It\'s cheaper than S3 Standard but charges for retrieval.'
    },
    proTip: {
      pt: 'Para dados de arquivo que raramente são acessados, considere S3 Glacier ou Glacier Deep Archive para economia máxima.',
      en: 'For archival data that is rarely accessed, consider S3 Glacier or Glacier Deep Archive for maximum savings.'
    },
    difficulty: 'beginner',
    xpReward: 15
  }
];

// Questões para Lambda - Nível 1 (Iniciante)
export const lambdaLevel1Questions: Question[] = [
  {
    id: 'lambda-l1-q1',
    question: {
      pt: 'O que é AWS Lambda?',
      en: 'What is AWS Lambda?'
    },
    options: {
      pt: [
        'Um serviço de computação serverless que executa código em resposta a eventos',
        'Um serviço de armazenamento de arquivos',
        'Um serviço de banco de dados',
        'Um serviço de balanceamento de carga'
      ],
      en: [
        'A serverless compute service that runs code in response to events',
        'A file storage service',
        'A database service',
        'A load balancing service'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'AWS Lambda é um serviço de computação serverless que permite executar código sem provisionar ou gerenciar servidores. Você paga apenas pelo tempo de computação que consome.',
      en: 'AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers. You pay only for the compute time you consume.'
    },
    proTip: {
      pt: 'Lambda escala automaticamente, executando código em resposta a cada trigger.',
      en: 'Lambda scales automatically, running code in response to each trigger.'
    },
    difficulty: 'beginner',
    xpReward: 10
  },
  {
    id: 'lambda-l1-q2',
    question: {
      pt: 'Qual é o tempo máximo de execução de uma função Lambda?',
      en: 'What is the maximum execution time for a Lambda function?'
    },
    options: {
      pt: [
        '5 minutos',
        '15 minutos',
        '30 minutos',
        '1 hora'
      ],
      en: [
        '5 minutes',
        '15 minutes',
        '30 minutes',
        '1 hour'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'O tempo máximo de execução de uma função Lambda é 15 minutos (900 segundos). Para processos mais longos, considere usar ECS, Fargate ou Step Functions.',
      en: 'The maximum execution time for a Lambda function is 15 minutes (900 seconds). For longer processes, consider using ECS, Fargate, or Step Functions.'
    },
    difficulty: 'beginner',
    xpReward: 15
  },
  {
    id: 'lambda-l1-q3',
    question: {
      pt: 'Como você é cobrado pelo AWS Lambda?',
      en: 'How are you charged for AWS Lambda?'
    },
    options: {
      pt: [
        'Por hora de execução',
        'Por número de requisições e duração da computação',
        'Por tamanho do código',
        'Taxa fixa mensal'
      ],
      en: [
        'Per hour of execution',
        'Per number of requests and compute duration',
        'Per code size',
        'Fixed monthly fee'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'Você é cobrado com base no número de requisições e na duração da computação (GB-segundo). O Lambda oferece 1 milhão de requisições gratuitas e 400.000 GB-segundos de computação por mês no free tier.',
      en: 'You are charged based on the number of requests and compute duration (GB-seconds). Lambda offers 1 million free requests and 400,000 GB-seconds of compute per month in the free tier.'
    },
    proTip: {
      pt: 'Otimize a memória alocada para sua função - mais memória também significa mais CPU.',
      en: 'Optimize the memory allocated to your function - more memory also means more CPU.'
    },
    difficulty: 'beginner',
    xpReward: 15
  },
  {
    id: 'lambda-l1-q4',
    question: {
      pt: 'Qual linguagem NÃO é suportada nativamente pelo AWS Lambda?',
      en: 'Which language is NOT natively supported by AWS Lambda?'
    },
    options: {
      pt: [
        'Python',
        'Node.js',
        'PHP',
        'Java'
      ],
      en: [
        'Python',
        'Node.js',
        'PHP',
        'Java'
      ]
    },
    correctAnswer: 2,
    explanation: {
      pt: 'Lambda suporta nativamente Python, Node.js, Java, Go, Ruby, .NET Core e mais. PHP não é suportado nativamente, mas pode ser executado usando custom runtimes ou containers.',
      en: 'Lambda natively supports Python, Node.js, Java, Go, Ruby, .NET Core, and more. PHP is not natively supported but can be run using custom runtimes or containers.'
    },
    difficulty: 'beginner',
    xpReward: 10
  },
  {
    id: 'lambda-l1-q5',
    question: {
      pt: 'Qual é a quantidade máxima de memória que pode ser alocada para uma função Lambda?',
      en: 'What is the maximum amount of memory that can be allocated to a Lambda function?'
    },
    options: {
      pt: [
        '3 GB',
        '10 GB',
        '16 GB',
        '32 GB'
      ],
      en: [
        '3 GB',
        '10 GB',
        '16 GB',
        '32 GB'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'Você pode alocar até 10 GB de memória para uma função Lambda. A CPU é alocada proporcionalmente à memória configurada.',
      en: 'You can allocate up to 10 GB of memory to a Lambda function. CPU is allocated proportionally to the configured memory.'
    },
    proTip: {
      pt: 'Aumentar a memória pode reduzir o tempo de execução e, consequentemente, o custo total.',
      en: 'Increasing memory can reduce execution time and, consequently, the total cost.'
    },
    difficulty: 'beginner',
    xpReward: 15
  }
];

// ============================================
// EC2 - NÍVEL 2: TIPOS DE INSTÂNCIA
// ============================================
export const ec2Level2Questions: Question[] = [
  {
    id: 'ec2-l2-q1',
    question: {
      pt: 'Qual família de instâncias EC2 é otimizada para cargas de trabalho que exigem alto desempenho de processamento?',
      en: 'Which EC2 instance family is optimized for workloads requiring high processing performance?'
    },
    options: {
      pt: [
        'Família T (T3, T4g) - Burstable',
        'Família C (C5, C6i) - Compute Optimized',
        'Família R (R5, R6i) - Memory Optimized',
        'Família I (I3, I4i) - Storage Optimized'
      ],
      en: [
        'T Family (T3, T4g) - Burstable',
        'C Family (C5, C6i) - Compute Optimized',
        'R Family (R5, R6i) - Memory Optimized',
        'I Family (I3, I4i) - Storage Optimized'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'A família C (Compute Optimized) é projetada para cargas de trabalho que exigem alto desempenho de CPU, como processamento em lote, análise de dados, servidores web de alto tráfego e computação científica.',
      en: 'The C family (Compute Optimized) is designed for workloads requiring high CPU performance, such as batch processing, data analytics, high-traffic web servers, and scientific computing.'
    },
    proTip: {
      pt: 'As instâncias C6i oferecem até 15% melhor desempenho de preço-performance comparado às C5.',
      en: 'C6i instances offer up to 15% better price-performance compared to C5.'
    },
    difficulty: 'beginner',
    xpReward: 15
  },
  {
    id: 'ec2-l2-q2',
    question: {
      pt: 'Qual tipo de instância é mais adequado para bancos de dados em memória como Redis ou Memcached?',
      en: 'Which instance type is most suitable for in-memory databases like Redis or Memcached?'
    },
    options: {
      pt: [
        'T3.medium - Burstable',
        'C5.large - Compute Optimized',
        'R6i.xlarge - Memory Optimized',
        'M5.large - General Purpose'
      ],
      en: [
        'T3.medium - Burstable',
        'C5.large - Compute Optimized',
        'R6i.xlarge - Memory Optimized',
        'M5.large - General Purpose'
      ]
    },
    correctAnswer: 2,
    explanation: {
      pt: 'Instâncias da família R (Memory Optimized) são otimizadas para cargas de trabalho que processam grandes conjuntos de dados na memória, como bancos de dados em memória, caches distribuídos e análise de big data em tempo real.',
      en: 'R family instances (Memory Optimized) are optimized for workloads that process large datasets in memory, such as in-memory databases, distributed caches, and real-time big data analytics.'
    },
    proTip: {
      pt: 'A proporção memória/vCPU nas instâncias R é aproximadamente 8:1, ideal para aplicações memory-intensive.',
      en: 'The memory-to-vCPU ratio in R instances is approximately 8:1, ideal for memory-intensive applications.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ec2-l2-q3',
    question: {
      pt: 'O que são instâncias Burstable (T3/T4g) e quando devem ser usadas?',
      en: 'What are Burstable instances (T3/T4g) and when should they be used?'
    },
    options: {
      pt: [
        'Instâncias com CPU variável que acumulam créditos durante períodos de baixa utilização',
        'Instâncias que podem aumentar automaticamente o número de vCPUs',
        'Instâncias que compartilham CPU com outras instâncias',
        'Instâncias que só funcionam em modo burst'
      ],
      en: [
        'Instances with variable CPU that accumulate credits during low utilization periods',
        'Instances that can automatically increase the number of vCPUs',
        'Instances that share CPU with other instances',
        'Instances that only work in burst mode'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Instâncias Burstable fornecem um nível baseline de desempenho de CPU e acumulam créditos quando usam menos que o baseline. Esses créditos podem ser usados para "burst" acima do baseline quando necessário. Ideais para cargas de trabalho com uso variável.',
      en: 'Burstable instances provide a baseline level of CPU performance and accumulate credits when using less than baseline. These credits can be used to "burst" above baseline when needed. Ideal for workloads with variable usage.'
    },
    proTip: {
      pt: 'Use T3 Unlimited para evitar throttling - você paga um pequeno custo adicional por CPU além dos créditos.',
      en: 'Use T3 Unlimited to avoid throttling - you pay a small additional cost for CPU beyond credits.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ec2-l2-q4',
    question: {
      pt: 'Qual é a diferença entre instâncias baseadas em Intel (C5) e AMD (C5a)?',
      en: 'What is the difference between Intel-based (C5) and AMD-based (C5a) instances?'
    },
    options: {
      pt: [
        'C5a oferece até 10% melhor custo-benefício que C5',
        'C5 tem melhor desempenho single-thread que C5a',
        'C5a não suporta Enhanced Networking',
        'Não há diferença significativa de performance'
      ],
      en: [
        'C5a offers up to 10% better cost-performance than C5',
        'C5 has better single-thread performance than C5a',
        'C5a does not support Enhanced Networking',
        'There is no significant performance difference'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Instâncias C5a usam processadores AMD EPYC e oferecem até 10% melhor relação custo-benefício comparado às C5 (Intel). Ambas suportam Enhanced Networking e têm performance similar para a maioria das cargas de trabalho.',
      en: 'C5a instances use AMD EPYC processors and offer up to 10% better cost-performance compared to C5 (Intel). Both support Enhanced Networking and have similar performance for most workloads.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ec2-l2-q5',
    question: {
      pt: 'Qual família de instâncias oferece a melhor relação IOPS/preço para bancos de dados NoSQL?',
      en: 'Which instance family offers the best IOPS/price ratio for NoSQL databases?'
    },
    options: {
      pt: [
        'Família M (General Purpose)',
        'Família R (Memory Optimized)',
        'Família I (Storage Optimized)',
        'Família C (Compute Optimized)'
      ],
      en: [
        'M Family (General Purpose)',
        'R Family (Memory Optimized)',
        'I Family (Storage Optimized)',
        'C Family (Compute Optimized)'
      ]
    },
    correctAnswer: 2,
    explanation: {
      pt: 'A família I (Storage Optimized) é projetada para cargas de trabalho que exigem alto desempenho de I/O sequencial e aleatório, como bancos de dados NoSQL (Cassandra, MongoDB), data warehousing e processamento de logs.',
      en: 'The I family (Storage Optimized) is designed for workloads requiring high sequential and random I/O performance, such as NoSQL databases (Cassandra, MongoDB), data warehousing, and log processing.'
    },
    proTip: {
      pt: 'Instâncias I3en oferecem até 60 TB de armazenamento NVMe com até 2 milhões de IOPS.',
      en: 'I3en instances offer up to 60 TB of NVMe storage with up to 2 million IOPS.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'ec2-l2-q6',
    question: {
      pt: 'O que são instâncias Graviton (baseadas em ARM) e qual sua principal vantagem?',
      en: 'What are Graviton instances (ARM-based) and what is their main advantage?'
    },
    options: {
      pt: [
        'Instâncias com melhor performance single-thread',
        'Instâncias com até 40% melhor custo-benefício',
        'Instâncias com suporte a mais memória',
        'Instâncias com GPUs integradas'
      ],
      en: [
        'Instances with better single-thread performance',
        'Instances with up to 40% better cost-performance',
        'Instances with support for more memory',
        'Instances with integrated GPUs'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'Instâncias Graviton (T4g, M6g, C6g, R6g) usam processadores AWS Graviton2 baseados em ARM e oferecem até 40% melhor relação preço-performance comparado a instâncias x86 equivalentes. Ideais para cargas de trabalho que suportam ARM.',
      en: 'Graviton instances (T4g, M6g, C6g, R6g) use AWS Graviton2 ARM-based processors and offer up to 40% better price-performance compared to equivalent x86 instances. Ideal for workloads that support ARM.'
    },
    proTip: {
      pt: 'Graviton3 (C7g, M7g) oferece até 25% melhor performance que Graviton2.',
      en: 'Graviton3 (C7g, M7g) offers up to 25% better performance than Graviton2.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ec2-l2-q7',
    question: {
      pt: 'Para uma aplicação web com tráfego variável (picos durante o dia), qual tipo de instância é mais econômico?',
      en: 'For a web application with variable traffic (peaks during the day), which instance type is most cost-effective?'
    },
    options: {
      pt: [
        'C5.large - Compute Optimized',
        'T3.medium com Unlimited habilitado',
        'M5.large - General Purpose',
        'R5.large - Memory Optimized'
      ],
      en: [
        'C5.large - Compute Optimized',
        'T3.medium with Unlimited enabled',
        'M5.large - General Purpose',
        'R5.large - Memory Optimized'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'T3 com Unlimited é ideal para cargas de trabalho com uso variável. Durante períodos de baixo tráfego, acumula créditos. Durante picos, pode fazer burst sem throttling. Mais econômico que instâncias de tamanho fixo para esse padrão de uso.',
      en: 'T3 with Unlimited is ideal for workloads with variable usage. During low traffic periods, it accumulates credits. During peaks, it can burst without throttling. More cost-effective than fixed-size instances for this usage pattern.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ec2-l2-q8',
    question: {
      pt: 'Qual é o tamanho mínimo e máximo de uma instância EC2?',
      en: 'What is the minimum and maximum size of an EC2 instance?'
    },
    options: {
      pt: [
        'nano (0.5 vCPU) até 24xlarge (96 vCPUs)',
        'micro (1 vCPU) até 16xlarge (64 vCPUs)',
        'nano (0.5 vCPU) até metal (448 vCPUs)',
        'small (1 vCPU) até 32xlarge (128 vCPUs)'
      ],
      en: [
        'nano (0.5 vCPU) to 24xlarge (96 vCPUs)',
        'micro (1 vCPU) to 16xlarge (64 vCPUs)',
        'nano (0.5 vCPU) to metal (448 vCPUs)',
        'small (1 vCPU) to 32xlarge (128 vCPUs)'
      ]
    },
    correctAnswer: 2,
    explanation: {
      pt: 'EC2 oferece desde t3.nano (2 vCPUs, 0.5 GiB RAM) até instâncias metal como u-24tb1.metal (448 vCPUs, 24 TiB RAM). Instâncias "metal" fornecem acesso direto ao hardware físico.',
      en: 'EC2 offers from t3.nano (2 vCPUs, 0.5 GiB RAM) to metal instances like u-24tb1.metal (448 vCPUs, 24 TiB RAM). "Metal" instances provide direct access to physical hardware.'
    },
    proTip: {
      pt: 'Instâncias metal são úteis para workloads que precisam de acesso a recursos de hardware ou licenças por socket.',
      en: 'Metal instances are useful for workloads needing hardware resource access or per-socket licensing.'
    },
    difficulty: 'beginner',
    xpReward: 15
  },
  {
    id: 'ec2-l2-q9',
    question: {
      pt: 'Qual família de instâncias é recomendada para machine learning inference?',
      en: 'Which instance family is recommended for machine learning inference?'
    },
    options: {
      pt: [
        'Família C - Compute Optimized',
        'Família Inf (Inf1, Inf2) - ML Inference',
        'Família P - GPU Compute',
        'Família G - Graphics Intensive'
      ],
      en: [
        'C Family - Compute Optimized',
        'Inf Family (Inf1, Inf2) - ML Inference',
        'P Family - GPU Compute',
        'G Family - Graphics Intensive'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'A família Inf usa chips AWS Inferentia otimizados para inferência de ML, oferecendo até 70% menor custo por inferência comparado a instâncias GPU. Inf2 oferece até 4x melhor throughput que Inf1.',
      en: 'The Inf family uses AWS Inferentia chips optimized for ML inference, offering up to 70% lower cost per inference compared to GPU instances. Inf2 offers up to 4x better throughput than Inf1.'
    },
    proTip: {
      pt: 'Para treinamento de ML, use instâncias P4 ou P5 com GPUs NVIDIA.',
      en: 'For ML training, use P4 or P5 instances with NVIDIA GPUs.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'ec2-l2-q10',
    question: {
      pt: 'O que significa o sufixo "n" em tipos de instância como C5n ou M5n?',
      en: 'What does the "n" suffix mean in instance types like C5n or M5n?'
    },
    options: {
      pt: [
        'Suporte a NVMe storage',
        'Network optimized - até 100 Gbps de rede',
        'Novo processador (newer generation)',
        'Suporte a NUMA (Non-Uniform Memory Access)'
      ],
      en: [
        'NVMe storage support',
        'Network optimized - up to 100 Gbps networking',
        'Newer processor generation',
        'NUMA (Non-Uniform Memory Access) support'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'O sufixo "n" indica Network optimized, oferecendo até 100 Gbps de largura de banda de rede. Ideal para aplicações que exigem alta throughput de rede, como processamento de dados distribuído e HPC.',
      en: 'The "n" suffix indicates Network optimized, offering up to 100 Gbps of network bandwidth. Ideal for applications requiring high network throughput, such as distributed data processing and HPC.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  }
];

// Mapa de questões por curso e nível
export const questionsByLevel: Record<string, Question[]> = {
  'ec2-level-1': ec2Level1Questions,
  'ec2-level-2': ec2Level2Questions,
  'ec2-level-3': ec2Level3Questions,
  'ec2-level-4': ec2Level4Questions,
  's3-level-1': s3Level1Questions,
  'lambda-level-1': lambdaLevel1Questions
};


// ============================================
// EC2 - NÍVEL 3: MODELOS DE PREÇO
// ============================================
export const ec2Level3Questions: Question[] = [
  {
    id: 'ec2-l3-q1',
    question: {
      pt: 'Qual modelo de preço do EC2 oferece o maior desconto (até 90%) mas pode ser interrompido pela AWS?',
      en: 'Which EC2 pricing model offers the highest discount (up to 90%) but can be interrupted by AWS?'
    },
    options: {
      pt: [
        'Reserved Instances',
        'Savings Plans',
        'Spot Instances',
        'Dedicated Hosts'
      ],
      en: [
        'Reserved Instances',
        'Savings Plans',
        'Spot Instances',
        'Dedicated Hosts'
      ]
    },
    correctAnswer: 2,
    explanation: {
      pt: 'Spot Instances permitem usar capacidade EC2 não utilizada com descontos de até 90%. A AWS pode interromper com 2 minutos de aviso quando precisar da capacidade. Ideal para cargas de trabalho tolerantes a falhas.',
      en: 'Spot Instances allow you to use unused EC2 capacity with discounts up to 90%. AWS can interrupt with 2 minutes notice when it needs the capacity. Ideal for fault-tolerant workloads.'
    },
    proTip: {
      pt: 'Use Spot Instances para processamento em lote, análise de dados, e workloads stateless.',
      en: 'Use Spot Instances for batch processing, data analysis, and stateless workloads.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ec2-l3-q2',
    question: {
      pt: 'Qual é a diferença entre Standard Reserved Instances e Convertible Reserved Instances?',
      en: 'What is the difference between Standard Reserved Instances and Convertible Reserved Instances?'
    },
    options: {
      pt: [
        'Standard oferece maior desconto mas não pode ser modificada; Convertible pode ser trocada por outra família',
        'Standard é para 1 ano; Convertible é para 3 anos',
        'Standard é regional; Convertible é zonal',
        'Não há diferença significativa'
      ],
      en: [
        'Standard offers higher discount but cannot be modified; Convertible can be exchanged for another family',
        'Standard is for 1 year; Convertible is for 3 years',
        'Standard is regional; Convertible is zonal',
        'There is no significant difference'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Standard RIs oferecem até 72% de desconto mas têm menos flexibilidade. Convertible RIs oferecem até 66% de desconto e permitem trocar por outra família de instância, SO ou tenancy durante o termo.',
      en: 'Standard RIs offer up to 72% discount but have less flexibility. Convertible RIs offer up to 66% discount and allow exchanging for another instance family, OS, or tenancy during the term.'
    },
    proTip: {
      pt: 'Use Convertible se você prevê mudanças nos requisitos de instância ao longo do tempo.',
      en: 'Use Convertible if you anticipate changes in instance requirements over time.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ec2-l3-q3',
    question: {
      pt: 'O que são Savings Plans e como diferem de Reserved Instances?',
      en: 'What are Savings Plans and how do they differ from Reserved Instances?'
    },
    options: {
      pt: [
        'Savings Plans são mais flexíveis e aplicam-se a qualquer uso de computação (EC2, Fargate, Lambda)',
        'Savings Plans são apenas para EC2',
        'Savings Plans oferecem maior desconto que RIs',
        'Savings Plans não requerem compromisso de longo prazo'
      ],
      en: [
        'Savings Plans are more flexible and apply to any compute usage (EC2, Fargate, Lambda)',
        'Savings Plans are only for EC2',
        'Savings Plans offer higher discount than RIs',
        'Savings Plans do not require long-term commitment'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Savings Plans oferecem até 72% de desconto com compromisso de uso ($/hora) por 1 ou 3 anos. São mais flexíveis que RIs, aplicando-se automaticamente a EC2, Fargate e Lambda, independente de região, família ou SO.',
      en: 'Savings Plans offer up to 72% discount with usage commitment ($/hour) for 1 or 3 years. They are more flexible than RIs, automatically applying to EC2, Fargate, and Lambda, regardless of region, family, or OS.'
    },
    proTip: {
      pt: 'Compute Savings Plans oferecem máxima flexibilidade; EC2 Instance Savings Plans oferecem maior desconto.',
      en: 'Compute Savings Plans offer maximum flexibility; EC2 Instance Savings Plans offer higher discount.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'ec2-l3-q4',
    question: {
      pt: 'Quando você deve usar Dedicated Hosts ao invés de Dedicated Instances?',
      en: 'When should you use Dedicated Hosts instead of Dedicated Instances?'
    },
    options: {
      pt: [
        'Quando precisa de melhor performance',
        'Quando tem licenças de software por socket/core ou precisa de visibilidade do hardware',
        'Quando quer economia de custos',
        'Quando precisa de mais memória'
      ],
      en: [
        'When you need better performance',
        'When you have per-socket/core software licenses or need hardware visibility',
        'When you want cost savings',
        'When you need more memory'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'Dedicated Hosts fornecem servidores físicos dedicados com visibilidade de sockets, cores e IDs de host. Necessário para licenças BYOL (Bring Your Own License) que são por socket/core, como Windows Server, SQL Server, SUSE Linux.',
      en: 'Dedicated Hosts provide dedicated physical servers with visibility of sockets, cores, and host IDs. Required for BYOL (Bring Your Own License) licenses that are per-socket/core, such as Windows Server, SQL Server, SUSE Linux.'
    },
    proTip: {
      pt: 'Dedicated Instances são mais baratas mas não oferecem visibilidade do hardware físico.',
      en: 'Dedicated Instances are cheaper but do not offer physical hardware visibility.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'ec2-l3-q5',
    question: {
      pt: 'Qual é o período mínimo de compromisso para Reserved Instances?',
      en: 'What is the minimum commitment period for Reserved Instances?'
    },
    options: {
      pt: [
        '6 meses',
        '1 ano',
        '2 anos',
        '3 anos'
      ],
      en: [
        '6 months',
        '1 year',
        '2 years',
        '3 years'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'Reserved Instances requerem compromisso de 1 ou 3 anos. Quanto maior o termo e mais você paga adiantado (All Upfront, Partial Upfront, No Upfront), maior o desconto.',
      en: 'Reserved Instances require a 1 or 3-year commitment. The longer the term and the more you pay upfront (All Upfront, Partial Upfront, No Upfront), the higher the discount.'
    },
    difficulty: 'beginner',
    xpReward: 15
  },
  {
    id: 'ec2-l3-q6',
    question: {
      pt: 'O que acontece se você exceder o compromisso de Savings Plans?',
      en: 'What happens if you exceed your Savings Plans commitment?'
    },
    options: {
      pt: [
        'Você é cobrado com penalidade',
        'O uso adicional é cobrado a preço On-Demand',
        'O serviço é interrompido',
        'Você recebe desconto proporcional'
      ],
      en: [
        'You are charged with penalty',
        'Additional usage is charged at On-Demand price',
        'The service is interrupted',
        'You receive proportional discount'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'Savings Plans cobrem seu compromisso com desconto. Qualquer uso além do compromisso é automaticamente cobrado a preço On-Demand normal. Não há penalidade, apenas não recebe o desconto no excedente.',
      en: 'Savings Plans cover your commitment with discount. Any usage beyond the commitment is automatically charged at normal On-Demand price. There is no penalty, you just do not receive the discount on the excess.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ec2-l3-q7',
    question: {
      pt: 'Qual opção de pagamento de Reserved Instances oferece o maior desconto?',
      en: 'Which Reserved Instances payment option offers the highest discount?'
    },
    options: {
      pt: [
        'No Upfront',
        'Partial Upfront',
        'All Upfront',
        'Todas oferecem o mesmo desconto'
      ],
      en: [
        'No Upfront',
        'Partial Upfront',
        'All Upfront',
        'All offer the same discount'
      ]
    },
    correctAnswer: 2,
    explanation: {
      pt: 'All Upfront (pagamento total adiantado) oferece o maior desconto. Partial Upfront oferece desconto intermediário. No Upfront oferece menor desconto mas não requer pagamento inicial.',
      en: 'All Upfront (full upfront payment) offers the highest discount. Partial Upfront offers intermediate discount. No Upfront offers lower discount but requires no initial payment.'
    },
    proTip: {
      pt: 'All Upfront 3 anos pode oferecer até 72% de desconto comparado a On-Demand.',
      en: 'All Upfront 3 years can offer up to 72% discount compared to On-Demand.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ec2-l3-q8',
    question: {
      pt: 'Você pode vender Reserved Instances não utilizadas?',
      en: 'Can you sell unused Reserved Instances?'
    },
    options: {
      pt: [
        'Não, RIs não podem ser transferidas',
        'Sim, através do Reserved Instance Marketplace',
        'Sim, mas apenas para outras contas da sua organização',
        'Sim, mas apenas após 6 meses'
      ],
      en: [
        'No, RIs cannot be transferred',
        'Yes, through the Reserved Instance Marketplace',
        'Yes, but only to other accounts in your organization',
        'Yes, but only after 6 months'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'Você pode vender Standard Reserved Instances não utilizadas no Reserved Instance Marketplace. Convertible RIs não podem ser vendidas. Você pode também modificar RIs para diferentes AZs ou tipos de instância dentro da mesma família.',
      en: 'You can sell unused Standard Reserved Instances on the Reserved Instance Marketplace. Convertible RIs cannot be sold. You can also modify RIs for different AZs or instance types within the same family.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'ec2-l3-q9',
    question: {
      pt: 'Qual estratégia de preço é melhor para workloads de desenvolvimento/teste que rodam apenas durante horário comercial?',
      en: 'Which pricing strategy is best for dev/test workloads that run only during business hours?'
    },
    options: {
      pt: [
        'Reserved Instances 3 anos',
        'On-Demand com Instance Scheduler',
        'Spot Instances',
        'Dedicated Hosts'
      ],
      en: [
        'Reserved Instances 3 years',
        'On-Demand with Instance Scheduler',
        'Spot Instances',
        'Dedicated Hosts'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'Para workloads que não rodam 24/7, On-Demand com Instance Scheduler (para parar/iniciar automaticamente) é mais econômico que RIs. Você paga apenas pelas horas de uso. Spot também é opção se tolerar interrupções.',
      en: 'For workloads that do not run 24/7, On-Demand with Instance Scheduler (to automatically stop/start) is more cost-effective than RIs. You pay only for hours of use. Spot is also an option if you can tolerate interruptions.'
    },
    proTip: {
      pt: 'Use AWS Instance Scheduler ou EventBridge + Lambda para automação de start/stop.',
      en: 'Use AWS Instance Scheduler or EventBridge + Lambda for start/stop automation.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ec2-l3-q10',
    question: {
      pt: 'O que é Spot Fleet e quando usá-lo?',
      en: 'What is Spot Fleet and when to use it?'
    },
    options: {
      pt: [
        'Um grupo de instâncias Spot que mantém capacidade target automaticamente',
        'Uma instância Spot com maior prioridade',
        'Um desconto adicional para múltiplas Spot Instances',
        'Uma Reserved Instance convertível'
      ],
      en: [
        'A group of Spot instances that automatically maintains target capacity',
        'A Spot instance with higher priority',
        'An additional discount for multiple Spot Instances',
        'A convertible Reserved Instance'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Spot Fleet é uma coleção de Spot Instances (e opcionalmente On-Demand) que tenta manter a capacidade target. Pode usar múltiplos tipos de instância e AZs, aumentando disponibilidade. Ideal para workloads distribuídos e tolerantes a falhas.',
      en: 'Spot Fleet is a collection of Spot Instances (and optionally On-Demand) that attempts to maintain target capacity. Can use multiple instance types and AZs, increasing availability. Ideal for distributed and fault-tolerant workloads.'
    },
    proTip: {
      pt: 'Use estratégia "capacity-optimized" para minimizar interrupções em Spot Fleet.',
      en: 'Use "capacity-optimized" strategy to minimize interruptions in Spot Fleet.'
    },
    difficulty: 'advanced',
    xpReward: 25
  }
];


// ============================================
// EC2 - NÍVEL 4: AUTO SCALING
// ============================================
export const ec2Level4Questions: Question[] = [
  {
    id: 'ec2-l4-q1',
    question: {
      pt: 'O que é um Auto Scaling Group (ASG)?',
      en: 'What is an Auto Scaling Group (ASG)?'
    },
    options: {
      pt: [
        'Um grupo de instâncias que escala automaticamente baseado em demanda',
        'Um grupo de segurança que se ajusta automaticamente',
        'Um balanceador de carga automático',
        'Um grupo de Reserved Instances'
      ],
      en: [
        'A group of instances that scales automatically based on demand',
        'A security group that adjusts automatically',
        'An automatic load balancer',
        'A group of Reserved Instances'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Auto Scaling Group é uma coleção de instâncias EC2 tratadas como um grupo lógico para fins de escalabilidade automática. Mantém o número desejado de instâncias e pode escalar baseado em métricas ou schedule.',
      en: 'Auto Scaling Group is a collection of EC2 instances treated as a logical group for automatic scaling purposes. Maintains the desired number of instances and can scale based on metrics or schedule.'
    },
    proTip: {
      pt: 'ASG é gratuito - você paga apenas pelas instâncias EC2 que ele lança.',
      en: 'ASG is free - you only pay for the EC2 instances it launches.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ec2-l4-q2',
    question: {
      pt: 'Quais são os três valores principais que você define em um ASG?',
      en: 'What are the three main values you define in an ASG?'
    },
    options: {
      pt: [
        'Mínimo, Máximo e Desejado',
        'Início, Meio e Fim',
        'Pequeno, Médio e Grande',
        'CPU, Memória e Disco'
      ],
      en: [
        'Minimum, Maximum, and Desired',
        'Start, Middle, and End',
        'Small, Medium, and Large',
        'CPU, Memory, and Disk'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'ASG usa três valores: Mínimo (menor número de instâncias), Máximo (maior número permitido) e Desejado (número target de instâncias). O ASG sempre tenta manter o número desejado dentro dos limites min/max.',
      en: 'ASG uses three values: Minimum (lowest number of instances), Maximum (highest number allowed), and Desired (target number of instances). ASG always tries to maintain the desired number within min/max limits.'
    },
    difficulty: 'beginner',
    xpReward: 15
  },
  {
    id: 'ec2-l4-q3',
    question: {
      pt: 'O que é uma Launch Template e como difere de uma Launch Configuration?',
      en: 'What is a Launch Template and how does it differ from a Launch Configuration?'
    },
    options: {
      pt: [
        'Launch Template é mais nova e suporta versionamento; Launch Configuration é legada',
        'Launch Template é para Spot; Launch Configuration é para On-Demand',
        'Não há diferença',
        'Launch Template é mais cara'
      ],
      en: [
        'Launch Template is newer and supports versioning; Launch Configuration is legacy',
        'Launch Template is for Spot; Launch Configuration is for On-Demand',
        'There is no difference',
        'Launch Template is more expensive'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Launch Template é a forma recomendada (mais nova) de definir configuração de instâncias. Suporta versionamento, múltiplos tipos de instância, Spot + On-Demand mix. Launch Configuration é legada e não pode ser modificada após criação.',
      en: 'Launch Template is the recommended (newer) way to define instance configuration. Supports versioning, multiple instance types, Spot + On-Demand mix. Launch Configuration is legacy and cannot be modified after creation.'
    },
    proTip: {
      pt: 'Sempre use Launch Templates para novos ASGs - mais flexível e com mais recursos.',
      en: 'Always use Launch Templates for new ASGs - more flexible and feature-rich.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ec2-l4-q4',
    question: {
      pt: 'Qual política de scaling é melhor para lidar com picos súbitos de tráfego?',
      en: 'Which scaling policy is best for handling sudden traffic spikes?'
    },
    options: {
      pt: [
        'Target Tracking Scaling',
        'Step Scaling',
        'Simple Scaling',
        'Scheduled Scaling'
      ],
      en: [
        'Target Tracking Scaling',
        'Step Scaling',
        'Simple Scaling',
        'Scheduled Scaling'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'Step Scaling permite definir múltiplos steps de scaling baseados no tamanho da violação da métrica. Responde mais rápido a mudanças grandes. Target Tracking é melhor para manter métrica estável. Simple Scaling tem cooldown que pode atrasar resposta.',
      en: 'Step Scaling allows defining multiple scaling steps based on the size of metric breach. Responds faster to large changes. Target Tracking is better for maintaining stable metric. Simple Scaling has cooldown that can delay response.'
    },
    proTip: {
      pt: 'Combine Step Scaling para scale-out rápido com Target Tracking para manutenção.',
      en: 'Combine Step Scaling for fast scale-out with Target Tracking for maintenance.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'ec2-l4-q5',
    question: {
      pt: 'O que é o "cooldown period" em Auto Scaling?',
      en: 'What is the "cooldown period" in Auto Scaling?'
    },
    options: {
      pt: [
        'Tempo que instâncias levam para iniciar',
        'Período de espera após scaling antes de permitir outra ação de scaling',
        'Tempo para instâncias esfriarem após uso intenso',
        'Período de manutenção programada'
      ],
      en: [
        'Time instances take to start',
        'Waiting period after scaling before allowing another scaling action',
        'Time for instances to cool down after heavy use',
        'Scheduled maintenance period'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'Cooldown period (padrão 300s) é o tempo de espera após uma atividade de scaling antes de permitir outra. Previne scaling excessivo. Durante cooldown, ASG não lança ou termina instâncias adicionais (exceto para manter mínimo/máximo).',
      en: 'Cooldown period (default 300s) is the waiting time after a scaling activity before allowing another. Prevents excessive scaling. During cooldown, ASG does not launch or terminate additional instances (except to maintain min/max).'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ec2-l4-q6',
    question: {
      pt: 'Como o ASG determina quais instâncias terminar durante scale-in?',
      en: 'How does ASG determine which instances to terminate during scale-in?'
    },
    options: {
      pt: [
        'Sempre termina a instância mais antiga',
        'Usa política de terminação (default: balancear AZs, depois instância mais antiga)',
        'Termina aleatoriamente',
        'Termina a instância com maior uso de CPU'
      ],
      en: [
        'Always terminates the oldest instance',
        'Uses termination policy (default: balance AZs, then oldest instance)',
        'Terminates randomly',
        'Terminates the instance with highest CPU usage'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'ASG usa políticas de terminação configuráveis. Default: 1) Balancear AZs, 2) Instância com Launch Template/Configuration mais antiga, 3) Instância mais próxima da próxima hora de cobrança. Você pode customizar a ordem.',
      en: 'ASG uses configurable termination policies. Default: 1) Balance AZs, 2) Instance with oldest Launch Template/Configuration, 3) Instance closest to next billing hour. You can customize the order.'
    },
    proTip: {
      pt: 'Use Instance Protection para prevenir que instâncias específicas sejam terminadas.',
      en: 'Use Instance Protection to prevent specific instances from being terminated.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'ec2-l4-q7',
    question: {
      pt: 'O que são Lifecycle Hooks em Auto Scaling?',
      en: 'What are Lifecycle Hooks in Auto Scaling?'
    },
    options: {
      pt: [
        'Hooks que permitem executar ações customizadas antes de instâncias entrarem/saírem do serviço',
        'Hooks para monitorar saúde das instâncias',
        'Hooks para balanceamento de carga',
        'Hooks para backup automático'
      ],
      en: [
        'Hooks that allow executing custom actions before instances enter/leave service',
        'Hooks for monitoring instance health',
        'Hooks for load balancing',
        'Hooks for automatic backup'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Lifecycle Hooks pausam instâncias em estado de transição (Pending ou Terminating) permitindo executar ações customizadas, como instalar software, fazer backup de logs, ou drenar conexões. Útil para preparação/limpeza.',
      en: 'Lifecycle Hooks pause instances in transition state (Pending or Terminating) allowing custom actions execution, such as installing software, backing up logs, or draining connections. Useful for preparation/cleanup.'
    },
    proTip: {
      pt: 'Use com Lambda, SNS ou SQS para automação de tarefas durante lifecycle.',
      en: 'Use with Lambda, SNS, or SQS for task automation during lifecycle.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'ec2-l4-q8',
    question: {
      pt: 'Qual métrica do CloudWatch é mais comumente usada para Target Tracking Scaling?',
      en: 'Which CloudWatch metric is most commonly used for Target Tracking Scaling?'
    },
    options: {
      pt: [
        'NetworkIn',
        'DiskReadOps',
        'CPUUtilization',
        'StatusCheckFailed'
      ],
      en: [
        'NetworkIn',
        'DiskReadOps',
        'CPUUtilization',
        'StatusCheckFailed'
      ]
    },
    correctAnswer: 2,
    explanation: {
      pt: 'CPUUtilization é a métrica mais comum para Target Tracking. Você define um target (ex: 70%) e o ASG automaticamente adiciona/remove instâncias para manter a média próxima ao target. Também pode usar ALB RequestCountPerTarget.',
      en: 'CPUUtilization is the most common metric for Target Tracking. You define a target (e.g., 70%) and ASG automatically adds/removes instances to keep the average near the target. You can also use ALB RequestCountPerTarget.'
    },
    difficulty: 'beginner',
    xpReward: 15
  },
  {
    id: 'ec2-l4-q9',
    question: {
      pt: 'Como o ASG se integra com Elastic Load Balancer?',
      en: 'How does ASG integrate with Elastic Load Balancer?'
    },
    options: {
      pt: [
        'ASG automaticamente registra/desregistra instâncias no ELB',
        'Você precisa registrar manualmente',
        'ASG não funciona com ELB',
        'ELB substitui o ASG'
      ],
      en: [
        'ASG automatically registers/deregisters instances in ELB',
        'You need to register manually',
        'ASG does not work with ELB',
        'ELB replaces ASG'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Quando você associa um ELB (ALB/NLB/CLB) ao ASG, novas instâncias são automaticamente registradas no load balancer e removidas quando terminadas. ASG também pode usar health checks do ELB para determinar saúde das instâncias.',
      en: 'When you associate an ELB (ALB/NLB/CLB) with ASG, new instances are automatically registered in the load balancer and removed when terminated. ASG can also use ELB health checks to determine instance health.'
    },
    proTip: {
      pt: 'Habilite ELB health checks no ASG para substituir automaticamente instâncias unhealthy.',
      en: 'Enable ELB health checks in ASG to automatically replace unhealthy instances.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ec2-l4-q10',
    question: {
      pt: 'O que é Warm Pool em Auto Scaling?',
      en: 'What is Warm Pool in Auto Scaling?'
    },
    options: {
      pt: [
        'Um pool de instâncias pré-inicializadas prontas para entrar em serviço rapidamente',
        'Um pool de instâncias em standby',
        'Um pool de Spot Instances',
        'Um pool de Reserved Instances'
      ],
      en: [
        'A pool of pre-initialized instances ready to enter service quickly',
        'A pool of standby instances',
        'A pool of Spot Instances',
        'A pool of Reserved Instances'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Warm Pool mantém instâncias pré-inicializadas em estado stopped ou running (hibernated). Quando ASG precisa escalar, move instâncias do warm pool para InService, reduzindo tempo de inicialização. Você paga apenas por EBS quando stopped.',
      en: 'Warm Pool maintains pre-initialized instances in stopped or running (hibernated) state. When ASG needs to scale, it moves instances from warm pool to InService, reducing startup time. You pay only for EBS when stopped.'
    },
    proTip: {
      pt: 'Warm Pool é ideal para aplicações com inicialização lenta (>5 minutos).',
      en: 'Warm Pool is ideal for applications with slow startup (>5 minutes).'
    },
    difficulty: 'advanced',
    xpReward: 25
  }
];
