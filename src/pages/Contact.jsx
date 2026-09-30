import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CONTACT_INFO, WHATSAPP_MSG } from '../data/services'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { openEmail } from '../utils/email'

const SERVICE_OPTIONS = [
  'Software Development',
  'IT Solutions & Consulting',
  'Cloud Solutions',
  'Healthcare Technology Solutions',
  'Medical Coding',
  'Medical Billing',
  'Healthcare AI Solutions',
  'Medical Data Annotation',
  'GIS & Geospatial Services',
  'Data Entry & Data Processing',
  'Business Process Outsourcing',
  'General Inquiry',
]

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required.'
  if (!form.email.trim()) errors.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email.'
  if (!form.subject.trim()) errors.subject = 'Please select a subject.'
  if (!form.message.trim()) errors.message = 'Message is required.'
  return errors
}

export default function Contact() {
  const animRef = useScrollAnimation()
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.title = 'Contact Us | AD MedTech Solutions'
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setLoading(true)
    const emailSubject = `[AD MedTech Website Enquiry] ${form.subject || 'General Inquiry'} - from ${form.name}`
    const emailBody = 
      `New Contact Enquiry from AD MedTech Website\n\n` +
      `Full Name: ${form.name}\n` +
      `Email Address: ${form.email}\n` +
      `Phone Number: ${form.phone || 'N/A'}\n` +
      `Company / Organization: ${form.company || 'N/A'}\n` +
      `Subject: ${form.subject}\n\n` +
      `Message:\n${form.message}\n\n` +
      `Sent via AD MedTech Solutions Contact Form`

    setTimeout(() => {
      openEmail(CONTACT_INFO.emailInfo, emailSubject, emailBody)
      setSubmitted(true)
      setLoading(false)
    }, 400)
  }

  return (
    <div ref={animRef}>
      {/* Page Hero */}
      <section className="page-hero" aria-label="Contact hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Contact Us</span>
          </nav>
          <h1 className="page-hero-title">
            Get in Touch with <span>Our Team</span>
          </h1>
          <p className="page-hero-desc">
            Have a question, need a quote, or want to discuss a project?
            We'd love to hear from you. Reach out via WhatsApp, email or our contact form.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section" aria-labelledby="contact-heading">
        <div className="container">
          <h2 className="sr-only" id="contact-heading">Contact Information and Form</h2>
          <div className="contact-grid">
            {/* Info */}
            <div className="contact-info anim anim-left">
              <h2>Let's Start a Conversation</h2>
              <p style={{ fontSize: 15, color: 'var(--grey-text)', lineHeight: 1.7, marginBottom: 28 }}>
                Whether you're looking for a technology partner, need help with healthcare IT,
                or want to discuss outsourcing services — we're here to help.
              </p>

              <div className="contact-info-item">
                <div className="contact-info-icon">📍</div>
                <div className="contact-info-text">
                  <h4>Office Address</h4>
                  <address style={{ fontStyle: 'normal' }}>
                    <p>4th Floor, West Krishna Plaza,</p>
                    <p>Lakshmipuram, Guntur,</p>
                    <p>Andhra Pradesh, India.</p>
                  </address>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">📞</div>
                <div className="contact-info-text">
                  <h4>Phone / WhatsApp</h4>
                  <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phoneDisplay}</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">✉️</div>
                <div className="contact-info-text">
                  <h4>Email</h4>
                  <a
                    href={`mailto:${CONTACT_INFO.emailInfo}`}
                    onClick={(e) => { e.preventDefault(); openEmail(CONTACT_INFO.emailInfo); }}
                    title={`Send email to ${CONTACT_INFO.emailInfo}`}
                  >
                    {CONTACT_INFO.emailInfo}
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.emailHr}`}
                    onClick={(e) => { e.preventDefault(); openEmail(CONTACT_INFO.emailHr); }}
                    title={`Send email to ${CONTACT_INFO.emailHr}`}
                  >
                    {CONTACT_INFO.emailHr}
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">🕐</div>
                <div className="contact-info-text">
                  <h4>Business Hours</h4>
                  <p>Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
                </div>
              </div>

              {/* Quick WhatsApp */}
              <div style={{ marginTop: 28 }}>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', justifyContent: 'center' }}
                  id="contact-page-whatsapp-btn"
                >
                  💬 Chat on WhatsApp Now
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="anim anim-right">
              <div className="contact-form-wrapper">
                {submitted ? (
                  <div className="form-success">
                    <span className="form-success-icon">✅</span>
                    <h3>Message Prepared & Sent!</h3>
                    <p>
                      Your enquiry has been addressed directly to <strong>{CONTACT_INFO.emailInfo}</strong>.
                      Our team will review your message and get back to you within 24 business hours.
                    </p>
                    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
                      <button
                        className="btn btn-primary"
                        onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', subject: '', message: '' }) }}
                        id="contact-send-another-btn"
                      >
                        Send Another Message
                      </button>
                      <a
                        href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(`Hello AD MedTech Solutions, I have just submitted a contact enquiry regarding: ${form.subject}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-yellow"
                        id="contact-followup-whatsapp-btn"
                      >
                        💬 Follow up on WhatsApp
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3>Send Us an Enquiry</h3>
                    <form onSubmit={handleSubmit} noValidate aria-label="Contact form" id="contact-form">
                      <div className="form-grid-2">
                        <div className="form-group">
                          <label className="form-label" htmlFor="contact-name">
                            Full Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            id="contact-name"
                            name="name"
                            className={`form-input${errors.name ? ' error' : ''}`}
                            placeholder="Your full name"
                            value={form.name}
                            onChange={handleChange}
                            autoComplete="name"
                          />
                          {errors.name && <span className="form-error">{errors.name}</span>}
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="contact-email">
                            Email Address <span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            id="contact-email"
                            name="email"
                            className={`form-input${errors.email ? ' error' : ''}`}
                            placeholder="your@email.com"
                            value={form.email}
                            onChange={handleChange}
                            autoComplete="email"
                          />
                          {errors.email && <span className="form-error">{errors.email}</span>}
                        </div>
                      </div>
                      <div className="form-grid-2">
                        <div className="form-group">
                          <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                          <input
                            type="tel"
                            id="contact-phone"
                            name="phone"
                            className="form-input"
                            placeholder="+91 xxxx xxxxxx"
                            value={form.phone}
                            onChange={handleChange}
                            autoComplete="tel"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="contact-company">Company / Organization</label>
                          <input
                            type="text"
                            id="contact-company"
                            name="company"
                            className="form-input"
                            placeholder="Company name (optional)"
                            value={form.company}
                            onChange={handleChange}
                            autoComplete="organization"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-subject">
                          Service of Interest <span className="required">*</span>
                        </label>
                        <select
                          id="contact-subject"
                          name="subject"
                          className={`form-select${errors.subject ? ' error' : ''}`}
                          value={form.subject}
                          onChange={handleChange}
                        >
                          <option value="">Select a service or topic</option>
                          {SERVICE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                        {errors.subject && <span className="form-error">{errors.subject}</span>}
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-message">
                          Message <span className="required">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          className={`form-textarea${errors.message ? ' error' : ''}`}
                          placeholder="Tell us about your requirements..."
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                        />
                        {errors.message && <span className="form-error">{errors.message}</span>}
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        style={{ width: '100%', justifyContent: 'center' }}
                        disabled={loading}
                        id="contact-submit-btn"
                      >
                        {loading ? 'Sending...' : 'Send via WhatsApp →'}
                      </button>
                      <p style={{ fontSize: 12, color: 'var(--grey-text)', textAlign: 'center', marginTop: 12 }}>
                        This will open WhatsApp with your message pre-filled for quick delivery.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="map-section" aria-label="Office location map">
        <div className="map-wrapper">
          <iframe
            title="AD MedTech Solutions Office Location - West Krishna Plaza, Guntur"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.6676!2d80.423258!3d16.312267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a7563944cae5f%3A0x7995e2bb62de3bb1!2sWest%20Krishna%20Plaza!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  )
}
