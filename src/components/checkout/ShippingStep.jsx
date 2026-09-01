import Button from '../shared/Button'

const FIELDS = [
  { name: 'fullName', label: 'Full name', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email address', type: 'email', autoComplete: 'email' },
  { name: 'phone', label: 'Phone number', type: 'tel', autoComplete: 'tel' },
  { name: 'address', label: 'Address', type: 'text', autoComplete: 'street-address', full: true },
  { name: 'city', label: 'City', type: 'text', autoComplete: 'address-level2' },
  { name: 'state', label: 'State / Province', type: 'text', autoComplete: 'address-level1' },
  { name: 'postalCode', label: 'Postal code', type: 'text', autoComplete: 'postal-code' },
  { name: 'country', label: 'Country', type: 'text', autoComplete: 'country-name' },
]

export default function ShippingStep({ values, errors, onChange, onBack, onContinue }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    onContinue()
  }

  return (
    <form className="checkout-panel" onSubmit={handleSubmit} noValidate>
      <h2 className="checkout-panel__title">Shipping details</h2>
      <p className="checkout-panel__lede">Used only to demonstrate the checkout flow — nothing is submitted anywhere.</p>

      <div className="checkout-form-grid">
        {FIELDS.map((field) => (
          <div key={field.name} className={`form-field ${field.full ? 'form-field--full' : ''}`}>
            <label htmlFor={`shipping-${field.name}`}>{field.label}</label>
            <input
              id={`shipping-${field.name}`}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              value={values[field.name] || ''}
              onChange={(e) => onChange(field.name, e.target.value)}
              aria-invalid={Boolean(errors[field.name])}
              aria-describedby={errors[field.name] ? `shipping-${field.name}-error` : undefined}
            />
            {errors[field.name] && (
              <span className="form-field__error" id={`shipping-${field.name}-error`} role="alert">
                {errors[field.name]}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="checkout-panel__actions">
        <Button variant="secondary" type="button" onClick={onBack}>Back to Cart</Button>
        <Button variant="primary" type="submit">Continue to Payment</Button>
      </div>
    </form>
  )
}
