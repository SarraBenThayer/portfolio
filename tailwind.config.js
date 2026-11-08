/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: token('bg'),
        panel: token('panel'),
        line: token('line'),
        fg: token('fg'),
        muted: token('muted'),
        faint: token('faint'),
        accent: token('accent'),
        'accent-2': token('accent-2'),
        // Raw palette — decorative use (fills, rings, glows, gradients)
        plum: '#493657',
        orchid: '#CE7DA5',
        pistachio: '#BEE5BF',
        mint: '#DFF3E3',
        peach: '#FFD1BA',
        ink: '#2B1F35', // deeper plum: text on colored fills
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Sora"', '"Plus Jakarta Sans"', 'ui-sans-serif', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '90rem',
      },
    },
  },
  plugins: [],
}
