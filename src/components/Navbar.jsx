import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { usePreferences } from '../context/Preferences'
import { tone } from '../palette'

// Keep in sync with the SECTIONS order in App.jsx
export const SECTIONS = ['about', 'education', 'experience', 'projects', 'skills', 'activities', 'contact']

// Returns the id of the section currently in view (the last one whose top
// has passed ~35% of the viewport height), or null while on the hero.
function useActiveSection(ids) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const line = window.innerHeight * 0.35
      let current = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      // at the very bottom, the last section is active even if short
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = ids[ids.length - 1]
      }
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [ids])

  return active
}

function ProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      style={{ scaleX }}
      className="absolute inset-x-0 top-0 h-[3px] origin-left bg-gradient-to-r from-coral via-mustard via-50% to-lagoon"
      aria-hidden
    />
  )
}

export default function Navbar() {
  const { t, lang, toggleLang, theme, toggleTheme } = usePreferences()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTIONS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-line bg-bg/80 backdrop-blur-lg' : 'border-b border-transparent'
      }`}
    >
      <ProgressBar />

      <nav className="container-page flex h-16 items-center justify-between gap-3">
        <a
          href="#hero"
          className="shrink-0 whitespace-nowrap font-display text-base font-bold tracking-tight md:text-sm lg:text-lg"
          onClick={() => setOpen(false)}
        >
          <span className="text-gradient">Sarra Ben Thayer</span>
        </a>

        <ul className="hidden items-center md:flex lg:gap-1">
          {SECTIONS.map((id, i) => {
            const isActive = active === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative isolate block whitespace-nowrap rounded-full px-2 py-1.5 text-xs transition-colors lg:px-3 lg:text-sm ${
                    isActive ? 'font-medium text-fg' : 'text-muted hover:text-fg'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className={`absolute inset-0 -z-10 rounded-full ${tone(i).soft}`}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {t.nav[id]}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="icon-btn w-auto px-3 font-mono text-xs"
            aria-label={lang === 'en' ? 'Passer en français' : 'Switch to English'}
          >
            <span className={lang === 'en' ? 'text-accent' : ''}>EN</span>
            <span className="mx-1 text-faint">/</span>
            <span className={lang === 'fr' ? 'text-accent' : ''}>FR</span>
          </button>
          <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="icon-btn md:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="container-page overflow-hidden md:hidden"
          >
            {SECTIONS.map((id, i) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 border-t border-line py-3 text-sm ${
                    active === id ? 'font-medium text-fg' : 'text-muted hover:text-fg'
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full transition-opacity ${tone(i).solid} ${
                      active === id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
