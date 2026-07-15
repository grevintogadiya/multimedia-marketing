
import { FaArrowRight, FaPlay } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <span className="bg-blue-100 text-blue-600 px-5 py-2 rounded-full font-semibold">
              🚀 #1 Digital Marketing Agency
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold mt-8 leading-tight">

              Grow Your Business

              <span className="text-blue-600">

                {" "}With Digital Marketing

              </span>

            </h1>

            <p className="text-gray-600 text-lg mt-8 leading-8">

              We help startups and businesses
              increase leads, sales and brand awareness
              using SEO, Google Ads, Social Media
              and Website Development.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl flex items-center gap-3">

                Get Started

                <FaArrowRight/>

              </button>

              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl flex items-center gap-3">

                <FaPlay/>

                Watch Demo

              </button>

            </div>

            <div className="grid grid-cols-3 gap-8 mt-14">

              <div>

                <h2 className="text-4xl font-bold text-blue-600">
                  500+
                </h2>

                <p className="text-gray-500">
                  Projects
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-blue-600">
                  250+
                </h2>

                <p className="text-gray-500">
                  Clients
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-blue-600">
                  99%
                </h2>

                <p className="text-gray-500">
                  Satisfaction
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

           <img
  src="https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&auto=format&fit=crop&q=80"
  alt="Digital Marketing"
  className="w-full h-auto rounded-3xl"
/>

            <div className="absolute top-8 -left-8 bg-white shadow-xl rounded-2xl p-5">

              <h4 className="font-bold">
                Google Ads
              </h4>

              <p className="text-green-500">
                +350% ROI
              </p>

            </div>

            <div className="absolute bottom-10 -right-6 bg-white shadow-xl rounded-2xl p-5">

              <h4 className="font-bold">
                SEO Ranking
              </h4>

              <p className="text-blue-600">
                Top #1
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}