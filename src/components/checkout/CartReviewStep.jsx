import { Link } from 'react-router-dom'
import PlaceholderImage from '../shared/PlaceholderImage'
import Button from '../shared/Button'
import { formatCurrency } from '../../utils/checkout'

export default function CartReviewStep({ items, onUpdateQty, onRemove, onContinue }) {
  if (items.length === 0) {
    return (
      <div className="checkout-panel">
        <h2 className="checkout-panel__title">Your cart is empty</h2>
        <p className="checkout-panel__lede">
          Add a product from the RAINS or Mokobara component demos on the homepage, then come back here to check out.
        </p>
        <Link to="/" className="btn btn--primary">Continue Shopping</Link>
      </div>
    )
  }

  return (
    <div className="checkout-panel">
      <h2 className="checkout-panel__title">Review your cart</h2>
      <ul className="cart-list">
        {items.map((item) => (
          <li key={item.id} className="cart-list__row">
            <PlaceholderImage label={item.imageLabel} ratio="1:1" className="cart-list__thumb" />
            <div className="cart-list__info">
              <span className="cart-list__title">{item.title}</span>
              <span className="cart-list__brand">{item.brand}</span>
              <span className="cart-list__price">{formatCurrency(item.priceValue, item.currency)}</span>
            </div>
            <div className="cart-list__qty">
              <button
                type="button"
                aria-label={`Decrease quantity of ${item.title}`}
                disabled={item.qty <= 1}
                onClick={() => onUpdateQty(item.id, item.qty - 1)}
              >
                −
              </button>
              <span aria-live="polite">{item.qty}</span>
              <button
                type="button"
                aria-label={`Increase quantity of ${item.title}`}
                onClick={() => onUpdateQty(item.id, item.qty + 1)}
              >
                +
              </button>
            </div>
            <span className="cart-list__line-total">{formatCurrency(item.priceValue * item.qty, item.currency)}</span>
            <button type="button" className="cart-list__remove" onClick={() => onRemove(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="checkout-panel__actions">
        <Link to="/" className="btn btn--secondary">Continue Shopping</Link>
        <Button variant="primary" onClick={onContinue}>Proceed to Shipping</Button>
      </div>
    </div>
  )
}
