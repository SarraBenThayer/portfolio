import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Copy, Send } from 'lucide-react'
import { usePreferences } from '../context/Preferences'
import { profile } from '../data/content'

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // Fallback for browsers / contexts without the Clipboard API
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    const ok = document.execCommand('copy')
    ta.remove()
    return ok
  }
}

// Wraps a trigger; clicking it opens a menu: copy address / open mail app.
export default function EmailMenu({ children, className = '', align = 'left', direction = 'down', ariaLabel }) {
  const { t } = usePreferences()
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const handleCopy = async () => {
    if (await copyText(profile.email)) {
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
        setOpen(false)
      }, 1400)
    }
  }

  const item =
    'flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-muted transition-colors hover:bg-bg hover:text-fg'

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={className}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={ariaLabel}
        title={ariaLabel}
      >
        {children}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className={`absolute z-40 w-60 rounded-xl border border-line bg-panel p-1.5 shadow-xl shadow-black/20 ${
              align === 'right' ? 'right-0' : 'left-0'
            } ${direction === 'up' ? 'bottom-full mb-2' : 'top-full mt-2'}`}
          >
            <p className="truncate px-3 pb-1.5 pt-1 font-mono text-xs text-faint">{profile.email}</p>
            <button type="button" role="menuitem" onClick={handleCopy} className={item}>
              {copied ? <Check size={15} className="text-accent" /> : <Copy size={15} />}
              <span className={copied ? 'text-accent' : ''}>{copied ? t.ui.copied : t.ui.copyEmail}</span>
            </button>
            <a
              role="menuitem"
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className={item}
            >
              <Send size={15} /> {t.ui.openMail}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
