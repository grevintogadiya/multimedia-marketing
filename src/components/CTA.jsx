import { FaArrowRight, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <p className="uppercase tracking-widest font-semibold text-blue-200">
              Let's Grow Together
            </p>

            <h2 className="text-4xl lg:text-6xl font-bold mt-4 leading-tight">
              Ready To Grow
              <br />
              Your Business?
            </h2>

            <p className="mt-6 text-lg text-blue-100 leading-8">
              We help businesses generate more leads, increase sales,
              and build a powerful online presence through Digital Marketing.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">

            {/* Get Free Consultation */}
            <a
              href="#contact"
              className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition duration-300"
            >
              Get Free Consultation
              <FaArrowRight />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919016441913?text=Hello%20Multimedia%20Marketing,%20I%20need%20Digital%20Marketing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-blue-700 transition duration-300"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            {/* Call Now */}
            <a
              href="tel:+919016441913"
              className="border-2 border-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-blue-700 transition duration-300"
            >
              <FaPhoneAlt />
              Call Now
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}