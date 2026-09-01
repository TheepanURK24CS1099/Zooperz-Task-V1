import Button from '../shared/Button'
import { formatCardNumber, formatExpiry } from '../../utils/checkout'

const METHODS = [
  { key: 'card', label: 'Credit / Debit Card' },
  { key: 'upi', label: 'UPI' },
  { key: 'cod', label: 'Cash on Delivery' },
]

export default function PaymentStep({ values, errors, onChange, onBack, onContinue }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    onContinue()
  }

  return (
    <form className="checkout-panel" onSubmit={handleSubmit} noValidate>
      <h2 className="checkout-panel__title">Payment method</h2>
      <div className="demo-notice" role="note">
        Demo checkout — no real payment is processed. Please do not enter real card details.
      </div>

      <div className="payment-methods" role="radiogroup" aria-label="Payment method">
        {METHODS.map((method) => (
          <label key={method.key} className={`payment-method ${values.method === method.key ? 'payment-method--active' : ''}`}>
            <input
              type="radio"
              name="payment-method"
              value={method.key}
              checked={values.method === method.key}
              onChange={() => onChange('method', method.key)}
            />
            {method.label}
          </label>
        ))}
      </div>

      {values.method === 'card' && (
        <div className="checkout-form-grid">
          <div className="form-field form-field--full">
            <label htmlFor="payment-cardName">Name on card</label>
            <input
              id="payment-cardName"
              value={values.cardName || ''}
              onChange={(e) => onChange('cardName', e.target.value)}
              aria-invalid={Boolean(errors.cardName)}
            />
            {errors.cardName && <span className="form-field__error" role="alert">{errors.cardName}</span>}
          </div>
          <div className="form-field form-field--full">
            <label htmlFor="payment-cardNumber">Card number</label>
            <input
              id="payment-cardNumber"
              inputMode="numeric"
              placeholder="0000 0000 0000 0000"
              value={values.cardNumber || ''}
              onChange={(e) => onChange('cardNumber', formatCardNumber(e.target.value))}
              aria-invalid={Boolean(errors.cardNumber)}
            />
            {errors.cardNumber && <span className="form-field__error" role="alert">{errors.cardNumber}</span>}
          </div>
          <div className="form-field">
            <label htmlFor="payment-expiry">Expiry (MM/YY)</label>
            <input
              id="payment-expiry"
              inputMode="numeric"
              placeholder="MM/YY"
              value={values.expiry || ''}
              onChange={(e) => onChange('expiry', formatExpiry(e.target.value))}
              aria-invalid={Boolean(errors.expiry)}
            />
            {errors.expiry && <span className="form-field__error" role="alert">{errors.expiry}</span>}
          </div>
          <div className="form-field">
            <label htmlFor="payment-cvv">CVV</label>
            <input
              id="payment-cvv"
              inputMode="numeric"
              placeholder="123"
              value={values.cvv || ''}
              onChange={(e) => onChange('cvv', e.target.value.replace(/[^\d]/g, '').slice(0, 4))}
              aria-invalid={Boolean(errors.cvv)}
            />
            {errors.cvv && <span className="form-field__error" role="alert">{errors.cvv}</span>}
          </div>
        </div>
      )}

      {values.method === 'upi' && (
        <div className="form-field form-field--full">
          <label htmlFor="payment-upi">UPI ID</label>
          <input
            id="payment-upi"
            placeholder="name@bank"
            value={values.upiId || ''}
            onChange={(e) => onChange('upiId', e.target.value)}
          />
        </div>
      )}

      {values.method === 'cod' && (
        <p className="checkout-panel__lede">Pay in cash when your order arrives.</p>
      )}

      <div className="checkout-panel__actions">
        <Button variant="secondary" type="button" onClick={onBack}>Back to Shipping</Button>
        <Button variant="primary" type="submit">Review Order</Button>
      </div>
    </form>
  )
}
