import Layout from './components/Layout'
import { useEffect } from 'react'
import { URL } from './util/constants'
import { HashRouter, Routes, Route } from 'react-router-dom'

// Importing pages
import Home from './pages/Home'
import Projects from './pages/Projects/Projects'
import Project from './pages/Projects/Project'

// Importing styles
import './styles/styles.css'

const App = () => {
  useEffect(() => {
    const theme = window.localStorage.getItem('theme')
    if (!theme) window.localStorage.setItem('theme', 'dark')
    if (theme === 'dark') return document.body.classList.remove('white-theme-variables')
    if (theme === 'white') return document.body.classList.add('white-theme-variables')
  }, [])

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={`${URL}/projects`} element={<Projects />} />
          <Route path={`${URL}/projects/:id`} element={<Project />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default App
