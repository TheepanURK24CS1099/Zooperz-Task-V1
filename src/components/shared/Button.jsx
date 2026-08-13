export default function Button({
  children,
  variant = 'primary',
  as = 'button',
  href,
  onClick,
  className = '',
  ...rest
}) {
  const classes = `btn btn--${variant} ${className}`.trim()

  if (as === 'a') {
    return (
      <a href={href || '#'} className={classes} onClick={onClick} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
