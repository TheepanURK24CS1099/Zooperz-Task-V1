const STEPS = [
  { key: 'cart', label: 'Cart' },
  { key: 'shipping', label: 'Shipping' },
  { key: 'payment', label: 'Payment' },
  { key: 'review', label: 'Review' },
]

export default function CheckoutStepper({ current }) {
  const currentIndex = STEPS.findIndex((step) => step.key === current)

  return (
    <ol className="checkout-stepper" aria-label="Checkout progress">
      {STEPS.map((step, index) => {
        const state = index < currentIndex ? 'done' : index === currentIndex ? 'current' : 'upcoming'
        return (
          <li key={step.key} className={`checkout-stepper__step checkout-stepper__step--${state}`}>
            <span className="checkout-stepper__index" aria-hidden="true">
              {state === 'done' ? '✓' : index + 1}
            </span>
            <span className="checkout-stepper__label">{step.label}</span>
          </li>
        )
      })}
    </ol>
  )
}
