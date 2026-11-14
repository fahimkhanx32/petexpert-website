import { Link } from 'react-router-dom'
import { LuHouse, LuPawPrint } from 'react-icons/lu'
import Container from '../Container/Container'

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-24 text-center">
      <LuPawPrint size={48} className="text-gold-ink dark:text-zinc-300" aria-hidden="true" />
      <h1 className="mt-5 font-display text-4xl font-semibold text-ink dark:text-white">Page not found</h1>
      <p className="mt-3 max-w-md text-muted dark:text-slate-300">The page you are looking for does not exist or has moved.</p>
      <Link to="/" className="mt-7 flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:brightness-110 dark:bg-linear-to-b dark:from-zinc-100 dark:to-zinc-400 dark:text-night dark:hover:from-white dark:hover:to-zinc-300">
        <LuHouse size={18} aria-hidden="true" />
        Back to home
      </Link>
    </Container>
  )
}
