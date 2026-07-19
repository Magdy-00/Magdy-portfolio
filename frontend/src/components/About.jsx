import './About.css'

export default function About({ data }) {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-divider"></div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Offensive security engineer with a passion for breaking and securing systems</p>
        </div>

        <div className="about__grid">
          <div className="about__text reveal">
            <div className="about__focus glass-card">
              <div className="about__focus-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
              <h3>Focus & Methodology</h3>
              <p>{data.focus}</p>
              <p className="about__methodology">{data.methodology}</p>
            </div>

            <div className="about__interests">
              <h3 className="about__interests-title">Technical Interests</h3>
              <div className="about__interests-grid">
                {data.interests.map((interest, i) => (
                  <span key={i} className="about__interest-tag">{interest}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="about__timeline reveal">
            <h3 className="about__timeline-title">
              <span className="about__timeline-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg></span>
              Experience
            </h3>
            {data.experience.map((exp, i) => (
              <div key={i} className="about__exp glass-card">
                <div className="about__exp-header">
                  <div>
                    <h4 className="about__exp-company">{exp.company}</h4>
                    <p className="about__exp-role">{exp.role}</p>
                  </div>
                  <span className="about__exp-period badge badge-green">{exp.period}</span>
                </div>
                <ul className="about__exp-highlights">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
