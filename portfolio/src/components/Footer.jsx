export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-sm">
        <p className="font-mono">
          &copy; {year} <span className="text-accent/60">Jouw Naam</span>. Gebouwd met React &amp; Tailwind CSS.
        </p>
        <p>Gemaakt met ❤️ in Nederland</p>
      </div>
    </footer>
  )
}
