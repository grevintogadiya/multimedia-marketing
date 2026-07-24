import { FaCheck } from "react-icons/fa";
import SectionHeader from "../common/SectionHeader";

const plans = [
  {
    name: "Starter",
    price: "₹9,999",
    description: "Perfect for Small Businesses",
    features: [
      "Social Media Management",
      "10 Posts / Month",
      "Basic SEO",
      "Monthly Report",
    ],
  },
  {
    name: "Professional",
    price: "₹15,999",
    description: "Best For Growing Businesses",
    features: [
      "Google Ads",
      "Advanced SEO",
      "Social Media Management",
      "Website Optimization",
      "Weekly Report",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For Large Businesses",
    features: [
      "Complete Marketing",
      "Dedicated Manager",
      "Unlimited Campaigns",
      "Performance Marketing",
      "Brand Strategy",
      "24/7 Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="Pricing"
      className=" bg-gradient-to-b from-white to-slate-50 py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <SectionHeader
          badge="Pricing Plans"
          title="Choose Your Plan"
          description="Flexible pricing for every business."
        />

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-[1px]
              bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-transparent
              hover:from-blue-500 hover:via-purple-500 hover:to-blue-500
              transition duration-500"
            >
              {/* INNER CARD */}
              <div
                className="flex flex-col h-full rounded-3xl bg-white p-8 
              border border-gray-200
              group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.12)]
              hover:scale-[1.03]
              transition duration-500"
              >
                {/* TOP */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </h3>

                  <p className="text-gray-500 mt-2">{plan.description}</p>

                  <h2 className="text-4xl font-extrabold mt-6 text-gray-900">
                    {plan.price}
                  </h2>
                </div>

                {/* FEATURES */}
                <ul className="mt-6 space-y-4 flex-1">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <span className="bg-blue-50 p-1 rounded-full">
                        <FaCheck className="text-blue-600 text-xs" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* BUTTON */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="mt-8 block w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3 text-center font-semibold text-white transition hover:opacity-90"
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
