import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CORE_VALUES, WHY_CHOOSE, TEAM_VALUES, CONTACT_INFO, WHATSAPP_MSG, TRUSTED_PARTNERS } from '../data/services'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Modal from '../components/Modal'

export default function About() {
  const animRef = useScrollAnimation()
  const [activeModalItem, setActiveModalItem] = useState(null)

  useEffect(() => {
    document.title = 'About Us | AD MedTech Solutions'
  }, [])

  return (
    <div ref={animRef}>
      {/* Page Hero */}
      <section className="page-hero" aria-label="About us hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span>About Us</span>
          </nav>
          <h1 className="page-hero-title">
            Technology Meets <span>Healthcare</span> Expertise
          </h1>
          <p className="page-hero-desc">
            AD MedTech Solutions Pvt. Ltd. is a technology-driven company founded in July 2024,
            dedicated to delivering innovative, accurate, and reliable solutions across healthcare IT,
            software development, AI and data services.
          </p>
          <div className="page-hero-actions">
            <Link to="/contact" className="btn btn-primary btn-lg" id="about-contact-btn">Get in Touch</Link>
            <Link to="/services" className="btn btn-secondary btn-lg" id="about-services-btn">Our Services</Link>
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="section about-section" aria-labelledby="about-overview-heading">
        <div className="container">
          <div className="about-grid">
            {/* Images Collage matching image copy 15.png */}
            <div className="about-images anim anim-left">
              <div className="about-img large">
                <img src="/images/hero-bg.png" alt="Doctor with holographic medical interface" loading="eager" />
              </div>
              <div className="about-img">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" alt="Software development coding" loading="lazy" />
              </div>
              <div className="about-img">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" alt="Cloud servers and digital infrastructure" loading="lazy" />
              </div>
            </div>

            {/* Content */}
            <div className="anim anim-right">
              <p className="section-label">Who We Are</p>
              <h2 className="section-title" id="about-overview-heading">
                Your Trusted Technology <span>Partner</span>
              </h2>
              <p style={{ fontSize: 15, color: 'var(--grey-text)', lineHeight: 1.8, marginTop: 16 }}>
                AD MedTech Solutions Pvt. Ltd. was established on <strong>23 July 2024</strong> with a vision
                to bridge the gap between healthcare and technology. We are a dynamic team of 10+ skilled
                professionals committed to delivering quality solutions across multiple domains.
              </p>
              <p style={{ fontSize: 15, color: 'var(--grey-text)', lineHeight: 1.8, marginTop: 12 }}>
                From custom software and cloud infrastructure to medical coding, billing, AI-powered
                analytics and GIS services — we bring a comprehensive suite of capabilities backed by
                domain expertise and a client-first mindset.
              </p>

              {/* Contact cards */}
              <div className="about-contact-row" style={{ marginTop: 28 }}>
                <div className="about-contact-card">
                  <div className="about-contact-icon">📍</div>
                  <div className="about-contact-info">
                    <h4>Location</h4>
                    <p>Lakshmipuram, Guntur, AP, India</p>
                  </div>
                </div>
                <div className="about-contact-card">
                  <div className="about-contact-icon">📞</div>
                  <div className="about-contact-info">
                    <h4>Phone</h4>
                    <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phoneDisplay}</a>
                  </div>
                </div>
                <div className="about-contact-card">
                  <div className="about-contact-icon">✉️</div>
                  <div className="about-contact-info">
                    <h4>Email</h4>
                    <a href={`mailto:${CONTACT_INFO.emailInfo}`}>info@admedtech...</a>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary" id="about-cta-contact">Contact Us →</Link>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-yellow"
                  id="about-cta-whatsapp"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="section vmv-section" aria-labelledby="vmv-heading">
        <div className="container">
          <div className="anim" style={{ textAlign: 'center' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Our Foundation</p>
            <h2 className="section-title" id="vmv-heading">
              Vision, Mission &amp; <span>Values</span>
            </h2>
          </div>
          <div className="vmv-grid">
            {/* Vision */}
            <div className="vmv-card anim anim-delay-1">
              <div className="vmv-card-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                To be a globally recognized technology partner that empowers healthcare organizations
                and businesses with innovative, intelligent, and reliable digital solutions — driving
                better outcomes and operational excellence across industries.
              </p>
            </div>

            {/* Mission */}
            <div className="vmv-card anim anim-delay-2">
              <div className="vmv-card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To deliver accurate, scalable and client-centric technology solutions across software
                development, healthcare IT, AI, cloud and data services — combining domain expertise
                with technological innovation to exceed client expectations consistently.
              </p>
            </div>

            {/* Values */}
            <div className="vmv-card values-card anim anim-delay-3">
              <div className="vmv-card-icon">⭐</div>
              <h3>Our Core Values</h3>
              <div className="values-grid">
                {CORE_VALUES.map((v, i) => (
                  <div key={i} className="value-item">
                    <div className="value-check">✓</div>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Highlights & Popups */}
      <section className="section" style={{ background: 'var(--grey)' }} aria-labelledby="team-heading">
        <div className="container">
          <div className="anim" style={{ textAlign: 'center' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Our Team</p>
            <h2 className="section-title" id="team-heading">
              Built by <span>Passionate Experts</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
              Our team of 10+ professionals brings together expertise in technology, healthcare and operations. Click any card to view details.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginTop: 48 }}>
            {TEAM_VALUES.map((item, i) => (
              <div
                key={item.id || i}
                className="why-card anim"
                style={{ transitionDelay: `${i * 0.1}s`, cursor: 'pointer' }}
                onClick={() => setActiveModalItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveModalItem(item)}
              >
                <div className="why-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--yellow-dark)', marginTop: 12, display: 'inline-block' }}>
                  Click to View &rarr;
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Popups */}
      <section className="section why-section" aria-labelledby="why-about-heading">
        <div className="container">
          <div className="anim" style={{ textAlign: 'center' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Our Strengths</p>
            <h2 className="section-title" id="why-about-heading">
              What Sets Us <span>Apart</span>
            </h2>
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
              >
                <div className="why-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="section trusted-section" aria-labelledby="about-partners-heading">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="anim">
            <p className="section-label">Our Ecosystem</p>
            <h2 className="section-title" id="about-partners-heading">
              Technology <span>Partnerships</span>
            </h2>
          </div>
          <div className="trusted-logos anim anim-delay-2">
            {TRUSTED_PARTNERS.map((p, i) => (
              <div key={i} className="trusted-logo">{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" aria-label="Contact CTA">
        <div className="container">
          <div className="cta-inner">
            <div className="cta-text anim">
              <h2>Let's Build Something Together</h2>
              <p>Reach out to discuss your requirements with our team of experts.</p>
            </div>
            <div className="anim anim-delay-2" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                id="about-bottom-whatsapp"
              >
                💬 WhatsApp Us
              </a>
              <Link to="/contact" className="btn btn-secondary btn-lg" id="about-bottom-contact">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      <Modal
        isOpen={Boolean(activeModalItem)}
        onClose={() => setActiveModalItem(null)}
        title={activeModalItem?.title}
        icon={activeModalItem?.icon}
        image={activeModalItem?.image}
        tagline={activeModalItem?.tagline}
        description={activeModalItem?.modalDesc || activeModalItem?.desc}
        highlights={activeModalItem?.highlights}
        ctaText="Get in Touch"
        ctaLink="/contact"
      />
    </div>
  )
}
