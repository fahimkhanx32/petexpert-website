import { LuCalendarPlus, LuPawPrint } from 'react-icons/lu'
import Container from '../Container/Container'
import { useAppointment } from '../BookAppointment/BookAppointment'
import { hideBroken } from '../../config/site'

const CONFIG = {
  title: 'New to Pet Expert?',
  text: 'We can’t wait to meet you and your furry family member.',
  buttonLabel: 'Book Appointment',
  image: '/images/cta-dog.webp', // optional photo, shows on large screens
}

export default function CtaBanner() {
  const { openAppointment } = useAppointment()

  return (
    <section className="pb-14 sm:pb-20">
      <Container>
        <div className="relative flex flex-col items-start gap-5 overflow-hidden rounded-3xl bg-primary px-6 py-7 text-white sm:flex-row sm:items-center sm:justify-between sm:px-10 dark:bg-linear-to-r dark:from-zinc-500 dark:via-zinc-700 dark:to-night-card dark:ring-1 dark:ring-white/15">
          <div className="flex items-center gap-4">
            <LuPawPrint size={40} className="shrink-0" aria-hidden="true" />
            <div>
              <h2 className="font-display text-2xl font-semibold">{CONFIG.title}</h2>
              <p className="text-white/90">{CONFIG.text}</p>
            </div>
          </div>
          <img src={CONFIG.image} alt="" onError={hideBroken} className="absolute bottom-0 right-64 hidden h-28 xl:block" />
          <button
            type="button"
            onClick={openAppointment}
            className="flex items-center gap-2 rounded-lg bg-canvas px-5 py-3 font-semibold text-ink transition-colors hover:bg-sage focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:bg-linear-to-b dark:from-zinc-100 dark:to-zinc-400 dark:text-night dark:hover:from-white dark:hover:to-zinc-300"
          >
            <LuCalendarPlus size={20} aria-hidden="true" />
            {CONFIG.buttonLabel}
          </button>
        </div>
      </Container>
    </section>
  )
}
