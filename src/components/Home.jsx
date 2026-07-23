import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}