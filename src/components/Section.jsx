import { motion } from 'framer-motion'
import { tone } from '../palette'

// Shared section wrapper: numbered eyebrow label, title, scroll-reveal.
export default function Section({ id, index, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="border-t border-line/60 py-20 sm:py-28">
      <div className="container-page">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <p
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs uppercase tracking-widest ${
              tone(index - 1).soft
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full bg-ink`} />
            {String(index).padStart(2, '0')} / {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-3 text-muted">{subtitle}</p>}
        </motion.header>
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

export function Tag({ children }) {
  return (
    <span className="rounded-md border border-orchid/40 bg-orchid/10 px-2 dark:border-pistachio/60 dark:bg-pistachio/15 py-1 font-mono text-[11px] text-fg">
      {children}
    </span>
  )
}
