import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SERVICES, WHY_CHOOSE, STATS, TECH_STACK, TRUSTED_PARTNERS, CONTACT_INFO, WHATSAPP_MSG } from '../data/services'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import AnimatedCounter from '../components/AnimatedCounter'
import Modal from '../components/Modal'
import TechnologyStack from '../components/TechnologyStack'

export default function Home() {
  const animRef = useScrollAnimation()
  const [activeModalItem, setActiveModalItem] = useState(null)

  useEffect(() => {
    document.title = 'AD MedTech Solutions | Healthcare IT & Technology Services'
  }, [])

  return (
    <div ref={animRef}>
      {/* ====== HERO (FULL-WIDTH CONTINUOUS BACKGROUND HERO) ====== */}
      <section className="hero" aria-label="Hero">
        {/* Soft responsive readability overlay */}
        <div className="hero-overlay" aria-hidden="true" />

        <div className="container">
          <div className="hero-content">
            <div className="hero-badge hero-animate-1">
              <span className="hero-badge-icon">🌱</span>
              Innovating for a Healthier Tomorrow
            </div>

            <h1 className="hero-title hero-animate-2">
              Technology-Driven<br />
              <span className="highlight">Healthcare &amp; IT Solutions</span>
            </h1>

            <p className="hero-subtitle hero-animate-3">
              Innovating Healthcare. Empowering Technology. Delivering Excellence.
            </p>

            <p className="hero-desc hero-animate-3">
              AD MedTech Solutions Pvt. Ltd. is a technology-driven company operating across Healthcare,
              Software Development, IT, Artificial Intelligence, Cloud Computing, Data Processing and GIS domains.
            </p>

            <div className="hero-ctas hero-animate-4">
              <Link to="/services" className="btn btn-primary btn-lg" id="hero-explore-btn">
                Explore Our Services →
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg" id="hero-contact-btn">
                Contact Us →
              </Link>
            </div>
          </div>
        </div>

        {/* Floating service pills */}
        <div className="hero-service-pills hero-animate-pills" aria-hidden="true">
          {SERVICES.slice(0, 5).map((s) => (
            <div key={s.id} className="hero-pill">
              <div className="hero-pill-icon">{s.icon}</div>
              {s.shortTitle}
            </div>
          ))}
        </div>
      </section>

      {/* ====== STATS (ANIMATED COUNTER) ====== */}
      <section className="stats-section" aria-label="Key statistics">
        <div className="container">
          <div className="stats-grid">
            {STATS.map((stat, i) => (
              <div key={i} className="stat-item anim" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="stat-icon">
                  {stat.icon === 'TROPHY_ICON' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 11H4.5a2.5 2.5 0 0 1 0-5H6" />
                      <path d="M18 11h1.5a2.5 2.5 0 0 0 0-5H18" />
                      <path d="M4 22h16" />
                      <path d="M10 16.66V19c0 .55-.47.98-.97 1.21C7.85 20.75 7 22.24 7 24" />
                      <path d="M14 16.66V19c0 .55.47.98.97 1.21C16.15 20.75 17 22.24 17 24" />
                      <path d="M18 4H6v7a6 6 0 0 0 12 0V4Z" />
                      <polygon points="12 8 13 10 15 10 13.5 11.5 14 13.5 12 12.5 10 13.5 10.5 11.5 9 10 11 10" fill="currentColor" stroke="none" />
                      <path d="M12 1v1.5" />
                      <path d="M8.5 2l1 1" />
                      <path d="M15.5 2l-1 1" />
                    </svg>
                  ) : (
                    stat.icon
                  )}
                </div>
                <div className="stat-info">
                  <h3>
                    <AnimatedCounter value={stat.value} duration={2000} />
                  </h3>
                  <p>{stat.label}</p>
                  {stat.note && <small>{stat.note}</small>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SERVICES OVERVIEW ====== */}
      <section className="section services-section" aria-labelledby="services-heading">
        <div className="container">
          <div className="anim">
            <p className="section-label">What We Do</p>
            <h2 className="section-title" id="services-heading">
              Our <span>Services</span>
            </h2>
            <p className="section-subtitle">
              Comprehensive technology and healthcare solutions tailored to your business needs.
            </p>
          </div>

          <div className="services-grid" id="services-grid">
            {SERVICES.map((service, i) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="service-card anim"
                style={{ transitionDelay: `${(i % 6) * 0.05}s` }}
                aria-label={`${service.title} - ${service.shortDesc}`}
              >
                {service.image && (
                  <div className="service-card-image-wrap">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-card-image"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="service-card-body">
                  <h3 className="service-card-title">{service.shortTitle}</h3>
                  <p className="service-card-desc">{service.shortDesc}</p>
                  <div className="service-card-arrow">
                    <span>Learn More</span>
                    <span className="arrow-icon">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="anim" style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/services" className="btn btn-secondary" id="home-all-services-btn">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ====== WHY CHOOSE (INTERACTIVE POPUPS) ====== */}
      <section className="section why-section" aria-labelledby="why-heading">
        <div className="container">
          <div className="anim">
            <p className="section-label">Why Us</p>
            <h2 className="section-title" id="why-heading">
              Why Choose <span>AD MedTech?</span>
            </h2>
            <p className="section-subtitle">
              We combine deep domain expertise with technology excellence. Click any card to explore details.
            </p>
          </div>
          <div className="why-grid">
            {WHY_CHOOSE.map((item, i) => (
              <div
                key={item.id || i}
                className="why-card anim"
                style={{ transitionDelay: `${(i % 4) * 0.08}s`, cursor: 'pointer' }}
                onClick={() => setActiveModalItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveModalItem(item)}
              >
                <div className="why-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--yellow-dark)', marginTop: 12, display: 'inline-block' }}>
                  Click for Spotlight &rarr;
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== TECHNOLOGY STACK ====== */}
      <TechnologyStack />

      {/* ====== TRUSTED PARTNERS ====== */}
      <section className="section trusted-section" aria-labelledby="partners-heading">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="anim">
            <p className="section-label">Our Ecosystem</p>
            <h2 className="section-title" id="partners-heading">
              Technology <span>Partners</span>
            </h2>
            <p className="section-subtitle">
              We work with and on leading enterprise platforms and ecosystems.
            </p>
          </div>
          <div className="trusted-logos anim anim-delay-2">
            {TRUSTED_PARTNERS.map((p, i) => (
              <div key={i} className="trusted-logo">{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="cta-section" aria-label="Call to action">
        <div className="container">
          <div className="cta-inner">
            <div className="cta-text anim">
              <h2>Ready to Transform Your Business?</h2>
              <p>Talk to our experts and discover how AD MedTech Solutions can help you grow.</p>
            </div>
            <div className="anim anim-delay-2" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                id="cta-whatsapp-btn"
              >
                💬 WhatsApp Us
              </a>
              <Link to="/contact" className="btn btn-secondary btn-lg" id="cta-contact-btn">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Spotlight Modal Popup */}
      <Modal
        isOpen={Boolean(activeModalItem)}
        onClose={() => setActiveModalItem(null)}
        title={activeModalItem?.title}
        icon={activeModalItem?.icon}
        image={activeModalItem?.image}
        tagline={activeModalItem?.tagline}
        description={activeModalItem?.modalDesc || activeModalItem?.desc}
        highlights={activeModalItem?.highlights}
        ctaText="Consult Our Experts"
        ctaLink="/contact"
      />
    </div>
  )
}
