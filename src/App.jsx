import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      <Section id="about" title="About" subtitle="A college aerospace enthusiast who thrives at the intersection of flight and code.">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 text-zinc-300 leading-relaxed">
            I design and build interactive tools for space and aviation — think mission control dashboards, orbital simulators, and data visualizations. I love clean, modern interfaces and pushing the web with real-time and 3D experiences.
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-zinc-300">
            <p className="text-sm">Highlights</p>
            <ul className="mt-3 space-y-2 text-sm list-disc list-inside">
              <li>Full‑stack web dev (React, FastAPI)</li>
              <li>Flight dynamics & control basics</li>
              <li>Robotics and embedded tinkering</li>
              <li>3D/Sim: Three.js, Spline</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Skills" subtitle="Tools and stacks I pilot on a daily basis.">
        <Skills />
      </Section>

      <Section id="projects" title="Projects" subtitle="Selected builds that showcase my coding and aerospace focus.">
        <Projects />
      </Section>

      <Section id="contact" title="Contact" subtitle="Have a mission in mind or want to collaborate? Send a ping.">
        <Contact />
        <p className="mt-8 text-xs text-zinc-500">Built with love for aerospace and the modern web.</p>
      </Section>
    </div>
  )
}

export default App
