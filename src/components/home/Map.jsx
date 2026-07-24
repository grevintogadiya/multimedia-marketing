import SectionHeader from "../common/SectionHeader";
export default function Map() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Location"
          title="Find Us On Map"
          description="Visit our office or contact us for a free consultation."
        />

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
