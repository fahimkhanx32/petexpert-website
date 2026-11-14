import { createContext, useContext, useEffect, useState } from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

const STORAGE_KEY = 'petexpert_theme'
const ThemeContext = createContext(null)

const systemPrefersDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches

// First visit: follow the device setting. Later visits: use the visitor's saved choice.
const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'dark' || saved === 'light') return saved
  } catch {
    /* storage unavailable – fall back to the device setting */
  }
  return systemPrefersDark() ? 'dark' : 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  // Put or remove the "dark" class on <html> whenever the theme changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  // While the visitor has not chosen yet, keep following the device setting
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event) => {
      let saved = null
      try {
        saved = localStorage.getItem(STORAGE_KEY)
      } catch {
        /* ignore */
      }
      if (!saved) setTheme(event.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const chooseTheme = (next) => {
    setTheme(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }

  return <ThemeContext.Provider value={{ theme, chooseTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)

/* Light | Dark switch. Labels hide on very small screens so it always fits. */
export function ThemeToggle({ className = '' }) {
  const { theme, chooseTheme } = useTheme()

  const option = (value, Icon, label) => {
    const active = theme === value
    return (
      <button
        type="button"
        onClick={() => chooseTheme(value)}
        aria-pressed={active}
        aria-label={`${label} theme`}
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.8rem] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
          active ? 'bg-canvas text-ink shadow-xs dark:bg-surface dark:text-night' : 'text-white/85 hover:text-white'
        }`}
      >
        <Icon size={16} aria-hidden="true" />
        <span className="hidden sm:inline">{label}</span>
      </button>
    )
  }

  return (
    <div role="group" aria-label="Colour theme" className={`flex items-center rounded-full border border-white/35 bg-black/10 p-0.5 ${className}`}>
      {option('light', LuSun, 'Light')}
      {option('dark', LuMoon, 'Dark')}
    </div>
  )
}
