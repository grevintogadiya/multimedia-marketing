import { FaArrowRight, FaPlay } from "react-icons/fa";
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
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            {/* <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
              🚀 #1 Digital Marketing Agency
            </span> */}

            <h1 className="text-5xl lg:text-7xl font-bold mt-8 leading-tight text-gray-900">
              Digital Marketing Agency That{" "}
              <span className="text-blue-600">
                Helps Businesses Grow Online
              </span>
            </h1>

            <p className="text-gray-600 text-lg mt-8 leading-8">
              We help startups and businesses increase leads, sales and brand
              awareness using SEO, Google Ads, Social Media Marketing and
              Website Development.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">
              <button
                onClick={goToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300"
              >
                Get Started
                <FaArrowRight />
              </button>
              <button
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all duration-300"
              >
                <FaPlay className="text-xs" />
                Watch Demo
              </button>
            </div>

            {/* Counter */}
            <div className="mt-10 grid w-full max-w-2xl grid-cols-3 gap-3 sm:gap-4 md:gap-5">

              {/* Projects */}
              <div className="rounded-2xl border border-gray-100 bg-white p-3 sm:p-4 md:p-5 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600">
                  50+
                </h3>

                <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-gray-500">
                  Projects
                </p>
              </div>

              {/* Clients */}
              <div className="rounded-2xl border border-gray-100 bg-white p-3 sm:p-4 md:p-5 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600">
                  100+
                </h3>

                <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-gray-500">
                  Clients
                </p>
              </div>

              {/* Satisfaction */}
              <div className="rounded-2xl border border-gray-100 bg-white p-3 sm:p-4 md:p-5 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600">
                  99%
                </h3>

                <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-gray-500">
                  Satisfaction
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-2xl">

            {/* Background Glow */}
            <div className="absolute -top-6 -left-6 h-32 w-32 md:h-48 md:w-48 rounded-full bg-blue-500/20 blur-3xl -z-10"></div>

            <div className="absolute -bottom-6 -right-6 h-32 w-32 md:h-48 md:w-48 rounded-full bg-orange-400/20 blur-3xl -z-10"></div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">

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
                className="block w-full h-auto rounded-3xl transition-transform duration-500 hover:scale-105"
              />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}