import { useResumeData } from '@hooks/useResumeData'
import '@styles/Footer.css'

const SOCIAL_ICON_MAP = {
  YouTube: 'fa-brands fa-youtube',
  GitHub: 'fa-brands fa-github',
  LinkedIn: 'fa-brands fa-linkedin',
  Portfolio: 'fa-solid fa-globe'
}

const Footer = () => {
  const { data } = useResumeData()
  const profile = data?.profile
  const socialNetworks = data?.socialNetworks || []

  const getSocialIcon = (platform) => {
    if (SOCIAL_ICON_MAP[platform]) {
      return SOCIAL_ICON_MAP[platform]
    }

    return 'fa-solid fa-link'
  }

  const getSocialLabel = (platform) => {
    if (platform === 'GitHub') {
      return 'FranciscoVeloz1'
    }

    if (platform === 'LinkedIn') {
      return profile?.fullName || 'Francisco González Veloz'
    }

    if (platform === 'YouTube') {
      return `${profile?.firstName || 'Francisco'} ${profile?.lastName || 'Veloz'}`
    }

    return platform
  }

  const primarySocialNetworks = socialNetworks.filter((network) => {
    return ['YouTube', 'GitHub', 'LinkedIn'].includes(network.platform)
  })

  return (
    <footer>
      <div className='container'>
        <div className='footer-contact'>
          <div className='footer-item'>
            {profile?.email ? (
              <a href={`mailto:${profile.email}`} target='_blank' rel='noreferrer'>
                <i className='fa-solid fa-envelope' /> {profile.email}
              </a>
            ) : null}

            {primarySocialNetworks
              .filter((network) => {
                return network.platform === 'YouTube'
              })
              .map((network) => {
                return (
                  <a href={network.link} key={network.platform} target='_blank' rel='noreferrer'>
                    <i className={getSocialIcon(network.platform)} /> {getSocialLabel(network.platform)}
                  </a>
                )
              })}
          </div>

          <div className='footer-item'>
            {primarySocialNetworks
              .filter((network) => {
                return ['GitHub', 'LinkedIn'].includes(network.platform)
              })
              .map((network) => {
                return (
                  <a href={network.link} key={network.platform} target='_blank' rel='noreferrer'>
                    <i className={getSocialIcon(network.platform)} /> {getSocialLabel(network.platform)}
                  </a>
                )
              })}
          </div>

          <div className='footer-item'>
            {profile?.phone ? (
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} target='_blank' rel='noreferrer'>
                <i className='fa-solid fa-phone' /> {profile.phone}
              </a>
            ) : null}
          </div>
        </div>

        <p className='footer-name'>&copy; {profile?.fullName || 'Francisco González Veloz'}</p>
      </div>
    </footer>
  )
}

export default Footer
