# Vhusani Libago — Portfolio

Personal portfolio site, rebuilt in React + TypeScript with Vite.

It is a port of a single-file HTML build (kept for reference at
[`reference/original-portfolio.html`](reference/original-portfolio.html)); the
content, layout and visual design are unchanged, but the inline styles and the
bespoke template runtime have been replaced with components, CSS Modules and
design tokens.

## Getting started

```bash
npm install
npm run dev      # dev server on http://localhost:5173
```

## Scripts

| Script              | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the Vite dev server with HMR            |
| `npm run build`     | Typecheck, then build to `dist/`              |
| `npm run preview`   | Serve the production build locally            |
| `npm run lint`      | Run ESLint                                    |
| `npm run typecheck` | Typecheck without emitting                    |

## Structure

```
src/
├── main.tsx                 # Entry point: mounts <App>
├── App.tsx                  # Rail + main layout shell
├── assets/                  # Static imports (profile photo)
├── styles/
│   ├── tokens.css           # Design tokens — colours, type, layout
│   └── global.css           # Reset and element defaults
├── types/                   # Shared domain types
├── data/                    # Content, separated from presentation
│   ├── profile.ts           # Bio + contact details
│   ├── nav.ts               # Section nav items
│   ├── experience.ts
│   ├── education.ts
│   ├── skills.ts
│   ├── projects.ts          # Project cards + filter helpers
│   └── projectDetails.ts    # Long-form detail shown in the project modal
├── hooks/
│   └── useActiveSection.ts  # Scroll-spy for the rail nav
├── components/              # Reusable, presentational
│   ├── Sidebar/
│   ├── SectionHeader/
│   ├── TimelineList/
│   ├── FilterBar/
│   ├── ProjectCard/
│   ├── Modal/               # Generic accessible dialog
│   ├── ProjectModal/        # Project detail content for the dialog
│   ├── Tag/
│   └── SiteFooter/
└── sections/                # Page-level sections
    ├── About/
    ├── Resume/
    ├── Projects/
    └── section.module.css   # Shared section padding + divider
```

Each component lives in its own folder with a `.tsx`, a `.module.css` and an
`index.ts` barrel, so imports read as `@/components/ProjectCard`.

`@/*` is aliased to `src/*` in both `tsconfig.app.json` and `vite.config.ts`.

### Editing content

All copy lives in `src/data/`. Adding a project means appending one object to
`projects` in [`src/data/projects.ts`](src/data/projects.ts); its `tags` must be
values of the `ProjectTag` union in [`src/types/index.ts`](src/types/index.ts),
so an unknown tag is a compile error rather than a project that silently never
appears under any filter.

Each project also needs a matching entry in
[`src/data/projectDetails.ts`](src/data/projectDetails.ts), keyed by its
`ProjectId`. That map is typed as `Record<ProjectId, ProjectDetails>`, so
forgetting one is a compile error rather than an empty modal. Where a project
has no distinct `overview`, the modal falls back to the card's `body`.

Project detail content was ported from the previous portfolio at
<https://vhusani.github.io/personal-site/#portfolio>.

## Deploying

`base` is set to `'./'` in `vite.config.ts`, so the contents of `dist/` work
both at a domain root and under a GitHub Pages project subpath.

```bash
npm run build
```

Then publish `dist/` to the `gh-pages` branch.
