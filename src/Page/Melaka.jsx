import React from "react";

export default function Melaka() {
    const districts = [
        {
            title: "Melaka Tengah (Central Melaka)",
            items: [
                "Bandar Hilir",
                "Jonker Walk / Jonker Street (Chinatown)",
                "Melaka Raya",
                "Kota Laksamana",
                "Bukit Baru",
                "Bukit Beruang",
                "Peringgit",
                "Ujong Pasir",
                "Klebang",
                "Tanjung Kling",
                "Limbongan",
                "Batu Berendam",
                "Ayer Keroh",
                "Cheng",
                "Taman Merdeka",
                "Taman Melaka Baru",
                "Kampung Morten",
                "Portuguese Settlement",
                "Taman Kota Fesyen",
                "Bachang",
                "Semabok",
                "Durian Tunggal (part)",
            ],
        },
        {
            title: "Alor Gajah District",
            items: [
                "Alor Gajah Town",
                "Masjid Tanah",
                "Kuala Sungai Baru",
                "Rembia",
                "Durian Tunggal (part)",
                "Sungai Udang",
                "Lubok China",
                "Lendu",
                "Machap",
                "Pulau Sebang / Tampin",
                "Taboh Naning",
                "Ayer Paabas",
                "Kelemak",
            ],
        },
        {
            title: "Jasin District",
            items: [
                "Jasin Town",
                "Merlimau",
                "Sungai Rambai",
                "Umbai",
                "Bemban",
                "Asahan",
                "Serkam",
                "Kesang Pajak",
                "Chinchin",
                "Nyalas",
                "Selandar",
                "Simpang Bekoh",
                "Sempang Kerayong",
            ],
        },
        {
            title: "Special Tourist & Notable Spots",
            items: [
                "Dutch Square (Red Square)",
                "Stadthuys",
                "Christ Church Melaka",
                "A Famosa Fort",
                "Menara Taming Sari (Revolving Tower)",
                "Mahkota Parade & Dataran Pahlawan Mall",
                "Encore Melaka (Theatre)",
                "Melaka River Cruise",
                "Melaka Zoo (Ayer Keroh)",
                "Mini Malaysia & ASEAN Cultural Park",
                "Pantai Klebang (White Sand Dunes)",
                "Pantai Puteri",
                "Pantai Pengkalan Balak",
            ],
        },
    ];

    return (
        <div className="w-full h-auto py-14 px-4 xl:px-20 bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-center text-gray-700 mb-12">
                The Best Services In Melaka
            </h1>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                {districts.map((district, index) => (
                    <div
                        key={index}
                        className="h-[500px] flex flex-col bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 p-6"
                    >
                        {/* Title */}
                        <h2 className="text-xl font-semibold text-blue-600 mb-5 border-b border-gray-200 pb-3">
                            {district.title}
                        </h2>

                        {/* Items (scrollable list with custom scrollbar) */}
                        <ul className="space-y-2 text-gray-700 text-sm md:text-base flex-1 overflow-y-auto pr-2 custom-scrollbar">
                            {district.items.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex cursor-pointer items-center gap-2 hover:text-blue-500 transition-colors"
                                >
                                    <span className="text-blue-400">➤</span>
                                    services {item}
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <button onClick={() => { window.location.href = 'https://wa.me/601124419414' }} className="mt-6 cursor-pointer w-full py-3 bg-blue-600 text-white rounded-xl font-semibold text-sm md:text-base shadow hover:bg-blue-700 transition-all">
                            Book Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
