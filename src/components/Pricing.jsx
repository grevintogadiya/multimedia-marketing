import { FaCheck } from "react-icons/fa";

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
    featured: false,
  },
  {
    name: "Professional",
    price: "₹24,999",
    description: "Best For Growing Businesses",
    features: [
      "Google Ads",
      "Advanced SEO",
      "Social Media Management",
      "Website Optimization",
      "Weekly Report",
      "Priority Support",
    ],
    featured: true,
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
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase">
            Pricing Plans
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Choose Your Plan
          </h2>

          <p className="text-gray-500 mt-5">
            Affordable packages for every business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 shadow-lg transition hover:-translate-y-2 ${
                plan.featured
                  ? "bg-blue-600 text-white"
                  : "bg-white"
              }`}
            >
              <h3 className="text-3xl font-bold">
                {plan.name}
              </h3>

              <p className="mt-2 opacity-80">
                {plan.description}
              </p>

              <h2 className="text-5xl font-bold mt-8">
                {plan.price}
              </h2>

              <ul className="mt-8 space-y-4">

                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <FaCheck />
                    {feature}
                  </li>
                ))}

              </ul>

              <button
                className={`mt-10 w-full py-3 rounded-xl font-semibold ${
                  plan.featured
                    ? "bg-white text-blue-600"
                    : "bg-blue-600 text-white"
                }`}
              >
                Get Started
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}