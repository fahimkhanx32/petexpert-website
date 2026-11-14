import { Link } from 'react-router-dom'
import { LuArrowRight, LuCalendarPlus, LuStar } from 'react-icons/lu'
import Container from '../Container/Container'
import { useAppointment } from '../BookAppointment/BookAppointment'
import { hideBroken } from '../../config/site'

// Everything on the home banner is controlled from this one block.
const CONFIG = {
  eyebrow: 'Compassionate care. Healthy pets. Happy families.',
  titleLine1: 'Because they',
  titleLine2: 'deserve the',
  titleHighlight: 'best care',
  text: 'Comprehensive veterinary care for pets of all shapes and sizes. We treat your pets like family.',
  primaryButton: 'Book Appointment',
  secondaryButton: 'Our Services',
  secondaryPath: '/services',
  heroImage: '/images/hero-vet-with-dog.webp', // file in /public/images
  heroImageAlt: 'A veterinarian cuddling a golden retriever',
  // TODO: replace with real review numbers
  rating: '4.9',
  reviews: '(450+ reviews)',
  // Small round photos of happy pet parents (file in /public/images/avatars)
  avatars: ['/images/avatars/pet-1.webp', '/images/avatars/pet-2.webp', '/images/avatars/pet-3.webp', '/images/avatars/pet-4.webp'],
}

export default function Banner() {
  const { openAppointment } = useAppointment()

  return (
    <section className="relative overflow-hidden bg-canvas dark:bg-linear-to-b dark:from-night-card dark:to-night">
      {/* Light mode only: faint dot grid and a soft sage glow behind the hero */}
      <div className="folio-grid pointer-events-none absolute inset-0 dark:hidden" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 top-6 h-[30rem] w-[34rem] rounded-full bg-sage/60 blur-3xl dark:hidden" aria-hidden="true" />
      <Container className="relative grid items-center gap-8 py-10 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:py-20">
        <div>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink dark:font-medium dark:tracking-[0.2em] dark:text-zinc-400">
            <span className="h-px w-10 shrink-0 bg-gold dark:bg-zinc-500" aria-hidden="true" />
            {CONFIG.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl xl:text-6xl dark:bg-linear-to-b dark:from-white dark:via-zinc-200 dark:to-zinc-500 dark:bg-clip-text dark:text-6xl dark:font-bold dark:uppercase dark:leading-[0.95] dark:text-transparent dark:sm:text-7xl dark:xl:text-8xl">
            {CONFIG.titleLine1}
            <br />
            {CONFIG.titleLine2} <span className="text-gold-ink dark:text-transparent">{CONFIG.titleHighlight}</span>
          </h1>
          <p className="mt-5 max-w-lg text-base text-muted sm:text-lg dark:text-slate-300">{CONFIG.text}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={openAppointment}
              className="flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white transition-colors hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-ink dark:bg-linear-to-b dark:from-zinc-100 dark:to-zinc-400 dark:text-night dark:hover:from-white dark:hover:to-zinc-300"
            >
              <LuCalendarPlus size={20} aria-hidden="true" />
              {CONFIG.primaryButton}
            </button>
            <Link
              to={CONFIG.secondaryPath}
              className="flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 font-semibold text-ink transition-colors hover:border-gold hover:text-gold-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-ink dark:border-white/25 dark:bg-transparent dark:text-white dark:hover:border-zinc-300 dark:hover:text-white"
            >
              {CONFIG.secondaryButton}
              <LuArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ul className="flex -space-x-3">
              {CONFIG.avatars.map((src) => (
                <li key={src} className="size-11 overflow-hidden rounded-full border-2 border-canvas bg-sage dark:border-night">
                  <img src={src} alt="" onError={hideBroken} className="size-full object-cover" />
                </li>
              ))}
            </ul>
            <div>
              <div className="flex items-center gap-1 text-amber-500" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <LuStar key={i} size={18} className="fill-current" />
                ))}
              </div>
              <p className="text-sm text-muted dark:text-slate-300">
                <span className="font-bold text-ink dark:text-white">{CONFIG.rating}</span> {CONFIG.reviews}
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto aspect-4/3 w-full max-w-xl overflow-hidden rounded-3xl bg-sage lg:max-w-none dark:bg-white/5">
          <img src={CONFIG.heroImage} alt={CONFIG.heroImageAlt} onError={hideBroken} className="size-full object-cover" fetchPriority="high" />
        </div>
      </Container>
    </section>
  )
}
