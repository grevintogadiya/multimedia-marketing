import { FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    title: "10 SEO Tips to Rank Higher on Google",
    date: "July 2026",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800",
  },
  {
    title: "Google Ads vs Facebook Ads: Which is Better?",
    date: "July 2026",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    title: "Social Media Marketing Trends 2026",
    date: "July 2026",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-600 uppercase font-semibold">
            Latest Blog
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Digital Marketing Insights
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Stay updated with the latest SEO, Google Ads and Social Media Marketing strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
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

                <h3 className="text-2xl font-bold mt-3">
                  {blog.title}
                </h3>

                <button className="mt-6 flex items-center gap-2 text-blue-600 font-semibold">
                  Read More
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}