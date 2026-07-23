import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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
  {
    name: "Sneha Desai",
    company: "Real Estate",
    review:
      "Amazing SEO strategy. We now rank on the first page of Google.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Jay Shah",
    company: "Restaurant",
    review:
      "Creative social media campaigns brought many new customers.",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    name: "Neha Joshi",
    company: "Healthcare",
    review:
      "Professional website and outstanding support from the team.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            Trusted by businesses across different industries.
          </p>
        </div>

        <div className="relative">

          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            speed={800}
            grabCursor={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            spaceBetween={30}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>

                <div className="group h-full">

                  <div className="relative h-[370px] rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between overflow-hidden">

                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                    <div className="relative z-10">

                      <div className="flex justify-between items-center mb-6">

                        <div className="flex gap-1 text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                          ))}
                        </div>

                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <FaQuoteLeft className="text-blue-600" />
                        </div>

                      </div>

                      <p className="text-gray-600 leading-8 min-h-[100px]">
                        "{item.review}"
                      </p>

                    </div>

                    <div className="border-t pt-5 flex items-center gap-4">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-full border-2 border-blue-100"
                      />

                      <div>

                        <div className="flex items-center gap-2">
                          <h3 className="font-bold">
                            {item.name}
                          </h3>

                          <span className="rounded-full bg-green-100 px-2 py-1 text-[10px] font-semibold text-green-700">
                            VERIFIED
                          </span>
                        </div>

                        <p className="text-sm text-blue-600">
                          {item.company}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination mt-4 flex justify-center"></div>

        </div>

      </div>
    </section>
  );
}