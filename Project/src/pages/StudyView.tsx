'use client';

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Flashcard } from "@/components/Flashcard";
import { flashcards, categories } from "@/data/flashcards";
import { Button } from "@/components/ui/button";

export default function StudyView() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params?.categoryId as string;
  const cards = flashcards.filter((c) => c.category === categoryId);
  const category = categories.find((c) => c.id === categoryId);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!cards.length || !category) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-muted-foreground">Nenhum card encontrado.</p>
      </div>
    );
  }

  const card = cards[currentIndex];
  const progress = ((currentIndex + 1) / cards.length) * 100;

  const handleFeedback = (type: "hard" | "good" | "easy") => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push("/");
    }
  };

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
      <div className="p-4 flex items-center gap-3 border-b border-border">
        <button onClick={() => router.push("/")} className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft size={20} />
        </button>
        <div>
          <h2 className="text-sm font-medium">{category.name}</h2>
          <p className="text-xs text-muted-foreground">
            Card {currentIndex + 1} de {cards.length}
          </p>
        </div>
      </div>

      {/* Card area */}
      <div className="flex-1 flex items-center justify-center p-6">
        <Flashcard
          key={card.id}
          question={card.question}
          answer={card.answer}
          proTip={card.proTip}
          codeSnippet={card.codeSnippet}
        />
      </div>

      {/* Feedback buttons */}
      <div className="p-6 flex justify-center gap-3">
        <Button
          variant="outline"
          onClick={() => handleFeedback("hard")}
          className="border-destructive/30 text-destructive hover:bg-destructive/10 hover:border-destructive rounded-lg"
        >
          Difícil
        </Button>
        <Button
          variant="outline"
          onClick={() => handleFeedback("good")}
          className="border-warning/30 text-warning hover:bg-warning/10 hover:border-warning rounded-lg"
        >
          Bom
        </Button>
        <Button
          variant="outline"
          onClick={() => handleFeedback("easy")}
          className="border-success/30 text-success hover:bg-success/10 hover:border-success rounded-lg"
        >
          Fácil
        </Button>
      </div>
    </div>
  );
}
