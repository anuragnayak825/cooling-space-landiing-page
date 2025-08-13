import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function OfferSection() {
  return (
    <section className="max-w-7xl mx-auto my-8 p-4 sm:p-6 bg-gradient-to-r from-blue-700 to-sky-400 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start md:justify-between gap-4 sm:gap-6 text-white text-center md:text-left">

      {/* Text Section */}
      <div className="flex-1">
        <h2 className="text-xl sm:text-2xl font-extrabold mb-2">
          We Repair All Makes and Models with Special Offer
        </h2>
        <p className="text-base sm:text-lg">
          Call us for a solution to your AC problems
        </p>
      </div>

      {/* CTA Button */}
      <button onClick={() => { window.location.href = 'tel:+601124419414' }} className="w-full sm:w-auto bg-white text-green-700 font-bold rounded-md px-5 sm:px-6 py-3 hover:bg-green-100 transition flex items-center justify-center gap-2">
        <FaPhoneAlt />
        Claim Now
      </button>
    </section>
  );
}
