import React, { useEffect, useState } from "react";
import { MdOutlineArrowRight, MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Pricing() {
  const [activeCard, setActiveCard] = useState(null);

  // ✅ Prevent background scroll when modal is open
  useEffect(() => {
    if (activeCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // cleanup (in case component unmounts)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeCard]);

  const wallMountedServices = [
    {
      category: "Wall Mounted Troubleshooting Services",
      items: [
        { name: "Basic Troubleshooting", description: "Diagnosis and minor fixes", price: "RM 80/unit" },
        { name: "Water Leakage Fixing", description: "Drainage system repair", price: "RM 110/unit" }
      ]
    },
    {
      category: "Gas Refill (Up to 1.0hp)",
      items: [
        { name: "R22", price: "RM 125" },
        { name: "Standard R410", price: "RM 155" },
        { name: "Eco-friendly R32", price: "RM 155" }
      ]
    },
    {
      category: "General Cleaning (Up to 2.5hp)",
      items: [
        { units: "1 Unit", price: "RM 85 per unit" },
        { units: "2 Units", price: "RM 75 per unit" },
        { units: "3+ Units", price: "RM 65 per unit" }
      ]
    },
    {
      category: "Chemical Aircon Cleaning (Up to 2.5hp)",
      items: [
        { units: "1 Unit", price: "RM 155 per unit" },
        { units: "2 Units", price: "RM 135 per unit" },
        { units: "3+ Units", price: "RM 125 per unit" },
        { units: "4+ Units", price: "RM 115 per unit" },
        { units: "5+ Units", price: "RM 105 per unit" }
      ]
    }
  ];

  const ceilingCassetteServices = [
    {
      category: "Troubleshooting Services",
      services: [
        { name: "Basic Troubleshooting", description: "Diagnosis and minor fixes", price: "RM 105/unit" },
        { name: "Water Leakage Fixing", description: "Drainage system repair", price: "RM 155/unit" }
      ]
    },
    {
      category: "Gas Refill (Up to 1.0hp)",
      services: [
        { type: "R22", price: "RM 125" },
        { type: "R410 (Standard)", price: "RM 155" },
        { type: "R32 (Eco-friendly)", price: "RM 155" }
      ]
    },
    {
      category: "General Cleaning (Up to 2.5hp)",
      prices: [
        { units: 1, price: "RM 105 per unit" },
        { units: 2, price: "RM 95 per unit" },
        { units: 3, price: "RM 85 per unit" }
      ]
    },
    {
      category: "Chemical Aircon Cleaning (Up to 2.5hp)",
      prices: [
        { units: 1, price: "RM 305 per unit" },
        { units: 2, price: "RM 285 per unit" },
        { units: 3, price: "RM 265 per unit" },
        { units: 4, price: "RM 245 per unit" },
        { units: 5, price: "RM 225 per unit" }
      ]
    }
  ];

  const renderServices = (list) => (
    <div>
      {list.map((cat, i) => (
        <div key={i} className="mb-4">
          <h2 className="text-lg font-bold text-gray-800">{cat.category}</h2>
          <ul className="list-disc pl-5 mt-1">
            {cat.items &&
              cat.items.map((item, idx) => (
                <li key={idx} className="text-gray-700">
                  {item.name || item.units}{" "}
                  {item.description && `- ${item.description}`} —{" "}
                  <span className="font-semibold">{item.price}</span>
                </li>
              ))}
            {cat.services &&
              cat.services.map((srv, idx) => (
                <li key={idx} className="text-gray-700">
                  {srv.name || srv.type}{" "}
                  {srv.description && `- ${srv.description}`} —{" "}
                  <span className="font-semibold">{srv.price}</span>
                </li>
              ))}
            {cat.prices &&
              cat.prices.map((p, idx) => (
                <li key={idx} className="text-gray-700">
                  {p.units} Unit{p.units > 1 ? "s" : ""} —{" "}
                  <span className="font-semibold">{p.price}</span>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <section className="w-full h-auto px-4 md:px-10 xl:px-30 py-10 overflow-hidden ">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Our Pricing Plans
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Wall Mounted Card */}
        <div data-aos="fade-up-right" className="border border-gray-300 bg-white shadow-lg rounded-3xl overflow-hidden transition-transform">
          <div className="relative h-[320px] w-full">
            <img
              src="https://raisingwebsolutions.co.in/fast-aircon-landing/images/wall-mounted-new.jpg"
              alt="Wall Mounted"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-5">
              <h1 className="text-2xl font-bold">Wall Mounted Aircon</h1>
            </div>
          </div>
          <div className="p-6">
            <p className="flex items-center gap-3 text-lg mt-2">
              <MdOutlineArrowRight className="text-blue-700" /> Basic & chemical cleaning
            </p>
            <p className="flex items-center gap-3 text-lg mt-2">
              <MdOutlineArrowRight className="text-blue-700" /> Indoor & outdoor
            </p>
            <p className="flex items-center gap-3 text-lg mt-2">
              <MdOutlineArrowRight className="text-blue-700" /> Diagnostics included
            </p>
            <button
              onClick={() => setActiveCard("wall")}
              className="mt-6 w-full cursor-pointer border border-emerald-500 rounded-lg px-5 py-3 text-lg font-semibold text-emerald-700 flex justify-center items-center gap-3 hover:bg-emerald-50"
            >
              Price Details <MdKeyboardDoubleArrowRight />
            </button>
          </div>
        </div>

        {/* Ceiling Card */}
        <div data-aos="fade-up-left" className="border border-gray-300 bg-white shadow-lg rounded-3xl overflow-hidden transition-transform ">
          <div className="relative h-[320px] w-full">
            <img
              src="https://raisingwebsolutions.co.in/fast-aircon-landing/images/ceiling.png"
              alt="Ceiling Cassette"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-5">
              <h1 className="text-2xl font-bold">Cassette / Ceiling Aircon</h1>
            </div>
          </div>
          <div className="p-6">
            <p className="flex items-center gap-3 text-lg mt-2">
              <MdOutlineArrowRight className="text-blue-700" /> Basic & chemical cleaning
            </p>
            <p className="flex items-center gap-3 text-lg mt-2">
              <MdOutlineArrowRight className="text-blue-700" /> Indoor & outdoor
            </p>
            <p className="flex items-center gap-3 text-lg mt-2">
              <MdOutlineArrowRight className="text-blue-700" /> Diagnostics included
            </p>
            <button
              onClick={() => setActiveCard("ceiling")}
              className="mt-6 cursor-pointer w-full border border-emerald-500 rounded-lg px-5 py-3 text-lg font-semibold text-emerald-700 flex justify-center items-center gap-3 hover:bg-emerald-50"
            >
              Price Details <MdKeyboardDoubleArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {/* Modal */}
      {activeCard && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-6 max-h-[90vh] overflow-y-auto flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 border-b border-b-gray-300 pb-3">
              <h2 className="text-2xl font-bold text-gray-800">
                {activeCard === "wall"
                  ? "Wall Mounted Aircon - Price List"
                  : "Cassette/Ceiling Aircon - Price List"}
              </h2>
              <button
                onClick={() => setActiveCard(null)}
                className="text-red-500 font-bold text-2xl hover:text-red-700"
              >
                ✕
              </button>
            </div>

            {/* Stylish Price Cards */}
            <div className="space-y-6 flex-1">
              {(activeCard === "wall" ? wallMountedServices : ceilingCassetteServices).map((cat, i) => (
                <div
                  key={i}
                  className="border border-gray-200 shadow-md rounded-xl p-5 hover:shadow-lg transition bg-gray-50"
                >
                  {/* Category Title */}
                  <h3 className="text-xl font-semibold text-emerald-700 mb-3">
                    {cat.category}
                  </h3>

                  <div className="space-y-2">
                    {cat.items &&
                      cat.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center bg-white p-3 rounded-lg border-s-4 border-s-emerald-600 shadow-sm"
                        >
                          <div>
                            <p className="font-medium text-gray-800">
                              {item.name || item.units}
                            </p>
                            {item.description && (
                              <p className="text-sm text-gray-500">
                                {item.description}
                              </p>
                            )}
                          </div>
                          <p className="font-bold text-emerald-600">{item.price}</p>
                        </div>
                      ))}

                    {cat.services &&
                      cat.services.map((srv, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border-s-4 border-emerald-600"
                        >
                          <div>
                            <p className="font-medium text-gray-800">
                              {srv.name || srv.type}
                            </p>
                            {srv.description && (
                              <p className="text-sm text-gray-500">
                                {srv.description}
                              </p>
                            )}
                          </div>
                          <p className="font-bold text-emerald-600">{srv.price}</p>
                        </div>
                      ))}

                    {cat.prices &&
                      cat.prices.map((p, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border-s-4 border-emerald-600"
                        >
                          <p className="font-medium text-gray-800">
                            {p.units} Unit{p.units > 1 ? "s" : ""}
                          </p>
                          <p className="font-bold text-emerald-600">{p.price}</p>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-6">
              <a
                href="https://wa.me/601124419414?text=Hi%20I%20want%20to%20know%20more%20about%20your%20AC%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold rounded-xl shadow-lg transition transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M20.52 3.48A11.78 11.78 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.18 1.6 6.01L0 24l6.17-1.6A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.18-1.24-6.17-3.48-8.52zM12 21.82c-1.82 0-3.6-.49-5.16-1.42l-.37-.21-3.67.96.98-3.58-.24-.37A9.8 9.8 0 0 1 2.18 12C2.18 6.59 6.59 2.18 12 2.18c2.61 0 5.07 1.02 6.91 2.89A9.73 9.73 0 0 1 21.82 12c0 5.41-4.41 9.82-9.82 9.82zm5.33-7.42c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.67.15s-.77.94-.95 1.13-.35.22-.64.07c-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.35.43-.52.15-.17.2-.29.3-.49.1-.19.05-.36-.02-.51-.07-.15-.67-1.61-.92-2.22-.24-.58-.49-.5-.67-.51h-.58c-.19 0-.51.07-.77.36-.26.29-1 1-.97 2.44.03 1.43 1.04 2.82 1.19 3.01.15.19 2.05 3.13 5 4.39.7.3 1.24.47 1.67.6.7.22 1.34.19 1.84.12.56-.08 1.71-.7 1.95-1.38.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z" />
                </svg>
                Chat with us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}


    </section>
  );
}
