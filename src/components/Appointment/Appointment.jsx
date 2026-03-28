import { useState } from 'react'

const SERVICES = [
  'Engine Build',
  'Forced Induction',
  'ECU Tuning',
  'Suspension & Handling',
  'Brakes & Driveline',
  'Custom Fabrication',
  'Other / Unsure',
]

const INITIAL = { name: '', email: '', phone: '', service: '', vehicle: '', message: '' }

export default function Appointment() {
  const [form,   setForm]   = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('submitting')
    // TODO: replace with real endpoint (Formspree, Resend, etc.)
    await new Promise(r => setTimeout(r, 1200))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <section id="appointment" className="py-20 px-6 bg-surface">
        <div className="max-w-300 mx-auto flex justify-center">
          <div className="text-center max-w-sm flex flex-col items-center gap-5">
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-accent text-white text-3xl">
              ✓
            </span>
            <h2 className="section-title">Request Received</h2>
            <p className="text-muted">We'll be in touch within one business day to confirm your appointment.</p>
            <button
              className="btn btn-outline"
              onClick={() => { setForm(INITIAL); setStatus('idle') }}
            >
              Submit Another
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="appointment" className="py-20 px-6 bg-surface">
      <div className="max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20 items-start">

        {/* Left — copy */}
        <div>
          <span className="section-label">Get Started</span>
          <h2 className="section-title">Book an Appointment</h2>
          <p className="mt-4 text-muted leading-[1.7] max-w-[40ch] lg:max-w-none">
            Tell us what you're working on and we'll get back to you within one
            business day. All consultations are free.
          </p>
          <ul className="mt-7 flex flex-col gap-3 list-none">
            {['Free initial consultation', 'Transparent quoting — no surprises', 'Track & street builds welcome'].map(perk => (
              <li key={perk} className="relative pl-5 text-sm text-muted before:content-['—'] before:absolute before:left-0 before:text-accent">
                {perk}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — form */}
        <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="field-label">Full Name *</label>
              <input id="name" name="name" type="text" placeholder="John Smith"
                className="field-input" value={form.name} onChange={handleChange} required />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="field-label">Email *</label>
              <input id="email" name="email" type="email" placeholder="john@example.com"
                className="field-input" value={form.email} onChange={handleChange} required />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="field-label">Phone</label>
              <input id="phone" name="phone" type="tel" placeholder="+1 555 000 0000"
                className="field-input" value={form.phone} onChange={handleChange} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="service" className="field-label">Service *</label>
              <div className="relative">
                <select id="service" name="service" required
                  className="field-input appearance-none pr-10"
                  value={form.service} onChange={handleChange}
                >
                  <option value="" disabled>Select a service…</option>
                  {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <svg
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted"
                  width="12" height="8" viewBox="0 0 12 8" fill="none"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M1 1l5 5 5-5" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="vehicle" className="field-label">Vehicle (year, make, model)</label>
            <input id="vehicle" name="vehicle" type="text" placeholder="2018 Subaru WRX STI"
              className="field-input" value={form.vehicle} onChange={handleChange} />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="field-label">Details / Goals</label>
            <textarea id="message" name="message" rows={4}
              placeholder="Describe your project, power goals, budget range, timeline…"
              className="field-input resize-y min-h-27.5"
              value={form.message} onChange={handleChange}
            />
          </div>

          {status === 'error' && (
            <p className="text-[#ff6b6b] text-sm">Something went wrong — please try again.</p>
          )}

          <button
            type="submit"
            className="btn btn-primary self-start"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending…' : 'Request Appointment'}
          </button>

        </form>
      </div>
    </section>
  )
}
