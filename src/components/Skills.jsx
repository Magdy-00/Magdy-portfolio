import { useState } from 'react'
import './Skills.css'

const SKILL_ICONS = {
  'Web Security': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
  ),
  'Network Security': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
  ),
  'Programming': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  ),
  'Tools': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
  ),
}

export default function Skills({ data }) {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-divider"></div>
          <h2 className="section-title">Skills & Arsenal</h2>
          <p className="section-subtitle">Tools and techniques in my offensive security toolkit</p>
        </div>

        <div className="skills__tabs reveal">
          {data.categories.map((cat, i) => (
            <button
              key={i}
              className={`skills__tab ${activeCategory === i ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveCategory(i)}
              id={`skill-tab-${i}`}
            >
              <span className="skills__tab-icon">{SKILL_ICONS[cat.name] || cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        <div className="skills__content reveal">
          {data.categories.map((cat, catIndex) => (
            <div
              key={catIndex}
              className={`skills__panel ${activeCategory === catIndex ? 'skills__panel--active' : ''}`}
            >
              <div className="skills__items">
                {cat.items.map((skill, i) => (
                  <div
                    key={i}
                    className="skills__item glass-card"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    <span className="skills__item-bullet"></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills__overview reveal">
          {data.categories.map((cat, i) => (
            <div key={i} className="skills__overview-card glass-card">
              <div className="skills__overview-icon">{SKILL_ICONS[cat.name] || cat.icon}</div>
              <h4 className="skills__overview-name">{cat.name}</h4>
              <p className="skills__overview-count">{cat.items.length} skills</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
