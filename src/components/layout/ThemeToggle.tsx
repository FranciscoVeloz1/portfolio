import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@context/ThemeContext'
import '@components/layout/ThemeToggle.css'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type='button'
      className='theme-toggle'
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? <Moon aria-hidden='true' /> : <Sun aria-hidden='true' />}
    </button>
  )
}
