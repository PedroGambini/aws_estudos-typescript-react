export interface Flashcard {
  id: string;
  category: string;
  question: {
    pt: string;
    en: string;
  };
  answer: {
    pt: string;
    en: string;
  };
  wrongAnswer?: {
    pt: string;
    en: string;
  };
  proTip?: {
    pt: string;
    en: string;
  };
  codeSnippet?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  totalCards: number;
  completedCards: number;
}

// Re-export types from centralized location
export type { Flashcard as FlashcardType, Category as CategoryType } from '@/types';

export const categories: Category[] = [
  { id: "compute", name: "Compute", icon: "Server", totalCards: 42, completedCards: 18 },
  { id: "storage", name: "Storage", icon: "HardDrive", totalCards: 35, completedCards: 12 },
  { id: "database", name: "Database", icon: "Database", totalCards: 28, completedCards: 8 },
  { id: "security", name: "Security", icon: "Shield", totalCards: 38, completedCards: 22 },
];

export const flashcards: Flashcard[] = [
  {
    id: "1",
    category: "compute",
    question: {
      pt: "Qual é a diferença entre instâncias EC2 On-Demand, Reserved e Spot?",
      en: "What is the difference between EC2 On-Demand, Reserved, and Spot instances?"
    },
    answer: {
      pt: "On-Demand: pague por hora/segundo, sem compromisso. Reserved: compromisso de 1-3 anos com até 75% de desconto. Spot: lance em capacidade não utilizada com até 90% de desconto, mas pode ser encerrada.",
      en: "On-Demand: pay per hour/second, no commitment. Reserved: 1-3 year commitment for up to 75% discount. Spot: bid on unused capacity for up to 90% discount, but can be terminated."
    },
    wrongAnswer: {
      pt: "On-Demand: requer compromisso de 1 ano. Reserved: pague por hora sem compromisso. Spot: disponibilidade garantida com preço fixo.",
      en: "On-Demand: requires 1-year commitment. Reserved: pay per hour with no commitment. Spot: guaranteed availability with fixed pricing."
    },
    proTip: {
      pt: "Para o exame, lembre-se: instâncias Spot são ideais para cargas de trabalho tolerantes a falhas e sem estado.",
      en: "For the exam, remember: Spot instances are ideal for fault-tolerant, stateless workloads."
    },
  },
  {
    id: "2",
    category: "compute",
    question: {
      pt: "O que é AWS Lambda e quais são seus limites principais?",
      en: "What is AWS Lambda and what are its key limits?"
    },
    answer: {
      pt: "Lambda é um serviço de computação serverless que executa código em resposta a eventos. Limites principais: timeout de 15 min, 10GB de memória, 512MB de armazenamento /tmp, 1000 execuções simultâneas (limite flexível).",
      en: "Lambda is a serverless compute service that runs code in response to events. Key limits: 15 min timeout, 10GB memory, 512MB /tmp storage, 1000 concurrent executions (soft limit)."
    },
    wrongAnswer: {
      pt: "Lambda é um serviço de orquestração de contêineres. Limites principais: timeout de 60 min, 128GB de memória, 10GB de armazenamento /tmp, execuções simultâneas ilimitadas.",
      en: "Lambda is a container orchestration service. Key limits: 60 min timeout, 128GB memory, 10GB /tmp storage, unlimited concurrent executions."
    },
    codeSnippet: "aws lambda invoke --function-name myFunc output.json",
  },
  {
    id: "3",
    category: "storage",
    question: {
      pt: "Quais são as classes de armazenamento do S3 e quando usar cada uma?",
      en: "What are the S3 storage classes and when to use each?"
    },
    answer: {
      pt: "Standard (acesso frequente), IA (acesso infrequente, mín 30 dias), One Zone-IA (não crítico), Glacier Instant/Flexible/Deep Archive (arquivamento). Use Políticas de Ciclo de Vida para automatizar transições.",
      en: "Standard (frequent access), IA (infrequent, min 30 days), One Zone-IA (non-critical), Glacier Instant/Flexible/Deep Archive (archival). Use Lifecycle Policies to automate transitions."
    },
    wrongAnswer: {
      pt: "Standard (arquivamento), IA (acesso frequente, mín 7 dias), One Zone-IA (dados críticos), Glacier (acesso em tempo real). Apenas transições manuais.",
      en: "Standard (archival), IA (frequent access, min 7 days), One Zone-IA (critical data), Glacier (real-time access). Manual transitions only."
    },
    proTip: {
      pt: "Glacier Deep Archive é o mais barato, mas a recuperação leva 12-48 horas.",
      en: "Glacier Deep Archive is the cheapest but retrieval takes 12-48 hours."
    },
  },
  {
    id: "4",
    category: "database",
    question: {
      pt: "O que é Amazon DynamoDB e quais são suas principais características?",
      en: "What is Amazon DynamoDB and what are its key features?"
    },
    answer: {
      pt: "DynamoDB é um banco de dados NoSQL totalmente gerenciado. Características principais: latência de milissegundos, auto-scaling, tabelas globais, cache DAX, streams para arquiteturas orientadas a eventos.",
      en: "DynamoDB is a fully managed NoSQL database. Key features: single-digit ms latency, auto-scaling, global tables, DAX caching, streams for event-driven architectures."
    },
    wrongAnswer: {
      pt: "DynamoDB é um banco de dados SQL relacional. Características principais: latência de minutos, escalonamento manual, apenas região única, sem suporte a cache, apenas processamento em lote.",
      en: "DynamoDB is a relational SQL database. Key features: minute-level latency, manual scaling, single-region only, no caching support, batch processing only."
    },
    proTip: {
      pt: "DynamoDB usa chave de partição + chave de ordenação opcional. Projete suas chaves com base nos padrões de acesso.",
      en: "DynamoDB uses partition key + optional sort key. Design your keys around access patterns."
    },
  },
  {
    id: "5",
    category: "security",
    question: {
      pt: "O que é o Modelo de Responsabilidade Compartilhada da AWS?",
      en: "What is the AWS Shared Responsibility Model?"
    },
    answer: {
      pt: "A AWS é responsável pela segurança DA nuvem (hardware, software, rede, instalações). O cliente é responsável pela segurança NA nuvem (dados, IAM, patches do SO, criptografia, firewall).",
      en: "AWS is responsible for security OF the cloud (hardware, software, networking, facilities). Customer is responsible for security IN the cloud (data, IAM, OS patching, encryption, firewall)."
    },
    wrongAnswer: {
      pt: "A AWS é responsável por toda a segurança, incluindo dados do cliente, IAM e segurança de aplicações. O cliente é responsável apenas por escolher os serviços.",
      en: "AWS is responsible for all security including customer data, IAM, and application security. Customer is only responsible for choosing services."
    },
    proTip: {
      pt: "Este conceito aparece em quase todos os exames de certificação AWS.",
      en: "This concept appears in almost every AWS certification exam."
    },
  },
  {
    id: "6",
    category: "security",
    question: {
      pt: "Qual é a diferença entre Security Groups e NACLs?",
      en: "What is the difference between Security Groups and NACLs?"
    },
    answer: {
      pt: "Security Groups: stateful, nível de instância, apenas regras de permissão. NACLs: stateless, nível de sub-rede, regras de permissão e negação. SGs são avaliados como um todo; NACLs são avaliados em ordem.",
      en: "Security Groups: stateful, instance-level, allow rules only. NACLs: stateless, subnet-level, allow and deny rules. SGs are evaluated as a whole; NACLs are evaluated in order."
    },
    wrongAnswer: {
      pt: "Security Groups: stateless, nível de sub-rede, regras de permissão e negação. NACLs: stateful, nível de instância, apenas regras de permissão. Ambos avaliados em ordem.",
      en: "Security Groups: stateless, subnet-level, allow and deny rules. NACLs: stateful, instance-level, allow rules only. Both evaluated in order."
    },
  },
  {
    id: "7",
    category: "storage",
    question: {
      pt: "O que é Amazon EBS e quais são seus tipos de volume?",
      en: "What is Amazon EBS and its volume types?"
    },
    answer: {
      pt: "EBS fornece armazenamento em bloco para EC2. Tipos: gp3/gp2 (SSD geral), io2/io1 (SSD IOPS provisionado), st1 (HDD throughput), sc1 (HDD frio). Volumes EBS são específicos de AZ.",
      en: "EBS provides block storage for EC2. Types: gp3/gp2 (general SSD), io2/io1 (provisioned IOPS SSD), st1 (throughput HDD), sc1 (cold HDD). EBS volumes are AZ-specific."
    },
    wrongAnswer: {
      pt: "EBS fornece armazenamento de objetos para S3. Tipos: gp3/gp2 (apenas HDD), io2/io1 (fita magnética), st1 (SSD), sc1 (NVMe). Volumes EBS são regionais.",
      en: "EBS provides object storage for S3. Types: gp3/gp2 (HDD only), io2/io1 (magnetic tape), st1 (SSD), sc1 (NVMe). EBS volumes are region-wide."
    },
    codeSnippet: "aws ec2 create-volume --volume-type gp3 --size 100 --availability-zone us-east-1a",
  },
  {
    id: "8",
    category: "compute",
    question: {
      pt: "O que é um Auto Scaling Group e quais são seus componentes principais?",
      en: "What is an Auto Scaling Group and what are its key components?"
    },
    answer: {
      pt: "ASG ajusta automaticamente a quantidade de instâncias EC2. Componentes: Launch Template (config da instância), Políticas de Escalonamento (quando escalar), Capacidade Mín/Máx/Desejada, Health Checks.",
      en: "ASG automatically adjusts EC2 instance count. Components: Launch Template (instance config), Scaling Policies (when to scale), Min/Max/Desired capacity, Health Checks."
    },
    wrongAnswer: {
      pt: "ASG ajusta manualmente a memória de funções Lambda. Componentes: Function Template, Políticas de Timeout, Apenas capacidade fixa, Sem health checks disponíveis.",
      en: "ASG manually adjusts Lambda function memory. Components: Function Template, Timeout Policies, Fixed capacity only, No health checks available."
    },
  },
];
