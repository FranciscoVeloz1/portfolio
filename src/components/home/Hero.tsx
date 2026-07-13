import { motion } from 'framer-motion'
import { useResumeData } from '@hooks/useResumeData'
import { Button } from '@components/ui/Button'
import { usePrefersReducedMotion } from '@hooks/usePrefersReducedMotion'
import '@components/home/Hero.css'

export const Hero = () => {
  const { data } = useResumeData()
  const profile = data.profile
  const prefersReducedMotion = usePrefersReducedMotion()

  const scrollToSection = (id: string): void => {
    const el = document.getElementById(id)
    if (!el) {
      return
    }

    el.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start'
    })
  }

  return (
    <section className='hero container' aria-label='Introduction'>
      <motion.div
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className='hero-eyebrow'>{profile.headline}</p>
        <h1 className='hero-title'>
          Hi, I&apos;m {profile.firstName} <span className='txt-primary'>{profile.lastName}</span>
        </h1>
        <p className='hero-summary'>{profile.summary}</p>

        <div className='hero-ctas'>
          <Button variant='primary' onClick={() => scrollToSection('projects')}>
            View projects
          </Button>
          <Button variant='secondary' onClick={() => scrollToSection('contact')}>
            Get in touch
          </Button>
        </div>
      </motion.div>

      <motion.img
        className='hero-photo'
        src={profile.profilePhoto}
        alt={profile.fullName}
        initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.94 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />
    </section>
  )
}
