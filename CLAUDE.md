# slickport — CLAUDE.md

## Project Summary

Developer portfolio platform. SvelteKit 5 + shadcn-svelte + Tailwind + Drizzle ORM (PostgreSQL). Optional Tauri desktop build.

## Stack

| Layer | Library | Version |
|-------|---------|---------|
| Framework | SvelteKit | ^2.55 |
| UI Runtime | Svelte | 5.x (runes) |
| Components | shadcn-svelte | latest |
| Styling | Tailwind CSS | ^3 |
| Icons | UnoCSS + carbon | ^0.65 |
| ORM | Drizzle | latest |
| Database | PostgreSQL | 16+ |
| Desktop | Tauri | v1 |
| Markdown | marked + prismjs | latest |

## Key Commands

```bash
pnpm dev          # dev server
pnpm build        # production build
pnpm check        # svelte-check type checking
pnpm lint         # prettier + eslint
pnpm studio       # drizzle studio (DB browser)
pnpm generate     # generate migrations
pnpm migrate      # push schema to DB
```

## Structure

```
src/
  lib/
    components/ui/   # shadcn-svelte components (owned copies)
    components/      # app-specific components
    server/          # server-only modules (DB, auth)
  routes/            # SvelteKit file-based routes
```

## Development Rules

- Use Svelte 5 runes (`$state`, `$derived`, `$effect`) — not Svelte 4 stores
- All new UI components go in `src/lib/components/` using shadcn-svelte primitives
- Server-only DB access goes in `src/lib/server/`
- New DB tables: add to drizzle schema, run `pnpm generate && pnpm migrate`
- Prefer `adapter-auto`; switch to `adapter-static` for pure static export
- Dark mode is default — all new components must support both themes

## Adding New Features

1. New page: add route in `src/routes/`
2. New component: add to `src/lib/components/`
3. New DB entity: update drizzle schema, generate migration
4. New API endpoint: add `+server.ts` in appropriate route directory

## Quality Gates

- `pnpm lint` — 0 errors required
- `pnpm check` — 0 type errors required
- All components use shadcn-svelte (no raw HTML forms)
