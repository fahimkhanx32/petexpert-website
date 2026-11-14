import { LuCheck } from 'react-icons/lu'
import PageHero from '../PageHero/PageHero'
import Container from '../Container/Container'
import { PET_HEALTH } from '../../config/site'

const CONFIG = {
  heroTitle: 'Pet Health',
  heroSubtitle: 'Simple, practical advice to keep your pet well between visits.',
  disclaimer: 'This page is general advice only. If your pet seems unwell, please call us or book an appointment.',
}

export default function PetHealth() {
  return (
    <>
      <PageHero title={CONFIG.heroTitle} subtitle={CONFIG.heroSubtitle} />

      <Container className="py-14 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {PET_HEALTH.map(({ id, title, short, tips, icon: Icon }) => (
            <section key={id} id={id} className="scroll-mt-28 rounded-2xl border border-line bg-surface shadow-card dark:shadow-none p-6 sm:p-8 dark:border-white/10 dark:bg-night-card">
              <span className="flex size-12 items-center justify-center rounded-full bg-sage text-ink dark:bg-white/10 dark:text-zinc-300">
                <Icon size={24} aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-display text-2xl font-semibold text-ink dark:text-white">{title}</h2>
              <p className="mt-1 text-muted dark:text-slate-300">{short}</p>
              <ul className="mt-4 space-y-2">
                {tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2.5 text-sm text-ink/90 dark:text-slate-300">
                    <LuCheck size={17} className="mt-0.5 shrink-0 text-gold-ink dark:text-zinc-300" aria-hidden="true" />
                    {tip}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted dark:text-slate-400">{CONFIG.disclaimer}</p>
      </Container>
    </>
  )
}
