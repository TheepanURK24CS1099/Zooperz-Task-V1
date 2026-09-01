import ProductCard from '../shared/ProductCard'
import SectionHeader from '../shared/SectionHeader'
import { rainsProducts } from '../../data/rains'

export default function RainsProductSection({ onAddToCart }) {
  return (
    <section className="product-section">
      <SectionHeader eyebrow="Footwear Marquee" title="Five ways to outwalk the forecast" />
      <div className="product-section__scroller">
        {rainsProducts.map((product) => (
          <ProductCard
            key={product.title}
            {...product}
            onAdd={onAddToCart ? () => onAddToCart({ ...product, brand: 'RAINS' }) : undefined}
          />
        ))}
      </div>
    </section>
  )
}
