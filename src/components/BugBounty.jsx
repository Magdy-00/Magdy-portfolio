import './BugBounty.css'

export default function BugBounty({ data }) {
  return (
    <section className="bugbounty section" id="bugbounty">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-divider"></div>
          <h2 className="section-title">Bug Bounty</h2>
          <p className="section-subtitle">Real-world vulnerability discoveries in production applications</p>
        </div>

        <div className="bugbounty__stats reveal">
          <div className="bugbounty__stat glass-card">
            <span className="bugbounty__stat-number">{data.stats.totalFindings}</span>
            <span className="bugbounty__stat-label">Vulnerabilities Found</span>
          </div>
          <div className="bugbounty__stat glass-card">
            <span className="bugbounty__stat-number bugbounty__stat-number--red">{data.stats.criticalFindings}</span>
            <span className="bugbounty__stat-label">Critical Severity</span>
          </div>
          <div className="bugbounty__stat glass-card">
            <span className="bugbounty__stat-number bugbounty__stat-number--blue">100%</span>
            <span className="bugbounty__stat-label">Reported & Fixed</span>
          </div>
        </div>

        <div className="bugbounty__findings reveal">
          {data.findings.map((finding, i) => (
            <div key={i} className="bugbounty__finding glass-card">
              <div className="bugbounty__finding-header">
                <div className="bugbounty__finding-type">
                  <span className="bugbounty__finding-icon">🔴</span>
                  <h3>{finding.type}</h3>
                </div>
                <span className={`badge badge-red`}>{finding.severity}</span>
              </div>
              <p className="bugbounty__finding-desc">{finding.description}</p>
              <div className="bugbounty__finding-status">
                <span className="bugbounty__status-dot"></span>
                {finding.status}
              </div>
            </div>
          ))}
        </div>

        <div className="bugbounty__disclaimer reveal">
          <p>⚠️ All vulnerabilities were responsibly disclosed following coordinated disclosure practices. Target details are redacted to protect the organizations involved.</p>
        </div>
      </div>
    </section>
  )
}
