# 🔧 Corrigir Redirect para Localhost

## ⚠️ IMPORTANTE: Variáveis NEXT_PUBLIC_ e Build

Variáveis que começam com `NEXT_PUBLIC_` são compiladas no código JavaScript durante o build. Isso significa:
- Se você adicionar/alterar essas variáveis na Vercel, PRECISA fazer REDEPLOY
- Apenas salvar a variável NÃO é suficiente
- O código precisa ser recompilado com os novos valores

## Checklist Completo (Siga na Ordem!)

### ✅ 1. Adicionar Variável de Ambiente na Vercel

1. Acesse: https://vercel.com/dashboard
2. Vá no seu projeto: `aws-estudos-typescript-react`
3. Clique em **Settings** → **Environment Variables**
4. Adicione uma nova variável:

```
Name: NEXT_PUBLIC_SITE_URL
Value: https://aws-estudos-typescript-react.vercel.app
Environment: Production, Preview, Development (marque todos)
```

5. Clique em **Save**

### ✅ 2. Configurar Site URL no Supabase

1. Acesse: https://supabase.com/dashboard/project/tbveadogyqmbhjylpssk
2. Vá em **Authentication** → **URL Configuration**
3. Configure:
   - **Site URL**: `https://aws-estudos-typescript-react.vercel.app`
   - **Redirect URLs**: Adicione `https://aws-estudos-typescript-react.vercel.app/**`
4. Clique em **Save**

### ✅ 3. Desabilitar Confirmação de Email no Supabase

1. Ainda em **Authentication** → **Providers** → **Email**
2. Desative **"Confirm email"**
3. Clique em **Save**

### ✅ 4. Atualizar URLs no Google Cloud Console

1. Acesse: https://console.cloud.google.com/apis/credentials
2. Clique nas suas credenciais OAuth 2.0
3. Em **Authorized JavaScript origins**, certifique-se que tem:
   ```
   https://aws-estudos-typescript-react.vercel.app
   ```

4. Em **Authorized redirect URIs**, certifique-se que tem:
   ```
   https://aws-estudos-typescript-react.vercel.app/auth/callback
   ```

5. Clique em **Save**

### ✅ 5. REDEPLOY na Vercel (CRÍTICO!)

**ATENÇÃO**: Este passo é OBRIGATÓRIO! Sem ele, as variáveis não entram no código.

1. Vá em **Deployments**
2. Clique nos 3 pontinhos do último deployment
3. Clique em **Redeploy**
4. Aguarde o build terminar (vai recompilar com as novas variáveis)

### ✅ 6. Testar em Modo Anônimo

1. Abra uma janela anônima/privada no navegador
2. Acesse: https://aws-estudos-typescript-react.vercel.app/login
3. Faça login com Google
4. Deve redirecionar para o dashboard corretamente! ✅

## 🐛 Se Ainda Não Funcionar

1. Abra o Console do navegador (F12)
2. Vá na aba **Network**
3. Faça login novamente
4. Procure pela requisição de redirect
5. Verifique qual URL está sendo usada
6. Me envie um print ou copie a URL que aparece

## 📝 Como Funciona

O código em `useAuth.ts` faz:
```typescript
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || window.location.origin;
```

- Se `NEXT_PUBLIC_SITE_URL` estiver definido → usa ele
- Se não estiver → usa `window.location.origin` (que pode ser localhost)

Por isso é CRÍTICO fazer o redeploy após adicionar a variável!
