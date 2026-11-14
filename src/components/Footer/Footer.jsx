
import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  LuClock,
  LuMail,
  LuMapPin,
  LuPhone,
  LuHeadset,
  LuChevronRight,
  LuPawPrint,
  LuSend,
} from 'react-icons/lu'

import Container from '../Container/Container'

import {
  BRANCHES,
  PET_HEALTH,
  SERVICES,
  SITE,
  SOCIALS,
} from '../../config/site'

// Footer Configuration
const CONFIG = {
  about:
    'Veterinary care for dogs, cats, birds and more – wellness exams, vaccinations, dental care, surgery, diagnostics and emergency care.',

  quickLinks: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Team', to: '/about#our-team' },
    { label: 'Services', to: '/services' },
    { label: 'Blog', to: '/resources#blog' },
    { label: 'Contact Us', to: '/contact' },
  ],

  newsletterTitle: 'Newsletter',
  newsletterText: 'Pet health tips, updates and special offers.',

  notConnectedNotice:
    'Newsletter sign-up is not connected to the backend yet.',
}

// Reusable Styles
const headingClass =
  'flex items-center gap-3 font-display text-lg font-bold text-ink dark:text-white'

const linkClass =
  'group flex items-center gap-3 text-sm text-slate-700 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-cyan-400'

const iconClass =
  'shrink-0 text-primary transition-transform group-hover:translate-x-1 dark:text-cyan-400'

export default function Footer() {
  // Newsletter State
  const [email, setEmail] = useState('')
  const [notice, setNotice] = useState('')

  // Newsletter Submit Handler
  const onSubmit = (e) => {
    e.preventDefault()

    if (!email.trim()) return

    // TODO: Connect newsletter backend API
    setNotice(CONFIG.notConnectedNotice)
    setEmail('')
  }

  return (
    <footer className="overflow-hidden border-t border-sky-100 bg-gradient-to-b from-white to-sky-50/60 dark:border-white/10 dark:from-night dark:to-night-card">

      {/* =========================
          MAIN FOOTER
      ========================== */}

      <Container className="py-10 lg:py-12">

        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-[1.7fr_0.85fr_0.85fr_0.95fr_1.15fr] lg:gap-7">

          {/* BRAND SECTION */}

          <div>
            <Link
              to="/"
              aria-label={`${SITE.name} home`}
              className="flex items-center gap-3"
            >
              <img
                src={SITE.logo}
                alt={`${SITE.name} logo`}
                className="size-20 shrink-0 rounded-full border-2 border-sky-100 object-cover dark:border-white/20"
              />

              <div>
                <h2 className="font-display text-xl font-bold leading-tight text-ink dark:text-white">
                  {SITE.name}
                </h2>

                <div className="mt-3 h-0.5 w-28 bg-gradient-to-r from-cyan-500 to-transparent" />
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {CONFIG.about}
            </p>

            {/* SOCIAL LINKS */}

            <ul className="mt-5 flex flex-wrap gap-2.5">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex size-8 items-center justify-center rounded-full border border-sky-200 bg-sky-50 text-primary transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white dark:border-white/20 dark:bg-white/5 dark:text-cyan-400 dark:hover:bg-cyan-500 dark:hover:text-white"
                  >
                    <Icon size={19} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}

          <nav aria-label="Quick links">
            <h3 className={headingClass}>
              <LuPawPrint
                className="text-primary dark:text-cyan-400"
                size={27}
              />
              Quick Links
            </h3>

            <div className="mb-5 mt-3 h-0.5 w-24 bg-gradient-to-r from-cyan-500 to-transparent" />

            <ul className="space-y-4">
              {CONFIG.quickLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className={linkClass}>
                    <LuChevronRight size={17} className={iconClass} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* OUR SERVICES */}

          <nav aria-label="Our services">
            <h3 className={headingClass}>
              <LuPawPrint
                className="text-primary dark:text-cyan-400"
                size={27}
              />
              Our Services
            </h3>

            <div className="mb-5 mt-3 h-0.5 w-24 bg-gradient-to-r from-cyan-500 to-transparent" />

            <ul className="space-y-4">
              {SERVICES.map(({ id, title }) => (
                <li key={id}>
                  <Link
                    to={`/services#${id}`}
                    className={linkClass}
                  >
                    <LuChevronRight size={17} className={iconClass} />
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* PET HEALTH */}

          <nav aria-label="Pet health">
            <h3 className={headingClass}>
              <LuPawPrint
                className="text-primary dark:text-cyan-400"
                size={27}
              />
              Pet Health
            </h3>

            <div className="mb-5 mt-3 h-0.5 w-24 bg-gradient-to-r from-cyan-500 to-transparent" />

            <ul className="space-y-4">
              {PET_HEALTH.map(({ id, title }) => (
                <li key={id}>
                  <Link
                    to={`/pet-health#${id}`}
                    className={linkClass}
                  >
                    <LuChevronRight size={17} className={iconClass} />
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CONTACT US */}

          <div>
            <h3 className={headingClass}>
              <LuHeadset
                className="text-primary dark:text-cyan-400"
                size={35}
              />
              Contact Us
            </h3>

            <div className="mb-5 mt-3 h-0.5 w-24 bg-gradient-to-r from-cyan-500 to-transparent" />

            <ul className="space-y-2">

              {/* PHONE NUMBERS */}

              {SITE.phones.map((phone) => (
                <li key={phone.href}>
                  <a
                    href={phone.href}
                    className="flex items-center gap-3 rounded-xl border border-sky-100 bg-sky-50/90 px-3 py-3 text-sm text-slate-700 shadow-sm transition-all hover:border-cyan-300 hover:bg-sky-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                  >
                    <LuPhone
                      size={22}
                      className="shrink-0 text-primary dark:text-cyan-400"
                    />

                    <span>{phone.label}</span>
                  </a>
                </li>
              ))}

              {/* EMAIL */}

              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 rounded-xl border border-sky-100 bg-sky-50/90 px-3 py-3 text-sm text-slate-700 shadow-sm transition-all hover:border-cyan-300 hover:bg-sky-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                >
                  <LuMail
                    size={22}
                    className="shrink-0 text-primary dark:text-cyan-400"
                  />

                  <span className="break-all">
                    {SITE.email}
                  </span>
                </a>
              </li>

              {/* OPENING HOURS */}

              <li className="flex items-start gap-3 rounded-xl border border-sky-100 bg-sky-100/70 px-3 py-3 text-sm text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
                <LuClock
                  size={25}
                  className="mt-0.5 shrink-0 text-primary dark:text-cyan-400"
                />

                <span>
                  {SITE.hours.map((hour) => (
                    <span key={hour} className="block leading-6">
                      {hour}
                    </span>
                  ))}
                </span>
              </li>

            </ul>
          </div>

        </div>
      </Container>

      {/* =========================
          BRANCH ADDRESSES
      ========================== */}

      <div className="border-t border-sky-200/80 dark:border-white/10">

        <Container className="py-7">

          {/* ADDRESS HEADING */}

          <div className="relative mb-7 flex items-center justify-center">

            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

            <div className="relative flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-white shadow-md dark:bg-cyan-800">
              <LuMapPin size={21} />

              <h3 className="font-display text-lg font-bold">
                Addresses
              </h3>
            </div>

          </div>

          {/* BRANCH LIST */}

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">

            {BRANCHES.map((branch, index) => (
              <div
                key={branch.id}
                className={`flex items-start gap-4 ${
                  index === 0
                    ? 'md:border-r md:border-sky-200 md:pr-8 dark:md:border-white/15'
                    : 'md:pl-1'
                }`}
              >
                <LuMapPin size={24} strokeWidth={1.8} className="mt-0.5 shrink-0 text-primary dark:text-cyan-400" />

                <div>
                  <h4 className="font-semibold text-ink dark:text-white">
                    {branch.name}:
                  </h4>

                  <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {branch.address}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </Container>
      </div>

      {/* =========================
          COPYRIGHT & NEWSLETTER
      ========================== */}

      <div className="border-t border-sky-100 dark:border-white/10">

        <Container className="flex flex-col items-start justify-between gap-4 py-5 md:flex-row md:items-center">

          {/* COPYRIGHT */}

          <p className="text-sm text-muted dark:text-slate-400">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>

          {/* NEWSLETTER FORM */}

          <form
            onSubmit={onSubmit}
            className="w-full md:max-w-md"
          >

            <label
              htmlFor="newsletter-email"
              className="sr-only"
            >
              {CONFIG.newsletterTitle}
            </label>

            <div className="flex gap-2">

              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setNotice('')
                }}
                autoComplete="email"
                placeholder={`${CONFIG.newsletterTitle}: your email`}
                required
                className="min-w-0 flex-1 rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm outline-hidden focus:border-gold-ink focus:ring-2 focus:ring-gold/40 dark:border-white/20 dark:bg-night dark:text-white dark:focus:border-zinc-300 dark:focus:ring-zinc-300/25"
              />

              <button
                type="submit"
                className="flex shrink-0 items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-ink dark:bg-cyan-700 dark:hover:bg-cyan-600"
              >
                <LuSend size={16} aria-hidden="true" />
                Subscribe
              </button>

            </div>

            {/* NEWSLETTER STATUS */}

            <p
              role="status"
              className="mt-1.5 min-h-5 text-xs text-muted dark:text-slate-400"
            >
              {notice || CONFIG.newsletterText}
            </p>

          </form>

        </Container>
      </div>

    </footer>
  )
}
