export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="group bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2">
      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-100 text-blue-600 text-lg mb-4 group-hover:scale-110 transition">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 mt-3 text-sm leading-6">{description}</p>
    </div>
  );
}
