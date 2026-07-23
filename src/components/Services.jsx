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
    icon: <FaSearch />,
    title: "SEO Optimization",
    description:
      "Improve your Google ranking, increase organic traffic, and generate quality leads with advanced SEO strategies.",
  },
  {
    icon: <FaBullhorn />,
    title: "Google Ads",
    description:
      "Run high-converting Google Ads campaigns that maximize ROI and drive targeted customers to your business.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Social Media Marketing",
    description:
      "Build your brand and engage your audience on Instagram, Facebook, LinkedIn, and other social platforms.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Website Development",
    description:
      "Create responsive, modern, and SEO-friendly websites designed to convert visitors into customers.",
  },
  {
    icon: <FaChartLine />,
    title: "Performance Marketing",
    description:
      "Generate more leads and sales with data-driven paid advertising and performance marketing campaigns.",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Marketing",
    description:
      "Automate email campaigns, nurture leads, and increase customer retention with personalized email marketing.",
  },
  {
    icon: <FaEdit />,
    title: "Content Marketing",
    description:
      "Create high-quality blogs, website content, social media posts, and SEO articles that attract and convert customers.",
  },
  {
    icon: <FaPalette />,
    title: "Branding & Design",
    description:
      "Build a strong brand identity with professional logo design, brand guidelines, and eye-catching creatives.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6"> 
        <div className="text-center mb-16"> 
          <p className="text-blue-600 font-semibold uppercase"> Our Services </p> 
          <h2 className="text-5xl font-bold mt-3"> Digital Marketing Solutions </h2> 
          <p className="text-gray-500 mt-5 max-w-2xl mx-auto"> Everything your business needs to grow online under one roof. </p> 
          </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >

              {/* SMALL ICON */}
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-100 text-blue-600 text-lg mb-4 group-hover:scale-110 transition">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">
                {service.title}
              </h3>

              {/* FULL DESCRIPTION */}
              <p className="text-gray-500 mt-3 text-sm leading-6">
                {service.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}