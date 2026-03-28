import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AboutUs from './components/AboutUs/AboutUs'
import Services from './components/Services/Services'
import Gallery from './components/Gallery/Gallery'
import Appointment from './components/Appointment/Appointment'
import Footer from './components/Footer/Footer'

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
      </main>
      <Footer />
    </>
  )
}
