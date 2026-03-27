# ADR — slickport

## ADR-001 — SvelteKit 5 as Application Framework

**Status:** Accepted

**Context:** Portfolio sites need SSR for SEO, fast hydration, and file-based routing. The project uses Svelte 5 runes syntax.

**Decision:** Use SvelteKit 2.x with the Svelte 5 runtime. Adapters: `adapter-auto` for deployment flexibility, `adapter-static` for static export, `adapter-node` for self-hosted Node.

**Rationale:** SvelteKit provides SSR/SSG/SPA modes in one framework with minimal boilerplate. Svelte 5 runes eliminate the stores boilerplate of Svelte 4.

**Alternatives Considered:**
- Next.js: React ecosystem, heavier runtime
- Astro: excellent for static, weaker for interactive islands at scale
- Nuxt: Vue ecosystem

---

## ADR-002 — shadcn-svelte as Component Library

**Status:** Accepted

**Context:** Need a rich, accessible component set that works with Tailwind without locking into a closed design system.

**Decision:** Use shadcn-svelte (port of shadcn/ui for Svelte). Components are copied into `src/lib/components/ui/` and owned by the project.

**Rationale:** Copy-paste component model means full ownership, no version lock. Radix-based accessibility primitives. Tailwind-first styling.

**Alternatives Considered:**
- Flowbite Svelte: heavier, less composable
- Skeleton UI: good but less mature shadcn-equivalent

---

## ADR-003 — Drizzle ORM for Database Access

**Status:** Accepted

**Context:** Project needs typed database access to PostgreSQL with migration support.

**Decision:** Use Drizzle ORM with drizzle-kit for schema generation and migrations.

**Rationale:** TypeScript-native, lightweight, no reflection, edge-compatible. drizzle-kit provides push/pull/generate workflows.

**Alternatives Considered:**
- Prisma: heavier runtime, separate client generation step
- Kysely: SQL builder but no migration tooling

---

## ADR-004 — Tauri for Desktop Packaging

**Status:** Accepted

**Context:** Portfolio should be distributable as a native desktop app.

**Decision:** Include `@tauri-apps/cli` v1 as a devDependency. The SvelteKit frontend serves as the Tauri webview.

**Rationale:** Rust-based Tauri produces small, fast binaries. No Electron overhead. SvelteKit build output plugs directly into Tauri without changes.

**Alternatives Considered:**
- Electron: 100MB+ binary overhead
- NW.js: less maintained

---

## ADR-005 — UnoCSS for Icons

**Status:** Accepted

**Context:** Need scalable icon system without bundling large icon fonts.

**Decision:** Use UnoCSS with `@iconify-json/carbon` for on-demand icon loading.

**Rationale:** Icons are purged at build time; no unused icon code ships. Carbon icons cover all needed UI symbols.
