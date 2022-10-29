import React from 'react'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { URL } from './util/constants'

// Importing pages
import Home from './pages/Home'

// Importing styles
import './styles/styles.css'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={`${URL}/`} element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
