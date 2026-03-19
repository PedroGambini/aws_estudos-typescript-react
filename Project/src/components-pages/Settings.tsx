'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import { 
  Languages, 
  Palette,
  Bell,
  User,
  Check,
  Sun,
  Moon,
  Monitor,
  Sparkles
} from "lucide-react";

export default function Settings() {
  const { language, setLanguage, t } = useLanguage();
  const [theme, setTheme] = useState<"light" | "dark" | "system">(() => {
    const saved = localStorage.getItem("theme-preference");
    return (saved as "light" | "dark" | "system") || "system";
  });

  useEffect(() => {
    const applyTheme = (themeMode: "light" | "dark" | "system") => {
      if (themeMode === "system") {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.classList.toggle("dark", isDark);
      } else {
        document.documentElement.classList.toggle("dark", themeMode === "dark");
      }
      localStorage.setItem("theme-preference", themeMode);
      localStorage.setItem("theme", themeMode === "system" 
        ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
        : themeMode
      );
    };

    applyTheme(theme);
  }, [theme]);

  return (
    <div className="flex-1 p-8 overflow-y-auto bg-gradient-to-br from-background via-background to-violet-50/30 dark:to-violet-950/10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">{t("title")}</h1>
            <p className="text-muted-foreground">
              {t("subtitle")}
            </p>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* Language Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                  <Languages size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{t("language")}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t("languageDesc")}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant={language === "pt" ? "default" : "outline"}
                      onClick={() => setLanguage("pt")}
                      className={`justify-start h-12 rounded-xl transition-all ${
                        language === "pt" 
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25" 
                          : "border-border/50 hover:border-blue-500/50"
                      }`}
                    >
                      {language === "pt" && <Check size={16} className="mr-2" />}
                      🇧🇷 {t("portuguese")}
                    </Button>
                    <Button
                      variant={language === "en" ? "default" : "outline"}
                      onClick={() => setLanguage("en")}
                      className={`justify-start h-12 rounded-xl transition-all ${
                        language === "en" 
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25" 
                          : "border-border/50 hover:border-blue-500/50"
                      }`}
                    >
                      {language === "en" && <Check size={16} className="mr-2" />}
                      🇺🇸 {t("english")}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Theme Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card className="p-6 border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/20">
                  <Palette size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{t("theme")}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t("themeDesc")}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <Button
                      variant={theme === "light" ? "default" : "outline"}
                      onClick={() => setTheme("light")}
                      className={`justify-start h-12 rounded-xl transition-all ${
                        theme === "light" 
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25" 
                          : "border-border/50 hover:border-purple-500/50"
                      }`}
                    >
                      {theme === "light" && <Check size={16} className="mr-2" />}
                      <Sun size={16} className="mr-2" />
                      {t("light")}
                    </Button>
                    <Button
                      variant={theme === "dark" ? "default" : "outline"}
                      onClick={() => setTheme("dark")}
                      className={`justify-start h-12 rounded-xl transition-all ${
                        theme === "dark" 
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25" 
                          : "border-border/50 hover:border-purple-500/50"
                      }`}
                    >
                      {theme === "dark" && <Check size={16} className="mr-2" />}
                      <Moon size={16} className="mr-2" />
                      {t("dark")}
                    </Button>
                    <Button
                      variant={theme === "system" ? "default" : "outline"}
                      onClick={() => setTheme("system")}
                      className={`justify-start h-12 rounded-xl transition-all ${
                        theme === "system" 
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25" 
                          : "border-border/50 hover:border-purple-500/50"
                      }`}
                    >
                      {theme === "system" && <Check size={16} className="mr-2" />}
                      <Monitor size={16} className="mr-2" />
                      {t("system")}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Notifications Settings (Preview) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card className="p-6 opacity-60">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Bell size={24} className="text-blue-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{t("notifications")}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t("notificationsDesc")}
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    {t("comingSoon")}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Account Settings (Preview) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Card className="p-6 opacity-60">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <User size={24} className="text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{t("account")}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t("accountDesc")}
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    {t("comingSoon")}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
