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
          <NavLink to="/our-team" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Our Team
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
            className="header-whatsapp-btn"
            id="header-whatsapp-btn"
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
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
            <Link to="/our-team" className={`mobile-nav-link${location.pathname === '/our-team' ? ' active' : ''}`}>
              Our Team
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
              className="mobile-whatsapp-cta"
              id="mobile-whatsapp-btn"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
