// Palette tones cycled across the page so every color shows up.
// Class names are written out in full so Tailwind can detect them.
// `soft` boxes hold dark text/icons (readable in both themes).
export const TONES = [
  {
    soft: 'bg-ocean/40',
    tint: 'bg-ocean/15',
    solid: 'bg-ocean',
    border: 'border-ocean',
    borderSoft: 'border-ocean/60',
    hoverBorder: 'hover:border-ocean',
  },
  {
    soft: 'bg-mustard/45',
    tint: 'bg-mustard/15',
    solid: 'bg-mustard',
    border: 'border-mustard',
    borderSoft: 'border-mustard/70',
    hoverBorder: 'hover:border-mustard',
  },
  {
    soft: 'bg-lagoon/55',
    tint: 'bg-lagoon/20',
    solid: 'bg-lagoon',
    border: 'border-lagoon',
    borderSoft: 'border-lagoon/80',
    hoverBorder: 'hover:border-lagoon',
  },
  {
    soft: 'bg-coral/45',
    tint: 'bg-coral/15',
    solid: 'bg-coral',
    border: 'border-coral',
    borderSoft: 'border-coral/70',
    hoverBorder: 'hover:border-coral',
  },
]

export const tone = (i) => TONES[((i % TONES.length) + TONES.length) % TONES.length]
