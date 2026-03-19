'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Navigation
    "profile": "Meu Perfil",
    "decks": "Meus Decks",
    "flashcards": "Flashcards",
    "settings": "Configurações",
    
    // Profile
    "profile.title": "Meu Perfil",
    "profile.subtitle": "Acompanhe seu progresso e estatísticas",
    "profile.level": "Nível",
    "profile.nextLevel": "Progresso para o próximo nível",
    "profile.cardsCorrect": "Cards Acertados",
    "profile.avgTime": "Tempo Médio",
    "profile.favDifficulty": "Dificuldade Favorita",
    "profile.accuracy": "Taxa de Acerto",
    "profile.gameStats": "Estatísticas de Jogo",
    "profile.totalGames": "Total de Jogos",
    "profile.totalCards": "Total de Cards",
    "profile.correctCards": "Cards Corretos",
    "profile.incorrectCards": "Cards Incorretos",
    "profile.markedReview": "Marcados para Revisão",
    "profile.accountInfo": "Informações da Conta",
    "profile.name": "Nome",
    "profile.email": "Email",
    "profile.currentLevel": "Nível Atual",
    "profile.totalStudyTime": "Tempo Total de Estudo",
    "profile.memberSince": "Membro desde",
    "profile.achievements": "Conquistas Recentes",
    "profile.firstWin": "Primeira Vitória",
    "profile.firstWinDesc": "Complete um jogo",
    "profile.speedster": "Velocista",
    "profile.speedsterDesc": "10 acertos seguidos",
    "profile.master": "Mestre",
    "profile.masterDesc": "100% de acerto",
    "profile.dedicated": "Dedicado",
    "profile.dedicatedDesc": "7 dias seguidos",
    
    // Settings
    "title": "Configurações",
    "subtitle": "Personalize sua experiência",
    "language": "Idioma",
    "languageDesc": "Escolha o idioma da aplicação",
    "portuguese": "Português",
    "english": "Inglês",
    "theme": "Tema",
    "themeDesc": "Escolha entre tema claro, escuro ou automático",
    "light": "Claro",
    "dark": "Escuro",
    "system": "Sistema",
    "notifications": "Notificações",
    "notificationsDesc": "Gerencie suas preferências de notificação",
    "account": "Conta",
    "accountDesc": "Gerencie suas informações pessoais",
    "comingSoon": "Em breve...",
    
    // Flashcard Game
    "gameTitle": "Jogo de Flashcards",
    "chooseDifficulty": "Escolha a dificuldade",
    "awsGame": "Jogo de Flashcards AWS",
    "testMemory": "Teste sua memória sobre serviços AWS",
    "chooseDifficultyLabel": "Escolha a dificuldade:",
    "easy": "Fácil",
    "medium": "Médio",
    "hard": "Difícil",
    "thinkTime": "Pensar",
    "answerTime": "Responder",
    "howWorks": "Como funciona:",
    "flashcardsAbout": "flashcards sobre AWS",
    "readQuestion": "Leia a pergunta e pense na resposta",
    "afterSeconds": "Após {time}s, 2 opções aparecem",
    "youHave": "Você tem {time}s para escolher",
    "onlyOneCorrect": "Apenas uma resposta está correta!",
    "startGame": "Começar Jogo",
    "finalResult": "Resultado Final",
    "gameFinished": "Jogo Finalizado!",
    "youGot": "Você acertou {score} de {total} perguntas",
    "difficulty": "Dificuldade",
    "hits": "Acertos",
    "errors": "Erros",
    "markedForReview": "Marcados para Revisão",
    "playAgain": "Jogar Novamente",
    "backToDashboard": "Voltar ao Dashboard",
    "card": "Card",
    "of": "de",
    "thinkAnswer": "Pense na resposta...",
    "chooseOption": "Escolha uma opção em {time} segundos",
    "correct": "Correto!",
    "incorrect": "Incorreto!",
    "timeUp": "Tempo Esgotado!",
    "correctAnswer": "Resposta correta:",
    "wrongAnswer": "Resposta incorreta:",
    "nextCard": "Próximo Card",
    "seeResult": "Ver Resultado",
    "markReview": "Marcar para Revisão",
    "markedReview": "Marcado para Revisão",
    "score": "Pontuação",
    
    // Dashboard
    "dashboard.practiceFlashcards": "Praticar com Flashcards",
    "dashboard.cardsAvailable": "{total} cards disponíveis em {categories} categorias para você revisar e dominar os conceitos AWS.",
    "dashboard.cards": "cards",
    "dashboard.startStudying": "Começar a estudar",
    
    // Common
    "common.back": "Voltar",
    "common.exit": "Sair",
    "common.loading": "Carregando...",
  },
  en: {
    // Navigation
    "profile": "My Profile",
    "decks": "My Decks",
    "flashcards": "Flashcards",
    "settings": "Settings",
    
    // Profile
    "profile.title": "My Profile",
    "profile.subtitle": "Track your progress and statistics",
    "profile.level": "Level",
    "profile.nextLevel": "Progress to next level",
    "profile.cardsCorrect": "Correct Cards",
    "profile.avgTime": "Average Time",
    "profile.favDifficulty": "Favorite Difficulty",
    "profile.accuracy": "Accuracy Rate",
    "profile.gameStats": "Game Statistics",
    "profile.totalGames": "Total Games",
    "profile.totalCards": "Total Cards",
    "profile.correctCards": "Correct Cards",
    "profile.incorrectCards": "Incorrect Cards",
    "profile.markedReview": "Marked for Review",
    "profile.accountInfo": "Account Information",
    "profile.name": "Name",
    "profile.email": "Email",
    "profile.currentLevel": "Current Level",
    "profile.totalStudyTime": "Total Study Time",
    "profile.memberSince": "Member since",
    "profile.achievements": "Recent Achievements",
    "profile.firstWin": "First Victory",
    "profile.firstWinDesc": "Complete a game",
    "profile.speedster": "Speedster",
    "profile.speedsterDesc": "10 correct in a row",
    "profile.master": "Master",
    "profile.masterDesc": "100% accuracy",
    "profile.dedicated": "Dedicated",
    "profile.dedicatedDesc": "7 days streak",
    
    // Settings
    "title": "Settings",
    "subtitle": "Customize your experience",
    "language": "Language",
    "languageDesc": "Choose your application language",
    "portuguese": "Portuguese",
    "english": "English",
    "theme": "Theme",
    "themeDesc": "Choose between light, dark or automatic theme",
    "light": "Light",
    "dark": "Dark",
    "system": "System",
    "notifications": "Notifications",
    "notificationsDesc": "Manage your notification preferences",
    "account": "Account",
    "accountDesc": "Manage your personal information",
    "comingSoon": "Coming soon...",
    
    // Flashcard Game
    "gameTitle": "Flashcard Game",
    "chooseDifficulty": "Choose difficulty",
    "awsGame": "AWS Flashcards Game",
    "testMemory": "Test your memory about AWS services",
    "chooseDifficultyLabel": "Choose difficulty:",
    "easy": "Easy",
    "medium": "Medium",
    "hard": "Hard",
    "thinkTime": "Think",
    "answerTime": "Answer",
    "howWorks": "How it works:",
    "flashcardsAbout": "flashcards about AWS",
    "readQuestion": "Read the question and think about the answer",
    "afterSeconds": "After {time}s, 2 options appear",
    "youHave": "You have {time}s to choose",
    "onlyOneCorrect": "Only one answer is correct!",
    "startGame": "Start Game",
    "finalResult": "Final Result",
    "gameFinished": "Game Finished!",
    "youGot": "You got {score} out of {total} questions right",
    "difficulty": "Difficulty",
    "hits": "Hits",
    "errors": "Errors",
    "markedForReview": "Marked for Review",
    "playAgain": "Play Again",
    "backToDashboard": "Back to Dashboard",
    "card": "Card",
    "of": "of",
    "thinkAnswer": "Think about the answer...",
    "chooseOption": "Choose an option in {time} seconds",
    "correct": "Correct!",
    "incorrect": "Incorrect!",
    "timeUp": "Time's Up!",
    "correctAnswer": "Correct answer:",
    "wrongAnswer": "Wrong answer:",
    "nextCard": "Next Card",
    "seeResult": "See Result",
    "markReview": "Mark for Review",
    "markedReview": "Marked for Review",
    "score": "Score",
    
    // Dashboard
    "dashboard.practiceFlashcards": "Practice with Flashcards",
    "dashboard.cardsAvailable": "{total} cards available in {categories} categories for you to review and master AWS concepts.",
    "dashboard.cards": "cards",
    "dashboard.startStudying": "Start studying",
    
    // Common
    "common.back": "Back",
    "common.exit": "Exit",
    "common.loading": "Loading...",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("app-language");
    if (saved) {
      setLanguageState(saved as Language);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("app-language", language);
    }
  }, [language, mounted]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
