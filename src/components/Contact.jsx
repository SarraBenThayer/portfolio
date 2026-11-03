import { ChevronDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { usePreferences } from '../context/Preferences'
import { profile } from '../data/content'
import Section, { Reveal } from './Section'
import EmailMenu from './EmailMenu'
import ContactForm from './ContactForm'
import { tone } from '../palette'

const rowClass =
  'flex w-full items-center gap-4 rounded-xl border border-transparent p-2 text-left transition-colors hover:border-line hover:bg-bg/50'

function IconBox({ Icon, i = 0 }) {
  return (
    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-fg ${tone(i).soft}`}>
      <Icon size={18} />
    </span>
  )
}

export default function Contact({ index }) {
  const { t } = usePreferences()

  const links = [
    { Icon: Phone, label: profile.phone, href: profile.phoneHref },
    profile.linkedin && { Icon: Linkedin, label: 'LinkedIn', href: profile.linkedin, external: true },
    profile.github && { Icon: Github, label: 'GitHub', href: profile.github, external: true },
  ].filter(Boolean)

  return (
    <Section id="contact" index={index} eyebrow={t.nav.contact} title={t.ui.contactTitle} subtitle={t.contact.text}>
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <Reveal className="card relative p-6 sm:p-8">
          <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-ocean/25 blur-3xl" aria-hidden />
          <div className="relative space-y-2">
            <EmailMenu className={rowClass} ariaLabel={t.ui.copyEmail}>
              <IconBox Icon={Mail} />
              <span className="min-w-0 flex-1 truncate">{profile.email}</span>
              <ChevronDown size={16} className="shrink-0 text-faint" />
            </EmailMenu>

            {links.map(({ Icon, label, href, external }, i) => (
              <a key={label} href={href} className={rowClass} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                <IconBox Icon={Icon} i={i + 1} />
                <span className="truncate">{label}</span>
              </a>
            ))}

            <div className="flex items-center gap-4 p-2 text-muted">
              <IconBox Icon={MapPin} i={3} />
              <span>{t.hero.location}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="card p-6 sm:p-8">
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  )
}
