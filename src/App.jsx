import Layout from './components/Layout'
import { useEffect } from 'react'
import { URL } from './util/constants'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { ResumeDataProvider } from '@context/ResumeDataContext'
import ResumeDataBoundary from '@components/ResumeDataBoundary'

// Importing pages
import Home from './pages/Home'
import Projects from './pages/Projects/Projects'
import Project from './pages/Projects/Project'
import Certificates from './pages/Certificates'

// Importing styles
import './styles/styles.css'

const App = () => {
  useEffect(() => {
    const theme = window.localStorage.getItem('theme')

    if (!theme) {
      window.localStorage.setItem('theme', 'dark')
    }

    if (theme === 'dark') {
      document.body.classList.remove('white-theme-variables')
      return
    }

    if (theme === 'white') {
      document.body.classList.add('white-theme-variables')
    }
  }, [])

  return (
    <ResumeDataProvider>
      <ResumeDataBoundary>
        <HashRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path={`${URL}/projects`} element={<Projects />} />
              <Route path={`${URL}/projects/:id`} element={<Project />} />
              <Route path={`${URL}/certificates`} element={<Certificates />} />
            </Routes>
          </Layout>
        </HashRouter>
      </ResumeDataBoundary>
    </ResumeDataProvider>
  )
}

export default App
