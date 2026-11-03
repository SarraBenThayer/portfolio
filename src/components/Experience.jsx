import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  Briefcase,
  BrainCircuit,
  Database,
  Lock,
  Maximize2,
  MessageSquare,
  Server,
  Sparkles,
  X,
} from 'lucide-react'
import { usePreferences } from '../context/Preferences'
import Section, { Reveal, Tag } from './Section'
import PipelineCard from './PipelineCard'
import Lightbox from './Lightbox'
import { tone } from '../palette'

// Screenshots of an agent's output, shown under its description
function StepImages({ images, onZoom, enlargeLabel }) {
  return (
    <div className="mt-6 space-y-8">
      {images.map((img) => (
        <figure key={img.src}>
          <button
            onClick={() => onZoom(img)}
            className="group relative block w-full overflow-hidden rounded-xl border border-line bg-white transition-shadow hover:shadow-lg hover:shadow-black/10"
          >
            <img src={img.src} alt={img.caption} loading="lazy" className="w-full" />
            <span className="absolute bottom-2 right-2 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
              <Maximize2 size={12} /> {enlargeLabel}
            </span>
          </button>
          {img.caption && <figcaption className="mt-3 text-sm leading-relaxed text-faint">{img.caption}</figcaption>}
        </figure>
      ))}
    </div>
  )
}

// Icons for each job's animated flow (falls back to PipelineCard defaults)
const FLOW_ICONS = {
  stb: [MessageSquare, Server, BrainCircuit, Database],
}

// "Confidential code" badge: explains why there is no GitHub link
function ConfidentialBadge({ t }) {
  return (
    <span
      title={t.ui.confidentialHint}
      className="inline-flex items-center gap-1.5 rounded-full border border-coral/60 bg-coral/15 px-3 py-1.5 font-mono text-xs text-fg"
    >
      <Lock size={12} />
      {t.ui.confidential}
    </span>
  )
}

function Label({ children }) {
  return <p className="font-mono text-xs uppercase tracking-widest text-accent">{children}</p>
}

function Metrics({ metrics }) {
  return (
    <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {metrics.map((m, i) => (
        <div key={m.label} className={`flex flex-col rounded-2xl border-t-4 bg-bg/60 px-5 py-5 ${tone(i).border}`}>
          <dd className="font-display text-3xl font-bold text-gradient sm:text-4xl">{m.value}</dd>
          <dt className="mt-2 text-sm leading-snug text-muted">{m.label}</dt>
        </div>
      ))}
    </dl>
  )
}

/* ---------- details window (architecture + step-by-step) ---------- */
function ExperienceModal({ job, index, t, onClose }) {
  const closeRef = useRef(null)
  const [zoomed, setZoomed] = useState(null)
  const zoomedRef = useRef(null)
  zoomedRef.current = zoomed
  const c = tone(index)

  // Esc closes the enlarged image first, then the window
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      if (zoomedRef.current) setZoomed(null)
      else onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`job-${job.id}-title`}
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative max-h-[94vh] w-full max-w-[min(90rem,96vw)] overflow-y-auto rounded-3xl border border-line bg-panel shadow-2xl"
      >
        <span className={`sticky top-0 z-10 block h-1.5 w-full ${c.solid}`} aria-hidden />
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label={t.ui.close}
          className="icon-btn absolute right-5 top-6 z-20 sm:right-8 sm:top-9"
        >
          <X size={18} />
        </button>

        <div className="px-6 pb-10 pt-8 sm:px-14 sm:pb-14 sm:pt-12 xl:px-20">
          <p className="pr-12 font-mono text-xs uppercase tracking-widest text-faint">
            {job.company} · {job.type} · {job.period}
          </p>
          <h3 id={`job-${job.id}-title`} className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {job.role}
          </h3>
          {job.confidential && (
            <p className="mt-5 flex flex-wrap items-center gap-3 text-sm text-muted">
              <ConfidentialBadge t={t} />
              {t.ui.confidentialHint}
            </p>
          )}

          <section className="mt-12">
            <Label>{t.ui.overview}</Label>
            <p className="mt-4 max-w-5xl text-lg leading-loose text-muted">{job.summary}</p>
          </section>

          {job.flow && (
            <section className="mt-14">
              <Label>{t.ui.architecture}</Label>
              <div className="mx-auto mt-6 max-w-2xl">
                <PipelineCard data={job.flow} {...(FLOW_ICONS[job.id] ? { icons: FLOW_ICONS[job.id] } : {})} />
              </div>
            </section>
          )}

          <section className="mt-14">
            <Label>{t.ui.inDetail}</Label>
            <ol className="relative mt-8 space-y-6 pl-14">
              <span className="absolute bottom-5 left-[1.15rem] top-5 w-0.5 bg-line" aria-hidden />
              {job.points.map((p, i) => (
                <li key={p.label} className="relative">
                  <span
                    className={`absolute -left-14 top-0 flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold text-fg ring-4 ring-panel ${
                      tone(i).solid
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div className="rounded-2xl border border-line bg-bg/50 px-5 py-4">
                    <h4 className="font-display font-semibold">{p.label}</h4>
                    <p className="mt-1.5 leading-relaxed text-muted">{p.text}</p>
                    {p.images && <StepImages images={p.images} onZoom={setZoomed} enlargeLabel={t.ui.enlarge} />}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <div className="mt-14 border-t border-line pt-10">
            <Label>{t.ui.stack}</Label>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {zoomed && <Lightbox image={zoomed} closeLabel={t.ui.close} onClose={() => setZoomed(null)} />}
      </AnimatePresence>
    </motion.div>
  )
}

/* ---------- results card ---------- */
function ExperienceCard({ job, index, t, onOpen }) {
  const c = tone(index)
  return (
    <Reveal className="card relative overflow-hidden px-6 py-9 sm:px-12 sm:py-12">
      <span className={`absolute inset-x-0 top-0 h-1.5 ${c.solid}`} aria-hidden />

      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-faint">
            <span className="text-fg">{job.company}</span> · {job.type}
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">{job.role}</h3>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {job.confidential && <ConfidentialBadge t={t} />}
          <span className="rounded-full border border-line px-4 py-1.5 font-mono text-xs text-faint">{job.period}</span>
        </div>
      </div>

      {/* headline result */}
      {job.tagline && (
        <p className="mt-10 max-w-4xl font-display text-2xl font-bold leading-snug tracking-tight text-gradient sm:text-4xl">
          {job.tagline}
        </p>
      )}

      {/* key figures */}
      {job.metrics && (
        <div className="mt-10">
          <Metrics metrics={job.metrics} />
        </div>
      )}

      {/* delivered + strengths */}
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        {job.delivered && (
          <div>
            <Label>{t.ui.delivered}</Label>
            <ul className="mt-6 space-y-5">
              {job.delivered.map((d, i) => (
                <li key={d} className="flex gap-4">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-fg ${tone(i).soft}`}
                  >
                    <Sparkles size={15} />
                  </span>
                  <p className="pt-1 leading-relaxed text-fg/90">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col">
          {job.strengths && (
            <>
              <Label>{t.ui.strengths}</Label>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {job.strengths.map((s, i) => (
                  <span key={s} className={`rounded-full px-4 py-2 text-sm font-medium text-fg ${tone(i).soft}`}>
                    {s}
                  </span>
                ))}
              </div>
            </>
          )}

          <button
            onClick={() => onOpen(index)}
            className={`mt-10 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-fg transition-all hover:gap-3 lg:mt-auto ${c.soft}`}
          >
            {t.ui.seeDetails}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </Reveal>
  )
}

export default function Experience({ index }) {
  const { t } = usePreferences()
  const [openIndex, setOpenIndex] = useState(null)
  const open = openIndex !== null ? t.experience[openIndex] : null

  return (
    <Section id="experience" index={index} eyebrow={t.nav.experience} title={t.ui.experienceTitle}>
      <ol className="relative space-y-14 border-l border-line pl-6 sm:pl-12">
        {t.experience.map((job, i) => (
          <li key={job.id} className="relative">
            <span
              className={`absolute -left-[2.05rem] top-9 flex h-8 w-8 items-center justify-center rounded-full text-fg ring-4 ring-bg sm:-left-[4.05rem] ${
                tone(i).solid
              }`}
            >
              <Briefcase size={14} />
            </span>
            <ExperienceCard job={job} index={i} t={t} onOpen={setOpenIndex} />
          </li>
        ))}
      </ol>

      <AnimatePresence>
        {open && (
          <ExperienceModal key={open.id} job={open} index={openIndex} t={t} onClose={() => setOpenIndex(null)} />
        )}
      </AnimatePresence>
    </Section>
  )
}
