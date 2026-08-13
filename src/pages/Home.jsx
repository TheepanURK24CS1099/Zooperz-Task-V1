import AnnouncementBar from '../components/shared/AnnouncementBar'
import ComponentPreview from '../components/shared/ComponentPreview'
import Newsletter from '../components/shared/Newsletter'
import SiteFooter from '../components/shared/SiteFooter'

import RainsHeader from '../components/rains/RainsHeader'
import RainsHero from '../components/rains/RainsHero'
import RainsCategorySection from '../components/rains/RainsCategorySection'
import RainsProductSection from '../components/rains/RainsProductSection'
import RainsEditorial from '../components/rains/RainsEditorial'
import RainsValueProps from '../components/rains/RainsValueProps'

import MokobaraHeader from '../components/mokobara/MokobaraHeader'
import MokobaraHero from '../components/mokobara/MokobaraHero'
import MokobaraCategorySection from '../components/mokobara/MokobaraCategorySection'
import MokobaraProductSection from '../components/mokobara/MokobaraProductSection'
import MokobaraEditorial from '../components/mokobara/MokobaraEditorial'

import { rainsNewsletter, rainsFooter } from '../data/rains'
import { mokobaraAnnouncements, mokobaraBestsellers, mokobaraNewArrivals, mokobaraFooter } from '../data/mokobara'

const NAV_LINKS = [
  { href: '#overview', label: 'Overview' },
  { href: '#rains', label: 'RAINS' },
  { href: '#mokobara', label: 'Mokobara' },
  { href: '#component-map', label: 'Component Map' },
  { href: '#workflow', label: 'Workflow' },
]

const WORKFLOW_STEPS = [
  'Reference Research',
  'UI Pattern Identification',
  'Component Extraction',
  'Props + Data Modeling',
  'Reusable React Components',
  'Single-Page Showcase',
  'Responsive Testing',
  'Netlify Deployment',
]

const COMPONENT_MAP = {
  rains: ['RainsHeader', 'RainsHero', 'RainsCategorySection', 'RainsProductSection', 'RainsEditorial', 'RainsValueProps'],
  mokobara: ['MokobaraHeader', 'MokobaraHero', 'MokobaraCategorySection', 'MokobaraProductSection', 'MokobaraEditorial'],
  shared: ['PlaceholderImage', 'Button', 'SectionHeader', 'ProductCard', 'CategoryTile', 'AnnouncementBar', 'Newsletter', 'SiteFooter', 'ComponentPreview'],
}

export default function Home() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">Skip to main content</a>

      <header className="site-header">
        <div className="site-header__inner">
          <span className="site-header__title">Shopify Reference Component Showcase</span>
          <nav className="site-header__nav" aria-label="Showcase sections">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="overview" className="showcase-section overview">
          <div className="overview__intro">
            <p className="eyebrow">Frontend Component Study</p>
            <h1>Two storefronts, deconstructed into reusable React components.</h1>
            <p className="overview__lede">
              This project studies the publicly visible UI structure of two Shopify storefronts and
              rebuilds their recurring section patterns as original, prop-driven React components —
              using placeholder imagery and paraphrased copy throughout. No proprietary code, assets,
              or product photography are used.
            </p>
          </div>
          <div className="overview__references">
            <a className="reference-card" href="#rains">
              <span className="reference-card__eyebrow">Reference 01 · International</span>
              <span className="reference-card__name">RAINS</span>
              <span className="reference-card__url">rains.com</span>
            </a>
            <a className="reference-card" href="#mokobara">
              <span className="reference-card__eyebrow">Reference 02 · Indian</span>
              <span className="reference-card__name">Mokobara</span>
              <span className="reference-card__url">mokobara.com</span>
            </a>
          </div>
        </section>

        <section id="rains" className="showcase-section brand-section brand-section--rains">
          <div className="brand-section__intro">
            <p className="eyebrow">Reference 01 · International</p>
            <h2>RAINS</h2>
            <p>
              A Scandinavian rainwear label built around matte-finish waterproof materials. Its storefront
              leans on full-bleed imagery, restrained typography, and a small, confident set of repeating
              section patterns.
            </p>
          </div>

          <ComponentPreview name="RainsHeader" description="Centered logo, horizontal nav, search + bag icons">
            <RainsHeader />
          </ComponentPreview>

          <ComponentPreview name="RainsHero" description="Full-bleed hero with eyebrow, dual CTA">
            <RainsHero />
          </ComponentPreview>

          <ComponentPreview name="RainsValueProps" description="Three-item trust row below the hero">
            <RainsValueProps />
          </ComponentPreview>

          <ComponentPreview name="RainsCategorySection" description="Two-column image-led collection tiles">
            <RainsCategorySection />
          </ComponentPreview>

          <ComponentPreview name="RainsProductSection" description="Horizontally scrolling product marquee">
            <RainsProductSection />
          </ComponentPreview>

          <ComponentPreview name="RainsEditorial" description="Alternating full-width story blocks per category">
            <RainsEditorial />
          </ComponentPreview>

          <ComponentPreview name="Newsletter (shared)" description="Left-aligned email capture, reused across brands">
            <Newsletter {...rainsNewsletter} />
          </ComponentPreview>

          <ComponentPreview name="SiteFooter (shared)" description="Multi-column footer pattern demonstrated with RAINS data">
            <SiteFooter {...rainsFooter} />
          </ComponentPreview>
        </section>

        <section id="mokobara" className="showcase-section brand-section brand-section--mokobara">
          <div className="brand-section__intro">
            <p className="eyebrow">Reference 02 · Indian</p>
            <h2>MOKOBARA</h2>
            <p>
              A travel and bag brand built for movement — bright product photography, dual pricing,
              color-variant swatches, and rotating promotional messaging drive the storefront.
            </p>
          </div>

          <ComponentPreview name="AnnouncementBar (shared)" description="Rotating promotional messages above the header">
            <AnnouncementBar messages={mokobaraAnnouncements} ctaLabel="Shop Now" />
          </ComponentPreview>

          <ComponentPreview name="MokobaraHeader" description="Centered logo, nav, search + account + cart icons">
            <MokobaraHeader />
          </ComponentPreview>

          <ComponentPreview name="MokobaraHero" description="Full-bleed hero with single CTA">
            <MokobaraHero />
          </ComponentPreview>

          <ComponentPreview name="MokobaraCategorySection" description="Five-tile category grid with image overlay labels">
            <MokobaraCategorySection />
          </ComponentPreview>

          <ComponentPreview name="MokobaraProductSection" description="Grid of product cards with badges, dual pricing, color swatches — reused for Bestsellers and New Arrivals">
            <MokobaraProductSection eyebrow="Bestsellers" title="What everyone's packing" products={mokobaraBestsellers} />
            <MokobaraProductSection eyebrow="New Arrivals" title="Just landed" products={mokobaraNewArrivals} />
          </ComponentPreview>

          <ComponentPreview name="MokobaraEditorial" description="Single brand-story block pairing image and copy">
            <MokobaraEditorial />
          </ComponentPreview>

          <ComponentPreview name="SiteFooter (shared)" description="Same footer pattern, demonstrated with Mokobara data">
            <SiteFooter {...mokobaraFooter} />
          </ComponentPreview>
        </section>

        <section id="component-map" className="showcase-section component-map">
          <p className="eyebrow">Component Map</p>
          <h2>Every component, grouped by reference</h2>
          <div className="component-map__grid">
            <div className="component-map__group">
              <h3>RAINS</h3>
              <ul>{COMPONENT_MAP.rains.map((c) => <li key={c}><code>{c}</code></li>)}</ul>
            </div>
            <div className="component-map__group">
              <h3>Mokobara</h3>
              <ul>{COMPONENT_MAP.mokobara.map((c) => <li key={c}><code>{c}</code></li>)}</ul>
            </div>
            <div className="component-map__group">
              <h3>Shared</h3>
              <ul>{COMPONENT_MAP.shared.map((c) => <li key={c}><code>{c}</code></li>)}</ul>
            </div>
          </div>
        </section>

        <section id="workflow" className="showcase-section workflow">
          <p className="eyebrow">Workflow</p>
          <h2>From reference research to deployed showcase</h2>
          <ol className="workflow__steps">
            {WORKFLOW_STEPS.map((step, i) => (
              <li key={step} className="workflow__step">
                <span className="workflow__index">{String(i + 1).padStart(2, '0')}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer id="footer" className="page-footer">
        <div className="page-footer__grid">
          <div>
            <h4>Project</h4>
            <p>Shopify Reference Component Showcase — an internship submission analyzing storefront UI
              patterns and rebuilding them as an original React component library.</p>
          </div>
          <div>
            <h4>References</h4>
            <ul>
              <li><a href="https://www.rains.com/" target="_blank" rel="noreferrer">RAINS — rains.com</a></li>
              <li><a href="https://mokobara.com/" target="_blank" rel="noreferrer">Mokobara — mokobara.com</a></li>
            </ul>
          </div>
          <div>
            <h4>Technology</h4>
            <p>React · Vite · JavaScript · CSS</p>
          </div>
          <div>
            <h4>Note</h4>
            <p>Built for internship submission. All imagery is placeholder content; all copy is
              original or paraphrased. No Shopify Liquid, theme code, or proprietary assets are used.</p>
          </div>
        </div>
        <p className="page-footer__legal">© {new Date().getFullYear()} Component study project. Not affiliated with RAINS or Mokobara.</p>
      </footer>
    </div>
  )
}
