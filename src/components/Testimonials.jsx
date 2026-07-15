import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Patel",
    company: "E-Commerce Business",
    review:
      "Multimedia Marketing helped us increase our online sales by 300% with Google Ads and SEO.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Shah",
    company: "Fashion Brand",
    review:
      "Professional team with amazing creativity. Our social media engagement doubled within 3 months.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Mehta",
    company: "IT Company",
    review:
      "Excellent website development and performance marketing services. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold mt-3">
            What Our Clients Say
          </h2>

          <p className="text-gray-500 mt-5">
            Trusted by businesses across different industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="flex gap-1 text-yellow-400 mb-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-600 leading-7">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4 mt-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-blue-600">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}