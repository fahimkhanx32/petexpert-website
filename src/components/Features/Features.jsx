import { LuCpu, LuHeart, LuShieldCheck, LuStethoscope, LuUsers } from 'react-icons/lu'
import Container from '../Container/Container'

// The strip of highlights under the banner. Add, remove or reword items here.
const CONFIG = {
  items: [
    { icon: LuHeart, title: 'Compassionate Care', text: 'We treat every pet with kindness, respect, and personalized attention.' },
    { icon: LuStethoscope, title: 'Experienced Veterinarians', text: 'Our skilled team provides expert care for your pets at every stage of life.' },
    { icon: LuCpu, title: 'Advanced Technology', text: 'Modern diagnostic and treatment technology for accurate results and better outcomes.' },
    { icon: LuShieldCheck, title: 'Preventive Health', text: 'Wellness plans to keep your pet healthy and prevent future health issues.' },
    { icon: LuUsers, title: 'Trusted by Pet Parents', text: 'Proven by many pet parents in our community and their beloved pets.' },
  ],
}

export default function Features() {
  return (
    <section className="relative z-10 -mt-6 pb-4 sm:-mt-10">
      <Container>
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-slate-200 shadow-lg sm:grid-cols-2 lg:grid-cols-5 dark:border-white/10 dark:bg-white/10">
          {CONFIG.items.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex flex-col items-center bg-surface p-5 text-center dark:bg-night-card">
              <Icon size={32} className="text-gold-ink dark:text-zinc-300" aria-hidden="true" />
              <h3 className="mt-3 font-display text-base font-semibold text-ink dark:text-white">{title}</h3>
              <p className="mt-1.5 text-sm text-muted dark:text-slate-400">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
