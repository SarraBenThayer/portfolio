import { Fragment } from 'react'
import { ArrowRight, Box } from 'lucide-react'
import { hue } from '../palette'

// Static map of a system's components, grouped by layer. It shows WHAT the
// system is made of; the numbered workflow shows HOW it runs.
export default function ArchitectureMap({ layers, note }) {
  return (
    <div>
      <div className="flex flex-col items-stretch gap-3 lg:flex-row">
        {layers.map((l, i) => {
          const c = hue(i)
          return (
            <Fragment key={l.layer}>
              <div className={`min-w-0 flex-1 rounded-2xl border-t-4 bg-bg/60 p-5 ${c.border}`}>
                <p className="font-display font-semibold">{l.layer}</p>
                <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:items-start">
                  {l.items.map((item) => (
                    <li key={item} className={`rounded-lg px-3 py-1.5 text-sm text-fg ${c.tint}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {i < layers.length - 1 && (
                <ArrowRight size={20} className="shrink-0 rotate-90 self-center text-faint lg:rotate-0" aria-hidden />
              )}
            </Fragment>
          )
        })}
      </div>

      {note && (
        <p className="mt-4 flex items-center gap-2.5 rounded-xl border border-line px-4 py-3 text-sm text-muted">
          <Box size={16} className="shrink-0 text-accent" />
          {note}
        </p>
      )}
    </div>
  )
}
