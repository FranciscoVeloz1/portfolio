import Spinner from '@components/Spinner/Spinner'
import ErrorMessage from '@components/ErrorMessage/ErrorMessage'
import useResumeData from '@hooks/useResumeData'
import { getSocialLink } from '@util/getSocialLink'
import '@styles/Footer.css'

const Footer = () => {
  const { data, isLoading, isError } = useResumeData()

  if (isLoading) return <Spinner />
  if (isError) return <ErrorMessage />

  const { profile, socialNetworks } = data
  const youtubeLink = getSocialLink('YouTube', socialNetworks)
  const githubLink = getSocialLink('GitHub', socialNetworks)
  const linkedinLink = getSocialLink('LinkedIn', socialNetworks)
  const instagramLink = getSocialLink('Instagram', socialNetworks)
  const phoneLink = getSocialLink('Phone', socialNetworks)

  return (
    <footer>
      <div className='container'>
        <div className='footer-contact'>
          <div className='footer-item'>
            <a href={`mailto:${profile.email}`} target='_blank' rel='noreferrer'>
              <i className='fa-solid fa-envelope' /> {profile.email}
            </a>

            <a href={youtubeLink} target='_blank' rel='noreferrer'>
              <i className='fa-brands fa-youtube' /> Francisco Veloz
            </a>
          </div>

          <div className='footer-item'>
            <a href={githubLink} target='_blank' rel='noreferrer'>
              <i className='fa-brands fa-github' /> FranciscoVeloz1
            </a>

            <a href={linkedinLink} target='_blank' rel='noreferrer'>
              <i className='fa-brands fa-linkedin' /> {profile.fullName}
            </a>
          </div>

          <div className='footer-item'>
            <a href={instagramLink} target='_blank' rel='noreferrer'>
              <i className='fa-brands fa-instagram' /> franciscoveloz1
            </a>

            <a href={`tel:${phoneLink}`} target='_blank' rel='noreferrer'>
              <i className='fa-solid fa-phone' /> {phoneLink}
            </a>
          </div>
        </div>

        <p className='footer-name'>&copy; {profile.fullName}</p>
      </div>
    </footer>
  )
}

export default Footer
