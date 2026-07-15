import {
  FaSearch,
  FaBullhorn,
  FaLaptopCode,
  FaChartLine,
  FaPalette,
  FaMobileAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaSearch className="text-5xl text-blue-600" />,
    title: "SEO Optimization",
    description:
      "Improve your Google ranking and get more organic traffic.",
  },
  {
    icon: <FaBullhorn className="text-5xl text-blue-600" />,
    title: "Google Ads",
    description:
      "Run high-converting Google Ads campaigns with better ROI.",
  },
  {
    icon: <FaMobileAlt className="text-5xl text-blue-600" />,
    title: "Social Media Marketing",
    description:
      "Grow your brand on Instagram, Facebook and LinkedIn.",
  },
  {
    icon: <FaLaptopCode className="text-5xl text-blue-600" />,
    title: "Website Development",
    description:
      "Responsive and modern websites for your business.",
  },
  {
    icon: <FaChartLine className="text-5xl text-blue-600" />,
    title: "Performance Marketing",
    description:
      "Generate leads and maximize sales with paid campaigns.",
  },
  {
    icon: <FaPalette className="text-5xl text-blue-600" />,
    title: "Branding & Design",
    description:
      "Professional logo, creatives and brand identity design.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase">
            Our Services
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Digital Marketing Solutions
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Everything your business needs to grow online under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-3 hover:shadow-2xl transition duration-300"
            >
              {service.icon}

              <h3 className="text-2xl font-bold mt-6">
                {service.title}
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                {service.description}
              </p>

              <button className="mt-8 text-blue-600 font-semibold">
                Learn More →
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}