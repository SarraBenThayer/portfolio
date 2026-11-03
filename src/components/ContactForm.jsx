import { useState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { usePreferences } from '../context/Preferences'
import { profile } from '../data/content'

const field =
  'w-full rounded-xl border border-line bg-bg/60 px-4 py-3 text-sm text-fg placeholder:text-faint outline-none transition-colors focus:border-accent/60 focus:ring-2 focus:ring-accent/15'

export default function ContactForm() {
  const { t } = usePreferences()
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    if (data.botcheck) return // honeypot filled → bot

    // No Web3Forms key yet → open the visitor's mail app with the message prefilled
    if (!profile.web3formsKey) {
      const subject = encodeURIComponent(`Portfolio — ${data.name}`)
      const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: profile.web3formsKey,
          subject: `Portfolio — new message from ${data.name}`,
          from_name: 'Portfolio contact form',
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      })
      const json = await res.json()
      if (!json.success) throw new Error(json.message)
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 py-10 text-center">
        <CheckCircle2 size={40} className="text-accent" />
        <p className="max-w-xs text-muted">{t.ui.formSuccess}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="font-display text-lg font-semibold">{t.ui.formTitle}</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder={t.ui.formName} aria-label={t.ui.formName} className={field} />
        <input
          name="email"
          type="email"
          required
          placeholder={t.ui.formEmail}
          aria-label={t.ui.formEmail}
          className={field}
        />
      </div>
      <textarea
        name="message"
        required
        rows={5}
        placeholder={t.ui.formMessage}
        aria-label={t.ui.formMessage}
        className={`${field} resize-y`}
      />
      {/* honeypot: hidden from humans, bots tend to fill it */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      {status === 'error' && <p className="text-sm text-red-400">{t.ui.formError}</p>}

      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60 sm:w-auto">
        {status === 'sending' ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
        {status === 'sending' ? t.ui.formSending : t.ui.formSend}
      </button>
    </form>
  )
}
