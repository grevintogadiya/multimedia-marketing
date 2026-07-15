import { SiHubspot, SiShopify, SiMeta } from "react-icons/si";
import { FaGoogle, FaWordpress, FaPalette } from "react-icons/fa";

export default function Companies() {
  const companies = [
    { name: "Google", icon: <FaGoogle className="text-4xl sm:text-5xl text-red-500" /> },
    { name: "Meta", icon: <SiMeta className="text-4xl sm:text-5xl text-blue-600" /> },
    { name: "HubSpot", icon: <SiHubspot className="text-4xl sm:text-5xl text-orange-500" /> },
    { name: "Shopify", icon: <SiShopify className="text-4xl sm:text-5xl text-green-600" /> },
    { name: "WordPress", icon: <FaWordpress className="text-4xl sm:text-5xl text-sky-600" /> },
    { name: "Canva", icon: <FaPalette className="text-4xl sm:text-5xl text-cyan-500" /> },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-gray-900">
          Trusted Platforms
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full"
            >
              <div className="flex items-center justify-center h-12 sm:h-16">
                {company.icon}
              </div>
              <p className="mt-2 sm:mt-4 font-semibold text-xs sm:text-sm md:text-base text-gray-800 text-center whitespace-nowrap">
                {company.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}