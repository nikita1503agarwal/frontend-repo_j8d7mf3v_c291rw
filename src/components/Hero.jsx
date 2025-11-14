import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[95vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            Aerospace + Full‑stack Developer
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Building futuristic interfaces for Earth and beyond
          </h1>
          <p className="mt-4 text-zinc-300 md:text-lg">
            I’m a college student blending aerospace passion with modern software engineering — from simulations and mission dashboards to interactive 3D experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-white text-black font-medium hover:-translate-y-0.5 transition transform">Explore Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">Get in touch</a>
          </div>
        </motion.div>
      </div>

      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[120%] h-64 blur-3xl bg-gradient-to-r from-fuchsia-500/30 via-purple-500/30 to-cyan-500/30 rounded-full pointer-events-none" />
    </section>
  )
}
