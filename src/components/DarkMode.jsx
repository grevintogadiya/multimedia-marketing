// import { useEffect, useState } from "react";
// import { FaMoon, FaSun } from "react-icons/fa";

// export default function DarkMode() {
//   const [dark, setDark] = useState(() => {
//     return localStorage.getItem("theme") === "dark";
//   });

//   useEffect(() => {
//     if (dark) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [dark]);

//   return (
//     <button
//       onClick={() => setDark(!dark)}
//       className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition hover:scale-110"
//     >
//       {dark ? <FaSun size={22} /> : <FaMoon size={22} />}
//     </button>
//   );
// }