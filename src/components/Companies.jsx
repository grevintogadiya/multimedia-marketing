import { FaGoogle, FaWordpress, FaPalette } from "react-icons/fa";
import { SiHubspot, SiShopify } from "react-icons/si";

export default function Companies() {
  const companies = [
    {
      name: "Google",
      icon: <FaGoogle className="text-4xl sm:text-5xl text-red-500" />,
    },
    {
      name: "Meta",
      icon: <FaPalette className="text-4xl sm:text-5xl text-blue-600" />,
    },
    {
      name: "HubSpot",
      icon: <SiHubspot className="text-4xl sm:text-5xl text-orange-500" />,
    },
    {
      name: "Canva",
      icon: <FaPalette className="text-4xl sm:text-5xl text-cyan-500" />,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-gray-900">
          Trusted Platforms
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">

          {companies.map((company, index) => (
            <div
              key={index}
              className="
              bg-gray-100 
              rounded-2xl 
              p-4 sm:p-6 
              flex 
              flex-col 
              items-center 
              justify-center 
              hover:shadow-lg 
              hover:-translate-y-1 
              transition-all 
              duration-300
              "
            >

              <div className="h-12 sm:h-16 flex items-center justify-center">
                {company.icon}
              </div>

              <p className="mt-3 font-semibold text-sm sm:text-base text-gray-800">
                {company.name}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}