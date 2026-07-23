import {
  FaGoogle,
  FaFacebook,
  FaWordpress,
} from "react-icons/fa";
import {
  SiHubspot,
  SiShopify,
} from "react-icons/si";

export default function Companies() {
  const companies = [
    {
      name: "Google",
      icon: <FaGoogle className="text-5xl text-red-500" />,
    },
    {
      name: "Meta",
      icon: <FaFacebook className="text-5xl text-blue-600" />,
    },
    {
      name: "HubSpot",
      icon: <SiHubspot className="text-5xl text-orange-500" />,
    },
    {
      name: "Shopify",
      icon: <SiShopify className="text-5xl text-green-600" />,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20">

      {/* Background Blur */}
      <div className="absolute -top-20 left-10 h-56 w-56 rounded-full bg-blue-100 blur-3xl opacity-50"></div>

      <div className="absolute -bottom-20 right-10 h-56 w-56 rounded-full bg-indigo-100 blur-3xl opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-blue-600">
            Trusted Platforms
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            We Work With Industry Leaders
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            We use trusted marketing and business platforms to deliver
            measurable growth for every client.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

          {companies.map((company, index) => (

            <div
              key={index}
              className="group rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-md p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
            >

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 transition group-hover:scale-110">
                {company.icon}
              </div>

              <h3 className="mt-6 text-center text-xl font-semibold text-gray-900">
                {company.name}
              </h3>

              <p className="mt-2 text-center text-sm text-gray-500">
                Certified Marketing Platform
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}