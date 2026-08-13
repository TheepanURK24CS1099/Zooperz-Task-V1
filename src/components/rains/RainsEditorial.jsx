import PlaceholderImage from '../shared/PlaceholderImage'
import Button from '../shared/Button'
import { rainsEditorialBlocks } from '../../data/rains'

export default function RainsEditorial() {
  return (
    <section className="editorial-section">
      {rainsEditorialBlocks.map((block) => (
        <div
          key={block.title}
          className={`editorial-block ${block.reverse ? 'editorial-block--reverse' : ''}`}
        >
          <PlaceholderImage label={block.imageLabel} ratio="3:2" className="editorial-block__media" />
          <div className="editorial-block__copy">
            <h4 className="editorial-block__title">{block.title}</h4>
            <p className="editorial-block__description">{block.description}</p>
            <Button variant="ghost" as="a" href="#">{block.cta}</Button>
          </div>
        </div>
      ))}
    </section>
  )
}
