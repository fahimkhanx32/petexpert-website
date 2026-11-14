import { Link } from 'react-router-dom'
import { LuArrowRight, LuAward, LuHeart, LuStar, LuStethoscope } from 'react-icons/lu'
import Container from '../Container/Container'
import { hideBroken } from '../../config/site'

// Short "about" block on the home page. TODO: replace the numbers with real figures.
const CONFIG = {
  eyebrow: 'About Pet Expert',
  title: 'Your pet’s health. Our priority.',
  text: [
    'At Pet Expert we combine compassionate care with advanced medicine to help your pets live longer, healthier lives.',
    'From routine checkups to advanced treatments, we’re here for you.',
  ],
  image: '/images/clinic-reception.webp', // file in /public/images
  imageAlt: 'Inside the Pet Expert clinic',
  buttonLabel: 'Learn more about us',
  buttonPath: '/about',
  stats: [
    { icon: LuAward, value: '15+', label: 'Years of experience' },
    { icon: LuHeart, value: '10K+', label: 'Happy pet parents' },
    { icon: LuStethoscope, value: '254', label: 'Expert veterinarians' },
    { icon: LuStar, value: '98%', label: 'Client satisfaction' },
  ],
}

export default function AboutSection() {
  return (
    <section className="bg-surface-2 py-14 sm:py-20 dark:bg-night-card">
      <Container className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="aspect-4/3 overflow-hidden rounded-3xl bg-sage dark:bg-white/5">
          <img src={CONFIG.image} alt={CONFIG.imageAlt} onError={hideBroken} className="size-full object-cover" loading="lazy" />
        </div>

        <div>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold-ink dark:font-medium dark:tracking-[0.2em] dark:text-zinc-400">
            <span className="h-px w-8 shrink-0 bg-gold dark:bg-zinc-500" aria-hidden="true" />
            {CONFIG.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl dark:text-white">{CONFIG.title}</h2>
          {CONFIG.text.map((p) => (
            <p key={p} className="mt-4 text-muted dark:text-slate-300">
              {p}
            </p>
          ))}

          <ul className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {CONFIG.stats.map(({ icon: Icon, value, label }) => (
              <li key={label}>
                <Icon size={22} className="text-gold-ink dark:text-zinc-300" aria-hidden="true" />
                <p className="mt-1 font-display text-2xl font-semibold text-ink dark:text-white">{value}</p>
                <p className="text-xs text-muted dark:text-slate-400">{label}</p>
              </li>
            ))}
          </ul>

          <Link
            to={CONFIG.buttonPath}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white transition-colors hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-ink dark:bg-linear-to-b dark:from-zinc-100 dark:to-zinc-400 dark:text-night dark:hover:from-white dark:hover:to-zinc-300"
          >
            {CONFIG.buttonLabel}
            <LuArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
