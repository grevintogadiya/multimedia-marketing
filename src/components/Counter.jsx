import { FaBriefcase, FaUsers, FaAward, FaSmile } from "react-icons/fa";

export default function Counter() {
  const counters = [
    {
      icon: <FaBriefcase className="text-5xl text-blue-600" />,
      number: "50+",
      title: "Projects Completed",
    },
    {
      icon: <FaUsers className="text-5xl text-blue-600" />,
      number: "100+",
      title: "Happy Clients",
    },
    {
      icon: <FaAward className="text-5xl text-blue-600" />,
      number: "5+",
      title: "Awards Won",
    },
    {
      icon: <FaSmile className="text-5xl text-blue-600" />,
      number: "98%",
      title: "Client Satisfaction",
    },
  ];

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

          {counters.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-2xl p-8 hover:bg-white/20 transition duration-300"
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h2 className="text-4xl font-bold">
                {item.number}
              </h2>

              <p className="mt-3 text-lg">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}