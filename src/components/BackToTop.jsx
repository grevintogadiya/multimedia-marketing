import { useEffect, useState } from "react";

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
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-28 right-6 z-50 w-14 h-14 rounded-full bg-blue-600 text-white text-2xl shadow-xl hover:bg-blue-700 hover:scale-110 transition-all duration-300"
        >
          ↑
        </button>
      )}
    </>
  );
}