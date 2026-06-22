import { Link } from 'react-router-dom'
import { useResumeData } from '@hooks/useResumeData'
import '@styles/Navbar.css'

const SOCIAL_ORDER = ['YouTube', 'GitHub', 'LinkedIn']

const Navbar = () => {
  const { data } = useResumeData()
  const profile = data?.profile
  const socialNetworks = data?.socialNetworks || []

  const handleToggle = () => {
    const theme = window.localStorage.getItem('theme')
    window.localStorage.setItem('theme', theme === 'dark' ? 'white' : 'dark')
    document.body.classList.toggle('white-theme-variables')
  }

  const orderedSocialNetworks = SOCIAL_ORDER
    .map((platform) => {
      return socialNetworks.find((network) => {
        return network.platform === platform
      })
    })
    .filter(Boolean)

  return (
    <nav>
      <Link to='/' className='nav-brand'>
        {profile?.firstName || 'Francisco'}{' '}
        <span className='txt-primary'>{profile?.lastName || 'Veloz'}</span>
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
