import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import AboutUs from "@/components/AboutUs/AboutUs";
import Services from "@/components/Services/Services";
import Appointment from "@/components/Appointment/Appointment";
import ContactUs from "@/components/ContactUs/ContactUs";
import LocationSection from "@/components/LocationSection/LocationSection";
import Footer from "@/components/Footer/Footer";
import CookieBanner from "@/components/ui/cookie-banner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Appointment />
        <ContactUs />
        <LocationSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
