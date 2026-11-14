import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Topbar from '../Topbar/Topbar'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

// Scroll to the top on a new page, or to the section when the link has #something
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

// Wraps every normal page with the top bar, navbar and footer.
export default function Layout() {
  return (
    <div className="min-h-dvh bg-canvas font-body text-ink antialiased dark:bg-night dark:text-slate-200">
      <ScrollToTop />
      <Topbar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
