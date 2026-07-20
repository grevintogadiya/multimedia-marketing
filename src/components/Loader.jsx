import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-blue-700 flex flex-col items-center justify-center">
      <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin"></div>

      <h1 className="text-white text-4xl font-bold mt-8">
        Multimedia Marketing
      </h1>

      <p className="text-blue-100 mt-3">
        Loading Website...
      </p>
    </div>
  );
}