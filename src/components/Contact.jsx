import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_acwo52a",
      "template_s48atib",
      form.current,
      "4XyOmN3RGXZ8nwl8j"
    )
      .then(() => {
        alert("Message Sent Successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log("EmailJS Error:", error);
        alert(error.text || error.message);
      });
  };

  return (
    <section id="contact" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-600 uppercase font-semibold">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Let's Discuss Your Project
          </h2>

          <p className="text-gray-500 mt-5">
            Have a project in mind? Contact us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}

          <div className="bg-blue-600 text-white rounded-3xl p-10">

            <h3 className="text-3xl font-bold">
              Get In Touch
            </h3>

            <p className="mt-6 leading-8 text-blue-100">
              We'd love to hear about your business and help you grow with Digital Marketing.
            </p>

            <div className="space-y-8 mt-10">

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-2xl" />
                <span>+91 9016441913</span>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl" />
                <span>gtmarketing5300@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-2xl" />
                <span>Surat, Gujarat, India</span>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <form ref={form} onSubmit={sendEmail} className="space-y-6">

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full border rounded-xl px-5 py-4 outline-none focus:border-blue-600"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                onInput={(e) => {
                  e.target.value = e.target.value
                    .replace(/\s/g, "") // space remove
                    .replace(/[^a-zA-Z0-9@._-]/g, ""); // only valid email characters
                }}
                className="w-full border rounded-xl px-5 py-4 outline-none focus:border-blue-600"
              />

              <div className="flex">
                {/* Country Code */}
                <div className="flex items-center px-4 border border-r-0 rounded-l-xl bg-gray-100 text-gray-700 font-medium">
                  🇮🇳 +91
                </div>

                {/* Phone Number */}
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="Phone Number"
                  maxLength={10}
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
                  }}
                  className="w-full border rounded-r-xl px-5 py-4 outline-none focus:border-blue-600"
                  required
                />
              </div>

              <select
                className="w-full border rounded-xl px-5 py-4 outline-none focus:border-blue-600" name="service"
              >
                <option>Select Service</option>
                <option>SEO</option>
                <option>Google Ads</option>
                <option>Social Media Marketing</option>
                <option>Website Development</option>
                <option>Performance Marketing</option>
                <option>Email Marketing</option>
                <option>Content Marketing</option>
                <option>Branding & Design</option>
              </select>

              <textarea
                rows="5"
                placeholder="Your Message"
                name="message"
                className="w-full border rounded-xl px-5 py-4 outline-none focus:border-blue-600"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
