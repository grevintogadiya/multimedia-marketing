import {
  Routes,
  Route,
} from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Counter from "./components/Counter";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Footer from "./components/Footer";
// import WhatsApp from "./components/WhatsApp";
// import BackToTop from "./components/BackToTop";
import FloatingButtons from "./components/FloatingButtons";
// import DarkMode from "./components/DarkMode";

// Blog Pages
import DigitalMarketingGuide from "./pages/DigitalMarketingGuide";
import SeoTips from "./pages/SeoTips";
import GoogleAdsVsFacebookAds from "./pages/GoogleAdsVsFacebookAds";

function HomePage() {
  return (
    <>
      <Loader />

      <Navbar />

      <main>
        <Hero />
        <Companies />
        <About />
        <Certifications />
        <Services />
        <WhyChoose />
        <Counter />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
        <Blog />
        <Contact />
        <Map />
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/blog/digital-marketing-guide-2026"
          element={<DigitalMarketingGuide />}
        />

        <Route
          path="/blog/seo-tips"
          element={<SeoTips />}
        />

        <Route
          path="/blog/google-ads-vs-facebook-ads"
          element={<GoogleAdsVsFacebookAds />}
        />
      </Routes>
    </>
  );
}