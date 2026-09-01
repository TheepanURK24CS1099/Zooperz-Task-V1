# Reference Analysis

This document records what was observed on the two public Shopify storefronts used as
research references, and separates that observation from the decisions made in this
project's implementation. No Liquid/theme code, proprietary assets, or copyrighted
imagery were copied — only publicly visible layout/structure patterns were studied.

---

## Reference 01 — RAINS

URL: https://www.rains.com/

### REFERENCE OBSERVATION

- **Visual style**: Matte, muted color palette; large full-bleed photography; generous
  whitespace; minimal, restrained typography.
- **Navigation structure**: Centered logo with a horizontal primary nav (New In, Women,
  Men, Bags, Footwear, Accessories, Home Away, World). Search and cart icons sit to the
  side. Each nav item expands into a multi-column megamenu with quick links, subcategories,
  and promotional imagery tiles. Mobile collapses into a hamburger menu.
- **Hero pattern**: Full-width banner image, a short headline, and two CTA buttons
  (a primary "shop" action and a secondary "explore campaign" action).
- **Category pattern**: A two-column image-led tile grid for secondary collections
  (e.g. suitcases / duffel bags), driven primarily by imagery with minimal text overlay.
- **Product pattern**: A horizontally scrollable marquee/carousel of product cards —
  image, product name, short subtitle, shop link. Light on badges/pricing in the
  carousel itself.
- **Editorial pattern**: A series of repeating full-width story blocks, each pairing a
  headline, short brand-positioning copy, and a dual CTA with a large image — alternating
  left/right image placement across the page (Rainwear, Backpacks, Travel Bags,
  Ready-to-Wear, Home Away, Stores).
- **Promotional pattern**: A compact three-item value-proposition row (shipping speed,
  warranty length, return window) presented as plain text, no icons.
- **Footer pattern**: Multi-column layout (Service, Company, Social, Region/Language
  selector) with expandable sections on mobile, plus a legal line (copyright, terms,
  privacy, accessibility, sitemap).
- **Spacing/rhythm**: Sections are large and few — each major block gets full-viewport
  breathing room rather than dense stacking.
- **Responsive observations**: Nav collapses to a hamburger; megamenu columns stack;
  footer columns collapse into accordions.

### OUR IMPLEMENTATION

- `RainsHeader` recreates the centered-logo nav bar with a flat link list (megamenu
  complexity was intentionally simplified — a full nested megamenu was judged out of
  scope for a static showcase). Its "Bag" icon now also carries a live cart count and
  links to the real `/checkout` route (see Checkout Flow section below).
- `RainsHero` recreates the full-bleed hero with dual CTA using placeholder imagery and
  original headline copy.
- `RainsValueProps` recreates the three-item trust row.
- `RainsCategorySection` recreates the two-column collection tile grid using the shared
  `CategoryTile` component.
- `RainsProductSection` recreates the horizontal product marquee using the shared
  `ProductCard` component; each card's "Add to Cart" button is wired to the live demo
  cart.
- `RainsEditorial` recreates three alternating story blocks (a representative subset of
  the observed six, to keep the showcase concise rather than exhaustive).
- The shared `Newsletter` and `SiteFooter` components are demonstrated with RAINS data
  to reflect the footer/newsletter patterns observed.

---

## Reference 02 — Mokobara

URL: https://mokobara.com/

### REFERENCE OBSERVATION

- **Visual style**: Warmer, brighter palette than RAINS; bold product photography;
  pricing and promotions are visually prominent (Indian e-commerce conventions —
  discount badges, strike-through pricing).
- **Navigation structure**: Centered logo, horizontal primary nav (Luggage, Backpacks
  and Briefcases, Totes, Slings/Crossbodies, Accessories, Wallets, Gift Card, Clearance
  Sale). Search, account, and cart icons. Megamenus expand with "By Size" / "By
  Collection" / "Highlights" groupings and featured imagery.
- **Announcement pattern**: A rotating promotional bar cycling through multiple
  messages (e.g. sitewide discount + "LIVE NOW" CTA), appearing above the header.
- **Hero pattern**: A single full-width banner with one primary CTA (single-focus,
  unlike RAINS' dual-CTA hero).
- **Category pattern**: A five-tile grid, each tile a photograph with a text label
  overlay — more tiles and denser than RAINS' two-column pattern.
- **Product pattern**: Grid/carousel of product cards showing image, name, dual pricing
  (discounted + struck-through original), color-variant swatches, and status badges
  ("Hot", "Sold Out", "Must Have"). Appears at least twice on the homepage (Bestsellers,
  New Arrivals) with identical card structure and different data.
- **Editorial pattern**: A single brand-story section pairing a short narrative headline
  ("craftsmanship"/"details" framing) with supporting copy and imagery — lighter-weight
  than RAINS' repeating editorial blocks.
- **Promotional pattern**: The rotating announcement bar functions as the primary
  promotional surface rather than a separate banner section.
- **Footer pattern**: Multi-column footer (categories, support/help, company) with
  social links and legal/policy links — standard Shopify footer conventions. A large
  interactive store-locator (48+ physical locations with maps) was also observed but is
  a maps/backend-dependent feature, not a static UI pattern.
- **Spacing/rhythm**: Denser than RAINS — more sections, more visible pricing/badging
  detail per section.
- **Responsive observations**: Category grid and product grid reflow to fewer columns;
  nav collapses to hamburger; rotating announcement bar remains full-width on mobile.

### OUR IMPLEMENTATION

- `AnnouncementBar` (shared) is demonstrated in rotating mode with Mokobara-style promo
  copy, since this pattern was clearly and repeatedly present on the reference.
- `MokobaraHeader` recreates the centered-logo nav with search/account/cart icons; its
  "Cart" icon carries a live item count and links to `/checkout`, same as RAINS.
- `MokobaraHero` recreates the single-CTA hero pattern (deliberately simpler than
  RAINS' dual-CTA hero, matching the observed difference).
- `MokobaraCategorySection` recreates the five-tile category grid.
- `MokobaraProductSection` recreates the product card grid with badges, dual pricing,
  and color swatches; it is reused with two different data sets (Bestsellers, New
  Arrivals) rather than built as two separate components, since the pattern is
  identical. "Sold Out" items disable their Add to Cart button, matching real
  storefront behavior.
- `MokobaraEditorial` recreates the single brand-story block.
- The interactive store locator (map, multi-city listings) was **not implemented** —
  it requires map/geolocation integration and physical store data that fall outside a
  static frontend component showcase, per the project's "no backend" constraint. It is
  documented here for completeness only.
- The shared `SiteFooter` component is demonstrated with Mokobara data to reflect the
  observed footer pattern.

---

## Cross-Reference Observations

Patterns that recur on **both** storefronts (and therefore became shared components):

- An announcement/utility bar above the header.
- A centered-logo header with a horizontal nav and search/cart icons.
- A full-bleed hero with headline + CTA(s).
- Image-led category tiles linking into collections.
- Product cards with image, title, and price as the minimum structure.
- A multi-column footer with link groups, social links, and a legal line.
- An email capture / newsletter surface.

Patterns that are **brand-specific** and were kept as separate components:

- RAINS' alternating full-width editorial storytelling blocks (heavier, more numerous).
- RAINS' plain-text value-proposition row.
- Mokobara's dual-pricing + color-swatch product card treatment.
- Mokobara's single, lighter-weight brand-story block.

---

## Checkout Flow — Reference Pattern

Both RAINS and Mokobara are built on Shopify, so both use Shopify's own hosted checkout
rather than a custom one. That checkout is one of the most recognizable UX patterns on
the web and was used as the reference for this project's checkout addition.

### REFERENCE OBSERVATION

- Shopify's standard checkout is a linear, multi-step flow: **Contact/Shipping info →
  Shipping method → Payment**, followed by an order confirmation page.
- A persistent **order summary panel** (line items, subtotal, shipping, total) sits
  alongside the form on desktop, and collapses to an expandable summary above the form
  on mobile.
- Form fields are grouped logically (contact, address, payment) with inline validation
  errors shown per field, not just on submit.
- A step indicator communicates progress through the flow.
- The confirmation page restates the order number and a delivery summary.

### OUR IMPLEMENTATION

- `Checkout.jsx` implements a four-visible-step flow (**Cart → Shipping → Payment →
  Review**) plus a confirmation state, using `CheckoutStepper` for progress.
- `OrderSummary` recreates the persistent summary panel — sticky beside the form on
  desktop (≥1025px), and stacked below it on tablet/mobile.
- `ShippingStep` and `PaymentStep` show inline, per-field validation errors (see
  `src/utils/checkout.js`), matching the reference's inline-validation pattern.
- `ConfirmationStep` recreates the order-number + delivery-summary confirmation page.
- Unlike the reference, this is entirely a **client-side demo**: there is no Shopify
  backend, no real payment gateway, and no network request is made anywhere in the
  flow. Placing an order only generates a mock order number locally and clears the
  in-memory/localStorage cart. This is called out explicitly in the UI (a "demo
  checkout" notice on the Payment and Review steps) so it is never mistaken for a real
  transaction.
