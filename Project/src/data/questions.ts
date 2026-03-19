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

// Mapa de questões por curso e nível
export const questionsByLevel: Record<string, Question[]> = {
  'ec2-level-1': ec2Level1Questions,
  's3-level-1': s3Level1Questions,
  'lambda-level-1': lambdaLevel1Questions
};
