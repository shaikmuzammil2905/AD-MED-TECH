import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function NotFound() {
  const animRef = useScrollAnimation()

  useEffect(() => {
    document.title = '404 - Page Not Found | AD MedTech Solutions'
  }, [])

  return (
    <div ref={animRef} style={{ minHeight: '75vh', display: 'flex', alignItems: 'center', padding: '60px 0' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: 650 }}>
        <div className="anim" style={{ fontSize: '5rem', fontWeight: 800, color: 'var(--navy)', lineHeight: 1, marginBottom: 16 }}>
          4<span style={{ color: 'var(--blue)' }}>0</span>4
        </div>
        <h1 className="anim anim-delay-1" style={{ fontSize: '2rem', marginBottom: 16, color: 'var(--navy)' }}>
          Page Not Found
        </h1>
        <p className="anim anim-delay-2" style={{ color: 'var(--grey-text)', fontSize: '1.1rem', marginBottom: 32 }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="anim anim-delay-3" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary btn-lg" id="404-home-btn">
            Back to Home
          </Link>
          <Link to="/services" className="btn btn-secondary btn-lg" id="404-services-btn">
            Explore Services
          </Link>
          <Link to="/contact" className="btn btn-secondary btn-lg" id="404-contact-btn">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}
