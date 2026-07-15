import { FaPaperPlane } from "react-icons/fa";

export default function Newsletter() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-blue-600 rounded-3xl p-10 lg:p-16 text-center text-white">

          <h2 className="text-4xl lg:text-5xl font-bold">
            Subscribe Our Newsletter
          </h2>

          <p className="mt-5 text-blue-100 text-lg">
            Get the latest Digital Marketing tips, SEO updates,
            Google Ads strategies and exclusive offers directly in your inbox.
          </p>

          <form className="mt-10 flex flex-col md:flex-row gap-4">

            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl text-gray-800 outline-none"
            />

            <button
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-gray-100 transition"
            >
              Subscribe
              <FaPaperPlane />
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}