import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FileSearch, Layers, Network, RefreshCw, ShieldCheck } from 'lucide-react'
import { hue } from '../palette'

const DEFAULT_ICONS = [FileSearch, Network, ShieldCheck, Layers]
const STEP_MS = 1400

// Animated pipeline visual: each stage lights up in turn, like a running job.
export default function PipelineCard({ data, icons = DEFAULT_ICONS }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % data.steps.length), STEP_MS)
    return () => clearInterval(id)
  }, [data.steps.length])

  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-bg/50 p-5 sm:p-6">
      {/* window header */}
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-2" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/30" />
        </div>
        <span className="truncate font-mono text-xs text-faint">{data.title}</span>
        <span className="flex shrink-0 items-center gap-1.5 font-mono text-xs text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
          </span>
          {data.status}
        </span>
      </div>

      <ol className="relative space-y-3">
        {/* vertical connector */}
        <span className="absolute bottom-6 left-[1.4rem] top-6 w-px bg-line" aria-hidden />
        <motion.span
          className="absolute left-[1.4rem] w-0.5 -translate-x-[0.5px] bg-gradient-to-b from-accent/20 via-accent/60 to-accent"
          style={{ top: '1.5rem' }}
          animate={{ height: `${(active / (data.steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          aria-hidden
        />

        {data.steps.map((step, i) => {
          const Icon = icons[i % icons.length]
          const isActive = i === active
          const isDone = i < active
          const c = hue(i)
          return (
            <li
              key={step.name}
              className={`relative flex items-center gap-4 rounded-xl border px-3 py-3 transition-all duration-500 ${
                isActive ? `${c.borderSoft} ${c.tint}` : 'border-transparent'
              }`}
            >
              {/* opaque base so the connector line doesn't show through the tinted box */}
              <span className="relative z-10 h-10 w-10 shrink-0 rounded-lg bg-panel">
                <span
                  className={`flex h-full w-full items-center justify-center rounded-lg border transition-colors duration-500 ${
                    isActive || isDone ? `${c.border} ${c.soft}` : 'border-line text-faint'
                  }`}
                >
                  <Icon size={18} />
                </span>
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-sm font-semibold">{step.name}</p>
                {step.detail && <p className="truncate font-mono text-xs text-faint">{step.detail}</p>}
              </div>
              <span
                className={`font-mono text-[10px] transition-opacity duration-500 ${
                  isActive ? 'text-accent opacity-100' : isDone ? 'text-faint opacity-100' : 'opacity-0'
                }`}
              >
                {isActive ? 'running' : 'done'}
              </span>
            </li>
          )
        })}
      </ol>

      {data.footer && (
        <p className="mt-4 flex items-center gap-2 border-t border-line pt-4 font-mono text-[11px] text-faint">
          <RefreshCw size={12} className="shrink-0 text-accent" /> {data.footer}
        </p>
      )}
    </div>
  )
}
