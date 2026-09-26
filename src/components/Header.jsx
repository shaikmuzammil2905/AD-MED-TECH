import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { SERVICES, CONTACT_INFO, WHATSAPP_MSG } from '../data/services'
import { useHeaderScroll } from '../hooks/useScrollAnimation'

export default function Header() {
  const headerRef = useHeaderScroll()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef(null)

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        {/* Logo */}
        <Link to="/" className="header-logo" aria-label="AD MedTech Solutions - Home">
          <img src="/images/logo.png" alt="AD MedTech Solutions" />
        </Link>

        {/* Desktop Nav */}
        <nav className="header-nav" aria-label="Main navigation">
          <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} end>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            About Us
          </NavLink>

          {/* Services Dropdown */}
          <div className="services-dropdown-wrapper" ref={dropdownRef}>
            <button
              className={`nav-link${location.pathname.startsWith('/services') ? ' active' : ''}${servicesOpen ? ' services-open' : ''}`}
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              id="services-nav-btn"
            >
              Services
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={`services-dropdown${servicesOpen ? ' open' : ''}`} role="menu" aria-labelledby="services-nav-btn">
              <div className="dropdown-header">
                <h3>Our Services</h3>
                <Link to="/services" className="btn btn-sm btn-primary" onClick={() => setServicesOpen(false)}>
                  View All
                </Link>
              </div>
              {SERVICES.map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="dropdown-item"
                  role="menuitem"
                  onClick={() => setServicesOpen(false)}
                >
                  <div className="dropdown-item-icon">{s.icon}</div>
                  <div className="dropdown-item-text">
                    <h4>{s.shortTitle}</h4>
                    <p>{s.shortDesc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/careers" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Careers
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Contact Us
          </NavLink>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            id="header-whatsapp-btn"
          >
            💬 WhatsApp
          </a>
          <button
            className={`hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            id="hamburger-btn"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`} role="dialog" aria-label="Mobile menu" aria-modal="true">
        <div className="mobile-nav-overlay" onClick={() => setMobileOpen(false)} aria-hidden="true" />
        <div className="mobile-nav-panel">
          <div className="mobile-nav-header">
            <img src="/images/logo.png" alt="AD MedTech Solutions" />
            <button className="mobile-nav-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">✕</button>
          </div>
          <nav className="mobile-nav-links" aria-label="Mobile navigation">
            <Link to="/" className={`mobile-nav-link${location.pathname === '/' ? ' active' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`mobile-nav-link${location.pathname === '/about' ? ' active' : ''}`}>
              About Us
            </Link>
            {/* Services with submenu */}
            <button
              className={`mobile-nav-link${location.pathname.startsWith('/services') ? ' active' : ''}`}
              onClick={() => setMobileServicesOpen((v) => !v)}
              aria-expanded={mobileServicesOpen}
            >
              Services
              <span style={{ fontSize: 12, marginLeft: 4 }}>{mobileServicesOpen ? '▲' : '▼'}</span>
            </button>
            <div className={`mobile-services-submenu${mobileServicesOpen ? ' open' : ''}`}>
              <Link to="/services" className="mobile-submenu-link" onClick={() => setMobileOpen(false)}>
                📋 All Services
              </Link>
              {SERVICES.map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="mobile-submenu-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {s.icon} {s.shortTitle}
                </Link>
              ))}
            </div>
            <Link to="/careers" className={`mobile-nav-link${location.pathname === '/careers' ? ' active' : ''}`}>
              Careers
            </Link>
            <Link to="/contact" className={`mobile-nav-link${location.pathname === '/contact' ? ' active' : ''}`}>
              Contact Us
            </Link>
          </nav>
          <div className="mobile-nav-footer">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              id="mobile-whatsapp-btn"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
