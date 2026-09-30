import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const TEAM_MEMBERS = [
  {
    name: 'S. Amarendra',
    roleCategory: 'Executive Leadership',
    designation: 'Founder & Chief Executive Officer (CEO)',
    description:
      'Provides strategic leadership and drives the organization’s overall vision, business growth, operational excellence, and long-term corporate direction.',
  },
  {
    name: 'Sayyad Ameer Basha',
    roleCategory: 'Corporate Governance',
    designation: 'Director',
    description:
      'Contributes to corporate governance, strategic decision-making, and organizational development while supporting the company’s long-term business objectives.',
  },
  {
    name: 'Birajdar Madhuri',
    roleCategory: 'Operations & Execution',
    designation: 'Executive Director & Chief Operating Officer (COO)',
    description:
      'Leads organizational operations, business execution, process excellence, and cross-functional coordination to ensure efficient and sustainable growth.',
  },
  {
    name: 'Manoj Reddy',
    roleCategory: 'Technology & Innovation',
    designation: 'Chief Technology Officer (CTO)',
    description:
      'Leads the organization’s technology strategy, digital transformation, software development initiatives, and technology-driven innovation.',
  },
  {
    name: 'Bommidi Nageswara Rao',
    roleCategory: 'Operations Management',
    designation: 'Operations Manager',
    description:
      'Oversees day-to-day operational activities, workforce coordination, process adherence, and service delivery to maintain consistent operational performance.',
  },
]

export default function OurTeam() {
  const animRef = useScrollAnimation()

  useEffect(() => {
    document.title = 'Our Team | AD MedTech Solutions'
  }, [])

  return (
    <div ref={animRef} className="our-team-page">
      {/* Page Hero */}
      <section className="page-hero" aria-label="Our Team hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <Link to="/about">About Us</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Our Team</span>
          </nav>
          <p className="team-hero-label">OUR TEAM</p>
          <h1 className="page-hero-title">
            Leadership &amp; <span>Executive Management</span>
          </h1>
          <p className="page-hero-desc">
            Meet the leadership team driving our organization’s vision, business growth,
            technology innovation, operational excellence, and long-term success.
          </p>
        </div>
      </section>

      {/* Team Cards Section */}
      <section className="section team-section" aria-labelledby="team-profiles-heading">
        <div className="container">
          <h2 className="sr-only" id="team-profiles-heading">
            Executive Leadership Team Profiles
          </h2>

          <div className="team-grid">
            {TEAM_MEMBERS.map((person, i) => (
              <article
                key={person.name}
                className="team-card anim"
                style={{ transitionDelay: `${i * 0.08}s` }}
                aria-label={`${person.name} - ${person.designation}`}
              >
                <div className="team-card-header">
                  <span className="team-card-badge">{person.roleCategory}</span>
                </div>

                <div className="team-card-body">
                  <h3 className="team-card-name">{person.name}</h3>
                  <p className="team-card-designation">{person.designation}</p>
                  <div className="team-card-divider" aria-hidden="true" />
                  <p className="team-card-desc">{person.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Closing Section */}
      <section className="section team-cta-section" aria-labelledby="team-closing-heading">
        <div className="container">
          <div className="team-cta-box anim">
            <p className="team-cta-label">OUR VISION &amp; VALUES</p>
            <h2 className="team-cta-title" id="team-closing-heading">
              Driven by Leadership. <span>Powered by Innovation.</span>
            </h2>
            <p className="team-cta-desc">
              Our leadership team brings together strategic vision, operational expertise,
              and technology-driven thinking to support sustainable organizational growth.
            </p>
            <div className="team-cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg" id="team-contact-btn">
                Contact Us →
              </Link>
              <Link to="/about" className="btn btn-secondary btn-lg" id="team-about-btn">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
