import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function OfferSection() {
  return (
    <section className="max-w-7xl mx-auto my-8 p-6 bg-gradient-to-r from-blue-700 to-sky-400 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6 text-white">
      <div className="flex-1">
        <h2 className="text-2xl font-extrabold mb-2">
          We Repair All Makes and Models with Special Offer
        </h2>
        <p className="text-lg">
          Call us for a solution to your AC problems
        </p>
      </div>
      <button className="mt-4 md:mt-0 bg-white text-green-700 font-bold rounded-md px-6 py-3 hover:bg-green-100 transition flex items-center gap-2">
        <FaPhoneAlt />
        Claim Now
      </button>
    </section>
  );
}
