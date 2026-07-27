import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>
          Multimedia Marketing | Digital Marketing & Web Development Agency
        </title>

        <meta
          name="description"
          content="Multimedia Marketing provides SEO, Website Development, Google Ads, Social Media Marketing, Branding and Business Growth solutions."
        />

        <meta
          name="keywords"
          content="Digital Marketing, SEO, Website Development, Google Ads, Social Media Marketing, Branding, Web Design, Web Development"
        />

        <link rel="canonical" href="https://multimedia-marketing.vercel.app/" />

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Multimedia Marketing",
            image: "https://multimedia-marketing.vercel.app/logo.png",
            url: "https://multimedia-marketing.vercel.app",
            telephone: "+91 9016441913",
            email: "gtmarketing5300@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Surat",
              addressRegion: "Gujarat",
              postalCode: "394101",
              addressCountry: "IN",
            },
            openingHours: "Mo-Sa 09:00-19:00",
            areaServed: "India",
            sameAs: ["https://www.instagram.com/__multimedia_marketing"],
          })}
        </script>

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Multimedia Marketing",
            url: "https://multimedia-marketing.vercel.app",
            logo: "https://multimedia-marketing.vercel.app/logo.png",
            email: "gtmarketing5300@gmail.com",
            telephone: "+91 9016441913",
            sameAs: ["https://www.instagram.com/__multimedia_marketing"],
          })}
        </script>

        {/* Website Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Multimedia Marketing",
            url: "https://multimedia-marketing.vercel.app",
            inLanguage: "en",
            publisher: {
              "@type": "Organization",
              name: "Multimedia Marketing",
            },
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What services do you provide?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We provide SEO, Google Ads, Social Media Marketing, Website Development, Branding, Performance Marketing, UI/UX Design and complete digital marketing solutions for businesses of all sizes.",
                },
              },
              {
                "@type": "Question",
                name: "How long does SEO take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "SEO typically starts showing measurable results within 3–6 months depending on your website, competition, and industry.",
                },
              },
              {
                "@type": "Question",
                name: "Do you build responsive websites?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Every website we develop is fully responsive, mobile-friendly, fast, secure and optimized for search engines.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide monthly reports?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. We provide detailed monthly reports including rankings, traffic, leads, conversions and campaign performance.",
                },
              },
              {
                "@type": "Question",
                name: "Can I contact you anytime?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Our support team is always available to answer your questions and help you whenever required.",
                },
              },
            ],
          })}
        </script>

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Digital Marketing Services",
            provider: {
              "@type": "Organization",
              name: "Multimedia Marketing",
              url: "https://multimedia-marketing.vercel.app",
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            description:
              "Professional digital marketing, website development, SEO, Google Ads, social media marketing, branding, email marketing, content marketing, and performance marketing services.",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Our Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "SEO Optimization",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Google Ads",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Social Media Marketing",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Website Development",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Performance Marketing",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Email Marketing",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Content Marketing",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Branding & Design",
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>

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
