import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}

          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              Multimedia Marketing
            </h2>

            <p className="mt-5 text-gray-400 leading-7">
              We help businesses grow through SEO, Google Ads,
              Social Media Marketing and Website Development.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:scale-110 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:scale-110 transition"
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-2xl font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Services */}

          <div>
            <h3 className="text-2xl font-bold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>SEO</li>
              <li>Google Ads</li>
              <li>Social Media</li>
              <li>Web Development</li>
              <li>Performance Marketing</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-2xl font-bold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">
              <p>📍 Surat, Gujarat</p>
              <p>📞 +91 9016441913</p>
              <p>📧 gtmarketing5300@gmail.com</p>
            </div>
          </div>

        </div>

      </div>

      <div className="border-t border-gray-700 py-6 text-center text-gray-400">
        © 2026 Multimedia Marketing. All Rights Reserved.
      </div>

    </footer>
  );
}