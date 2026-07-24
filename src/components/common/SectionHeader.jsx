export default function SectionHeader({
  badge,
  title,
  description,
  center = true,
}) {
  return (
    <div className={`${center ? "text-center" : "text-left"} mb-14`}>
      {badge && (
        <span className="inline-block px-6 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold tracking-[4px] uppercase text-sm">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
          {description}
        </p>
      )}
    </div>
  );
}
