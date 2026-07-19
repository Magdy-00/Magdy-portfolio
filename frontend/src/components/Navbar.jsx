import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Writeups', href: '/writeups' },
  { label: 'Bug Bounty', href: '/bug-bounty' },
  { label: 'Certs', href: '/certifications' },
  { label: 'GitHub', href: '/github' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    setMobileOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="main-nav">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" onClick={handleClick}>
          <span className="navbar__logo-bracket">{'<'}</span>
          MK
          <span className="navbar__logo-bracket">{'/>'}</span>
        </Link>

        <button
          className={`navbar__toggle ${mobileOpen ? 'active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          id="nav-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {NAV_ITEMS.map(item => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                onClick={handleClick}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
