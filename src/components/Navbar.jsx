import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Apps', to: '/apps' },
  { label: 'Community', to: '/community' },
  { label: 'About', to: '/about' },
  { label: 'Contact', mailto: 'info@evā.com' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Lock scroll when overlay open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="navbar-wrap">
      <nav className="navbar">
        <Link to="/" className="nav-logo" aria-label="EVĀ home">
          <Logo variant="burgundy" height={22} />
        </Link>

        <ul className="nav-links">
          {NAV.map((item) => (
            <li key={item.label}>
              {item.mailto ? (
                <a href={`mailto:${item.mailto}`} className="nav-link">{item.label}</a>
              ) : (
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')}
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <Link to="/apps" className="nav-cta">Download</Link>

        <button
          className={`nav-burger ${open ? 'nav-burger--open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </nav>

      {open && (
        <div className="nav-overlay">
          <ul className="nav-overlay-links">
            {NAV.map((item) => (
              <li key={item.label}>
                {item.mailto ? (
                  <a href={`mailto:${item.mailto}`} className="nav-overlay-link">{item.label}</a>
                ) : (
                  <NavLink to={item.to} className="nav-overlay-link">
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
          <Link to="/apps" className="btn-burgundy nav-overlay-cta">Download EVĀ Health</Link>
        </div>
      )}
    </header>
  )
}
