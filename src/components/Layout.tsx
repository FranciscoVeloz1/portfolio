import Navbar from './Navbar'
import Footer from './Footer'
import type { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

const Layout = ({ children, theme, onToggleTheme }: LayoutProps) => {
  return (
    <>
      <a className='skip-link' href='#main-content'>
        Skip to main content
      </a>
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
