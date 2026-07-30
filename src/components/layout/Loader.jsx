import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 0.0);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-blue-700 px-6">
      {/* Spinner */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 border-4 border-white border-t-transparent rounded-full animate-spin"></div>

      {/* Logo / Title */}
      <h1 className="mt-6 text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
        Multimedia
        <br />
        Marketing
      </h1>

      {/* Subtitle */}
      <p className="mt-3 text-center text-sm sm:text-base text-blue-100">
        Loading Website...
      </p>
    </div>
  );
}
