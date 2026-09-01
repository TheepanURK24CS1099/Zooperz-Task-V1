import Button from '../shared/Button'
import { formatCurrency, maskCardNumber } from '../../utils/checkout'

const METHOD_LABELS = { card: 'Credit / Debit Card', upi: 'UPI', cod: 'Cash on Delivery' }

export default function ReviewStep({ items, currencyTotals, shipping, payment, onBack, onPlaceOrder, placing }) {
  return (
    <div className="checkout-panel">
      <h2 className="checkout-panel__title">Review &amp; place order</h2>
      <div className="demo-notice" role="note">
        Placing this order will not charge any card or contact you — it only generates a demo confirmation.
      </div>

      <div className="review-block">
        <h3>Shipping to</h3>
        <p>{shipping.fullName}</p>
        <p>{shipping.address}, {shipping.city}{shipping.state ? `, ${shipping.state}` : ''} {shipping.postalCode}</p>
        <p>{shipping.country}</p>
        <p>{shipping.email} · {shipping.phone}</p>
      </div>

      <div className="review-block">
        <h3>Payment method</h3>
        <p>{METHOD_LABELS[payment.method]}</p>
        {payment.method === 'card' && <p>Card ending — {maskCardNumber(payment.cardNumber)}</p>}
        {payment.method === 'upi' && payment.upiId && <p>{payment.upiId}</p>}
      </div>

      <div className="review-block">
        <h3>Items</h3>
        <ul className="review-block__items">
          {items.map((item) => (
            <li key={item.id}>
              <span>{item.title} × {item.qty}</span>
              <span>{formatCurrency(item.priceValue * item.qty, item.currency)}</span>
            </li>
          ))}
        </ul>
        {Object.keys(currencyTotals).map((currency) => (
          <div key={currency} className="review-block__total">
            <span>Total ({currency})</span>
            <span>{formatCurrency(currencyTotals[currency], currency)}</span>
          </div>
        ))}
      </div>

      <div className="checkout-panel__actions">
        <Button variant="secondary" onClick={onBack} disabled={placing}>Back to Payment</Button>
        <Button variant="primary" onClick={onPlaceOrder} disabled={placing}>
          {placing ? 'Placing order…' : 'Place Order'}
        </Button>
      </div>
    </div>
  )
}
