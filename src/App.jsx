import Layout from './components/Layout'
import { useEffect, useState } from 'react'
import { URL } from './util/constants'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { ResumeDataProvider } from '@context/ResumeDataContext'

// Importing pages
import Home from './pages/Home'
import Projects from './pages/Projects/Projects'
import Project from './pages/Projects/Project'
import Certificates from './pages/Certificates'

// Importing styles
import './styles/styles.css'

const App = () => {
  const [theme, setTheme] = useState(() => {
    try {
      return window.localStorage.getItem('theme') || 'dark'
    } catch {
      return 'dark'
    }
  })

  useEffect(() => {
    document.body.classList.toggle('white-theme-variables', theme === 'white')
    try {
      window.localStorage.setItem('theme', theme)
    } catch {
      // Keep the selected theme for this session when storage is unavailable.
    }
  }, [theme])

  const handleToggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'white' : 'dark'))
  }

  return (
    <ResumeDataProvider>
      <HashRouter>
        <Layout theme={theme} onToggleTheme={handleToggleTheme}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path={`${URL}/projects`} element={<Projects />} />
            <Route path={`${URL}/projects/:id`} element={<Project />} />
            <Route path={`${URL}/certificates`} element={<Certificates />} />
          </Routes>
        </Layout>
      </HashRouter>
    </ResumeDataProvider>
  )
}

export default App
