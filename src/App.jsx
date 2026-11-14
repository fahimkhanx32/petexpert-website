import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AppointmentProvider } from './components/BookAppointment/BookAppointment.jsx'
import Layout from './components/Layout/Layout.jsx'

import Banner from './components/Banner/Banner.jsx'
import Features from './components/Features/Features.jsx'
import ServiceCards from './components/ServiceCards/ServiceCards.jsx'
import AboutSection from './components/AboutSection/AboutSection.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import CtaBanner from './components/CtaBanner/CtaBanner.jsx'

import About from './components/About/About.jsx'
import Services from './components/Services/Services.jsx'
import PetHealth from './components/PetHealth/PetHealth.jsx'
import Resources from './components/Resources/Resources.jsx'
import Contact from './components/Contact/Contact.jsx'
import PageHero from './components/PageHero/PageHero.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import Login from './components/Login/Login.jsx'

// The home page is built from these sections, top to bottom. Reorder or remove any of them.
function Home() {
  return (
    <>
      <Banner />
      <Features />
      <ServiceCards />
      <AboutSection />
      <Testimonials />
      <CtaBanner />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppointmentProvider>
        <Routes>
          {/* Login is full screen, so it sits outside the Layout */}
          <Route path="/login" element={<Login />} />

          {/* Every other page gets the top bar, navbar and footer */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pet-health" element={<PetHealth />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/forgot-password" element={<PageHero title="Forgot password" subtitle="This page will be connected when the backend is ready." />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AppointmentProvider>
    </BrowserRouter>
  )
}

export default App
