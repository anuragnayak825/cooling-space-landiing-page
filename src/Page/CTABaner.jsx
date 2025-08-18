import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import video from "../assets/0_Air_Circulation_Ventilation_System_1280x720.mp4";

export default function CTABanner() {
  return (
    <section className="relative w-full h-auto md:h-[250px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-2 py-8 md:py-0">
        <h2 className="text-xl sm:text-3xl md:text-[30px] lg:text-4xl font-bold mb-3 sm:mb-4 leading-snug">
          Need Aircon Cooling Fix? Our Technicians Are Ready!
        </h2>

        <p className="text-sm sm:text-base md:text-lg font-semibold max-w-5xl mb-4 sm:mb-6 text-center mx-auto px-2">
          We handle all your aircon needs—installation, repairs, and maintenance—delivered with speed and care. Request your free quote today and enjoy a cool, comfortable space all year-round!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap justify-center w-full sm:w-auto px-2 sm:px-0">
          {/* Call Button */}
          <a
            href="tel:+601124419414"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 sm:px-6 py-3 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg w-full sm:w-auto"
          >
            <FaPhoneAlt className="text-xl" /> Call for Aircon Support
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/601124419414"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 px-4 sm:px-6 py-3 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg w-full sm:w-auto"
          >
            <FaWhatsapp className="text-3xl" /> WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}
