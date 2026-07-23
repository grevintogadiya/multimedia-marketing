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
    <section className="bg-white pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-5xl font-bold text-gray-900">
            Why Businesses Trust Multimedia Marketing
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-500">
            We combine creativity, technology, and data-driven strategies
            to help your business grow faster.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-gray-50 p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-500 leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}