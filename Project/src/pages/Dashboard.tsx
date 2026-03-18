import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { categories } from "@/data/flashcards";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Dashboard() {
  const navigate = useNavigate();
  const totalCards = categories.reduce((sum, c) => sum + c.totalCards, 0);

  return (
    <div className="flex-1 flex items-center justify-center p-8 relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-md"
      >
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <BookOpen size={32} className="text-primary" />
        </div>
        <h2 className="text-2xl font-medium mb-2">Praticar com Flashcards</h2>
        <p className="text-muted-foreground text-sm mb-8">
          {totalCards} cards disponíveis em {categories.length} categorias para você revisar e dominar os conceitos AWS.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-8">
          {categories.map((cat, i) => {
            const progress = Math.round((cat.completedCards / cat.totalCards) * 100);
            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                onClick={() => navigate(`/study/${cat.id}`)}
                className="p-4 bg-card border border-border rounded-xl shadow-card text-left hover:border-primary/30 transition-colors"
              >
                <h3 className="font-medium text-sm">{cat.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{cat.totalCards} cards</p>
                <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${progress}%` }} />
                </div>
              </motion.button>
            );
          })}
        </div>

        <Button
          onClick={() => navigate(`/study/${categories[0].id}`)}
          className="rounded-lg h-11 px-8"
        >
          Começar a estudar
        </Button>
      </motion.div>
    </div>
  );
}
