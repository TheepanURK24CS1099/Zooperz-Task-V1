import ProductCard from '../shared/ProductCard'
import SectionHeader from '../shared/SectionHeader'

export default function MokobaraProductSection({ eyebrow, title, products, onAddToCart }) {
  return (
    <section className="product-section">
      <SectionHeader eyebrow={eyebrow} title={title} />
      <div className="product-section__grid">
        {products.map((product) => (
          <ProductCard
            key={product.title}
            {...product}
            onAdd={onAddToCart ? () => onAddToCart({ ...product, brand: 'Mokobara' }) : undefined}
          />
        ))}
      </div>
    </section>
  )
}
