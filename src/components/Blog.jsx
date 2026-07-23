import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    title: "10 SEO Tips to Rank Higher on Google",
    date: "July 2026",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800",
    slug: "seo-tips",
  },
  {
    title: "Google Ads vs Facebook Ads: Which is Better?",
    date: "July 2026",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    slug: "google-ads-vs-facebook-ads",
  },
  {
    title: "Digital Marketing Guide: Strategies for Success",
    date: "July 2026",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    slug: "digital-marketing-guide-2026",
  },
];

export default function Blog() {
  return (
    <section id="Blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Latest Blog
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Digital Marketing Insights
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Stay updated with the latest SEO, Google Ads,
            AI, Email Marketing and Social Media Marketing strategies.
          </p>
        </div>

        {/* Blog Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >

              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover hover:scale-105 transition duration-500"
              />

              <div className="p-6">

                <p className="text-blue-600 font-semibold">
                  {blog.date}
                </p>

                <h3 className="text-2xl font-bold mt-3 mb-4">
                  {blog.title}
                </h3>
                <Link
                  to={`/blog/${blog.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition"
                >
                  Read More
                  <FaArrowRight />
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}