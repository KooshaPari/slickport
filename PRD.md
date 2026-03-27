# PRD — slickport

## Overview

slickport is a developer portfolio platform built on SvelteKit 5 and shadcn-svelte. It provides a Vercel-style portfolio template with persistent project data, markdown rendering, dark/light theming, and optional Tauri desktop packaging.

## Epics

### E1 — Core Portfolio Display

| Story | Description | Acceptance Criteria |
|-------|-------------|---------------------|
| E1.1 | Developer can display personal info, links, and bio | Bio, avatar, social links render on home page |
| E1.2 | Developer can list projects with metadata | Projects page renders title, description, tags, links |
| E1.3 | Developer can publish blog/markdown posts | Posts render with syntax highlighting and TOC |

### E2 — Data Persistence

| Story | Description | Acceptance Criteria |
|-------|-------------|---------------------|
| E2.1 | Portfolio data stored in PostgreSQL via Drizzle ORM | Migrations run; data survives restarts |
| E2.2 | Admin can create/update projects via API | POST/PATCH /api/projects returns 200 with updated record |

### E3 — Theming and UI

| Story | Description | Acceptance Criteria |
|-------|-------------|---------------------|
| E3.1 | Dark mode first with light mode toggle | mode-watcher persists preference across page loads |
| E3.2 | All components use shadcn-svelte | No raw HTML forms; all interactive elements use component lib |

### E4 — Desktop App (Tauri)

| Story | Description | Acceptance Criteria |
|-------|-------------|---------------------|
| E4.1 | Portfolio runs as a native desktop app | `tauri build` produces working binary for macOS/Linux |

## Non-Goals

- Multi-user CMS
- Paid hosting features
- Mobile-specific native apps (web responsive suffices)
