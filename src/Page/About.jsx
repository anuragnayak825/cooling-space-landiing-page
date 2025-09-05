import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Service from "../assets/service.webp";
import Install from "../assets/install.webp";
import maintain from "../assets/Repair.webp";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full h-auto py-10 px-4 xl:px-24">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800 text-center">
        Cool Benefits of Aircon Service
      </h1>
      <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-600 font-semibold text-center ">
        Scheduling AC servicing every 6–12 months ensures peak performance and{" "}
        <br className=" hidden md:block" /> long-lasting efficiency.
      </p>

      <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div
          data-aos="fade-up"
          className="relative w-full h-auto border border-gray-300 rounded-tl-[20px] rounded-br-[20px] overflow-hidden"
        >
          {/* background image */}
          <img
            src={Service}
            alt=""
            className="w-full h-full absolute inset-0 object-cover -z-10"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-white/90 z-0"></div>

          {/* content */}
          <div className="relative z-10 px-2 md:px-6 py-5">
            <h1 className="text-xl text-center md:text-2xl lg:text-[28px] font-bold text-gray-700">
              Breathe Cleaner, Fresher Air
            </h1>
            <p className="text-center text-base lg:text-xl mt-8 text-gray-700 font-medium pb-5 md:pb-8 lg:pb-20">
              When filters become dirty or clogged, they fail to trap dust,
              allergens, and pollutants, resulting in poor indoor air quality.
              Regular servicing ensures filters are cleaned or replaced, greatly
              enhancing the air you breathe at home or in the workplace.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="relative w-full h-auto border border-gray-300 rounded-tl-[20px] rounded-br-[20px] overflow-hidden"
        >
          <img
            src={Install}
            alt=""
            className="w-full h-full absolute inset-0 object-cover -z-10"
          />
          <div className="absolute inset-0 bg-white/90 z-0"></div>

          <div className="relative z-10 px-2 md:px-6 py-5">
            <h1 className="text-xl text-center md:text-2xl lg:text-[28px] font-bold text-gray-700">
              Save More on Your Bills
            </h1>
            <p className="text-center text-base lg:text-xl mt-8 text-gray-700 font-medium pb-5 md:pb-8 lg:pb-20">
              Routine maintenance keeps your AC components clean and in top
              condition. This lowers energy usage and ensures maximum
              efficiency, helping reduce electricity bills and environmental
              impact.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="relative w-full h-auto border border-gray-300 rounded-tl-[20px] rounded-br-[20px] overflow-hidden"
        >
          <img
            src={maintain}
            alt=""
            className="w-full h-full absolute inset-0 object-cover -z-10"
          />
          <div className="absolute inset-0 bg-white/90 z-0"></div>

          <div className="relative z-10 px-2 md:px-6 py-5">
            <h1 className="text-xl text-center md:text-2xl lg:text-[28px] font-bold text-gray-700">
              Ensure Long-Term Reliability
            </h1>
            <p className="text-center text-base lg:text-xl mt-8 text-gray-700 font-medium pb-5 md:pb-8 lg:pb-20">
              Regular servicing detects and fixes small issues before they
              worsen, helping extend the lifespan of your AC, avoid expensive
              replacements, and minimize unexpected breakdowns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
