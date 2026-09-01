import { useEffect, useRef, useState } from 'react'
import PlaceholderImage from './PlaceholderImage'

export default function ProductCard({
  title,
  price,
  originalPrice,
  badge,
  rating,
  colors,
  imageLabel,
  onAdd,
}) {
  const [added, setAdded] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  const soldOut = badge === 'Sold Out'

  const handleAdd = () => {
    if (soldOut || !onAdd) return
    onAdd()
    setAdded(true)
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setAdded(false), 1400)
  }

  return (
    <article className="product-card">
      <div className="product-card__media">
        <PlaceholderImage label={imageLabel || 'PRODUCT IMAGE'} ratio="1:1" />
        {badge && (
          <span className={`product-card__badge ${soldOut ? 'product-card__badge--muted' : ''}`}>{badge}</span>
        )}
      </div>
      <div className="product-card__body">
        <h4 className="product-card__title">{title}</h4>
        <div className="product-card__price-row">
          <span className="product-card__price">{price}</span>
          {originalPrice && <span className="product-card__price product-card__price--strike">{originalPrice}</span>}
        </div>
        {rating && <span className="product-card__rating">{rating}</span>}
        {colors && colors.length > 0 && (
          <div className="product-card__swatches" aria-label="Available colors">
            {colors.map((color) => (
              <span key={color} className="product-card__swatch" style={{ backgroundColor: color }} />
            ))}
          </div>
        )}
        {onAdd && (
          <button
            type="button"
            className="product-card__add"
            onClick={handleAdd}
            disabled={soldOut}
            aria-label={`Add ${title} to cart`}
          >
            {soldOut ? 'Sold Out' : added ? 'Added ✓' : 'Add to Cart'}
          </button>
        )}
      </div>
    </article>
  )
}
