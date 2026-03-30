import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    /*
      Hier kun je jouw eigen backend/API koppelen.
      Opties:
        - Formspree:  fetch('https://formspree.io/f/JOUW_ID', ...)
        - EmailJS:    gebruik de @emailjs/browser package
        - Netlify:    voeg data-netlify="true" toe aan het form element

      Voorlopig simuleren we een succesvolle verzending:
    */
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-accent/40 to-transparent" />

      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-sub">Samenwerken?</p>
          <h2 className="section-heading">
            Neem <span className="text-gradient">Contact</span> op
          </h2>
          <p className="text-white/40 mt-4 max-w-md mx-auto">
            Heb je een project in gedachten of wil je gewoon even hoi zeggen?
            Stuur me een berichtje — ik reageer binnen 24 uur.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12">
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-xl font-bold mb-2">Bericht verzonden!</h3>
              <p className="text-white/50">
                Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 btn-outline text-sm"
              >
                Stuur nog een bericht
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                    Naam <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jan de Vries"
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                    E-mailadres <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jan@voorbeeld.nl"
                    className="input-field"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                  Bericht <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hoi! Ik heb een project waarbij ik jouw hulp goed kan gebruiken..."
                  className="input-field resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Verzenden...
                  </>
                ) : (
                  <>
                    Verstuur bericht
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                  </>
                )}
              </button>

              {/* Quick contact options */}
              <div className="flex items-center gap-4 pt-2">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-white/30 text-xs font-mono">of bereik me via</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a
                  href="mailto:jouw@email.nl"
                  className="flex items-center gap-2 text-white/50 hover:text-accent transition-colors"
                >
                  ✉️ jouw@email.nl
                </a>
                <a
                  href="https://linkedin.com/in/jouwprofiel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/50 hover:text-accent transition-colors"
                >
                  💼 LinkedIn
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
