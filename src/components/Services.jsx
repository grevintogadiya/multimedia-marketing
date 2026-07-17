import {
  FaSearch,
  FaBullhorn,
  FaLaptopCode,
  FaChartLine,
  FaPalette,
  FaMobileAlt,
  FaEnvelope,
  FaEdit,
} from "react-icons/fa";

const services = [
  {
    icon: <FaSearch className="text-5xl text-blue-600" />,
    title: "SEO Optimization",
    description:
      "Improve your Google ranking, increase organic traffic, and generate quality leads with advanced SEO strategies.",
  },
  {
    icon: <FaBullhorn className="text-5xl text-blue-600" />,
    title: "Google Ads",
    description:
      "Run high-converting Google Ads campaigns that maximize ROI and drive targeted customers to your business.",
  },
  {
    icon: <FaMobileAlt className="text-5xl text-blue-600" />,
    title: "Social Media Marketing",
    description:
      "Build your brand and engage your audience on Instagram, Facebook, LinkedIn, and other social platforms.",
  },
  {
    icon: <FaLaptopCode className="text-5xl text-blue-600" />,
    title: "Website Development",
    description:
      "Create responsive, modern, and SEO-friendly websites designed to convert visitors into customers.",
  },
  {
    icon: <FaChartLine className="text-5xl text-blue-600" />,
    title: "Performance Marketing",
    description:
      "Generate more leads and sales with data-driven paid advertising and performance marketing campaigns.",
  },
  {
    icon: <FaEnvelope className="text-5xl text-blue-600" />,
    title: "Email Marketing",
    description:
      "Automate email campaigns, nurture leads, and increase customer retention with personalized email marketing.",
  },
  {
    icon: <FaEdit className="text-5xl text-blue-600" />,
    title: "Content Marketing",
    description:
      "Create high-quality blogs, website content, social media posts, and SEO articles that attract and convert customers.",
  },
  {
    icon: <FaPalette className="text-5xl text-blue-600" />,
    title: "Branding & Design",
    description:
      "Build a strong brand identity with professional logo design, brand guidelines, and eye-catching creatives.",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

              <button className="mt-8 text-blue-600 font-semibold hover:text-blue-800 transition">
                Learn More →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}