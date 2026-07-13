import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

export const usePrefersReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return window.matchMedia(QUERY).matches
  })

  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY)
    const handleChange = (event: MediaQueryListEvent): void => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQueryList.addEventListener('change', handleChange)

    return () => {
      mediaQueryList.removeEventListener('change', handleChange)
    }
  }, [])

  return prefersReducedMotion
}
