import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LuEye, LuEyeOff, LuKeyRound, LuLogIn, LuUserRound, LuLoaderCircle } from 'react-icons/lu'

const CONFIG = {
  background: 'https://res.cloudinary.com/fhsrf5ps/image/upload/v1794594799/silvermechlogindoor.webp',
  fallbackColor: '#1b1a5c', // shown while the image loads
  fontHref: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap',
  fontFamily: "'Poppins', system-ui, sans-serif",

  usernameLabel: 'Username',
  usernamePlaceholder: 'Username or email',
  passwordLabel: 'Password',
  passwordPlaceholder: 'Enter your password',
  rememberLabel: 'Remember me',
  forgotLabel: 'Forgot password ?',
  forgotPath: '/forgot-password',
  submitLabel: 'Login',
  submittingLabel: 'Signing in…',
  emptyError: 'Enter your username and password.',
  // Shown after a valid submit until the backend exists. Replace with real handling in onSubmit.
  notConnectedNotice: 'Sign-in is not connected to the backend yet.',
  rememberStorageKey: 'portfolio_remembered_id', // only the username is remembered, never the password
}

/* ---------- small helpers ---------- */

const readRemembered = () => {
  try {
    return localStorage.getItem(CONFIG.rememberStorageKey) || ''
  } catch {
    return ''
  }
}
const writeRemembered = (value) => {
  try {
    if (value) localStorage.setItem(CONFIG.rememberStorageKey, value)
    else localStorage.removeItem(CONFIG.rememberStorageKey)
  } catch {
    /* storage unavailable – ignore */
  }
}

/* ---------- shared style tokens (change colours / sizes here) ---------- */

const pillBorder = 'border-2 border-black/35 transition-colors hover:border-black/65'
const pillButton =
  'flex w-full items-center justify-center gap-2 rounded-full bg-transparent font-semibold text-black whitespace-nowrap ' +
  `${pillBorder} hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-60`

/* ---------- field with a label "notched" into a pill outline ---------- */

function Field({ id, label, icon: IconComponent, endAdornment, ...inputProps }) {
  const Icon = IconComponent
  return (
    <fieldset className={`m-0 flex w-full min-w-0 items-center rounded-full px-[18px] pb-0 pt-0 focus-within:!border-black ${pillBorder}`} > <legend className="ml-3 px-1 text-[0.8rem] font-medium leading-none text-black"> <label htmlFor={id}>{label}</label> </legend> <Icon size={18} className="shrink-0 text-black" aria-hidden="true" /> <span aria-hidden="true" className="mx-3 h-5 w-px shrink-0 bg-black/40" /> <input id={id} className="min-w-0 flex-1 bg-transparent py-[13px] text-[0.95rem] text-black outline-none placeholder:text-black/55" {...inputProps} /> {endAdornment} </fieldset>
  )
}

function Alert({ tone = 'error', children }) {
  if (!children) return null
  const styles =
    tone === 'error'
      ? 'border-[#c1121f]/60 bg-white/60 text-[#7a0c14]'
      : 'border-black/30 bg-white/60 text-black'
  return (
    <p role={tone === 'error' ? 'alert' : 'status'} className={`rounded-2xl border px-4 py-3 text-sm ${styles}`}>
      {children}
    </p>
  )
}

/* ---------- the page ---------- */

export default function Login() {
  const [identifier, setIdentifier] = useState(readRemembered)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(() => Boolean(readRemembered()))
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setNotice('')
    if (!identifier.trim() || !password) return setError(CONFIG.emptyError)

    setLoading(true)
    // TODO(backend): replace this block with the real login request, e.g.
    //   const { token } = await api('/auth/login', { identifier, password, remember })
    // then store the token and navigate to the dashboard. Nothing is sent anywhere right now.
    await new Promise((resolve) => setTimeout(resolve, 900))
    writeRemembered(remember ? identifier.trim() : '')
    setLoading(false)
    setNotice(CONFIG.notConnectedNotice)
  }

  return (
    <>
      <link rel="stylesheet" href={CONFIG.fontHref} precedence="default" />
      <main
        className="flex min-h-dvh items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-8 text-black sm:px-6"
        style={{
          backgroundColor: CONFIG.fallbackColor,
          backgroundImage: `url(${CONFIG.background})`,
          fontFamily: CONFIG.fontFamily,
          paddingBottom: 'max(2rem, env(safe-area-inset-bottom))',
        }}
      >
        <section className="w-full max-w-[30rem] px-5 py-7 sm:px-9 sm:py-8" aria-labelledby="login-title">
          <h1 id="login-title" className="sr-only">
            Login
          </h1>
          <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
            <Alert>{error}</Alert>
            <Alert tone="info">{notice}</Alert>

            <Field id="login-identifier" label={CONFIG.usernameLabel} icon={LuUserRound} type="text" placeholder={CONFIG.usernamePlaceholder} value={identifier} onChange={(e) => setIdentifier(e.target.value)} autoComplete="username" autoFocus aria-invalid={Boolean(error) && !identifier.trim()} />

            <Field id="login-password" label={CONFIG.passwordLabel} icon={LuKeyRound} type={showPassword ? 'text' : 'password'} placeholder={CONFIG.passwordPlaceholder} value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" aria-invalid={Boolean(error) && !password} endAdornment={ <button type="button" onClick={() => setShowPassword((v) => !v)} aria-label={showPassword ? 'Hide password' : 'Show password'} aria-pressed={showPassword} className="-mr-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-black hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-black" > {showPassword ? <LuEye size={20} aria-hidden="true" /> : <LuEyeOff size={20} aria-hidden="true" />} </button> } />

            <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2">
              <label className={`flex h-11 w-full cursor-pointer select-none items-center justify-between gap-2 rounded-full pl-4 pr-4 text-[0.95rem] font-medium text-black/55 hover:bg-black/5 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-black ${pillBorder}`}> <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="h-4 w-4 shrink-0 accent-black" /> <span className="flex-1 whitespace-nowrap text-center">{CONFIG.rememberLabel}</span> <LuUserRound className="h-5 w-5 shrink-0" aria-hidden="true" /> </label>

              <Link to={CONFIG.forgotPath} className={`${pillButton} h-11 text-[0.95rem] !no-underline !text-black/55`}>
                <LuKeyRound size={18} aria-hidden="true" />
                {CONFIG.forgotLabel}
              </Link>
            </div>

            <button type="submit" disabled={loading} aria-busy={loading} className={`${pillButton} h-11 text-[0.95rem]`}>
              {loading ? (
                <LuLoaderCircle size={20} className="animate-spin" aria-hidden="true" />
              ) : (
                <LuLogIn size={20} aria-hidden="true" />
              )}
              {loading ? CONFIG.submittingLabel : CONFIG.submitLabel}
            </button>
          </form>
        </section>
      </main>
    </>
  )
}
