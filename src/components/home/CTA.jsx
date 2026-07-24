import { FaArrowRight, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-xl p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-100">
                Let's Grow Together
              </span>

              <h2 className="mt-5 text-3xl md:text-4xl font-bold leading-tight text-white">
                Ready To Grow
                <br />
                Your Business?
              </h2>

              <p className="mt-4 text-blue-100 leading-7">
                Grow your business with SEO, Google Ads, Social Media Marketing
                and Website Development. Let's discuss your project today.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {/* Get Started */}
              <a
                href="#contact"
                className="flex h-11 w-full sm:w-40 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-blue-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Get Started
                <FaArrowRight className="text-xs" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919016441913?text=Hello%20Multimedia%20Marketing,%20I%20need%20Digital%20Marketing%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-full sm:w-40 items-center justify-center gap-2 rounded-lg border-2 border-white px-5 text-sm font-semibold text-white transition-all duration-300 hover:border-green-500 hover:bg-green-500"
              >
                <FaWhatsapp className="text-base" />
                WhatsApp
              </a>

              {/* Call Now */}
              <a
                href="tel:+919016441913"
                className="flex h-11 w-full sm:w-40 items-center justify-center gap-2 rounded-lg border-2 border-white px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-700"
              >
                <FaPhoneAlt className="text-sm" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
