import { useState } from "react";
import { motion } from "framer-motion";

interface FlashcardProps {
  question: string;
  answer: string;
  proTip?: string;
  codeSnippet?: string;
}

export function Flashcard({ question, answer, proTip, codeSnippet }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full max-w-[600px] aspect-video cursor-pointer"
      style={{ perspective: "1200px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-card border border-border rounded-xl shadow-card"
          style={{ backfaceVisibility: "hidden" }}
        >
          <p className="text-lg font-medium text-foreground text-balance text-center leading-relaxed">
            {question}
          </p>
          <p className="mt-4 text-xs text-muted-foreground">Clique para ver a resposta</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex flex-col p-6 bg-card border border-border rounded-xl shadow-card overflow-y-auto"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-sm text-foreground leading-relaxed flex-1">{answer}</p>

          {proTip && (
            <div className="mt-3 p-3 rounded-lg bg-accent border border-border">
              <p className="text-xs font-medium text-primary mb-1">💡 Pro Tip</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{proTip}</p>
            </div>
          )}

          {codeSnippet && (
            <div className="mt-3 p-3 rounded-lg bg-secondary text-secondary-foreground font-mono text-xs overflow-x-auto">
              {codeSnippet}
            </div>
          )}

          <p className="mt-3 text-xs text-muted-foreground text-center">Clique para voltar</p>
        </div>
      </motion.div>
    </div>
  );
}
