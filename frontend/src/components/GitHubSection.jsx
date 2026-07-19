import { useState, useEffect } from 'react'
import './GitHubSection.css'

export default function GitHubSection({ data }) {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.github.com/users/${data.username}/repos?sort=updated&per_page=6`)
      .then(res => res.json())
      .then(json => {
        if (Array.isArray(json)) {
          setRepos(json.filter(r => !r.fork).slice(0, 6))
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [data.username])

  const LANG_COLORS = {
    Python: '#3572A5',
    JavaScript: '#f1e05a',
    Java: '#b07219',
    PHP: '#4F5D95',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Shell: '#89e051',
    PowerShell: '#012456',
    TypeScript: '#2b7489',
  }

  return (
    <section className="github section" id="github">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-divider"></div>
          <h2 className="section-title">GitHub</h2>
          <p className="section-subtitle">Open source security tools and research projects</p>
        </div>

        <div className="github__profile reveal">
          <a
            href={`https://github.com/${data.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="github__profile-link glass-card"
          >
            <img
              src={`https://github.com/${data.username}.png?size=80`}
              alt={data.username}
              className="github__avatar"
            />
            <div>
              <h3 className="github__username">@{data.username}</h3>
              <p className="github__profile-cta">View Full Profile →</p>
            </div>
          </a>
        </div>

        <div className="github__grid reveal">
          {loading ? (
            <div className="github__loading">
              <div className="loading-spinner"></div>
              <p>Fetching repositories...</p>
            </div>
          ) : repos.length > 0 ? (
            repos.map((repo, i) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="github__repo glass-card"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="github__repo-header">
                  <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16" className="github__repo-icon">
                    <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1h-8a1 1 0 00-1 1v6.708A2.486 2.486 0 014.5 9h8.5V1.5z"/>
                  </svg>
                  <span className="github__repo-name">{repo.name}</span>
                </div>

                <p className="github__repo-desc">
                  {repo.description || 'No description available'}
                </p>

                <div className="github__repo-meta">
                  {repo.language && (
                    <span className="github__repo-lang">
                      <span
                        className="github__lang-dot"
                        style={{ background: LANG_COLORS[repo.language] || '#ccc' }}
                      ></span>
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="github__repo-stars">
                      ⭐ {repo.stargazers_count}
                    </span>
                  )}
                  {repo.forks_count > 0 && (
                    <span className="github__repo-forks">
                      🔀 {repo.forks_count}
                    </span>
                  )}
                </div>
              </a>
            ))
          ) : (
            <div className="github__empty glass-card">
              <p>Unable to fetch repositories. Visit my GitHub profile directly.</p>
            </div>
          )}
        </div>

        <div className="github__note reveal">
          <p>💡 All security tools include ethical use disclaimers, clear documentation, installation instructions, and usage examples.</p>
        </div>
      </div>
    </section>
  )
}
