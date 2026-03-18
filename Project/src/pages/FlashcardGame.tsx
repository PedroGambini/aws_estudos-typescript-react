import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Trophy, ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { flashcards } from "@/data/flashcards";

interface GameQuestion {
  id: string;
  question: string;
  correctAnswer: string;
  options: string[];
  category: string;
}

export default function FlashcardGame() {
  const navigate = useNavigate();
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  const [questions, setQuestions] = useState<GameQuestion[]>([]);

  useEffect(() => {
    // Gera perguntas do jogo
    const gameQuestions = flashcards.slice(0, 10).map((card) => {
      const correctAnswer = card.answer;
      
      // Gera opções incorretas baseadas em outras respostas
      const otherAnswers = flashcards
        .filter((c) => c.id !== card.id)
        .map((c) => c.answer)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      const options = [correctAnswer, ...otherAnswers].sort(() => Math.random() - 0.5);

      return {
        id: card.id,
        question: card.question,
        correctAnswer,
        options,
        category: card.category,
      };
    });

    setQuestions(gameQuestions);
  }, []);

  const handleStartGame = () => {
    setGameStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setGameFinished(false);
  };

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return;
    
    setSelectedAnswer(answer);
    setShowResult(true);

    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameFinished(true);
    }
  };

  const handlePlayAgain = () => {
    setGameStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameFinished(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const finalScore = Math.round((score / questions.length) * 100);

  if (!gameStarted) {
    return (
      <div className="flex-1 flex items-center justify-center p-8 relative">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/")}
          className="absolute top-4 left-4"
        >
          <ArrowLeft size={16} className="mr-2" />
          Voltar
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Trophy size={40} className="text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-3">Jogo de Flashcards AWS</h1>
          <p className="text-muted-foreground mb-8">
            Teste seus conhecimentos sobre serviços AWS! Responda {questions.length} perguntas e veja sua pontuação.
          </p>
          <Button onClick={handleStartGame} size="lg" className="px-8">
            Começar Jogo
          </Button>
        </motion.div>
      </div>
    );
  }

  if (gameFinished) {
    return (
      <div className="flex-1 flex items-center justify-center p-8 relative">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/")}
          className="absolute top-4 left-4"
        >
          <ArrowLeft size={16} className="mr-2" />
          Voltar
        </Button>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Trophy size={48} className="text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Jogo Finalizado!</h1>
          <p className="text-5xl font-bold text-primary my-6">{finalScore}%</p>
          <p className="text-muted-foreground mb-8">
            Você acertou {score} de {questions.length} perguntas
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
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="flex-1 flex flex-col p-8 max-w-4xl mx-auto w-full">
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
          <ArrowLeft size={16} className="mr-2" />
          Sair
        </Button>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            Pergunta {currentQuestion + 1} de {questions.length}
          </span>
          <ThemeToggle />
        </div>
      </div>

      <div className="mb-6">
        <Progress value={progress} className="h-2" />
      </div>

      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full"
          >
            <Card className="p-8 mb-6">
              <div className="mb-2">
                <span className="text-xs font-medium text-primary uppercase tracking-wide">
                  {currentQ.category}
                </span>
              </div>
              <h2 className="text-2xl font-semibold mb-8">{currentQ.question}</h2>

              <div className="space-y-3">
                {currentQ.options.map((option, index) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrect = option === currentQ.correctAnswer;
                  const showCorrect = showResult && isCorrect;
                  const showIncorrect = showResult && isSelected && !isCorrect;

                  return (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswerSelect(option)}
                      disabled={showResult}
                      whileHover={!showResult ? { scale: 1.02 } : {}}
                      whileTap={!showResult ? { scale: 0.98 } : {}}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        showCorrect
                          ? "border-green-500 bg-green-500/10"
                          : showIncorrect
                          ? "border-red-500 bg-red-500/10"
                          : isSelected
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      } ${showResult ? "cursor-default" : "cursor-pointer"}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex-1 pr-4">{option}</span>
                        {showCorrect && <CheckCircle2 className="text-green-500" size={20} />}
                        {showIncorrect && <XCircle className="text-red-500" size={20} />}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </Card>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-center"
              >
                <Button onClick={handleNextQuestion} size="lg" className="px-8">
                  {currentQuestion + 1 < questions.length ? "Próxima Pergunta" : "Ver Resultado"}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground">
          Pontuação atual: {score} / {currentQuestion + (showResult ? 1 : 0)}
        </p>
      </div>
    </div>
  );
}
