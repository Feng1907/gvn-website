# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Build production bundle
npm run lint      # Run ESLint
```

No test runner is configured. Requires `MONGODB_URI` in `.env.local`.

## Architecture

**GVN website** — bilingual (Vietnamese/English) B2B site for an IT services company. Built with Next.js App Router, MongoDB/Mongoose, and CSS Modules.

### Routing

App Router (`app/`). Every page route (`app/[route]/page.tsx`) is a client component (`"use client"`). Static routes: `/about`, `/services`, `/products`, `/projects`, `/news`, `/contact`.

### Bilingual Content

All UI strings live in `app/components/LangContext.tsx` as a single translations object with `vi` and `en` branches. Pages consume it via `useLang()` → `{ lang, setLang, t }`. Database models carry dual fields: `title`/`titleEn`, `description`/`descriptionEn`.

### Styling

- **CSS Modules** (`.module.css` per component) for scoped styles — one file per component
- **CSS variables** in `app/globals.css` (`--blue`, `--orange`, `--bg`, `--radius`, etc.) — use these instead of hard-coded values
- **Shared button classes** (`btn-primary`, `btn-orange`, `btn-outline`, `btn-see-all`) defined in `globals.css`
- **Tailwind** available as utility classes alongside CSS Modules

### API Layer

REST routes under `app/api/[resource]/route.ts` (list/create) and `app/api/[resource]/id/route.ts` (single item). All responses use `lib/apiHelper.ts` helpers: `ok()`, `created()`, `notFound()`, `badRequest()`, `serverError()`.

### Database

MongoDB via Mongoose 9. Global connection cache in `lib/mongodb.ts` prevents reconnect on hot-reload. TypeScript interfaces for all entities are in `lib/types.ts`; a full Mongoose schema exists only for `Project` in `lib/models/Project.ts`.

## Key Conventions

- **Always use `<Link>` from `next/link` for internal navigation** — never bare `<a>` tags (ESLint rule `@next/next/no-html-link-for-pages` is enforced)
- Path alias `@/` resolves to `./app/` (see `tsconfig.json`)
- Product images live under `public/images/products/`; the `ProductImage` component falls back to a placeholder when the image is missing
