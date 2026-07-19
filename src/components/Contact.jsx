import { useState } from 'react'
import './Contact.css'

export default function Contact({ data }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open mailto with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-divider"></div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Interested in working together or have a security question?</p>
        </div>

        <div className="contact__grid">
          <div className="contact__info reveal">
            <div className="contact__info-card glass-card">
              <div className="contact__info-item">
                <span className="contact__info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${data.email}`}>{data.email}</a>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </span>
                <div>
                  <h4>LinkedIn</h4>
                  <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/magdy-khalil
                  </a>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </span>
                <div>
                  <h4>GitHub</h4>
                  <a href={data.github} target="_blank" rel="noopener noreferrer">
                    github.com/Magdy-00
                  </a>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </span>
                <div>
                  <h4>X (Twitter)</h4>
                  <a href={data.x} target="_blank" rel="noopener noreferrer">
                    x.com/0xMagdy_Khalil
                  </a>
                </div>
              </div>
            </div>

            <div className="contact__availability glass-card">
              <span className="contact__avail-dot"></span>
              <span>Currently available for offensive security roles & freelance pentesting engagements</span>
            </div>
          </div>

          <form className="contact__form glass-card reveal" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="contact-name">Name</label>
              <input
                type="text"
                id="contact-name"
                placeholder="Your name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-email">Email</label>
              <input
                type="email"
                id="contact-email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                placeholder="Tell me about your project or security needs..."
                rows="5"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>

            <button type="submit" className="contact__submit" id="contact-submit">
              Send Message
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </form>
        </div>

        <footer className="contact__footer reveal">
          <p>
            <span className="contact__footer-bracket">{'<'}</span>
            Built with React + Flask by Magdy Khalil
            <span className="contact__footer-bracket">{'/>'}</span>
          </p>
          <p className="contact__footer-year">© {new Date().getFullYear()}</p>
        </footer>
      </div>
    </section>
  )
}
