import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Play, Timer, CheckCircle2, XCircle, Zap, Brain, Target } from "lucide-react";
import { flashcards } from "@/data/flashcards";

interface GameCard {
  id: string;
  question: string;
  correctAnswer: string;
  wrongAnswer: string;
  category: string;
}

type GameState = "config" | "thinking" | "answering" | "result" | "finished";
type Difficulty = "easy" | "medium" | "hard";

const difficultyConfig = {
  easy: { time: 30, label: "Fácil", icon: Zap, color: "text-green-500" },
  medium: { time: 15, label: "Médio", icon: Brain, color: "text-yellow-500" },
  hard: { time: 10, label: "Difícil", icon: Target, color: "text-red-500" },
};

export default function FlashcardGame() {
  const navigate = useNavigate();
  
  // Configurações
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const answeringTime = 10;
  
  // Estado do jogo
  const [gameState, setGameState] = useState<GameState>("config");
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [gameCards, setGameCards] = useState<GameCard[]>([]);

  // Prepara as cartas do jogo
  useEffect(() => {
    const cards = flashcards
      .filter((card) => card.wrongAnswer) // Apenas cards com resposta errada
      .slice(0, 10)
      .map((card) => ({
        id: card.id,
        question: card.question,
        correctAnswer: card.answer,
        wrongAnswer: card.wrongAnswer!,
        category: card.category,
      }));
    
    setGameCards(cards);
  }, []);

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
          setTimer(answeringTime);
        } else if (gameState === "answering") {
          // Não respondeu a tempo
          handleAnswer(null);
        }
      }
    }
  }, [timer, gameState, answeringTime]);

  const handleStartGame = () => {
    setGameState("thinking");
    setTimer(difficultyConfig[difficulty].time);
    setCurrentCardIndex(0);
    setScore(0);
    setSelectedAnswer(null);
  };

  const handleAnswer = (answer: string | null) => {
    setSelectedAnswer(answer);
    
    if (answer === currentCard.correctAnswer) {
      setScore(score + 1);
    }
    
    setGameState("result");
  };

  const handleNextCard = () => {
    if (currentCardIndex + 1 < gameCards.length) {
      setCurrentCardIndex(currentCardIndex + 1);
      setSelectedAnswer(null);
      setGameState("thinking");
      setTimer(difficultyConfig[difficulty].time);
    } else {
      setGameState("finished");
    }
  };

  const handlePlayAgain = () => {
    setGameState("config");
    setCurrentCardIndex(0);
    setScore(0);
    setSelectedAnswer(null);
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

  // Tela de Configuração
  if (gameState === "config") {
    return (
      <div className="flex-1 flex flex-col">
        <div className="p-4 flex items-center gap-3 border-b border-border">
          <button
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 className="text-sm font-medium">Jogo de Flashcards</h2>
            <p className="text-xs text-muted-foreground">Escolha a dificuldade</p>
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
                <h2 className="text-2xl font-bold mb-2">Jogo de Flashcards AWS</h2>
                <p className="text-sm text-muted-foreground">
                  Teste sua memória sobre serviços AWS
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-sm font-medium">Escolha a dificuldade:</p>
                
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
                          <p className="font-medium">{config.label}</p>
                          <p className="text-xs text-muted-foreground">
                            {config.time} segundos para pensar
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
                <p className="text-sm font-medium mb-2">Como funciona:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {gameCards.length} flashcards sobre AWS</li>
                  <li>• Leia a pergunta e pense na resposta</li>
                  <li>• Após {difficultyConfig[difficulty].time}s, 2 opções aparecem</li>
                  <li>• Você tem {answeringTime}s para escolher</li>
                  <li>• Apenas uma resposta está correta!</li>
                </ul>
              </div>

              <Button onClick={handleStartGame} className="w-full" size="lg">
                <Play size={18} className="mr-2" />
                Começar Jogo
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
    
    return (
      <div className="flex-1 flex flex-col">
        <div className="p-4 flex items-center gap-3 border-b border-border">
          <button
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 className="text-sm font-medium">Resultado Final</h2>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md"
          >
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={48} className="text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Jogo Finalizado!</h1>
            <p className="text-6xl font-bold text-primary my-6">{finalScore}%</p>
            <p className="text-muted-foreground mb-2">
              Você acertou {score} de {gameCards.length} perguntas
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Dificuldade: {difficultyConfig[difficulty].label}
            </p>
            <div className="flex gap-3 justify-center">
              <Button onClick={handlePlayAgain} size="lg">
                Jogar Novamente
              </Button>
              <Button onClick={() => navigate("/")} variant="outline" size="lg">
                Voltar ao Dashboard
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Randomiza a ordem das opções
  const options = [currentCard.correctAnswer, currentCard.wrongAnswer].sort(() => Math.random() - 0.5);

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
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 className="text-sm font-medium capitalize">{currentCard.category}</h2>
            <p className="text-xs text-muted-foreground">
              Card {currentCardIndex + 1} de {gameCards.length}
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
                      Pense na resposta... {timer}s
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
                  {options.map((option, index) => (
                    <motion.button
                      key={index}
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
                  Escolha uma opção em {timer} segundos
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
                      <h3 className="text-2xl font-bold text-green-500">Correto!</h3>
                    </>
                  ) : (
                    <>
                      <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                        <XCircle size={32} className="text-red-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-red-500">
                        {selectedAnswer ? "Incorreto!" : "Tempo Esgotado!"}
                      </h3>
                    </>
                  )}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-2">
                      ✓ Resposta correta:
                    </p>
                    <p className="text-sm leading-relaxed">{currentCard.correctAnswer}</p>
                  </div>
                  
                  {selectedAnswer !== currentCard.correctAnswer && (
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                      <p className="text-xs font-medium text-red-600 dark:text-red-400 mb-2">
                        ✗ Resposta incorreta:
                      </p>
                      <p className="text-sm leading-relaxed">{currentCard.wrongAnswer}</p>
                    </div>
                  )}
                </div>

                <Button onClick={handleNextCard} className="w-full" size="lg">
                  {currentCardIndex + 1 < gameCards.length ? "Próximo Card" : "Ver Resultado"}
                </Button>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Score */}
      <div className="p-4 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          Pontuação: {score} / {currentCardIndex + (gameState === "result" ? 1 : 0)}
        </p>
      </div>
    </div>
  );
}
