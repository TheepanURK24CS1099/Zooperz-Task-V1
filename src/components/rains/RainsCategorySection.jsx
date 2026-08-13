import CategoryTile from '../shared/CategoryTile'
import SectionHeader from '../shared/SectionHeader'
import { rainsCategoryTiles } from '../../data/rains'

export default function RainsCategorySection() {
  return (
    <section className="category-section">
      <SectionHeader eyebrow="Shop by Category" title="Bags built for the in-between" />
      <div className="category-section__grid category-section__grid--2col">
        {rainsCategoryTiles.map((tile) => (
          <CategoryTile key={tile.label} {...tile} />
        ))}
      </div>
    </section>
  )
}
