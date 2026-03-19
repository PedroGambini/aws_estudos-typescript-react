# 🔧 Configuração do Supabase - Novas Funcionalidades

## Passo 1: Executar Migration no Supabase

1. Acesse: https://supabase.com/dashboard/project/tbveadogyqmbhjylpssk
2. Vá em **SQL Editor** (no menu lateral)
3. Clique em **New Query**
4. Copie e cole o conteúdo do arquivo `supabase/migrations/002_friends_and_storage.sql`
5. Clique em **Run** (ou pressione Ctrl+Enter)
6. Aguarde a confirmação de sucesso ✅

## Passo 2: Verificar Storage Bucket

1. Vá em **Storage** (no menu lateral)
2. Você deve ver um bucket chamado **avatars**
3. Se não aparecer, execute novamente a migration

## Passo 3: Testar as Funcionalidades

### Editar Perfil
1. Acesse: https://aws-estudos-typescript-react.vercel.app/profile
2. Clique em **Editar Perfil**
3. Teste fazer upload de uma foto (máximo 2MB)
4. Altere seu nome de exibição
5. Clique em **Salvar**

### Sistema de Amigos
1. Na página de perfil, clique em **Amigos**
2. Vá na aba **Buscar**
3. Digite um nome ou email para buscar usuários
4. Clique em **Adicionar** para enviar solicitação
5. O outro usuário verá a solicitação na aba **Solicitações**
6. Após aceitar, ambos aparecerão na aba **Amigos**

## 📋 Funcionalidades Implementadas

### ✅ Edição de Perfil
- Upload de foto de perfil (até 2MB)
- Alteração de nome de exibição
- Preview em tempo real
- Validação de tipo e tamanho de arquivo

### ✅ Sistema de Amigos
- Buscar usuários por nome ou email
- Enviar solicitações de amizade
- Aceitar/rejeitar solicitações
- Ver lista de amigos
- Remover amigos
- Status de amizade em tempo real

### ✅ Storage de Avatares
- Bucket público para avatares
- Upload seguro (apenas próprio avatar)
- URLs públicas para acesso rápido
- Organização por user_id

## 🔒 Segurança (RLS)

Todas as tabelas e storage têm Row Level Security (RLS) configurado:
- Usuários só podem editar seu próprio perfil
- Usuários só podem ver amizades onde estão envolvidos
- Usuários só podem fazer upload do próprio avatar
- Perfis públicos são visíveis para busca de amigos

## 🐛 Troubleshooting

### Erro ao fazer upload de foto
- Verifique se o arquivo é uma imagem válida (jpg, png, gif, webp)
- Verifique se o arquivo tem menos de 2MB
- Verifique se o bucket "avatars" foi criado no Storage

### Erro ao buscar usuários
- Verifique se a migration foi executada corretamente
- Verifique se a policy "Public profiles are viewable by everyone" está ativa

### Erro ao enviar solicitação de amizade
- Verifique se você não está tentando adicionar a si mesmo
- Verifique se já não existe uma solicitação pendente
- Verifique se vocês já não são amigos

## 📝 Estrutura do Banco de Dados

### Tabela: friendships
```sql
- id: UUID (PK)
- user_id: UUID (FK -> profiles)
- friend_id: UUID (FK -> profiles)
- status: TEXT ('pending', 'accepted', 'rejected')
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

### Storage: avatars
```
avatars/
  ├── {user_id}/
  │   ├── {timestamp}.jpg
  │   ├── {timestamp}.png
  │   └── ...
```

## 🎉 Pronto!

Agora você tem um sistema completo de perfis e amigos integrado com o Supabase!
