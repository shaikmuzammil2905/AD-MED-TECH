import { useEffect } from 'react'

export default function Modal({ isOpen, onClose, title, icon, image, tagline, description, highlights = [], ctaText = 'Get in Touch', ctaLink = '/contact' }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onClick={onClose} aria-modal="true" role="dialog">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close popup">
          ✕
        </button>

        {/* Pictorial Representation Header */}
        <div className="modal-hero">
          {image ? (
            <img src={image} alt={title} className="modal-hero-img" />
          ) : (
            <div className="modal-hero-graphic">
              <span className="modal-hero-icon">{icon || '⚡'}</span>
            </div>
          )}
          <div className="modal-hero-overlay">
            <span className="modal-badge">{icon} Feature Spotlight</span>
            <h2>{title}</h2>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="modal-body">
          {tagline && <p className="modal-tagline">{tagline}</p>}
          <p className="modal-desc">{description}</p>

          {highlights && highlights.length > 0 && (
            <div className="modal-highlights">
              <h4>Key Highlights &amp; Advantages</h4>
              <ul>
                {highlights.map((item, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-actions">
            <a href={ctaLink} className="btn btn-primary" onClick={onClose}>
              {ctaText} →
            </a>
            <button className="btn btn-secondary" onClick={onClose}>
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
