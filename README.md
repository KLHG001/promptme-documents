# PromptMe — Conversational Data Hub

Guided conversational forms, document intelligence, and client portals built with React, TypeScript, and Supabase.

## Tech stack

- Vite + React + TypeScript
- shadcn/ui + Tailwind CSS
- Supabase (auth, database, storage, edge functions)

## Local development

```sh
npm install
cp .env.example .env   # then fill in your Supabase anon key
npm run dev
```

The dev server runs at [http://localhost:8080](http://localhost:8080).

## Environment variables

| Variable | Where | Description |
|----------|-------|-------------|
| `VITE_SUPABASE_URL` | `.env` | Operational DB URL (documents, vault, templates) |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | `.env` | Operational DB anon key |
| `VITE_SUPABASE_PROJECT_ID` | `.env` | Operational project ref |
| `VITE_MASTERVAULT_SUPABASE_URL` | `.env` | MasterVault URL (optional; defaults to operational) |
| `VITE_MASTERVAULT_SUPABASE_PUBLISHABLE_KEY` | `.env` | MasterVault anon key (optional) |
| `ANTHROPIC_API_KEY` | Supabase secrets | Anthropic API key for `interrogator-chat` and `scribe-generate` |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests |

## Supabase

This app uses a **dual Supabase pattern** (same as Udget):

- **Operational DB** (`VITE_SUPABASE_*`) — `document_templates`, `vault_documents`, `chat_sessions`
- **PMI OS MasterVault** (`VITE_MASTERVAULT_*` or same project) — `profiles`, `check_ins`, `coin_ledger`, `knowledge_vault`

All MasterVault writes use `app_source = "promptme-docs"`. Edge functions live in `supabase/functions/`.

To set AI secrets for edge functions:

```sh
supabase secrets set ANTHROPIC_API_KEY=your_key
```
