import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Writeups from './components/Writeups'
import BugBounty from './components/BugBounty'
import Certifications from './components/Certifications'
import GitHubSection from './components/GitHubSection'
import Contact from './components/Contact'

function ScrollAndReveal() {
  const location = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    // Give DOM a moment to render new route components
    setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal')
      revealElements.forEach(el => observer.observe(el))
    }, 50)

    return () => observer.disconnect()
  }, [location])

  return null
}

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/portfolio')
      .then(res => res.json())
      .then(json => {
        setData(json)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to load portfolio data:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p className="loading-text">Initializing<span className="loading-dots"></span></p>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="loading-screen">
        <p className="loading-text" style={{ color: 'var(--accent-red)' }}>
          Failed to connect to API. Make sure the Flask backend is running on port 5000.
        </p>
      </div>
    )
  }

  return (
    <Router>
      <ParticleBackground />
      <Navbar />
      <ScrollAndReveal />
      <main>
        <Routes>
          <Route path="/" element={<Hero data={data.hero} />} />
          <Route path="/about" element={<About data={data.about} />} />
          <Route path="/skills" element={<Skills data={data.skills} />} />
          <Route path="/projects" element={<Projects data={data.projects} />} />
          <Route path="/writeups" element={<Writeups data={data.writeups} />} />
          <Route path="/bug-bounty" element={<BugBounty data={data.bugBounty} />} />
          <Route path="/certifications" element={<Certifications data={data.certifications} />} />
          <Route path="/github" element={<GitHubSection data={data.github} />} />
          <Route path="/contact" element={<Contact data={data.contact} />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
