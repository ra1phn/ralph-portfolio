import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Trust } from "./components/Trust";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Why } from "./components/Why";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { ContactForm } from "./components/ContactForm";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trust />
      <About />
      <Services />
      <Projects />
      <Why />
      <Pricing />
      <FAQ />
      <ContactForm />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
      <Analytics />
      <SpeedInsights />

    </>
  );
}

export default App;
