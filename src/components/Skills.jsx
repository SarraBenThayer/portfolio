import { Boxes, BrainCircuit, Code2, Container, Database, Server } from 'lucide-react'
import { usePreferences } from '../context/Preferences'
import Section, { DrawBar, Reveal } from './Section'
import { hue } from '../palette'

const ICONS = [BrainCircuit, Server, Database, Code2, Boxes, Container]

export default function Skills({ index }) {
  const { t } = usePreferences()
  return (
    <Section id="skills" index={index} eyebrow={t.nav.skills} title={t.ui.skillsTitle}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.skills.map((s, i) => {
          const Icon = ICONS[i % ICONS.length]
          const c = hue(i)
          return (
            <Reveal key={s.group} delay={i * 0.05} className={`card group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${c.glow}`}>
              <DrawBar className={c.solid} delay={0.15 + i * 0.08} />
              <h3 className="flex items-center gap-3 font-display font-semibold">
                <span className={`flex h-9 w-9 items-center justify-center rounded-lg transition-transform duration-300 group-hover:rotate-6 ${c.soft}`}>
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
