import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useResumeData } from '@hooks/useResumeData'
import useSectionScroll from '@hooks/useSectionScroll'
import { SECTION_LINKS } from '@util/constants'
import '@styles/Navbar.css'

interface NavbarProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  const { data } = useResumeData()
  const profile = data?.profile
  const location = useLocation()
  const { handleSectionClick } = useSectionScroll()

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('')

      return
    }
    const sections = SECTION_LINKS.map((link) => {
      return document.getElementById(link.id)
    }).filter((section): section is HTMLElement => {
      return section !== null
    })
    if (sections.length === 0) {
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-88px 0px -60% 0px' }
    )
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [location.pathname])

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    setIsMenuOpen(false)
    handleSectionClick(event, sectionId)
  }

  return (
    <nav className={isScrolled ? 'nav-scrolled' : ''}>
      <Link to='/' className='nav-brand'>
        {profile?.firstName || 'Francisco'}{' '}
        <span className='txt-accent'>{profile?.lastName || 'Veloz'}</span>
      </Link>

      <ul id='nav-menu' className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
        {SECTION_LINKS.map((link) => {
          return (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(event) => {
                  handleLinkClick(event, link.id)
                }}
              >
                {link.label}
              </a>
            </li>
          )
        })}
        <li className='nav-menu-cta'>
          <a className='btn btn-primary btn-sm' href={`mailto:${profile?.email || ''}`}>
            Hire me
          </a>
        </li>
      </ul>

      <div className='nav-actions'>
        <button
          type='button'
          className='icon-btn'
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} aria-hidden='true' />
        </button>
        <a className='btn btn-primary btn-sm nav-cta' href={`mailto:${profile?.email || ''}`}>
          Hire me
        </a>
        <button
          type='button'
          className='icon-btn nav-menu-toggle'
          onClick={() => {
            setIsMenuOpen((current) => {
              return !current
            })
          }}
          aria-expanded={isMenuOpen}
          aria-controls='nav-menu'
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`} aria-hidden='true' />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
