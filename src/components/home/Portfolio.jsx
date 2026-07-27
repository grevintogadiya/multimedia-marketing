import { FaExternalLinkAlt } from "react-icons/fa";
import SectionHeader from "../common/SectionHeader";

const projects = [
  {
    title: "E-Commerce Website",
    category: "Website Development",
    description:
      "Designed and developed a modern e-commerce website with responsive layouts, secure payment integration, and an optimized shopping experience to boost online sales and customer satisfaction.",
    image: "/images/portfolio/E-Commerce.webp",
  },

  {
    title: "Google Ads Campaign",
    category: "Performance Marketing",
    description:
      "Executed high-performing Google Ads campaigns focused on lead generation, improved click-through rates, and maximizing return on advertising investment.",
    image: "/images/portfolio/Google Ads Campaign.webp",
  },
  {
    title: "Social Media Branding",
    category: "Social Media Marketing",
    description:
      "Created engaging social media strategies with eye-catching creatives, content planning, and audience engagement techniques to strengthen brand awareness.",
    image: "/images/portfolio/Social Media Branding.webp",
  },
  {
    title: "SEO Optimization",
    category: "Search Engine Optimization",
    description:
      "Implemented comprehensive SEO strategies including technical SEO, keyword research, on-page optimization, and content improvements to achieve higher search rankings.",
    image: "/images/portfolio/SEO Optimization.webp",
  },
  {
    title: "Business Branding",
    category: "Brand Identity",
    description:
      "Developed complete branding solutions including logo design, color palettes, typography, and marketing assets to create a strong and memorable business identity.",
    image: "/images/portfolio/Business Branding.webp",
  },
  {
    title: "Marketing Dashboard",
    category: "Analytics & Reporting",
    description:
      "Designed an interactive dashboard that provides real-time campaign analytics, conversion tracking, and performance insights for smarter business decisions.",
    image: "/images/portfolio/Marketing Dashboard.webp",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-gradient-to-r from-slate-50 via-white to-blue-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge="Portfolio"
          title="Our Recent Projects"
          description="Explore our portfolio of innovative websites, successful digital marketing campaigns, SEO strategies, branding solutions, and performance-driven projects that have helped businesses build a stronger online presence."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={index}
              className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category} Project by Multimedia Marketing`}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                  {project.category}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                  {project.description}
                </p>

                <div className="pt-6 pb-2">
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-100 px-5 py-3 text-sm font-semibold text-gray-500 cursor-not-allowed"
                  >
                    Coming Soon
                    <FaExternalLinkAlt className="text-xs" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
