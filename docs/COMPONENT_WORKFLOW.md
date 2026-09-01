# Component Workflow

This describes the actual process followed to build this project, from reference
research to deployment, across both project phases: the component showcase and the
checkout flow added afterward.

## Phase 1 — Component Showcase

### 1. Reference Research
Fetched and read the public homepage structure of both storefronts —
[rains.com](https://www.rains.com/) and [mokobara.com](https://mokobara.com/) — noting
layout, section order, and recurring UI patterns without copying markup, styles, or
copy.

### 2. Pattern Identification
Grouped what was observed into named patterns (announcement bar, header/nav, hero,
category tiles, product cards, editorial/story blocks, value props, newsletter,
footer) and noted where the two references matched vs. diverged. See
`docs/REFERENCE_ANALYSIS.md`.

### 3. Component Planning
Decided which patterns were genuinely shared (→ `src/components/shared/`) versus
brand-specific (→ `src/components/rains/`, `src/components/mokobara/`). Components were
only created where a real, observed pattern justified them — no component was added
speculatively.

### 4. Props / Data Modeling
Extracted each section's variable content into plain data objects/arrays in
`src/data/rains.js` and `src/data/mokobara.js` (nav links, hero copy, product lists,
category tiles, footer columns). Components consume this data through props, so the
same component can render either brand's content, or reuse the same section twice with
different data (e.g. `MokobaraProductSection` for both Bestsellers and New Arrivals).

### 5. React Implementation
Built each component as a small functional component in
`src/components/{shared,rains,mokobara}/`, composing shared primitives
(`PlaceholderImage`, `Button`, `ProductCard`, `CategoryTile`, `SectionHeader`) inside
brand-specific section components.

### 6. Placeholder Implementation
All imagery uses the shared `PlaceholderImage` component — a CSS-generated, labeled
artboard with a fixed aspect ratio and no external network requests. All copy is
original or paraphrased; no text was copied from either reference site.

### 7. Page Assembly
Assembled every component into a single route (`/`) in `src/pages/Home.jsx`, wrapping
each demonstrated component in a `ComponentPreview` frame (name + description) so the
rendered page doubles as living documentation.

### 8–10. Responsive Testing, Build Validation, Deployment Config
Verified layout at 1440/1024/768/390px, ran `npm run build` to confirm a clean compile,
and configured `netlify.toml` for a standard Vite deployment.

---

## Phase 2 — Checkout Flow

Added after the showcase was reviewed and the task expanded to include an integrated
checkout experience.

### 1. Reference Research
Since both RAINS and Mokobara run on Shopify's own hosted checkout, that checkout's
well-known structure (linear steps, persistent order summary, inline validation, step
indicator) was used as the reference pattern rather than re-researching either brand
individually. Documented in `docs/REFERENCE_ANALYSIS.md` under "Checkout Flow —
Reference Pattern."

### 2. State Design
Introduced a `CartContext` (`src/context/CartContext.jsx`) as the single source of
truth for cart state — add/remove/update-quantity, item count, and per-currency
subtotals — persisted to `localStorage` so the cart survives a page reload. No
sensitive data (payment details) is ever placed in this context or storage.

### 3. Data Modeling
Extended the existing product data (`src/data/rains.js`, `src/data/mokobara.js`) with a
stable `id`, a numeric `priceValue`, and a `currency` symbol per product, so cart math
could be computed reliably without parsing display strings.

### 4. Routing
Added `react-router-dom` and split the app into two routes: `/` (the existing showcase)
and `/checkout` (the new flow), wrapping both in `CartProvider` at the root
(`src/main.jsx`) so cart state is shared across pages.

### 5. Component Planning
Broke the checkout experience into one page (`src/pages/Checkout.jsx`) orchestrating
step state, and one component per step under `src/components/checkout/`
(`CartReviewStep`, `ShippingStep`, `PaymentStep`, `ReviewStep`, `ConfirmationStep`),
plus two shared-within-checkout pieces (`CheckoutStepper`, `OrderSummary`) — mirroring
the existing project's pattern of small, prop-driven, single-purpose components.

### 6. Validation & Formatting
Wrote plain, dependency-free validation and formatting helpers
(`src/utils/checkout.js`) for shipping-field validation, payment-field shape validation
(format/length only — this is not a real payment integration), card-number/expiry
input formatting, currency formatting, and mock order-number generation.

### 7. Wiring Into the Showcase
Gave `ProductCard` an optional `onAdd` prop so "Add to Cart" only appears where a
handler is supplied; wired it through `RainsProductSection` and
`MokobaraProductSection` on the homepage. Updated `RainsHeader`, `MokobaraHeader`, and
the site's own header to show a live cart count linking to `/checkout`, so the showcase
and the checkout flow feel like one connected prototype rather than two separate demos.

### 8. Placeholder & Safety Policy
Kept the "no backend, no real payment processing" constraint explicit in the UI itself:
a visible demo notice appears on the Payment and Review steps, no network request is
ever made, and "placing an order" only generates a local mock order number and clears
the cart.

### 9. Responsive & Flow Testing
Used Playwright to drive the full flow end-to-end (add to cart → cart review → shipping
validation → payment validation → review → place order → confirmation → cart cleared)
and to check for horizontal overflow and console errors at 1440/1024/768/390px on both
`/` and `/checkout`, including mid-flow states with items in the cart.

### 10. Build Validation & Documentation
Ran `npm run build` and `npm run lint` again after the checkout addition, then updated
this document, `docs/COMPONENT_INVENTORY.md`, `docs/REFERENCE_ANALYSIS.md`, `README.md`,
and `FINAL_CHECKLIST.md` to reflect the new components and scope.
