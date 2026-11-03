import { GraduationCap, Users } from 'lucide-react'
import { usePreferences } from '../context/Preferences'
import Section, { Reveal } from './Section'
import { tone } from '../palette'

function Item({ icon: Icon, title, subtitle, period, i = 0 }) {
  return (
    <li className="flex gap-4 border-b border-line pb-5 last:border-0 last:pb-0">
      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-fg ${tone(i).soft}`}>
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

export default function Education({ index }) {
  const { t } = usePreferences()
  return (
    <Section id="education" index={index} eyebrow={t.nav.education} title={t.ui.educationTitle}>
      <Reveal className="card p-6 sm:p-8">
        <ul className="space-y-5">
          {t.education.map((e, i) => (
            <Item key={e.degree} i={i} icon={GraduationCap} title={e.degree} subtitle={e.school} period={e.period} />
          ))}
        </ul>
      </Reveal>
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
