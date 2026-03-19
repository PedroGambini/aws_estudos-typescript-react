'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Settings, Sparkles, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function AppSidebar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { title: "Dashboard", url: "/", icon: Home },
    { title: "Meu Perfil", url: "/profile", icon: User },
    { title: t("flashcards"), url: "/flashcards", icon: BookOpen },
    { title: t("settings"), url: "/settings", icon: Settings },
  ];

  return (
    <>
      <aside
        className="hidden lg:flex fixed inset-y-0 left-0 z-40 flex-col bg-gradient-to-b from-background via-background to-muted/20 border-r border-border/50 backdrop-blur-xl w-64"
      >
        <div className="p-6 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Sparkles size={20} className="text-white" />
            </div>
            <div>
              <h1 className="font-bold text-base tracking-tight bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
                FlashLearn
              </h1>
              <p className="text-xs text-muted-foreground">Study Platform</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.url;
            return (
              <Link
                key={item.title}
                href={item.url}
                className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 font-medium shadow-sm"
                    : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                <item.icon size={18} className={isActive ? "text-violet-500" : ""} />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground/60 text-center">© 2026 FlashLearn</p>
        </div>
      </aside>
    </>
  );
}
