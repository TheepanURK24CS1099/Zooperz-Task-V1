import PlaceholderImage from '../shared/PlaceholderImage'
import { mokobaraEditorial } from '../../data/mokobara'

export default function MokobaraEditorial() {
  return (
    <section className="editorial-section">
      <div className="editorial-block">
        <PlaceholderImage label={mokobaraEditorial.imageLabel} ratio="3:2" className="editorial-block__media" />
        <div className="editorial-block__copy">
          <h4 className="editorial-block__title">{mokobaraEditorial.title}</h4>
          <p className="editorial-block__description">{mokobaraEditorial.description}</p>
        </div>
      </div>
    </section>
  )
}
