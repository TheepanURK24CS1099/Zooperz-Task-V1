export default function SiteFooter({ brand, columns = [], socialLabels = [], legalLinks = [] }) {
  return (
    <div className="site-footer">
      <div className="site-footer__top">
        <span className="site-footer__brand">{brand}</span>
        <div className="site-footer__columns">
          {columns.map((column) => (
            <div key={column.heading} className="site-footer__column">
              <h5 className="site-footer__heading">{column.heading}</h5>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" onClick={(e) => e.preventDefault()}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {socialLabels.length > 0 && (
            <div className="site-footer__column">
              <h5 className="site-footer__heading">Follow</h5>
              <ul className="site-footer__social">
                {socialLabels.map((label) => (
                  <li key={label}>
                    <a href="#" onClick={(e) => e.preventDefault()}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {legalLinks.length > 0 && (
        <div className="site-footer__legal">
          <span>© {new Date().getFullYear()} {brand}. All rights reserved.</span>
          <ul>
            {legalLinks.map((link) => (
              <li key={link}>
                <a href="#" onClick={(e) => e.preventDefault()}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
