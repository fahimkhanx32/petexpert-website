import { LuHeart, LuMapPin, LuPhone, LuShieldCheck, LuStethoscope, LuUsers } from 'react-icons/lu'
import PageHero from '../PageHero/PageHero'
import Container from '../Container/Container'
import { BRANCHES, hideBroken, mapLink } from '../../config/site'

// TODO: replace the story, values and team below with the clinic's real details.
const CONFIG = {
  heroTitle: 'About Us',
  heroSubtitle: 'Caring for the pets of Dhaka, one family at a time.',
  story: {
    title: 'Our story',
    image: '/images/about-clinic.webp',
    paragraphs: [
      'Pet Expert – Dhaka is a veterinary clinic and treatment centre in Mohammadpur. We look after dogs, cats, birds and other pets with a full range of medical care.',
      'Our goal is simple: give every pet gentle, honest and modern care, and give every owner clear answers.',
    ],
  },
  values: [
    { icon: LuHeart, title: 'Compassion', text: 'Every pet is handled gently and treated like family.' },
    { icon: LuStethoscope, title: 'Expert care', text: 'Experienced veterinarians and modern equipment.' },
    { icon: LuShieldCheck, title: 'Honesty', text: 'Clear advice, clear costs and no unnecessary tests.' },
  ],
  team: [
    { name: 'Dr. Full Name', role: 'Veterinary Surgeon', photo: '/images/team/vet-1.webp' },
    { name: 'Dr. Full Name', role: 'Veterinary Physician', photo: '/images/team/vet-2.webp' },
    { name: 'Full Name', role: 'Veterinary Nurse', photo: '/images/team/vet-3.webp' },
    { name: 'Full Name', role: 'Clinic Manager', photo: '/images/team/vet-4.webp' },
  ],
}

export default function About() {
  return (
    <>
      <PageHero title={CONFIG.heroTitle} subtitle={CONFIG.heroSubtitle} />

      <section id="our-story" className="scroll-mt-28 py-14 sm:py-20">
        <Container className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="aspect-4/3 overflow-hidden rounded-3xl bg-sage dark:bg-white/5">
            <img src={CONFIG.story.image} alt="Pet Expert clinic" onError={hideBroken} className="size-full object-cover" loading="lazy" />
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl dark:text-white">{CONFIG.story.title}</h2>
            {CONFIG.story.paragraphs.map((p) => (
              <p key={p} className="mt-4 text-muted dark:text-slate-300">
                {p}
              </p>
            ))}
            <ul className="mt-7 grid gap-4 sm:grid-cols-3">
              {CONFIG.values.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <Icon size={24} className="text-gold-ink dark:text-zinc-300" aria-hidden="true" />
                  <h3 className="mt-2 font-display font-semibold text-ink dark:text-white">{title}</h3>
                  <p className="mt-1 text-sm text-muted dark:text-slate-400">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section id="our-team" className="scroll-mt-28 bg-surface-2 py-14 sm:py-20 dark:bg-night-card">
        <Container>
          <h2 className="flex items-center gap-3 font-display text-3xl font-semibold text-ink sm:text-4xl dark:text-white">
            <LuUsers className="text-gold-ink dark:text-zinc-300" aria-hidden="true" />
            Our team
          </h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CONFIG.team.map(({ name, role, photo }, i) => (
              <li key={i} className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card dark:shadow-none dark:border-white/10 dark:bg-night">
                <div className="aspect-square bg-sage dark:bg-white/5">
                  <img src={photo} alt="" onError={hideBroken} className="size-full object-cover" loading="lazy" />
                </div>
                <div className="p-4">
                  <p className="font-display font-semibold text-ink dark:text-white">{name}</p>
                  <p className="text-sm text-muted dark:text-slate-400">{role}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="our-branches" className="scroll-mt-28 py-14 sm:py-20">
        <Container>
          <h2 className="flex items-center gap-3 font-display text-3xl font-semibold text-ink sm:text-4xl dark:text-white">
            <LuMapPin className="text-gold-ink dark:text-zinc-300" aria-hidden="true" />
            Our branches
          </h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {BRANCHES.map((b) => (
              <li key={b.id} className="rounded-2xl border border-line p-6 dark:border-white/10 dark:bg-night-card">
                <h3 className="font-display text-xl font-semibold text-ink dark:text-white">{b.name}</h3>
                <p className="mt-2 text-muted dark:text-slate-300">{b.address}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
                  <a href={b.phones[0].href} className="flex items-center gap-1.5 text-gold-ink hover:underline dark:text-zinc-300">
                    <LuPhone size={16} aria-hidden="true" />
                    {b.phones[0].label}
                  </a>
                  <a href={mapLink(b.address)} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-gold-ink hover:underline dark:text-zinc-300">
                    <LuMapPin size={16} aria-hidden="true" />
                    Open in Google Maps
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}
