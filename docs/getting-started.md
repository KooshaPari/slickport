# Getting Started

## Overview

Slickport is a Vercel-inspired developer portfolio template built with Svelte 5, shadcn-svelte, Tailwind CSS, and UnoCSS.

## Prerequisites

- Node.js 20+
- pnpm (recommended)

## Installation

```bash
# Clone via git
git clone https://github.com/KooshaPari/slickport.git portfolio
cd portfolio

# Or using degit
npx degit KooshaPari/slickport portfolio
cd portfolio
```

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
pnpm build
pnpm preview
```

## Customization

Edit `src/` to update your portfolio content. Icons use the `i-carbon-*` naming convention from [icones.js.org](https://icones.js.org/collection/carbon).

## Libraries Used

| Library | Purpose |
|---------|---------|
| `shadcn-svelte` | Component library |
| `tailwindcss` | CSS styling |
| `unocss` | Fonts and icons |
| `mode-watcher` | Dark/light mode |
| `prismjs` + `marked` | Markdown rendering |
