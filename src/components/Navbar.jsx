import Spinner from '@components/Spinner/Spinner'
import ErrorMessage from '@components/ErrorMessage/ErrorMessage'
import { Link } from 'react-router-dom'
import useResumeData from '@hooks/useResumeData'
import { getSocialLink } from '@util/getSocialLink'
import '@styles/Navbar.css'

const Navbar = () => {
  const { data, isLoading, isError } = useResumeData()

  const handleToggle = () => {
    const theme = window.localStorage.getItem('theme')
    window.localStorage.setItem('theme', theme === 'dark' ? 'white' : 'dark')
    document.body.classList.toggle('white-theme-variables')
  }

  if (isLoading) return <Spinner />
  if (isError) return <ErrorMessage />

  const { profile, socialNetworks } = data
  const youtubeLink = getSocialLink('YouTube', socialNetworks)
  const githubLink = getSocialLink('GitHub', socialNetworks)
  const linkedinLink = getSocialLink('LinkedIn', socialNetworks)

  return (
    <nav>
      <Link to='/' className='nav-brand'>
        {profile.firstName} <span className='txt-primary'>{profile.lastName}</span>
      </Link>

      <ul className='nav-menu'>
        <li className='nav-item'>
          <a href={youtubeLink} target='_blank' rel='noreferrer'>
            YouTube
          </a>
        </li>

        <li className='nav-item'>
          <a href={githubLink} target='_blank' rel='noreferrer'>
            GitHub
          </a>
        </li>

        <li className='nav-item'>
          <a href={linkedinLink} target='_blank' rel='noreferrer'>
            LinkedIn
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
