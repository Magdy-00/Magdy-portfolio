import './Certifications.css'

const ISSUER_COLORS = {
  'CYBRARY': 'green',
  'Coursera (ISC2)': 'blue',
  'CyberTalents': 'purple',
  'Coursera (Google)': 'blue',
  'Udemy': 'yellow',
}

export default function Certifications({ data }) {
  return (
    <section className="certs section" id="certifications">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-divider"></div>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Professional credentials and completed training programs</p>
        </div>

        <div className="certs__timeline reveal">
          {data.map((cert, i) => (
            <div
              key={i}
              className="certs__card glass-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="certs__card-dot"></div>
              <div className="certs__card-content">
                <div className="certs__card-header">
                  <span className={`badge badge-${ISSUER_COLORS[cert.issuer] || 'green'}`}>
                    {cert.issuer}
                  </span>
                  <span className="certs__card-date">{cert.date}</span>
                </div>
                <h3 className="certs__card-name">{cert.name}</h3>
                <div className="certs__card-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <path d="M12 15l-2 5 2-1 2 1-2-5z"/>
                    <circle cx="12" cy="9" r="6"/>
                  </svg>
                  Verified Credential
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
