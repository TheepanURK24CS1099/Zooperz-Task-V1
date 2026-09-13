# Zooperz Website Builder Evaluation & Bug Report

**Platform Tested:** [designer.zooperz.com](https://designer.zooperz.com)  
**Evaluator Credentials:** `designer@gmail.com`  
**Reference Project Evaluated:** Shopify Reference Component Showcase (RAINS & Mokobara UI Patterns + Dynamic Cart & Multi-Step Checkout Flow)  
**Date of Evaluation:** September 13, 2026  

---

## 1. Executive Summary & Feasibility of Recreating the Previous Website

The previous submission consisted of an end-to-end e-commerce prototype comprising two distinct layers:
1. **Storefront Component Showcase (`/`):** RAINS and Mokobara UI patterns (Announcement bar, Header, Hero banners, Category grids, Product cards, Editorial sections, and Footers).
2. **Interactive Cart & Multi-Step Checkout Engine (`/checkout`):** Client-side state orchestration via React Context + `localStorage`, dynamic item counts, stepper navigation (Cart Review → Shipping → Payment → Review → Order Confirmation), and form validations.

### Feasibility Summary Table

| Functional Area | Recreatable in Zooperz? | Feasibility Rating | Analysis & Notes |
| :--- | :---: | :---: | :--- |
| **Storefront Visual Structure** | **Yes** | **90%** | Announcement bar, header navigation, hero carousel, product grids, category cards, and footers can all be assembled using built-in sections and layout blocks. |
| **Theme Styling & Customization** | **Yes (Partial)** | **75%** | Typography, colors, spacing, background images, and layout orders can be configured via the Inspector and JSON schema. Specific bespoke micro-animations are constrained by pre-defined block capabilities. |
| **Live Cart State Management** | **No** | **0%** | The builder is a layout/content composition tool and does not expose client-side state engines (e.g., React Context, custom JavaScript state hooks) to dynamically bind card clicks to a global cart counter. |
| **Multi-Step Checkout Flow** | **No** | **0%** | The multi-step `/checkout` application layer with inline form validation, step progression, and simulated order generation cannot be created within the template builder. |

> **Conclusion:** The visual marketing storefront and layout can be recreated with high visual fidelity. However, the custom interactive web application logic (dynamic cart and multi-step checkout) cannot be natively built inside the builder.

---

## 2. In-Depth Exploration of Builder Modes

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                             ZOOPERZ WEBSITE BUILDER                              │
├─────────────────────────┬──────────────────────────────┬─────────────────────────┤
│    NAVIGATOR (Left)     │      CANVAS (Center)         │    INSPECTOR (Right)    │
│  - Document Tree        │  - Real-Time WYSIWYG View    │  - Selected Element     │
│  - Header Group         │  - Device Viewports:         │    Properties           │
│  - Template Sections    │    Desktop / Tablet / Mobile │  - Copy & Typography    │
│  - Footer Group         │  - Live Content Highlighting │  - Layout & Spacing     │
└─────────────────────────┴──────────────────────────────┴─────────────────────────┘
                                   ▲
                                   │ Toggle (Top Toolbar)
                                   ▼
┌──────────────────────────────────────────────────────────────────────────────────┐
│                                   JSON MODE                                      │
│  - Declarative Page Tree Schema (`sections`, `blocks`, `order`, `settings`)     │
│  - Code-level structural editing, bulk mutations, & bidirectional sync           │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### A. Designer Layout Mode (Visual Mode)

The Designer Layout Mode operates through a synchronized three-panel layout:

1. **The Navigator (Left Panel):**
   - Renders a tree view of the current page hierarchy broken down into three logical layout zones: `Header`, `Template`, and `Footer`.
   - Supports drag-and-drop reordering of sections and nested blocks.
   - Provides contextual menus for duplicating, hiding, or deleting specific blocks.
   - Contains the `+ Add section` trigger to insert new pre-built components into the current template.

2. **The Canvas (Center Viewport):**
   - Renders a live preview iframe that reflects visual changes instantly.
   - Includes top-bar viewport switchers for **Desktop**, **Tablet**, and **Mobile** breakpoints.
   - Clicking on any visual block highlights the element with a blue bounding box and links focus to the Inspector panel.

3. **The Inspector (Right Panel):**
   - Displays property configuration fields for whichever block or section is active.
   - Includes controls for text inputs (headlines, subheadlines, button labels), media pickers (image URLs, alt text), layout options (alignment, column counts, padding), and style settings (colors, themes).
   - Updates input fields live without requiring an explicit page reload.

---

### B. JSON Mode

JSON Mode exposes the declarative data structure powering the theme template:

1. **Schema Structure:**
   The page schema is organized into modular dictionary trees:
   ```json
   {
     "current": {
       "sections": {
         "header-mega": {
           "type": "mega-header",
           "settings": {
             "sticky": true,
             "logo_text": "ZOOPERZ STORE"
           }
         },
         "hero-carousel": {
           "type": "hero-carousel",
           "settings": {
             "autoplay": true,
             "interval": 5000
           },
           "blocks": {
             "slide_1": {
               "type": "slide",
               "settings": {
                 "headline": "Modern Essentials",
                 "subheadline": "Engineered for daily travel",
                 "button_text": "Shop Collection",
                 "button_link": "/collections/travel"
               }
             }
           },
           "block_order": ["slide_1"]
         }
       },
       "order": [
         "header-mega",
         "hero-carousel",
         "trust-badges",
         "product-grid",
         "footer-main"
       ]
     }
   }
   ```

2. **Bidirectional Synchronization:**
   - Changes executed in the Designer Layout Mode instantly update the in-memory JSON document.
   - Developers can edit JSON directly (e.g., reordering keys in `order`, batch-updating headlines, cloning complex block trees), and toggling back to Visual Mode updates the canvas.

3. **Key Advantages of JSON Mode:**
   - **Bulk Configuration:** Quickly duplicate dozens of product cards or feature items without repetitive UI clicking.
   - **Portability:** Export and import complete page layouts as code assets across projects.
   - **Precise Control:** Directly edit raw properties that may lack dedicated UI controls in the visual inspector.

---

## 3. Component Recreation Mapping

Detailed breakdown of recreating components from the previous submission:

| Reference Component | Recreatable? | Implementation in Zooperz Builder |
| :--- | :---: | :--- |
| **Announcement Bar** | **Yes** | Place an Announcement Bar block inside the `Header` section; set background color and promotional marquee copy. |
| **Store Navigation & Branding** | **Yes** | Use the Header block; configure brand logo/text and navigation link hierarchy. |
| **Hero Carousel / Banner** | **Yes** | Add `hero-carousel` section; configure slide image URLs, headlines, and call-to-action buttons. |
| **Mokobara Category Tiles** | **Yes** | Use a Multi-column or Category Grid section; configure 3-4 column cards with category photography and captions. |
| **Product Grid & Cards** | **Yes** | Add Product Grid / Collection section; configure item titles, pricing, ratings, and image assets. |
| **Editorial Narrative Section** | **Yes** | Use Rich Text + Media split block to present brand mission copy and imagery. |
| **Multi-Column Footer** | **Yes** | Configure Footer section with newsletter subscription input, copyright copy, and footer link groups. |
| **Dynamic Cart Count Badge** | **No** | Requires global reactive state (`CartContext`) that updates the badge number upon button click. |
| **Multi-Step Checkout Route** | **No** | Full client-side routing (`/checkout`), step state machine, and shipping/payment validation forms require custom application code. |

---

## 4. Identified Bugs, UX Quirks & Deficiencies

### Bug 1: Infinite Loading Spinner on Default Store Route
- **Severity:** High
- **Description:** Navigating to the default store URL (`/editor/shop_mystore-8693/customize`) causes the editor to enter an infinite loading loop where the canvas never renders.
- **Steps to Reproduce:**
  1. Log in at `https://designer.zooperz.com`.
  2. Click the default store link in the dashboard.
  3. The browser remains hung on a blank loading screen with a spinner.
- **Workaround:** Manually navigate to `/themes` and enter the specific theme pack editor (`/editor/pack_1789306308054/customize`).
- **Expected Behavior:** The editor should detect whether the store has an active theme and load the fallback template or display a helpful error message.

---

### Bug 2: "Add to Page" Modal Backdrop Click Does Not Dismiss
- **Severity:** Medium
- **Description:** When the "Add to Page" component modal is opened, clicking outside the modal on the background overlay fails to dismiss the dialog. The close icon button also demonstrates intermittent click unresponsiveness.
- **Steps to Reproduce:**
  1. Click `Add Block` or `+ Add section`.
  2. The modal dialog opens.
  3. Click on the darkened backdrop outside the dialog.
  4. The modal remains open on screen.
- **Workaround:** Press the `Escape` key.
- **Expected Behavior:** Clicking outside the modal area or clicking the close button should dismiss the modal immediately.

---

### Bug 3: Canvas Element Click Desync with Inspector Tree
- **Severity:** Medium
- **Description:** Clicking directly on a nested sub-element (e.g., a specific button or subtitle inside a hero section) on the canvas selects the parent section rather than the targeted child block.
- **Steps to Reproduce:**
  1. In Visual Designer mode, click on an individual text element or button inside a section.
  2. Inspect the right-hand panel.
  3. The Inspector continues to show parent section properties rather than navigating into the clicked child block.
- **Expected Behavior:** The canvas event handler should inspect the click target and focus the lowest matching block in the Navigator and Inspector.

---

### Bug 4: Lack of JSON Syntax Validation & Error Guarding
- **Severity:** Medium
- **Description:** In JSON mode, entering invalid syntax (e.g., a trailing comma or unclosed bracket) does not provide immediate lint highlighting or a syntax error banner before switching back to Visual Mode.
- **Steps to Reproduce:**
  1. Switch to JSON Mode.
  2. Delete a closing bracket or add a trailing comma.
  3. Attempt to switch back to Visual Mode.
  4. The editor either fails silently or resets to the previous valid state without giving clear diagnostic feedback.
- **Expected Behavior:** An integrated code editor (such as Monaco Editor) should display line-level syntax validation errors and prevent mode switching until syntax is corrected.

---

### Bug 5: Responsive Viewport Overflow on Mobile Breakpoints
- **Severity:** Low
- **Description:** When previewing in Tablet (768px) or Mobile (375px) viewports, sections containing fixed grid widths or flex-basis values overflow horizontally past the preview boundary.
- **Steps to Reproduce:**
  1. Set the top viewport toggle to Mobile view.
  2. Scroll through sections with multiple columns (such as Trust Badges or Product Carousels).
  3. Notice horizontal scrolling occurs inside the preview container.
- **Expected Behavior:** Mobile breakpoint styling should enforce `flex-wrap: wrap` and fluid column scaling.

---

## 5. Summary & Recommendations

1. **For Marketing & Storefront Design:** Zooperz Website Builder is well-suited for assembling modern, high-converting e-commerce storefront landing pages, category overviews, and brand presentations.
2. **For Dynamic Application Features:** Custom web application features (such as stateful multi-step checkouts, client-side cart calculations, and custom user workflows) should either be handled by connecting a headless checkout API or by embedding custom application widgets.
3. **Builder Enhancements:** Addressing route resolution bugs, improving modal click-outside handling, and incorporating code linting into the JSON editor will significantly elevate the developer and designer experience.
