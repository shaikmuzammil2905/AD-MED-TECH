import { Link } from 'react-router-dom'
import { SERVICES, CONTACT_INFO, WHATSAPP_MSG } from '../data/services'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <img src="/images/logo.png" alt="AD MedTech Solutions" />
            <p>
              AD MedTech Solutions Pvt. Ltd. — A technology-driven company delivering
              software, healthcare IT, AI and data solutions from Guntur, India.
            </p>
            <div className="social-links">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                💬
              </a>
              <a
                href={`mailto:${CONTACT_INFO.emailInfo}`}
                className="social-link"
                aria-label="Email"
                title="Email us"
              >
                ✉️
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="social-link"
                aria-label="Phone"
                title="Call us"
              >
                📞
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Company</h4>
            <nav className="footer-links" aria-label="Company links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/our-team">Our Team</Link>
              <Link to="/services">Services</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/contact">Contact Us</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <nav className="footer-links" aria-label="Services links">
              {SERVICES.slice(0, 6).map((s) => (
                <Link key={s.id} to={`/services/${s.id}`}>
                  {s.shortTitle}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="footer-col footer-contact-col">
            <h4>Contact</h4>
            <address style={{ fontStyle: 'normal' }}>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">📍</div>
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">📞</div>
                <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phoneDisplay}</a>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">✉️</div>
                <div className="footer-emails">
                  <a href={`mailto:${CONTACT_INFO.emailInfo}`}>{CONTACT_INFO.emailInfo}</a>
                  <a href={`mailto:${CONTACT_INFO.emailHr}`}>{CONTACT_INFO.emailHr}</a>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {year} AD MedTech Solutions Pvt. Ltd. All rights reserved. Est. {CONTACT_INFO.established}.</p>
          <div className="footer-bottom-links">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
