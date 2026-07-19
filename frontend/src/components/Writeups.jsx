import { useState, useEffect } from 'react'
import './Writeups.css'

export default function Writeups({ data }) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/writeups')
      .then(res => res.json())
      .then(json => {
        const items = json.items || []
        setPosts(items.filter(item => item.categories && item.categories.length > 0).slice(0, 9))
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section className="writeups section" id="writeups">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-divider"></div>
          <h2 className="section-title">Writeups</h2>
          <p className="section-subtitle">CTF solutions, lab walkthroughs, and vulnerability research documentation</p>
        </div>

        <div className="writeups__platforms reveal">
          {data.platforms.map((platform, i) => (
            <span key={i} className="writeups__platform badge badge-blue">{platform}</span>
          ))}
        </div>

        <div className="writeups__structure reveal">
          <div className="writeups__structure-card glass-card">
            <h4 className="writeups__structure-title">📋 Writeup Methodology</h4>
            <div className="writeups__structure-steps">
              {['Objective', 'Reconnaissance', 'Enumeration', 'Exploitation', 'Root Cause', 'Mitigation', 'Lessons Learned'].map((step, i) => (
                <div key={i} className="writeups__step">
                  <span className="writeups__step-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="writeups__step-name">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="writeups__grid reveal">
          {loading ? (
            <div className="writeups__loading">
              <div className="loading-spinner"></div>
              <p>Loading writeups from Medium...</p>
            </div>
          ) : posts.length > 0 ? (
            posts.map((post, i) => (
              <a
                key={i}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="writeups__card glass-card"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="writeups__card-meta">
                  <span className="badge badge-green">Writeup</span>
                  <span className="writeups__card-date">
                    {new Date(post.pubDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="writeups__card-title">{post.title}</h3>
                <p className="writeups__card-excerpt">
                  {post.description?.replace(/<[^>]*>?/gm, '').substring(0, 140)}...
                </p>
                <span className="writeups__card-link">
                  Read More →
                </span>
              </a>
            ))
          ) : (
            <div className="writeups__empty glass-card">
              <p>📝 Writeups will appear here from Medium. Check back soon!</p>
            </div>
          )}
        </div>

        <div className="writeups__cta reveal">
          <a
            href="https://medium.com/@magdyyasser24"
            target="_blank"
            rel="noopener noreferrer"
            className="writeups__more-btn"
          >
            View All Writeups on Medium →
          </a>
        </div>
      </div>
    </section>
  )
}
