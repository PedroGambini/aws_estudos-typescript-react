export interface Flashcard {
  id: string;
  category: string;
  question: string;
  answer: string;
  wrongAnswer?: string;
  proTip?: string;
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
    question: "What is the difference between EC2 On-Demand, Reserved, and Spot instances?",
    answer: "On-Demand: pay per hour/second, no commitment. Reserved: 1-3 year commitment for up to 75% discount. Spot: bid on unused capacity for up to 90% discount, but can be terminated.",
    wrongAnswer: "On-Demand: requires 1-year commitment. Reserved: pay per hour with no commitment. Spot: guaranteed availability with fixed pricing.",
    proTip: "For the exam, remember: Spot instances are ideal for fault-tolerant, stateless workloads.",
  },
  {
    id: "2",
    category: "compute",
    question: "What is AWS Lambda and what are its key limits?",
    answer: "Lambda is a serverless compute service that runs code in response to events. Key limits: 15 min timeout, 10GB memory, 512MB /tmp storage, 1000 concurrent executions (soft limit).",
    wrongAnswer: "Lambda is a container orchestration service. Key limits: 60 min timeout, 128GB memory, 10GB /tmp storage, unlimited concurrent executions.",
    codeSnippet: "aws lambda invoke --function-name myFunc output.json",
  },
  {
    id: "3",
    category: "storage",
    question: "What are the S3 storage classes and when to use each?",
    answer: "Standard (frequent access), IA (infrequent, min 30 days), One Zone-IA (non-critical), Glacier Instant/Flexible/Deep Archive (archival). Use Lifecycle Policies to automate transitions.",
    wrongAnswer: "Standard (archival), IA (frequent access, min 7 days), One Zone-IA (critical data), Glacier (real-time access). Manual transitions only.",
    proTip: "Glacier Deep Archive is the cheapest but retrieval takes 12-48 hours.",
  },
  {
    id: "4",
    category: "database",
    question: "What is Amazon DynamoDB and what are its key features?",
    answer: "DynamoDB is a fully managed NoSQL database. Key features: single-digit ms latency, auto-scaling, global tables, DAX caching, streams for event-driven architectures.",
    wrongAnswer: "DynamoDB is a relational SQL database. Key features: minute-level latency, manual scaling, single-region only, no caching support, batch processing only.",
    proTip: "DynamoDB uses partition key + optional sort key. Design your keys around access patterns.",
  },
  {
    id: "5",
    category: "security",
    question: "What is the AWS Shared Responsibility Model?",
    answer: "AWS is responsible for security OF the cloud (hardware, software, networking, facilities). Customer is responsible for security IN the cloud (data, IAM, OS patching, encryption, firewall).",
    wrongAnswer: "AWS is responsible for all security including customer data, IAM, and application security. Customer is only responsible for choosing services.",
    proTip: "This concept appears in almost every AWS certification exam.",
  },
  {
    id: "6",
    category: "security",
    question: "What is the difference between Security Groups and NACLs?",
    answer: "Security Groups: stateful, instance-level, allow rules only. NACLs: stateless, subnet-level, allow and deny rules. SGs are evaluated as a whole; NACLs are evaluated in order.",
    wrongAnswer: "Security Groups: stateless, subnet-level, allow and deny rules. NACLs: stateful, instance-level, allow rules only. Both evaluated in order.",
  },
  {
    id: "7",
    category: "storage",
    question: "What is Amazon EBS and its volume types?",
    answer: "EBS provides block storage for EC2. Types: gp3/gp2 (general SSD), io2/io1 (provisioned IOPS SSD), st1 (throughput HDD), sc1 (cold HDD). EBS volumes are AZ-specific.",
    wrongAnswer: "EBS provides object storage for S3. Types: gp3/gp2 (HDD only), io2/io1 (magnetic tape), st1 (SSD), sc1 (NVMe). EBS volumes are region-wide.",
    codeSnippet: "aws ec2 create-volume --volume-type gp3 --size 100 --availability-zone us-east-1a",
  },
  {
    id: "8",
    category: "compute",
    question: "What is an Auto Scaling Group and what are its key components?",
    answer: "ASG automatically adjusts EC2 instance count. Components: Launch Template (instance config), Scaling Policies (when to scale), Min/Max/Desired capacity, Health Checks.",
    wrongAnswer: "ASG manually adjusts Lambda function memory. Components: Function Template, Timeout Policies, Fixed capacity only, No health checks available.",
  },
];
