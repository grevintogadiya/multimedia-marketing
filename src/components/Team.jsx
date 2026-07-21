import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const team = [
  {
    name: "Grevin Togadiya",
    role: "Founder & Digital Marketing Strategist",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
  },
  {
    name: "Rahul Patel",
    role: "Performance Marketing Expert",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
  },
  {
    name: "Priya Shah",
    role: "SEO Specialist",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
  },
  {
    name: "Amit Mehta",
    role: "Web Developer",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase">
            Our Team
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Meet Our Experts
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            A passionate team dedicated to growing your business online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition duration-300"
            >

              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />

              <div className="p-6 text-center">

                <h3 className="text-2xl font-bold">
                  {member.name}
                </h3>

                <p className="text-blue-600 mt-2">
                  {member.role}
                </p>

                <div className="flex justify-center gap-4 mt-6">

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center hover:bg-pink-600"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center hover:bg-blue-900"
                  >
                    <FaLinkedinIn />
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}