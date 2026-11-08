// One rose accent for every chip, icon and step marker. It follows the theme through
// the --accent token (deep orchid in light mode, orchid in dark mode).
// Class names are written out in full so Tailwind can detect them.
// `soft` = rose→red gradient fill with `text-bg`; `tint` = outlined wash meant to hold `text-fg`;
// `solid` = rose→red gradient fill, pair it with `text-bg`.
export const TONES = [
  {
    soft: 'bg-gradient-to-br from-accent to-accent-2 text-bg shadow-md shadow-accent-2/20',
    tint: 'border border-accent/50 bg-accent/15',
    solid: 'bg-gradient-to-r from-accent to-accent-2',
    border: 'border-accent',
    borderSoft: 'border-accent/50',
    hoverBorder: 'hover:border-accent',
  },
]

export const tone = (i) => TONES[((i % TONES.length) + TONES.length) % TONES.length]

// Vivid jewel tones for content items (figures, deliverables, cards, steps), so each
// item has its own color. Light mode uses darker shades for readable text.
// soft/chip = tinted fill with colored icon/text; num = solid fill with white text
// (step numbers); solid/bar = decorative fill (bars, dots).
// Interactive elements (buttons, nav) keep the rose TONES above.
export const SPECTRUM = [
  {
    text: 'text-rose-600 dark:text-rose-400',
    bar: 'bg-rose-500',
    chip: 'bg-rose-500/15 text-rose-600 dark:text-rose-300',
    pill: 'border-rose-500/40 bg-rose-500/10',
    dot: 'bg-rose-500',
    glow: 'hover:shadow-rose-500/20',
    num: 'bg-rose-600 text-white',
    // TONES-compatible keys, so components can swap tone() for hue()
    soft: 'bg-rose-500/15 text-rose-600 dark:text-rose-300',
    tint: 'border border-rose-500/40 bg-rose-500/10',
    solid: 'bg-rose-500',
    border: 'border-rose-500',
    borderSoft: 'border-rose-500/50',
    hoverBorder: 'hover:border-rose-500/60',
  },
  {
    text: 'text-violet-600 dark:text-violet-400',
    bar: 'bg-violet-500',
    chip: 'bg-violet-500/15 text-violet-600 dark:text-violet-300',
    pill: 'border-violet-500/40 bg-violet-500/10',
    dot: 'bg-violet-500',
    glow: 'hover:shadow-violet-500/20',
    num: 'bg-violet-600 text-white',
    // TONES-compatible keys, so components can swap tone() for hue()
    soft: 'bg-violet-500/15 text-violet-600 dark:text-violet-300',
    tint: 'border border-violet-500/40 bg-violet-500/10',
    solid: 'bg-violet-500',
    border: 'border-violet-500',
    borderSoft: 'border-violet-500/50',
    hoverBorder: 'hover:border-violet-500/60',
  },
  {
    text: 'text-blue-600 dark:text-blue-400',
    bar: 'bg-blue-500',
    chip: 'bg-blue-500/15 text-blue-600 dark:text-blue-300',
    pill: 'border-blue-500/40 bg-blue-500/10',
    dot: 'bg-blue-500',
    glow: 'hover:shadow-blue-500/20',
    num: 'bg-blue-600 text-white',
    // TONES-compatible keys, so components can swap tone() for hue()
    soft: 'bg-blue-500/15 text-blue-600 dark:text-blue-300',
    tint: 'border border-blue-500/40 bg-blue-500/10',
    solid: 'bg-blue-500',
    border: 'border-blue-500',
    borderSoft: 'border-blue-500/50',
    hoverBorder: 'hover:border-blue-500/60',
  },
  {
    text: 'text-cyan-700 dark:text-cyan-400',
    bar: 'bg-cyan-500',
    chip: 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300',
    pill: 'border-cyan-500/40 bg-cyan-500/10',
    dot: 'bg-cyan-500',
    glow: 'hover:shadow-cyan-500/20',
    num: 'bg-cyan-700 text-white',
    // TONES-compatible keys, so components can swap tone() for hue()
    soft: 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300',
    tint: 'border border-cyan-500/40 bg-cyan-500/10',
    solid: 'bg-cyan-500',
    border: 'border-cyan-500',
    borderSoft: 'border-cyan-500/50',
    hoverBorder: 'hover:border-cyan-500/60',
  },
]

export const hue = (i) => SPECTRUM[((i % SPECTRUM.length) + SPECTRUM.length) % SPECTRUM.length]
