import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {show && (
        <div className="fixed bottom-6 right-6 z-50 group">

          {/* Tooltip */}
          <span
            className="
              absolute right-16 top-1/2 -translate-y-1/2
              bg-gray-900 text-white text-sm
              px-3 py-2 rounded-lg
              opacity-0 group-hover:opacity-100
              transition-all duration-300
              whitespace-nowrap
            "
          >
            Back to Top
          </span>


          {/* Button */}
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              w-14 h-14
              rounded-full
              bg-gradient-to-r from-blue-600 to-indigo-600
              text-white
              flex items-center justify-center
              text-xl
              shadow-lg shadow-blue-500/40
              hover:shadow-blue-500/80
              hover:scale-110
              hover:-translate-y-1
              transition-all duration-300
              animate-bounce-slow
            "
          >
            <FaArrowUp className="group-hover:-translate-y-1 transition" />
          </button>

        </div>
      )}
    </>
  );
}