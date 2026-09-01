# Component Inventory

This inventory matches the components actually rendered in `src/pages/Home.jsx` and
`src/pages/Checkout.jsx`. Every component listed here exists in code; no component in
code is left undocumented.

> **Scope note**: the checkout flow (`src/pages/Checkout.jsx` and everything under
> `src/components/checkout/`) is a client-side demo. There is no backend and no network
> request anywhere in the flow — see `docs/REFERENCE_ANALYSIS.md` for how it maps to
> Shopify's real checkout pattern.

## Summary Table — Showcase (Home)

| Component | Reference | Purpose | Props | Section | Order |
|---|---|---|---|---|---|
| AnnouncementBar | Shared | Utility/promo bar above the header | `messages[]`, `ctaLabel` | Mokobara | 1 |
| RainsHeader | RAINS | Centered-logo nav bar demo; Bag icon links to `/checkout` with live count | — (data-driven, reads cart via `useCart`) | RAINS | 1 |
| RainsHero | RAINS | Full-bleed hero, dual CTA | — (data-driven) | RAINS | 2 |
| RainsValueProps | RAINS | Trust/value proposition row | — (data-driven) | RAINS | 3 |
| RainsCategorySection | RAINS | Two-column collection tile grid | — (data-driven) | RAINS | 4 |
| RainsProductSection | RAINS | Horizontal product marquee, Add to Cart wired to demo cart | `onAddToCart` | RAINS | 5 |
| RainsEditorial | RAINS | Alternating story blocks | — (data-driven) | RAINS | 6 |
| MokobaraHeader | Mokobara | Centered-logo nav bar demo; Cart icon links to `/checkout` with live count | — (data-driven, reads cart via `useCart`) | Mokobara | 2 |
| MokobaraHero | Mokobara | Full-bleed hero, single CTA | — (data-driven) | Mokobara | 3 |
| MokobaraCategorySection | Mokobara | Five-tile category grid | — (data-driven) | Mokobara | 4 |
| MokobaraProductSection | Mokobara | Product grid — badges, dual pricing, swatches, Add to Cart | `eyebrow`, `title`, `products[]`, `onAddToCart` | Mokobara | 5 (used twice) |
| MokobaraEditorial | Mokobara | Single brand-story block | — (data-driven) | Mokobara | 6 |
| PlaceholderImage | Shared | Labeled placeholder artboard | `label`, `ratio`, `className` | All | — |
| Button | Shared | CTA / action button | `children`, `variant`, `as`, `href`, `onClick`, `type`, `className` | All | — |
| SectionHeader | Shared | Eyebrow + title + description block | `eyebrow`, `title`, `description`, `align` | All | — |
| ProductCard | Shared | Product tile with optional Add to Cart | `title`, `price`, `originalPrice`, `badge`, `rating`, `colors[]`, `imageLabel`, `onAdd` | RAINS, Mokobara | — |
| CategoryTile | Shared | Image-led category link | `label`, `imageLabel` | RAINS, Mokobara | — |
| Newsletter | Shared | Email capture section | `title`, `description`, `placeholder`, `buttonLabel` | RAINS | 7 |
| SiteFooter | Shared | Multi-column storefront footer pattern | `brand`, `columns[]`, `socialLabels[]`, `legalLinks[]` | RAINS, Mokobara | 8 / 7 |
| ComponentPreview | Shared | Labeled frame wrapping each demoed component | `name`, `description`, `children` | All | — |

## Summary Table — Checkout Flow

| Component | Purpose | Props | Reusability |
|---|---|---|---|
| CheckoutStepper | Horizontal progress indicator (Cart → Shipping → Payment → Review) | `current` (step key) | Shared across all checkout steps |
| OrderSummary | Sticky sidebar — line items, per-currency subtotal, item count | `items[]`, `currencyTotals`, `itemCount` | Reused on every checkout step |
| CartReviewStep | Step 1 — line items, quantity stepper, remove, empty-cart state | `items[]`, `onUpdateQty`, `onRemove`, `onContinue` | Checkout-only |
| ShippingStep | Step 2 — shipping address form with inline validation | `values`, `errors`, `onChange`, `onBack`, `onContinue` | Checkout-only |
| PaymentStep | Step 3 — payment method (Card / UPI / COD), formatted card inputs | `values`, `errors`, `onChange`, `onBack`, `onContinue` | Checkout-only |
| ReviewStep | Step 4 — final summary of shipping, payment, and items before ordering | `items[]`, `currencyTotals`, `shipping`, `payment`, `onBack`, `onPlaceOrder`, `placing` | Checkout-only |
| ConfirmationStep | Post-order confirmation — order number, delivery summary | `orderNumber`, `shipping`, `currencyTotals` | Checkout-only |

## Detail — Showcase (Home)

### RAINS Components

**RainsHeader**
- Reference: RAINS
- Purpose: Demonstrates the centered-logo header with horizontal nav and icon actions.
- Props: none (reads `rainsNav` from `src/data/rains.js`; reads live cart count via `useCart()`)
- Section: RAINS · position 1
- Reusability: Not shared — RAINS nav copy/branding is specific to this component.
- Responsive: Nav link row becomes horizontally scrollable under 768px; a menu icon
  appears (visual only, no functional drawer) to signal the mobile pattern.

**RainsHero**
- Reference: RAINS
- Purpose: Full-bleed hero with eyebrow, headline, description, and two CTAs.
- Props: none (reads `rainsHero` from `src/data/rains.js`)
- Section: RAINS · position 2
- Reusability: Not shared — layout (dual CTA, eyebrow) differs from Mokobara's
  single-CTA hero.
- Responsive: Overlay padding shrinks under 480px; CTAs wrap to a new line if needed.

**RainsValueProps**
- Reference: RAINS
- Purpose: Three-item plain-text trust row (shipping, warranty, returns).
- Props: none (reads `rainsValueProps` from `src/data/rains.js`)
- Section: RAINS · position 3
- Reusability: Not shared — Mokobara has no equivalent plain-text value row.
- Responsive: Items wrap to a vertical stack under 480px.

**RainsCategorySection**
- Reference: RAINS
- Purpose: Two-column image-led collection tile grid.
- Props: none (composes shared `CategoryTile` + `SectionHeader` with `rainsCategoryTiles`)
- Section: RAINS · position 4
- Reusability: Composes shared primitives; the section wrapper itself is RAINS-specific
  because tile count/copy differs from Mokobara.
- Responsive: Stays 2 columns until 480px, then stacks to 1.

**RainsProductSection**
- Reference: RAINS
- Purpose: Horizontally scrollable product marquee.
- Props: `onAddToCart(product)` — called with the product plus a `brand: 'RAINS'` tag
  when a card's Add to Cart button is pressed
- Section: RAINS · position 5
- Reusability: Composes shared `ProductCard`; the horizontal-scroll layout is
  RAINS-specific (Mokobara uses a wrapping grid instead).
- Responsive: Scroll container works unchanged at all breakpoints (native overflow-x).

**RainsEditorial**
- Reference: RAINS
- Purpose: Alternating full-width story blocks (image + headline + copy + CTA).
- Props: none (reads `rainsEditorialBlocks` from `src/data/rains.js`)
- Section: RAINS · position 6
- Reusability: Not shared — this alternating-block storytelling pattern was not
  confirmed on Mokobara.
- Responsive: Two-column block collapses to a single column under 1024px, image first.

### Mokobara Components

**MokobaraHeader**
- Reference: Mokobara
- Purpose: Demonstrates the centered-logo header with nav and search/account/cart icons.
- Props: none (reads `mokobaraNav` from `src/data/mokobara.js`; reads live cart count via `useCart()`)
- Section: Mokobara · position 2
- Reusability: Not shared — Mokobara-specific nav copy and an extra account icon.
- Responsive: Same collapsing behavior as `RainsHeader`.

**MokobaraHero**
- Reference: Mokobara
- Purpose: Full-bleed hero with a single CTA (no secondary action, matching reference).
- Props: none (reads `mokobaraHero` from `src/data/mokobara.js`)
- Section: Mokobara · position 3
- Reusability: Not shared — simpler single-CTA structure than `RainsHero`.
- Responsive: Same overlay behavior as `RainsHero`.

**MokobaraCategorySection**
- Reference: Mokobara
- Purpose: Five-tile category grid.
- Props: none (composes shared `CategoryTile` + `SectionHeader` with `mokobaraCategoryTiles`)
- Section: Mokobara · position 4
- Reusability: Composes shared primitives; wrapper is Mokobara-specific (5 tiles vs. 2).
- Responsive: 5 → 3 columns at 1024px, → 2 columns at 768px, → 1 at 480px.

**MokobaraProductSection**
- Reference: Mokobara
- Purpose: Product grid with badges, dual (discounted/original) pricing, and color
  swatches.
- Props: `eyebrow` (string), `title` (string), `products` (array of product objects),
  `onAddToCart(product)` — called with the product plus a `brand: 'Mokobara'` tag
- Section: Mokobara · positions 5a (Bestsellers) and 5b (New Arrivals) — the same
  component reused with two data sets, matching the reference's repeated carousel
  pattern without duplicating markup.
- Reusability: Deliberately prop-driven so one component serves both product rails.
- Responsive: 4 → 2 columns at 1024px/768px, → 1 column at 480px.

**MokobaraEditorial**
- Reference: Mokobara
- Purpose: Single brand-story block (image + headline + copy, no CTA).
- Props: none (reads `mokobaraEditorial` from `src/data/mokobara.js`)
- Section: Mokobara · position 6
- Reusability: Not shared — lighter single-block structure vs. `RainsEditorial`'s
  repeating blocks.
- Responsive: Collapses to single column under 1024px, same as `RainsEditorial`.

### Shared Components

**PlaceholderImage**
- Purpose: Renders a labeled, CSS-generated placeholder artboard (no external image
  requests) at a given aspect ratio.
- Props: `label` (string, also used as `aria-label`), `ratio` ("1:1" | "4:3" | "3:4" |
  "16:9" | "3:2"), `className` (optional)
- Used by: `ProductCard`, `CategoryTile`, `RainsHero`, `MokobaraHero`, `RainsEditorial`,
  `MokobaraEditorial`, `OrderSummary`, `CartReviewStep`
- Responsive: Fluid width via padding-bottom aspect-ratio trick; scales with parent.

**Button**
- Purpose: Single reusable CTA/action element across both brand sections and checkout.
- Props: `children`, `variant` ("primary" | "secondary" | "ghost"), `as` ("button" |
  "a"), `href`, `onClick`, `type` ("button" | "submit"), `className`
- Used by: `RainsHero`, `MokobaraHero`, `RainsEditorial`, `Newsletter`,
  `CartReviewStep`, `ShippingStep`, `PaymentStep`, `ReviewStep`
- Responsive: Wraps naturally in flex containers; stacks full-width in checkout actions
  under 768px.

**SectionHeader**
- Purpose: Consistent eyebrow/title/description heading block above a section.
- Props: `eyebrow`, `title`, `description`, `align` ("left" | "center")
- Used by: `RainsCategorySection`, `RainsProductSection`, `MokobaraCategorySection`,
  `MokobaraProductSection`
- Responsive: Font size fixed with sensible line-length via `max-width`.

**ProductCard**
- Purpose: Product tile — image, title, price, optional original price/badge/rating/
  color swatches, and an optional Add to Cart action.
- Props: `title`, `price`, `originalPrice`, `badge`, `rating`, `colors[]`, `imageLabel`,
  `onAdd()` (optional — renders the Add to Cart button when provided; automatically
  disabled and labeled "Sold Out" when `badge === 'Sold Out'`)
- Used by: `RainsProductSection`, `MokobaraProductSection`
- Responsive: Fixed min-width in RAINS' scroller; fluid grid cell in Mokobara's grid.

**CategoryTile**
- Purpose: Image-led category link with a label overlay.
- Props: `label`, `imageLabel`
- Used by: `RainsCategorySection`, `MokobaraCategorySection`
- Responsive: Grid column count changes per breakpoint (see parent sections above).

**AnnouncementBar**
- Purpose: Utility/promotional bar above the header; supports a single static message
  or auto-rotating messages.
- Props: `messages[]` (string array), `ctaLabel` (optional string)
- Used by: Mokobara section demo (rotating promo pattern)
- Responsive: Stacks message/CTA vertically under 480px.

**Newsletter**
- Purpose: Email capture section with headline, description, input, and submit button.
- Props: `title`, `description`, `placeholder`, `buttonLabel`
- Used by: RAINS section demo (confirmed reference pattern)
- Responsive: Input + button stack vertically under 768px.

**SiteFooter**
- Purpose: Multi-column storefront footer — brand mark, link columns, social links,
  legal line.
- Props: `brand`, `columns[]` (`{heading, links[]}`), `socialLabels[]`, `legalLinks[]`
- Used by: RAINS section demo and Mokobara section demo (same component, two data sets)
- Responsive: Columns wrap; legal row stacks under 768px.

**ComponentPreview**
- Purpose: Showcase-only wrapper that labels each demonstrated component with its name
  and a one-line description, so a reviewer can map code to rendered output.
- Props: `name`, `description`, `children`
- Used by: Every component demo in the RAINS and Mokobara sections.
- Responsive: Tag row wraps to a vertical stack under 480px.

## Detail — Checkout Flow

**CheckoutStepper**
- Purpose: Shows progress through the four visible checkout steps.
- Props: `current` (one of `'cart' | 'shipping' | 'payment' | 'review'`)
- Used by: `Checkout.jsx`, rendered once above the active step panel.
- Responsive: Step labels hide under 480px, leaving just the numbered/checked circles.

**OrderSummary**
- Purpose: Persistent order summary — thumbnail, title, brand, quantity, and price per
  line item, plus a subtotal grouped by currency (RAINS is priced in €, Mokobara in ₹;
  the demo intentionally does not convert between them and says so).
- Props: `items[]`, `currencyTotals` (`{ [currencySymbol]: number }`), `itemCount`
- Used by: `Checkout.jsx`, on every step except confirmation.
- Responsive: Sticky beside the form ≥1025px; stacks below the form on tablet/mobile.

**CartReviewStep**
- Purpose: Step 1 — review line items, adjust quantity (minimum 1, "Remove" deletes the
  line), and continue; shows a dedicated empty-cart state with a link back to `/`.
- Props: `items[]`, `onUpdateQty(id, qty)`, `onRemove(id)`, `onContinue()`
- Responsive: Row grid re-flows to a two-row layout under 768px so quantity/remove
  controls stay reachable without overflow.

**ShippingStep**
- Purpose: Step 2 — collects a shipping address; validates required fields and email
  format on submit via `src/utils/checkout.js`, with inline per-field errors.
- Props: `values`, `errors`, `onChange(name, value)`, `onBack()`, `onContinue()`
- Responsive: Two-column form grid collapses to one column under 768px.

**PaymentStep**
- Purpose: Step 3 — payment method selection (Card / UPI / Cash on Delivery). Card
  fields are formatted as you type (grouped digits, MM/YY) and validated for shape only
  (length/format) — nothing is a real payment integration. Carries a persistent "demo
  checkout" notice.
- Props: `values`, `errors`, `onChange(name, value)`, `onBack()`, `onContinue()`
- Responsive: Method options wrap to a vertical stack under 480px.

**ReviewStep**
- Purpose: Step 4 — final read-only summary of shipping address, masked payment method,
  and line items before the mock order is placed.
- Props: `items[]`, `currencyTotals`, `shipping`, `payment`, `onBack()`,
  `onPlaceOrder()`, `placing` (boolean, disables actions during the simulated delay)
- Responsive: Same panel layout as other steps; totals list wraps naturally.

**ConfirmationStep**
- Purpose: Post-order confirmation — generated order number, delivery summary, and a
  link back to the showcase. Explicitly states no real order or charge occurred.
- Props: `orderNumber`, `shipping`, `currencyTotals`
- Used by: `Checkout.jsx`, replacing the step layout once an order is placed.
