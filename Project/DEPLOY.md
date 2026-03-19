# 🚀 Guia de Deploy - Produção

## 📋 Pré-requisitos

- [ ] Projeto funcionando localmente
- [ ] Conta no GitHub
- [ ] Conta na Vercel (gratuita)
- [ ] Supabase configurado
- [ ] Google OAuth configurado

## 🎯 Deploy na Vercel (Recomendado)

### Passo 1: Preparar o Repositório

```bash
# 1. Inicialize o Git (se ainda não fez)
git init

# 2. Adicione todos os arquivos
git add .

# 3. Commit
git commit -m "feat: migração para Next.js + Supabase"

# 4. Crie repositório no GitHub
# Acesse github.com e crie um novo repositório

# 5. Adicione o remote
git remote add origin https://github.com/seu-usuario/seu-repo.git

# 6. Push
git push -u origin main
```

### Passo 2: Conectar à Vercel

#### Opção A: Via Dashboard (Mais Fácil)

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Add New Project"
3. Importe seu repositório do GitHub
4. Configure:
   - Framework Preset: **Next.js**
   - Root Directory: **Project** (se seu código está na pasta Project)
   - Build Command: `npm run build`
   - Output Directory: `.next`

#### Opção B: Via CLI

```bash
# 1. Instale a CLI da Vercel
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
cd Project
vercel

# Siga as instruções:
# - Set up and deploy? Yes
# - Which scope? Sua conta
# - Link to existing project? No
# - Project name? aws-flashcards (ou outro nome)
# - Directory? ./
# - Override settings? No
```

### Passo 3: Configurar Variáveis de Ambiente

#### Na Vercel Dashboard:

1. Vá em **Settings** → **Environment Variables**
2. Adicione:

```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-aqui
```

3. Selecione todos os ambientes:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

4. Clique em **Save**

#### Via CLI:

```bash
# Adicionar variáveis
vercel env add NEXT_PUBLIC_SUPABASE_URL
# Cole o valor quando solicitado

vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
# Cole o valor quando solicitado
```

### Passo 4: Redeploy

```bash
# Trigger novo deploy com as variáveis
vercel --prod
```

Ou no dashboard: **Deployments** → **Redeploy**

## 🔐 Configurar URLs de Produção

### 1. Obter URL da Vercel

Após o deploy, você receberá uma URL como:
```
https://seu-projeto.vercel.app
```

### 2. Configurar no Google OAuth

1. Acesse [console.cloud.google.com](https://console.cloud.google.com)
2. APIs & Services → Credentials → Seu OAuth Client
3. Adicione em **Authorized redirect URIs**:
   ```
   https://seu-projeto.vercel.app/auth/callback
   https://[SEU-PROJETO].supabase.co/auth/v1/callback
   ```
4. Salve

### 3. Configurar no Supabase

1. Supabase Dashboard → Authentication → URL Configuration
2. **Site URL**: `https://seu-projeto.vercel.app`
3. **Redirect URLs**: 
   ```
   https://seu-projeto.vercel.app/**
   ```
4. Salve

## ✅ Testar em Produção

1. Acesse sua URL: `https://seu-projeto.vercel.app`
2. Teste o login com Google
3. Teste salvar dados
4. Verifique se os dados aparecem no Supabase

## 🌐 Domínio Customizado (Opcional)

### Adicionar Domínio na Vercel

1. Vercel Dashboard → Settings → Domains
2. Adicione seu domínio: `seusite.com`
3. Configure DNS conforme instruções

### Atualizar URLs

Após adicionar domínio, atualize:

1. **Google OAuth**: Adicione `https://seusite.com/auth/callback`
2. **Supabase**: Atualize Site URL para `https://seusite.com`

## 📊 Monitoramento

### Vercel Analytics (Gratuito)

1. Vercel Dashboard → Analytics
2. Ative o Vercel Analytics
3. Adicione ao projeto:

```bash
npm install @vercel/analytics
```

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Vercel Speed Insights

```bash
npm install @vercel/speed-insights
```

```tsx
// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

## 🔄 CI/CD Automático

A Vercel já configura CI/CD automaticamente:

```
Git Push → GitHub → Webhook → Vercel → Build → Deploy
```

### Branches

- **main/master**: Deploy em produção
- **outras branches**: Deploy de preview

### Preview Deployments

Cada PR gera um preview deployment:
```
https://seu-projeto-git-feature-branch.vercel.app
```

## 🐛 Debug em Produção

### Ver Logs

```bash
# Via CLI
vercel logs

# Ou no dashboard
Deployments → Seu deploy → Logs
```

### Erros Comuns

#### 1. Build falha

```bash
# Teste o build localmente primeiro
npm run build

# Se funcionar local mas falhar na Vercel:
# - Verifique variáveis de ambiente
# - Verifique versão do Node (use .nvmrc)
```

#### 2. Variáveis de ambiente não funcionam

```bash
# Verifique se adicionou na Vercel
vercel env ls

# Redeploy após adicionar
vercel --prod
```

#### 3. OAuth não funciona

- Verifique redirect URIs no Google
- Verifique Site URL no Supabase
- Use HTTPS, não HTTP

## 📈 Performance

### Otimizações Automáticas da Vercel

- ✅ CDN global
- ✅ Compressão automática
- ✅ Image optimization
- ✅ Edge caching
- ✅ Automatic HTTPS

### Verificar Performance

1. [PageSpeed Insights](https://pagespeed.web.dev/)
2. [GTmetrix](https://gtmetrix.com/)
3. Vercel Analytics

## 🔒 Segurança

### Headers de Segurança

```typescript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

### Variáveis Secretas

⚠️ **NUNCA** commite:
- `.env.local`
- Chaves de API
- Senhas
- Tokens

✅ Use variáveis de ambiente da Vercel

## 💰 Custos

### Vercel (Hobby Plan - Gratuito)
- ✅ 100 GB bandwidth/mês
- ✅ Deployments ilimitados
- ✅ Preview deployments
- ✅ Analytics básico
- ✅ Domínio customizado

### Supabase (Free Tier)
- ✅ 500 MB database
- ✅ 1 GB file storage
- ✅ 2 GB bandwidth
- ✅ 50,000 monthly active users
- ✅ Autenticação ilimitada

## 🚀 Deploy Alternativo

### Netlify

```bash
# 1. Instale a CLI
npm i -g netlify-cli

# 2. Login
netlify login

# 3. Deploy
netlify deploy --prod
```

### Cloudflare Pages

1. Conecte repositório GitHub
2. Configure:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Adicione variáveis de ambiente

### Railway

```bash
# 1. Instale a CLI
npm i -g @railway/cli

# 2. Login
railway login

# 3. Deploy
railway up
```

## 📝 Checklist de Deploy

- [ ] Build funciona localmente (`npm run build`)
- [ ] Testes passam (`npm test`)
- [ ] Código commitado no GitHub
- [ ] Projeto conectado à Vercel
- [ ] Variáveis de ambiente configuradas
- [ ] Deploy realizado com sucesso
- [ ] URL de produção obtida
- [ ] Google OAuth atualizado com URL de produção
- [ ] Supabase atualizado com URL de produção
- [ ] Login testado em produção
- [ ] Salvamento de dados testado
- [ ] Performance verificada (Lighthouse)
- [ ] Analytics configurado (opcional)
- [ ] Domínio customizado configurado (opcional)

## 🆘 Suporte

### Vercel
- [Documentação](https://vercel.com/docs)
- [Discord](https://discord.gg/vercel)
- [GitHub Discussions](https://github.com/vercel/next.js/discussions)

### Supabase
- [Documentação](https://supabase.com/docs)
- [Discord](https://discord.supabase.com)
- [GitHub Issues](https://github.com/supabase/supabase/issues)

---

## 🎉 Parabéns!

Seu app está no ar! 🚀

Próximos passos:
1. Compartilhe com amigos
2. Colete feedback
3. Itere e melhore
4. Monitore performance
5. Adicione novas features

**Boa sorte! 🍀**
