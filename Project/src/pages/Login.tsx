import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Login() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-secondary text-secondary-foreground flex-col justify-between p-12">
        <div>
          <div className="flex items-center gap-2 mb-16">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
            <span className="font-semibold">AWS CertPrep</span>
          </div>
        </div>
        <div>
          <blockquote className="text-2xl font-medium leading-relaxed text-balance opacity-90">
            "A nuvem não é mais sobre tecnologia. É sobre a capacidade de inovar mais rápido."
          </blockquote>
          <p className="mt-4 text-sm opacity-50">— Andy Jassy, CEO da Amazon</p>
        </div>
        <p className="text-xs opacity-30">© 2026 AWS CertPrep</p>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background relative">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-sm"
        >
          <h2 className="text-2xl font-medium mb-1">
            {isSignup ? "Criar conta" : "Entrar"}
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            {isSignup ? "Comece sua jornada de certificação" : "Bem-vindo de volta ao AWS CertPrep"}
          </p>

          <Button
            variant="outline"
            className="w-full mb-6 h-11 rounded-lg border-border hover:shadow-card transition-shadow"
            onClick={() => navigate("/")}
          >
            <span className="text-primary font-semibold mr-2">▸</span>
            Entrar com Amazon
          </Button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-3 text-xs text-muted-foreground">ou continue com e-mail</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignup && (
              <div>
                <Label htmlFor="name" className="text-xs font-medium">Nome</Label>
                <Input id="name" placeholder="Seu nome" className="mt-1.5 h-10 rounded-lg" />
              </div>
            )}
            <div>
              <Label htmlFor="email" className="text-xs font-medium">E-mail</Label>
              <Input id="email" type="email" placeholder="seu@email.com" className="mt-1.5 h-10 rounded-lg" />
            </div>
            <div>
              <Label htmlFor="password" className="text-xs font-medium">Senha</Label>
              <Input id="password" type="password" placeholder="••••••••" className="mt-1.5 h-10 rounded-lg" />
            </div>
            <Button type="submit" className="w-full h-11 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
              {isSignup ? "Criar conta" : "Entrar"}
            </Button>
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            {isSignup ? "Já tem uma conta?" : "Não tem uma conta?"}{" "}
            <button onClick={() => setIsSignup(!isSignup)} className="text-primary font-medium hover:underline">
              {isSignup ? "Entrar" : "Criar conta"}
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
