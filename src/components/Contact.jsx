import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
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
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white py-24"
    >
      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-blue-600">
            Contact Us
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Let's Build Something Amazing Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Whether you need SEO, Google Ads, Website Development or
            complete Digital Marketing solutions, our team is ready to
            help your business grow.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div className="rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-10 text-white shadow-2xl">

            <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-md">
              Let's Connect
            </span>

            <h3 className="mt-6 text-4xl font-bold">
              Get In Touch
            </h3>

            <p className="mt-5 leading-8 text-blue-100">
              Have questions about our services?
              We'd love to understand your goals and help you
              grow your business online.
            </p>

            <div className="mt-10 space-y-5">

              {/* Phone */}

              <div className="flex items-center gap-5 rounded-2xl bg-white/10 p-5 backdrop-blur-md transition duration-300 hover:bg-white/20">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-blue-600 shadow-lg">
                  <FaPhoneAlt className="text-xl" />
                </div>

                <div>
                  <p className="text-sm text-blue-100">
                    Phone Number
                  </p>

                  <h4 className="text-lg font-semibold">
                    +91 9016441913
                  </h4>
                </div>

              </div>

              {/* Email */}

              <div className="flex items-center gap-5 rounded-2xl bg-white/10 p-5 backdrop-blur-md transition duration-300 hover:bg-white/20">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-blue-600 shadow-lg">
                  <FaEnvelope className="text-xl" />
                </div>

                <div>
                  <p className="text-sm text-blue-100">
                    Email Address
                  </p>

                  <h4 className="text-lg font-semibold break-all">
                    gtmarketing5300@gmail.com
                  </h4>
                </div>

              </div>

              {/* Address */}

              <div className="flex items-center gap-5 rounded-2xl bg-white/10 p-5 backdrop-blur-md transition duration-300 hover:bg-white/20">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-blue-600 shadow-lg">
                  <FaMapMarkerAlt className="text-xl" />
                </div>

                <div>
                  <p className="text-sm text-blue-100">
                    Office Location
                  </p>

                  <h4 className="text-lg font-semibold">
                    Surat, Gujarat, India
                  </h4>
                </div>

              </div>

              {/* Office Hours */}

              <div className="flex items-center gap-5 rounded-2xl bg-white/10 p-5 backdrop-blur-md transition duration-300 hover:bg-white/20">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-blue-600 shadow-lg">
                  <FaClock className="text-xl" />
                </div>

                <div>
                  <p className="text-sm text-blue-100">
                    Working Hours
                  </p>

                  <h4 className="text-lg font-semibold">
                    Mon - Sat : 9:00 AM - 7:00 PM
                  </h4>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE START */}

          <div className="rounded-3xl border border-gray-100 bg-white p-10 shadow-2xl">

            <h3 className="text-3xl font-bold text-gray-900">
              Send Us a Message
            </h3>

            <p className="mt-3 text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-8 space-y-6"
            >
              {/* Name */}
              <input
                type="text"
                name="user_name"
                placeholder="Your Full Name"
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-700 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              {/* Email */}
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                onInput={(e) => {
                  e.target.value = e.target.value
                    .replace(/\s/g, "")
                    .replace(/[^a-zA-Z0-9@._-]/g, "");
                }}
                className="w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-700 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              {/* Phone */}
              <div className="flex">

                <div className="flex items-center rounded-l-xl border border-r-0 border-gray-300 bg-gray-100 px-4 font-semibold text-gray-700">
                  🇮🇳 +91
                </div>

                <input
                  type="tel"
                  name="user_phone"
                  placeholder="Phone Number"
                  required
                  maxLength={10}
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  onInput={(e) => {
                    e.target.value = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);
                  }}
                  className="w-full rounded-r-xl border border-gray-300 px-5 py-4 text-gray-700 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />

              </div>

              {/* Service */}
              <select
                name="service"
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-700 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              >
                <option value="">Select a Service</option>
                <option>SEO</option>
                <option>Google Ads</option>
                <option>Social Media Marketing</option>
                <option>Website Development</option>
                <option>Performance Marketing</option>
                <option>Email Marketing</option>
                <option>Content Marketing</option>
                <option>Branding & Design</option>
              </select>

              {/* Message */}
              <textarea
                rows="6"
                name="message"
                placeholder="Tell us about your project..."
                required
                className="w-full resize-none rounded-xl border border-gray-300 px-5 py-4 text-gray-700 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <FaPaperPlane />
                Send Message
              </button>

              <p className="text-center text-sm text-gray-500">
                🔒 Your information is secure and will never be shared with third parties.
              </p>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}