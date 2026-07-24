import Hero from "../components/home/Hero";
import Companies from "../components/home/Companies";
import About from "../components/home/About";
import Certifications from "../components/home/Certifications";
import Services from "../components/home/Services";
import WhyChoose from "../components/home/WhyChoose";
import Portfolio from "../components/home/Portfolio";
import Pricing from "../components/home/Pricing";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import CTA from "../components/home/CTA";
import Blog from "../components/home/Blog";
import Contact from "../components/home/Contact";
import Map from "../components/home/Map";

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <About />
      <Certifications />
      <Services />
      <WhyChoose />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Blog />
      <Contact />
      <Map />
    </>
  );
}
