import React from "react";
import { MapPin } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";

export default function ServiceLocations() {
  const locations = [
    "Shah Alam",
    "Klang",
    "Bangi",
    "Ampang",
    "Beranang",
    "Kajang",
    "Cyberjaya",
    "Rawang",
    "Peak Nature",
    "Subang Jaya",
    "Loyal Nature",
    "Balakong",
    "Setia Alam",
    "Banting",
    "Gombak",
    "Kelana Jaya",
    "Sungai Buloh",
    "Damansara City",
    "Batu Caves",
    "Kuchai Lama",
    // "Puchong",
    // "Kembangan Series",
    // "Jelutong Hill",
    // "Sepang",
    // "Kemuning City",
    // "Semenyih",
    // "Ara Damansara",
    // "Bandar Saujana Putra",
    // "Dengkil",
    // "Kapar",
    // "Meru Klang",
    // "USJ",
    // "Bandar Baru Bangi",
    // "Bandar Utama",
    // "Bandar Mahkota",
    // "Bukit Jelutong",
    // "Country Heights",
    // "Tropicana Damansara",
    // "Damansara Perdana",
    // "Damansara Jaya",
    // "Damansara Utama",
    // "Kota Damansara",
    // "Kota Kemuning",
    // "Mutiara Damansara",
    // "Putra Height",
    // "Puncak Jalil",
    // "Serdang",
    // "Selayang",
    // "Seri Kembangan",
  ];

  return (
    <section className="w-full py-12 px-4 md:px-10 xl:px-20 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
        📍 Our Service Locations
      </h2>

      <div className="w-full max-w-7xl mx-auto text-white font-semibold text-2xl py-2 bg-blue-600 rounded-md text-center mb-6  ">
        Selangor
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 xl:px-20">
        {locations.map((loc, idx) => (
          <div
            key={idx}
            className="bg-white hover:text-yellow-500 transition-all hover:translate-x-2  transform flex items-center italicss text-blue-900 text-sm md:text-base font-medium px-4 py-2 rounded shadow-md cursor-pointer duration-200 gap-2"
          >
            <FaLocationDot className="text-blue-600" />
            <p className="text-gray-700 font-medium text-center">{loc}</p>
          </div>
        ))}
      </div>
      <div className="w-full max-w-7xl mx-auto text-white font-semibold text-2xl py-2 bg-blue-600 rounded-md text-center mb-6 mt-6">
        Kuala Lumpur
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 xl:px-20">
        {locations2.map((loc, idx) => (
          <div
            key={idx}
            className="bg-white hover:text-yellow-500 transition-all hover:translate-x-2  transform flex items-center italicss text-blue-900 text-sm md:text-base font-medium px-4 py-2 rounded shadow-md cursor-pointer duration-200 gap-2"
          >
            <FaLocationDot className="text-blue-600" />
            <p className="text-gray-700 font-medium text-center">{loc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


const locations2 = [
  "Pudu",
  "Sentul",
  "Maluri",
  "Bangsar",
  "Setapak",
  "Wangsa Maju",
  "Chow Kit",
  "Brickfields",
  "Bukit Jalil",
  "Mont Kiara",
  "Sungai Besi",
  "Cheras",
  "Desa Parkcity",
  "Desa Petaling",
  "Kepong",
  "Pantai Hill Park",
  "Sri Petaling",
  "Bandar Sunway",
  "Damansara Indah",
  "Taman OUG",
];
