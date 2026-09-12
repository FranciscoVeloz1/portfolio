import Navbar from './Navbar'
import Footer from './Footer'
import type { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  theme: 'dark' | 'white'
  onToggleTheme: () => void
}

const Layout = ({ children, theme, onToggleTheme }: LayoutProps) => {
  return (
    <>
      <a className='skip-link' href='#main-content'>
        Skip to main content
      </a>
      <div className='container'>
        <Navbar theme={theme} onToggleTheme={onToggleTheme} />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
