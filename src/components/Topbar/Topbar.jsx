import { Link } from 'react-router-dom'
import { LuLogIn, LuPhone } from 'react-icons/lu'
import Container from '../Container/Container'
import { ThemeToggle } from '../ThemeChanger/Theme'
import { SITE, SOCIALS } from '../../config/site'

// Left: phone + social icons. Right: Light/Dark switch + Login button.
export default function Topbar() {
  return (
    <div className="bg-primary text-white dark:border-b dark:border-white/10 dark:bg-night-card">
      <Container className="flex items-center justify-between gap-3 py-2">
        <div className="flex min-w-0 items-center gap-4">
          <a href={SITE.phones[0].href} className="flex items-center gap-2 whitespace-nowrap text-xs font-semibold hover:underline sm:text-sm">
            <LuPhone size={16} aria-hidden="true" />
            {SITE.phones[0].label}
          </a>
          <a href={SITE.phones[1].href} className="hidden items-center gap-2 whitespace-nowrap text-sm font-semibold hover:underline lg:flex">
            <LuPhone size={16} aria-hidden="true" />
            {SITE.phones[1].label}
          </a>

          {/* On phones the social icons live inside the hamburger menu */}
          <ul className="hidden items-center gap-1 md:flex">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex size-8 items-center justify-center rounded-full transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white">
                  <Icon size={15} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <Link to="/login" className="flex items-center gap-1.5 rounded-full border border-white/50 px-3.5 py-1.5 text-sm font-semibold transition-colors hover:bg-canvas hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:hover:text-night">
            <LuLogIn size={16} aria-hidden="true" />
            Login
          </Link>
        </div>
      </Container>
    </div>
  )
}
