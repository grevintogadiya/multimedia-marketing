import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Loader Mounted");

    const timer = setTimeout(() => {
      console.log("Loader Hidden");
      setLoading(false);
    }, 5000); // 5 seconds માટે test

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-blue-700">
      <h1 className="text-5xl font-bold text-white">LOADER WORKING...</h1>
    </div>
  );
}
