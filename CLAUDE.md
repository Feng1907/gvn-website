# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Build production bundle
npm run lint      # Run ESLint
npx tsx lib/seed.ts   # Seed MongoDB with sample services, products, articles
```

No test runner is configured. Requires `MONGODB_URI=mongodb://localhost:27017/gvntmc` in `.env.local`.

## Architecture

**GVN website** — bilingual (Vietnamese/English) B2B site for an IT services company. Built with Next.js 16 App Router, MongoDB/Mongoose, and CSS Modules.

### Routing

App Router (`app/`). Every page route is a `"use client"` component. Static routes: `/about`, `/services`, `/products`, `/projects`, `/news`, `/contact`. Dynamic route: `/products/[id]`.

**Important:** `params` in route handlers is a `Promise` in Next.js 16. In **server components / route handlers** use `const { id } = await params`. In **client components** the page receives `params` as a prop and accesses it synchronously (backwards-compatible): `params.id`.

### Bilingual Content

All UI strings live in `app/components/LangContext.tsx` as a single translations object with `vi` and `en` branches. Pages consume it via `useLang()` → `{ lang, setLang, t }`. Database models carry dual fields: `title`/`titleEn`, `description`/`descriptionEn`, `specs[].value`/`specs[].valueEn`.

### Styling

Two coexisting visual themes — most of the site uses **dark glassmorphism**, but the product detail page uses a **light theme**:

- **Dark glassmorphism** (homepage, navbar, services, contact, about): `rgba(255,255,255,0.06)` glass cards, `backdrop-filter: blur()`, dark `#080d1a` background. CSS variables: `--blue`, `--orange`, `--bg`, `--text`, `--glass`, `--glass-border`.
- **Light theme** (product detail `app/products/[id]/`): white backgrounds, `#1a2340` text, `#e0ecfa` borders, GVN brand blue `#1a6fc4`.
- **CSS Modules** per component (`.module.css`) for all scoped styles — one file per component.
- **Shared button classes** (`btn-primary`, `btn-orange`, `btn-outline`, `btn-see-all`) defined in `globals.css`.
- **Tailwind** available alongside CSS Modules (e.g. `object-contain`, `absolute inset-0`).

### Product Data

Products are **hard-coded** in two places (not yet from MongoDB):

- `app/products/page.tsx` — `allProducts[]` array with `id`, `img`, `bg`, `emoji` fields for the grid.
- `app/products/[id]/page.tsx` — `productDatabase` Record keyed by numeric ID, with richer fields: `images[]`, `imageFallbacks[]` (external CDN URLs as fallback), HTML `description`/`descriptionEn`, `specs[]` with dual-language values, `features[]`, `relatedIds[]`.

The `SmartImg` helper component (defined inline in the detail page) tries the local image, falls back to the external URL, then shows an emoji placeholder.

### API Layer

REST routes under `app/api/[resource]/route.ts` (list/create) and `app/api/[resource]/id/route.ts` (single item). All responses use `lib/apiHelper.ts` helpers: `ok()`, `created()`, `notFound()`, `badRequest()`, `serverError()`.

**Known issue:** The single-item routes are in folders literally named `id` (not `[id]`), making them static routes at `/api/products/id` rather than dynamic `/api/products/:id`. Only the services `[id]` route was created with correct bracket naming (`app/api/services/[id]/route.ts`).

### Database

MongoDB via Mongoose 9. Global connection cache in `lib/mongodb.ts` prevents reconnect on hot-reload. TypeScript interfaces for all entities are in `lib/types.ts`. Mongoose models exist for `Project`, `Service`, and `Product` in `lib/models/`.

The services API (`app/api/services/route.ts`) uses Mongoose (`ServiceModel`). The products/projects/news APIs still use the raw MongoDB driver (`getDb()` → `db.collection()`).

## Key Conventions

- **Always use `<Link>` from `next/link` for internal navigation** — never bare `<a>` tags (ESLint rule `@next/next/no-html-link-for-pages` is enforced)
- Path alias `@/` resolves to `./app/` — but some files use relative imports (`../../components/`) when `@/` is ambiguous
- **lucide-react v1.x removed social media brand icons** (Facebook, Twitter, LinkedIn) — use inline SVG components instead
- Product images live under `public/images/products/`; always provide an `imageFallbacks` external URL and emoji fallback
- When using `<img>` instead of Next.js `<Image>`, add `// eslint-disable-next-line @next/next/no-img-element`
