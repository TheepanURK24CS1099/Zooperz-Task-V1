import PlaceholderImage from '../shared/PlaceholderImage'
import Button from '../shared/Button'
import { mokobaraHero } from '../../data/mokobara'

export default function MokobaraHero() {
  return (
    <section className="brand-hero brand-hero--mokobara">
      <PlaceholderImage label={mokobaraHero.imageLabel} ratio="16:9" className="brand-hero__media" />
      <div className="brand-hero__overlay">
        <h2 className="brand-hero__title">{mokobaraHero.title}</h2>
        <p className="brand-hero__description">{mokobaraHero.description}</p>
        <div className="brand-hero__actions">
          <Button variant="primary" as="a" href="#">{mokobaraHero.cta}</Button>
        </div>
      </div>
    </section>
  )
}
