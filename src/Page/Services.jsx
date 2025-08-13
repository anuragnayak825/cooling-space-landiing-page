import React from "react";
import { FaTools, FaWrench, FaClipboardCheck, FaArrowRight } from "react-icons/fa";
import Service from "../assets/service.webp";
import Install from "../assets/install.webp";
import maintain from "../assets/Repair.webp";

export default function Services() {
  // Preload images on component mount
  React.useEffect(() => {
    [Install, Service, maintain].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const services = [
    {
      icon: <FaTools className="text-4xl text-blue-600" />,
      title: "Aircon Installation",
      desc: "Professional aircon installation for homes and businesses, ensuring powerful cooling, energy efficiency, and long-lasting comfort you can rely on.",
      img: Install,
    },
    {
      icon: <FaWrench className="text-4xl text-blue-600" />,
      title: "Aircon Repair and Service",
      desc: "Expert repair services for any aircon model, ensuring quick diagnosis, precise solutions, and restored performance you can trust.",
      img: Service,
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-blue-600" />,
      title: "Aircon Maintenance",
      desc: "Comprehensive maintenance services that boost cooling efficiency, prevent major issues, and maximize the lifespan of your aircon system.",
      img: maintain,
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          Trusted Aircon Services
        </h2>
        <p className="w-full max-w-3xl font-semibold text-sm md:text-lg mb-8 text-center mx-auto">
          From installation to upkeep, we’re committed to keeping your cooling
          systems performing at their best, season after season.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="relative">
                <img
                  src={service.img}
                  alt={service.title}
                  loading="eager"
                  width="400"
                  height="300"
                  className="w-full h-90 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-18 h-18 bg-white flex justify-center items-center">
                  {service.icon}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-lg mb-6 flex-grow">
                  {service.desc}
                </p>
                <button onClick={()=>{window.location.href='https://wa.me/601124419414'}} className="mt-auto flex group justify-between items-center cursor-pointer px-5 py-2 text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Book Now{" "}
                  <FaArrowRight className="group-hover:translate-x-4 transform transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
