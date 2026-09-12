import { useLayoutEffect, useState } from 'react'
import { useResumeData } from '@hooks/useResumeData'
import useSectionScroll from '@hooks/useSectionScroll'
import { orderSocialNetworks } from '@util/socialOrder'
import { getSocialIcon } from '@util/socialIcons'
import Stats from './Stats'
import '@styles/Home/Hero.css'

const HERO_SOCIAL_ORDER = ['GitHub', 'LinkedIn', 'YouTube', 'Portfolio']

const Hero = () => {
  const { data } = useResumeData()
  const profile = data?.profile
  const socialNetworks = data?.socialNetworks || []
  const { handleSectionClick } = useSectionScroll()
  const [entered, setEntered] = useState(false)

  useLayoutEffect(() => {
    setEntered(true)
  }, [])

  if (!profile) {
    return null
  }

  const orderedSocialNetworks = orderSocialNetworks(socialNetworks, HERO_SOCIAL_ORDER)

  return (
    <section className={`hero ${entered ? 'hero-enter' : ''}`} aria-labelledby='hero-title'>
      <div className='hero-content'>
        <img className='hero-avatar' src={profile.profilePhoto} alt={profile.fullName} />

        <div className='hero-name-block'>
          <p className='hero-greeting'>Hi, I&apos;m</p>
          <h1 id='hero-title' className='hero-name'>
            {profile.firstName} <span className='txt-accent'>{profile.lastName}</span>
          </h1>
          <p className='hero-headline'>{profile.headline}</p>
          <p className='hero-summary'>{profile.summary}</p>
        </div>

        <div className='hero-actions'>
          <div className='hero-cta-row'>
            <a
              className='btn btn-primary btn-md'
              href='#projects'
              onClick={(event) => {
                handleSectionClick(event, 'projects')
              }}
            >
              View my work
            </a>
            <a
              className='btn btn-outline btn-md'
              href='#contact'
              onClick={(event) => {
                handleSectionClick(event, 'contact')
              }}
            >
              Get in touch
            </a>
          </div>

          <div className='hero-social-row'>
            {orderedSocialNetworks.map((network) => {
              return (
                <a
                  key={network.platform}
                  className='icon-btn'
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
        </div>
      </div>

      <Stats />
    </section>
  )
}

export default Hero
