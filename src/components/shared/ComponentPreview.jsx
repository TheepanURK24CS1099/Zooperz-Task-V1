export default function ComponentPreview({ name, description, children }) {
  return (
    <div className="component-preview">
      <div className="component-preview__tag">
        <code>{name}</code>
        {description && <span className="component-preview__description">{description}</span>}
      </div>
      <div className="component-preview__stage">{children}</div>
    </div>
  )
}
