import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import type { MouseEvent } from 'react'

const useSectionScroll = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleSectionClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      event.preventDefault()

      const scrollToSection = () => {
        const section = document.getElementById(sectionId)
        if (!section) {
          return
        }
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
      }

      if (location.pathname !== '/') {
        navigate('/')
        window.setTimeout(scrollToSection, 80)

        return
      }

      scrollToSection()
    },
    [location.pathname, navigate]
  )

  return { handleSectionClick }
}

export default useSectionScroll
