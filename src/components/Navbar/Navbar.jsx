import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LuCalendarPlus, LuChevronDown, LuHouse, LuInfo, LuMenu, LuPhone, LuStethoscope, LuHeartPulse, LuLibrary, LuX } from 'react-icons/lu'
import Container from '../Container/Container'
import { useAppointment } from '../BookAppointment/BookAppointment'
import { ABOUT_LINKS, PET_HEALTH, RESOURCES, SERVICES, SITE, SOCIALS } from '../../config/site'

// Every menu item (and its dropdown) is listed here – edit this list to change the menu.
const MENU = [
  { label: 'Home', to: '/', icon: LuHouse },
  { label: 'About Us', to: '/about', icon: LuInfo, children: ABOUT_LINKS.map((i) => ({ label: i.title, to: `/about#${i.id}`, icon: i.icon })) },
  { label: 'Services', to: '/services', icon: LuStethoscope, children: SERVICES.map((i) => ({ label: i.title, to: `/services#${i.id}`, icon: i.icon })) },
  { label: 'Pet Health', to: '/pet-health', icon: LuHeartPulse, children: PET_HEALTH.map((i) => ({ label: i.title, to: `/pet-health#${i.id}`, icon: i.icon })) },
  { label: 'Resources', to: '/resources', icon: LuLibrary, children: RESOURCES.map((i) => ({ label: i.title, to: `/resources#${i.id}`, icon: i.icon })) },
  { label: 'Contact Us', to: '/contact', icon: LuPhone },
]

const primaryButton =
  'flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-ink dark:bg-linear-to-b dark:from-zinc-100 dark:to-zinc-400 dark:text-night dark:hover:from-white dark:hover:to-zinc-300'

const desktopLink = ({ isActive }) =>
  `flex items-center gap-1 border-b-2 py-2 text-[0.95rem] font-medium transition-colors ${
    isActive ? 'border-gold-ink text-ink dark:border-zinc-200 dark:text-zinc-300' : 'border-transparent text-ink hover:text-gold-ink dark:text-slate-200 dark:hover:text-white'
  }`

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState('')
  const { openAppointment } = useAppointment()

  const closeMobile = () => {
    setMobileOpen(false)
    setOpenGroup('')
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur dark:border-white/10 dark:bg-night/95">
      <Container className="flex items-center justify-between gap-4 py-2.5">
        {/* Logo */}
        <Link to="/" onClick={closeMobile} className="flex items-center gap-3" aria-label={`${SITE.name} home`}>
          <img src={SITE.logo} alt="" className="size-12 rounded-full object-cover ring-1 ring-line dark:ring-white/20" />
          <span className="font-display text-lg font-semibold leading-tight text-ink dark:text-white">
            Pet Expert
            {/* <span className="block text-sm font-medium text-gold-ink dark:text-zinc-300">Dhaka</span> */}
          </span>
        </Link>

        {/* Desktop menu */}
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {MENU.map((item) => (
            <div key={item.label} className="group relative">
              <NavLink to={item.to} end={item.to === '/'} className={desktopLink}>
                {item.label}
                {item.children && <LuChevronDown size={15} className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true" />}
              </NavLink>

              {item.children && (
                <div className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-2 opacity-0 transition duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="rounded-xl border border-line bg-surface p-2 shadow-xl dark:border-white/10 dark:bg-night-card">
                    {item.children.map(({ label, to, icon: Icon }) => (
                      <li key={label}>
                        <Link
                          to={to}
                          onClick={(e) => e.currentTarget.blur()}
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-sage hover:text-gold-ink dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
                        >
                          <Icon size={18} className="shrink-0 text-gold-ink dark:text-zinc-300" aria-hidden="true" />
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" onClick={openAppointment} className={`${primaryButton} hidden sm:flex`}>
            <LuCalendarPlus size={18} aria-hidden="true" />
            Book Appointment
          </button>

          {/* Hamburger (phones and tablets) */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="flex size-11 items-center justify-center rounded-lg border border-line text-ink hover:bg-sage/70 focus-visible:outline-2 focus-visible:outline-gold-ink lg:hidden dark:border-white/25 dark:text-white dark:hover:bg-white/10"
          >
            {mobileOpen ? <LuX size={22} aria-hidden="true" /> : <LuMenu size={22} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu – every dropdown item has its own icon */}
      {mobileOpen && (
        <div id="mobile-menu" className="max-h-[calc(100dvh-8rem)] overflow-y-auto border-t border-line bg-surface lg:hidden dark:border-white/10 dark:bg-night">
          <Container className="flex flex-col gap-1 py-4">
            {MENU.map((item) => {
              const Icon = item.icon
              const isOpen = openGroup === item.label

              if (!item.children) {
                return (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    end={item.to === '/'}
                    onClick={closeMobile}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-3 py-3 font-medium ${isActive ? 'bg-sage text-ink dark:bg-white/10 dark:text-zinc-300' : 'text-ink hover:bg-sage/70 dark:text-slate-200 dark:hover:bg-white/10'}`
                    }
                  >
                    <Icon size={20} aria-hidden="true" />
                    {item.label}
                  </NavLink>
                )
              }

              return (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => setOpenGroup(isOpen ? '' : item.label)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-3 font-medium text-ink hover:bg-sage/70 dark:text-slate-200 dark:hover:bg-white/10"
                  >
                    <Icon size={20} aria-hidden="true" />
                    <span className="flex-1 text-left">{item.label}</span>
                    <LuChevronDown size={18} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>

                  {isOpen && (
                    <ul className="ml-5 border-l border-line pl-3 dark:border-white/15">
                      <li>
                        <Link to={item.to} onClick={closeMobile} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-gold-ink dark:text-zinc-300">
                          <Icon size={18} aria-hidden="true" />
                          All {item.label.toLowerCase()}
                        </Link>
                      </li>
                      {item.children.map(({ label, to, icon: ChildIcon }) => (
                        <li key={label}>
                          <Link to={to} onClick={closeMobile} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ink hover:bg-sage/70 dark:text-slate-200 dark:hover:bg-white/10">
                            <ChildIcon size={18} className="shrink-0 text-gold-ink dark:text-zinc-300" aria-hidden="true" />
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}

            <button
              type="button"
              onClick={() => {
                closeMobile()
                openAppointment()
              }}
              className={`${primaryButton} mt-3 w-full`}
            >
              <LuCalendarPlus size={18} aria-hidden="true" />
              Book Appointment
            </button>

            <ul className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {SOCIALS.map(({ label, href, icon: SocialIcon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex size-10 items-center justify-center rounded-full border border-line text-ink hover:bg-sage dark:border-white/25 dark:text-white dark:hover:bg-white/10">
                    <SocialIcon size={16} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </header>
  )
}
