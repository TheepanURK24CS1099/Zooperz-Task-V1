import PlaceholderImage from './PlaceholderImage'

export default function CategoryTile({ label, imageLabel }) {
  return (
    <a href="#" className="category-tile" onClick={(e) => e.preventDefault()}>
      <PlaceholderImage label={imageLabel || label} ratio="3:4" />
      <span className="category-tile__label">{label}</span>
    </a>
  )
}
