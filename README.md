# Samuel Jales — Portfolio

My portfolio as a Software & AI engineer

## Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- shadcn/ui components built on Base UI
- Lucide and React Icons

## Project structure

```text
portfolio/
├── app/                 # App Router entry points and global styles
├── components/
│   ├── ui/              # Reusable interface primitives
│   └── web/             # Portfolio sections and navigation
├── content/             # Typed copy in English and Portuguese
├── lib/                 # Locale and shared utilities
└── public/
    ├── documents/       # Downloadable résumé
    └── images/          # Profile and project images
```

## Local development

```bash
cd portfolio
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
cd portfolio
pnpm lint
pnpm exec tsc --noEmit
pnpm build --webpack
```
