import React, { useEffect, useState, useRef } from "react";
import { FaTools, FaHeadset, FaSmile, FaCheckCircle } from "react-icons/fa";

const countersData = [
  {
    id: 1,
    icon: <FaTools size={40} className="text-blue-600" />,
    label: "Years Experience",
    target: 22,
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
    target: 99,
  },
  {
    id: 4,
    icon: <FaCheckCircle size={40} className="text-red-600" />,
    label: "Installations",
    target: 3000,
  },
];

export default function Counter() {
  const [counts, setCounts] = useState(countersData.map(() => 0));
  const [start, setStart] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
          observer.disconnect(); // Run only once
        }
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (!start) return; // Wait until section is visible

    const duration = 2000;
    const frameRate = 30;
    const totalFrames = Math.round((duration / 1000) * frameRate);

    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      setCounts(
        countersData.map(({ target }) =>
          Math.min(target, Math.floor((target / totalFrames) * frame))
        )
      );
      if (frame === totalFrames) clearInterval(interval);
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, [start]);

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-3">
        Company Performance Highlight
      </h1>
      <p className="font-semibold text-base md:text-lg text-center mx-auto mb-10">
        Expert care for your aircon to keep it running at peak performance.{" "}
        Stay cool and comfortable, season after season.
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {countersData.map(({ id, icon, label }, idx) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center
              transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <div className="mb-4">{icon}</div>
            <div className="text-4xl font-bold text-gray-900">
              {counts[idx]}
              {label === "Installations" || label === "Years Experience" ? "+" : label === "Happy Clients" ? '%' : label === "Support Staff" ? ' Hrs' : ''}
            </div>
            <div className="mt-2 text-lg font-medium text-gray-700">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
