import React, { useEffect, useState } from "react";
import { FaTools, FaHeadset, FaSmile, FaCheckCircle } from "react-icons/fa";

const countersData = [
  {
    id: 1,
    icon: <FaTools size={40} className="text-blue-600" />,
    label: "Years Experience",
    target: 15,
  },
  {
    id: 2,
    icon: <FaHeadset size={40} className="text-green-600" />,
    label: "Support Staff",
    target: 24,
  },
  {
    id: 3,
    icon: <FaSmile size={40} className="text-yellow-500" />,
    label: "Happy Clients",
    target: 500,
  },
  {
    id: 4,
    icon: <FaCheckCircle size={40} className="text-red-600" />,
    label: "Installations",
    target: 750,
  },
];

export default function Counter() {
  // State to hold counts for each counter
  const [counts, setCounts] = useState(
    countersData.map(() => 0)
  );

  useEffect(() => {
    // Animate counts from 0 to target over 2 seconds
    const duration = 2000;
    const frameRate = 30; // 30 updates per second
    const totalFrames = Math.round((duration / 1000) * frameRate);

    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      setCounts(
        countersData.map(({ target }) =>
          Math.min(
            target,
            Math.floor((target / totalFrames) * frame)
          )
        )
      );
      if (frame === totalFrames) clearInterval(interval);
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-10">Company Performance Highlight</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {countersData.map(({ id, icon, label, target }, idx) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center
              transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <div className="mb-4">{icon}</div>
            <div className="text-4xl font-bold text-gray-900">
              {counts[idx]}
              {label === "Happy Clients" || label === "Installations" ? "+" : ""}
            </div>
            <div className="mt-2 text-lg font-medium text-gray-700">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
