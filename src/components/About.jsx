import {
  FaCheckCircle,
  FaRocket,
  FaChartLine,
  FaBullseye,
  FaGlobe,
  FaLightbulb,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 lg:py-24  from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* LEFT IMAGE */}
          <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto">

            <img
              src="/images/about.jpg"
              alt="Digital Marketing Team"
              className="
      w-full
      h-[280px]
      sm:h-[360px]
      md:h-[420px]
      lg:h-[500px]
      xl:h-[560px]
      object-cover
      rounded-3xl
      shadow-2xl
      transition-all
      duration-500
      hover:scale-[1.02]
    "
            />

          </div>

          {/* RIGHT CONTENT */}
          <div className="text-left">

            <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
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

            <div className="py-14 px-4">
              <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">

                {/* Card 1 */}
                <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
                  <h2 className="text-4xl font-bold text-blue-600">50+</h2>
                  <p className="text-gray-500 mt-2">Projects</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
                  <h2 className="text-4xl font-bold text-blue-600">100+</h2>
                  <p className="text-gray-500 mt-2">Clients</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
                  <h2 className="text-4xl font-bold text-blue-600">99%</h2>
                  <p className="text-gray-500 mt-2">Satisfaction</p>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
