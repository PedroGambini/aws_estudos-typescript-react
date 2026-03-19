'use client';

import { useRouter } from "next/navigation";
import { Server, HardDrive, Database, Shield } from "lucide-react";
import { categories } from "@/data/flashcards";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  Server,
  HardDrive,
  Database,
  Shield,
};

export function CategoryGrid() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map((cat, i) => {
        const Icon = iconMap[cat.icon];
        const progress = Math.round((cat.completedCards / cat.totalCards) * 100);

        return (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
            onClick={() => router.push(`/study/${cat.id}`)}
            className="p-5 bg-card border border-border rounded-xl shadow-card cursor-pointer hover:border-primary/30 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
              <Icon size={20} className="text-primary" />
            </div>
            <h3 className="font-medium text-foreground text-sm">{cat.name}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">{cat.totalCards} Cards</p>

            <div className="mt-3 h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-[10px] text-muted-foreground mt-1">{progress}% completo</p>
          </motion.div>
        );
      })}
    </div>
  );
}
