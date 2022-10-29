import { Link } from 'react-router-dom'
import { URL } from '@util/constants'
import '@styles/Navbar.css'

const Navbar = () => {
  const handleToggle = () => {
    const theme = window.localStorage.getItem('theme')
    window.localStorage.setItem('theme', theme === 'dark' ? 'white' : 'dark')
    document.body.classList.toggle('white-theme-variables')
  }

  return (
    <nav>
      <Link to={`${URL}/`} className='nav-brand'>
        Francisco <span className='txt-primary'>Veloz</span>
      </Link>

      <ul className='nav-menu'>
        <li className='nav-item'>
          <a href='https://www.youtube.com/channel/UC_OcxydUU_51oT8mbcedriw' target='_blank' rel='noreferrer'>
            YouTube
          </a>
        </li>

        <li className='nav-item'>
          <a href='https://github.com/FranciscoVeloz1' target='_blank' rel='noreferrer'>
            GitHub
          </a>
        </li>

        <li className='nav-item'>
          <a href='https://twitter.com/FranciscoGVeloz' target='_blank' rel='noreferrer'>
            Twitter
          </a>
        </li>

        <li className='nav-item'>
          <div className='btn-toggle' onClick={handleToggle}>
            <i className='fa-solid fa-sun' />
            <i className='fa-solid fa-moon active' />
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
