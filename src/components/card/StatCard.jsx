export default function StatCard({ number, title }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 text-center hover:shadow-lg transition duration-300">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-600">
        {number}
      </h2>

      <p className="mt-2 text-gray-500 text-sm sm:text-base">
        {title}
      </p>
    </div>
  );
}