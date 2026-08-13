import { mokobaraNav } from '../../data/mokobara'

export default function MokobaraHeader() {
  return (
    <header className="brand-header brand-header--mokobara">
      <div className="brand-header__row">
        <button className="brand-header__menu-btn" aria-label="Open menu" type="button">☰</button>
        <span className="brand-header__logo">{mokobaraNav.logo}</span>
        <div className="brand-header__icons">
          <button aria-label="Search" type="button">⌕</button>
          <button aria-label="Account" type="button">Account</button>
          <button aria-label="Cart, 0 items" type="button">Cart (0)</button>
        </div>
      </div>
      <nav className="brand-header__nav" aria-label="Mokobara primary navigation">
        <ul>
          {mokobaraNav.links.map((link) => (
            <li key={link}><a href="#" onClick={(e) => e.preventDefault()}>{link}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
