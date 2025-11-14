export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-20 md:py-28 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-zinc-400 max-w-2xl">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
