import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const SOCIAL_ICONS = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),

  medium: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
}

export default function Hero({ data }) {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const text = data.title
    let i = 0
    const typeInterval = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i))
        i++
      } else {
        clearInterval(typeInterval)
      }
    }, 50)

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => {
      clearInterval(typeInterval)
      clearInterval(cursorInterval)
    }
  }, [data.title])

  return (
    <section className="hero section" id="hero">
      <div className="hero__content container">
        <div className="hero__badge">
          <span className="hero__status-dot"></span>
          Available for opportunities
        </div>

        <h1 className="hero__name">
          {data.name.split(' ').map((word, i) => (
            <span key={i} className={i === 1 ? 'hero__name-accent' : ''}>
              {word}{' '}
            </span>
          ))}
        </h1>

        <p className="hero__title">
          <span className="hero__title-prefix">&gt; </span>
          {displayText}
          <span className={`hero__cursor ${showCursor ? '' : 'hero__cursor--hidden'}`}>_</span>
        </p>

        <p className="hero__summary">{data.summary}</p>

        <div className="hero__socials">
          {data.socials.map(social => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              title={social.name}
              id={`social-${social.name.toLowerCase()}`}
            >
              {SOCIAL_ICONS[social.icon]}
            </a>
          ))}
        </div>

        <div className="hero__cta">
          <Link to="/projects" className="hero__btn hero__btn--primary">
            View My Work
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <path d="M7 17l9.2-9.2M17 17V7H7"/>
            </svg>
          </Link>
          <Link to="/contact" className="hero__btn hero__btn--secondary">
            Get In Touch
          </Link>
        </div>

        <div className="hero__scroll-indicator">
          <div className="hero__scroll-line"></div>
        </div>
      </div>
    </section>
  )
}
