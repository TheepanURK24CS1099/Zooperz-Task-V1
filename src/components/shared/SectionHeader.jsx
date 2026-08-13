export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`section-header section-header--${align}`}>
      {eyebrow && <p className="section-header__eyebrow">{eyebrow}</p>}
      {title && <h3 className="section-header__title">{title}</h3>}
      {description && <p className="section-header__description">{description}</p>}
    </div>
  )
}
