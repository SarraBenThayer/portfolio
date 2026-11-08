import { Languages, MapPin } from 'lucide-react'
import { usePreferences } from '../context/Preferences'
import { profile } from '../data/content'
import Section, { Reveal } from './Section'
import { hue } from '../palette'

function Photo() {
  return (
    <div className="relative mx-auto w-64 sm:w-72">
      {/* offset outline frame for depth */}
      <div
        className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border-2 border-orchid/70"
        aria-hidden
      />
      {/* portrait card: the cut-out stands on the bottom edge */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-gradient-to-b from-orchid via-orchid/80 to-accent-2/80">
        <div
          className="absolute left-1/2 top-1/4 h-48 w-48 -translate-x-1/2 rounded-full bg-accent-2/30 blur-3xl dark:bg-accent-2/35"
          aria-hidden
        />
        <img
          src={profile.photo}
          alt={profile.name}
          className="absolute bottom-0 left-1/2 w-[96%] -translate-x-1/2 object-contain object-bottom"
        />
      </div>
    </div>
  )
}

export default function About({ index }) {
  const { t } = usePreferences()
  return (
    <Section id="about" index={index} eyebrow={t.nav.about} title={t.about.title}>
      <div className="grid items-center gap-14 lg:grid-cols-[auto_1fr] lg:gap-20">
        {profile.photo && (
          <Reveal>
            <Photo />
          </Reveal>
        )}

        <Reveal delay={0.1}>
          <p className="font-mono text-sm text-accent">{t.hero.title}</p>
          <p className="mt-5 text-lg leading-relaxed text-muted">{t.about.text}</p>

          <p className="mt-6 flex items-center gap-2 text-sm text-faint">
            <MapPin size={15} className="text-accent" /> {t.hero.location}
          </p>

          <div className="mt-8">
            <h3 className="flex items-center gap-2 font-display font-semibold">
              <Languages size={18} className="text-accent" /> {t.ui.languages}
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {t.about.languages.map((l, i) => (
                <div key={l.name} className={`rounded-2xl px-4 py-3 ${hue(i).soft}`}>
                  <p className="font-medium">{l.name}</p>
                  <p className="mt-0.5 font-mono text-xs opacity-75">{l.level}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
