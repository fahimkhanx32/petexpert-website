import { useState } from 'react'
import { LuClock, LuLoaderCircle, LuMail, LuMapPin, LuPhone, LuSend } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'
import PageHero from '../PageHero/PageHero'
import Container from '../Container/Container'
import { BRANCHES, SITE, mapLink } from '../../config/site'

const CONFIG = {
  heroTitle: 'Contact Us',
  heroSubtitle: 'Call, message or visit either of our two branches.',
  emptyError: 'Please enter your name, phone number and message.',
  // Shown after a valid submit until the backend exists. Replace with real handling in onSubmit.
  notConnectedNotice: 'Thank you! The contact form is not connected to the backend yet, so nothing was sent. Please call or WhatsApp us.',
}

const inputClass =
  'w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-[0.95rem] text-ink outline-hidden transition-colors placeholder:text-slate-400 focus:border-gold-ink focus:ring-2 focus:ring-gold/40 dark:border-white/20 dark:bg-night dark:text-white dark:focus:border-zinc-300 dark:focus:ring-zinc-300/25'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setNotice('')
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) return setError(CONFIG.emptyError)

    setLoading(true)
    // TODO(backend): replace this block with the real contact request, e.g. await api('/contact', form)
    await new Promise((resolve) => setTimeout(resolve, 900))
    setLoading(false)
    setNotice(CONFIG.notConnectedNotice)
    setForm({ name: '', phone: '', message: '' })
  }

  return (
    <>
      <PageHero title={CONFIG.heroTitle} subtitle={CONFIG.heroSubtitle} />

      <Container className="grid gap-10 py-14 sm:py-20 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          {BRANCHES.map((b) => (
            <section key={b.id} className="rounded-2xl border border-line p-6 dark:border-white/10 dark:bg-night-card">
              <h2 className="font-display text-xl font-semibold text-ink dark:text-white">{b.name}</h2>
              <ul className="mt-4 space-y-3 text-ink/90 dark:text-slate-300">
                <li className="flex gap-3">
                  <LuMapPin size={20} className="mt-0.5 shrink-0 text-gold-ink dark:text-zinc-300" aria-hidden="true" />
                  <span>
                    {b.address}
                    <a href={mapLink(b.address)} target="_blank" rel="noreferrer" className="mt-1 block text-sm font-semibold text-gold-ink hover:underline dark:text-zinc-300">
                      Open in Google Maps
                    </a>
                  </span>
                </li>
                {b.phones.map((p) => (
                  <li key={p.href} className="flex gap-3">
                    <LuPhone size={20} className="mt-0.5 shrink-0 text-gold-ink dark:text-zinc-300" aria-hidden="true" />
                    <a href={p.href} className="hover:underline">
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <div className="rounded-2xl border border-line p-6 dark:border-white/10 dark:bg-night-card">
            <ul className="space-y-3 text-ink/90 dark:text-slate-300">
              <li className="flex gap-3">
                <LuMail size={20} className="mt-0.5 shrink-0 text-gold-ink dark:text-zinc-300" aria-hidden="true" />
                <a href={`mailto:${SITE.email}`} className="break-all hover:underline">
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-3">
                <LuClock size={20} className="mt-0.5 shrink-0 text-gold-ink dark:text-zinc-300" aria-hidden="true" />
                <span>
                  {SITE.hours.map((h) => (
                    <span key={h} className="block">
                      {h}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
            <a
              href={`https://wa.me/${SITE.whatsappPhone}`}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              <FaWhatsapp size={20} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <section className="h-fit rounded-2xl border border-line p-6 sm:p-8 dark:border-white/10 dark:bg-night-card" aria-labelledby="contact-form-title">
          <h2 id="contact-form-title" className="font-display text-2xl font-semibold text-ink dark:text-white">
            Send us a message
          </h2>
          <form onSubmit={onSubmit} noValidate className="mt-5 flex flex-col gap-4">
            {error && (
              <p role="alert" className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-400/40 dark:bg-red-950/40 dark:text-red-200">
                {error}
              </p>
            )}
            {notice && (
              <p role="status" className="rounded-xl border border-gold/50 bg-sage px-4 py-3 text-sm text-ink dark:border-white/20 dark:bg-white/5 dark:text-slate-200">
                {notice}
              </p>
            )}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-name" className="text-sm font-medium">Your name</label>
              <input id="contact-name" className={inputClass} value={form.name} onChange={update('name')} autoComplete="name" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-phone" className="text-sm font-medium">Phone number</label>
              <input id="contact-phone" type="tel" className={inputClass} value={form.phone} onChange={update('phone')} autoComplete="tel" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-sm font-medium">Message</label>
              <textarea id="contact-message" rows={5} className={inputClass} value={form.message} onChange={update('message')} />
            </div>
            <button
              type="submit"
              disabled={loading}
              aria-busy={loading}
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white transition-colors hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-ink disabled:cursor-not-allowed disabled:opacity-60 dark:bg-linear-to-b dark:from-zinc-100 dark:to-zinc-400 dark:text-night dark:hover:from-white dark:hover:to-zinc-300"
            >
              {loading ? <LuLoaderCircle size={20} className="animate-spin" aria-hidden="true" /> : <LuSend size={18} aria-hidden="true" />}
              {loading ? 'Sending…' : 'Send message'}
            </button>
          </form>
        </section>
      </Container>
    </>
  )
}
