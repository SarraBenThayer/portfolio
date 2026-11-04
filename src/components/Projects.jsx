import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  Check,
  ExternalLink,
  FileSearch,
  Github,
  Maximize2,
  Radio,
  Scale,
  TrendingUp,
  X,
} from 'lucide-react'
import { usePreferences } from '../context/Preferences'
import Section, { Reveal, Tag } from './Section'
import ArchitectureMap from './ArchitectureMap'
import { tone } from '../palette'

// Header icon per project id
const PROJECT_ICONS = {
  'social-media-analytics': { main: Radio },
  'sales-streaming': { main: Activity },
  'mlops-pipeline': { main: BrainCircuit },
  'ats-resume-filtering': { main: FileSearch },
  'legal-document-classification': { main: Scale },
}

const MAX_CARD_TAGS = 4

function Label({ children }) {
  return <p className="font-mono text-xs uppercase tracking-widest text-accent">{children}</p>
}

/* ---------- compact card in the grid ---------- */
function ProjectCard({ project, index, t, onOpen }) {
  const icons = PROJECT_ICONS[project.id] || {}
  const Main = icons.main || Activity
  const c = tone(index)
  const extra = project.tags.length - MAX_CARD_TAGS

  return (
    <Reveal delay={(index % 2) * 0.08} className="h-full">
      <article className="card group relative flex h-full flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 sm:p-8">
        <span className={`absolute inset-x-0 top-0 h-1.5 ${c.solid}`} aria-hidden />

        <div className="flex items-center justify-between">
          <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.soft}`}>
            <Main size={22} />
          </span>
          <span className={`rounded-full px-3 py-1 font-mono text-xs text-fg ${c.tint}`}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="mt-6 font-display text-xl font-bold leading-snug tracking-tight sm:text-2xl">{project.title}</h3>
        {project.subtitle && <p className="mt-2 font-mono text-sm text-faint">{project.subtitle}</p>}
        <p className="mt-3 leading-relaxed text-muted">{project.short || project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, MAX_CARD_TAGS).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
          {extra > 0 && <Tag>+{extra}</Tag>}
        </div>

        <div className="mt-auto pt-7">
          <button
            onClick={() => onOpen(index)}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:gap-3 ${c.soft}`}
          >
            {t.ui.seeMore}
            <ArrowRight size={16} />
          </button>
        </div>
      </article>
    </Reveal>
  )
}

/* ---------- full-screen view of a diagram (scrollable, near native size) ---------- */
function Lightbox({ image, t, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[70] flex flex-col bg-black/85 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          aria-label={t.ui.close}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <X size={18} />
        </button>
      </div>
      <div className="flex-1 overflow-auto px-4 pb-6">
        <img
          src={image.src}
          alt={image.alt}
          onClick={(e) => e.stopPropagation()}
          className="mx-auto w-[1800px] min-w-[1800px] max-w-none rounded-xl bg-white xl:w-full xl:min-w-0"
        />
      </div>
    </motion.div>
  )
}

/* ---------- detail window ---------- */
function ProjectModal({ project, index, t, onClose }) {
  const closeRef = useRef(null)
  const [zoomed, setZoomed] = useState(false)
  const zoomedRef = useRef(false)
  zoomedRef.current = zoomed
  const icons = PROJECT_ICONS[project.id] || {}
  const Main = icons.main || Activity
  const c = tone(index)

  // Esc closes the enlarged diagram first, then the window; lock page scroll
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      if (zoomedRef.current) setZoomed(false)
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
        aria-labelledby={`project-${project.id}-title`}
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
          {/* header */}
          <div className="flex items-center gap-4 pr-12">
            <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${c.soft}`}>
              <Main size={24} />
            </span>
            <span className={`rounded-full px-3 py-1 font-mono text-xs text-fg ${c.tint}`}>
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <h3
            id={`project-${project.id}-title`}
            className="mt-7 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
          >
            {project.title}
          </h3>
          {project.subtitle && <p className="mt-2 font-mono text-sm text-faint">{project.subtitle}</p>}

          {/* overview */}
          <section className="mt-12">
            <Label>{t.ui.overview}</Label>
            <p className="mt-4 max-w-5xl text-lg leading-loose text-muted">{project.summary}</p>
          </section>

          {/* static architecture diagram (image) */}
          {project.diagram && (
            <section className="mt-14">
              <Label>{t.ui.diagram}</Label>
              <button
                onClick={() => setZoomed(true)}
                className="group relative mt-6 block w-full overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-xl hover:shadow-black/10"
              >
                <img src={project.diagram.src} alt={project.diagram.alt} loading="lazy" className="w-full" />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white opacity-90 transition-opacity group-hover:opacity-100">
                  <Maximize2 size={13} /> {t.ui.enlarge}
                </span>
              </button>
            </section>
          )}

          {/* component map: what the system is made of */}
          {project.architecture && (
            <section className="mt-14">
              <Label>{t.ui.architecture}</Label>
              <div className="mt-6">
                <ArchitectureMap layers={project.architecture} note={project.architectureNote} />
              </div>
            </section>
          )}

          {/* ordered workflow — numbered steps on a vertical line */}
          {project.workflow && (
            <section className="mt-14">
              <Label>{t.ui.workflow}</Label>
              <ol className="relative mt-8 space-y-6 pl-14">
                <span className="absolute bottom-5 left-[1.15rem] top-5 w-0.5 bg-line" aria-hidden />
                {project.workflow.map((step, i) => (
                  <li key={step.title} className="relative">
                    <span
                      className={`absolute -left-14 top-0 flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold text-ink ring-4 ring-panel ${
                        tone(i).solid
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div className="rounded-2xl border border-line bg-bg/50 px-5 py-4">
                      <h4 className="font-display font-semibold">{step.title}</h4>
                      <p className="mt-1.5 leading-relaxed text-muted">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* highlights — one small card each */}
          {project.points && (
            <section className="mt-14">
              <Label>{t.ui.highlights}</Label>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.points.map((p) => (
                  <li key={p} className="flex gap-4 rounded-2xl border border-line bg-bg/50 p-5 leading-relaxed text-muted">
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${c.soft}`}>
                      <Check size={15} />
                    </span>
                    <span className="pt-0.5">{p}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* business value */}
          {project.impact && (
            <section className="mt-14">
              <Label>{t.ui.impact}</Label>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.impact.map((v) => (
                  <li key={v} className={`flex gap-4 rounded-2xl p-5 leading-relaxed text-fg ${c.tint}`}>
                    <TrendingUp size={18} className="mt-0.5 shrink-0" />
                    {v}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* stack + links */}
          <div className="mt-14 flex flex-wrap items-end justify-between gap-6 border-t border-line pt-10">
            <div>
              <Label>{t.ui.stack}</Label>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
            {(project.github || project.demo) && (
              <div className="flex gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost">
                    <Github size={16} /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary">
                    <ExternalLink size={16} /> Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {zoomed && project.diagram && <Lightbox image={project.diagram} t={t} onClose={() => setZoomed(false)} />}
      </AnimatePresence>
    </motion.div>
  )
}

// Display order of the academic projects (ids not listed go last)
const ORDER = ['mlops-pipeline', 'ats-resume-filtering', 'social-media-analytics', 'sales-streaming']
const rank = (id) => (ORDER.includes(id) ? ORDER.indexOf(id) : ORDER.length)

export default function Projects({ index }) {
  const { t } = usePreferences()
  const [openIndex, setOpenIndex] = useState(null)
  const projects = [...t.projects].sort((a, b) => rank(a.id) - rank(b.id))
  const open = openIndex !== null ? projects[openIndex] : null

  return (
    <Section
      id="projects"
      index={index}
      eyebrow={t.nav.projects}
      title={t.ui.projectsTitle}
      subtitle={t.ui.projectsSub}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} t={t} onOpen={setOpenIndex} />
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <ProjectModal
            key={open.id}
            project={open}
            index={openIndex}
            t={t}
            onClose={() => setOpenIndex(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  )
}
