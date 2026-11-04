import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { usePreferences } from '../context/Preferences'
import { profile } from '../data/content'
import TechMarquee from './TechMarquee'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' } }),
}

function Avatar() {
  return (
    <div className="relative mx-auto h-36 w-36 sm:h-44 sm:w-44">
      {/* glow */}
      <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-orchid/50 via-peach/40 to-pistachio/50 blur-2xl" aria-hidden />
      {/* gradient ring */}
      <div className="relative h-full w-full rounded-full bg-gradient-to-br from-orchid via-peach to-pistachio p-[4px]">
        {profile.avatar ? (
          <img
            src={profile.avatar}
            alt={profile.name}
            className="h-full w-full rounded-full object-cover object-[50%_30%]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-orchid via-peach to-pistachio">
            <span className="font-display text-5xl font-bold text-bg sm:text-6xl">SB</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  const { t, lang } = usePreferences()
  const h = t.hero

  return (
    <section id="hero" className="relative overflow-hidden pb-16 pt-28 sm:pt-36">
      {/* background */}
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-peach/70 via-orchid/20 to-peach/70 dark:from-orchid/25 dark:via-plum/60 dark:to-orchid/25 blur-3xl"
        aria-hidden
      />
      <div className="pointer-events-none absolute left-[8%] top-1/3 h-56 w-56 rounded-full bg-orchid/15 blur-3xl dark:bg-orchid/20" aria-hidden />
      <div className="pointer-events-none absolute right-[6%] top-1/4 h-64 w-64 rounded-full bg-peach/50 blur-3xl dark:bg-orchid/35" aria-hidden />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-48 w-72 rounded-full bg-peach/50 blur-3xl dark:bg-plum" aria-hidden />

      <motion.div key={lang} initial="hidden" animate="show" className="container-page relative text-center">
        <motion.div variants={fadeUp} custom={0}>
          <Avatar />
        </motion.div>

        <motion.p
          variants={fadeUp}
          custom={1}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-orchid px-4 py-1.5 font-mono text-sm font-medium text-ink"
        >
          <span className="h-2 w-2 rounded-full bg-ink" />
          {h.greeting}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          custom={2}
          className="mx-auto mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl"
        >
          {h.headlineStart} <span className="text-gradient">{h.headlineHighlight}</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={3}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {h.intro}
        </motion.p>

        <motion.div variants={fadeUp} custom={4} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-bg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20"
          >
            {h.ctaContact}
          </a>
          <a
            href={profile.cv[lang]}
            download
            className="inline-flex items-center gap-2 rounded-full border-2 border-fg/80 px-7 py-[0.625rem] text-sm font-semibold text-fg transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <Download size={16} /> {h.ctaCv}
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative mt-20"
      >
        <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-faint">{h.experienceWith}</p>
        <TechMarquee />
      </motion.div>
    </section>
  )
}
