import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkedAlt, FaWhatsapp } from "react-icons/fa";
import name from '../assets/logo.png';
export default function Footer1() {
    return (
        <footer className="bg-[#15253b] text-white py-8 px-6 relative">
            <div className="max-w-7xl mx-auto text-center">

                <img
                    src={name}
                    alt="Fast Aircond Logo"
                    className="mx-auto mb-4 w-40 bg-white px-2 py-1.5 rounded-md"
                />

                <p className="mb-6 max-w-2xl mx-auto text-sm">
                    If you are seeking for aircon installation, repair or maintenance
                    providers, then you are at the right place. We are based in Kuala Lumpur and Selangor regions. And
                    handle both residential aircon services and commercial aircon services.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-6 mb-6 max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 bg-[#1f3356] p-3 rounded-md w-full md:w-auto justify-center md:justify-start">
                        <FaPhone className="text-yellow-400 text-lg" />
                        <span>
                            +60 16-382 4522</span>
                    </div>
                    <div className="flex items-center gap-3 bg-[#1f3356] p-3 rounded-md w-full md:w-auto justify-center md:justify-start">
                        <FaEnvelope className="text-yellow-400 text-lg" />
                        <span>
                            info@accoolncool.com</span>
                    </div>

                </div>

                <a
                    href="https://wa.me/0122501099"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 right-6 bg-green-600 p-4 rounded-full shadow-lg hover:bg-green-700 transition"
                    aria-label="WhatsApp Contact"
                >
                    <FaWhatsapp className="text-white text-2xl" />
                </a>

                <p className="text-sm font-semibold mt-6">
                    © 2025 Fast Aircond Services & Engineering. All Rights Reserved.
                </p>

                <p className="text-sm mt-2 cursor-pointer hover:underline text-right max-w-7xl mx-auto">
                    Privacy Policy
                </p>
            </div>
        </footer>
    );
}
