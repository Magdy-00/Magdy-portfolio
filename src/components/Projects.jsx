import './Projects.css'

const PROJECT_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
)

export default function Projects({ data }) {
  const allProjects = data.categories.flatMap(cat => cat.projects)

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-divider"></div>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Real-world projects I've built and contributed to</p>
        </div>

        <div className="projects__panel projects__panel--active">
          <div className="projects__grid">
            {allProjects.map((project, i) => (
              <div
                key={i}
                className={`projects__card glass-card ${project.featured ? 'projects__card--featured' : ''}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="projects__card-header">
                  <span className="projects__card-icon">
                    {PROJECT_ICON}
                  </span>
                  <span className="badge badge-green">
                    Project
                  </span>
                </div>

                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.description}</p>

                <div className="projects__card-tech">
                  {project.tech.map((t, j) => (
                    <span key={j} className="projects__tech-tag">{t}</span>
                  ))}
                </div>

                <div className="projects__card-footer">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="projects__card-link">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                      View on GitHub
                    </a>
                  ) : (
                    <span className="projects__card-link">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                      View Project
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
