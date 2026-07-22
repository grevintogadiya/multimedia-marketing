import { Link } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar";
import { FaWhatsapp } from "react-icons/fa";


const tips = [
  {
    number: "1",
    title: "Improve Website Speed",
    desc: "A fast-loading website improves user experience and helps search engines rank your pages higher. Compress images, enable browser caching, and remove unnecessary JavaScript and CSS files.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "2",
    title: "Optimize Core Web Vitals",
    desc: "Focus on Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) to improve user experience and Google rankings.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "3",
    title: "Mobile-Friendly Website",
    desc: "Make your website responsive so it works perfectly on mobile, tablet, and desktop devices.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "4",
    title: "Create XML Sitemap",
    desc: "An XML sitemap helps search engines discover and index your pages more efficiently.",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "5",
    title: "Use HTTPS Security",
    desc: "HTTPS encrypts data between your website and visitors, improving security and trust. Google considers HTTPS a ranking signal, so every website should have a valid SSL certificate.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "6",
    title: "Optimize URL Structure",
    desc: "Keep URLs short, descriptive, and keyword-rich. Avoid unnecessary numbers or special characters.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "7",
    title: "Fix Broken Links",
    desc: "Broken links create a poor user experience and waste crawl budget. Regularly check for 404 errors and redirect broken URLs.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "8",
    title: "Add Schema Markup",
    desc: "Structured data helps search engines understand your content and increases the chances of rich results in Google Search.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "9",
    title: "Build Strong Internal Links",
    desc: "Internal links help users navigate your website and allow search engines to discover important pages more efficiently.",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "10",
    title: "Perform Regular Technical SEO Audits",
    desc: "Regular SEO audits help identify crawl errors, indexing issues, duplicate content, and performance problems before they affect your rankings.",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80",
  },
];

export default function TechnicalSeoTips() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-24">
          {/* subtle background image overlay */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80"
              alt="Technical SEO background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          <div className="relative max-w-6xl mx-auto px-6">
            <p className="uppercase tracking-widest text-blue-200">
              SEO • Technical SEO
            </p>

            <h1 className="text-5xl font-bold mt-4 max-w-3xl">
              10 Technical SEO Tips to Improve Website Rankings.
            </h1>

            <p className="mt-6 text-xl text-gray-200 max-w-2xl">
              Learn practical Technical SEO techniques that help Google crawl,
              index and rank your website.
            </p>

          </div>
        </section>

        {/* Breadcrumb */}

        {/* Content */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                What is Technical SEO?
              </h2>

              <p className="text-lg leading-8 text-gray-700">
                Technical SEO is the process of optimizing your website's
                infrastructure so that search engines can crawl, index and
                understand your website efficiently.
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=800&q=80"
              alt="Technical SEO illustration"
              className="rounded-xl shadow-lg w-full h-72 object-cover"
            />
          </div>
        </section>

        {/* Table of Contents */}

<section className="py-12">
  <div className="max-w-5xl mx-auto px-6">

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

      {/* Header */}

    {/* Header */}

        <div className="bg-blue-600 px-8 py-6 text-center">

  <h2 className="text-3xl font-bold text-white">
     Table of Contents
  </h2>

  <div className="w-20 h-1 bg-white mx-auto rounded-full my-4"></div>

  <p className="text-blue-100 max-w-2xl mx-auto">
    Explore all the Technical SEO topics covered in this complete guide.
    Click on any topic below to jump directly to that section.
  </p>

        </div>  
      {/* Content */}

      <div className="p-8">

        <div className="grid md:grid-cols-2 gap-4">

          {tips.map((tip) => (
            <a
              key={tip.number}
              href={`#tip-${tip.number}`}
              className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-500 transition duration-300"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                {tip.number}
              </span>

              <span className="font-medium text-gray-800">
                {tip.title}
              </span>
            </a>
          ))}

        </div>

      </div>

    </div>

  </div>
</section>
        {/* <section className="pb-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Table of Contents</h2>

              <ul className="space-y-3 text-blue-600 list-disc pl-5">
                {tips.map((tip) => (
                  <li key={tip.number}>{tip.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </section> */}

        {/* Technical SEO Tips */}
        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              Top Technical SEO Tips
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {tips.map((tip) => (
                <div
                  key={tip.number}
                  className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
                >
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">
                      {tip.number}. {tip.title}
                    </h3>

                    <p className="text-gray-700 leading-8">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-blue-700 text-white py-20">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80"
              alt="SEO services background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          <div className="relative max-w-5xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-6">
              Need Professional Technical SEO Services?
            </h2>

            <p className="text-xl text-blue-100 mb-8">
              Our team helps businesses improve website performance, fix
              technical issues, and achieve higher Google rankings with
              proven SEO strategies.
            </p>

                    <a
              href="https://wa.me/919016441913"
      target="_blank"
      rel="noopener noreferrer"
              className="bg-white text-blue-700 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold hover:bg-gray-100 duration-300"
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
            Learn Digital Marketing, Social Media, AI Marketing,
            Meta Ads, Email Marketing and Website Strategy.
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
            Google Ads
          </span>

          <h3 className="text-2xl font-bold mt-2 group-hover:text-blue-600 transition">
            Google Ads vs Facebook Ads
          </h3>

          <p className="text-gray-600 mt-4">
            Discover which advertising platform delivers
            better results for your business.
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
