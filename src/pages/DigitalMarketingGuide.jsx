import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaInstagram,
  FaGlobe,
  FaWhatsapp,
  FaArrowLeft,
} from "react-icons/fa";

import Navbar from "../components/layout/Navbar";

export default function DigitalMarketingGuide() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative h-[320px] sm:h-[400px] md:h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600"
            alt="Digital Marketing Guide 2026"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60 flex items-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 text-white w-full">
              {/* <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-4 py-2 sm:px-5 sm:py-3 rounded-lg font-semibold mb-5 sm:mb-8 text-sm sm:text-base hover:bg-blue-600 hover:text-white duration-300"
            >
              <FaArrowLeft />
              Back To Home
            </Link> */}

              <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight">
                Digital Marketing Guide 2026:
                <br />
                Strategies for Success
              </h1>

              <div className="flex flex-wrap gap-4 sm:gap-6 mt-4 sm:mt-6 text-sm sm:text-lg">
                <span className="flex items-center gap-2">
                  <FaCalendarAlt />
                  July 2026
                </span>

                <span className="flex items-center gap-2">
                  <FaClock />8 Min Read
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}

        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-20 bg-white shadow-xl rounded-2xl sm:rounded-3xl -mt-10 sm:-mt-16 md:-mt-20 relative z-10">
          <p className="text-blue-600 uppercase font-semibold tracking-widest text-sm sm:text-base">
            Digital Marketing
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4">
            Introduction
          </h2>

          <p className="mt-6 sm:mt-8 text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
            In today’s modern generation, everything has gone online. People now
            prefer shopping online from the comfort of their homes rather than
            visiting physical stores.
          </p>

          <p className="mt-5 sm:mt-6 text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
            Due to this shifting trend, every businessman—whether big or
            small—has turned toward marketing their business online, which we
            know as <strong>Digital Marketing.</strong>
          </p>

          <p className="mt-5 sm:mt-6 text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
            Furthermore, with the introduction of AI (Artificial Intelligence)
            tools in digital marketing, operations have become much easier for
            business owners, and business growth is accelerating at a rocket
            pace.
          </p>

          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
            alt="AI Digital Marketing"
            className="rounded-xl sm:rounded-2xl my-8 sm:my-12 shadow-lg w-full"
          />

          {/* Table of Contents */}

          <div className="bg-blue-50 rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
            {/* Header */}
            <div className="bg-blue-600 px-6 py-6 text-center">
              <h2 className="text-3xl font-bold text-white">
                Table of Contents
              </h2>

              <div className="w-20 h-1 bg-white mx-auto rounded-full my-4"></div>

              <p className="text-blue-100 max-w-2xl mx-auto">
                Explore the key Digital Marketing topics covered in this guide.
              </p>
            </div>

            {/* Content */}

            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <span className="bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold">
                    01
                  </span>
                  <span> Target Audience & Social Media Platforms</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold">
                    02
                  </span>
                  <span>Instagram Marketing</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold">
                    03
                  </span>
                  <span>Mobile-Friendly Website</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold">
                    04
                  </span>
                  <span>30+ Customer Mindset</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold">
                    05
                  </span>
                  <span>Website Strategy</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold">
                    06
                  </span>
                  <span>Meta Ads</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold">
                    07
                  </span>
                  <span>Email Marketing</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold">
                    08
                  </span>
                  <span>Conclusion</span>
                </div>

                {/* <div className="flex items-center gap-3">
        <span className="bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold">09</span>
        <span>FAQ</span>
      </div>

      <div className="flex items-center gap-3">
        <span className="bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold">10</span>
        <span>Technical SEO Audit</span>
      </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience */}

        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">
          <p className="text-blue-600 uppercase font-semibold tracking-widest text-sm sm:text-base">
            Digital Marketing Strategy
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-3">
            Target Audience & Social Media Marketing
          </h2>

          <p className="mt-6 sm:mt-8 text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
            One of the most important parts of any
            <strong> Digital Marketing Strategy </strong>
            is understanding your target audience. Successful businesses don't
            market to everyone—they focus on the people who are most likely to
            become customers.
          </p>

          <p className="mt-5 sm:mt-6 text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
            Today,
            <strong> Social Media Marketing </strong>
            has become one of the fastest ways to grow an
            <strong> Online Business </strong>. Platforms like Instagram,
            Facebook and YouTube help brands connect directly with their
            customers and build trust.
          </p>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
            alt="Social Media Marketing for Business Growth"
            className="rounded-xl sm:rounded-2xl my-8 sm:my-10 shadow-lg w-full"
          />
        </section>

        {/* Instagram */}

        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Instagram Marketing: The Power of Reels
          </h2>

          <p className="mt-6 sm:mt-8 text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
            <strong>Instagram Marketing</strong> has changed the way businesses
            promote products. Short-form videos (Reels) help brands reach
            thousands of potential customers without spending a huge advertising
            budget.
          </p>

          <p className="mt-5 sm:mt-6 text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
            Local businesses can increase brand awareness by creating engaging
            Reels, behind-the-scenes content, customer reviews and product
            demonstrations.
          </p>

          <img
            src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1200"
            alt="Instagram Marketing"
            className="rounded-xl sm:rounded-2xl my-8 sm:my-10 shadow-lg w-full"
          />
        </section>

        {/* Youth */}

        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Why Young Customers Buy Faster Online
          </h2>

          <p className="mt-6 sm:mt-8 text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
            Customers aged between 18 and 30 spend significant time watching
            Instagram Reels, YouTube Shorts and other short-form content.
          </p>

          <p className="mt-5 sm:mt-6 text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
            Because they discover products through social media, they often
            visit websites and complete purchases quickly. This makes
            <strong> Instagram Marketing for Business </strong>
            an essential strategy for brands targeting younger audiences.
          </p>

          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200"
            alt="Young Customers Shopping Online"
            className="rounded-xl sm:rounded-2xl my-8 sm:my-10 shadow-lg w-full"
          />
        </section>

        {/* YouTube */}

        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            YouTube Marketing Builds Customer Trust
          </h2>

          <p className="mt-6 sm:mt-8 text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
            <strong>YouTube Marketing</strong> plays an important role when
            customers want detailed product information.
          </p>

          <p className="mt-5 sm:mt-6 text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
            Product reviews, tutorials and comparison videos help customers make
            confident buying decisions, especially for high-value purchases.
          </p>

          <img
            src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200"
            alt="YouTube Marketing"
            className="rounded-xl sm:rounded-2xl my-8 sm:my-10 shadow-lg w-full"
          />
        </section>

        {/* AI */}

        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            AI in Digital Marketing
          </h2>

          <p className="mt-6 sm:mt-8 text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
            Modern businesses now use
            <strong> AI Marketing Tools </strong>
            to automate campaigns, improve customer targeting, generate content,
            optimize advertisements and increase conversions.
          </p>

          <p className="mt-5 sm:mt-6 text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
            AI makes
            <strong> Marketing Automation </strong>
            easier and helps businesses save time while improving overall
            performance.
          </p>

          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200"
            alt="AI in Digital Marketing"
            className="rounded-xl sm:rounded-2xl my-8 sm:my-10 shadow-lg w-full"
          />
        </section>

        {/* 30+ Customer Mindset */}

        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Understanding the 30+ Customer Mindset
          </h2>

          <p className="mt-6 sm:mt-8 text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
            While younger customers often make quick purchasing decisions,
            people above the age of 30 usually spend more time researching
            products before buying. They check reviews, product authenticity,
            return policies and Cash on Delivery (COD) availability before
            placing an order.
          </p>

          <p className="mt-5 sm:mt-6 text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
            This is why businesses should build trust through detailed product
            information, customer testimonials and transparent communication.
          </p>

          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200"
            alt="Customer Researching Products Online"
            className="rounded-xl sm:rounded-2xl my-8 sm:my-10 shadow-lg w-full"
          />
        </section>

        {/* Website */}

        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Build a Professional Website
          </h2>

          <p className="mt-6 sm:mt-8 text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
            A professional website is the foundation of every successful
            <strong> Online Business.</strong>
            It helps customers learn about your products, services and contact
            information while increasing your brand credibility.
          </p>

          <p className="mt-5 sm:mt-6 text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
            Connecting your website with Instagram, Facebook and YouTube creates
            a complete <strong>Digital Marketing Strategy</strong>
            that generates quality leads and sales.
          </p>

          <img
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200"
            alt="Business Website"
            className="rounded-xl sm:rounded-2xl my-8 sm:my-10 shadow-lg w-full"
          />
        </section>

        {/* Meta Ads */}

        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Meta Ads (Facebook & Instagram Ads)
          </h2>

          <p className="mt-6 sm:mt-8 text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
            <strong>Meta Ads</strong> allow businesses to reach highly targeted
            audiences based on interests, demographics, location and customer
            behavior.
          </p>

          <p className="mt-5 sm:mt-6 text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
            Running
            <strong> Facebook Ads </strong>
            and
            <strong> Instagram Ads </strong>
            helps businesses generate leads, increase website traffic and
            improve conversions.
          </p>

          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200"
            alt="Meta Ads"
            className="rounded-xl sm:rounded-2xl my-8 sm:my-10 shadow-lg w-full"
          />
        </section>

        {/* Email Marketing */}

        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Email Marketing for Customer Retention
          </h2>

          <p className="mt-6 sm:mt-8 text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
            <strong>Email Marketing</strong> keeps customers engaged by sending
            offers, newsletters and promotional campaigns.
          </p>

          <p className="mt-5 sm:mt-6 text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
            It is one of the most effective ways to improve customer retention
            and increase repeat purchases through
            <strong> Marketing Automation.</strong>
          </p>

          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200"
            alt="Email Marketing"
            className="rounded-xl sm:rounded-2xl my-8 sm:my-10 shadow-lg w-full"
          />
        </section>

        {/* Conclusion */}

        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">
          <div className="bg-blue-600 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Conclusion
            </h2>

            <p className="mt-5 sm:mt-6 leading-7 sm:leading-8 text-base sm:text-lg">
              Businesses that embrace
              <strong> Digital Marketing</strong>,
              <strong> AI in Digital Marketing</strong>,
              <strong> Social Media Marketing</strong>,
              <strong> Meta Ads</strong> and
              <strong> Email Marketing</strong>
              are more likely to achieve sustainable business growth.
            </p>

            <p className="mt-5 sm:mt-6 leading-7 sm:leading-8 text-base sm:text-lg">
              Whether you are a startup, freelancer or established company,
              implementing the right
              <strong> Digital Marketing Strategy </strong>
              can help you reach more customers and grow your business online.
            </p>
          </div>
        </section>

        {/* FAQ */}

        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5 sm:space-y-8">
            <div className="bg-gray-100 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-2xl font-semibold">
                What is Digital Marketing?
              </h3>
              <p className="mt-2 sm:mt-3 text-gray-700 leading-7 sm:leading-8 text-sm sm:text-base">
                Digital Marketing is the process of promoting products and
                services through online channels such as search engines, social
                media, websites, email marketing and paid advertisements.
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-2xl font-semibold">
                Why is Social Media Marketing important?
              </h3>
              <p className="mt-2 sm:mt-3 text-gray-700 leading-7 sm:leading-8 text-sm sm:text-base">
                Social Media Marketing helps businesses reach a wider audience,
                build trust, increase engagement and generate quality leads.
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-2xl font-semibold">
                Which platform is better: Instagram or YouTube?
              </h3>
              <p className="mt-2 sm:mt-3 text-gray-700 leading-7 sm:leading-8 text-sm sm:text-base">
                Instagram is excellent for short-form content and brand
                awareness, while YouTube is ideal for detailed product reviews
                and educational videos that build customer trust.
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-2xl font-semibold">
                How can AI improve Digital Marketing?
              </h3>
              <p className="mt-2 sm:mt-3 text-gray-700 leading-7 sm:leading-8 text-sm sm:text-base">
                AI helps automate campaigns, analyze customer behavior,
                personalize marketing, improve targeting and save valuable time.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-16 sm:mt-24">
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              Ready to Grow Your Business?
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-xl leading-7 sm:leading-8 max-w-3xl mx-auto">
              Grow your business with professional Digital Marketing, Social
              Media Marketing, Meta Ads, SEO and Website Development.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5 mt-6 sm:mt-10">
              <a
                href="https://wa.me/919016441913"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-700 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold hover:bg-gray-100 duration-300"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
        {/* Related Blogs */}

        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-20 mb-20">
          <div className="border-t pt-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
              Related Blogs
            </h2>

            <p className="text-gray-600 text-center mb-10">
              Continue learning with our latest Digital Marketing articles.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* SEO Tips */}

              <Link
                to="/blog/seo-tips"
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800"
                  alt="SEO Tips"
                  className="h-56 w-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="p-6">
                  <span className="text-sm text-blue-600 font-semibold">
                    SEO
                  </span>

                  <h3 className="text-2xl font-bold mt-2 group-hover:text-blue-600 transition">
                    SEO Tips to Improve Your Google Rankings
                  </h3>

                  <p className="text-gray-600 mt-4">
                    Learn On-Page SEO, Technical SEO, Keyword Research, Internal
                    Linking and more to rank higher on Google.
                  </p>

                  <span className="inline-block mt-6 text-blue-600 font-semibold">
                    Read More →
                  </span>
                </div>
              </Link>

              {/* Google Ads */}

              <Link
                to="/blog/google-ads-vs-facebook-ads"
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1557838923-2985c318be48?w=800"
                  alt="Google Ads vs Facebook Ads"
                  className="h-56 w-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="p-6">
                  <span className="text-sm text-blue-600 font-semibold">
                    Paid Advertising
                  </span>

                  <h3 className="text-2xl font-bold mt-2 group-hover:text-blue-600 transition">
                    Google Ads vs Facebook Ads
                  </h3>

                  <p className="text-gray-600 mt-4">
                    Compare Google Ads and Facebook Ads to choose the best
                    advertising platform for your business.
                  </p>

                  <span className="inline-block mt-6 text-blue-600 font-semibold">
                    Read More →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
