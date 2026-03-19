# 🔧 Corrigir Redirect para Localhost

## Problema
Após fazer login (Google ou email), o usuário é redirecionado para `localhost` ao invés do domínio de produção.

## Solução

### 1. Adicionar Variável de Ambiente na Vercel

1. Acesse: https://vercel.com/dashboard
2. Vá no seu projeto: `aws-estudos-typescript-react`
3. Clique em **Settings** → **Environment Variables**
4. Adicione uma nova variável:

```
Name: NEXT_PUBLIC_SITE_URL
Value: https://aws-estudos-typescript-react.vercel.app
```

5. Clique em **Save**

### 2. Atualizar URLs no Google Cloud Console

1. Acesse: https://console.cloud.google.com/apis/credentials
2. Clique nas suas credenciais OAuth 2.0
3. Em **Authorized JavaScript origins**, adicione:
   ```
   https://aws-estudos-typescript-react.vercel.app
   ```

4. Em **Authorized redirect URIs**, adicione:
   ```
   https://aws-estudos-typescript-react.vercel.app/auth/callback
   ```

5. Clique em **Save**

### 3. Fazer Redeploy na Vercel

1. Vá em **Deployments**
2. Clique em **Redeploy** no último deployment
3. Aguarde o build terminar

### 4. Testar

1. Acesse: https://aws-estudos-typescript-react.vercel.app/login
2. Faça login com Google
3. Deve redirecionar para o dashboard corretamente! ✅

## Desabilitar Confirmação de Email

1. Acesse: https://supabase.com/dashboard
2. Abra seu projeto
3. Vá em **Authentication** → **Providers** → **Email**
4. Desative **"Confirm email"**
5. Clique em **Save**

Agora os usuários podem fazer login imediatamente! ✅
