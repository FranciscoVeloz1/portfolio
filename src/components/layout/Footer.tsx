import type { ComponentType } from 'react'
import { ArrowUp, Globe, Link as LinkIcon, Mail, Phone } from 'lucide-react'
import { useResumeData } from '@hooks/useResumeData'
import { orderSocialNetworks } from '@lib/socialOrder'
import { GithubIcon, LinkedinIcon, YoutubeIcon } from '@components/icons/BrandIcons'
import '@components/layout/Footer.css'

const SOCIAL_ICON_MAP: Record<string, ComponentType> = {
  YouTube: YoutubeIcon,
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Portfolio: Globe
}

const getSocialLabel = (platform: string, fullName: string, firstName: string, lastName: string): string => {
  if (platform === 'GitHub') {
    return 'FranciscoVeloz1'
  }

  if (platform === 'LinkedIn') {
    return fullName
  }

  if (platform === 'YouTube') {
    return `${firstName} ${lastName}`
  }

  return platform
}

export const Footer = () => {
  const { data } = useResumeData()
  const profile = data.profile
  const orderedSocialNetworks = orderSocialNetworks(data.socialNetworks)
  const youtube = orderedSocialNetworks.filter((network) => {
    return network.platform === 'YouTube'
  })
  const professional = orderSocialNetworks(data.socialNetworks, ['GitHub', 'LinkedIn'])

  const handleBackToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className='site-footer'>
      <div className='container'>
        <div className='footer-contact'>
          <div className='footer-item'>
            {profile.email ? (
              <a href={`mailto:${profile.email}`}>
                <Mail /> {profile.email}
              </a>
            ) : null}

            {youtube.map((network) => {
              const Icon = SOCIAL_ICON_MAP[network.platform] ?? LinkIcon

              return (
                <a href={network.link} key={network.platform} target='_blank' rel='noreferrer'>
                  <Icon /> {getSocialLabel(network.platform, profile.fullName, profile.firstName, profile.lastName)}
                </a>
              )
            })}
          </div>

          <div className='footer-item'>
            {professional.map((network) => {
              const Icon = SOCIAL_ICON_MAP[network.platform] ?? LinkIcon

              return (
                <a href={network.link} key={network.platform} target='_blank' rel='noreferrer'>
                  <Icon /> {getSocialLabel(network.platform, profile.fullName, profile.firstName, profile.lastName)}
                </a>
              )
            })}
          </div>

          <div className='footer-item'>
            {profile.phone ? (
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                <Phone /> {profile.phone}
              </a>
            ) : null}
          </div>
        </div>

        <div className='footer-bottom'>
          <p className='footer-name'>&copy; {new Date().getFullYear()} {profile.fullName}</p>
          <button type='button' className='back-to-top' onClick={handleBackToTop}>
            <ArrowUp /> Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
