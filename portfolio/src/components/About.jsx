const stats = [
  { label: 'Jaar ervaring', value: '3+' },
  { label: 'Projecten afgerond', value: '20+' },
  { label: 'Tevreden klanten', value: '15+' },
]

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — avatar + stats */}
          <div className="flex flex-col items-center md:items-start gap-8">
            {/* Avatar placeholder — vervang door jouw foto */}
            <div className="relative">
              <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-accent/30 to-teal-accent/20 border border-white/10 flex items-center justify-center text-7xl select-none">
                👤
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-3 -right-3 bg-dark-700 border border-white/10 rounded-xl px-3 py-1.5 flex items-center gap-2 text-sm font-mono">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/70">Open voor werk</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="flex gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-extrabold text-gradient">{stat.value}</div>
                  <div className="text-xs text-white/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — bio text */}
          <div>
            <p className="section-sub">Over mij</p>
            <h2 className="section-heading">
              Wie ben ik<span className="text-accent">?</span>
            </h2>

            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                Hoi! Ik ben <strong className="text-white font-semibold">Jeric</strong>, een
                gepassioneerde frontend developer. Ik hou van het bouwen van
                digitale ervaringen die er niet alleen mooi uitzien, maar ook geweldig aanvoelen
                voor de gebruiker.
              </p>
              <p>
                Met een achtergrond in <strong className="text-white/80">React</strong>,{' '}
                <strong className="text-white/80">TypeScript</strong> en moderne CSS-technieken,
                help ik bedrijven en particulieren om hun ideeën tot leven te brengen op het web.
              </p>
              <p>
                Buiten het coderen ben ik te vinden op de racefiets, speel ik videogames, of ben ik
                bezig met nieuwe vaardigheden leren. 
              </p>
            </div>

            {/* Links */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://linkedin.com/in/jouwprofiel"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                LinkedIn profiel
              </a>
              <a
                href="/cv.pdf" /* Zet jouw CV in de public/ map */
                download
                className="btn-outline text-sm"
              >
                Download CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
