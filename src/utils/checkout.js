// Lightweight, dependency-free helpers for the demo checkout flow.
// No data here is ever sent over the network — this is a client-only prototype.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateShipping(values) {
  const errors = {}
  if (!values.fullName?.trim()) errors.fullName = 'Full name is required.'
  if (!values.email?.trim()) {
    errors.email = 'Email is required.'
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.phone?.trim()) errors.phone = 'Phone number is required.'
  if (!values.address?.trim()) errors.address = 'Address is required.'
  if (!values.city?.trim()) errors.city = 'City is required.'
  if (!values.postalCode?.trim()) errors.postalCode = 'Postal code is required.'
  if (!values.country?.trim()) errors.country = 'Country is required.'
  return errors
}

export function validatePayment(values) {
  const errors = {}
  if (values.method !== 'card') return errors

  const digits = (values.cardNumber || '').replace(/\s+/g, '')
  if (!/^\d{13,16}$/.test(digits)) errors.cardNumber = 'Enter a valid 13–16 digit card number.'

  if (!values.cardName?.trim()) errors.cardName = 'Name on card is required.'

  if (!/^\d{2}\/\d{2}$/.test(values.expiry || '')) {
    errors.expiry = 'Use MM/YY format.'
  } else {
    const [month, year] = values.expiry.split('/').map(Number)
    if (month < 1 || month > 12) errors.expiry = 'Enter a valid month.'
    const now = new Date()
    const currentYear = now.getFullYear() % 100
    const currentMonth = now.getMonth() + 1
    if (!errors.expiry && (year < currentYear || (year === currentYear && month < currentMonth))) {
      errors.expiry = 'Card has expired.'
    }
  }

  if (!/^\d{3,4}$/.test(values.cvv || '')) errors.cvv = 'Enter a valid CVV.'

  return errors
}

export function formatCardNumber(raw) {
  return raw
    .replace(/[^\d]/g, '')
    .slice(0, 16)
    .replace(/(.{4})/g, '$1 ')
    .trim()
}

export function formatExpiry(raw) {
  const digits = raw.replace(/[^\d]/g, '').slice(0, 4)
  if (digits.length <= 2) return digits
  return `${digits.slice(0, 2)}/${digits.slice(2)}`
}

export function maskCardNumber(raw) {
  const digits = (raw || '').replace(/\s+/g, '')
  if (digits.length < 4) return '••••'
  return `•••• •••• •••• ${digits.slice(-4)}`
}

export function formatCurrency(value, currency = '$') {
  const locale = currency === '₹' ? 'en-IN' : 'en-US'
  return `${currency}${value.toLocaleString(locale)}`
}

export function generateOrderNumber() {
  return `ORD-${Date.now().toString().slice(-8)}`
}
