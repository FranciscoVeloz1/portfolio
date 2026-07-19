import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children, theme, onToggleTheme }) => {
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
