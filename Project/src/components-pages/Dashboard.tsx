'use client';

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BookOpen, Sparkles, ArrowRight } from "lucide-react";
import { categories } from "@/data/flashcards";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const router = useRouter();
  const totalCards = categories.reduce((sum, c) => sum + c.totalCards, 0);

  return (
    <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative bg-gradient-to-br from-background via-background to-violet-50/30 dark:to-violet-950/10 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-2xl w-full"
      >
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl shadow-violet-500/30">
          <BookOpen size={32} className="text-white sm:w-10 sm:h-10" />
          <div className="absolute -top-2 -right-2">
            <Sparkles size={20} className="text-amber-400 fill-amber-400 animate-pulse sm:w-6 sm:h-6" />
          </div>
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
          Praticar com Flashcards
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-10 px-4">
          {totalCards} cards disponíveis em {categories.length} categorias para você revisar e dominar os conceitos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-10 px-2">
          {categories.map((cat, i) => {
            const progress = Math.round((cat.completedCards / cat.totalCards) * 100);
            const gradients = [
              "from-blue-500 to-cyan-500",
              "from-emerald-500 to-green-500",
              "from-amber-500 to-orange-500",
              "from-purple-500 to-fuchsia-500"
            ];
            
            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                onClick={() => router.push(`/study/${cat.id}`)}
                className="group p-4 sm:p-5 bg-card border border-border/50 rounded-2xl shadow-lg hover:shadow-2xl text-left transition-all hover:scale-105 hover:border-violet-500/50 backdrop-blur-sm"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                  <BookOpen size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base mb-1">{cat.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{cat.totalCards} cards</p>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${gradients[i]} rounded-full transition-all duration-500`}
                    style={{ width: `${progress}%` }} 
                  />
                </div>
              </motion.button>
            );
          })}
        </div>

        <Button
          onClick={() => router.push(`/study/${categories[0].id}`)}
          className="rounded-xl h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg shadow-violet-500/25 transition-all hover:scale-105"
        >
          Começar a estudar
          <ArrowRight size={18} className="ml-2" />
        </Button>
      </motion.div>
    </div>
  );
}
