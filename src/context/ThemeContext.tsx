import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { getStoredTheme, setTheme as persistTheme, type Theme } from '@lib/theme'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    return getStoredTheme()
  })

  const value = useMemo<ThemeContextValue>(() => {
    const toggleTheme = (): void => {
      setThemeState((current) => {
        const nextTheme: Theme = current === 'dark' ? 'light' : 'dark'
        persistTheme(nextTheme)

        return nextTheme
      })
    }

    return { theme, toggleTheme }
  }, [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }

  return context
}
