import { useState } from "react";
import {
  FaWhatsapp,
  FaArrowUp,
  FaComments,
  FaTimes,
} from "react-icons/fa";

export default function FloatingAction() {

  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">


      {/* Menu Options */}

      <div
        className={`
          flex flex-col gap-4 mb-4
          transition-all duration-300
          ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }
        `}
      >


        {/* WhatsApp Button */}

        <div className="relative group">

          <span
            className="
              absolute right-16 top-1/2 -translate-y-1/2
              bg-gray-900 text-white text-sm
              px-3 py-2 rounded-lg
              opacity-0 group-hover:opacity-100
              transition duration-300
              whitespace-nowrap
            "
          >
            Chat on WhatsApp
          </span>


          <a
            href="https://wa.me/919016441913"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="
              w-14 h-14
              bg-gradient-to-r from-green-400 to-green-600
              rounded-full
              flex items-center justify-center
              text-white text-2xl
              shadow-xl shadow-green-500/40
              hover:scale-110
              hover:rotate-6
              transition-all duration-300
            "
          >

            <FaWhatsapp />

          </a>

        </div>



        {/* Back To Top Button */}

        <div className="relative group">

          <span
            className="
              absolute right-16 top-1/2 -translate-y-1/2
              bg-gray-900 text-white text-sm
              px-3 py-2 rounded-lg
              opacity-0 group-hover:opacity-100
              transition duration-300
              whitespace-nowrap
            "
          >
            Back To Top
          </span>


          <button
            onClick={() => {

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });

              setOpen(false);

            }}

            className="
              w-14 h-14
              bg-gradient-to-r from-blue-600 to-indigo-700
              rounded-full
              flex items-center justify-center
              text-white text-xl
              shadow-xl shadow-blue-500/40
              hover:scale-110
              hover:-translate-y-1
              transition-all duration-300
            "
          >

            <FaArrowUp />

          </button>


        </div>


      </div>




      {/* Main Floating Button */}

      <button

        onClick={() => setOpen(!open)}

        className="
          w-16 h-16
          rounded-full
          bg-gradient-to-r from-blue-600 to-indigo-800
          text-white
          flex items-center justify-center
          text-2xl
          shadow-2xl shadow-blue-500/50
          hover:scale-110
          hover:rotate-12
          transition-all duration-300
        "

      >

        {open ? <FaTimes /> : <FaComments />}

      </button>


    </div>
  );
}