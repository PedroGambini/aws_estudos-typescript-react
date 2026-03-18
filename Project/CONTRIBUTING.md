# 🤝 Guia de Contribuição

Obrigado por considerar contribuir com o AWS Flashcards App!

## 📋 Antes de Começar

1. Certifique-se de ter Node.js 18+ instalado
2. Fork o repositório
3. Clone seu fork localmente
4. Instale as dependências: `npm install`

## 🔧 Configuração do Ambiente

1. Copie o arquivo de exemplo de variáveis de ambiente:
   ```bash
   cp .env.example .env.local
   ```

2. Configure o Git (se ainda não fez):
   ```bash
   git config --global user.name "Seu Nome"
   git config --global user.email "seu.email@exemplo.com"
   ```

## 🎯 Padrões de Código

### TypeScript
- Use tipagem forte, evite `any`
- Prefira interfaces para objetos
- Use `const` por padrão, `let` quando necessário
- Nunca use `var`

### React
- Use functional components com hooks
- Extraia lógica complexa para custom hooks
- Mantenha componentes pequenos e focados
- Use `React.memo` para otimização quando necessário

### Nomenclatura
- Componentes: PascalCase (`MyComponent.tsx`)
- Funções/variáveis: camelCase (`myFunction`)
- Constantes: UPPER_SNAKE_CASE (`MY_CONSTANT`)
- Arquivos de tipos: kebab-case (`my-types.ts`)

### Estrutura de Arquivos
```
src/
├── components/     # Componentes reutilizáveis
├── pages/         # Páginas/rotas
├── hooks/         # Custom hooks
├── utils/         # Funções utilitárias
├── types/         # Definições de tipos
├── constants/     # Constantes da aplicação
└── data/          # Dados estáticos
```

## ✅ Checklist antes do PR

- [ ] Código segue os padrões do projeto
- [ ] TypeScript strict mode passa sem erros
- [ ] ESLint não reporta erros
- [ ] Testes passam: `npm run test`
- [ ] Build funciona: `npm run build`
- [ ] Código está documentado (JSDoc quando necessário)
- [ ] Commit messages são descritivas

## 📝 Padrão de Commits

Use commits semânticos:

```
feat: adiciona nova funcionalidade
fix: corrige um bug
docs: atualiza documentação
style: formatação, ponto e vírgula, etc
refactor: refatoração de código
test: adiciona ou corrige testes
chore: tarefas de manutenção
```

Exemplos:
```
feat: adiciona filtro por dificuldade nos flashcards
fix: corrige animação de flip no mobile
docs: atualiza README com instruções de deploy
```

## 🐛 Reportando Bugs

Ao reportar bugs, inclua:
- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots (se aplicável)
- Versão do navegador/OS

## 💡 Sugerindo Melhorias

Sugestões são bem-vindas! Abra uma issue descrevendo:
- O problema que a feature resolve
- Como você imagina a solução
- Exemplos de uso

## 🧪 Testes

```bash
# Testes unitários
npm run test

# Testes em modo watch
npm run test:watch

# Testes E2E
npx playwright test
```

## 📚 Recursos Úteis

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Shadcn UI](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)

## ❓ Dúvidas?

Abra uma issue ou entre em contato!
