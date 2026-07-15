import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQ() {
  const faqs = [
    {
      question: "What services do you provide?",
      answer:
        "We provide SEO, Google Ads, Social Media Marketing, Website Development, Branding and Performance Marketing.",
    },
    {
      question: "How long does SEO take?",
      answer:
        "SEO usually starts showing results in 3 to 6 months depending on competition and website quality.",
    },
    {
      question: "Do you build responsive websites?",
      answer:
        "Yes. Every website we build is fully responsive for mobile, tablet and desktop.",
    },
    {
      question: "Do you provide monthly reports?",
      answer:
        "Yes. Every client receives detailed monthly performance reports.",
    },
    {
      question: "Can I contact you anytime?",
      answer:
        "Yes, our support team is available to help you with your project.",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold uppercase">
            FAQ
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-500 mt-4">
            Everything you need to know about our services.
          </p>
        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md"
            >

              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                {active === index ? (
                  <FaMinus className="text-blue-600" />
                ) : (
                  <FaPlus className="text-blue-600" />
                )}

              </button>

              {active === index && (
                <div className="px-6 pb-6 text-gray-600 leading-7">
                  {faq.answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}