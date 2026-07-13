import { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { ResumeDataProvider } from '@context/ResumeDataContext'
import { ThemeProvider } from '@context/ThemeContext'
import { Layout } from '@components/layout/Layout'
import { ErrorBoundary } from '@components/error/ErrorBoundary'
import '@styles/global.css'

const HomePage = lazy(() => import('@pages/HomePage'))
const ProjectsPage = lazy(() => import('@pages/Projects/ProjectsPage'))
const ProjectDetailPage = lazy(() => import('@pages/Projects/ProjectDetailPage'))
const CertificatesPage = lazy(() => import('@pages/Certificates/CertificatesPage'))
const NotFound = lazy(() => import('@pages/NotFound'))

const PageFallback = () => {
  return <div className='container' style={{ padding: '96px 0', textAlign: 'center' }} aria-busy='true' />
}

const App = () => {
  return (
    <ThemeProvider>
      <ResumeDataProvider>
        <HashRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true
          }}
        >
          <Layout>
            <ErrorBoundary>
              <Suspense fallback={<PageFallback />}>
                <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/projects' element={<ProjectsPage />} />
                  <Route path='/projects/:id' element={<ProjectDetailPage />} />
                  <Route path='/certificates' element={<CertificatesPage />} />
                  <Route path='*' element={<NotFound />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </Layout>
        </HashRouter>
      </ResumeDataProvider>
    </ThemeProvider>
  )
}

export default App
