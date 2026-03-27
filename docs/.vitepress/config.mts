import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({
  title: 'Slickport',
  description: 'Vercel-like style portfolio template for developers built with Svelte 5',
  appearance: 'dark',
  lastUpdated: true,
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }],
    sidebar: [
      {
        text: 'Guide',
        items: [{ text: 'Getting Started', link: '/getting-started' }],
      },
    ],
    search: { provider: 'local' },
  },
  mermaid: { theme: 'dark' },
})
