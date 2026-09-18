# AGENTS.md

Instructions for AI agents (Claude Code) working in this repository.

## Project

Personal portfolio website. Built by a Next.js beginner — code should be
simple, well-commented, and easy to maintain long-term, not clever or
over-engineered.

## Current Phase: Frontend Only

**No backend exists yet.** Do not add `fetch()` calls, API routes, env vars
for a backend URL, or any database/ORM code. All content (projects, about
info, etc.) comes from local files in `data/`.

A Laravel CMS backend is planned for later (Phase 2). When that phase
starts, this file will be updated — until then, treat the frontend as fully
standalone.

## Tech Stack

- **Next.js** — App Router (not Pages Router)
- **TypeScript**
- **Tailwind CSS** for all styling — no separate CSS files, no CSS-in-JS
- **Sera UI** for UI components (buttons, cards, nav, etc.) — replaces
  shadcn/ui. Add components with `npx seraui@latest add <name> --url
  https://seraui.com/registry` (the CLI's built-in default URL,
  `seraui.seraprogrammer.com`, no longer resolves — always pass `--url`
  explicitly). Components land in `components/`; move them into
  `src/components/ui/` to match this project's layout.
- **lucide-react** for icons

## Folder Structure

```
app/            → pages (file-based routing)
components/     → reusable UI pieces
components/ui/  → Sera UI components (generated, don't hand-edit unless needed)
data/           → local content files (projects.ts, profile.ts) — the "fake database"
lib/            → small helper functions
public/images/  → static images, resume PDF, etc.
```

Keep this structure flat. Don't introduce new top-level folders or deep
nesting without a clear reason.

## Code Style Rules

1. **Comment generously.** Explain *what* a block does and *why*, aimed at
   someone new to Next.js — not just restating the code.
2. **No advanced patterns.** Avoid complex generics, unnecessary
   abstractions, or "clever" one-liners. Prefer explicit, readable code.
3. **Small components, single responsibility.** One clear purpose per file.
4. **Descriptive names.** `ProjectCard`, not `Card2`.
5. **Reuse components** instead of duplicating markup (e.g. one
   `ProjectCard` used everywhere a project is displayed).

## Design Requirements

- Modern, minimal, **compact** aesthetic — tight but breathable spacing,
  clear type hierarchy, one accent color. Avoid oversized section padding
  or forcing sections to fill the viewport height.
- **Mobile-first responsive.** Build for small screens first, then adjust
  with Tailwind's `sm:` / `md:` / `lg:` prefixes.
- Dark mode support is a nice-to-have, not required.

## When Making Changes

- Prefer editing/extending existing components over creating near-duplicates.
- If a change would require backend/API support, stop and flag it instead
  of stubbing in a fake fetch — that belongs in Phase 2.
- Keep new dependencies to a minimum; ask before adding a library outside
  the stack listed above.

## Reference

Full project plan, roadmap, and open questions: see `PORTFOLIO-PLAN.md` in
the repo root.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
