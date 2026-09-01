import { Link } from 'react-router-dom'
import { rainsNav } from '../../data/rains'
import { useCart } from '../../context/CartContext'

export default function RainsHeader() {
  const { itemCount } = useCart()

  return (
    <header className="brand-header brand-header--rains">
      <div className="brand-header__row">
        <button className="brand-header__menu-btn" aria-label="Open menu" type="button">☰</button>
        <span className="brand-header__logo">{rainsNav.logo}</span>
        <div className="brand-header__icons">
          <button aria-label="Search" type="button">⌕</button>
          <Link to="/checkout" aria-label={`Bag, ${itemCount} items`}>Bag ({itemCount})</Link>
        </div>
      </div>
      <nav className="brand-header__nav" aria-label="RAINS primary navigation">
        <ul>
          {rainsNav.links.map((link) => (
            <li key={link}><a href="#" onClick={(e) => e.preventDefault()}>{link}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
