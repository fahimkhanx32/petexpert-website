import { LuCalendarPlus, LuCheck, LuPhone } from 'react-icons/lu'
import PageHero from '../PageHero/PageHero'
import Container from '../Container/Container'
import { useAppointment } from '../BookAppointment/BookAppointment'
import { SERVICES, SITE, hideBroken } from '../../config/site'

const CONFIG = {
  heroTitle: 'Our Services',
  heroSubtitle: 'Complete care for every stage of your pet’s life.',
}

export default function Services() {
  const { openAppointment } = useAppointment()

  return (
    <>
      <PageHero title={CONFIG.heroTitle} subtitle={CONFIG.heroSubtitle} />

      <Container className="flex flex-col gap-16 py-14 sm:gap-20 sm:py-20">
        {SERVICES.map(({ id, title, long, points, icon: Icon, image, badge }, index) => (
          <section key={id} id={id} className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <div className={`relative aspect-4/3 overflow-hidden rounded-3xl bg-sage dark:bg-white/5 ${index % 2 ? 'lg:order-2' : ''}`}>
              <img src={image} alt={title} onError={hideBroken} className="size-full object-cover" loading="lazy" />
              {badge && <span className="absolute right-3 top-3 rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white">{badge}</span>}
            </div>

            <div>
              <span className="flex size-12 items-center justify-center rounded-full bg-sage text-ink dark:bg-white/10 dark:text-zinc-300">
                <Icon size={24} aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink dark:text-white">{title}</h2>
              <p className="mt-3 text-muted dark:text-slate-300">{long}</p>
              <ul className="mt-5 space-y-2">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-ink/90 dark:text-slate-300">
                    <LuCheck size={18} className="mt-0.5 shrink-0 text-gold-ink dark:text-zinc-300" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={openAppointment}
                  className="flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white transition-colors hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-ink dark:bg-linear-to-b dark:from-zinc-100 dark:to-zinc-400 dark:text-night dark:hover:from-white dark:hover:to-zinc-300"
                >
                  <LuCalendarPlus size={18} aria-hidden="true" />
                  Book Appointment
                </button>
                {badge && (
                  <a href={SITE.phones[0].href} className="flex items-center gap-2 rounded-lg border border-red-600 px-5 py-3 font-semibold text-red-700 hover:bg-red-50 dark:border-red-400 dark:text-red-300 dark:hover:bg-red-950/40">
                    <LuPhone size={18} aria-hidden="true" />
                    Call now
                  </a>
                )}
              </div>
            </div>
          </section>
        ))}
      </Container>
    </>
  )
}
