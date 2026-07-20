import {
  Routes,
  Route,
} from "react-router-dom";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import About from "./components/About";
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
import WhatsApp from "./components/WhatsApp";
import BackToTop from "./components/BackToTop";
// import DarkMode from "./components/DarkMode";

// Blog Pages
import DigitalMarketingGuide from "./pages/DigitalMarketingGuide";
// import SeoTips from "./pages/SeoTips";
// import GoogleAdsVsFacebookAds from "./pages/GoogleAdsVsFacebookAds";

function HomePage() {
  return (
    <>
      <Loader />

      <Navbar />
      <Hero />
      <Companies />
      <About />
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
      <Footer />
      <WhatsApp />
      <BackToTop />
      {/* <DarkMode /> */}
    </>
  );
}

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route
      path="/blog/digital-marketing-guide-2026"
      element={<DigitalMarketingGuide />}
      />

      {/* <Route
        path="/blog/seo-tips"
        element={<SeoTips />}
      />

      <Route
        path="/blog/google-ads-vs-facebook-ads"
        element={<GoogleAdsVsFacebookAds />}
      /> */}

    </Routes>
  );
}