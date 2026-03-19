'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Play, Timer, CheckCircle2, XCircle, Zap, Brain, Target, Bookmark, BookmarkCheck } from "lucide-react";
import { flashcards } from "@/data/flashcards";
import { useLanguage } from "@/contexts/LanguageContext";

interface GameCard {
  id: string;
  question: string;
  correctAnswer: string;
  wrongAnswer: string;
  category: string;
}

interface CardResult {
  cardId: string;
  question: string;
  category: string;
  wasCorrect: boolean;
  selectedAnswer: string | null;
  correctAnswer: string;
  timestamp: string;
  markedForReview: boolean;
}

interface GameHistory {
  results: CardResult[];
  totalGames: number;
  lastPlayed: string;
}

type GameState = "config" | "thinking" | "answering" | "result" | "finished";
type Difficulty = "easy" | "medium" | "hard";

const difficultyConfig = {
  easy: { thinkTime: 30, answerTime: 50, icon: Zap, color: "text-green-500" },
  medium: { thinkTime: 15, answerTime: 30, icon: Brain, color: "text-yellow-500" },
  hard: { thinkTime: 10, answerTime: 20, icon: Target, color: "text-red-500" },
};

export default function FlashcardGame() {
  const router = useRouter();
  const { language, t } = useLanguage();
  
  // Configurações
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  
  // Estado do jogo
  const [gameState, setGameState] = useState<GameState>("config");
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [gameCards, setGameCards] = useState<GameCard[]>([]);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [gameResults, setGameResults] = useState<CardResult[]>([]);
  const [markedForReview, setMarkedForReview] = useState(false);

  // Prepara as cartas do jogo
  useEffect(() => {
    const cards = flashcards
      .filter((card) => card.wrongAnswer) // Apenas cards com resposta errada
      .slice(0, 10)
      .map((card) => ({
        id: card.id,
        question: typeof card.question === 'string' ? card.question : card.question[language],
        correctAnswer: typeof card.answer === 'string' ? card.answer : card.answer[language],
        wrongAnswer: typeof card.wrongAnswer === 'string' ? card.wrongAnswer : card.wrongAnswer![language],
        category: card.category,
      }));
    
    setGameCards(cards);
  }, [language]);

  // Timer countdown
  useEffect(() => {
    if (gameState === "thinking" || gameState === "answering") {
      if (timer > 0) {
        const interval = setInterval(() => {
          setTimer((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
      } else {
        // Tempo esgotado
        if (gameState === "thinking") {
          setGameState("answering");
          setTimer(difficultyConfig[difficulty].answerTime);
        } else if (gameState === "answering") {
          // Não respondeu a tempo
          handleAnswer(null);
        }
      }
    }
  }, [timer, gameState, difficulty]);

  // Embaralha as opções quando muda de card ou entra no estado "answering"
  useEffect(() => {
    if (gameState === "answering" && currentCard) {
      const options = [currentCard.correctAnswer, currentCard.wrongAnswer].sort(() => Math.random() - 0.5);
      setShuffledOptions(options);
    }
  }, [gameState, currentCardIndex]);

  const handleStartGame = () => {
    setGameState("thinking");
    setTimer(difficultyConfig[difficulty].thinkTime);
    setCurrentCardIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setGameResults([]);
    setMarkedForReview(false);
  };

  const handleAnswer = (answer: string | null) => {
    setSelectedAnswer(answer);
    
    const wasCorrect = answer === currentCard.correctAnswer;
    
    if (wasCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    
    // Registra o resultado
    const result: CardResult = {
      cardId: currentCard.id,
      question: currentCard.question,
      category: currentCard.category,
      wasCorrect,
      selectedAnswer: answer,
      correctAnswer: currentCard.correctAnswer,
      timestamp: new Date().toISOString(),
      markedForReview: false,
    };
    
    setGameResults((prev) => [...prev, result]);
    setGameState("result");
  };

  const handleToggleReview = () => {
    setMarkedForReview(!markedForReview);
    
    // Atualiza o último resultado
    setGameResults((prev) => {
      const updated = [...prev];
      if (updated.length > 0) {
        updated[updated.length - 1].markedForReview = !markedForReview;
      }
      return updated;
    });
  };

  const handleNextCard = () => {
    if (currentCardIndex + 1 < gameCards.length) {
      setCurrentCardIndex(currentCardIndex + 1);
      setSelectedAnswer(null);
      setMarkedForReview(false);
      setGameState("thinking");
      setTimer(difficultyConfig[difficulty].thinkTime);
    } else {
      // Salva os resultados no localStorage
      saveGameHistory();
      setGameState("finished");
    }
  };

  const saveGameHistory = () => {
    try {
      const existingHistory = localStorage.getItem("flashcard-game-history");
      const history: GameHistory = existingHistory 
        ? JSON.parse(existingHistory)
        : { results: [], totalGames: 0, lastPlayed: "" };
      
      // Adiciona os resultados do jogo atual
      history.results = [...history.results, ...gameResults];
      history.totalGames += 1;
      history.lastPlayed = new Date().toISOString();
      
      // Mantém apenas os últimos 100 resultados para não sobrecarregar
      if (history.results.length > 100) {
        history.results = history.results.slice(-100);
      }
      
      localStorage.setItem("flashcard-game-history", JSON.stringify(history));
    } catch (error) {
      console.error("Erro ao salvar histórico:", error);
    }
  };

  const handlePlayAgain = () => {
    setGameState("config");
    setCurrentCardIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setGameResults([]);
    setMarkedForReview(false);
  };

  if (gameCards.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    );
  }

  const currentCard = gameCards[currentCardIndex];
  const progress = ((currentCardIndex + 1) / gameCards.length) * 100;
  if (gameState === "config") {
    return (
      <div className="flex-1 flex flex-col">
        <div className="p-4 flex items-center gap-3 border-b border-border">
          <button
            onClick={() => router.push("/")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 className="text-sm font-medium">{t("gameTitle")}</h2>
            <p className="text-xs text-muted-foreground">{t("chooseDifficulty")}</p>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md"
          >
            <Card className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Play size={32} className="text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-2">{t("awsGame")}</h2>
                <p className="text-sm text-muted-foreground">
                  {t("testMemory")}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-sm font-medium">{t("chooseDifficultyLabel")}</p>
                
                {(Object.keys(difficultyConfig) as Difficulty[]).map((diff) => {
                  const config = difficultyConfig[diff];
                  const Icon = config.icon;
                  const isSelected = difficulty === diff;
                  
                  return (
                    <motion.button
                      key={diff}
                      onClick={() => setDifficulty(diff)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full p-4 rounded-lg border-2 transition-all ${
                        isSelected
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center ${config.color}`}>
                          <Icon size={20} />
                        </div>
                        <div className="flex-1 text-left">
                          <p className="font-medium">{t(`${diff}`)}</p>
                          <p className="text-xs text-muted-foreground">
                            {t("thinkTime")}: {config.thinkTime}s | {t("answerTime")}: {config.answerTime}s
                          </p>
                        </div>
                        {isSelected && (
                          <CheckCircle2 size={20} className="text-primary" />
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <div className="p-4 rounded-lg bg-muted mb-6">
                <p className="text-sm font-medium mb-2">{t("howWorks")}</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {gameCards.length} {t("flashcardsAbout")}</li>
                  <li>• {t("readQuestion")}</li>
                  <li>• {t("afterSeconds").replace("{time}", String(difficultyConfig[difficulty].thinkTime))}</li>
                  <li>• {t("youHave").replace("{time}", String(difficultyConfig[difficulty].answerTime))}</li>
                  <li>• {t("onlyOneCorrect")}</li>
                </ul>
              </div>

              <Button onClick={handleStartGame} className="w-full" size="lg">
                <Play size={18} className="mr-2" />
                {t("startGame")}
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  // Tela de Jogo Finalizado
  if (gameState === "finished") {
    const finalScore = Math.round((score / gameCards.length) * 100);
    const markedCards = gameResults.filter((r) => r.markedForReview);
    const incorrectCards = gameResults.filter((r) => !r.wasCorrect);
    
    return (
      <div className="flex-1 flex flex-col">
        <div className="p-4 flex items-center gap-3 border-b border-border">
          <button
            onClick={() => router.push("/")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 className="text-sm font-medium">{t("finalResult")}</h2>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl"
          >
            <div className="text-center mb-8">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={48} className="text-primary" />
              </div>
              <h1 className="text-3xl font-bold mb-2">{t("gameFinished")}</h1>
              <p className="text-6xl font-bold text-primary my-6">{finalScore}%</p>
              <p className="text-muted-foreground mb-2">
                {t("youGot").replace("{score}", String(score)).replace("{total}", String(gameCards.length))}
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                {t("difficulty")}: {t(`${difficulty}`)}
              </p>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <CheckCircle2 size={20} className="text-green-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{score}</p>
                    <p className="text-xs text-muted-foreground">{t("hits")}</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <XCircle size={20} className="text-red-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{incorrectCards.length}</p>
                    <p className="text-xs text-muted-foreground">{t("errors")}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Cards marcados para revisão */}
            {markedCards.length > 0 && (
              <Card className="p-6 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookmarkCheck size={20} className="text-primary" />
                  <h3 className="font-semibold">{t("markedForReview")} ({markedCards.length})</h3>
                </div>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {markedCards.map((card, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-muted border border-border"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <p className="text-xs font-medium text-primary uppercase mb-1">
                            {card.category}
                          </p>
                          <p className="text-sm line-clamp-2">{card.question}</p>
                        </div>
                        {card.wasCorrect ? (
                          <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                        ) : (
                          <XCircle size={16} className="text-red-500 flex-shrink-0" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            <div className="flex gap-3 justify-center">
              <Button onClick={handlePlayAgain} size="lg">
                {t("playAgain")}
              </Button>
              <Button onClick={() => router.push("/")} variant="outline" size="lg">
                {t("backToDashboard")}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Progress bar */}
      <div className="h-1 bg-muted">
        <motion.div
          className="h-full bg-primary"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-border">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 className="text-sm font-medium capitalize">{currentCard.category}</h2>
            <p className="text-xs text-muted-foreground">
              {t("card")} {currentCardIndex + 1} {t("of")} {gameCards.length}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Timer size={18} className={timer <= 5 ? "text-red-500" : "text-primary"} />
          <span className={`text-2xl font-bold min-w-[3ch] text-right ${
            timer <= 5 ? "text-red-500" : "text-primary"
          }`}>
            {timer}
          </span>
        </div>
      </div>

      {/* Card area */}
      <div className="flex-1 flex items-center justify-center p-6">
        <AnimatePresence mode="wait">
          {gameState === "thinking" && (
            <motion.div
              key="thinking"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-[600px] aspect-video"
              style={{ perspective: "1200px" }}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-card border border-border rounded-xl shadow-card">
                  <p className="text-lg font-medium text-foreground text-balance text-center leading-relaxed">
                    {currentCard.question}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-muted-foreground">
                    <Brain size={16} />
                    <p className="text-sm">
                      {t("thinkAnswer")} {timer}s
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {gameState === "answering" && (
            <motion.div
              key="answering"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full max-w-[600px]"
            >
              <Card className="p-8">
                <p className="text-lg font-medium text-center mb-8 leading-relaxed">
                  {currentCard.question}
                </p>
                
                <div className="space-y-3">
                  {shuffledOptions.map((option, index) => (
                    <motion.button
                      key={`option-${index}-${option.substring(0, 20)}`}
                      onClick={() => handleAnswer(option)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full p-6 rounded-lg border-2 border-border hover:border-primary bg-card hover:bg-accent transition-all text-left"
                    >
                      <span className="text-sm leading-relaxed">{option}</span>
                    </motion.button>
                  ))}
                </div>
                
                <p className="text-xs text-center text-muted-foreground mt-6">
                  {t("chooseOption").replace("{time}", String(timer))}
                </p>
              </Card>
            </motion.div>
          )}

          {gameState === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-[600px]"
            >
              <Card className="p-8">
                <div className="text-center mb-6">
                  {selectedAnswer === currentCard.correctAnswer ? (
                    <>
                      <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 size={32} className="text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-green-500">{t("correct")}</h3>
                    </>
                  ) : (
                    <>
                      <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                        <XCircle size={32} className="text-red-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-red-500">
                        {selectedAnswer ? t("incorrect") : t("timeUp")}
                      </h3>
                    </>
                  )}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-2">
                      ✓ {t("correctAnswer")}
                    </p>
                    <p className="text-sm leading-relaxed">{currentCard.correctAnswer}</p>
                  </div>
                  
                  {selectedAnswer !== currentCard.correctAnswer && (
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                      <p className="text-xs font-medium text-red-600 dark:text-red-400 mb-2">
                        ✗ {t("wrongAnswer")}
                      </p>
                      <p className="text-sm leading-relaxed">{currentCard.wrongAnswer}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <Button onClick={handleNextCard} className="w-full" size="lg">
                    {currentCardIndex + 1 < gameCards.length ? t("nextCard") : t("seeResult")}
                  </Button>
                  
                  <Button 
                    onClick={handleToggleReview}
                    variant="outline"
                    className="w-full"
                    size="lg"
                  >
                    {markedForReview ? (
                      <>
                        <BookmarkCheck size={18} className="mr-2" />
                        {t("markedReview")}
                      </>
                    ) : (
                      <>
                        <Bookmark size={18} className="mr-2" />
                        {t("markReview")}
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Score */}
      <div className="p-4 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          {t("score")}: {score} / {currentCardIndex + (gameState === "result" ? 1 : 0)}
        </p>
      </div>
    </div>
  );
}
