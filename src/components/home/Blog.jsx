import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import SectionHeader from "../common/SectionHeader";

const blogs = [
  {
    title: "10 SEO Tips to Rank Higher on Google",
    date: "July 2026",
    image: "/images/blog/blog-seo.webp",
    slug: "seo-tips",
  },
  {
    title: "Google Ads vs Facebook Ads: Which is Better?",
    date: "July 2026",
    image: "/images/blog/blog-google-ads.webp",
    slug: "google-ads-vs-facebook-ads",
  },
  {
    title: "Digital Marketing Guide: Strategies for Success",
    date: "July 2026",
    image: "/images/blog/blog-digital-marketing.webp",
    slug: "digital-marketing-guide-2026",
  },
];

export default function Blog() {
  return (
    <section
      id="Blog"
      className="bg-gradient-to-b from-white to-blue-50 py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <SectionHeader
          badge="Latest Blog"
          title="Digital Marketing Insights"
          description="Stay updated with the latest SEO, Google Ads, AI, Email Marketing and Social Media Marketing strategies."
        />

        {/* Blog Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={blog.image}
                alt={`${blog.title} | Digital Marketing Blog by Multimedia Marketing`}
                loading="lazy"
                decoding="async"
                width={800}
                height={500}
                className="w-full h-64 object-cover hover:scale-105 transition duration-500"
              />

              <div className="p-6">
                <p className="text-blue-600 font-semibold">{blog.date}</p>

                <h3 className="text-2xl font-bold mt-3 mb-4">{blog.title}</h3>
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
