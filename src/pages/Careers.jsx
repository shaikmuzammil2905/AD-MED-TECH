import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CONTACT_INFO, WHATSAPP_MSG, CAREER_PERKS } from '../data/services'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Modal from '../components/Modal'
import { openEmail } from '../utils/email'

const OPEN_ROLES = [
  {
    id: 'medical-coder',
    icon: '📋',
    title: 'Medical Coder (ICD-10 / CPT)',
    type: 'Full-time',
    location: 'Guntur, AP',
    experience: '1–3 years',
    desc: 'We are looking for experienced certified medical coders with expertise in ICD-10-CM/PCS and CPT coding. CPC or CCS certification preferred.',
    skills: ['ICD-10', 'CPT Coding', 'HCC', 'Medical Terminology', 'EMR Systems'],
  },
  {
    id: 'software-developer',
    icon: '💻',
    title: 'Software Developer (React / Node.js)',
    type: 'Full-time',
    location: 'Guntur, AP / Remote',
    experience: '2–4 years',
    desc: 'Join our development team to build scalable web applications and enterprise software solutions. Experience with modern JavaScript frameworks required.',
    skills: ['React', 'Node.js', 'JavaScript', 'REST APIs', 'SQL'],
  },
  {
    id: 'data-annotation',
    icon: '🏷️',
    title: 'Medical Data Annotator',
    type: 'Full-time',
    location: 'Guntur, AP',
    experience: '0–2 years',
    desc: 'Perform high-quality annotation of medical images and clinical data to support AI/ML model development. Training provided for the right candidates.',
    skills: ['Medical Knowledge', 'Attention to Detail', 'Data Annotation Tools', 'Healthcare Domain'],
  },
  {
    id: 'cloud-engineer',
    icon: '☁️',
    title: 'Cloud Infrastructure Engineer',
    type: 'Full-time',
    location: 'Guntur, AP / Remote',
    experience: '2–5 years',
    desc: 'Design, deploy and manage cloud infrastructure on AWS and Azure. Experience with DevOps tools and infrastructure as code required.',
    skills: ['AWS', 'Azure', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    id: 'gis-analyst',
    icon: '🗺️',
    title: 'GIS Analyst',
    type: 'Full-time',
    location: 'Guntur, AP',
    experience: '1–3 years',
    desc: 'Process, validate and analyze geospatial data for mapping and location intelligence projects. Experience with ArcGIS or QGIS required.',
    skills: ['ArcGIS', 'QGIS', 'Geospatial Analysis', 'Python', 'GIS Data Processing'],
  },
  {
    id: 'medical-billing',
    icon: '💰',
    title: 'Medical Billing Specialist',
    type: 'Full-time',
    location: 'Guntur, AP',
    experience: '1–3 years',
    desc: 'Handle end-to-end medical billing including charge entry, claim submission, denial management and payment posting for US healthcare clients.',
    skills: ['Medical Billing', 'EDI 837/835', 'Denial Management', 'Revenue Cycle', 'Practice Management'],
  },
]

export default function Careers() {
  const animRef = useScrollAnimation()
  const [activeModalItem, setActiveModalItem] = useState(null)

  useEffect(() => {
    document.title = 'Careers | AD MedTech Solutions'
  }, [])

  const applyMsg = (role) =>
    encodeURIComponent(`Hello AD MedTech Solutions, I would like to apply for the ${role.title} position.`)

  return (
    <div ref={animRef}>
      {/* Page Hero */}
      <section className="page-hero" aria-label="Careers hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Careers</span>
          </nav>
          <h1 className="page-hero-title">
            Build Your Career at <span>AD MedTech</span>
          </h1>
          <p className="page-hero-desc">
            Join a growing team of 10+ passionate professionals dedicated to delivering innovative
            technology and healthcare solutions. We are always looking for talented individuals to grow with us.
          </p>
          <div className="page-hero-actions">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hello AD MedTech Solutions, I am interested in career opportunities at your company.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              id="careers-apply-btn"
            >
              💬 Apply on WhatsApp
            </a>
            <a
              href={`mailto:${CONTACT_INFO.emailHr}`}
              onClick={(e) => { e.preventDefault(); openEmail(CONTACT_INFO.emailHr, 'Career Opportunity Enquiry - AD MedTech Solutions', 'Hello HR Team,\n\nI am interested in career opportunities at AD MedTech Solutions.\n\nName:\nPhone:\nPosition of Interest:\n\nThank you.'); }}
              className="btn btn-secondary btn-lg"
              id="careers-email-btn"
              title={`Send email to ${CONTACT_INFO.emailHr}`}
            >
              ✉️ Email HR
            </a>
          </div>
        </div>
      </section>

      {/* Why Join (Modal Popups with Scroll Animation) */}
      <section className="section" style={{ background: 'var(--grey)' }} aria-labelledby="why-join-heading">
        <div className="container">
          <div className="anim" style={{ textAlign: 'center' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Why Join Us</p>
            <h2 className="section-title" id="why-join-heading">
              Why Work at <span>AD MedTech?</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
              We invest in our people, creating an environment where you can learn, grow and thrive. Click any card to view details.
            </p>
          </div>
          <div className="why-join-grid" style={{ marginTop: 48 }}>
            {CAREER_PERKS.map((item, i) => (
              <div
                key={item.id || i}
                className="why-join-item anim"
                style={{ transitionDelay: `${(i % 2) * 0.1}s`, cursor: 'pointer' }}
                onClick={() => setActiveModalItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveModalItem(item)}
              >
                <div className="why-join-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--yellow-dark)', marginTop: 6, display: 'inline-block' }}>
                    Click for Details &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section careers-section" aria-labelledby="open-roles-heading">
        <div className="container">
          <div className="anim" style={{ textAlign: 'center' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Open Positions</p>
            <h2 className="section-title" id="open-roles-heading">
              Current <span>Openings</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
              Explore our current openings and find the role that matches your skills and ambitions.
            </p>
          </div>

          <div className="careers-grid">
            {OPEN_ROLES.map((role, i) => (
              <div
                key={role.id}
                className="career-card anim"
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
                id={`role-${role.id}`}
              >
                <div className="career-card-icon">{role.icon}</div>
                <h3>{role.title}</h3>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '10px 0' }}>
                  <span style={{ padding: '3px 10px', background: 'var(--yellow-bg)', borderRadius: 'var(--radius-full)', fontSize: 11, fontWeight: 700, color: '#5a6200' }}>
                    {role.type}
                  </span>
                  <span style={{ padding: '3px 10px', background: 'var(--grey)', borderRadius: 'var(--radius-full)', fontSize: 11, fontWeight: 600, color: 'var(--grey-text)' }}>
                    📍 {role.location}
                  </span>
                  <span style={{ padding: '3px 10px', background: 'var(--grey)', borderRadius: 'var(--radius-full)', fontSize: 11, fontWeight: 600, color: 'var(--grey-text)' }}>
                    💼 {role.experience}
                  </span>
                </div>
                <p>{role.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 14, marginBottom: 18 }}>
                  {role.skills.map((skill, j) => (
                    <span key={j} style={{ padding: '3px 10px', background: 'var(--grey-mid)', borderRadius: 'var(--radius-full)', fontSize: 11, fontWeight: 500, color: 'var(--charcoal-light)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${applyMsg(role)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                  id={`apply-${role.id}`}
                >
                  Apply Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Application */}
      <section className="section" style={{ background: 'var(--grey)' }} aria-label="General application">
        <div className="container">
          <div
            style={{
              background: 'var(--charcoal)',
              borderRadius: 'var(--radius-xl)',
              padding: '52px 48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 32,
              flexWrap: 'wrap',
            }}
            className="anim"
          >
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: 'var(--white)', marginBottom: 10 }}>
                Don't See a Role That Fits?
              </h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', maxWidth: 440 }}>
                We are always open to hearing from talented professionals. Send us your resume and we'll
                reach out when a suitable opportunity arises.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href={`mailto:${CONTACT_INFO.emailHr}?subject=General Application - AD MedTech Solutions`}
                onClick={(e) => { e.preventDefault(); openEmail(CONTACT_INFO.emailHr, 'General Application - AD MedTech Solutions', 'Hello HR Team,\n\nI would like to submit my application for any suitable openings at AD MedTech Solutions.\n\nFull Name:\nPhone Number:\nAreas of Expertise / Skills:\nYears of Experience:\n\nPlease find my resume attached.\n\nThank you.'); }}
                className="btn btn-primary btn-lg"
                id="general-apply-email-btn"
                title={`Send resume to ${CONTACT_INFO.emailHr}`}
              >
                ✉️ Send Resume
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hello AD MedTech Solutions, I would like to submit a general application for any suitable openings.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white btn-lg"
                id="general-apply-whatsapp-btn"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Perk Detail Modal */}
      <Modal
        isOpen={Boolean(activeModalItem)}
        onClose={() => setActiveModalItem(null)}
        title={activeModalItem?.title}
        icon={activeModalItem?.icon}
        image={activeModalItem?.image}
        tagline={activeModalItem?.tagline}
        description={activeModalItem?.modalDesc || activeModalItem?.desc}
        highlights={activeModalItem?.highlights}
        ctaText="Apply to Join Us"
        ctaLink={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hello AD MedTech Solutions, I am interested in career opportunities at your company.')}`}
      />
    </div>
  )
}
