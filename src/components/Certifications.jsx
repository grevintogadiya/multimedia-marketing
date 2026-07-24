import { useState } from "react";
import {
  FaAward,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";
import { useEffect } from "react";

const academies = [
  {
    title: "HubSpot Academy",
    description:
      "Certified courses from HubSpot Academy including Content Marketing, Email Marketing, Inbound Marketing and Social Media Marketing.",
    logo: "https://1000logos.net/wp-content/uploads/2022/12/HubSpot-Logo.png",

    certificates: [
      "contant marketing certificate.png",
      "email marketing certificate.png",
      "inbound certficate.png",
      "soical media certificate.png",
    ],
  },

  {
    title: "Semrush Academy",
    description:
      "SEO certification from Semrush Academy covering On-Page SEO and AI Search optimization.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QmsZWV3mVm3XQcdBkh8alVU77hG8Bvu-oih3BWA0ag&s=10",

    certificates: [
      "SEO certificate.jpg",
      "one page SEO certificate.jpg",
    ],
  },
];


export default function Certifications() {
  const [selectedAcademy, setSelectedAcademy] = useState(null); // ✅ TOP par

  useEffect(() => {
    if (selectedAcademy) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
  }, [selectedAcademy]);


  return (

    <section
      id="certifications"
      className="py-24  from-white to-blue-50"
    >

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div
          className="text-center mb-16"
        >

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Certifications
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900">
            Professional Certifications
          </h2>


          <p className="text-gray-600 max-w-3xl mx-auto mt-5">
            We continuously improve our skills through globally recognized
            certifications from HubSpot Academy and Semrush Academy.
          </p>

        </div>



        {/* Academy Cards */}


        <div className="grid md:grid-cols-2 gap-10">


          {academies.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500"
            >


              <div className="p-8 text-center">


                <img
                  src={item.logo}
                  alt={item.title}
                  className="h-20 mx-auto object-contain mb-6"
                />



                <div className="flex justify-center items-center gap-2 text-blue-600 mb-3">

                  <FaAward />

                  <span className="font-semibold">
                    Verified Academy
                  </span>

                </div>



                <h3 className="text-3xl font-bold text-gray-900">
                  {item.title}
                </h3>



                <p className="text-gray-500 mt-4">
                  {item.description}
                </p>



                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedAcademy(item);
                  }}
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  View Certificates
                </a>

              </div>


            </div>


          ))}


        </div>

        {/* Certificate Popup */}

        {selectedAcademy && (

          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-hidden">

            <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl scrollbar-hide">

              {/* Close Button */}

              <button
                onClick={() => setSelectedAcademy(null)}
                className="absolute top-4 right-4 bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full z-50"
              >
                ✕
              </button>

              {/* Popup Heading */}

              <div className="text-center mb-8">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {selectedAcademy.title}
                </h2>


                <p className="text-gray-500 mt-2">
                  All Verified Certificates
                </p>

              </div>



              {/* Certificates */}

              <div className="grid sm:grid-cols-2 gap-8">


                {selectedAcademy.certificates.map((certificate, index) => (

                  <div
                    key={index}
                    className="bg-gray-50 rounded-2xl p-4 shadow hover:shadow-xl transition"
                  >


                    <a
                      href={certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                    >

                      <img
                        src={certificate}
                        alt="Certificate"
                        className="w-full h-64 object-contain rounded-xl cursor-pointer hover:scale-105 transition duration-300"
                      />

                    </a>



                    <a
                      href={certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                    >

                      View Full Certificate

                      <FaExternalLinkAlt />

                    </a>


                  </div>

                ))}


              </div>


            </div>


          </div>

        )}

      </div>

    </section>

  );

}