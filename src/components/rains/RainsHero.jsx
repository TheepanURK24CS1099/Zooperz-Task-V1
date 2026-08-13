import PlaceholderImage from '../shared/PlaceholderImage'
import Button from '../shared/Button'
import { rainsHero } from '../../data/rains'

export default function RainsHero() {
  return (
    <section className="brand-hero brand-hero--rains">
      <PlaceholderImage label={rainsHero.imageLabel} ratio="16:9" className="brand-hero__media" />
      <div className="brand-hero__overlay">
        <p className="brand-hero__eyebrow">{rainsHero.eyebrow}</p>
        <h2 className="brand-hero__title">{rainsHero.title}</h2>
        <p className="brand-hero__description">{rainsHero.description}</p>
        <div className="brand-hero__actions">
          <Button variant="primary" as="a" href="#">{rainsHero.primaryCta}</Button>
          <Button variant="secondary" as="a" href="#">{rainsHero.secondaryCta}</Button>
        </div>
      </div>
    </section>
  )
}
