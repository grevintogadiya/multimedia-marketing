import { FaGoogle, FaFacebook } from "react-icons/fa";
import { SiHubspot, SiShopify } from "react-icons/si";

export default function Companies() {
  const companies = [
    {
      name: "Google",
      icon: <FaGoogle className="text-4xl sm:text-5xl text-red-500" />,
    },
    {
      name: "Meta",
      icon: <FaFacebook className="text-4xl sm:text-5xl text-blue-600" />,
    },
    {
      name: "HubSpot",
      icon: <SiHubspot className="text-4xl sm:text-5xl text-orange-500" />,
    },
    {
      name: "Shopify",
      icon: <SiShopify className="text-4xl sm:text-5xl text-green-600" />,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 to-slate-50 py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Background Blur */}
      <div className="absolute -top-20 left-10 h-40 w-40 sm:h-56 sm:w-56 rounded-full bg-blue-100 blur-3xl opacity-50"></div>

      <div className="absolute -bottom-20 right-10 h-40 w-40 sm:h-56 sm:w-56 rounded-full bg-indigo-100 blur-3xl opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[2px] sm:tracking-[3px] text-blue-600">
            Trusted Platforms
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            We Work With Industry Leaders
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base lg:text-lg text-gray-600 leading-7">
            We use trusted marketing and business platforms to deliver
            measurable growth for every client.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group rounded-2xl sm:rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-md p-5 sm:p-6 lg:p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
            >
              <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 transition group-hover:scale-110">
                {company.icon}
              </div>

              <h3 className="mt-4 sm:mt-6 text-center text-lg sm:text-xl font-semibold text-gray-900">
                {company.name}
              </h3>

              <p className="mt-2 text-center text-xs sm:text-sm text-gray-500 leading-6">
                Certified Marketing Platform
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
