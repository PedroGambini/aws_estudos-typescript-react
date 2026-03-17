# aws_estudos-typescript-react

🗂️ AWS Flashcards App
Uma aplicação web interativa desenvolvida com Next.js e TypeScript para auxiliar no estudo e memorização de conceitos para as certificações da Amazon Web Services (AWS).

🎯 O Projeto
O foco desta aplicação é oferecer uma interface fluida para que estudantes de cloud possam revisar serviços (EC2, S3, RDS, Lambda, etc.) através de flashcards categorizados, utilizando o poder da renderização do Next.js e a tipagem forte do TypeScript.

🛠️ Tech Stack
Framework: Next.js 14/15 (App Router)

Linguagem: TypeScript

Estilização: Tailwind CSS

Gerenciamento de Estado: React Context API / TanStack Query (opcional)

Infraestrutura & Deploy (AWS):

AWS Amplify: Para CI/CD e hospedagem simplificada.

ou AWS App Runner: Para rodar o container da aplicação.

Amazon DynamoDB: Para persistência dos cards (NoSQL).

🚀 Funcionalidades
[x] Interface Responsiva (Mobile First).

[x] Filtros por pilares do AWS Well-Architected Framework.

[x] Modo de estudo com "flip cards" animados.

[ ] Integração com banco de dados para salvar progresso.

[ ] Autenticação de usuário (AWS Cognito).

☁️ Estratégia de Deploy na AWS
A aplicação foi pensada para ser cloud-native. O plano de deploy envolve:

Hospedagem: Utilização do AWS Amplify para conectar o repositório GitHub e automatizar o deploy a cada push.

Serverless Functions: Uso das API Routes do Next.js (que rodam como AWS Lambda por baixo dos panos no Amplify) para lidar com a lógica de backend.

Domínio: Configuração via Route 53 (opcional).
