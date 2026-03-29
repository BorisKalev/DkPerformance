import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AboutUs from './components/AboutUs/AboutUs'
import Services from './components/Services/Services'
import Gallery from './components/Gallery/Gallery'
import Appointment from './components/Appointment/Appointment'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer/Footer'
import CookieBanner from './components/ui/cookie-banner'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Gallery />
        <Appointment />
        <ContactUs />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
