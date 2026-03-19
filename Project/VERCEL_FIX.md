# Correção do Erro NOT_FOUND na Vercel

## Problema
Erro NOT_FOUND ao fazer deploy na Vercel.

## Causa
Server Components não podem importar Client Components diretamente.

## Solução
Adicionar 'use client' no topo das páginas do App Router.

## Arquivos Corrigidos
- app/(protected)/page.tsx
- app/(protected)/profile/page.tsx
- app/(protected)/flashcards/page.tsx
- app/(protected)/settings/page.tsx
- app/(protected)/decks/page.tsx
- app/(protected)/study/[categoryId]/page.tsx
- app/login/page.tsx

## Commit
6a11f1d - fix: adicionar 'use client' em todas as páginas do App Router
