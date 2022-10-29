import { useEffect } from 'react'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { URL } from './util/constants'

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
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={`${URL}/`} element={<Home />} />
          <Route path={`${URL}/projects`} element={<Projects />} />
          <Route path={`${URL}/projects/:id`} element={<Project />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
