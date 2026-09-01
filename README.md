# Shopify Reference Component Showcase

A React component study analyzing reusable storefront UI patterns from two Shopify
references, rebuilt as original, prop-driven React components — now with an integrated
(demo) cart and checkout flow.

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

The project has two phases:

1. **Component showcase** (`/`) — a single page presenting the researched RAINS and
   Mokobara patterns side by side, plus a component map and workflow summary.
2. **Checkout flow** (`/checkout`) — a working, connected cart and multi-step checkout
   built on top of the showcase's product cards, added as a second phase of the task.

It remains a **frontend prototype**: there is no real backend, no database, no
authentication, and no real payment processing anywhere in the project. See
[Checkout Flow](#checkout-flow-demo) below.

## Technology

- React 19
- React Router (client-side routing for `/` and `/checkout`)
- Vite
- JavaScript (JSX)
- CSS (custom properties, Flexbox/Grid, media queries — no CSS framework)
- React Context + `localStorage` for cart state (no external state library)

## Architecture

```
src/
  components/
    shared/     Reusable, prop-driven primitives used across both brand sections
    rains/      Components recreating RAINS-specific patterns
    mokobara/   Components recreating Mokobara-specific patterns
    checkout/   Cart/checkout step components (CheckoutStepper, OrderSummary,
                CartReviewStep, ShippingStep, PaymentStep, ReviewStep, ConfirmationStep)
  context/
    CartContext.jsx   Cart state (add/remove/update qty, totals), persisted to localStorage
  data/         Plain JS data objects (nav links, hero copy, products, footer columns)
  pages/
    Home.jsx      The showcase route (/)
    Checkout.jsx  The checkout route (/checkout)
  utils/
    checkout.js   Dependency-free validation/formatting helpers for the checkout forms
  styles/       global.css (reset + tokens + layout), components.css, checkout.css, responsive.css
docs/
  REFERENCE_ANALYSIS.md    What was observed on each reference site vs. what we built,
                            including the checkout's reference pattern (Shopify's own checkout)
  COMPONENT_INVENTORY.md   Every component: purpose, props, section, reusability
  COMPONENT_WORKFLOW.md    The research → build → deploy process followed, both phases
```

Components only exist where a genuine, researched UI pattern justified them — see
`docs/REFERENCE_ANALYSIS.md` for the reasoning behind each inclusion (and the one
notable exclusion: Mokobara's interactive store locator, which needs map/backend
integration outside this project's scope).

## Checkout Flow (Demo)

Clicking **Add to Cart** on any product card in the RAINS or Mokobara sections adds it
to a real cart (React Context + `localStorage`). The cart icon in the site header and in
both brand header demos shows the live item count and links to `/checkout`, which walks
through:

**Cart → Shipping → Payment → Review → Confirmation**

with inline form validation, a persistent order summary, and a mock order number on
completion.

**This is a prototype, not a real store:**
- No backend and no network request is ever made — everything happens in the browser.
- No real payment gateway is integrated; card fields are only checked for shape
  (length/format), never transmitted anywhere.
- "Placing an order" only generates a local mock order number and clears the cart.
- A visible "demo checkout" notice appears on the Payment and Review steps so this is
  never mistaken for a real transaction.

See `docs/REFERENCE_ANALYSIS.md` ("Checkout Flow — Reference Pattern") for how this maps
to Shopify's real hosted checkout, and `docs/COMPONENT_INVENTORY.md` for every checkout
component's props and behavior.

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
`npm run build`, publish directory `dist`, with an SPA redirect so `/checkout` resolves
correctly on refresh/direct load). The app works from the Netlify root URL with no
base-path configuration.

## Documentation

- [`docs/REFERENCE_ANALYSIS.md`](docs/REFERENCE_ANALYSIS.md) — per-reference pattern
  observations, clearly separated from implementation decisions, including the
  checkout's reference pattern.
- [`docs/COMPONENT_INVENTORY.md`](docs/COMPONENT_INVENTORY.md) — every component's
  purpose, props, page section, and responsive behavior, showcase and checkout alike.
- [`docs/COMPONENT_WORKFLOW.md`](docs/COMPONENT_WORKFLOW.md) — the process followed
  from research through deployment, across both project phases.
- [`FINAL_CHECKLIST.md`](FINAL_CHECKLIST.md) — the self-audit performed before
  considering the project complete.
