import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { SERVICES, CONTACT_INFO, WHATSAPP_MSG } from '../data/services'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function ServiceDetail() {
  const { serviceId } = useParams()
  const animRef = useScrollAnimation()

  const service = SERVICES.find((s) => s.id === serviceId)
  const relatedServices = SERVICES.filter((s) => s.id !== serviceId).slice(0, 5)

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | AD MedTech Solutions`
    }
  }, [service])

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const serviceEnquiryMsg = encodeURIComponent(
    `Hello AD MedTech Solutions, I would like to know more about your ${service.title} service.`
  )

  return (
    <div ref={animRef}>
      {/* Page Hero */}
      <section className="page-hero" aria-label={`${service.title} hero`}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <Link to="/services">Services</Link>
            <span className="breadcrumb-sep">›</span>
            <span>{service.shortTitle}</span>
          </nav>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, flexWrap: 'wrap' }}>
            <div
              style={{
                width: 72, height: 72, background: 'var(--yellow)', borderRadius: 'var(--radius-lg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, flexShrink: 0,
              }}
              aria-hidden="true"
            >
              {service.icon}
            </div>
            <div>
              <span className="badge" style={{ marginBottom: 12 }}>
                <span className="badge-dot"></span> Service Spotlight
              </span>
              <h1 className="page-hero-title">{service.title}</h1>
            </div>
          </div>

          <p className="page-hero-desc">{service.tagline}</p>
          <div className="page-hero-actions">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${serviceEnquiryMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              id={`${service.id}-whatsapp-btn`}
            >
              💬 Enquire on WhatsApp
            </a>
            <Link to="/contact" className="btn btn-secondary btn-lg" id={`${service.id}-contact-btn`}>
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section service-detail" aria-labelledby="service-detail-heading">
        <div className="container">
          <div className="service-detail-grid">
            {/* Main Content */}
            <div className="service-detail-content">
              {/* Dynamic Service Domain Image */}
              {service.image && (
                <div className="anim" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: 36, aspectRatio: '16 / 9', boxShadow: 'var(--shadow-md)' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="eager"
                  />
                </div>
              )}

              <div className="anim">
                <h2 id="service-detail-heading">Overview</h2>
                <p>{service.intro}</p>
                {service.fullDesc.split('\n\n').map((para, i) => (
                  <p key={i}>{para.trim()}</p>
                ))}
              </div>

              {/* Capabilities */}
              <div className="anim anim-delay-1">
                <h2>What We Offer</h2>
                <div className="capabilities-list">
                  {service.capabilities.map((cap, i) => (
                    <div key={i} className="capability-item">
                      <div className="capability-check">✓</div>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="anim anim-delay-2">
                <h2>Key Benefits</h2>
                <div className="benefits-grid">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="benefit-card">
                      <h4>{benefit.title}</h4>
                      <p>{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="anim anim-delay-3">
                <h2>Common Use Cases</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {service.useCases.map((uc, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '8px 18px',
                        background: 'var(--yellow-bg)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 13,
                        fontWeight: 600,
                        color: '#5a6200',
                        border: '1px solid rgba(212,230,0,0.4)',
                      }}
                    >
                      {uc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="service-sidebar anim anim-right">
              {/* CTA */}
              <div className="sidebar-cta-card">
                <h3>Interested in this service?</h3>
                <p>Talk to our experts to discuss your specific requirements.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${serviceEnquiryMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    id={`${service.id}-sidebar-whatsapp`}
                  >
                    💬 WhatsApp Us
                  </a>
                  <Link
                    to="/contact"
                    className="btn btn-white"
                    style={{ width: '100%', justifyContent: 'center' }}
                    id={`${service.id}-sidebar-contact`}
                  >
                    Send an Enquiry
                  </Link>
                </div>
              </div>

              {/* Technologies */}
              <div className="sidebar-card">
                <h3>Technologies &amp; Tools</h3>
                <div className="sidebar-tech-tags">
                  {service.technologies.map((tech, i) => (
                    <span key={i} className="sidebar-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Related Services */}
              <div className="sidebar-card">
                <h3>Other Services</h3>
                <nav className="related-services" aria-label="Related services">
                  {relatedServices.map((s) => (
                    <Link key={s.id} to={`/services/${s.id}`} className="related-service-link">
                      {s.icon} {s.shortTitle}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Contact info */}
              <div className="sidebar-card">
                <h3>Contact Us</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <a href={`tel:${CONTACT_INFO.phone}`} style={{ fontSize: 14, color: 'var(--charcoal)', display: 'flex', gap: 8, alignItems: 'center' }}>
                    📞 {CONTACT_INFO.phoneDisplay}
                  </a>
                  <a href={`mailto:${CONTACT_INFO.emailInfo}`} style={{ fontSize: 13, color: 'var(--grey-text)', display: 'flex', gap: 8, alignItems: 'center' }}>
                    ✉️ {CONTACT_INFO.emailInfo}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" aria-label="Enquire CTA">
        <div className="container">
          <div className="cta-inner">
            <div className="cta-text anim">
              <h2>Ready to Get Started with {service.shortTitle}?</h2>
              <p>Our team is ready to help. Reach out today for a consultation.</p>
            </div>
            <div className="anim anim-delay-2" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${serviceEnquiryMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                id={`${service.id}-bottom-whatsapp`}
              >
                💬 WhatsApp Us
              </a>
              <Link to="/contact" className="btn btn-secondary btn-lg" id={`${service.id}-bottom-contact`}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
