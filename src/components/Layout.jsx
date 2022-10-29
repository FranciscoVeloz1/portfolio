import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <div className='container'>
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
