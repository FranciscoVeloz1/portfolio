import { useResumeData } from '@hooks/useResumeData'
import useSectionScroll from '@hooks/useSectionScroll'
import { orderSocialNetworks } from '@util/socialOrder'
import { getSocialIcon } from '@util/socialIcons'
import { SECTION_LINKS } from '@util/constants'
import '@styles/Footer.css'

const Footer = () => {
  const { data } = useResumeData()
  const profile = data?.profile
  const socialNetworks = data?.socialNetworks || []
  const { handleSectionClick } = useSectionScroll()

  const orderedSocialNetworks = orderSocialNetworks(socialNetworks)
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className='container'>
        <div className='footer-grid'>
          <div className='footer-brand'>
            <p className='footer-brand-name'>
              {profile?.firstName || 'Francisco'}{' '}
              <span className='footer-brand-accent'>{profile?.lastName || 'Veloz'}</span>
            </p>
            {profile?.headline
              ? <p className='footer-headline'>{profile.headline}</p>
              : null}
          </div>

          <nav className='footer-links' aria-label='Footer'>
            {SECTION_LINKS.map((link) => {
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(event) => {
                    handleSectionClick(event, link.id)
                  }}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          <div className='footer-social'>
            <div className='footer-social-icons'>
              {orderedSocialNetworks.map((network) => {
                return (
                  <a
                    key={network.platform}
                    className='icon-btn icon-btn-on-dark'
                    href={network.link}
                    target='_blank'
                    rel='noreferrer'
                    aria-label={network.platform}
                  >
                    <i className={getSocialIcon(network.platform)} aria-hidden='true' />
                  </a>
                )
              })}
            </div>
            {profile?.email
              ? (
                <a className='footer-email' href={`mailto:${profile.email}`}>
                  <i className='fa-solid fa-envelope' aria-hidden='true' /> {profile.email}
                </a>
                )
              : null}
          </div>
        </div>

        <div className='footer-bottom'>
          <p className='footer-copy'>
            &copy; {year} {profile?.fullName || 'Francisco González Veloz'} ·{' '}
            {profile?.location || 'Guadalajara, México'}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
