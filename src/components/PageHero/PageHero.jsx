import { Link } from 'react-router-dom'
import { LuChevronRight } from 'react-icons/lu'
import Container from '../Container/Container'

// Title banner at the top of every inner page.
export default function PageHero({ title, subtitle }) {
  return (
    <section className="border-b border-line bg-surface-2/60 dark:bg-night-card">
      <Container className="py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted dark:text-slate-400">
          <Link to="/" className="hover:text-gold-ink dark:hover:text-white">
            Home
          </Link>
          <LuChevronRight size={14} aria-hidden="true" />
          <span aria-current="page" className="font-medium text-ink dark:text-white">
            {title}
          </span>
        </nav>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl dark:text-white">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-lg text-muted dark:text-slate-300">{subtitle}</p>}
      </Container>
    </section>
  )
}
