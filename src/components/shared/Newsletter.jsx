import Button from './Button'

export default function Newsletter({ title, description, placeholder = 'Enter your email', buttonLabel = 'Subscribe' }) {
  return (
    <div className="newsletter">
      <div className="newsletter__copy">
        <h3 className="newsletter__title">{title}</h3>
        {description && <p className="newsletter__description">{description}</p>}
      </div>
      <form
        className="newsletter__form"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
        <input id="newsletter-email" type="email" placeholder={placeholder} className="newsletter__input" />
        <Button variant="primary">{buttonLabel}</Button>
      </form>
    </div>
  )
}
