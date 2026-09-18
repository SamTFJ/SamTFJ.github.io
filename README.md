# Samuel Jales — Portfolio

Personal portfolio for Samuel Jales, a Software & AI engineer. The site presents selected projects, professional experience, contact links, and a downloadable résumé in English and Portuguese.

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

## Editing content

Portfolio text is organized by section in `portfolio/content/`. Update the corresponding module instead of editing page components:

- `hero.ts`
- `about.ts`
- `projects.ts`
- `experience.ts`
- `site-shell.ts`

Shared TypeScript contracts live in `portfolio/content/types.ts`. Public assets use root-relative paths such as `/images/projects/example.png` and `/documents/example.pdf`.

The interface defaults to English, supports Portuguese, respects the saved color theme, and includes named landmarks and accessible labels for interactive controls.

## Publishing

The portfolio is exported as static HTML, CSS, and JavaScript into `portfolio/out`. Language and theme preferences are stored in the visitor's browser; no application server is required.

The `Deploy portfolio to GitHub Pages` workflow validates and builds the site on every push to `main`, then publishes the export to [samtfj.github.io](https://samtfj.github.io/). In the repository settings, GitHub Pages must use **GitHub Actions** as its source.

To preview the static export locally after building:

```bash
cd portfolio
python3 -m http.server 4173 --directory out
```

`pnpm start` starts a Next.js server and is not used for this static deployment.
