import { FaCheckCircle, FaBullseye, FaRocket } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">

            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
              alt="About Multimedia Marketing"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[520px] object-cover rounded-3xl shadow-2xl"
            />

            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:-bottom-6 lg:-right-6 bg-blue-600 text-white rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl text-center min-w-[120px] sm:min-w-[140px]">

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                2+
              </h2>

              <p className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                Years Experience
              </p>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="text-left">

            <span className="text-blue-600 font-semibold uppercase tracking-widest text-xs sm:text-sm block">
              About Us
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 leading-tight">
              We Grow Businesses With{" "}
              <span className="text-blue-600 block sm:inline">
                Smart Digital Marketing
              </span>
            </h2>

            <p className="text-gray-600 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-7">
              Multimedia Marketing is a results-driven digital marketing
              agency. We help startups, local businesses and eCommerce
              brands grow with SEO, Google Ads, Social Media Marketing,
              Website Development and Performance Marketing.
            </p>

            {/* FEATURES */}
            <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">

              <div className="flex items-start gap-3 sm:gap-4">

                <FaCheckCircle className="text-blue-600 text-xl sm:text-2xl mt-1 shrink-0" />

                <div>

                  <h3 className="font-bold text-lg sm:text-xl">
                    Client First Strategy
                  </h3>

                  <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
                    Every campaign is designed to maximize ROI.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-3 sm:gap-4">

                <FaBullseye className="text-blue-600 text-xl sm:text-2xl mt-1 shrink-0" />

                <div>

                  <h3 className="font-bold text-lg sm:text-xl">
                    Performance Focused
                  </h3>

                  <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
                    Data-driven marketing decisions for measurable growth.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-3 sm:gap-4">

                <FaRocket className="text-blue-600 text-xl sm:text-2xl mt-1 shrink-0" />

                <div>

                  <h3 className="font-bold text-lg sm:text-xl">
                    Fast Business Growth
                  </h3>

                  <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
                    We build strategies that generate quality leads,
                    increase sales and grow your business online.
                  </p>

                </div>

              </div>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-12">

              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">

                <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">
                  50+
                </h3>

                <p className="text-gray-500 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">
                  Projects
                </p>

              </div>

              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">

                <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">
                  100+
                </h3>

                <p className="text-gray-500 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">
                  Clients
                </p>

              </div>

              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">

                <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">
                  98%
                </h3>

                <p className="text-gray-500 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">
                  Success Rate
                </p>

              </div>

              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">

                <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">
                  24/7
                </h3>

                <p className="text-gray-500 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">
                  Support
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}