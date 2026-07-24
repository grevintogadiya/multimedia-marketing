import { FaChartLine, FaUsers, FaClock, FaHeadset } from "react-icons/fa";
import ServiceCard from "../card/ServiceCard";
import SectionHeader from "../common/SectionHeader";

const feature = [
  {
    icon: <FaChartLine />,
    title: "Results Driven",
    desc: "We focus on real business growth with measurable ROI.",
  },
  {
    icon: <FaUsers />,
    title: "Expert Team",
    desc: "Certified professionals in SEO, Ads and Social Media.",
  },
  {
    icon: <FaClock />,
    title: "Fast Delivery",
    desc: "Projects completed on time with premium quality.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Always available to help your business succeed.",
  },
];

export default function WhyChoose() {
  return (
    <section className=" bg-gradient-to-b from-blue-50 to-white pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <SectionHeader
          badge="Why Choose Us"
          title="Why Businesses Trust Multimedia Marketing"
          description="We combine creativity, technology, and data-driven strategies to help your business grow faster."
        />
        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {feature.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
