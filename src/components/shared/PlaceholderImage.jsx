const RATIOS = {
  '1:1': '100%',
  '4:3': '75%',
  '3:4': '133.33%',
  '16:9': '56.25%',
  '3:2': '66.67%',
}

export default function PlaceholderImage({ label, ratio = '4:3', className = '' }) {
  const paddingBottom = RATIOS[ratio] || RATIOS['4:3']

  return (
    <div
      className={`placeholder-image ${className}`}
      style={{ paddingBottom }}
      role="img"
      aria-label={label}
    >
      <span className="placeholder-image__label">{label}</span>
    </div>
  )
}
