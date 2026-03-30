/* ──────────────────────────────────────────────
   Voeg jouw eigen projecten toe hieronder.
   Vervang de placeholder links/afbeeldingen.
   ────────────────────────────────────────────── */
const projects = [
  {
    title: 'E-commerce Shop',
    description:
      'Volledige webshop gebouwd met React en een Stripe-integratie. Inclusief admin-dashboard, voorraadbeheer en responsive design.',
    tags: ['React', 'TypeScript', 'Stripe', 'Tailwind'],
    liveUrl: 'https://jouwproject.nl',
    githubUrl: 'https://github.com/jouwprofiel/project1',
    featured: true,
    color: 'from-accent/20 to-purple-500/10',
    emoji: '🛍️',
  },
  {
    title: 'Weer App',
    description:
      'Real-time weerapp die data ophaalt via een externe API. Locatiedetectie, 5-daagse voorspelling en mooie iconen.',
    tags: ['React', 'OpenWeather API', 'CSS Modules'],
    liveUrl: 'https://weer.jouwproject.nl',
    githubUrl: 'https://github.com/jouwprofiel/project2',
    featured: false,
    color: 'from-teal-accent/20 to-blue-500/10',
    emoji: '🌤️',
  },
  {
    title: 'Portfolio Website',
    description:
      'Dit portfolio! Gebouwd met React, Vite en Tailwind CSS. Clean dark-mode design met animaties.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/jouwprofiel/portfolio',
    featured: false,
    color: 'from-pink-500/20 to-accent/10',
    emoji: '✨',
  },
  {
    title: 'WordPress Blog',
    description:
      'Custom WordPress-thema op maat gebouwd voor een lokale ondernemer. Inclusief SEO-optimalisatie en contactformulier.',
    tags: ['WordPress', 'PHP', 'CSS', 'ACF'],
    liveUrl: 'https://blog.jouwproject.nl',
    githubUrl: 'https://github.com/jouwprofiel/wp-theme',
    featured: false,
    color: 'from-amber-500/20 to-orange-500/10',
    emoji: '📝',
  },
  {
    title: 'Dashboard UI',
    description:
      'Analytics dashboard voor een SaaS-product. Charts, tabellen en een sidebar-navigatie gebouwd in React.',
    tags: ['React', 'Recharts', 'TypeScript'],
    liveUrl: 'https://dashboard.jouwproject.nl',
    githubUrl: 'https://github.com/jouwprofiel/dashboard',
    featured: false,
    color: 'from-green-500/20 to-teal-accent/10',
    emoji: '📊',
  },
  {
    title: 'Recipe App',
    description:
      'Recept-app met zoekfunctie, filtermogelijkheden en opgeslagen favorieten via localStorage.',
    tags: ['React', 'API', 'CSS'],
    liveUrl: 'https://recipes.jouwproject.nl',
    githubUrl: 'https://github.com/jouwprofiel/recipes',
    featured: false,
    color: 'from-red-500/20 to-pink-500/10',
    emoji: '🍜',
  },
]

// Icons
const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const GithubIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

export default function Projects() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-teal-accent/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-sub">Wat ik gemaakt heb</p>
          <h2 className="section-heading">
            Mijn <span className="text-gradient">Projecten</span>
          </h2>
        </div>

        {/* Featured project */}
        {featured && (
          <div className={`glass-card p-8 mb-8 bg-gradient-to-br ${featured.color} relative overflow-hidden hover:-translate-y-1 transition-transform duration-300`}>
            <div className="absolute top-4 right-4 text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
              Uitgelicht project
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="text-6xl">{featured.emoji}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">{featured.title}</h3>
                <p className="text-white/60 leading-relaxed mb-5">{featured.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="skill-pill text-xs">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={featured.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm flex items-center gap-2">
                    Live bekijken <ExternalIcon />
                  </a>
                  <a href={featured.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm flex items-center gap-2">
                    <GithubIcon /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid — rest of projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project) => (
            <div
              key={project.title}
              className={`glass-card p-6 bg-gradient-to-br ${project.color} flex flex-col hover:-translate-y-1 transition-transform duration-300 group`}
            >
              <div className="text-4xl mb-4">{project.emoji}</div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-dark-900/60 text-white/50 font-mono px-2.5 py-1 rounded-md">{tag}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-white/60 hover:text-accent transition-colors">
                  <ExternalIcon /> Live
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors">
                  <GithubIcon /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
