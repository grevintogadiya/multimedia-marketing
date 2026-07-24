import { Link } from "react-router-dom";
import React from "react";
import Navbar from "../components/layout/Navbar";
import {
  FaCalendarAlt,
  FaClock,
  FaGoogle,
  FaFacebook,
  FaSearch,
  FaBullseye,
  FaChartLine,
  FaDollarSign,
  FaImage,
  FaUsers,
} from "react-icons/fa";

export const GoogleAdsVsFacebookAds = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-24">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1686061592689-312bbfb5c055?auto=format&fit=crop&w=1600&q=80"
              alt="Digital marketing analytics dashboard"
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          <div className="relative max-w-6xl mx-auto px-6">
            <p className="uppercase tracking-widest text-blue-200">
              Digital Marketing • Paid Advertising
            </p>

            <h1 className="text-5xl font-bold mt-4 max-w-4xl leading-tight">
              Google Ads vs Facebook Ads: Which is Better for Your Business?
            </h1>

            <p className="mt-6 text-xl text-gray-200 max-w-3xl leading-8">
              Learn the difference between Google Ads and Facebook Ads, their
              advantages, costs, targeting methods and which advertising
              platform is best for your business growth.
            </p>

            <div className="flex flex-wrap gap-6 mt-8 text-sm">
              <span className="flex items-center gap-2">
                <FaCalendarAlt />
                July 20, 2026
              </span>

              <span className="flex items-center gap-2">
                <FaClock />8 min read
              </span>
            </div>

            {/* Quick stat chips */}
            <div className="flex flex-wrap gap-4 mt-10">
              <div className="flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg px-5 py-3">
                <FaGoogle className="text-lg text-white" />
                <span className="text-sm">
                  Avg. CPC <strong className="font-mono">$2 – $4</strong>
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg px-5 py-3">
                <FaFacebook className="text-lg text-white" />
                <span className="text-sm">
                  Avg. CPC <strong className="font-mono">$1 – $2</strong>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-lg leading-8 text-gray-700 mb-6">
              Digital advertising has completely changed the way businesses
              attract customers online. Today, companies use paid advertising
              platforms to increase visibility, generate leads and increase
              sales.
            </p>

            <p className="text-lg leading-8 text-gray-700 mb-8">
              Two of the most powerful advertising platforms are
              <strong> Google Ads</strong> and
              <strong> Facebook Ads</strong>. Both platforms provide excellent
              marketing opportunities but their working methods are completely
              different.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Quick Answer:</h3>

              <p className="text-gray-700 leading-7">
                Google Ads is best for capturing customers who are already
                searching for your products or services. Facebook Ads is best
                for creating brand awareness and reaching new audiences.
              </p>
            </div>
          </div>
        </section>

        {/* Table Of Contents */}
        <section className="pb-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-blue-600 px-8 py-6 text-center">
                <h2 className="text-3xl font-bold text-white">
                  Table of Contents
                </h2>

                <div className="w-20 h-1 bg-white mx-auto rounded-full my-4"></div>

                <p className="text-blue-100">
                  Explore Google Ads vs Facebook Ads comparison, benefits and
                  marketing strategies.
                </p>
              </div>

              <div className="p-8 grid md:grid-cols-2 gap-4">
                {[
                  "What are Google Ads?",
                  "What are Facebook Ads?",
                  "Google Ads vs Facebook Ads Difference",
                  "Benefits of Google Ads",
                  "Benefits of Facebook Ads",
                  "Which Platform Should You Choose?",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg hover:bg-blue-50 hover:border-blue-500 transition"
                  >
                    <span className="font-medium">
                      {index + 1}. {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Google Ads Section */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-blue-600 text-white p-3 rounded-lg">
                <FaGoogle />
              </div>

              <h2 className="text-4xl font-bold">What are Google Ads?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <p className="text-gray-700 text-lg leading-8 mb-6">
                  Google Ads is an online advertising platform created by Google
                  that allows businesses to display advertisements on Google
                  Search, YouTube, Google Display Network and other partner
                  websites.
                </p>

                <p className="text-gray-700 text-lg leading-8">
                  Google Ads works on a<strong> search intent model</strong>.
                  This means ads appear when users actively search for products,
                  services or solutions.
                </p>
              </div>

              <img
                src="https://images.unsplash.com/photo-1516382799247-87df95d790b7?auto=format&fit=crop&w=1200&q=80"
                alt="Searching for a service using a laptop"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-3">Example:</h3>

              <p className="text-gray-700">
                A user searches:
                <strong> "Best Digital Marketing Agency Near Me"</strong>
                Businesses running Google Search Ads can appear at the top of
                search results.
              </p>
            </div>
          </div>
        </section>

        {/* Facebook Ads Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-indigo-600 text-white p-3 rounded-lg">
                <FaFacebook />
              </div>

              <h2 className="text-4xl font-bold">What are Facebook Ads?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src="https://images.unsplash.com/photo-1759215524500-8834e4935603?auto=format&fit=crop&w=1200&q=80"
                alt="Hands holding a phone scrolling a social media feed"
                className="rounded-xl shadow-lg w-full h-64 object-cover md:order-1 order-2"
              />

              <div className="md:order-2 order-1">
                <p className="text-gray-700 text-lg leading-8 mb-6">
                  Facebook Ads is Meta's advertising platform that allows
                  businesses to advertise on Facebook, Instagram, Messenger and
                  Audience Network.
                </p>

                <p className="text-gray-700 text-lg leading-8">
                  Unlike Google Ads, Facebook Ads does not depend on search. It
                  targets users based on interests, demographics, location,
                  behaviour and online activity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits of Google Ads */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              Benefits of Google Ads
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: FaSearch,
                  text: "Reach customers who are actively searching for your products.",
                },
                {
                  icon: FaBullseye,
                  text: "Higher conversion chances because of buying intent.",
                },
                {
                  icon: FaImage,
                  text: "Multiple campaign options like Search, Display and YouTube Ads.",
                },
                {
                  icon: FaChartLine,
                  text: "Detailed tracking with clicks, conversions and ROI data.",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 border hover:border-blue-500 transition"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-blue-50 text-blue-600 p-3 rounded-lg">
                        <Icon />
                      </div>
                      <h3 className="text-lg font-bold">
                        Advantage {index + 1}
                      </h3>
                    </div>

                    <p className="text-gray-700 leading-7">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Facebook Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              Benefits of Facebook Ads
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: FaUsers,
                  text: "Advanced audience targeting based on interests and behavior.",
                },
                {
                  icon: FaDollarSign,
                  text: "Lower advertising cost compared to many traditional methods.",
                },
                {
                  icon: FaImage,
                  text: "Perfect for visual marketing using images, videos and reels.",
                },
                {
                  icon: FaChartLine,
                  text: "Helps businesses build brand awareness and community.",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 border hover:border-indigo-500 transition"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-indigo-50 text-indigo-600 p-3 rounded-lg">
                        <Icon />
                      </div>
                      <h3 className="text-lg font-bold">
                        Advantage {index + 1}
                      </h3>
                    </div>

                    <p className="text-gray-700 leading-7">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-10">
              Google Ads vs Facebook Ads: Key Difference
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-lg rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-4 text-left">Factor</th>
                    <th className="p-4 text-left">Google Ads</th>
                    <th className="p-4 text-left">Facebook Ads</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border">
                    <td className="p-4 font-semibold">Advertising Model</td>
                    <td className="p-4">Search Intent Based</td>
                    <td className="p-4">Interest Based</td>
                  </tr>

                  <tr className="border bg-gray-50">
                    <td className="p-4 font-semibold">Best For</td>
                    <td className="p-4">Leads and Sales</td>
                    <td className="p-4">Brand Awareness</td>
                  </tr>

                  <tr className="border">
                    <td className="p-4 font-semibold">Audience</td>
                    <td className="p-4">People searching for solutions</td>
                    <td className="p-4">People based on interests</td>
                  </tr>

                  <tr className="border bg-gray-50">
                    <td className="p-4 font-semibold">Buying Intent</td>
                    <td className="p-4">High</td>
                    <td className="p-4">Medium</td>
                  </tr>

                  <tr className="border">
                    <td className="p-4 font-semibold">Avg. Cost Per Click</td>
                    <td className="p-4">$2 – $4</td>
                    <td className="p-4">$1 – $2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Business Recommendation */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Which Platform Should You Choose?
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-8">
              Choosing between Google Ads and Facebook Ads depends on your
              business goals, audience and marketing strategy.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  Choose Google Ads If:
                </h3>

                <ul className="space-y-3 text-gray-700">
                  <li>✓ You need instant leads</li>
                  <li>✓ Customers search for your services</li>
                  <li>✓ You want high purchase intent traffic</li>
                  <li>✓ You focus on conversions</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-indigo-700 mb-4">
                  Choose Facebook Ads If:
                </h3>

                <ul className="space-y-3 text-gray-700">
                  <li>✓ You want brand awareness</li>
                  <li>✓ You want new audience reach</li>
                  <li>✓ Your product needs visual promotion</li>
                  <li>✓ You have a creative marketing strategy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final Conclusion */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-6">Final Conclusion</h2>

            <p className="text-lg text-gray-700 leading-8">
              There is no single winner between Google Ads and Facebook Ads.
              Both platforms have different advantages. Google Ads is powerful
              for capturing existing customers who are searching for solutions,
              while Facebook Ads helps businesses create awareness and reach new
              audiences. The best digital marketing strategy is using both
              platforms together with proper targeting, testing and
              optimization.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-blue-700 text-white py-20">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
              alt="Marketing team working together"
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          <div className="relative max-w-5xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-6">
              Grow Your Business With Digital Marketing
            </h2>

            <p className="text-xl text-blue-100 mb-8">
              Multimedia Marketing helps businesses grow with SEO, Google Ads,
              Facebook Ads and performance marketing strategies.
            </p>

            <a
              href="https://wa.me/919016441913"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
            >
              💬 Chat on WhatsApp
            </a>
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
              {/* Digital Marketing Guide */}

              <Link
                to="/blog/digital-marketing-guide-2026"
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
                  alt="Digital Marketing Guide"
                  className="h-56 w-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="p-6">
                  <span className="text-sm text-blue-600 font-semibold">
                    Digital Marketing
                  </span>

                  <h3 className="text-2xl font-bold mt-2 group-hover:text-blue-600 transition">
                    Digital Marketing Guide 2026
                  </h3>

                  <p className="text-gray-600 mt-4">
                    Learn Digital Marketing, AI Marketing, Social Media, Meta
                    Ads, Email Marketing and Website Strategy.
                  </p>

                  <span className="inline-block mt-6 text-blue-600 font-semibold">
                    Read More →
                  </span>
                </div>
              </Link>

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
                    SEO Tips to Improve Google Rankings
                  </h3>

                  <p className="text-gray-600 mt-4">
                    Learn Keyword Research, On-Page SEO, Technical SEO, Internal
                    Linking and Local SEO.
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
};

export default GoogleAdsVsFacebookAds;
