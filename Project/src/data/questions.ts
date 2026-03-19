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

// ============================================
// S3 - NÍVEL 2: CLASSES DE ARMAZENAMENTO
// ============================================
export const s3Level2Questions: Question[] = [
  {
    id: 's3-l2-q1',
    question: {
      pt: 'Qual classe de armazenamento do S3 move automaticamente objetos entre tiers baseado em padrões de acesso?',
      en: 'Which S3 storage class automatically moves objects between tiers based on access patterns?'
    },
    options: {
      pt: [
        'S3 Standard',
        'S3 Intelligent-Tiering',
        'S3 One Zone-IA',
        'S3 Glacier'
      ],
      en: [
        'S3 Standard',
        'S3 Intelligent-Tiering',
        'S3 One Zone-IA',
        'S3 Glacier'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'S3 Intelligent-Tiering monitora padrões de acesso e move automaticamente objetos entre tiers de acesso frequente e infrequente, otimizando custos sem impacto de performance ou overhead operacional.',
      en: 'S3 Intelligent-Tiering monitors access patterns and automatically moves objects between frequent and infrequent access tiers, optimizing costs without performance impact or operational overhead.'
    },
    proTip: {
      pt: 'Intelligent-Tiering é ideal quando você não sabe ou os padrões de acesso mudam ao longo do tempo.',
      en: 'Intelligent-Tiering is ideal when you don\'t know or access patterns change over time.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 's3-l2-q2',
    question: {
      pt: 'Qual é a diferença entre S3 Standard-IA e S3 One Zone-IA?',
      en: 'What is the difference between S3 Standard-IA and S3 One Zone-IA?'
    },
    options: {
      pt: [
        'Standard-IA armazena em múltiplas AZs; One Zone-IA em uma única AZ',
        'Standard-IA é mais barato',
        'One Zone-IA tem melhor performance',
        'Não há diferença significativa'
      ],
      en: [
        'Standard-IA stores in multiple AZs; One Zone-IA in a single AZ',
        'Standard-IA is cheaper',
        'One Zone-IA has better performance',
        'There is no significant difference'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'S3 Standard-IA armazena dados redundantemente em múltiplas AZs (99.9% disponibilidade). S3 One Zone-IA armazena em uma única AZ (99.5% disponibilidade) e custa 20% menos, mas dados são perdidos se a AZ falhar.',
      en: 'S3 Standard-IA stores data redundantly across multiple AZs (99.9% availability). S3 One Zone-IA stores in a single AZ (99.5% availability) and costs 20% less, but data is lost if the AZ fails.'
    },
    proTip: {
      pt: 'Use One Zone-IA para dados que podem ser recriados, como thumbnails ou dados de backup secundário.',
      en: 'Use One Zone-IA for data that can be recreated, such as thumbnails or secondary backup data.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 's3-l2-q3',
    question: {
      pt: 'Qual classe do S3 oferece o menor custo de armazenamento para dados de arquivo de longo prazo?',
      en: 'Which S3 class offers the lowest storage cost for long-term archive data?'
    },
    options: {
      pt: [
        'S3 Glacier Instant Retrieval',
        'S3 Glacier Flexible Retrieval',
        'S3 Glacier Deep Archive',
        'S3 Standard-IA'
      ],
      en: [
        'S3 Glacier Instant Retrieval',
        'S3 Glacier Flexible Retrieval',
        'S3 Glacier Deep Archive',
        'S3 Standard-IA'
      ]
    },
    correctAnswer: 2,
    explanation: {
      pt: 'S3 Glacier Deep Archive oferece o menor custo de armazenamento (~$1/TB/mês) para dados acessados raramente (1-2 vezes por ano). Tempo de recuperação de 12-48 horas. Ideal para conformidade e arquivamento de longo prazo.',
      en: 'S3 Glacier Deep Archive offers the lowest storage cost (~$1/TB/month) for rarely accessed data (1-2 times per year). Retrieval time of 12-48 hours. Ideal for compliance and long-term archiving.'
    },
    proTip: {
      pt: 'Deep Archive requer retenção mínima de 180 dias - deletar antes resulta em cobrança proporcional.',
      en: 'Deep Archive requires minimum 180-day retention - deleting earlier results in prorated charge.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 's3-l2-q4',
    question: {
      pt: 'Quanto tempo leva para recuperar dados do S3 Glacier Flexible Retrieval usando a opção Expedited?',
      en: 'How long does it take to retrieve data from S3 Glacier Flexible Retrieval using Expedited option?'
    },
    options: {
      pt: [
        'Milissegundos',
        '1-5 minutos',
        '3-5 horas',
        '12 horas'
      ],
      en: [
        'Milliseconds',
        '1-5 minutes',
        '3-5 hours',
        '12 hours'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'Glacier Flexible Retrieval oferece três opções: Expedited (1-5 minutos, mais caro), Standard (3-5 horas), Bulk (5-12 horas, mais barato). Escolha baseado em urgência e custo.',
      en: 'Glacier Flexible Retrieval offers three options: Expedited (1-5 minutes, most expensive), Standard (3-5 hours), Bulk (5-12 hours, cheapest). Choose based on urgency and cost.'
    },
    proTip: {
      pt: 'Use Provisioned Capacity para garantir disponibilidade de retrievals Expedited durante picos.',
      en: 'Use Provisioned Capacity to guarantee Expedited retrieval availability during peaks.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 's3-l2-q5',
    question: {
      pt: 'O que é S3 Glacier Instant Retrieval e quando usá-lo?',
      en: 'What is S3 Glacier Instant Retrieval and when to use it?'
    },
    options: {
      pt: [
        'Classe para dados raramente acessados mas que precisam de recuperação em milissegundos',
        'Classe para dados acessados frequentemente',
        'Classe para backup de curto prazo',
        'Classe para dados temporários'
      ],
      en: [
        'Class for rarely accessed data that needs millisecond retrieval',
        'Class for frequently accessed data',
        'Class for short-term backup',
        'Class for temporary data'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'S3 Glacier Instant Retrieval oferece armazenamento de baixo custo (68% mais barato que Standard-IA) para dados acessados raramente (uma vez por trimestre) mas que precisam de recuperação instantânea em milissegundos quando necessário.',
      en: 'S3 Glacier Instant Retrieval offers low-cost storage (68% cheaper than Standard-IA) for rarely accessed data (once per quarter) that needs instant millisecond retrieval when needed.'
    },
    proTip: {
      pt: 'Requer retenção mínima de 90 dias. Ideal para backups médicos, imagens de mídia, etc.',
      en: 'Requires minimum 90-day retention. Ideal for medical backups, media images, etc.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 's3-l2-q6',
    question: {
      pt: 'Qual é o período mínimo de armazenamento para S3 Standard-IA antes de incorrer em cobranças adicionais?',
      en: 'What is the minimum storage period for S3 Standard-IA before incurring additional charges?'
    },
    options: {
      pt: [
        '7 dias',
        '30 dias',
        '90 dias',
        '180 dias'
      ],
      en: [
        '7 days',
        '30 days',
        '90 days',
        '180 days'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'S3 Standard-IA tem período mínimo de armazenamento de 30 dias. Se você deletar objetos antes, será cobrado pelo período completo de 30 dias. Também há tamanho mínimo de objeto de 128 KB.',
      en: 'S3 Standard-IA has a minimum storage period of 30 days. If you delete objects earlier, you will be charged for the full 30-day period. There is also a minimum object size of 128 KB.'
    },
    proTip: {
      pt: 'Para objetos pequenos (<128 KB) ou de curta duração (<30 dias), use S3 Standard.',
      en: 'For small objects (<128 KB) or short-lived (<30 days), use S3 Standard.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 's3-l2-q7',
    question: {
      pt: 'Como funciona a cobrança de recuperação em classes IA e Glacier?',
      en: 'How does retrieval charging work in IA and Glacier classes?'
    },
    options: {
      pt: [
        'Você paga por GB recuperado além do armazenamento',
        'Recuperação é sempre gratuita',
        'Você paga apenas pelo armazenamento',
        'Recuperação é cobrada por requisição apenas'
      ],
      en: [
        'You pay per GB retrieved in addition to storage',
        'Retrieval is always free',
        'You only pay for storage',
        'Retrieval is charged per request only'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Classes IA e Glacier cobram por: 1) Armazenamento ($/GB/mês), 2) Requisições ($/1000 requisições), 3) Recuperação de dados ($/GB recuperado). Quanto mais barato o armazenamento, mais cara a recuperação.',
      en: 'IA and Glacier classes charge for: 1) Storage ($/GB/month), 2) Requests ($/1000 requests), 3) Data retrieval ($/GB retrieved). The cheaper the storage, the more expensive the retrieval.'
    },
    proTip: {
      pt: 'Calcule o custo total considerando frequência de acesso, não apenas custo de armazenamento.',
      en: 'Calculate total cost considering access frequency, not just storage cost.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 's3-l2-q8',
    question: {
      pt: 'Qual classe de armazenamento você deve usar para logs de aplicação que são analisados mensalmente?',
      en: 'Which storage class should you use for application logs that are analyzed monthly?'
    },
    options: {
      pt: [
        'S3 Standard',
        'S3 Standard-IA',
        'S3 Intelligent-Tiering',
        'S3 Glacier Deep Archive'
      ],
      en: [
        'S3 Standard',
        'S3 Standard-IA',
        'S3 Intelligent-Tiering',
        'S3 Glacier Deep Archive'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'S3 Standard-IA é ideal para dados acessados mensalmente. Oferece 50% de economia vs Standard, com acesso rápido quando necessário. Logs analisados mensalmente se encaixam perfeitamente nesse padrão.',
      en: 'S3 Standard-IA is ideal for data accessed monthly. Offers 50% savings vs Standard, with fast access when needed. Logs analyzed monthly fit perfectly in this pattern.'
    },
    proTip: {
      pt: 'Use Lifecycle policies para mover logs automaticamente: Standard (7 dias) → Standard-IA (30 dias) → Glacier (90 dias).',
      en: 'Use Lifecycle policies to move logs automatically: Standard (7 days) → Standard-IA (30 days) → Glacier (90 days).'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 's3-l2-q9',
    question: {
      pt: 'O que acontece com objetos em S3 Intelligent-Tiering que não são acessados por 90 dias?',
      en: 'What happens to objects in S3 Intelligent-Tiering that are not accessed for 90 days?'
    },
    options: {
      pt: [
        'São deletados automaticamente',
        'São movidos para Archive Instant Access tier',
        'Permanecem no mesmo tier',
        'São movidos para Glacier'
      ],
      en: [
        'Are automatically deleted',
        'Are moved to Archive Instant Access tier',
        'Remain in the same tier',
        'Are moved to Glacier'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'Intelligent-Tiering tem tiers opcionais de arquivo: após 90 dias sem acesso, objetos podem ser movidos para Archive Instant Access; após 180 dias para Deep Archive Access. Você precisa habilitar esses tiers opcionais.',
      en: 'Intelligent-Tiering has optional archive tiers: after 90 days without access, objects can be moved to Archive Instant Access; after 180 days to Deep Archive Access. You need to enable these optional tiers.'
    },
    proTip: {
      pt: 'Intelligent-Tiering não tem taxas de recuperação, apenas pequena taxa de monitoramento ($0.0025/1000 objetos).',
      en: 'Intelligent-Tiering has no retrieval fees, only small monitoring fee ($0.0025/1000 objects).'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 's3-l2-q10',
    question: {
      pt: 'Qual classe oferece a melhor relação custo-benefício para backups de banco de dados acessados trimestralmente?',
      en: 'Which class offers the best cost-benefit for database backups accessed quarterly?'
    },
    options: {
      pt: [
        'S3 Standard',
        'S3 Glacier Instant Retrieval',
        'S3 Glacier Flexible Retrieval',
        'S3 One Zone-IA'
      ],
      en: [
        'S3 Standard',
        'S3 Glacier Instant Retrieval',
        'S3 Glacier Flexible Retrieval',
        'S3 One Zone-IA'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'S3 Glacier Instant Retrieval é perfeito para dados acessados trimestralmente que precisam de recuperação instantânea. Oferece custo muito baixo de armazenamento com acesso em milissegundos, ideal para backups de banco de dados.',
      en: 'S3 Glacier Instant Retrieval is perfect for quarterly accessed data needing instant retrieval. Offers very low storage cost with millisecond access, ideal for database backups.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  }
];

// ============================================
// S3 - NÍVEL 3: SEGURANÇA E PERMISSÕES
// ============================================
export const s3Level3Questions: Question[] = [
  {
    id: 's3-l3-q1',
    question: {
      pt: 'Qual é a diferença entre Bucket Policy e IAM Policy para controle de acesso ao S3?',
      en: 'What is the difference between Bucket Policy and IAM Policy for S3 access control?'
    },
    options: {
      pt: [
        'Bucket Policy é anexada ao bucket; IAM Policy é anexada a usuários/roles',
        'Bucket Policy é mais segura',
        'IAM Policy é mais flexível',
        'Não há diferença'
      ],
      en: [
        'Bucket Policy is attached to bucket; IAM Policy is attached to users/roles',
        'Bucket Policy is more secure',
        'IAM Policy is more flexible',
        'There is no difference'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Bucket Policies são anexadas ao bucket e controlam quem pode acessá-lo (incluindo cross-account). IAM Policies são anexadas a identidades (usuários/roles) e controlam o que elas podem fazer. Use ambas para defesa em profundidade.',
      en: 'Bucket Policies are attached to the bucket and control who can access it (including cross-account). IAM Policies are attached to identities (users/roles) and control what they can do. Use both for defense in depth.'
    },
    proTip: {
      pt: 'Use Bucket Policy para acesso cross-account e público; IAM Policy para controle granular de usuários.',
      en: 'Use Bucket Policy for cross-account and public access; IAM Policy for granular user control.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 's3-l3-q2',
    question: {
      pt: 'Como você pode garantir que todos os objetos em um bucket S3 sejam criptografados?',
      en: 'How can you ensure all objects in an S3 bucket are encrypted?'
    },
    options: {
      pt: [
        'Habilitar Default Encryption no bucket',
        'Criptografar manualmente cada objeto',
        'Usar apenas HTTPS',
        'Não é possível forçar criptografia'
      ],
      en: [
        'Enable Default Encryption on the bucket',
        'Manually encrypt each object',
        'Use only HTTPS',
        'Cannot enforce encryption'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Habilite Default Encryption no bucket para criptografar automaticamente todos os novos objetos. Você pode usar SSE-S3 (gerenciado pela AWS), SSE-KMS (com AWS KMS) ou SSE-C (chaves fornecidas pelo cliente). Também pode usar Bucket Policy para negar uploads não criptografados.',
      en: 'Enable Default Encryption on the bucket to automatically encrypt all new objects. You can use SSE-S3 (AWS-managed), SSE-KMS (with AWS KMS), or SSE-C (customer-provided keys). You can also use Bucket Policy to deny unencrypted uploads.'
    },
    proTip: {
      pt: 'SSE-S3 é gratuito; SSE-KMS oferece mais controle mas tem custos de KMS.',
      en: 'SSE-S3 is free; SSE-KMS offers more control but has KMS costs.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 's3-l3-q3',
    question: {
      pt: 'O que são S3 Access Points e qual problema eles resolvem?',
      en: 'What are S3 Access Points and what problem do they solve?'
    },
    options: {
      pt: [
        'Endpoints dedicados com políticas de acesso específicas para simplificar gerenciamento',
        'Pontos de acesso físicos aos data centers',
        'Backups automáticos',
        'Ferramentas de monitoramento'
      ],
      en: [
        'Dedicated endpoints with specific access policies to simplify management',
        'Physical access points to data centers',
        'Automatic backups',
        'Monitoring tools'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'S3 Access Points simplificam o gerenciamento de acesso a buckets compartilhados. Cada Access Point tem seu próprio endpoint e política de acesso, permitindo diferentes permissões para diferentes aplicações/usuários sem bucket policies complexas.',
      en: 'S3 Access Points simplify access management to shared buckets. Each Access Point has its own endpoint and access policy, allowing different permissions for different applications/users without complex bucket policies.'
    },
    proTip: {
      pt: 'Use Access Points com VPC para acesso privado ao S3 sem internet gateway.',
      en: 'Use Access Points with VPC for private S3 access without internet gateway.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 's3-l3-q4',
    question: {
      pt: 'Como funciona o S3 Block Public Access?',
      en: 'How does S3 Block Public Access work?'
    },
    options: {
      pt: [
        'Bloqueia todo acesso público ao bucket independente de políticas',
        'Bloqueia apenas uploads públicos',
        'Bloqueia apenas downloads públicos',
        'É apenas uma recomendação'
      ],
      en: [
        'Blocks all public access to bucket regardless of policies',
        'Blocks only public uploads',
        'Blocks only public downloads',
        'Is only a recommendation'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'S3 Block Public Access fornece controles para bloquear acesso público em nível de conta ou bucket. Sobrescreve bucket policies e ACLs, prevenindo exposição acidental de dados. Tem 4 configurações: block new ACLs, block any ACLs, block new policies, block any policies.',
      en: 'S3 Block Public Access provides controls to block public access at account or bucket level. Overrides bucket policies and ACLs, preventing accidental data exposure. Has 4 settings: block new ACLs, block any ACLs, block new policies, block any policies.'
    },
    proTip: {
      pt: 'Habilite em nível de conta por padrão e desabilite apenas quando necessário.',
      en: 'Enable at account level by default and disable only when necessary.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 's3-l3-q5',
    question: {
      pt: 'O que é S3 Object Lock e quando usá-lo?',
      en: 'What is S3 Object Lock and when to use it?'
    },
    options: {
      pt: [
        'Impede que objetos sejam deletados ou sobrescritos por período definido (WORM)',
        'Bloqueia acesso não autorizado',
        'Criptografa objetos automaticamente',
        'Comprime objetos para economizar espaço'
      ],
      en: [
        'Prevents objects from being deleted or overwritten for defined period (WORM)',
        'Blocks unauthorized access',
        'Automatically encrypts objects',
        'Compresses objects to save space'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'S3 Object Lock implementa modelo WORM (Write Once Read Many) para impedir que objetos sejam deletados ou modificados por período definido. Tem dois modos: Governance (pode ser sobrescrito com permissões) e Compliance (não pode ser sobrescrito, nem por root).',
      en: 'S3 Object Lock implements WORM (Write Once Read Many) model to prevent objects from being deleted or modified for defined period. Has two modes: Governance (can be overridden with permissions) and Compliance (cannot be overridden, not even by root).'
    },
    proTip: {
      pt: 'Essencial para conformidade regulatória (SEC, FINRA, HIPAA). Requer versionamento habilitado.',
      en: 'Essential for regulatory compliance (SEC, FINRA, HIPAA). Requires versioning enabled.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 's3-l3-q6',
    question: {
      pt: 'Como você pode auditar acesso ao S3?',
      en: 'How can you audit S3 access?'
    },
    options: {
      pt: [
        'Habilitar S3 Server Access Logging e/ou AWS CloudTrail',
        'Apenas visualizar métricas do CloudWatch',
        'Não é possível auditar',
        'Usar apenas IAM'
      ],
      en: [
        'Enable S3 Server Access Logging and/or AWS CloudTrail',
        'Only view CloudWatch metrics',
        'Cannot audit',
        'Use only IAM'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Use S3 Server Access Logging para logs detalhados de requisições ao bucket. Use CloudTrail para logs de API calls (quem fez o quê). CloudWatch fornece métricas mas não logs detalhados. Combine todos para auditoria completa.',
      en: 'Use S3 Server Access Logging for detailed bucket request logs. Use CloudTrail for API call logs (who did what). CloudWatch provides metrics but not detailed logs. Combine all for complete auditing.'
    },
    proTip: {
      pt: 'Use S3 Access Analyzer para identificar buckets acessíveis externamente.',
      en: 'Use S3 Access Analyzer to identify externally accessible buckets.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 's3-l3-q7',
    question: {
      pt: 'O que são Pre-signed URLs e quando usá-las?',
      en: 'What are Pre-signed URLs and when to use them?'
    },
    options: {
      pt: [
        'URLs temporárias que concedem acesso limitado a objetos privados',
        'URLs permanentes para objetos públicos',
        'URLs para upload apenas',
        'URLs para download apenas'
      ],
      en: [
        'Temporary URLs that grant limited access to private objects',
        'Permanent URLs for public objects',
        'URLs for upload only',
        'URLs for download only'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Pre-signed URLs permitem acesso temporário a objetos privados sem alterar permissões. Você define tempo de expiração (até 7 dias com credenciais IAM, até 6 horas com STS). Útil para compartilhar arquivos privados ou permitir uploads diretos ao S3.',
      en: 'Pre-signed URLs allow temporary access to private objects without changing permissions. You define expiration time (up to 7 days with IAM credentials, up to 6 hours with STS). Useful for sharing private files or allowing direct S3 uploads.'
    },
    proTip: {
      pt: 'Use para permitir que usuários façam upload diretamente ao S3 sem passar pelo seu servidor.',
      en: 'Use to allow users to upload directly to S3 without going through your server.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 's3-l3-q8',
    question: {
      pt: 'Como você pode restringir acesso ao S3 apenas de uma VPC específica?',
      en: 'How can you restrict S3 access only from a specific VPC?'
    },
    options: {
      pt: [
        'Usar VPC Endpoint e Bucket Policy com condição aws:SourceVpce',
        'Usar apenas Security Groups',
        'Usar apenas IAM',
        'Não é possível restringir por VPC'
      ],
      en: [
        'Use VPC Endpoint and Bucket Policy with aws:SourceVpce condition',
        'Use only Security Groups',
        'Use only IAM',
        'Cannot restrict by VPC'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Crie um VPC Endpoint para S3 e use Bucket Policy com condição "aws:SourceVpce" ou "aws:SourceVpc" para permitir acesso apenas da VPC específica. Isso mantém tráfego privado e melhora segurança.',
      en: 'Create a VPC Endpoint for S3 and use Bucket Policy with "aws:SourceVpce" or "aws:SourceVpc" condition to allow access only from specific VPC. This keeps traffic private and improves security.'
    },
    proTip: {
      pt: 'VPC Endpoints para S3 são gratuitos e não têm limite de largura de banda.',
      en: 'VPC Endpoints for S3 are free and have no bandwidth limit.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 's3-l3-q9',
    question: {
      pt: 'O que é S3 Bucket Versioning e como ajuda na segurança?',
      en: 'What is S3 Bucket Versioning and how does it help with security?'
    },
    options: {
      pt: [
        'Mantém múltiplas versões de objetos, protegendo contra deleção acidental e ransomware',
        'Cria backups automáticos',
        'Criptografa objetos',
        'Comprime objetos'
      ],
      en: [
        'Maintains multiple versions of objects, protecting against accidental deletion and ransomware',
        'Creates automatic backups',
        'Encrypts objects',
        'Compresses objects'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Versioning mantém todas as versões de objetos (incluindo deletados). Protege contra deleção acidental e sobrescrita. Essencial para recuperação de ransomware. Quando habilitado, não pode ser desabilitado, apenas suspenso.',
      en: 'Versioning maintains all versions of objects (including deleted). Protects against accidental deletion and overwrite. Essential for ransomware recovery. When enabled, cannot be disabled, only suspended.'
    },
    proTip: {
      pt: 'Combine com MFA Delete para exigir MFA ao deletar versões de objetos.',
      en: 'Combine with MFA Delete to require MFA when deleting object versions.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 's3-l3-q10',
    question: {
      pt: 'Como você pode detectar e prevenir vazamento de dados sensíveis no S3?',
      en: 'How can you detect and prevent sensitive data leakage in S3?'
    },
    options: {
      pt: [
        'Usar Amazon Macie para descobrir e proteger dados sensíveis',
        'Apenas usar criptografia',
        'Apenas usar IAM',
        'Não é possível detectar'
      ],
      en: [
        'Use Amazon Macie to discover and protect sensitive data',
        'Only use encryption',
        'Only use IAM',
        'Cannot detect'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Amazon Macie usa machine learning para descobrir, classificar e proteger dados sensíveis (PII, credenciais, etc.) no S3. Gera alertas e dashboards de segurança. Combine com S3 Block Public Access e encryption para proteção completa.',
      en: 'Amazon Macie uses machine learning to discover, classify, and protect sensitive data (PII, credentials, etc.) in S3. Generates security alerts and dashboards. Combine with S3 Block Public Access and encryption for complete protection.'
    },
    proTip: {
      pt: 'Macie pode escanear automaticamente novos buckets e objetos continuamente.',
      en: 'Macie can automatically scan new buckets and objects continuously.'
    },
    difficulty: 'advanced',
    xpReward: 25
  }
];

// ============================================
// S3 - NÍVEL 4: LIFECYCLE POLICIES
// ============================================
export const s3Level4Questions: Question[] = [
  {
    id: 's3-l4-q1',
    question: {
      pt: 'O que são S3 Lifecycle Policies?',
      en: 'What are S3 Lifecycle Policies?'
    },
    options: {
      pt: [
        'Regras para transicionar objetos entre classes de armazenamento ou deletá-los automaticamente',
        'Políticas de acesso ao bucket',
        'Regras de criptografia',
        'Políticas de backup'
      ],
      en: [
        'Rules to transition objects between storage classes or delete them automatically',
        'Bucket access policies',
        'Encryption rules',
        'Backup policies'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Lifecycle Policies automatizam a movimentação de objetos entre classes de armazenamento (transitions) e deleção de objetos (expirations) baseado em idade ou outros critérios. Reduz custos sem intervenção manual.',
      en: 'Lifecycle Policies automate moving objects between storage classes (transitions) and deleting objects (expirations) based on age or other criteria. Reduces costs without manual intervention.'
    },
    proTip: {
      pt: 'Lifecycle policies são gratuitas e processadas uma vez por dia.',
      en: 'Lifecycle policies are free and processed once per day.'
    },
    difficulty: 'beginner',
    xpReward: 15
  },
  {
    id: 's3-l4-q2',
    question: {
      pt: 'Qual é a ordem correta de transição entre classes de armazenamento?',
      en: 'What is the correct order of transition between storage classes?'
    },
    options: {
      pt: [
        'Standard → Standard-IA → Intelligent-Tiering → Glacier → Deep Archive',
        'Standard → Glacier → Standard-IA',
        'Qualquer ordem é permitida',
        'Não é possível transicionar entre classes'
      ],
      en: [
        'Standard → Standard-IA → Intelligent-Tiering → Glacier → Deep Archive',
        'Standard → Glacier → Standard-IA',
        'Any order is allowed',
        'Cannot transition between classes'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Transições devem seguir a cascata: Standard → Standard-IA/One Zone-IA/Intelligent-Tiering → Glacier Instant → Glacier Flexible → Deep Archive. Não pode mover de volta para classes mais "quentes". Objetos devem ter pelo menos 30 dias em Standard antes de IA.',
      en: 'Transitions must follow the cascade: Standard → Standard-IA/One Zone-IA/Intelligent-Tiering → Glacier Instant → Glacier Flexible → Deep Archive. Cannot move back to "warmer" classes. Objects must be at least 30 days in Standard before IA.'
    },
    proTip: {
      pt: 'Use S3 Analytics para recomendar políticas de lifecycle baseadas em padrões de acesso.',
      en: 'Use S3 Analytics to recommend lifecycle policies based on access patterns.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 's3-l4-q3',
    question: {
      pt: 'Como você pode aplicar Lifecycle Policy apenas a objetos com prefixo específico?',
      en: 'How can you apply Lifecycle Policy only to objects with specific prefix?'
    },
    options: {
      pt: [
        'Usar filtro de prefixo na regra de lifecycle',
        'Criar bucket separado',
        'Não é possível filtrar',
        'Usar tags apenas'
      ],
      en: [
        'Use prefix filter in lifecycle rule',
        'Create separate bucket',
        'Cannot filter',
        'Use tags only'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Lifecycle rules podem usar filtros de prefixo (ex: "logs/") e/ou tags para aplicar políticas seletivamente. Você pode ter múltiplas rules com diferentes filtros no mesmo bucket.',
      en: 'Lifecycle rules can use prefix filters (e.g., "logs/") and/or tags to apply policies selectively. You can have multiple rules with different filters in the same bucket.'
    },
    proTip: {
      pt: 'Combine prefixo e tags para controle granular: "logs/" + tag "environment=prod".',
      en: 'Combine prefix and tags for granular control: "logs/" + tag "environment=prod".'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 's3-l4-q4',
    question: {
      pt: 'O que acontece com versões anteriores de objetos quando você aplica Lifecycle Policy?',
      en: 'What happens to previous versions of objects when you apply Lifecycle Policy?'
    },
    options: {
      pt: [
        'Você pode criar regras separadas para versões atuais e não-atuais',
        'Todas as versões são tratadas igualmente',
        'Versões anteriores não são afetadas',
        'Versões anteriores são sempre deletadas'
      ],
      en: [
        'You can create separate rules for current and noncurrent versions',
        'All versions are treated equally',
        'Previous versions are not affected',
        'Previous versions are always deleted'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Com versionamento habilitado, você pode criar regras separadas: uma para versões atuais (current) e outra para versões não-atuais (noncurrent). Por exemplo: mover versões não-atuais para Glacier após 30 dias e deletar após 90 dias.',
      en: 'With versioning enabled, you can create separate rules: one for current versions and another for noncurrent versions. For example: move noncurrent versions to Glacier after 30 days and delete after 90 days.'
    },
    proTip: {
      pt: 'Use NoncurrentVersionExpiration para limpar versões antigas e controlar custos.',
      en: 'Use NoncurrentVersionExpiration to clean up old versions and control costs.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 's3-l4-q5',
    question: {
      pt: 'Como você pode deletar automaticamente uploads multipart incompletos?',
      en: 'How can you automatically delete incomplete multipart uploads?'
    },
    options: {
      pt: [
        'Usar ação AbortIncompleteMultipartUpload na Lifecycle Policy',
        'Deletar manualmente',
        'Não é possível deletar automaticamente',
        'Usar Lambda function'
      ],
      en: [
        'Use AbortIncompleteMultipartUpload action in Lifecycle Policy',
        'Delete manually',
        'Cannot delete automatically',
        'Use Lambda function'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Use a ação AbortIncompleteMultipartUpload em Lifecycle Policy para deletar automaticamente uploads multipart incompletos após X dias. Isso previne cobranças por partes de upload não finalizadas.',
      en: 'Use the AbortIncompleteMultipartUpload action in Lifecycle Policy to automatically delete incomplete multipart uploads after X days. This prevents charges for unfinished upload parts.'
    },
    proTip: {
      pt: 'Configure para 7 dias para limpar uploads abandonados sem afetar uploads legítimos.',
      en: 'Configure for 7 days to clean up abandoned uploads without affecting legitimate uploads.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 's3-l4-q6',
    question: {
      pt: 'Qual é o tempo mínimo antes de poder transicionar objetos de Standard para Standard-IA?',
      en: 'What is the minimum time before you can transition objects from Standard to Standard-IA?'
    },
    options: {
      pt: [
        '0 dias (imediato)',
        '30 dias',
        '60 dias',
        '90 dias'
      ],
      en: [
        '0 days (immediate)',
        '30 days',
        '60 days',
        '90 days'
      ]
    },
    correctAnswer: 1,
    explanation: {
      pt: 'Objetos devem permanecer no mínimo 30 dias em S3 Standard antes de transicionar para Standard-IA ou One Zone-IA. Isso porque IA tem período mínimo de armazenamento de 30 dias, então transição prematura não economiza.',
      en: 'Objects must remain at least 30 days in S3 Standard before transitioning to Standard-IA or One Zone-IA. This is because IA has a minimum storage period of 30 days, so premature transition does not save costs.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 's3-l4-q7',
    question: {
      pt: 'Como você pode expirar objetos baseado em data específica ao invés de idade?',
      en: 'How can you expire objects based on specific date instead of age?'
    },
    options: {
      pt: [
        'Usar ação Expiration com Date ao invés de Days',
        'Não é possível usar data específica',
        'Usar apenas Days',
        'Usar Lambda function'
      ],
      en: [
        'Use Expiration action with Date instead of Days',
        'Cannot use specific date',
        'Use only Days',
        'Use Lambda function'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Lifecycle rules suportam duas formas de expiração: Days (idade relativa) ou Date (data absoluta). Use Date quando você sabe exatamente quando objetos devem expirar, como logs de campanha que terminam em data específica.',
      en: 'Lifecycle rules support two forms of expiration: Days (relative age) or Date (absolute date). Use Date when you know exactly when objects should expire, such as campaign logs ending on specific date.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 's3-l4-q8',
    question: {
      pt: 'O que é S3 Analytics e como ajuda com Lifecycle Policies?',
      en: 'What is S3 Analytics and how does it help with Lifecycle Policies?'
    },
    options: {
      pt: [
        'Analisa padrões de acesso e recomenda quando transicionar para IA',
        'Analisa custos apenas',
        'Analisa segurança apenas',
        'Analisa performance apenas'
      ],
      en: [
        'Analyzes access patterns and recommends when to transition to IA',
        'Analyzes costs only',
        'Analyzes security only',
        'Analyzes performance only'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'S3 Analytics - Storage Class Analysis analisa padrões de acesso e fornece recomendações sobre quando transicionar objetos para Standard-IA. Gera relatórios diários e visualizações. Ajuda a otimizar lifecycle policies baseado em dados reais.',
      en: 'S3 Analytics - Storage Class Analysis analyzes access patterns and provides recommendations on when to transition objects to Standard-IA. Generates daily reports and visualizations. Helps optimize lifecycle policies based on real data.'
    },
    proTip: {
      pt: 'Analytics pode exportar dados para S3 para análise com Athena ou QuickSight.',
      en: 'Analytics can export data to S3 for analysis with Athena or QuickSight.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 's3-l4-q9',
    question: {
      pt: 'Você pode transicionar objetos menores que 128 KB para Standard-IA?',
      en: 'Can you transition objects smaller than 128 KB to Standard-IA?'
    },
    options: {
      pt: [
        'Sim, mas será cobrado como se fosse 128 KB',
        'Não, a transição falhará',
        'Sim, sem custo adicional',
        'Não, objetos pequenos não podem usar IA'
      ],
      en: [
        'Yes, but will be charged as if it were 128 KB',
        'No, the transition will fail',
        'Yes, at no additional cost',
        'No, small objects cannot use IA'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Standard-IA e One Zone-IA têm tamanho mínimo de objeto de 128 KB. Objetos menores podem ser armazenados mas serão cobrados como 128 KB. Para objetos pequenos, Standard pode ser mais econômico.',
      en: 'Standard-IA and One Zone-IA have minimum object size of 128 KB. Smaller objects can be stored but will be charged as 128 KB. For small objects, Standard may be more cost-effective.'
    },
    proTip: {
      pt: 'Use filtro de tamanho em Lifecycle rules para evitar transicionar objetos pequenos.',
      en: 'Use size filter in Lifecycle rules to avoid transitioning small objects.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 's3-l4-q10',
    question: {
      pt: 'Como você pode testar Lifecycle Policies antes de aplicá-las em produção?',
      en: 'How can you test Lifecycle Policies before applying them in production?'
    },
    options: {
      pt: [
        'Usar bucket de teste com dados de amostra e monitorar transições',
        'Aplicar diretamente em produção',
        'Não é possível testar',
        'Usar apenas simulação mental'
      ],
      en: [
        'Use test bucket with sample data and monitor transitions',
        'Apply directly to production',
        'Cannot test',
        'Use only mental simulation'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Crie bucket de teste com dados de amostra e aplique lifecycle policies. Use S3 Inventory para verificar classes de armazenamento. Monitore custos com Cost Explorer. Ajuste regras antes de aplicar em produção. Lembre que lifecycle processa uma vez por dia.',
      en: 'Create test bucket with sample data and apply lifecycle policies. Use S3 Inventory to verify storage classes. Monitor costs with Cost Explorer. Adjust rules before applying to production. Remember lifecycle processes once per day.'
    },
    proTip: {
      pt: 'Use tags "environment=test" para identificar e isolar buckets de teste.',
      en: 'Use tags "environment=test" to identify and isolate test buckets.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  }
];

// ============================================
// S3 - NÍVEL 5: PERFORMANCE E OTIMIZAÇÃO
// ============================================
export const s3Level5Questions: Question[] = [
  {
    id: 's3-l5-q1',
    question: {
      pt: 'Qual é o limite de throughput do S3 por prefixo?',
      en: 'What is the S3 throughput limit per prefix?'
    },
    options: {
      pt: [
        '3.500 PUT/COPY/POST/DELETE e 5.500 GET/HEAD por segundo',
        '100 requisições por segundo',
        '1.000 requisições por segundo',
        'Sem limite'
      ],
      en: [
        '3,500 PUT/COPY/POST/DELETE and 5,500 GET/HEAD per second',
        '100 requests per second',
        '1,000 requests per second',
        'No limit'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'S3 suporta 3.500 requisições de escrita e 5.500 de leitura por segundo por prefixo. Para mais throughput, distribua objetos em múltiplos prefixos. Exemplo: ao invés de "logs/file1.txt", use "logs/2024/01/15/file1.txt".',
      en: 'S3 supports 3,500 write requests and 5,500 read requests per second per prefix. For more throughput, distribute objects across multiple prefixes. Example: instead of "logs/file1.txt", use "logs/2024/01/15/file1.txt".'
    },
    proTip: {
      pt: 'Use hash ou data no início do prefixo para distribuição uniforme.',
      en: 'Use hash or date at the beginning of prefix for uniform distribution.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 's3-l5-q2',
    question: {
      pt: 'O que é S3 Transfer Acceleration e quando usá-lo?',
      en: 'What is S3 Transfer Acceleration and when to use it?'
    },
    options: {
      pt: [
        'Usa CloudFront edge locations para acelerar uploads de longa distância',
        'Comprime arquivos automaticamente',
        'Usa múltiplas threads',
        'Aumenta largura de banda'
      ],
      en: [
        'Uses CloudFront edge locations to accelerate long-distance uploads',
        'Automatically compresses files',
        'Uses multiple threads',
        'Increases bandwidth'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'S3 Transfer Acceleration usa a rede global de edge locations do CloudFront para rotear uploads ao S3 pelo caminho mais rápido. Pode acelerar uploads em até 50-500% para clientes geograficamente distantes. Cobra taxa adicional por GB transferido.',
      en: 'S3 Transfer Acceleration uses CloudFront\'s global network of edge locations to route uploads to S3 via the fastest path. Can accelerate uploads by 50-500% for geographically distant clients. Charges additional fee per GB transferred.'
    },
    proTip: {
      pt: 'Use a ferramenta de comparação de velocidade da AWS para testar se vale a pena.',
      en: 'Use AWS speed comparison tool to test if it\'s worth it.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 's3-l5-q3',
    question: {
      pt: 'O que é Multipart Upload e quando você deve usá-lo?',
      en: 'What is Multipart Upload and when should you use it?'
    },
    options: {
      pt: [
        'Upload de arquivos em partes paralelas, recomendado para arquivos >100 MB',
        'Upload de múltiplos arquivos simultaneamente',
        'Upload comprimido',
        'Upload criptografado'
      ],
      en: [
        'Upload files in parallel parts, recommended for files >100 MB',
        'Upload multiple files simultaneously',
        'Compressed upload',
        'Encrypted upload'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Multipart Upload divide arquivos grandes em partes (5 MB - 5 GB cada) e faz upload em paralelo. Benefícios: melhor throughput, recuperação de falhas (reenviar apenas partes falhadas), pausar/retomar. Obrigatório para arquivos >5 GB.',
      en: 'Multipart Upload divides large files into parts (5 MB - 5 GB each) and uploads in parallel. Benefits: better throughput, failure recovery (resend only failed parts), pause/resume. Mandatory for files >5 GB.'
    },
    proTip: {
      pt: 'Use Lifecycle Policy para limpar uploads multipart incompletos após 7 dias.',
      en: 'Use Lifecycle Policy to clean up incomplete multipart uploads after 7 days.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 's3-l5-q4',
    question: {
      pt: 'Como você pode otimizar performance de GET requests no S3?',
      en: 'How can you optimize S3 GET request performance?'
    },
    options: {
      pt: [
        'Usar CloudFront CDN, S3 Select, e Byte-Range Fetches',
        'Apenas aumentar largura de banda',
        'Usar apenas compressão',
        'Não é possível otimizar'
      ],
      en: [
        'Use CloudFront CDN, S3 Select, and Byte-Range Fetches',
        'Only increase bandwidth',
        'Use only compression',
        'Cannot optimize'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Otimizações: 1) CloudFront para cache em edge locations, 2) S3 Select para recuperar apenas dados necessários, 3) Byte-Range Fetches para downloads paralelos de partes do arquivo, 4) Distribuir objetos em múltiplos prefixos.',
      en: 'Optimizations: 1) CloudFront for caching at edge locations, 2) S3 Select to retrieve only needed data, 3) Byte-Range Fetches for parallel downloads of file parts, 4) Distribute objects across multiple prefixes.'
    },
    proTip: {
      pt: 'Byte-Range Fetches também ajudam na recuperação de falhas - reenviar apenas parte falhada.',
      en: 'Byte-Range Fetches also help with failure recovery - resend only failed part.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 's3-l5-q5',
    question: {
      pt: 'O que é S3 Select e qual seu benefício?',
      en: 'What is S3 Select and what is its benefit?'
    },
    options: {
      pt: [
        'Recupera apenas subset de dados usando SQL, reduzindo transferência em até 80%',
        'Seleciona automaticamente melhor classe de armazenamento',
        'Seleciona região mais próxima',
        'Seleciona melhor rota de rede'
      ],
      en: [
        'Retrieves only data subset using SQL, reducing transfer by up to 80%',
        'Automatically selects best storage class',
        'Selects nearest region',
        'Selects best network route'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'S3 Select permite usar SQL simples para recuperar apenas subset de dados de objetos CSV, JSON ou Parquet. Processa no lado do servidor, reduzindo transferência de dados em até 80% e custos em até 400%. Mais rápido que baixar arquivo completo.',
      en: 'S3 Select allows using simple SQL to retrieve only data subset from CSV, JSON, or Parquet objects. Processes server-side, reducing data transfer by up to 80% and costs by up to 400%. Faster than downloading complete file.'
    },
    proTip: {
      pt: 'Use Glacier Select para consultar dados arquivados sem restaurar completamente.',
      en: 'Use Glacier Select to query archived data without full restoration.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 's3-l5-q6',
    question: {
      pt: 'Como você pode monitorar performance do S3?',
      en: 'How can you monitor S3 performance?'
    },
    options: {
      pt: [
        'CloudWatch Metrics, S3 Storage Lens, e Request Metrics',
        'Apenas logs de acesso',
        'Apenas CloudTrail',
        'Não é possível monitorar performance'
      ],
      en: [
        'CloudWatch Metrics, S3 Storage Lens, and Request Metrics',
        'Only access logs',
        'Only CloudTrail',
        'Cannot monitor performance'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Use: 1) CloudWatch Metrics para métricas básicas (requisições, erros), 2) Request Metrics para métricas detalhadas por prefixo/tag, 3) S3 Storage Lens para visibilidade de uso e atividade em toda organização, 4) Access Logs para análise detalhada.',
      en: 'Use: 1) CloudWatch Metrics for basic metrics (requests, errors), 2) Request Metrics for detailed metrics by prefix/tag, 3) S3 Storage Lens for usage and activity visibility across organization, 4) Access Logs for detailed analysis.'
    },
    proTip: {
      pt: 'S3 Storage Lens oferece 29 métricas e é gratuito para métricas básicas.',
      en: 'S3 Storage Lens offers 29 metrics and is free for basic metrics.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 's3-l5-q7',
    question: {
      pt: 'O que é S3 Batch Operations e quando usá-lo?',
      en: 'What is S3 Batch Operations and when to use it?'
    },
    options: {
      pt: [
        'Executa operações em bilhões de objetos em escala com rastreamento e notificações',
        'Upload em lote',
        'Download em lote',
        'Backup em lote'
      ],
      en: [
        'Executes operations on billions of objects at scale with tracking and notifications',
        'Batch upload',
        'Batch download',
        'Batch backup'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'S3 Batch Operations permite executar ações em bilhões de objetos: copiar, invocar Lambda, restaurar do Glacier, modificar ACLs/tags, etc. Fornece rastreamento de progresso, notificações e relatórios de conclusão. Gerencia retries automaticamente.',
      en: 'S3 Batch Operations allows executing actions on billions of objects: copy, invoke Lambda, restore from Glacier, modify ACLs/tags, etc. Provides progress tracking, notifications, and completion reports. Manages retries automatically.'
    },
    proTip: {
      pt: 'Use S3 Inventory para gerar lista de objetos para Batch Operations.',
      en: 'Use S3 Inventory to generate object list for Batch Operations.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 's3-l5-q8',
    question: {
      pt: 'Como você pode reduzir custos de requisições ao S3?',
      en: 'How can you reduce S3 request costs?'
    },
    options: {
      pt: [
        'Usar CloudFront para cache, agrupar objetos pequenos, usar S3 Select',
        'Apenas reduzir número de arquivos',
        'Apenas usar compressão',
        'Não é possível reduzir custos de requisições'
      ],
      en: [
        'Use CloudFront for caching, group small objects, use S3 Select',
        'Only reduce number of files',
        'Only use compression',
        'Cannot reduce request costs'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Estratégias: 1) CloudFront para cache e reduzir requisições ao S3, 2) Agrupar objetos pequenos em arquivos maiores, 3) S3 Select para reduzir dados transferidos, 4) Usar Intelligent-Tiering para otimizar custos de armazenamento, 5) Lifecycle policies para mover dados antigos.',
      en: 'Strategies: 1) CloudFront for caching and reducing S3 requests, 2) Group small objects into larger files, 3) S3 Select to reduce transferred data, 4) Use Intelligent-Tiering to optimize storage costs, 5) Lifecycle policies to move old data.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 's3-l5-q9',
    question: {
      pt: 'O que é S3 Inventory e como ajuda na otimização?',
      en: 'What is S3 Inventory and how does it help with optimization?'
    },
    options: {
      pt: [
        'Gera relatórios de metadados de objetos para análise e auditoria',
        'Faz backup automático',
        'Monitora acesso em tempo real',
        'Otimiza armazenamento automaticamente'
      ],
      en: [
        'Generates object metadata reports for analysis and auditing',
        'Automatic backup',
        'Real-time access monitoring',
        'Automatically optimizes storage'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'S3 Inventory gera relatórios (diários ou semanais) com metadados de objetos: tamanho, classe de armazenamento, status de criptografia, etc. Use para: auditoria, análise de custos, identificar objetos para lifecycle policies, input para Batch Operations.',
      en: 'S3 Inventory generates reports (daily or weekly) with object metadata: size, storage class, encryption status, etc. Use for: auditing, cost analysis, identifying objects for lifecycle policies, input for Batch Operations.'
    },
    proTip: {
      pt: 'Inventory é mais eficiente que LIST API para buckets com milhões de objetos.',
      en: 'Inventory is more efficient than LIST API for buckets with millions of objects.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 's3-l5-q10',
    question: {
      pt: 'Como você pode implementar disaster recovery para dados no S3?',
      en: 'How can you implement disaster recovery for S3 data?'
    },
    options: {
      pt: [
        'Usar S3 Cross-Region Replication, Versioning, e Object Lock',
        'Apenas fazer backup manual',
        'Apenas usar uma região',
        'Não é necessário DR para S3'
      ],
      en: [
        'Use S3 Cross-Region Replication, Versioning, and Object Lock',
        'Only manual backup',
        'Only use one region',
        'DR not needed for S3'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Estratégia completa de DR: 1) Cross-Region Replication para cópia automática em outra região, 2) Versioning para proteger contra deleção acidental, 3) Object Lock para proteção WORM, 4) MFA Delete para deleções críticas, 5) Backup com AWS Backup para ponto de recuperação.',
      en: 'Complete DR strategy: 1) Cross-Region Replication for automatic copy to another region, 2) Versioning to protect against accidental deletion, 3) Object Lock for WORM protection, 4) MFA Delete for critical deletions, 5) Backup with AWS Backup for recovery point.'
    },
    proTip: {
      pt: 'S3 tem 99.999999999% de durabilidade, mas CRR protege contra desastres regionais.',
      en: 'S3 has 99.999999999% durability, but CRR protects against regional disasters.'
    },
    difficulty: 'expert',
    xpReward: 30
  }
];

// ============================================
// LAMBDA - NÍVEL 2: TRIGGERS E EVENTOS
// ============================================
export const lambdaLevel2Questions: Question[] = [
  {
    id: 'lambda-l2-q1',
    question: {
      pt: 'Quais serviços AWS podem invocar uma função Lambda diretamente?',
      en: 'Which AWS services can invoke a Lambda function directly?'
    },
    options: {
      pt: [
        'S3, DynamoDB, SNS, SQS, API Gateway, CloudWatch Events, e muitos outros',
        'Apenas API Gateway',
        'Apenas S3',
        'Apenas CloudWatch'
      ],
      en: [
        'S3, DynamoDB, SNS, SQS, API Gateway, CloudWatch Events, and many others',
        'Only API Gateway',
        'Only S3',
        'Only CloudWatch'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Lambda integra com 200+ serviços AWS. Principais triggers: S3 (eventos de objeto), DynamoDB (streams), SNS/SQS (mensagens), API Gateway (HTTP), CloudWatch Events/EventBridge (schedule/eventos), Kinesis (streams), ALB (HTTP).',
      en: 'Lambda integrates with 200+ AWS services. Main triggers: S3 (object events), DynamoDB (streams), SNS/SQS (messages), API Gateway (HTTP), CloudWatch Events/EventBridge (schedule/events), Kinesis (streams), ALB (HTTP).'
    },
    proTip: {
      pt: 'Use EventBridge para orquestração complexa de eventos entre serviços.',
      en: 'Use EventBridge for complex event orchestration between services.'
    },
    difficulty: 'beginner',
    xpReward: 15
  },
  {
    id: 'lambda-l2-q2',
    question: {
      pt: 'Como você pode processar arquivos automaticamente quando são enviados ao S3?',
      en: 'How can you automatically process files when they are uploaded to S3?'
    },
    options: {
      pt: [
        'Configurar S3 Event Notification para invocar Lambda',
        'Verificar S3 manualmente',
        'Usar cron job',
        'Não é possível automatizar'
      ],
      en: [
        'Configure S3 Event Notification to invoke Lambda',
        'Check S3 manually',
        'Use cron job',
        'Cannot automate'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Configure S3 Event Notifications para invocar Lambda em eventos como s3:ObjectCreated, s3:ObjectRemoved. Lambda recebe metadados do objeto e pode processá-lo (redimensionar imagem, transcodificar vídeo, extrair metadados, etc.).',
      en: 'Configure S3 Event Notifications to invoke Lambda on events like s3:ObjectCreated, s3:ObjectRemoved. Lambda receives object metadata and can process it (resize image, transcode video, extract metadata, etc.).'
    },
    proTip: {
      pt: 'Use prefixo/sufixo em Event Notification para filtrar apenas arquivos específicos.',
      en: 'Use prefix/suffix in Event Notification to filter only specific files.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'lambda-l2-q3',
    question: {
      pt: 'O que é Lambda Event Source Mapping?',
      en: 'What is Lambda Event Source Mapping?'
    },
    options: {
      pt: [
        'Configuração que permite Lambda ler de streams (Kinesis, DynamoDB, SQS)',
        'Mapeamento de variáveis de ambiente',
        'Mapeamento de permissões',
        'Mapeamento de rede'
      ],
      en: [
        'Configuration that allows Lambda to read from streams (Kinesis, DynamoDB, SQS)',
        'Environment variable mapping',
        'Permission mapping',
        'Network mapping'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Event Source Mapping é uma configuração que permite Lambda ler registros de streams (Kinesis, DynamoDB Streams) ou filas (SQS). Lambda faz polling da fonte, processa em lotes e gerencia checkpoints automaticamente.',
      en: 'Event Source Mapping is a configuration that allows Lambda to read records from streams (Kinesis, DynamoDB Streams) or queues (SQS). Lambda polls the source, processes in batches, and manages checkpoints automatically.'
    },
    proTip: {
      pt: 'Configure batch size e batch window para otimizar throughput vs latência.',
      en: 'Configure batch size and batch window to optimize throughput vs latency.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'lambda-l2-q4',
    question: {
      pt: 'Como você pode criar uma API REST usando Lambda?',
      en: 'How can you create a REST API using Lambda?'
    },
    options: {
      pt: [
        'Usar API Gateway com integração Lambda',
        'Lambda não pode criar APIs',
        'Apenas com EC2',
        'Apenas com containers'
      ],
      en: [
        'Use API Gateway with Lambda integration',
        'Lambda cannot create APIs',
        'Only with EC2',
        'Only with containers'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'API Gateway + Lambda é o padrão serverless para APIs REST. API Gateway gerencia HTTP, autenticação, throttling, caching. Lambda processa a lógica de negócio. Também pode usar ALB ou Lambda Function URLs para casos mais simples.',
      en: 'API Gateway + Lambda is the serverless pattern for REST APIs. API Gateway handles HTTP, authentication, throttling, caching. Lambda processes business logic. Can also use ALB or Lambda Function URLs for simpler cases.'
    },
    proTip: {
      pt: 'Use Lambda Function URLs para APIs simples sem necessidade de recursos avançados do API Gateway.',
      en: 'Use Lambda Function URLs for simple APIs without need for advanced API Gateway features.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'lambda-l2-q5',
    question: {
      pt: 'Como você pode executar uma função Lambda em schedule (cron)?',
      en: 'How can you execute a Lambda function on schedule (cron)?'
    },
    options: {
      pt: [
        'Usar EventBridge (CloudWatch Events) com expressão cron',
        'Lambda não suporta schedule',
        'Apenas com EC2',
        'Apenas manualmente'
      ],
      en: [
        'Use EventBridge (CloudWatch Events) with cron expression',
        'Lambda does not support schedule',
        'Only with EC2',
        'Only manually'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Use EventBridge (anteriormente CloudWatch Events) com expressão cron ou rate para invocar Lambda periodicamente. Exemplos: rate(5 minutes), cron(0 12 * * ? *) para meio-dia diariamente. Ideal para jobs de manutenção, backups, relatórios.',
      en: 'Use EventBridge (formerly CloudWatch Events) with cron or rate expression to invoke Lambda periodically. Examples: rate(5 minutes), cron(0 12 * * ? *) for daily noon. Ideal for maintenance jobs, backups, reports.'
    },
    proTip: {
      pt: 'EventBridge usa sintaxe cron do Unix com 6 campos (minuto, hora, dia, mês, dia da semana, ano).',
      en: 'EventBridge uses Unix cron syntax with 6 fields (minute, hour, day, month, day of week, year).'
    },
    difficulty: 'beginner',
    xpReward: 15
  },
  {
    id: 'lambda-l2-q6',
    question: {
      pt: 'O que acontece quando uma função Lambda falha ao processar um evento do SQS?',
      en: 'What happens when a Lambda function fails to process an SQS event?'
    },
    options: {
      pt: [
        'Mensagem retorna à fila e é reprocessada até maxReceiveCount',
        'Mensagem é perdida',
        'Lambda tenta indefinidamente',
        'Mensagem é deletada imediatamente'
      ],
      en: [
        'Message returns to queue and is reprocessed until maxReceiveCount',
        'Message is lost',
        'Lambda retries indefinitely',
        'Message is deleted immediately'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Se Lambda falha, mensagem retorna à fila após visibility timeout e é reprocessada. Após maxReceiveCount tentativas, mensagem vai para Dead Letter Queue (DLQ) se configurada. Configure DLQ para não perder mensagens com falhas persistentes.',
      en: 'If Lambda fails, message returns to queue after visibility timeout and is reprocessed. After maxReceiveCount attempts, message goes to Dead Letter Queue (DLQ) if configured. Configure DLQ to not lose messages with persistent failures.'
    },
    proTip: {
      pt: 'Use batch size pequeno (1-10) para SQS FIFO para manter ordem e reduzir reprocessamento.',
      en: 'Use small batch size (1-10) for SQS FIFO to maintain order and reduce reprocessing.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'lambda-l2-q7',
    question: {
      pt: 'Como você pode processar streams do DynamoDB com Lambda?',
      en: 'How can you process DynamoDB streams with Lambda?'
    },
    options: {
      pt: [
        'Habilitar DynamoDB Streams e criar Event Source Mapping',
        'DynamoDB não tem streams',
        'Apenas com Kinesis',
        'Apenas com polling manual'
      ],
      en: [
        'Enable DynamoDB Streams and create Event Source Mapping',
        'DynamoDB has no streams',
        'Only with Kinesis',
        'Only with manual polling'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Habilite DynamoDB Streams na tabela para capturar mudanças (INSERT, MODIFY, REMOVE). Crie Event Source Mapping para Lambda processar registros. Útil para: auditoria, replicação, agregação, notificações em tempo real.',
      en: 'Enable DynamoDB Streams on table to capture changes (INSERT, MODIFY, REMOVE). Create Event Source Mapping for Lambda to process records. Useful for: auditing, replication, aggregation, real-time notifications.'
    },
    proTip: {
      pt: 'DynamoDB Streams retém dados por 24 horas. Use Kinesis Data Streams para retenção maior.',
      en: 'DynamoDB Streams retains data for 24 hours. Use Kinesis Data Streams for longer retention.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'lambda-l2-q8',
    question: {
      pt: 'O que são Lambda Destinations e quando usá-las?',
      en: 'What are Lambda Destinations and when to use them?'
    },
    options: {
      pt: [
        'Roteamento de resultados de execução (sucesso/falha) para outros serviços',
        'Destinos de deploy',
        'Destinos de logs',
        'Destinos de rede'
      ],
      en: [
        'Routing execution results (success/failure) to other services',
        'Deploy destinations',
        'Log destinations',
        'Network destinations'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Destinations permitem rotear resultados de invocações assíncronas para SQS, SNS, Lambda ou EventBridge. Configure destinos separados para sucesso e falha. Mais simples que DLQ e fornece contexto completo da execução.',
      en: 'Destinations allow routing asynchronous invocation results to SQS, SNS, Lambda, or EventBridge. Configure separate destinations for success and failure. Simpler than DLQ and provides complete execution context.'
    },
    proTip: {
      pt: 'Destinations substituem DLQ para invocações assíncronas - use Destinations para novos projetos.',
      en: 'Destinations replace DLQ for asynchronous invocations - use Destinations for new projects.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'lambda-l2-q9',
    question: {
      pt: 'Como você pode invocar Lambda de forma síncrona vs assíncrona?',
      en: 'How can you invoke Lambda synchronously vs asynchronously?'
    },
    options: {
      pt: [
        'Síncrona: API Gateway, ALB; Assíncrona: S3, SNS, EventBridge',
        'Todas as invocações são síncronas',
        'Todas as invocações são assíncronas',
        'Não há diferença'
      ],
      en: [
        'Synchronous: API Gateway, ALB; Asynchronous: S3, SNS, EventBridge',
        'All invocations are synchronous',
        'All invocations are asynchronous',
        'There is no difference'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Síncrona: chamador espera resposta (API Gateway, ALB, SDK com InvocationType=RequestResponse). Assíncrona: Lambda enfileira evento e retorna imediatamente (S3, SNS, EventBridge, SDK com InvocationType=Event). Assíncrona tem retry automático.',
      en: 'Synchronous: caller waits for response (API Gateway, ALB, SDK with InvocationType=RequestResponse). Asynchronous: Lambda queues event and returns immediately (S3, SNS, EventBridge, SDK with InvocationType=Event). Asynchronous has automatic retry.'
    },
    proTip: {
      pt: 'Invocações assíncronas tentam 2x automaticamente antes de enviar para DLQ/Destination.',
      en: 'Asynchronous invocations retry 2x automatically before sending to DLQ/Destination.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'lambda-l2-q10',
    question: {
      pt: 'Como você pode processar mensagens do SNS com Lambda?',
      en: 'How can you process SNS messages with Lambda?'
    },
    options: {
      pt: [
        'Subscrever função Lambda ao tópico SNS',
        'SNS não integra com Lambda',
        'Apenas via SQS',
        'Apenas via API Gateway'
      ],
      en: [
        'Subscribe Lambda function to SNS topic',
        'SNS does not integrate with Lambda',
        'Only via SQS',
        'Only via API Gateway'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Adicione Lambda como subscriber do tópico SNS. SNS invoca Lambda assincronamente quando mensagem é publicada. Lambda pode processar múltiplas mensagens em paralelo. Útil para fan-out pattern e notificações.',
      en: 'Add Lambda as subscriber to SNS topic. SNS invokes Lambda asynchronously when message is published. Lambda can process multiple messages in parallel. Useful for fan-out pattern and notifications.'
    },
    proTip: {
      pt: 'Use SNS + SQS + Lambda para processamento confiável com retry e DLQ.',
      en: 'Use SNS + SQS + Lambda for reliable processing with retry and DLQ.'
    },
    difficulty: 'beginner',
    xpReward: 15
  }
];

// ============================================
// LAMBDA - NÍVEL 3: OTIMIZAÇÃO
// ============================================
export const lambdaLevel3Questions: Question[] = [
  {
    id: 'lambda-l3-q1',
    question: {
      pt: 'Como você pode reduzir cold starts em funções Lambda?',
      en: 'How can you reduce cold starts in Lambda functions?'
    },
    options: {
      pt: [
        'Usar Provisioned Concurrency, reduzir tamanho do pacote, otimizar inicialização',
        'Apenas aumentar memória',
        'Apenas aumentar timeout',
        'Não é possível reduzir cold starts'
      ],
      en: [
        'Use Provisioned Concurrency, reduce package size, optimize initialization',
        'Only increase memory',
        'Only increase timeout',
        'Cannot reduce cold starts'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Estratégias: 1) Provisioned Concurrency mantém instâncias warm, 2) Reduzir tamanho do pacote de deploy, 3) Minimizar dependências, 4) Inicializar conexões fora do handler, 5) Usar Lambda SnapStart (Java), 6) Escolher runtime mais rápido.',
      en: 'Strategies: 1) Provisioned Concurrency keeps instances warm, 2) Reduce deployment package size, 3) Minimize dependencies, 4) Initialize connections outside handler, 5) Use Lambda SnapStart (Java), 6) Choose faster runtime.'
    },
    proTip: {
      pt: 'Provisioned Concurrency tem custo adicional - use apenas para funções críticas de latência.',
      en: 'Provisioned Concurrency has additional cost - use only for latency-critical functions.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'lambda-l3-q2',
    question: {
      pt: 'Como a alocação de memória afeta o desempenho do Lambda?',
      en: 'How does memory allocation affect Lambda performance?'
    },
    options: {
      pt: [
        'Mais memória = mais CPU, rede e disco proporcionalmente',
        'Memória não afeta CPU',
        'Apenas afeta armazenamento',
        'Não há relação'
      ],
      en: [
        'More memory = more CPU, network, and disk proportionally',
        'Memory does not affect CPU',
        'Only affects storage',
        'No relationship'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Lambda aloca CPU, rede e disco proporcionalmente à memória. 1.769 MB = 1 vCPU completo. Aumentar memória pode reduzir tempo de execução e custo total. Use Lambda Power Tuning para encontrar configuração ótima.',
      en: 'Lambda allocates CPU, network, and disk proportionally to memory. 1,769 MB = 1 full vCPU. Increasing memory can reduce execution time and total cost. Use Lambda Power Tuning to find optimal configuration.'
    },
    proTip: {
      pt: 'Para workloads CPU-intensive, aumentar memória até 1.769 MB pode reduzir custo total.',
      en: 'For CPU-intensive workloads, increasing memory to 1,769 MB can reduce total cost.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'lambda-l3-q3',
    question: {
      pt: 'O que é Lambda Layers e quando usá-las?',
      en: 'What are Lambda Layers and when to use them?'
    },
    options: {
      pt: [
        'Compartilhar código, bibliotecas e dependências entre funções',
        'Camadas de rede',
        'Camadas de segurança',
        'Camadas de logs'
      ],
      en: [
        'Share code, libraries, and dependencies between functions',
        'Network layers',
        'Security layers',
        'Log layers'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Layers permitem compartilhar código comum (bibliotecas, SDKs, custom runtimes) entre funções. Benefícios: reduz tamanho de deploy, facilita atualizações, reutilização. Cada função pode usar até 5 layers. Total de 250 MB descompactado.',
      en: 'Layers allow sharing common code (libraries, SDKs, custom runtimes) between functions. Benefits: reduces deployment size, facilitates updates, reusability. Each function can use up to 5 layers. Total of 250 MB uncompressed.'
    },
    proTip: {
      pt: 'Use layers para dependências pesadas (pandas, numpy) e mantenha código de negócio na função.',
      en: 'Use layers for heavy dependencies (pandas, numpy) and keep business code in function.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'lambda-l3-q4',
    question: {
      pt: 'Como você pode monitorar performance de funções Lambda?',
      en: 'How can you monitor Lambda function performance?'
    },
    options: {
      pt: [
        'CloudWatch Logs, Metrics, X-Ray, Lambda Insights',
        'Apenas logs',
        'Apenas métricas',
        'Não é possível monitorar'
      ],
      en: [
        'CloudWatch Logs, Metrics, X-Ray, Lambda Insights',
        'Only logs',
        'Only metrics',
        'Cannot monitor'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Use: 1) CloudWatch Logs para logs de aplicação, 2) CloudWatch Metrics para invocações/erros/duração, 3) X-Ray para tracing distribuído, 4) Lambda Insights para métricas detalhadas de sistema (CPU, memória, rede), 5) CloudWatch Alarms para alertas.',
      en: 'Use: 1) CloudWatch Logs for application logs, 2) CloudWatch Metrics for invocations/errors/duration, 3) X-Ray for distributed tracing, 4) Lambda Insights for detailed system metrics (CPU, memory, network), 5) CloudWatch Alarms for alerts.'
    },
    proTip: {
      pt: 'Lambda Insights tem custo adicional mas fornece visibilidade profunda de performance.',
      en: 'Lambda Insights has additional cost but provides deep performance visibility.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'lambda-l3-q5',
    question: {
      pt: 'O que é Lambda@Edge e quando usá-lo?',
      en: 'What is Lambda@Edge and when to use it?'
    },
    options: {
      pt: [
        'Executa Lambda em edge locations do CloudFront para baixa latência',
        'Lambda com mais memória',
        'Lambda com mais CPU',
        'Lambda em múltiplas regiões'
      ],
      en: [
        'Runs Lambda at CloudFront edge locations for low latency',
        'Lambda with more memory',
        'Lambda with more CPU',
        'Lambda in multiple regions'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Lambda@Edge executa código em edge locations do CloudFront, próximo aos usuários. Use para: personalização de conteúdo, A/B testing, autenticação, redirecionamentos, manipulação de headers. Limitações: 128 MB memória, 5s timeout (viewer), sem variáveis de ambiente.',
      en: 'Lambda@Edge runs code at CloudFront edge locations, close to users. Use for: content personalization, A/B testing, authentication, redirects, header manipulation. Limitations: 128 MB memory, 5s timeout (viewer), no environment variables.'
    },
    proTip: {
      pt: 'Para casos mais complexos, use CloudFront Functions (mais barato e rápido) ou Lambda@Edge.',
      en: 'For more complex cases, use CloudFront Functions (cheaper and faster) or Lambda@Edge.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'lambda-l3-q6',
    question: {
      pt: 'Como você pode reutilizar conexões de banco de dados em Lambda?',
      en: 'How can you reuse database connections in Lambda?'
    },
    options: {
      pt: [
        'Inicializar conexão fora do handler e usar RDS Proxy',
        'Criar nova conexão a cada invocação',
        'Não é possível reutilizar',
        'Apenas com variáveis globais'
      ],
      en: [
        'Initialize connection outside handler and use RDS Proxy',
        'Create new connection each invocation',
        'Cannot reuse',
        'Only with global variables'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Inicialize conexões fora do handler para reutilizar em invocações subsequentes (warm starts). Use RDS Proxy para pooling de conexões, reduzindo overhead e evitando esgotar conexões do banco. RDS Proxy gerencia conexões automaticamente.',
      en: 'Initialize connections outside handler to reuse in subsequent invocations (warm starts). Use RDS Proxy for connection pooling, reducing overhead and avoiding exhausting database connections. RDS Proxy manages connections automatically.'
    },
    proTip: {
      pt: 'RDS Proxy é essencial para Lambda com alta concorrência acessando RDS.',
      en: 'RDS Proxy is essential for high-concurrency Lambda accessing RDS.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'lambda-l3-q7',
    question: {
      pt: 'O que é /tmp em Lambda e quais são suas limitações?',
      en: 'What is /tmp in Lambda and what are its limitations?'
    },
    options: {
      pt: [
        'Armazenamento temporário de até 10 GB, compartilhado entre invocações warm',
        'Armazenamento permanente',
        'Apenas 512 MB',
        'Não existe /tmp'
      ],
      en: [
        'Temporary storage up to 10 GB, shared between warm invocations',
        'Permanent storage',
        'Only 512 MB',
        '/tmp does not exist'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: '/tmp fornece até 10 GB de armazenamento temporário (configurável 512 MB - 10 GB). Persiste durante warm starts mas é limpo em cold starts. Use para cache de arquivos, processamento temporário. Você paga por GB-segundo configurado.',
      en: '/tmp provides up to 10 GB of temporary storage (configurable 512 MB - 10 GB). Persists during warm starts but is cleaned on cold starts. Use for file caching, temporary processing. You pay per GB-second configured.'
    },
    proTip: {
      pt: 'Para dados persistentes, use S3, EFS ou DynamoDB.',
      en: 'For persistent data, use S3, EFS, or DynamoDB.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'lambda-l3-q8',
    question: {
      pt: 'Como você pode otimizar custos de Lambda?',
      en: 'How can you optimize Lambda costs?'
    },
    options: {
      pt: [
        'Otimizar memória, reduzir tempo de execução, usar Compute Savings Plans',
        'Apenas reduzir memória',
        'Apenas reduzir timeout',
        'Não é possível otimizar'
      ],
      en: [
        'Optimize memory, reduce execution time, use Compute Savings Plans',
        'Only reduce memory',
        'Only reduce timeout',
        'Cannot optimize'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Estratégias: 1) Use Lambda Power Tuning para encontrar memória ótima, 2) Otimize código para reduzir duração, 3) Use Compute Savings Plans para 17% desconto, 4) Evite Provisioned Concurrency se não necessário, 5) Use arquitetura event-driven eficiente.',
      en: 'Strategies: 1) Use Lambda Power Tuning to find optimal memory, 2) Optimize code to reduce duration, 3) Use Compute Savings Plans for 17% discount, 4) Avoid Provisioned Concurrency if not needed, 5) Use efficient event-driven architecture.'
    },
    proTip: {
      pt: 'Às vezes aumentar memória reduz duração suficientemente para diminuir custo total.',
      en: 'Sometimes increasing memory reduces duration enough to lower total cost.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'lambda-l3-q9',
    question: {
      pt: 'O que é Lambda SnapStart e qual seu benefício?',
      en: 'What is Lambda SnapStart and what is its benefit?'
    },
    options: {
      pt: [
        'Reduz cold starts de funções Java em até 10x usando snapshots',
        'Inicia funções mais rápido',
        'Apenas para Python',
        'Backup automático'
      ],
      en: [
        'Reduces Java function cold starts by up to 10x using snapshots',
        'Starts functions faster',
        'Only for Python',
        'Automatic backup'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'SnapStart (Java 11+) cria snapshot da função após inicialização e usa esse snapshot para novas instâncias, reduzindo cold start em até 10x. Sem mudanças de código. Ideal para aplicações Java com inicialização pesada (Spring Boot, Quarkus).',
      en: 'SnapStart (Java 11+) creates function snapshot after initialization and uses this snapshot for new instances, reducing cold start by up to 10x. No code changes. Ideal for Java applications with heavy initialization (Spring Boot, Quarkus).'
    },
    proTip: {
      pt: 'SnapStart é gratuito e não tem custo adicional além do Lambda normal.',
      en: 'SnapStart is free and has no additional cost beyond normal Lambda.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'lambda-l3-q10',
    question: {
      pt: 'Como você pode implementar circuit breaker pattern em Lambda?',
      en: 'How can you implement circuit breaker pattern in Lambda?'
    },
    options: {
      pt: [
        'Usar Reserved Concurrency para limitar execuções e DLQ para falhas',
        'Não é possível',
        'Apenas com API Gateway',
        'Apenas com Step Functions'
      ],
      en: [
        'Use Reserved Concurrency to limit executions and DLQ for failures',
        'Not possible',
        'Only with API Gateway',
        'Only with Step Functions'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Implemente circuit breaker: 1) Reserved Concurrency para limitar carga, 2) DLQ/Destinations para capturar falhas, 3) CloudWatch Alarms para detectar taxa de erro alta, 4) EventBridge para desabilitar triggers temporariamente, 5) Parameter Store para estado do circuit.',
      en: 'Implement circuit breaker: 1) Reserved Concurrency to limit load, 2) DLQ/Destinations to capture failures, 3) CloudWatch Alarms to detect high error rate, 4) EventBridge to temporarily disable triggers, 5) Parameter Store for circuit state.'
    },
    proTip: {
      pt: 'Combine com exponential backoff em retries para proteção completa.',
      en: 'Combine with exponential backoff in retries for complete protection.'
    },
    difficulty: 'expert',
    xpReward: 30
  }
];

// ============================================
// LAMBDA - NÍVEL 4: ARQUITETURAS AVANÇADAS
// ============================================
export const lambdaLevel4Questions: Question[] = [
  {
    id: 'lambda-l4-q1',
    question: {
      pt: 'O que é AWS Step Functions e como se integra com Lambda?',
      en: 'What is AWS Step Functions and how does it integrate with Lambda?'
    },
    options: {
      pt: [
        'Orquestra múltiplas funções Lambda em workflows complexos com estado',
        'Apenas executa Lambda em paralelo',
        'Apenas faz retry de Lambda',
        'Substitui Lambda'
      ],
      en: [
        'Orchestrates multiple Lambda functions in complex stateful workflows',
        'Only runs Lambda in parallel',
        'Only retries Lambda',
        'Replaces Lambda'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Step Functions orquestra workflows serverless usando state machines. Coordena Lambda, serviços AWS e APIs externas com: sequência, paralelo, escolha, retry, error handling. Mantém estado e histórico de execução. Ideal para processos de negócio complexos.',
      en: 'Step Functions orchestrates serverless workflows using state machines. Coordinates Lambda, AWS services, and external APIs with: sequence, parallel, choice, retry, error handling. Maintains state and execution history. Ideal for complex business processes.'
    },
    proTip: {
      pt: 'Use Express Workflows para alto throughput (até 100k/s) e Standard para longa duração (até 1 ano).',
      en: 'Use Express Workflows for high throughput (up to 100k/s) and Standard for long duration (up to 1 year).'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'lambda-l4-q2',
    question: {
      pt: 'Como você pode implementar saga pattern com Lambda?',
      en: 'How can you implement saga pattern with Lambda?'
    },
    options: {
      pt: [
        'Usar Step Functions com compensating transactions para cada step',
        'Não é possível',
        'Apenas com banco de dados',
        'Apenas com SQS'
      ],
      en: [
        'Use Step Functions with compensating transactions for each step',
        'Not possible',
        'Only with database',
        'Only with SQS'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Saga pattern gerencia transações distribuídas. Use Step Functions para orquestrar: cada step tem Lambda para ação e Lambda de compensação. Se step falha, Step Functions executa compensações em ordem reversa. Mantém consistência eventual.',
      en: 'Saga pattern manages distributed transactions. Use Step Functions to orchestrate: each step has Lambda for action and compensation Lambda. If step fails, Step Functions executes compensations in reverse order. Maintains eventual consistency.'
    },
    proTip: {
      pt: 'Use DynamoDB para rastrear estado da saga e garantir idempotência.',
      en: 'Use DynamoDB to track saga state and ensure idempotency.'
    },
    difficulty: 'expert',
    xpReward: 30
  },
  {
    id: 'lambda-l4-q3',
    question: {
      pt: 'Como você pode implementar fan-out/fan-in pattern com Lambda?',
      en: 'How can you implement fan-out/fan-in pattern with Lambda?'
    },
    options: {
      pt: [
        'SNS para fan-out, SQS/Step Functions para fan-in',
        'Apenas com Lambda',
        'Não é possível',
        'Apenas com API Gateway'
      ],
      en: [
        'SNS for fan-out, SQS/Step Functions for fan-in',
        'Only with Lambda',
        'Not possible',
        'Only with API Gateway'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Fan-out: SNS publica para múltiplos subscribers Lambda (processamento paralelo). Fan-in: agregue resultados com SQS + Lambda ou Step Functions Map state. Útil para processamento distribuído, agregação de dados, workflows paralelos.',
      en: 'Fan-out: SNS publishes to multiple Lambda subscribers (parallel processing). Fan-in: aggregate results with SQS + Lambda or Step Functions Map state. Useful for distributed processing, data aggregation, parallel workflows.'
    },
    proTip: {
      pt: 'Use Step Functions Map state para processar até 10.000 itens em paralelo.',
      en: 'Use Step Functions Map state to process up to 10,000 items in parallel.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'lambda-l4-q4',
    question: {
      pt: 'Como você pode implementar idempotência em funções Lambda?',
      en: 'How can you implement idempotency in Lambda functions?'
    },
    options: {
      pt: [
        'Usar DynamoDB para rastrear IDs de requisição processados',
        'Não é necessário',
        'Lambda é automaticamente idempotente',
        'Apenas com API Gateway'
      ],
      en: [
        'Use DynamoDB to track processed request IDs',
        'Not necessary',
        'Lambda is automatically idempotent',
        'Only with API Gateway'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Implemente idempotência: 1) Gere ID único por requisição, 2) Armazene IDs processados no DynamoDB com TTL, 3) Verifique ID antes de processar, 4) Use conditional writes para evitar race conditions. Essencial para retries e processamento at-least-once.',
      en: 'Implement idempotency: 1) Generate unique ID per request, 2) Store processed IDs in DynamoDB with TTL, 3) Check ID before processing, 4) Use conditional writes to avoid race conditions. Essential for retries and at-least-once processing.'
    },
    proTip: {
      pt: 'Use biblioteca Powertools for AWS Lambda que fornece decorator de idempotência.',
      en: 'Use Powertools for AWS Lambda library that provides idempotency decorator.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'lambda-l4-q5',
    question: {
      pt: 'Como você pode processar grandes volumes de dados com Lambda?',
      en: 'How can you process large data volumes with Lambda?'
    },
    options: {
      pt: [
        'Usar S3 Batch Operations, Step Functions Map, ou Kinesis Data Streams',
        'Lambda não pode processar grandes volumes',
        'Apenas com EC2',
        'Apenas com EMR'
      ],
      en: [
        'Use S3 Batch Operations, Step Functions Map, or Kinesis Data Streams',
        'Lambda cannot process large volumes',
        'Only with EC2',
        'Only with EMR'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Estratégias: 1) S3 Batch Operations para bilhões de objetos, 2) Step Functions Map para processar até 10k itens em paralelo, 3) Kinesis Data Streams para streaming contínuo, 4) SQS com batch processing, 5) Particionar dados e processar em paralelo.',
      en: 'Strategies: 1) S3 Batch Operations for billions of objects, 2) Step Functions Map to process up to 10k items in parallel, 3) Kinesis Data Streams for continuous streaming, 4) SQS with batch processing, 5) Partition data and process in parallel.'
    },
    proTip: {
      pt: 'Combine Lambda com EMR Serverless ou Glue para processamento de big data muito grande.',
      en: 'Combine Lambda with EMR Serverless or Glue for very large big data processing.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'lambda-l4-q6',
    question: {
      pt: 'Como você pode implementar blue/green deployment para Lambda?',
      en: 'How can you implement blue/green deployment for Lambda?'
    },
    options: {
      pt: [
        'Usar aliases com weighted routing e CodeDeploy',
        'Não é possível',
        'Apenas criar nova função',
        'Apenas com API Gateway'
      ],
      en: [
        'Use aliases with weighted routing and CodeDeploy',
        'Not possible',
        'Only create new function',
        'Only with API Gateway'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Use Lambda aliases com weighted routing: aponte alias para duas versões (blue/green) com pesos (ex: 90% blue, 10% green). CodeDeploy automatiza shift gradual de tráfego. Rollback instantâneo se erros. Monitore métricas durante deploy.',
      en: 'Use Lambda aliases with weighted routing: point alias to two versions (blue/green) with weights (e.g., 90% blue, 10% green). CodeDeploy automates gradual traffic shift. Instant rollback if errors. Monitor metrics during deployment.'
    },
    proTip: {
      pt: 'CodeDeploy suporta Linear, Canary e All-at-once deployment strategies.',
      en: 'CodeDeploy supports Linear, Canary, and All-at-once deployment strategies.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'lambda-l4-q7',
    question: {
      pt: 'Como você pode compartilhar dados entre invocações Lambda?',
      en: 'How can you share data between Lambda invocations?'
    },
    options: {
      pt: [
        'Usar ElastiCache, DynamoDB, S3, ou EFS',
        'Usar apenas variáveis globais',
        'Usar apenas /tmp',
        'Não é possível compartilhar'
      ],
      en: [
        'Use ElastiCache, DynamoDB, S3, or EFS',
        'Use only global variables',
        'Use only /tmp',
        'Cannot share'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Opções: 1) ElastiCache para cache de baixa latência, 2) DynamoDB para dados estruturados, 3) S3 para arquivos grandes, 4) EFS para sistema de arquivos compartilhado, 5) Parameter Store/Secrets Manager para configuração. Escolha baseado em latência e tamanho.',
      en: 'Options: 1) ElastiCache for low-latency cache, 2) DynamoDB for structured data, 3) S3 for large files, 4) EFS for shared file system, 5) Parameter Store/Secrets Manager for configuration. Choose based on latency and size.'
    },
    proTip: {
      pt: 'ElastiCache oferece latência sub-milissegundo mas requer VPC.',
      en: 'ElastiCache offers sub-millisecond latency but requires VPC.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'lambda-l4-q8',
    question: {
      pt: 'Como você pode implementar rate limiting em APIs Lambda?',
      en: 'How can you implement rate limiting in Lambda APIs?'
    },
    options: {
      pt: [
        'Usar API Gateway throttling, Reserved Concurrency, e DynamoDB para tracking',
        'Lambda não suporta rate limiting',
        'Apenas com WAF',
        'Apenas com CloudFront'
      ],
      en: [
        'Use API Gateway throttling, Reserved Concurrency, and DynamoDB for tracking',
        'Lambda does not support rate limiting',
        'Only with WAF',
        'Only with CloudFront'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Implemente rate limiting: 1) API Gateway throttling (burst/steady-state), 2) Usage Plans para diferentes clientes, 3) Reserved Concurrency para limitar execuções Lambda, 4) DynamoDB + TTL para tracking por usuário, 5) WAF rate-based rules.',
      en: 'Implement rate limiting: 1) API Gateway throttling (burst/steady-state), 2) Usage Plans for different clients, 3) Reserved Concurrency to limit Lambda executions, 4) DynamoDB + TTL for per-user tracking, 5) WAF rate-based rules.'
    },
    proTip: {
      pt: 'API Gateway oferece 10.000 req/s por conta por região por padrão.',
      en: 'API Gateway offers 10,000 req/s per account per region by default.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'lambda-l4-q9',
    question: {
      pt: 'Como você pode implementar event sourcing com Lambda?',
      en: 'How can you implement event sourcing with Lambda?'
    },
    options: {
      pt: [
        'Usar DynamoDB Streams ou EventBridge para capturar e processar eventos',
        'Não é possível',
        'Apenas com banco de dados relacional',
        'Apenas com Kafka'
      ],
      en: [
        'Use DynamoDB Streams or EventBridge for capturing and processing events',
        'Not possible',
        'Only with relational database',
        'Only with Kafka'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Event sourcing: 1) Armazene eventos em DynamoDB/EventBridge, 2) Use DynamoDB Streams para processar eventos com Lambda, 3) Construa projeções/views em tempo real, 4) Mantenha histórico completo de mudanças, 5) Replay eventos para reconstruir estado.',
      en: 'Event sourcing: 1) Store events in DynamoDB/EventBridge, 2) Use DynamoDB Streams to process events with Lambda, 3) Build real-time projections/views, 4) Maintain complete change history, 5) Replay events to rebuild state.'
    },
    proTip: {
      pt: 'Combine com CQRS pattern: Lambda para commands, DynamoDB Streams para queries.',
      en: 'Combine with CQRS pattern: Lambda for commands, DynamoDB Streams for queries.'
    },
    difficulty: 'expert',
    xpReward: 30
  },
  {
    id: 'lambda-l4-q10',
    question: {
      pt: 'Como você pode implementar observabilidade completa em arquiteturas Lambda?',
      en: 'How can you implement complete observability in Lambda architectures?'
    },
    options: {
      pt: [
        'Usar X-Ray para tracing, CloudWatch para logs/métricas, e Powertools para structured logging',
        'Apenas logs',
        'Apenas métricas',
        'Não é necessário'
      ],
      en: [
        'Use X-Ray for tracing, CloudWatch for logs/metrics, and Powertools for structured logging',
        'Only logs',
        'Only metrics',
        'Not necessary'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Observabilidade completa: 1) X-Ray para distributed tracing, 2) CloudWatch Logs com structured logging (JSON), 3) CloudWatch Metrics e custom metrics, 4) Lambda Insights para métricas de sistema, 5) Powertools for AWS Lambda para logging/tracing/metrics padronizados.',
      en: 'Complete observability: 1) X-Ray for distributed tracing, 2) CloudWatch Logs with structured logging (JSON), 3) CloudWatch Metrics and custom metrics, 4) Lambda Insights for system metrics, 5) Powertools for AWS Lambda for standardized logging/tracing/metrics.'
    },
    proTip: {
      pt: 'Use correlation IDs em todos os logs para rastrear requisições através de serviços.',
      en: 'Use correlation IDs in all logs to track requests across services.'
    },
    difficulty: 'advanced',
    xpReward: 25
  }
];

// ============================================
// EBS - NÍVEL 1: INTRODUÇÃO AO EBS
// ============================================
export const ebsLevel1Questions: Question[] = [
  {
    id: 'ebs-l1-q1',
    question: {
      pt: 'O que é Amazon EBS?',
      en: 'What is Amazon EBS?'
    },
    options: {
      pt: [
        'Serviço de armazenamento em bloco persistente para EC2',
        'Serviço de armazenamento de objetos',
        'Serviço de banco de dados',
        'Serviço de rede'
      ],
      en: [
        'Persistent block storage service for EC2',
        'Object storage service',
        'Database service',
        'Network service'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Amazon EBS (Elastic Block Store) fornece volumes de armazenamento em bloco persistente para instâncias EC2. Funciona como um disco rígido virtual que persiste independentemente da vida da instância.',
      en: 'Amazon EBS (Elastic Block Store) provides persistent block storage volumes for EC2 instances. Works like a virtual hard drive that persists independently of the instance life.'
    },
    proTip: {
      pt: 'EBS volumes são replicados automaticamente dentro da AZ para alta disponibilidade.',
      en: 'EBS volumes are automatically replicated within the AZ for high availability.'
    },
    difficulty: 'beginner',
    xpReward: 10
  },
  {
    id: 'ebs-l1-q2',
    question: {
      pt: 'Qual é a diferença entre EBS e Instance Store?',
      en: 'What is the difference between EBS and Instance Store?'
    },
    options: {
      pt: [
        'EBS é persistente; Instance Store é efêmero',
        'EBS é mais rápido',
        'Instance Store é mais caro',
        'Não há diferença'
      ],
      en: [
        'EBS is persistent; Instance Store is ephemeral',
        'EBS is faster',
        'Instance Store is more expensive',
        'There is no difference'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'EBS é armazenamento persistente que sobrevive a paradas/reinicializações da instância. Instance Store é armazenamento temporário (efêmero) que é perdido quando a instância para ou termina. EBS pode ser anexado/desanexado de instâncias.',
      en: 'EBS is persistent storage that survives instance stops/restarts. Instance Store is temporary (ephemeral) storage that is lost when instance stops or terminates. EBS can be attached/detached from instances.'
    },
    proTip: {
      pt: 'Use EBS para dados que precisam persistir; Instance Store para cache e buffers temporários.',
      en: 'Use EBS for data that needs to persist; Instance Store for cache and temporary buffers.'
    },
    difficulty: 'beginner',
    xpReward: 15
  },
  {
    id: 'ebs-l1-q3',
    question: {
      pt: 'Você pode anexar um volume EBS a múltiplas instâncias EC2 simultaneamente?',
      en: 'Can you attach an EBS volume to multiple EC2 instances simultaneously?'
    },
    options: {
      pt: [
        'Sim, mas apenas com EBS Multi-Attach (io1/io2)',
        'Sim, sempre',
        'Não, nunca',
        'Apenas em instâncias na mesma AZ'
      ],
      en: [
        'Yes, but only with EBS Multi-Attach (io1/io2)',
        'Yes, always',
        'No, never',
        'Only on instances in same AZ'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Por padrão, volumes EBS podem ser anexados a apenas uma instância. EBS Multi-Attach (disponível em io1/io2) permite anexar um volume a até 16 instâncias Nitro na mesma AZ. Útil para aplicações clustered que gerenciam acesso concorrente.',
      en: 'By default, EBS volumes can be attached to only one instance. EBS Multi-Attach (available on io1/io2) allows attaching a volume to up to 16 Nitro instances in the same AZ. Useful for clustered applications that manage concurrent access.'
    },
    proTip: {
      pt: 'Multi-Attach requer aplicação com cluster-aware file system (ex: GFS2, OCFS2).',
      en: 'Multi-Attach requires application with cluster-aware file system (e.g., GFS2, OCFS2).'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ebs-l1-q4',
    question: {
      pt: 'O que acontece com um volume EBS quando você termina uma instância EC2?',
      en: 'What happens to an EBS volume when you terminate an EC2 instance?'
    },
    options: {
      pt: [
        'Depende do atributo DeleteOnTermination (padrão: root deletado, outros preservados)',
        'Sempre é deletado',
        'Sempre é preservado',
        'É movido para S3'
      ],
      en: [
        'Depends on DeleteOnTermination attribute (default: root deleted, others preserved)',
        'Always deleted',
        'Always preserved',
        'Moved to S3'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'O atributo DeleteOnTermination controla o comportamento. Por padrão: volume root é deletado, volumes adicionais são preservados. Você pode modificar esse comportamento ao criar a instância ou modificar o atributo depois.',
      en: 'The DeleteOnTermination attribute controls behavior. By default: root volume is deleted, additional volumes are preserved. You can modify this behavior when creating the instance or modify the attribute later.'
    },
    proTip: {
      pt: 'Sempre faça snapshot de volumes importantes antes de terminar instâncias.',
      en: 'Always snapshot important volumes before terminating instances.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ebs-l1-q5',
    question: {
      pt: 'Volumes EBS são replicados em múltiplas AZs?',
      en: 'Are EBS volumes replicated across multiple AZs?'
    },
    options: {
      pt: [
        'Não, apenas dentro de uma única AZ',
        'Sim, em todas as AZs da região',
        'Sim, em 2 AZs',
        'Depende do tipo de volume'
      ],
      en: [
        'No, only within a single AZ',
        'Yes, across all AZs in region',
        'Yes, across 2 AZs',
        'Depends on volume type'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Volumes EBS são replicados automaticamente dentro de uma única AZ para proteção contra falhas de hardware. Para proteção contra falha de AZ, use snapshots (armazenados no S3 em múltiplas AZs) ou EBS Multi-AZ (io2 Block Express).',
      en: 'EBS volumes are automatically replicated within a single AZ for protection against hardware failures. For AZ failure protection, use snapshots (stored in S3 across multiple AZs) or EBS Multi-AZ (io2 Block Express).'
    },
    proTip: {
      pt: 'Faça snapshots regulares e copie para outras regiões para disaster recovery.',
      en: 'Take regular snapshots and copy to other regions for disaster recovery.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  }
];

// ============================================
// EBS - NÍVEL 2: TIPOS DE VOLUME
// ============================================
export const ebsLevel2Questions: Question[] = [
  {
    id: 'ebs-l2-q1',
    question: {
      pt: 'Quais são os principais tipos de volumes EBS?',
      en: 'What are the main EBS volume types?'
    },
    options: {
      pt: [
        'gp3, gp2 (SSD), io2, io1 (SSD), st1, sc1 (HDD)',
        'Apenas SSD',
        'Apenas HDD',
        'Standard e Premium'
      ],
      en: [
        'gp3, gp2 (SSD), io2, io1 (SSD), st1, sc1 (HDD)',
        'Only SSD',
        'Only HDD',
        'Standard and Premium'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'EBS oferece 6 tipos: SSD (gp3, gp2 para uso geral; io2, io1 para IOPS provisionado) e HDD (st1 para throughput otimizado; sc1 para cold storage). Escolha baseado em performance, custo e workload.',
      en: 'EBS offers 6 types: SSD (gp3, gp2 for general purpose; io2, io1 for provisioned IOPS) and HDD (st1 for throughput optimized; sc1 for cold storage). Choose based on performance, cost, and workload.'
    },
    proTip: {
      pt: 'gp3 é 20% mais barato que gp2 e permite configurar IOPS e throughput independentemente.',
      en: 'gp3 is 20% cheaper than gp2 and allows configuring IOPS and throughput independently.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ebs-l2-q2',
    question: {
      pt: 'Qual tipo de volume EBS oferece a menor latência?',
      en: 'Which EBS volume type offers the lowest latency?'
    },
    options: {
      pt: [
        'io2 Block Express',
        'gp3',
        'st1',
        'sc1'
      ],
      en: [
        'io2 Block Express',
        'gp3',
        'st1',
        'sc1'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'io2 Block Express oferece latência sub-milissegundo e até 256.000 IOPS e 4.000 MB/s de throughput. Ideal para bancos de dados críticos e aplicações que exigem máxima performance. Mais caro que outros tipos.',
      en: 'io2 Block Express offers sub-millisecond latency and up to 256,000 IOPS and 4,000 MB/s throughput. Ideal for critical databases and applications requiring maximum performance. More expensive than other types.'
    },
    proTip: {
      pt: 'io2 Block Express requer instâncias R5b para máxima performance.',
      en: 'io2 Block Express requires R5b instances for maximum performance.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'ebs-l2-q3',
    question: {
      pt: 'Quando você deve usar st1 (Throughput Optimized HDD)?',
      en: 'When should you use st1 (Throughput Optimized HDD)?'
    },
    options: {
      pt: [
        'Para workloads sequenciais de alto throughput como big data, data warehouses, log processing',
        'Para bancos de dados transacionais',
        'Para boot volumes',
        'Para aplicações de baixa latência'
      ],
      en: [
        'For high-throughput sequential workloads like big data, data warehouses, log processing',
        'For transactional databases',
        'For boot volumes',
        'For low-latency applications'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'st1 é otimizado para workloads sequenciais de alto throughput (até 500 MB/s). Mais barato que SSD. Ideal para: big data, data warehouses, log processing, streaming. Não pode ser usado como boot volume.',
      en: 'st1 is optimized for high-throughput sequential workloads (up to 500 MB/s). Cheaper than SSD. Ideal for: big data, data warehouses, log processing, streaming. Cannot be used as boot volume.'
    },
    proTip: {
      pt: 'st1 custa ~50% menos que gp3 para mesma capacidade.',
      en: 'st1 costs ~50% less than gp3 for same capacity.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ebs-l2-q4',
    question: {
      pt: 'Qual é a diferença entre gp2 e gp3?',
      en: 'What is the difference between gp2 and gp3?'
    },
    options: {
      pt: [
        'gp3 permite configurar IOPS e throughput independentemente do tamanho',
        'gp2 é mais rápido',
        'gp3 é mais caro',
        'Não há diferença'
      ],
      en: [
        'gp3 allows configuring IOPS and throughput independently of size',
        'gp2 is faster',
        'gp3 is more expensive',
        'There is no difference'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'gp3 oferece baseline de 3.000 IOPS e 125 MB/s independente do tamanho, configuráveis até 16.000 IOPS e 1.000 MB/s. gp2 escala IOPS com tamanho (3 IOPS/GB). gp3 é 20% mais barato e mais previsível.',
      en: 'gp3 offers baseline of 3,000 IOPS and 125 MB/s independent of size, configurable up to 16,000 IOPS and 1,000 MB/s. gp2 scales IOPS with size (3 IOPS/GB). gp3 is 20% cheaper and more predictable.'
    },
    proTip: {
      pt: 'Migre de gp2 para gp3 para economizar custos sem downtime.',
      en: 'Migrate from gp2 to gp3 to save costs without downtime.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ebs-l2-q5',
    question: {
      pt: 'Qual tipo de volume você deve usar para boot volume de EC2?',
      en: 'Which volume type should you use for EC2 boot volume?'
    },
    options: {
      pt: [
        'gp3 ou gp2 (SSD)',
        'st1 (HDD)',
        'sc1 (HDD)',
        'Qualquer tipo'
      ],
      en: [
        'gp3 or gp2 (SSD)',
        'st1 (HDD)',
        'sc1 (HDD)',
        'Any type'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Boot volumes devem ser SSD (gp3, gp2, io2, io1). HDD (st1, sc1) não podem ser usados como boot volumes. gp3 oferece melhor custo-benefício para maioria dos casos. Use io2 para aplicações críticas.',
      en: 'Boot volumes must be SSD (gp3, gp2, io2, io1). HDD (st1, sc1) cannot be used as boot volumes. gp3 offers best cost-benefit for most cases. Use io2 for critical applications.'
    },
    difficulty: 'beginner',
    xpReward: 15
  },
  {
    id: 'ebs-l2-q6',
    question: {
      pt: 'O que é IOPS e por que é importante?',
      en: 'What is IOPS and why is it important?'
    },
    options: {
      pt: [
        'Input/Output Operations Per Second - mede performance de I/O aleatório',
        'Internet Operations Per Second',
        'Instance Operations Per Second',
        'Internal Operations Per Second'
      ],
      en: [
        'Input/Output Operations Per Second - measures random I/O performance',
        'Internet Operations Per Second',
        'Instance Operations Per Second',
        'Internal Operations Per Second'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'IOPS mede quantas operações de leitura/escrita o volume pode realizar por segundo. Crítico para bancos de dados e aplicações transacionais. SSD oferece alto IOPS (até 256k). HDD oferece alto throughput mas baixo IOPS.',
      en: 'IOPS measures how many read/write operations the volume can perform per second. Critical for databases and transactional applications. SSD offers high IOPS (up to 256k). HDD offers high throughput but low IOPS.'
    },
    proTip: {
      pt: 'Use CloudWatch para monitorar IOPS e identificar se precisa de volume maior ou tipo diferente.',
      en: 'Use CloudWatch to monitor IOPS and identify if you need larger volume or different type.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ebs-l2-q7',
    question: {
      pt: 'Qual é o tamanho máximo de um volume EBS?',
      en: 'What is the maximum size of an EBS volume?'
    },
    options: {
      pt: [
        '64 TiB (io2 Block Express)',
        '16 TiB',
        '1 TiB',
        '100 TiB'
      ],
      en: [
        '64 TiB (io2 Block Express)',
        '16 TiB',
        '1 TiB',
        '100 TiB'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'io2 Block Express suporta até 64 TiB. Outros tipos (gp3, gp2, io2, io1, st1, sc1) suportam até 16 TiB. Você pode anexar múltiplos volumes a uma instância para mais capacidade.',
      en: 'io2 Block Express supports up to 64 TiB. Other types (gp3, gp2, io2, io1, st1, sc1) support up to 16 TiB. You can attach multiple volumes to an instance for more capacity.'
    },
    difficulty: 'beginner',
    xpReward: 15
  },
  {
    id: 'ebs-l2-q8',
    question: {
      pt: 'Como você pode modificar um volume EBS sem downtime?',
      en: 'How can you modify an EBS volume without downtime?'
    },
    options: {
      pt: [
        'Usar Elastic Volumes para modificar tipo, tamanho, IOPS e throughput',
        'Não é possível sem downtime',
        'Apenas criar novo volume',
        'Apenas com snapshot'
      ],
      en: [
        'Use Elastic Volumes to modify type, size, IOPS, and throughput',
        'Not possible without downtime',
        'Only create new volume',
        'Only with snapshot'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Elastic Volumes permite modificar tipo, tamanho, IOPS e throughput de volumes EBS sem downtime. Mudanças ocorrem em background. Após modificação, pode precisar estender file system. Limitações: uma modificação a cada 6 horas.',
      en: 'Elastic Volumes allows modifying type, size, IOPS, and throughput of EBS volumes without downtime. Changes occur in background. After modification, may need to extend file system. Limitations: one modification every 6 hours.'
    },
    proTip: {
      pt: 'Sempre faça snapshot antes de modificações importantes.',
      en: 'Always snapshot before important modifications.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'ebs-l2-q9',
    question: {
      pt: 'Qual tipo de volume oferece melhor custo para dados acessados raramente?',
      en: 'Which volume type offers best cost for rarely accessed data?'
    },
    options: {
      pt: [
        'sc1 (Cold HDD)',
        'gp3',
        'io2',
        'st1'
      ],
      en: [
        'sc1 (Cold HDD)',
        'gp3',
        'io2',
        'st1'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'sc1 (Cold HDD) é o tipo mais barato (~$0.015/GB/mês), ideal para dados acessados raramente. Oferece até 250 MB/s. Casos de uso: backups, arquivos, dados frios. Não pode ser boot volume.',
      en: 'sc1 (Cold HDD) is the cheapest type (~$0.015/GB/month), ideal for rarely accessed data. Offers up to 250 MB/s. Use cases: backups, archives, cold data. Cannot be boot volume.'
    },
    proTip: {
      pt: 'Para dados muito raramente acessados, considere S3 Glacier ao invés de EBS.',
      en: 'For very rarely accessed data, consider S3 Glacier instead of EBS.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ebs-l2-q10',
    question: {
      pt: 'O que é EBS-optimized instance?',
      en: 'What is an EBS-optimized instance?'
    },
    options: {
      pt: [
        'Instância com largura de banda dedicada para EBS, melhorando performance',
        'Instância mais barata',
        'Instância com mais memória',
        'Instância com mais CPU'
      ],
      en: [
        'Instance with dedicated bandwidth for EBS, improving performance',
        'Cheaper instance',
        'Instance with more memory',
        'Instance with more CPU'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'EBS-optimized instances têm largura de banda dedicada para EBS, separada do tráfego de rede. Melhora performance e consistência de I/O. Maioria das instâncias modernas são EBS-optimized por padrão sem custo adicional.',
      en: 'EBS-optimized instances have dedicated bandwidth for EBS, separate from network traffic. Improves I/O performance and consistency. Most modern instances are EBS-optimized by default at no additional cost.'
    },
    proTip: {
      pt: 'Sempre use EBS-optimized para workloads I/O intensive.',
      en: 'Always use EBS-optimized for I/O intensive workloads.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  }
];

// ============================================
// EBS - NÍVEL 3: SNAPSHOTS E BACKUP
// ============================================
export const ebsLevel3Questions: Question[] = [
  {
    id: 'ebs-l3-q1',
    question: {
      pt: 'O que são EBS Snapshots?',
      en: 'What are EBS Snapshots?'
    },
    options: {
      pt: [
        'Backups incrementais de volumes EBS armazenados no S3',
        'Cópias completas de volumes',
        'Backups locais',
        'Apenas metadados'
      ],
      en: [
        'Incremental backups of EBS volumes stored in S3',
        'Full volume copies',
        'Local backups',
        'Only metadata'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Snapshots são backups incrementais: primeiro snapshot copia todos os dados, subsequentes copiam apenas blocos modificados. Armazenados no S3 (durabilidade 99.999999999%). Podem ser usados para criar novos volumes ou copiar entre regiões/AZs.',
      en: 'Snapshots are incremental backups: first snapshot copies all data, subsequent ones copy only modified blocks. Stored in S3 (99.999999999% durability). Can be used to create new volumes or copy between regions/AZs.'
    },
    proTip: {
      pt: 'Snapshots são cobrados apenas pelos dados únicos armazenados.',
      en: 'Snapshots are charged only for unique data stored.'
    },
    difficulty: 'beginner',
    xpReward: 15
  },
  {
    id: 'ebs-l3-q2',
    question: {
      pt: 'Você precisa parar a instância para criar um snapshot?',
      en: 'Do you need to stop the instance to create a snapshot?'
    },
    options: {
      pt: [
        'Não, mas é recomendado para consistência de dados',
        'Sim, sempre',
        'Apenas para boot volumes',
        'Apenas para volumes grandes'
      ],
      en: [
        'No, but recommended for data consistency',
        'Yes, always',
        'Only for boot volumes',
        'Only for large volumes'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Você pode criar snapshots de volumes em uso, mas para garantir consistência (especialmente para bancos de dados), é recomendado: pausar escritas, fazer flush de cache, ou parar a instância. Para aplicações que gerenciam consistência, pode fazer snapshot online.',
      en: 'You can create snapshots of in-use volumes, but to ensure consistency (especially for databases), it\'s recommended to: pause writes, flush cache, or stop instance. For applications that manage consistency, can snapshot online.'
    },
    proTip: {
      pt: 'Use AWS Backup ou Data Lifecycle Manager para snapshots automatizados e consistentes.',
      en: 'Use AWS Backup or Data Lifecycle Manager for automated and consistent snapshots.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ebs-l3-q3',
    question: {
      pt: 'Como você pode copiar um snapshot para outra região?',
      en: 'How can you copy a snapshot to another region?'
    },
    options: {
      pt: [
        'Usar ação Copy Snapshot no console ou API',
        'Não é possível copiar entre regiões',
        'Apenas com AWS CLI',
        'Apenas com terceiros'
      ],
      en: [
        'Use Copy Snapshot action in console or API',
        'Cannot copy between regions',
        'Only with AWS CLI',
        'Only with third-party'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Use Copy Snapshot para copiar snapshots entre regiões para disaster recovery. Você pode criptografar durante a cópia (mesmo se original não criptografado). Útil para: DR, migração de dados, conformidade multi-região.',
      en: 'Use Copy Snapshot to copy snapshots between regions for disaster recovery. You can encrypt during copy (even if original not encrypted). Useful for: DR, data migration, multi-region compliance.'
    },
    proTip: {
      pt: 'Automatize cópias cross-region com Data Lifecycle Manager ou AWS Backup.',
      en: 'Automate cross-region copies with Data Lifecycle Manager or AWS Backup.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ebs-l3-q4',
    question: {
      pt: 'O que é EBS Snapshot Archive?',
      en: 'What is EBS Snapshot Archive?'
    },
    options: {
      pt: [
        'Tier de armazenamento 75% mais barato para snapshots raramente acessados',
        'Backup automático',
        'Snapshot criptografado',
        'Snapshot comprimido'
      ],
      en: [
        'Storage tier 75% cheaper for rarely accessed snapshots',
        'Automatic backup',
        'Encrypted snapshot',
        'Compressed snapshot'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Snapshot Archive é tier de armazenamento 75% mais barato para snapshots acessados raramente (90+ dias de retenção). Restauração leva 24-72 horas. Ideal para conformidade e retenção de longo prazo. Mínimo 90 dias de armazenamento.',
      en: 'Snapshot Archive is storage tier 75% cheaper for rarely accessed snapshots (90+ days retention). Restoration takes 24-72 hours. Ideal for compliance and long-term retention. Minimum 90 days storage.'
    },
    proTip: {
      pt: 'Use Archive para snapshots de conformidade que raramente precisam ser restaurados.',
      en: 'Use Archive for compliance snapshots that rarely need restoration.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'ebs-l3-q5',
    question: {
      pt: 'O que é Fast Snapshot Restore (FSR)?',
      en: 'What is Fast Snapshot Restore (FSR)?'
    },
    options: {
      pt: [
        'Elimina latência de inicialização ao criar volumes de snapshots',
        'Cria snapshots mais rápido',
        'Deleta snapshots mais rápido',
        'Copia snapshots mais rápido'
      ],
      en: [
        'Eliminates initialization latency when creating volumes from snapshots',
        'Creates snapshots faster',
        'Deletes snapshots faster',
        'Copies snapshots faster'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'FSR elimina a latência de inicialização ao criar volumes de snapshots. Normalmente, volumes criados de snapshots têm performance reduzida até todos os blocos serem lidos. FSR fornece performance total imediatamente. Cobra por snapshot-hora por AZ habilitada.',
      en: 'FSR eliminates initialization latency when creating volumes from snapshots. Normally, volumes created from snapshots have reduced performance until all blocks are read. FSR provides full performance immediately. Charges per snapshot-hour per enabled AZ.'
    },
    proTip: {
      pt: 'Use FSR para DR e scale-out rápido, mas tem custo adicional significativo.',
      en: 'Use FSR for DR and fast scale-out, but has significant additional cost.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'ebs-l3-q6',
    question: {
      pt: 'Como você pode automatizar snapshots de EBS?',
      en: 'How can you automate EBS snapshots?'
    },
    options: {
      pt: [
        'Usar Data Lifecycle Manager (DLM) ou AWS Backup',
        'Apenas manualmente',
        'Apenas com scripts',
        'Não é possível automatizar'
      ],
      en: [
        'Use Data Lifecycle Manager (DLM) or AWS Backup',
        'Only manually',
        'Only with scripts',
        'Cannot automate'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Use Data Lifecycle Manager para políticas de snapshot automatizadas baseadas em tags. AWS Backup oferece gerenciamento centralizado de backup cross-service. Ambos suportam: schedule, retenção, cópia cross-region, tags automáticas.',
      en: 'Use Data Lifecycle Manager for automated snapshot policies based on tags. AWS Backup offers centralized cross-service backup management. Both support: schedule, retention, cross-region copy, automatic tags.'
    },
    proTip: {
      pt: 'AWS Backup oferece mais recursos (cross-service, vault lock) mas DLM é mais simples para apenas EBS.',
      en: 'AWS Backup offers more features (cross-service, vault lock) but DLM is simpler for EBS only.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ebs-l3-q7',
    question: {
      pt: 'Você pode compartilhar snapshots com outras contas AWS?',
      en: 'Can you share snapshots with other AWS accounts?'
    },
    options: {
      pt: [
        'Sim, modificando permissões do snapshot',
        'Não, nunca',
        'Apenas dentro da mesma organização',
        'Apenas snapshots públicos'
      ],
      en: [
        'Yes, by modifying snapshot permissions',
        'No, never',
        'Only within same organization',
        'Only public snapshots'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Você pode compartilhar snapshots não criptografados ou criptografados com CMK (não com AWS managed key) com contas específicas ou torná-los públicos. Útil para: compartilhar AMIs, migração entre contas, distribuição de dados.',
      en: 'You can share unencrypted or CMK-encrypted snapshots (not with AWS managed key) with specific accounts or make them public. Useful for: sharing AMIs, cross-account migration, data distribution.'
    },
    proTip: {
      pt: 'Para snapshots criptografados, também compartilhe a KMS key com a conta destino.',
      en: 'For encrypted snapshots, also share the KMS key with destination account.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'ebs-l3-q8',
    question: {
      pt: 'O que acontece se você deletar um snapshot que tem snapshots dependentes?',
      en: 'What happens if you delete a snapshot that has dependent snapshots?'
    },
    options: {
      pt: [
        'Apenas dados únicos são deletados; snapshots dependentes permanecem funcionais',
        'Todos os snapshots dependentes são deletados',
        'Operação falha',
        'Snapshots dependentes ficam corrompidos'
      ],
      en: [
        'Only unique data is deleted; dependent snapshots remain functional',
        'All dependent snapshots are deleted',
        'Operation fails',
        'Dependent snapshots become corrupted'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Snapshots são incrementais mas independentes. Ao deletar um snapshot, apenas dados únicos (não referenciados por outros snapshots) são removidos. Snapshots subsequentes permanecem funcionais. AWS gerencia referências automaticamente.',
      en: 'Snapshots are incremental but independent. When deleting a snapshot, only unique data (not referenced by other snapshots) is removed. Subsequent snapshots remain functional. AWS manages references automatically.'
    },
    proTip: {
      pt: 'Você pode deletar qualquer snapshot sem afetar outros - AWS consolida dados automaticamente.',
      en: 'You can delete any snapshot without affecting others - AWS consolidates data automatically.'
    },
    difficulty: 'advanced',
    xpReward: 25
  },
  {
    id: 'ebs-l3-q9',
    question: {
      pt: 'Como você pode criptografar um volume EBS existente não criptografado?',
      en: 'How can you encrypt an existing unencrypted EBS volume?'
    },
    options: {
      pt: [
        'Criar snapshot, copiar com criptografia, criar volume do snapshot criptografado',
        'Habilitar criptografia diretamente',
        'Não é possível criptografar volume existente',
        'Apenas com terceiros'
      ],
      en: [
        'Create snapshot, copy with encryption, create volume from encrypted snapshot',
        'Enable encryption directly',
        'Cannot encrypt existing volume',
        'Only with third-party'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Para criptografar volume existente: 1) Crie snapshot do volume, 2) Copie snapshot habilitando criptografia, 3) Crie novo volume do snapshot criptografado, 4) Anexe à instância. Ou use "Encryption by default" para novos volumes.',
      en: 'To encrypt existing volume: 1) Create snapshot of volume, 2) Copy snapshot enabling encryption, 3) Create new volume from encrypted snapshot, 4) Attach to instance. Or use "Encryption by default" for new volumes.'
    },
    proTip: {
      pt: 'Habilite "Encryption by default" para garantir que todos os novos volumes sejam criptografados.',
      en: 'Enable "Encryption by default" to ensure all new volumes are encrypted.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  },
  {
    id: 'ebs-l3-q10',
    question: {
      pt: 'O que é Recycle Bin for EBS Snapshots?',
      en: 'What is Recycle Bin for EBS Snapshots?'
    },
    options: {
      pt: [
        'Retém snapshots deletados por período configurável para recuperação',
        'Comprime snapshots antigos',
        'Deleta snapshots automaticamente',
        'Backup automático'
      ],
      en: [
        'Retains deleted snapshots for configurable period for recovery',
        'Compresses old snapshots',
        'Automatically deletes snapshots',
        'Automatic backup'
      ]
    },
    correctAnswer: 0,
    explanation: {
      pt: 'Recycle Bin retém snapshots deletados por período configurável (1 dia - 1 ano) para proteção contra deleção acidental. Você pode recuperar snapshots da Recycle Bin antes do período expirar. Configure regras baseadas em tags.',
      en: 'Recycle Bin retains deleted snapshots for configurable period (1 day - 1 year) for protection against accidental deletion. You can recover snapshots from Recycle Bin before period expires. Configure rules based on tags.'
    },
    proTip: {
      pt: 'Recycle Bin não tem custo adicional além do armazenamento normal de snapshots.',
      en: 'Recycle Bin has no additional cost beyond normal snapshot storage.'
    },
    difficulty: 'intermediate',
    xpReward: 20
  }
];

// ============================================
// MAPA DE QUESTÕES POR CURSO E NÍVEL
// ============================================
export const questionsByLevel: Record<string, Question[]> = {
  'ec2-level-1': ec2Level1Questions,
  'ec2-level-2': ec2Level2Questions,
  'ec2-level-3': ec2Level3Questions,
  'ec2-level-4': ec2Level4Questions,
  'ec2-level-5': ec2Level5Questions,
  's3-level-1': s3Level1Questions,
  's3-level-2': s3Level2Questions,
  's3-level-3': s3Level3Questions,
  's3-level-4': s3Level4Questions,
  's3-level-5': s3Level5Questions,
  'lambda-level-1': lambdaLevel1Questions,
  'lambda-level-2': lambdaLevel2Questions,
  'lambda-level-3': lambdaLevel3Questions,
  'lambda-level-4': lambdaLevel4Questions,
  'ebs-level-1': ebsLevel1Questions,
  'ebs-level-2': ebsLevel2Questions,
  'ebs-level-3': ebsLevel3Questions
};
