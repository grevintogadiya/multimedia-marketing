import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function FAQ() {
  const faqs = [
    {
      question: "What services do you provide?",
      answer:
        "We provide SEO, Google Ads, Social Media Marketing, Website Development, Branding, Performance Marketing, UI/UX Design and complete digital marketing solutions for businesses of all sizes.",
    },
    {
      question: "How long does SEO take?",
      answer:
        "SEO typically starts showing measurable results within 3–6 months depending on your website, competition, and industry.",
    },
    {
      question: "Do you build responsive websites?",
      answer:
        "Yes. Every website we develop is fully responsive, mobile-friendly, fast, secure and optimized for search engines.",
    },
    {
      question: "Do you provide monthly reports?",
      answer:
        "Absolutely. We provide detailed monthly reports including rankings, traffic, leads, conversions and campaign performance.",
    },
    {
      question: "Can I contact you anytime?",
      answer:
        "Yes. Our support team is always available to answer your questions and help you whenever required.",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section
      id="faq"
      className="bg-gradient-to-b from-white via-slate-50 to-white py-20"
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-slate-500">
            Find answers to the most common questions about our digital
            marketing and web development services.
          </p>

        </div>

        {/* FAQ */}

        <div className="space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = active === index;

            return (

              <div
                key={index}
                className={`group rounded-3xl border bg-white overflow-hidden transition-all duration-300
                ${
                  isOpen
                    ? "border-blue-500 shadow-xl shadow-blue-100"
                    : "border-slate-200 hover:border-blue-300 hover:shadow-lg hover:-translate-y-1"
                }`}
              >

                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >

                  <h3 className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300
                    ${
                      isOpen
                        ? "bg-blue-600 text-white rotate-45"
                        : "bg-blue-100 text-blue-600 group-hover:scale-110"
                    }`}
                  >
                    <FaPlus />
                  </div>

                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <div className="border-t border-slate-100 bg-slate-50 px-7 py-6 leading-8 text-slate-600">

                      {faq.answer}

                    </div>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}