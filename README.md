# Ülkü Defne Akın - Industrial Design Portfolio

A bilingual (EN/TR), accessible portfolio website for industrial designer Ülkü Defne Akın, built with React + Vite. Design language is faithful to the PDF portfolio: "Black and Beige Minimalist Line".

## Tech stack

- **React 18** + **Vite 5**
- **React Router 6** - multi-page routing
- **Framer Motion** - page transitions and scroll-triggered animations
- **Lucide React** - icons
- **CSS Modules + design tokens** - no UI framework, full design control

## Features

- Bilingual content (English / Turkish) with header language toggle and `localStorage` persistence
- 6 industrial design projects, each with its own detail page (AquaPaws, SkyIron, AirStride, Zobox, Zest, Indep)
- Filterable projects grid (Individual / Group)
- Project pagination (next/previous)
- Sticky header with mobile drawer menu
- Contact form (mailto-based)
- Full keyboard navigation, skip link, focus rings, semantic HTML, `prefers-reduced-motion` support
- Responsive - mobile-first, breakpoints at 640/768/900/1024px

## Getting started

```bash
npm install
npm run dev      # development server
npm run build    # production build
npm run preview  # preview built bundle
```

## Project structure

```
src/
├── App.jsx                 # routing + layout shell
├── main.jsx                # entry point
├── context/
│   └── LanguageContext.jsx # i18n provider (EN/TR)
├── data/
│   └── content.js          # all bilingual content + project data
├── components/
│   ├── Header / Footer / PageTransition / ProjectCard / ArrowMotif
├── pages/
│   ├── Home / About / Projects / ProjectDetail / Contact / NotFound
└── styles/
    └── global.css          # design tokens + base styles
```

## Adding a new project

Edit `src/data/content.js`. Append an object to the `projects` array. Add the cover and section images under `public/images/projects/<slug>/`.

## Accessibility

- WCAG AA target (color contrast verified)
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`)
- All interactive elements have visible focus rings
- `aria-label` on icon-only buttons
- Skip-to-main-content link
- Reduced motion respected via `prefers-reduced-motion`

## Future ideas

- 3D model viewer (Three.js + React Three Fiber) for `.glb` exports from Fusion 360
- Project case-study video embeds
- Blog / journal section
- CMS integration (Sanity, Contentful) for self-managed updates
