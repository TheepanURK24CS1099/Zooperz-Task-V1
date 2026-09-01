import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CheckoutStepper from '../components/checkout/CheckoutStepper'
import OrderSummary from '../components/checkout/OrderSummary'
import CartReviewStep from '../components/checkout/CartReviewStep'
import ShippingStep from '../components/checkout/ShippingStep'
import PaymentStep from '../components/checkout/PaymentStep'
import ReviewStep from '../components/checkout/ReviewStep'
import ConfirmationStep from '../components/checkout/ConfirmationStep'
import { validateShipping, validatePayment, generateOrderNumber } from '../utils/checkout'

const INITIAL_SHIPPING = {
  fullName: '', email: '', phone: '', address: '', city: '', state: '', postalCode: '', country: '',
}
const INITIAL_PAYMENT = {
  method: 'card', cardName: '', cardNumber: '', expiry: '', cvv: '', upiId: '',
}

export default function Checkout() {
  const { items, updateQty, removeFromCart, itemCount, currencyTotals, clearCart } = useCart()

  const [step, setStep] = useState('cart')
  const [shipping, setShipping] = useState(INITIAL_SHIPPING)
  const [shippingErrors, setShippingErrors] = useState({})
  const [payment, setPayment] = useState(INITIAL_PAYMENT)
  const [paymentErrors, setPaymentErrors] = useState({})
  const [placing, setPlacing] = useState(false)
  const [order, setOrder] = useState(null)

  const handleShippingChange = (name, value) => setShipping((prev) => ({ ...prev, [name]: value }))
  const handlePaymentChange = (name, value) => setPayment((prev) => ({ ...prev, [name]: value }))

  const handleShippingContinue = () => {
    const errors = validateShipping(shipping)
    setShippingErrors(errors)
    if (Object.keys(errors).length === 0) setStep('payment')
  }

  const handlePaymentContinue = () => {
    const errors = validatePayment(payment)
    setPaymentErrors(errors)
    if (Object.keys(errors).length === 0) setStep('review')
  }

  const handlePlaceOrder = () => {
    setPlacing(true)
    // Simulated processing delay only — nothing is sent over the network.
    setTimeout(() => {
      setOrder({ number: generateOrderNumber(), shipping, currencyTotals })
      clearCart()
      setPlacing(false)
      setStep('confirmation')
    }, 600)
  }

  if (step === 'confirmation' && order) {
    return (
      <div className="page checkout-page">
        <CheckoutHeader />
        <main id="main" className="checkout-layout checkout-layout--single">
          <ConfirmationStep
            orderNumber={order.number}
            shipping={order.shipping}
            currencyTotals={order.currencyTotals}
          />
        </main>
      </div>
    )
  }

  return (
    <div className="page checkout-page">
      <CheckoutHeader />
      <main id="main" className="checkout-layout">
        <div className="checkout-layout__main">
          <CheckoutStepper current={step} />

          {step === 'cart' && (
            <CartReviewStep
              items={items}
              onUpdateQty={updateQty}
              onRemove={removeFromCart}
              onContinue={() => setStep('shipping')}
            />
          )}

          {step === 'shipping' && (
            <ShippingStep
              values={shipping}
              errors={shippingErrors}
              onChange={handleShippingChange}
              onBack={() => setStep('cart')}
              onContinue={handleShippingContinue}
            />
          )}

          {step === 'payment' && (
            <PaymentStep
              values={payment}
              errors={paymentErrors}
              onChange={handlePaymentChange}
              onBack={() => setStep('shipping')}
              onContinue={handlePaymentContinue}
            />
          )}

          {step === 'review' && (
            <ReviewStep
              items={items}
              currencyTotals={currencyTotals}
              shipping={shipping}
              payment={payment}
              onBack={() => setStep('payment')}
              onPlaceOrder={handlePlaceOrder}
              placing={placing}
            />
          )}
        </div>

        <OrderSummary items={items} currencyTotals={currencyTotals} itemCount={itemCount} />
      </main>
    </div>
  )
}

function CheckoutHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__title">Shopify Reference Component Showcase</Link>
        <nav className="site-header__nav" aria-label="Checkout navigation">
          <ul>
            <li><Link to="/">← Back to Showcase</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
