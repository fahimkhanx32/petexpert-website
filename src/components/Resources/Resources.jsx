import { LuArrowRight, LuCalendarCheck, LuCircleHelp, LuClipboardList, LuNewspaper, LuChevronDown } from 'react-icons/lu'
import PageHero from '../PageHero/PageHero'
import Container from '../Container/Container'
import { hideBroken } from '../../config/site'

// TODO: replace the example posts, guides and answers with the clinic's own content.
const CONFIG = {
  heroTitle: 'Resources',
  heroSubtitle: 'Guides, schedules and answers for pet parents.',
  posts: [
    { title: 'Getting your puppy ready for its first vet visit', date: 'Coming soon', image: '/images/blog/post-1.webp' },
    { title: 'Five signs your cat may need a checkup', date: 'Coming soon', image: '/images/blog/post-2.webp' },
    { title: 'Keeping your pet cool and safe in the Dhaka summer', date: 'Coming soon', image: '/images/blog/post-3.webp' },
  ],
  // General guide only – the vet adjusts it for each pet.
  schedule: {
    note: 'This is a general guide. Your vet will adjust it for your pet’s age, health and lifestyle.',
    rows: [
      { age: '6 – 8 weeks', dog: 'First combination vaccine', cat: 'First combination vaccine (from 8 weeks)' },
      { age: '10 – 12 weeks', dog: 'Booster combination vaccine', cat: 'Booster combination vaccine' },
      { age: '14 – 16 weeks', dog: 'Final puppy booster and rabies', cat: 'Final kitten booster and rabies' },
      { age: 'Every year', dog: 'Yearly booster and rabies as advised', cat: 'Yearly booster and rabies as advised' },
    ],
  },
  guides: [
    { title: 'New puppy guide', text: 'Feeding, toilet training, vaccines and first-week tips.' },
    { title: 'New kitten guide', text: 'Litter, food, play and when to visit the vet.' },
    { title: 'Bird care basics', text: 'Cage setup, diet and signs of illness to watch for.' },
  ],
  faqs: [
    { q: 'Do I need an appointment?', a: 'Appointments are best so we can give your pet full attention, but we will always do our best to see urgent cases.' },
    { q: 'What should I bring to the first visit?', a: 'Bring any vaccine records, past medical notes and a list of the food and medicines your pet takes.' },
    { q: 'Do you treat emergencies?', a: 'Yes. Call us straight away so the team can prepare for your arrival.' },
    { q: 'Which pets do you treat?', a: 'Dogs, cats, birds, rabbits and many other pets. Call us if you are unsure about your pet.' },
    { q: 'How often should my pet have a checkup?', a: 'Once a year for healthy adults, and every six months for puppies, kittens and senior pets.' },
  ],
}

const sectionTitle = 'flex items-center gap-3 font-display text-3xl font-semibold text-ink dark:text-white'
const iconClass = 'text-gold-ink dark:text-zinc-300'

export default function Resources() {
  return (
    <>
      <PageHero title={CONFIG.heroTitle} subtitle={CONFIG.heroSubtitle} />

      <Container className="flex flex-col gap-16 py-14 sm:gap-20 sm:py-20">
        {/* Blog */}
        <section id="blog" className="scroll-mt-28">
          <h2 className={sectionTitle}>
            <LuNewspaper className={iconClass} aria-hidden="true" />
            Blog
          </h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CONFIG.posts.map(({ title, date, image }) => (
              <li key={title} className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card dark:shadow-none dark:border-white/10 dark:bg-night-card">
                <div className="aspect-video bg-sage dark:bg-white/5">
                  <img src={image} alt="" onError={hideBroken} className="size-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <p className="text-xs text-muted dark:text-slate-400">{date}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-ink dark:text-white">{title}</h3>
                  <p className="mt-3 flex items-center gap-1 text-sm font-semibold text-gold-ink dark:text-zinc-300">
                    Read more <LuArrowRight size={15} aria-hidden="true" />
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Vaccination schedule */}
        <section id="vaccination-schedule" className="scroll-mt-28">
          <h2 className={sectionTitle}>
            <LuCalendarCheck className={iconClass} aria-hidden="true" />
            Vaccination schedule
          </h2>
          <p className="mt-2 text-muted dark:text-slate-300">{CONFIG.schedule.note}</p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-line dark:border-white/10">
            <table className="w-full min-w-[34rem] text-left text-sm">
              <thead className="bg-surface-2 text-ink dark:bg-white/10 dark:text-white">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Age</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Dogs</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Cats</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line dark:divide-white/10">
                {CONFIG.schedule.rows.map(({ age, dog, cat }) => (
                  <tr key={age} className="text-ink/90 dark:text-slate-300">
                    <th scope="row" className="px-4 py-3 font-semibold text-ink dark:text-white">{age}</th>
                    <td className="px-4 py-3">{dog}</td>
                    <td className="px-4 py-3">{cat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pet care guides */}
        <section id="pet-care-guides" className="scroll-mt-28">
          <h2 className={sectionTitle}>
            <LuClipboardList className={iconClass} aria-hidden="true" />
            Pet care guides
          </h2>
          <ul className="mt-6 grid gap-5 md:grid-cols-3">
            {CONFIG.guides.map(({ title, text }) => (
              <li key={title} className="rounded-2xl border border-line p-6 dark:border-white/10 dark:bg-night-card">
                <h3 className="font-display text-lg font-semibold text-ink dark:text-white">{title}</h3>
                <p className="mt-2 text-sm text-muted dark:text-slate-300">{text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQs */}
        <section id="faqs" className="scroll-mt-28">
          <h2 className={sectionTitle}>
            <LuCircleHelp className={iconClass} aria-hidden="true" />
            FAQs
          </h2>
          <div className="mt-6 divide-y divide-line rounded-2xl border border-line dark:divide-white/10 dark:border-white/10">
            {CONFIG.faqs.map(({ q, a }) => (
              <details key={q} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink dark:text-white [&::-webkit-details-marker]:hidden">
                  {q}
                  <LuChevronDown size={20} className="shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-3 text-muted dark:text-slate-300">{a}</p>
              </details>
            ))}
          </div>
        </section>
      </Container>
    </>
  )
}
