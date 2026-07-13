export type Theme = 'dark' | 'light'

export const THEME_STORAGE_KEY = 'theme:v1'

const themeCache = new Map<string, string | null>()

const readStorage = (key: string): string | null => {
  if (themeCache.has(key)) {
    return themeCache.get(key) ?? null
  }

  try {
    const value = localStorage.getItem(key)
    themeCache.set(key, value)

    return value
  } catch {
    return null
  }
}

const writeStorage = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value)
    themeCache.set(key, value)
  } catch {
    // localStorage unavailable (private browsing, quota, etc.)
  }
}

export const getStoredTheme = (): Theme => {
  const stored = readStorage(THEME_STORAGE_KEY)

  if (stored === 'light') {
    return 'light'
  }

  return 'dark'
}

export const applyTheme = (theme: Theme): void => {
  document.documentElement.dataset.theme = theme
}

export const setTheme = (theme: Theme): void => {
  applyTheme(theme)
  writeStorage(THEME_STORAGE_KEY, theme)
}

export const toggleTheme = (): Theme => {
  const nextTheme = getStoredTheme() === 'dark' ? 'light' : 'dark'
  setTheme(nextTheme)

  return nextTheme
}
