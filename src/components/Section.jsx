import { motion } from 'framer-motion'
import { tone } from '../palette'
import { Briefcase, FileText, FolderGit2, GraduationCap, Layers, Mail, UserRound, Users } from 'lucide-react'
import SectionIcon from './SectionIcon'

// One animated line icon per section, shown beside the heading.
const ICONS = {
  about: UserRound,
  education: GraduationCap,
  experience: Briefcase,
  projects: FolderGit2,
  skills: Layers,
  activities: Users,
  resume: FileText,
  contact: Mail,
}

// Shared section wrapper: numbered eyebrow label, title, scroll-reveal.
export default function Section({ id, index, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="border-t border-line/60 py-20 sm:py-28">
      <div className="container-page">
        <div className="mb-12 flex items-center gap-4 sm:gap-6">
        {ICONS[id] && <SectionIcon icon={ICONS[id]} delay={(index % 3) * 0.6} />}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs uppercase tracking-widest ${
              tone(index - 1).soft
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-bg" />
            {String(index).padStart(2, '0')} / {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-3 text-muted">{subtitle}</p>}
        </motion.header>
        </div>
        {children}
      </div>
    </section>
  )
}

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Colored bar along a card's top edge that draws itself in when scrolled into view.
// The full-width outer span is what gets observed: a scaleX(0) element has no area,
// so the browser may never report it as visible.
export function DrawBar({ className = '', delay = 0 }) {
  return (
    <motion.span
      aria-hidden
      className="absolute inset-x-0 top-0 z-10 h-1.5"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.span
        className={`absolute inset-0 origin-left ${className}`}
        variants={{
          hidden: { scaleX: 0 },
          show: { scaleX: 1, transition: { duration: 0.8, delay, ease: 'easeOut' } },
        }}
      />
    </motion.span>
  )
}

export function Tag({ children }) {
  return (
    <span className="rounded-md border border-accent/30 bg-accent/10 px-2 py-1 font-mono text-[11px] text-fg">
      {children}
    </span>
  )
}
