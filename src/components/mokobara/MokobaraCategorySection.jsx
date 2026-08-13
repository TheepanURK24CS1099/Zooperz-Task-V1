import CategoryTile from '../shared/CategoryTile'
import SectionHeader from '../shared/SectionHeader'
import { mokobaraCategoryTiles } from '../../data/mokobara'

export default function MokobaraCategorySection() {
  return (
    <section className="category-section">
      <SectionHeader eyebrow="Shop by Category" title="Find your next travel companion" />
      <div className="category-section__grid category-section__grid--5col">
        {mokobaraCategoryTiles.map((tile) => (
          <CategoryTile key={tile.label} {...tile} />
        ))}
      </div>
    </section>
  )
}
