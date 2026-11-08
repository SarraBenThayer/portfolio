import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Award, ExternalLink, GraduationCap, Hourglass, Maximize2, Users } from 'lucide-react'
import Lightbox from './Lightbox'
import { usePreferences } from '../context/Preferences'
import Section, { DrawBar, Reveal } from './Section'
import { hue } from '../palette'

function Item({ icon: Icon, title, subtitle, period, i = 0 }) {
  return (
    <li className="flex gap-4 border-b border-line pb-5 last:border-0 last:pb-0">
      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${hue(i).soft}`}>
        <Icon size={18} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h4 className="font-medium">{title}</h4>
          <span className="font-mono text-xs text-faint">{period}</span>
        </div>
        <p className="mt-1 text-sm text-muted">{subtitle}</p>
      </div>
    </li>
  )
}

// A certification still being prepared: no image, date or credential yet.
function CertificationInProgress({ cert, t, i }) {
  const c = hue(i)
  return (
    <li className={`relative flex flex-col gap-4 rounded-2xl border-2 border-dashed bg-panel/40 p-5 sm:flex-row sm:items-center sm:p-6 ${c.borderSoft}`}>
      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${c.soft}`}>
        <Hourglass size={20} />
      </span>
      <div className="min-w-0 flex-1">
        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs font-medium ${c.soft}`}>
          <span className={`h-1.5 w-1.5 animate-pulse rounded-full ${c.solid}`} aria-hidden />
          {t.ui.inProgress}
        </span>
        <h4 className="mt-3 font-display font-semibold leading-snug">{cert.title}</h4>
        <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
        <p className="mt-2 font-mono text-xs text-faint">{cert.detail}</p>
      </div>
    </li>
  )
}

// Certificate card: the thumbnail opens full size; "Verify" opens the issuer's page.
function Certification({ cert, t, i, onZoom }) {
  const c = hue(i)
  return (
    <li className={`card relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row ${c.glow}`}>
      <DrawBar className={c.solid} />
      <button
        type="button"
        onClick={() => onZoom({ src: cert.image, caption: `${cert.title} — ${cert.issuer}` })}
        className="group relative flex shrink-0 items-center justify-center bg-bg/60 p-4 pt-6 sm:w-72 sm:pt-4 lg:w-80"
        aria-label={`${cert.title} — ${t.ui.enlarge}`}
      >
        <img
          src={cert.image}
          alt={`${cert.title} — ${cert.issuer}`}
          width={cert.width}
          height={cert.height}
          loading="lazy"
          className="h-auto w-full rounded-lg shadow-md ring-1 ring-line transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <span className="absolute bottom-6 right-6 flex h-8 w-8 items-center justify-center rounded-lg bg-ink/70 text-white opacity-0 transition-opacity group-hover:opacity-100">
          <Maximize2 size={14} />
        </span>
      </button>
      <div className="flex min-w-0 flex-1 flex-col gap-3 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${c.soft}`}>
            <Award size={17} />
          </span>
          <div className="min-w-0">
            <h4 className="font-display font-semibold leading-snug">{cert.title}</h4>
            <p className="mt-0.5 text-sm text-muted">{cert.issuer}</p>
          </div>
        </div>
        <p className="font-mono text-xs text-faint">
          {cert.date} · {cert.detail}
        </p>
        <p className="font-mono text-[11px] text-faint">
          {t.ui.certId} <span className="select-all">{cert.id}</span>
        </p>
        <a
          href={cert.url}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent hover:underline"
        >
          {t.ui.verifyCert} <ExternalLink size={14} />
        </a>
      </div>
    </li>
  )
}

export default function Education({ index }) {
  const { t } = usePreferences()
  const [zoomed, setZoomed] = useState(null)
  return (
    <Section id="education" index={index} eyebrow={t.nav.education} title={t.ui.educationTitle}>
      <Reveal className="card p-6 sm:p-8">
        <ul className="space-y-5">
          {t.education.map((e, i) => (
            <Item key={e.degree} i={i} icon={GraduationCap} title={e.degree} subtitle={e.school} period={e.period} />
          ))}
        </ul>
      </Reveal>

      {t.certifications?.length > 0 && (
        <Reveal className="mt-10">
          <h3 className="font-display text-xl font-semibold">{t.ui.certifications}</h3>
          <ul className="mt-5 grid gap-5">
            {t.certifications.map((cert, i) =>
              cert.inProgress ? (
                <CertificationInProgress key={cert.id} cert={cert} t={t} i={i} />
              ) : (
                <Certification key={cert.id} cert={cert} t={t} i={i} onZoom={setZoomed} />
              ),
            )}
          </ul>
        </Reveal>
      )}

      <AnimatePresence>
        {zoomed && <Lightbox image={zoomed} closeLabel={t.ui.close} onClose={() => setZoomed(null)} />}
      </AnimatePresence>
    </Section>
  )
}

export function Activities({ index }) {
  const { t } = usePreferences()
  return (
    <Section id="activities" index={index} eyebrow={t.nav.activities} title={t.ui.activities}>
      <Reveal className="card p-6 sm:p-8">
        <ul className="space-y-5">
          {t.activities.map((a, i) => (
            <Item key={a.org} i={i + 2} icon={Users} title={a.role} subtitle={a.org} period={a.period} />
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
