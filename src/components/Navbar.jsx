import { useState, useEffect } from 'react'
import { Menu, X, Rocket, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClasses = 'text-sm md:text-base text-zinc-300 hover:text-white transition-colors'

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-black/50 border-b border-white/5' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group">
          <span className="p-2 rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 border border-white/10">
            <Rocket className="h-5 w-5 text-fuchsia-400 group-hover:rotate-12 transition-transform" />
          </span>
          <div className="text-left">
            <p className="text-white font-semibold leading-none">AeroDev</p>
            <p className="text-[11px] text-zinc-400">Futuristic Portfolio</p>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('about')} className={linkClasses}>About</button>
          <button onClick={() => scrollTo('skills')} className={linkClasses}>Skills</button>
          <button onClick={() => scrollTo('projects')} className={linkClasses}>Projects</button>
          <button onClick={() => scrollTo('contact')} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/10 transition">Contact</button>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition border border-white/10"><Github className="h-5 w-5" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition border border-white/10"><Linkedin className="h-5 w-5" /></a>
          <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} aria-label="Email" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition border border-white/10"><Mail className="h-5 w-5" /></a>
        </div>

        <button className="md:hidden p-2 rounded-lg bg-white/10 text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="rounded-xl border border-white/10 bg-black/50 backdrop-blur p-4 flex flex-col gap-3">
            <button onClick={() => scrollTo('about')} className={linkClasses}>About</button>
            <button onClick={() => scrollTo('skills')} className={linkClasses}>Skills</button>
            <button onClick={() => scrollTo('projects')} className={linkClasses}>Projects</button>
            <button onClick={() => scrollTo('contact')} className="mt-1 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/10 transition">Contact</button>
          </div>
        </div>
      )}
    </header>
  )
}
