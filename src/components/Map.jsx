export default function Map() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            Find Us On Map
          </h2>

          <p className="text-gray-500 mt-4">
            Visit our office or contact us for a free consultation.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Surat,Gujarat&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

      </div>
    </section>
  );
}