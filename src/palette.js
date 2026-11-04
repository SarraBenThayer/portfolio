// Palette tones cycled across the page so every color shows up.
// Class names are written out in full so Tailwind can detect them.
// `soft` is an opaque fill that sets its own dark text (readable in both themes);
// `tint` is an outlined wash meant to hold `text-fg`.
export const TONES = [
  {
    soft: 'bg-orchid text-ink',
    tint: 'border border-orchid/70 bg-orchid/10',
    solid: 'bg-orchid',
    border: 'border-orchid',
    borderSoft: 'border-orchid/70',
    hoverBorder: 'hover:border-orchid',
  },
  {
    soft: 'bg-pistachio text-ink',
    tint: 'border border-pistachio/70 bg-pistachio/10',
    solid: 'bg-pistachio',
    border: 'border-pistachio',
    borderSoft: 'border-pistachio/80',
    hoverBorder: 'hover:border-pistachio',
  },
  {
    soft: 'bg-peach text-ink',
    tint: 'border border-peach/70 bg-peach/10',
    solid: 'bg-peach',
    border: 'border-peach',
    borderSoft: 'border-peach/80',
    hoverBorder: 'hover:border-peach',
  },
]

export const tone = (i) => TONES[((i % TONES.length) + TONES.length) % TONES.length]
