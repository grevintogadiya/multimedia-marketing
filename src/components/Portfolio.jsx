import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Website",
    category: "Website Development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  },
  {
    title: "Google Ads Campaign",
    category: "Performance Marketing",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    title: "Social Media Branding",
    category: "Social Media",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
  },
  {
    title: "SEO Optimization",
    category: "SEO",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800",
  },
  {
    title: "Business Branding",
    category: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
  },
  {
    title: "Marketing Dashboard",
    category: "Analytics",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Our Recent Projects
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Explore some of our successful digital marketing and web development projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-6">

                <p className="text-blue-600 font-semibold">
                  {project.category}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {project.title}
                </h3>

                <button className="mt-6 flex items-center gap-2 text-blue-600 font-semibold">
                  View Project
                  <FaExternalLinkAlt />
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}