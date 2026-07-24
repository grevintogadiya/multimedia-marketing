// import { FaBriefcase, FaUsers, FaAward, FaSmile } from "react-icons/fa";

// export default function Counter() {
//   const counters = [
//     { icon: FaBriefcase, number: "50+", title: "Projects Completed" },
//     { icon: FaUsers, number: "100+", title: "Happy Clients" },
//     { icon: FaAward, number: "5+", title: "Awards Winning" },
//     { icon: FaSmile, number: "98%", title: "Client Satisfaction" },
//   ];

//   return (
//     <section className="relative py-28 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white overflow-hidden">
      
//       {/* BACKGROUND GLOW */}
//       <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-400 opacity-30 blur-3xl rounded-full"></div>
//       <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-400 opacity-30 blur-3xl rounded-full"></div>

//       <div className="relative max-w-7xl mx-auto px-6">

//         {/* GRID */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

//           {counters.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl hover:-translate-y-3 transition duration-500"
//               >
                
//                 {/* INNER GLOW HOVER */}
//                 <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition duration-500"></div>

//                 {/* ICON */}
//                 <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-lg bg-white/20 backdrop-blur-md mb-5 group-hover:scale-110 transition duration-300">
//                   <Icon className="text-white text-lg" />
//                 </div>

//                 {/* NUMBER */}
//                 <h2 className="text-4xl font-extrabold tracking-tight">
//                   {item.number}
//                 </h2>

//                 {/* TITLE */}
//                 <p className="mt-3 text-sm text-white/80 tracking-wide">
//                   {item.title}
//                 </p>

//               </div>
//             );
//           })}

//         </div>

//       </div>
//     </section>
//   );
// }