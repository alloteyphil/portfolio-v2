---
name: terminal-portfolio-architecture
description: Understands this portfolio's Next.js App Router structure, route responsibilities, and UI composition. Use when adding pages/components, refactoring layout/navigation, or tracing where app behavior lives.
---

# Terminal Portfolio Architecture

## Project Map

- App routes live in `app/`:
  - `app/page.tsx` home
  - `app/projects/page.tsx` projects grid
  - `app/about/page.tsx` about
  - `app/blog/page.tsx` blog scaffold
  - `app/api/refresh-screenshots/route.ts` screenshot refresh API
- Shared UI lives in `components/`:
  - `site-nav.tsx` prompt-style navigation
  - `terminal-frame.tsx` terminal window wrapper
  - `project-card.tsx` project display card
- Data and integrations live in `lib/`
- Domain types live in `types/`

## UI Rules

- Keep terminal aesthetic consistent with `app/globals.css` and `tailwind.config.ts`.
- Reuse `TerminalFrame` for page shells.
- Keep navigation labels in prompt style (`~/...`).
- Prefer server components for data-driven pages unless client interactivity is required.

## Implementation Workflow

1. Identify whether change belongs to route, component, or lib layer.
2. If visual, update component first and keep style tokens centralized.
3. If data-related, keep fetch/transform logic in `lib/`, not in component body.
4. Run lint and build after substantive changes.

## Common Change Patterns

- **New route**: add `app/<route>/page.tsx`, wrap content in `TerminalFrame`, update nav if needed.
- **Card changes**: edit `components/project-card.tsx`; avoid duplicating card logic in routes.
- **Global styling**: prefer updating terminal tokens/utilities in CSS and Tailwind config.
