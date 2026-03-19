'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function AuthCodeError() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Erro na Autenticação</h1>
          <p className="text-muted-foreground">
            Não foi possível completar o login com Google. Isso pode acontecer por:
          </p>
        </div>

        <ul className="text-sm text-left space-y-2 bg-muted p-4 rounded-lg">
          <li>• Credenciais do Google OAuth não configuradas corretamente</li>
          <li>• URL de redirect incorreta no Google Cloud Console</li>
          <li>• Problema temporário de conexão</li>
        </ul>

        <div className="space-y-3">
          <Button 
            onClick={() => router.push('/login')}
            className="w-full"
          >
            Voltar para Login
          </Button>
          
          <p className="text-xs text-muted-foreground">
            Tente fazer login com email e senha enquanto isso
          </p>
        </div>
      </div>
    </div>
  );
}
