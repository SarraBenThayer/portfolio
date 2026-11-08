import { Download, ExternalLink, FileText } from 'lucide-react'
import { usePreferences } from '../context/Preferences'
import { profile } from '../data/content'
import Section, { Reveal } from './Section'

// Inline CV viewer. Desktop/tablet browsers render the PDF in an iframe;
// most phone browsers can't display PDFs inline, so phones get buttons instead.
export default function Resume({ index }) {
  const { t, lang } = usePreferences()
  const src = profile.cv[lang]

  return (
    <Section id="resume" index={index} eyebrow={t.nav.resume} title={t.ui.resumeTitle} subtitle={t.ui.resumeSub}>
      <Reveal>
        <div className="mb-6 flex flex-wrap gap-3">
          <a href={src} download className="btn-primary">
            <Download size={16} /> {t.hero.ctaCv}
          </a>
          <a href={src} target="_blank" rel="noreferrer" className="btn-ghost">
            <ExternalLink size={16} /> {t.ui.openCv}
          </a>
        </div>

        {/* inline viewer (tablet & desktop) */}
        <div className="card hidden overflow-hidden p-2 md:block">
          <iframe
            key={src}
            src={`${src}#view=FitH&toolbar=1`}
            title={t.ui.resumeTitle}
            className="h-[85vh] min-h-[640px] w-full rounded-xl bg-white"
          />
        </div>

        {/* phones: PDFs don't render inline, so offer to open it */}
        <a
          href={src}
          target="_blank"
          rel="noreferrer"
          className="card flex items-center gap-4 p-5 md:hidden"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-bg shadow-md shadow-accent-2/20">
            <FileText size={22} />
          </span>
          <span className="text-sm text-muted">{t.ui.resumeMobile}</span>
        </a>
      </Reveal>
    </Section>
  )
}
