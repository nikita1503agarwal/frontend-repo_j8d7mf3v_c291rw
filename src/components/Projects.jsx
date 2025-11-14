import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Mission Control Dashboard',
    desc: 'Real-time telemetry, anomaly alerts, and 3D attitude visualization.',
    tags: ['React', 'FastAPI', 'WebSockets'],
  },
  {
    title: 'Orbital Mechanics Simulator',
    desc: 'Interactive Kepler/Patched-conics sandbox with maneuver planning.',
    tags: ['Python', 'C++', 'Three.js'],
  },
  {
    title: 'Autonomous Drone Pathfinder',
    desc: 'RRT* and A* fusion with SLAM for indoor navigation.',
    tags: ['ROS', 'OpenCV', 'C++'],
  },
]

export default function Projects() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <div key={p.title} className="group relative rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-5 overflow-hidden">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-[radial-gradient(600px_circle_at_var(--x)_var(--y),rgba(236,72,153,0.15),transparent_40%)]" />
          <div className="flex items-start justify-between">
            <h3 className="text-white font-medium">{p.title}</h3>
            <div className="flex gap-2 text-zinc-300">
              <button aria-label="Open" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"><ExternalLink className="h-4 w-4" /></button>
              <button aria-label="Code" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"><Github className="h-4 w-4" /></button>
            </div>
          </div>
          <p className="mt-2 text-sm text-zinc-400">{p.desc}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map(t => (
              <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
