# Portfolio

A modern, immersive single-page portfolio powered by **Next.js** and **React** — featuring a 3D interactive globe, a magnetic bento grid, spotlight gradients, and a timeline-driven work history.

Live sections: `Hero` → `Grid` → `WorkExperience` → `Project` → `TechStack` → `Footer`, all wrapped by a `Navbar`.

<p align="center">
  <img height="250" src="https://github.com/sand050965/portfolio/blob/main/public/readme/cover.png?raw=true">
</p>

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router) + [React 19](https://react.dev)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) (config-less, tokens in `app/globals.css`)
- **UI:** [shadcn/ui](https://ui.shadcn.com) (`base-nova` style) + [Aceternity UI](https://ui.aceternity.com)
- **Animation:** [Motion](https://motion.dev), [react-lottie](https://github.com/chenqingspring/react-lottie)
- **3D:** [three.js](https://threejs.org), [@react-three/fiber](https://r3f.docs.pmnd.rs), [drei](https://github.com/pmndrs/drei), [three-globe](https://github.com/vasturiano/three-globe)
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes) (dark by default)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server at `localhost:3000` |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | ESLint check |

No test suite is configured.

## Project Structure

```
app/
  layout.tsx         # Root layout, theme provider
  page.tsx           # Single-page composition
  globals.css        # Tailwind v4 tokens, animations, dark variant
components/
  hero.tsx, grid.tsx, work-experience.tsx,
  project.tsx, tech-stack.tsx, navbar.tsx, footer.tsx
  ui/                # shadcn + Aceternity primitives
data/
  index.ts           # All section content (copy, links, cards)
  *.json             # Lottie animations
lib/
  utils.ts           # `cn()` — clsx + tailwind-merge
public/              # Images, icons, resume, avatar
```

## Editing Content

All copy, links, cards, work history, projects, and tech-stack entries are centralized in [`data/index.ts`](./data/index.ts). Edit that file rather than the section components when updating content.

The resume PDF lives at `public/resume.pdf` and is wired to the hero's download button.

## Styling Notes

Tailwind v4 is configured entirely through `app/globals.css` — there is no `tailwind.config.js`. Custom design tokens (`black-100`, `blue-100`, `purple`, etc.) and animation utilities (`animate-spotlight`, `animate-shimmer`, …) are declared in `@theme` blocks. Use the `cn()` helper from `lib/utils.ts` for conditional classes.

## Adding shadcn / Aceternity Components

```bash
npx shadcn@latest add <component-name>
npx shadcn@latest add "@aceternity/<component-name>"
```

UI primitives belong in `components/ui/`; section-level components live directly in `components/`.

## Deployment

Optimized for [Vercel](https://vercel.com). Push to the connected branch and the deployment runs automatically. Any platform supporting Next.js 16 also works — see the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).
