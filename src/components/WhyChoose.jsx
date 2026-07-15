import {
  FaChartLine,
  FaUsers,
  FaClock,
  FaHeadset,
} from "react-icons/fa";

export default function WhyChoose() {
  const features = [
    {
      icon: <FaChartLine className="text-5xl text-blue-600" />,
      title: "Results Driven",
      desc: "We focus on real business growth with measurable ROI.",
    },
    {
      icon: <FaUsers className="text-5xl text-blue-600" />,
      title: "Expert Team",
      desc: "Certified professionals in SEO, Ads and Social Media.",
    },
    {
      icon: <FaClock className="text-5xl text-blue-600" />,
      title: "Fast Delivery",
      desc: "Projects completed on time with premium quality.",
    },
    {
      icon: <FaHeadset className="text-5xl text-blue-600" />,
      title: "24/7 Support",
      desc: "Always available to help your business succeed.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Why Businesses Trust Multimedia Marketing
          </h2>

          <p className="text-gray-500 mt-5 max-w-3xl mx-auto">
            We combine creativity, technology, and data-driven strategies
            to help your business grow faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-4">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}