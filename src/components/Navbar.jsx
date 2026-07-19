import { Link } from 'react-router-dom'
import { useResumeData } from '@hooks/useResumeData'
import { orderSocialNetworks } from '@util/socialOrder'
import '@styles/Navbar.css'

const Navbar = ({ theme, onToggleTheme }) => {
  const { data } = useResumeData()
  const profile = data?.profile
  const socialNetworks = data?.socialNetworks || []

  const orderedSocialNetworks = orderSocialNetworks(socialNetworks)

  return (
    <nav>
      <Link to='/' className='nav-brand'>
        {profile?.firstName || 'Francisco'} <span className='txt-primary'>{profile?.lastName || 'Veloz'}</span>
      </Link>

      <ul className='nav-menu'>
        {orderedSocialNetworks.map((network) => {
          return (
            <li className='nav-item' key={network.platform}>
              <a href={network.link} target='_blank' rel='noreferrer'>
                {network.platform}
              </a>
            </li>
          )
        })}

        <li className='nav-item'>
          <button
            type='button'
            className='btn-toggle'
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <i className={`fa-solid fa-sun ${theme === 'white' ? 'active' : ''}`} aria-hidden='true' />
            <i className={`fa-solid fa-moon ${theme === 'dark' ? 'active' : ''}`} aria-hidden='true' />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
