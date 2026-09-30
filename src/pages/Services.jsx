import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SERVICES, CONTACT_INFO, WHATSAPP_MSG } from '../data/services'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Modal from '../components/Modal'

const CATEGORIES = [
  { label: 'All Services', value: 'all' },
  { label: 'Technology', value: 'tech', ids: ['software-development', 'it-solutions-consulting', 'cloud-solutions'] },
  { label: 'Healthcare', value: 'healthcare', ids: ['healthcare-technology', 'medical-coding', 'medical-billing', 'healthcare-ai', 'medical-data-annotation'] },
  { label: 'Data & GIS', value: 'data', ids: ['gis-geospatial', 'data-processing', 'business-process-outsourcing'] },
]

export default function Services() {
  const animRef = useScrollAnimation()
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeModalItem, setActiveModalItem] = useState(null)

  useEffect(() => {
    document.title = 'Services | AD MedTech Solutions'
  }, [])

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => {
        const cat = CATEGORIES.find(c => c.value === activeCategory)
        return cat?.ids?.includes(s.id)
      })

  return (
    <div ref={animRef}>
      {/* Page Hero */}
      <section className="page-hero" aria-label="Services hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Services</span>
          </nav>
          <h1 className="page-hero-title">
            Comprehensive <span>Technology &amp; Healthcare</span> Services
          </h1>
          <p className="page-hero-desc">
            From custom software and cloud solutions to medical coding, AI and GIS services —
            we deliver end-to-end solutions that drive growth and operational excellence.
          </p>
          <div className="page-hero-actions">
            <Link to="/contact" className="btn btn-primary btn-lg" id="services-contact-btn">Get a Quote</Link>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
              id="services-whatsapp-btn"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services Listing */}
      <section className="section" style={{ background: 'var(--white)' }} aria-labelledby="services-list-heading">
        <div className="container">
          {/* Filter tabs */}
          <div className="anim" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40, justifyContent: 'center' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                className={`btn ${activeCategory === cat.value ? 'btn-primary' : 'btn-secondary'} btn-sm`}
                onClick={() => setActiveCategory(cat.value)}
                id={`filter-${cat.value}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <h2 className="sr-only" id="services-list-heading">All Services</h2>

          {/* Grid of services with pictorial representations */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
            {filteredServices.map((service, i) => (
              <div
                key={service.id}
                className="service-card anim"
                style={{
                  transitionDelay: `${(i % 3) * 0.08}s`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'var(--white)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 24,
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <div>
                  {service.image && (
                    <div style={{ aspectRatio: '16 / 9', overflow: 'hidden', borderRadius: 'var(--radius-md)', marginBottom: 16, position: 'relative' }}>
                      <img
                        src={service.image}
                        alt={service.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        loading="lazy"
                      />
                      <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(4px)', padding: '6px 12px', borderRadius: 'var(--radius-full)', fontSize: 16 }}>
                        {service.icon}
                      </div>
                    </div>
                  )}

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'var(--charcoal)', marginBottom: 8 }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: 13.5, color: 'var(--grey-text)', lineHeight: 1.6, marginBottom: 16 }}>
                    {service.shortDesc}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
                  <Link
                    to={`/services/${service.id}`}
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    View Details →
                  </Link>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setActiveModalItem({
                      title: service.title,
                      icon: service.icon,
                      image: service.image,
                      tagline: service.tagline,
                      desc: service.intro || service.shortDesc,
                      modalDesc: service.fullDesc,
                      highlights: service.capabilities?.slice(0, 4),
                    })}
                    title="Quick Overview"
                  >
                    ⚡ Quick View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" aria-label="Contact CTA">
        <div className="container">
          <div className="cta-inner">
            <div className="cta-text anim">
              <h2>Not Sure Which Service You Need?</h2>
              <p>Our team will assess your requirements and recommend the best solution.</p>
            </div>
            <div className="anim anim-delay-2" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                id="services-bottom-whatsapp"
              >
                💬 WhatsApp Us
              </a>
              <Link to="/contact" className="btn btn-secondary btn-lg" id="services-bottom-contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick View Service Modal */}
      <Modal
        isOpen={Boolean(activeModalItem)}
        onClose={() => setActiveModalItem(null)}
        title={activeModalItem?.title}
        icon={activeModalItem?.icon}
        image={activeModalItem?.image}
        tagline={activeModalItem?.tagline}
        description={activeModalItem?.modalDesc || activeModalItem?.desc}
        highlights={activeModalItem?.highlights}
        ctaText="Request Service Quote"
        ctaLink="/contact"
      />
    </div>
  )
}
