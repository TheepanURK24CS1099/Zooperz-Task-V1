# Shopify Reference Component Showcase

A single-page React component study analyzing reusable storefront UI patterns from two
Shopify references and rebuilding them as original, prop-driven React components.

## References

RAINS (International):
https://www.rains.com/

Mokobara (Indian):
https://mokobara.com/

## Objective

This project is an internship submission demonstrating the ability to research a live
storefront's publicly visible UI structure, identify its recurring design patterns
(headers, heroes, category tiles, product cards, editorial sections, footers, etc.),
and translate those patterns into a clean, reusable React component library — without
copying any Shopify Liquid/theme code, proprietary assets, or product photography.

It is a **frontend component showcase only**: there is no cart, checkout, payment,
authentication, or backend of any kind.

## Technology

- React 19
- Vite
- JavaScript (JSX)
- CSS (custom properties, Flexbox/Grid, media queries — no CSS framework)

## Architecture

```
src/
  components/
    shared/     Reusable, prop-driven primitives used across both brand sections
    rains/      Components recreating RAINS-specific patterns
    mokobara/   Components recreating Mokobara-specific patterns
  data/         Plain JS data objects (nav links, hero copy, products, footer columns)
  pages/
    Home.jsx    The single route (/) that assembles every section
  styles/       global.css (reset + tokens + layout), components.css, responsive.css
docs/
  REFERENCE_ANALYSIS.md    What was observed on each reference site vs. what we built
  COMPONENT_INVENTORY.md   Every component: purpose, props, section, reusability
  COMPONENT_WORKFLOW.md    The research → build → deploy process followed
```

Components only exist where a genuine, researched UI pattern justified them — see
`docs/REFERENCE_ANALYSIS.md` for the reasoning behind each inclusion (and the one
notable exclusion: Mokobara's interactive store locator, which needs map/backend
integration outside this project's scope).

## Placeholder Policy

No real RAINS or Mokobara product photography, logos, or downloaded assets are used
anywhere in this project. All imagery is a CSS-generated, labeled placeholder artboard
(via the shared `PlaceholderImage` component) with no external image requests. All copy
is original or paraphrased — none of it is copied from either reference site.

## Run locally

```
npm install
npm run dev
```

## Build

```
npm run build
```

## Deployment

Deployed via Netlify using the configuration in `netlify.toml` (build command
`npm run build`, publish directory `dist`). The app is a single static route and works
from the Netlify root URL with no base-path configuration.

## Documentation

- [`docs/REFERENCE_ANALYSIS.md`](docs/REFERENCE_ANALYSIS.md) — per-reference pattern
  observations, clearly separated from implementation decisions.
- [`docs/COMPONENT_INVENTORY.md`](docs/COMPONENT_INVENTORY.md) — every component's
  purpose, props, page section, and responsive behavior.
- [`docs/COMPONENT_WORKFLOW.md`](docs/COMPONENT_WORKFLOW.md) — the ten-step process
  followed from research through deployment.
- [`FINAL_CHECKLIST.md`](FINAL_CHECKLIST.md) — the self-audit performed before
  considering the project complete.
