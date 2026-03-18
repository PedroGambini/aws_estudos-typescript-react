# 🗂️ AWS Flashcards App

Uma aplicação web interativa desenvolvida com React, TypeScript e Vite para auxiliar no estudo e memorização de conceitos para as certificações da Amazon Web Services (AWS).

## 🎯 Sobre o Projeto

Aplicação focada em oferecer uma interface fluida e moderna para estudantes de cloud computing revisarem serviços AWS (EC2, S3, RDS, Lambda, etc.) através de flashcards categorizados, com animações suaves e design responsivo.

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 8
- **Linguagem:** TypeScript 5.8
- **Estilização:** Tailwind CSS 3.4
- **Componentes UI:** Shadcn UI (Radix UI)
- **Roteamento:** React Router DOM 6
- **Animações:** Framer Motion 12
- **Gerenciamento de Estado:** TanStack Query 5
- **Testes:** Vitest 4 + Playwright
- **Linting:** ESLint 9

## 🚀 Funcionalidades

- [x] Interface Responsiva (Mobile First)
- [x] Modo escuro/claro com persistência
- [x] Navegação por categorias (Compute, Storage, Database, Security)
- [x] Flashcards com animação de flip
- [x] Barra de progresso por categoria
- [x] Sidebar responsiva com navegação
- [ ] Integração com banco de dados para salvar progresso
- [ ] Autenticação de usuário (AWS Cognito)
- [ ] Modo simulado de certificação
- [ ] Estatísticas de estudo

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/aws_estudos-typescript-react.git

# Entre na pasta do projeto
cd aws_estudos-typescript-react/Project

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:8080`

## 🧪 Testes

```bash
# Testes unitários
npm run test

# Testes unitários em modo watch
npm run test:watch

# Testes E2E com Playwright
npx playwright test
```

## 🏗️ Build

```bash
# Build de produção
npm run build

# Preview do build
npm run preview

# Build de desenvolvimento
npm run build:dev
```

## 📁 Estrutura do Projeto

```
Project/
├── src/
│   ├── components/       # Componentes React
│   │   ├── ui/          # Componentes Shadcn UI
│   │   ├── AppSidebar.tsx
│   │   ├── CategoryGrid.tsx
│   │   ├── Flashcard.tsx
│   │   └── ...
│   ├── pages/           # Páginas da aplicação
│   │   ├── Dashboard.tsx
│   │   ├── StudyView.tsx
│   │   └── ...
│   ├── data/            # Dados estáticos
│   │   └── flashcards.ts
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utilitários
│   ├── App.tsx          # Componente principal
│   └── main.tsx         # Entry point
├── public/              # Arquivos estáticos
└── ...
```

## ☁️ Deploy na AWS (Planejado)

A aplicação foi pensada para ser cloud-native:

- **Hospedagem:** AWS Amplify ou S3 + CloudFront
- **Backend:** API Gateway + Lambda (futuro)
- **Banco de Dados:** DynamoDB (futuro)
- **Autenticação:** AWS Cognito (futuro)
- **Domínio:** Route 53 (opcional)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto é de código aberto para fins educacionais.
