import { Link } from 'react-router-dom'
import { formatCurrency } from '../../utils/checkout'

export default function ConfirmationStep({ orderNumber, shipping, currencyTotals }) {
  return (
    <div className="checkout-panel checkout-panel--confirmation">
      <span className="checkout-panel__check" aria-hidden="true">✓</span>
      <h2 className="checkout-panel__title">Order placed — thank you!</h2>
      <p className="checkout-panel__lede">
        This is a demo confirmation only; no real order was created and no payment was charged.
      </p>

      <div className="review-block">
        <h3>Order number</h3>
        <p><code>{orderNumber}</code></p>
      </div>

      <div className="review-block">
        <h3>Delivering to</h3>
        <p>{shipping.fullName}</p>
        <p>{shipping.address}, {shipping.city} {shipping.postalCode}</p>
      </div>

      {Object.keys(currencyTotals).length > 0 && (
        <div className="review-block">
          <h3>Amount</h3>
          {Object.keys(currencyTotals).map((currency) => (
            <div key={currency} className="review-block__total">
              <span>Total ({currency})</span>
              <span>{formatCurrency(currencyTotals[currency], currency)}</span>
            </div>
          ))}
        </div>
      )}

      <div className="checkout-panel__actions">
        <Link to="/" className="btn btn--primary">Continue Shopping</Link>
      </div>
    </div>
  )
}
