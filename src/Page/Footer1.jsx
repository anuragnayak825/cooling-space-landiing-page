import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkedAlt, FaWhatsapp } from "react-icons/fa";
import name from '../assets/logo.png';
import { NavLink } from "react-router-dom";
export default function Footer1() {
    const phoneHref = 'tel:+601124419414';
    const whatsappHref = 'https://wa.me/601124419414';
    return (
        <footer className="bg-[#15253b] text-white py-8 px-6 relative">
            <div className="max-w-7xl mx-auto text-center">

                <img
                    src={name}
                    alt="Fast Aircond Logo"
                    className="mx-auto mb-4 w-40 bg-white px-2 py-1.5 rounded-md"
                />

                <p className="mb-6 max-w-7xl mx-auto text-sm md:text-xl">
                    If you’re looking for aircon installation, repair, or maintenance services, you’re in the right place.
                    We are based in Kuala Lumpur and Selangor, specializing in both residential and commercial aircon services. Reach out today for expert solutions to keep your space cool and comfortable.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-6 mb-6 max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 bg-[#1f3356] p-3 rounded-md w-full md:w-auto justify-center md:justify-start">
                        <FaPhone className="text-yellow-400 text-lg" />
                        <span>
                            +60 11-2441 9414</span>
                    </div>
                    <div className="flex items-center gap-3 bg-[#1f3356] p-3 rounded-md w-full md:w-auto justify-center md:justify-start">
                        <FaEnvelope className="text-yellow-400 text-lg" />
                        <span>
                            coolspaceprosolution@gmail.com</span>
                    </div>

                </div>
                <a
                    href={phoneHref}
                    className='fixed bottom-6  z-50 left-6 p-4 rounded-full bg-gradient-to-br from-blue-500 via-sky-600 to-sky-700 shadow-md shadow-blue-800 '
                >
                    <FaPhone className='text-[26px] text-white vibrate-rotate' />
                </a>

                <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 z-50 right-6 bg-gradient-to-br from-[#25D366] to-[#128C7E] p-3 rounded-full shadow-md animate-bounce shadow-green-800 transition"
                    aria-label="WhatsApp Contact"
                >
                    <FaWhatsapp className="text-white text-4xl" />
                </a>

                <p className="text-base font-semibold mt-6">
                    © 2025 Cool Space Pro Solutions. All Rights Reserved.
                </p>

                <NavLink to={'/aircon-service-kl/privacy-policy'} className="text-lg mt-4 cursor-pointer hover:underline text-center max-w-7xl mx-auto">
                    Privacy Policy
                </NavLink>
            </div>
        </footer>
    );
}
