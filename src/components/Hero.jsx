import { FaArrowRight, FaPlay, FaBriefcase, FaUsers, FaAward, FaSmile } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

export default function Hero() {

  const navigate = useNavigate();
  const location = useLocation();

  const goToContact = () => {
    if (location.pathname === "/") {
      document.querySelector("#contact")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/#contact");
    }
  };
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50"
    >
      <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 lg:pt-32 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT */}
          <div className="text-center lg:text-left">

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-5 py-2 shadow-lg backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>

              <span className="text-sm font-semibold text-gray-800">
                Trusted Digital Marketing Agency
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight text-gray-900">
              Digital Marketing Agency That{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Helps Businesses Grow Online
              </span>
            </h1>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-8 text-gray-600">
              We help startups and businesses increase leads, sales and brand
              awareness using SEO, Google Ads, Social Media Marketing and
              Website Development.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  goToContact();
                }}
                className="group inline-flex items-center w-full sm:w-auto justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30"
              >
                Get Started
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="https://www.youtube.com/@YOUR_CHANNEL_NAME"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center w-full sm:w-auto justify-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg"
              >
                <FaPlay className="text-sm transition-transform duration-300 group-hover:scale-110" />
                Watch Demo
              </a>
            </div>

            {/* Counter */}

            {/* <div className="py-14 px-4">
              <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6"> */}

            {/* Card 1
                <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
                  <h2 className="text-4xl font-bold text-blue-600">50+</h2>
                  <p className="text-gray-500 mt-2">Projects</p>
                </div> */}

            {/* Card 2 */}
            {/* <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
                  <h2 className="text-4xl font-bold text-blue-600">100+</h2>
                  <p className="text-gray-500 mt-2">Clients</p>
                </div>

                {/* Card 3 */}
            {/* <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
                  <h2 className="text-4xl font-bold text-blue-600">99%</h2>
                  <p className="text-gray-500 mt-2">Satisfaction</p>
                </div>  */}

            {/* </div>
            </div> */}
          </div>

          {/* RIGHT */}
          <div className="relative rounded-3xl border border-gray-200 shadow-xl">

            {/* Background Glow */}
            <div className="absolute -top-6 -left-6 h-32 w-32 md:h-48 md:w-48 rounded-full bg-blue-500/20 blur-3xl -z-10"></div>

            <div className="absolute -bottom-6 -right-6 h-32 w-32 md:h-48 md:w-48 rounded-full bg-orange-400/20 blur-3xl -z-10"></div>

            {/* Image */}
            <div className="block w-full h-auto rounded-3xl">

              <img
                src="/images/hero.webp"
                srcSet="
        /images/hero-768.webp 768w,
        /images/hero.webp 1200w
      "
                sizes="(max-width:768px) 100vw, 50vw"
                alt="Digital Marketing Agency"
                width={768}
                height={512}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="block w-full h-auto object-cover rounded-3xl"
              />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}