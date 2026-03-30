/* ──────────────────────────────────────────────
   Pas de skills & categorieën aan naar jouw
   eigen kennis en ervaringsniveau!
   ────────────────────────────────────────────── */
const categories = [
  {
    title: 'Frontend',
    icon: '🖥️',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS', 'Tailwind CSS', 'Next.js', 'Vite'],
  },
  {
    title: 'Tools & Workflow',
    icon: '🛠️',
    skills: ['Git & GitHub', 'VS Code', 'Figma', 'npm / pnpm', 'ESLint', 'Prettier'],
  },
  {
    title: 'Backend (basics)',
    icon: '⚙️',
    skills: ['Node.js', 'REST APIs', 'PHP', 'MySQL', 'WordPress'],
  },
  {
    title: 'Soft skills',
    icon: '💬',
    skills: ['Communicatie', 'Samenwerking', 'Probleemoplossend', 'Zelfstandig', 'Leergierig'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      {/* Subtle divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-accent/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-sub">Mijn expertise</p>
          <h2 className="section-heading">
            Skills &amp; <span className="text-gradient">Vaardigheden</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="glass-card p-6 hover:border-accent/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-semibold text-white/90 text-sm">{cat.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
