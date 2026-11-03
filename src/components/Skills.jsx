import { Boxes, BrainCircuit, Code2, Container, Database, Server } from 'lucide-react'
import { usePreferences } from '../context/Preferences'
import Section, { Reveal } from './Section'
import { tone } from '../palette'

const ICONS = [BrainCircuit, Server, Database, Code2, Boxes, Container]

export default function Skills({ index }) {
  const { t } = usePreferences()
  return (
    <Section id="skills" index={index} eyebrow={t.nav.skills} title={t.ui.skillsTitle}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.skills.map((s, i) => {
          const Icon = ICONS[i % ICONS.length]
          const c = tone(i)
          return (
            <Reveal key={s.group} delay={i * 0.05} className="card relative overflow-hidden p-6">
              <span className={`absolute inset-x-0 top-0 h-1.5 ${c.solid}`} aria-hidden />
              <h3 className="flex items-center gap-3 font-display font-semibold">
                <span className={`flex h-9 w-9 items-center justify-center rounded-lg text-fg ${c.soft}`}>
                  <Icon size={18} />
                </span>
                {s.group}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-lg border border-line bg-bg/60 px-2.5 py-1 text-sm text-muted transition-colors hover:text-fg ${c.hoverBorder}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
