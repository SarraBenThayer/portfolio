import { createContext, useContext, useEffect, useState } from 'react'
import { content } from '../data/content'

const PreferencesContext = createContext(null)

function readStored(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback
  } catch {
    return fallback
  }
}

function store(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* storage unavailable — preference just won't persist */
  }
}

export function PreferencesProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = readStored('lang', '')
    if (saved === 'en' || saved === 'fr') return saved
    return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en'
  })
  const [theme, setTheme] = useState(() => readStored('theme', 'dark'))

  useEffect(() => {
    document.documentElement.lang = lang
    store('lang', lang)
  }, [lang])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    store('theme', theme)
  }, [theme])

  const value = {
    lang,
    t: content[lang],
    toggleLang: () => setLang((l) => (l === 'en' ? 'fr' : 'en')),
    theme,
    toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
  }

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
}

export function usePreferences() {
  return useContext(PreferencesContext)
}
