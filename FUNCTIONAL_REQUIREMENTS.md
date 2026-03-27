# Functional Requirements — slickport

## FR-DISPLAY — Portfolio Display

| ID | Requirement | Traces To |
|----|-------------|-----------|
| FR-DISPLAY-001 | The application SHALL render a home page with developer name, bio, avatar, and social links | E1.1 |
| FR-DISPLAY-002 | The application SHALL render a projects list page with title, description, tech tags, and external links per project | E1.2 |
| FR-DISPLAY-003 | The application SHALL render individual project detail pages | E1.2 |
| FR-DISPLAY-004 | The application SHALL render markdown blog posts with syntax highlighting via prismjs | E1.3 |
| FR-DISPLAY-005 | The application SHALL generate a table of contents for long-form posts | E1.3 |

## FR-DATA — Data Persistence

| ID | Requirement | Traces To |
|----|-------------|-----------|
| FR-DATA-001 | The application SHALL persist portfolio data in a PostgreSQL database | E2.1 |
| FR-DATA-002 | The application SHALL use Drizzle ORM for schema management and migrations | E2.1 |
| FR-DATA-003 | The API SHALL expose POST /api/projects and PATCH /api/projects/:id endpoints | E2.2 |
| FR-DATA-004 | Database migrations SHALL be idempotent and runnable via `drizzle-kit push` | E2.1 |

## FR-UI — Theming and Components

| ID | Requirement | Traces To |
|----|-------------|-----------|
| FR-UI-001 | The application SHALL default to dark mode | E3.1 |
| FR-UI-002 | The application SHALL persist light/dark mode preference via mode-watcher | E3.1 |
| FR-UI-003 | All interactive UI elements SHALL use shadcn-svelte components | E3.2 |
| FR-UI-004 | The application SHALL use Tailwind CSS for layout and spacing | E3.2 |
| FR-UI-005 | Icons SHALL use the carbon icon set via unocss | E3.2 |

## FR-DESKTOP — Tauri Desktop

| ID | Requirement | Traces To |
|----|-------------|-----------|
| FR-DESKTOP-001 | The application SHALL be packageable as a native desktop app via Tauri | E4.1 |
| FR-DESKTOP-002 | `tauri build` SHALL produce a working binary without manual patching | E4.1 |

## FR-QUALITY — Quality

| ID | Requirement | Traces To |
|----|-------------|-----------|
| FR-QUALITY-001 | All TypeScript and Svelte files SHALL pass eslint with zero errors | - |
| FR-QUALITY-002 | All source files SHALL pass prettier formatting check | - |
| FR-QUALITY-003 | `svelte-check` SHALL report zero type errors | - |
