import React from 'react';
import logo from './assets/logo.png';
import { FaPhone, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const nav = useNavigate();

    // Constants for CTA
    const phoneNumber = '+60 11-2441 9414';
    const phoneHref = 'tel:+601124419414';
    const whatsappHref = 'https://wa.me/601124419414';

    return (
        <>
            {/* Top bar for mobile */}
            {/* Fixed Header */}
            <header className="w-full h-auto px-5 md:px-5 lg:px-10 xl:px-20 py-2 flex justify-between items-center italic shadow bg-white z-50 ">

                {/* Logo */}
                <div>
                    <img
                        onClick={() => nav('/')}
                        src={logo}
                        alt="Logo"
                        className='cursor-pointer w-32 md:w-40'
                    />
                </div>

                {/* Buttons aligned horizontally */}
                <div className='flex  space-x-10 items-center w-full  max-w-md lg:max-w-xl'>
                    <a
                        href={whatsappHref}
                        target='_blank'
                        rel='noopener noreferrer'
                        className=' hidden  bg-gradient-to-br from-[#25D366] to-[#128C7E] p-3 md:flex justify-center items-center gap-2.5 text-white font-semibold sm:text-sm lg:text-lg  tracking-wider rounded-xl shadow-md zoom-up-in'
                    >
                        <FaWhatsapp className='lg:text-2xl zoom-up-in-icon' /> Instant Booking on WhatsApp
                    </a>

                    <a
                        href={phoneHref}
                        className='bg-gradient-to-br fixed right-4 lg:right-10 xl:right-20 z-50 from-blue-500 via-sky-600 to-sky-700 px-3 py-3 md:py-3  flex justify-center items-center gap-2.5 text-white font-semibold sm:text-sm lg:text-lg tracking-wider rounded-md shadow-md shadow-gray-400 zoom-up-in'
                    >
                        <FaPhoneAlt className='lg:text-xl vibrate-rotate' />+60 11-2441 9414
                    </a>
                </div>
            </header>
        </>
    );
}
