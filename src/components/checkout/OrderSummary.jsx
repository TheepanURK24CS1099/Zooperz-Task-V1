import PlaceholderImage from '../shared/PlaceholderImage'
import { formatCurrency } from '../../utils/checkout'

export default function OrderSummary({ items, currencyTotals, itemCount }) {
  const currencies = Object.keys(currencyTotals)

  return (
    <aside className="order-summary" aria-label="Order summary">
      <h3 className="order-summary__title">Order Summary</h3>

      {items.length === 0 ? (
        <p className="order-summary__empty">Your cart is empty.</p>
      ) : (
        <ul className="order-summary__items">
          {items.map((item) => (
            <li key={item.id} className="order-summary__item">
              <PlaceholderImage label={item.imageLabel} ratio="1:1" className="order-summary__thumb" />
              <div className="order-summary__item-body">
                <span className="order-summary__item-title">{item.title}</span>
                <span className="order-summary__item-meta">{item.brand} · Qty {item.qty}</span>
              </div>
              <span className="order-summary__item-price">
                {formatCurrency(item.priceValue * item.qty, item.currency)}
              </span>
            </li>
          ))}
        </ul>
      )}

      {currencies.length > 0 && (
        <div className="order-summary__totals">
          {currencies.map((currency) => (
            <div key={currency} className="order-summary__total-row">
              <span>Subtotal ({currency})</span>
              <span>{formatCurrency(currencyTotals[currency], currency)}</span>
            </div>
          ))}
          <p className="order-summary__note">
            {currencies.length > 1
              ? 'Items are billed in their original currency — this demo does not convert between currencies.'
              : 'Shipping and taxes are calculated in the next steps (demo only).'}
          </p>
        </div>
      )}

      <p className="order-summary__count">{itemCount} item{itemCount === 1 ? '' : 's'} in cart</p>
    </aside>
  )
}
