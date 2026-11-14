import { Link } from 'react-router-dom'
import { LuArrowRight } from 'react-icons/lu'
import Container from '../Container/Container'
import { SERVICES, hideBroken } from '../../config/site'

// The 6 service cards. The services themselves are listed in src/config/site.js
const CONFIG = {
  eyebrow: 'Our services',
  title: 'Complete care for every stage of life',
  viewAllLabel: 'View all services',
  viewAllPath: '/services',
}

export default function ServiceCards() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="text-center">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold-ink dark:font-medium dark:tracking-[0.2em] dark:text-zinc-400 justify-center">
            <span className="h-px w-8 shrink-0 bg-gold dark:bg-zinc-500" aria-hidden="true" />
            {CONFIG.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl dark:text-white">{CONFIG.title}</h2>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {SERVICES.map(({ id, title, short, icon: Icon, image, badge }) => (
            <li key={id} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card dark:shadow-none transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-night-card">
              <div className="relative aspect-4/3 bg-sage dark:bg-white/5">
                <img src={image} alt="" onError={hideBroken} className="size-full object-cover" loading="lazy" />
                {badge && <span className="absolute right-2 top-2 rounded-full bg-red-600 px-2 py-0.5 text-xs font-bold text-white">{badge}</span>}
                <span className="absolute -bottom-5 left-1/2 flex size-11 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-white ring-4 ring-surface dark:bg-zinc-200 dark:text-night dark:ring-night-card">
                  <Icon size={20} aria-hidden="true" />
                </span>
              </div>
              <div className="flex flex-1 flex-col items-center px-4 pb-5 pt-8 text-center">
                <h3 className="font-display text-lg font-semibold text-ink dark:text-white">{title}</h3>
                <p className="mt-1.5 flex-1 text-sm text-muted dark:text-slate-400">{short}</p>
                <Link to={`/services#${id}`} className="mt-4 flex items-center gap-1 text-sm font-semibold text-gold-ink hover:underline dark:text-zinc-300">
                  Learn more
                  <LuArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-9 text-center">
          <Link
            to={CONFIG.viewAllPath}
            className="inline-flex rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-ink dark:bg-linear-to-b dark:from-zinc-100 dark:to-zinc-400 dark:text-night dark:hover:from-white dark:hover:to-zinc-300"
          >
            {CONFIG.viewAllLabel}
          </Link>
        </div>
      </Container>
    </section>
  )
}
