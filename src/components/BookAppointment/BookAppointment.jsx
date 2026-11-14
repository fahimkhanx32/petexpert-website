import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { LuCalendarCheck, LuCircleCheck, LuLoaderCircle, LuX } from 'react-icons/lu'
import { BRANCHES, SERVICES } from '../../config/site'

const CONFIG = {
  title: 'Book an appointment',
  subtitle: 'Tell us about your pet and pick a time. Our team will confirm by phone.',
  petTypes: ['Dog', 'Cat', 'Bird', 'Rabbit', 'Other'],
  timeSlots: ['9:00 AM – 11:00 AM', '11:00 AM – 1:00 PM', '2:00 PM – 4:00 PM', '4:00 PM – 6:00 PM'],
  emptyError: 'Please fill in your name, phone number, pet type, branch, date and time.',
  // Shown after a valid submit until the backend exists. Replace with real handling in onSubmit.
  notConnectedNotice: 'Thank you! Booking is not connected to the backend yet, so nothing was sent. Please call the clinic to confirm.',
}

const emptyForm = { name: '', phone: '', petType: '', petName: '', branch: '', service: '', date: '', time: '', notes: '' }

const AppointmentContext = createContext(null)
export const useAppointment = () => useContext(AppointmentContext)

const todayISO = () => {
  const d = new Date()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${month}-${day}`
}

const inputClass =
  'w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-[0.95rem] text-ink outline-hidden transition-colors placeholder:text-slate-400 focus:border-gold-ink focus:ring-2 focus:ring-gold/40 dark:border-white/20 dark:bg-night dark:text-white dark:focus:border-zinc-300 dark:focus:ring-zinc-300/25'

function FormField({ label, id, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink dark:text-slate-200">
        {label}
      </label>
      {children}
    </div>
  )
}

// Wrap the app with this once. Any button can then call openAppointment() from useAppointment().
export function AppointmentProvider({ children }) {
  const dialogRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const [loading, setLoading] = useState(false)

  // Open / close the native <dialog> (it traps focus and closes with the Esc key)
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const openAppointment = () => {
    setError('')
    setNotice('')
    setOpen(true)
  }
  const closeAppointment = () => setOpen(false)

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setNotice('')
    const { name, phone, petType, branch, date, time } = form
    if (!name.trim() || !phone.trim() || !petType || !branch || !date || !time) return setError(CONFIG.emptyError)

    setLoading(true)
    // TODO(backend): replace this block with the real booking request, e.g.
    //   await api('/appointments', form)
    await new Promise((resolve) => setTimeout(resolve, 900))
    setLoading(false)
    setNotice(CONFIG.notConnectedNotice)
    setForm(emptyForm)
  }

  return (
    <AppointmentContext.Provider value={{ openAppointment, closeAppointment }}>
      {children}

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          // a click on the dark backdrop closes the modal
          if (e.target === e.currentTarget) closeAppointment()
        }}
        aria-labelledby="appointment-title"
        className="m-auto max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-2xl overflow-y-auto rounded-3xl bg-surface p-0 text-ink shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm dark:bg-night-card dark:text-slate-200"
      >
        <div className="p-5 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id="appointment-title" className="flex items-center gap-2 font-display text-2xl font-semibold text-ink dark:text-white">
                <LuCalendarCheck className="text-gold-ink dark:text-zinc-300" size={26} aria-hidden="true" />
                {CONFIG.title}
              </h2>
              <p className="mt-1 text-sm text-muted dark:text-slate-400">{CONFIG.subtitle}</p>
            </div>
            <button type="button" onClick={closeAppointment} aria-label="Close" className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-sage/70 focus-visible:outline-2 focus-visible:outline-gold-ink dark:hover:bg-white/10">
              <LuX size={22} aria-hidden="true" />
            </button>
          </div>

          <form onSubmit={onSubmit} noValidate className="mt-6 grid gap-4 sm:grid-cols-2">
            {error && (
              <p role="alert" className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800 sm:col-span-2 dark:border-red-400/40 dark:bg-red-950/40 dark:text-red-200">
                {error}
              </p>
            )}
            {notice && (
              <p role="status" className="flex items-start gap-2 rounded-xl border border-gold/50 bg-sage px-4 py-3 text-sm text-ink sm:col-span-2 dark:border-white/20 dark:bg-white/5 dark:text-slate-200">
                <LuCircleCheck size={18} className="mt-0.5 shrink-0 text-gold-ink dark:text-zinc-300" aria-hidden="true" />
                {notice}
              </p>
            )}

            <FormField label="Your name" id="ap-name">
              <input id="ap-name" className={inputClass} value={form.name} onChange={update('name')} autoComplete="name" placeholder="Full name" />
            </FormField>
            <FormField label="Phone number" id="ap-phone">
              <input id="ap-phone" type="tel" className={inputClass} value={form.phone} onChange={update('phone')} autoComplete="tel" placeholder="01XXX-XXXXXX" />
            </FormField>

            <FormField label="Pet type" id="ap-pet-type">
              <select id="ap-pet-type" className={inputClass} value={form.petType} onChange={update('petType')}>
                <option value="">Select pet type</option>
                {CONFIG.petTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </FormField>
            <FormField label="Pet name (optional)" id="ap-pet-name">
              <input id="ap-pet-name" className={inputClass} value={form.petName} onChange={update('petName')} placeholder="e.g. Bruno" />
            </FormField>

            <FormField label="Branch" id="ap-branch">
              <select id="ap-branch" className={inputClass} value={form.branch} onChange={update('branch')}>
                <option value="">Select branch</option>
                {BRANCHES.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </select>
            </FormField>
            <FormField label="Service (optional)" id="ap-service">
              <select id="ap-service" className={inputClass} value={form.service} onChange={update('service')}>
                <option value="">Not sure yet</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
            </FormField>

            <FormField label="Preferred date" id="ap-date">
              <input id="ap-date" type="date" min={todayISO()} className={inputClass} value={form.date} onChange={update('date')} />
            </FormField>
            <FormField label="Preferred time" id="ap-time">
              <select id="ap-time" className={inputClass} value={form.time} onChange={update('time')}>
                <option value="">Select time</option>
                {CONFIG.timeSlots.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </FormField>

            <div className="sm:col-span-2">
              <FormField label="Anything we should know? (optional)" id="ap-notes">
                <textarea id="ap-notes" rows={3} className={inputClass} value={form.notes} onChange={update('notes')} placeholder="Symptoms, age, past treatment…" />
              </FormField>
            </div>

            <button
              type="submit"
              disabled={loading}
              aria-busy={loading}
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white transition-colors hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-ink disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2 dark:bg-linear-to-b dark:from-zinc-100 dark:to-zinc-400 dark:text-night dark:hover:from-white dark:hover:to-zinc-300"
            >
              {loading ? <LuLoaderCircle size={20} className="animate-spin" aria-hidden="true" /> : <LuCalendarCheck size={20} aria-hidden="true" />}
              {loading ? 'Sending…' : 'Request appointment'}
            </button>
          </form>
        </div>
      </dialog>
    </AppointmentContext.Provider>
  )
}
