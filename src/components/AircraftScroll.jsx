import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    id: 'nose',
    title: 'Nose & Radome',
    body:
      'Houses the weather radar and forms the aerodynamic leading edge. On the 777, this smooth radome reduces drag and protects sensitive avionics.',
  },
  {
    id: 'flight-deck',
    title: 'Cockpit / Flight Deck',
    body:
      'Two‑crew, fly‑by‑wire controls with large, ergonomic displays. The 777 pioneered the modern Boeing glass cockpit layout.',
  },
  {
    id: 'engines',
    title: 'Engines (GE90 family)',
    body:
      'High‑bypass turbofans deliver massive thrust with exceptional efficiency. Distinctive composite fan blades and a large diameter nacelle.',
  },
  {
    id: 'wing',
    title: 'Wing & High‑Lift Devices',
    body:
      'Supercritical wing with blended fairings. Flaps and slats expand wing area for low‑speed lift during takeoff and landing.',
  },
  {
    id: 'gear',
    title: 'Landing Gear',
    body:
      'Robust main bogies support high MTOW operations. The nose gear steers the aircraft on the ground with precision.',
  },
  {
    id: 'fuselage',
    title: 'Fuselage',
    body:
      'Wide‑body aluminum‑lithium structure with pressurization, cargo holds, and optimized frames for strength‑to‑weight.',
  },
  {
    id: 'apu',
    title: 'APU (Auxiliary Power Unit)',
    body:
      'A small turbine in the tail provides electrical power and bleed air on the ground and as backup in flight.',
  },
  {
    id: 'tail',
    title: 'Empennage',
    body:
      'Vertical stabilizer and horizontal tail provide directional and pitch stability. Trim systems reduce control loads.',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -24, transition: { duration: 0.4, ease: 'easeIn' } },
}

export default function AircraftScroll() {
  const containerRef = useRef(null)

  return (
    <section id="aircraft" className="relative bg-black text-white">
      {/* Sticky 3D scene */}
      <div className="pointer-events-none sticky top-0 h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0">
          {/* Tip: Replace the scene URL below with a Boeing 777 Spline scene for full effect */}
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      </div>

      {/* Scroll narrative */}
      <div ref={containerRef} className="relative mx-auto max-w-5xl px-6">
        <div className="py-20" />
        {steps.map((s, idx) => (
          <div key={s.id} className="min-h-[90svh] flex items-center">
            <motion.div
              className="max-w-2xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 shadow-[0_0_40px_rgba(168,85,247,0.15)]"
              variants={fadeUp}
              initial="initial"
              whileInView="enter"
              viewport={{ once: false, amount: 0.6 }}
              exit="exit"
            >
              <div className="text-xs uppercase tracking-widest text-fuchsia-300/80">Step {idx + 1}</div>
              <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-zinc-300 leading-relaxed">{s.body}</p>
              <div className="mt-5 h-px w-24 bg-gradient-to-r from-fuchsia-400/60 to-cyan-400/60" />
              <p className="mt-3 text-xs text-zinc-500">
                Scroll to continue. Scrolling back gracefully fades these callouts so the aircraft returns to an unobstructed view.
              </p>
            </motion.div>
          </div>
        ))}
        <div className="py-24" />
      </div>

      {/* Bottom gradient accent */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-64 w-[120%] rounded-full bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl" />
    </section>
  )
}
