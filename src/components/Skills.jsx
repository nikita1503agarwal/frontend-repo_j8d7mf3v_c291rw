import { Code2, Cpu, Rocket, Database, Boxes, Infinity } from 'lucide-react'

const skills = [
  { icon: Code2, label: 'TypeScript/React' },
  { icon: Database, label: 'MongoDB/SQL' },
  { icon: Cpu, label: 'Python/C++' },
  { icon: Boxes, label: 'Three.js/Spline' },
  { icon: Rocket, label: 'Orbital Sims' },
  { icon: Infinity, label: 'CI/CD & DevOps' },
]

export default function Skills() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {skills.map((s) => (
        <div key={s.label} className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-white/20 hover:bg-white/[0.06] transition">
          <s.icon className="h-6 w-6 text-fuchsia-300 group-hover:scale-105 transition" />
          <p className="mt-3 text-sm text-zinc-300">{s.label}</p>
        </div>
      ))}
    </div>
  )
}
