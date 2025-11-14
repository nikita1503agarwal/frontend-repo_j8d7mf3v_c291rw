import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Demo submission — in real app, call backend
    setTimeout(() => setStatus('Thanks! I’ll reach back soon.'), 700)
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl space-y-3">
      <input required placeholder="Name" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
      <input required type="email" placeholder="Email" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
      <textarea required rows="4" placeholder="Message" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
      <button className="px-5 py-2.5 rounded-lg bg-white text-black font-medium hover:-translate-y-0.5 transition">Send</button>
      {status && <p className="text-sm text-zinc-300">{status}</p>}
    </form>
  )
}
