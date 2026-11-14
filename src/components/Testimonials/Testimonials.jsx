
import { useRef } from 'react'
import {
  LuChevronLeft,
  LuChevronRight,
  LuStar,
} from 'react-icons/lu'

import Container from '../Container/Container'
import { hideBroken } from '../../config/site'

// TODO: Replace example reviews with real client reviews.
const CONFIG = {
  eyebrow: 'Testimonials',
  title: 'What pet parents are saying',

  reviews: [
    {
      name: 'Client name',
      photo: '/images/avatars/client-1.webp',
      text: 'The team really cares about our pets. They explained everything clearly and were so gentle.',
    },
    {
      name: 'Client name',
      photo: '/images/avatars/client-2.webp',
      text: 'Professional, kind and always available when we need them.',
    },
    {
      name: 'Client name',
      photo: '/images/avatars/client-3.webp',
      text: 'Our dog has never been happier. Thanks to the whole team for their care.',
    },
    {
      name: 'Client name',
      photo: '/images/avatars/client-4.webp',
      text: 'Quick diagnosis and a clear treatment plan. We trust Pet Expert with our cat.',
    },
  ],
}

export default function Testimonials() {
  const trackRef = useRef(null)

  // Slide carousel
  const slide = (direction) => {
    const track = trackRef.current

    if (track) {
      track.scrollBy({
        left: direction * track.clientWidth * 0.9,
        behavior: 'smooth',
      })
    }
  }

  // Arrow styles
  const arrow =
    'flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-white text-ink shadow-md transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-white/20 dark:bg-zinc-200 dark:text-night dark:hover:bg-white'

  return (
    <section className="py-14 sm:py-20">
      <Container>

        {/* Section Heading */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold-ink dark:text-zinc-400">
            <span className="h-px w-8 bg-gold dark:bg-zinc-500" />
            {CONFIG.eyebrow}
            <span className="h-px w-8 bg-gold dark:bg-zinc-500" />
          </p>

          <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl dark:text-white">
            {CONFIG.title}
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative mt-8">

          {/* Left Arrow */}
          <button
            type="button"
            onClick={() => slide(-1)}
            aria-label="Previous reviews"
            className={`${arrow} absolute left-0 top-1/2 z-10 -translate-y-1/2`}
          >
            <LuChevronLeft size={22} aria-hidden="true" />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={() => slide(1)}
            aria-label="Next reviews"
            className={`${arrow} absolute right-0 top-1/2 z-10 -translate-y-1/2`}
          >
            <LuChevronRight size={22} aria-hidden="true" />
          </button>

          {/* Testimonials Track */}
          <ul
            ref={trackRef}
            className="mx-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {CONFIG.reviews.map(({ name, photo, text }, i) => (
              <li
                key={i}
                className="w-[88%] shrink-0 snap-start rounded-2xl border border-line bg-surface p-5 shadow-card dark:border-white/10 dark:bg-night-card dark:shadow-none sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]"
              >

                {/* Client Information */}
                <div className="flex items-center gap-3">

                  <span className="size-12 shrink-0 overflow-hidden rounded-full bg-sage">
                    <img
                      src={photo}
                      alt=""
                      onError={hideBroken}
                      className="size-full object-cover"
                      loading="lazy"
                    />
                  </span>

                  <div>
                    <p className="font-semibold text-ink dark:text-white">
                      {name}
                    </p>

                    {/* Star Rating */}
                    <div
                      className="flex gap-0.5 text-amber-500"
                      aria-label="5 out of 5 stars"
                    >
                      {[0, 1, 2, 3, 4].map((s) => (
                        <LuStar
                          key={s}
                          size={14}
                          className="fill-current"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>

                </div>

                {/* Review Text */}
                <p className="mt-4 text-sm leading-relaxed text-muted dark:text-slate-300">
                  “{text}”
                </p>

              </li>
            ))}
          </ul>

        </div>

      </Container>
    </section>
  )
}
