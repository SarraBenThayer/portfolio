import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { usePreferences } from '../context/Preferences'
import { profile } from '../data/content'
import { SECTIONS } from './Navbar'
import EmailMenu from './EmailMenu'
import { tone } from '../palette'

export function BackToTop() {
  const { t } = usePreferences()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label={t.ui.backToTop}
          title={t.ui.backToTop}
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orchid via-peach to-pistachio text-ink shadow-lg shadow-black/20 transition-transform hover:-translate-y-1"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default function Footer() {
  const { t } = usePreferences()

  const socials = [
    profile.linkedin && { href: profile.linkedin, label: 'LinkedIn', Icon: Linkedin, external: true },
    profile.github && { href: profile.github, label: 'GitHub', Icon: Github, external: true },
    { href: profile.phoneHref, label: profile.phone, Icon: Phone },
  ].filter(Boolean)

  return (
    <footer className="relative mt-10 overflow-x-clip border-t border-line">
      <div className="pointer-events-none absolute -bottom-24 left-1/4 h-56 w-96 rounded-full bg-peach/30 blur-3xl dark:bg-orchid/15" aria-hidden />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-56 w-80 rounded-full bg-orchid/15 blur-3xl dark:bg-plum" aria-hidden />

      <div className="container-page relative py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* identity */}
          <div>
            <a href="#hero" className="font-display text-2xl font-bold tracking-tight">
              <span className="text-gradient">Sarra Ben Thayer</span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{t.hero.title}</p>
            <p className="mt-1 text-sm text-faint">{t.hero.location}</p>
          </div>

          {/* quick links */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-faint">{t.ui.navigation}</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {SECTIONS.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-muted transition-colors hover:text-fg">
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-faint">{t.nav.contact}</p>
            <div className="mt-4 space-y-2 text-sm">
              <EmailMenu
                className="flex items-center gap-3 text-muted transition-colors hover:text-fg"
                ariaLabel={t.ui.copyEmail}
                direction="up"
              >
                <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${tone(0).soft}`}>
                  <Mail size={15} />
                </span>
                {profile.email}
              </EmailMenu>
              {socials.map(({ href, label, Icon, external }, i) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 text-muted transition-colors hover:text-fg"
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${tone(i + 1).soft}`}>
                    <Icon size={15} />
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-sm text-faint">
          <span>© {new Date().getFullYear()} Sarra Ben Thayer</span>
          <span>{t.footer}</span>
        </div>
      </div>
    </footer>
  )
}
