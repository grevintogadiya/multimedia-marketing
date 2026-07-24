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
import ServiceCard from "../card/ServiceCard";
import SectionHeader from "../common/SectionHeader";

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
    <section
      id="Services"
      className="bg-gradient-to-b from-white to-blue-50 py-24 from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Our Services"
          title="Digital Marketing Solutions"
          description="Everything your business needs to grow online under one roof."
        />

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
