import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logo from './assets/logo.png';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

export default function Header() {
    const [showSticky, setShowSticky] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Constants for CTA
    const phoneNumber = '+60 11-2441 9414';
    const phoneHref = 'tel:+601124419414';
    const whatsappHref = 'https://wa.me/601124419414';

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowSticky(false); // Scrolling down
            } else {
                setShowSticky(true); // Scrolling up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <>
            {/* Top bar for mobile */}
            <div className='lg:hidden w-full h-auto py-2 px-2 sm:px-5 border-b border-b-gray-300 flex justify-center space-x-1.5 items-center'>
                <p className='font-semibold text-sm text-gray-600'>
                    <span className='underline mr-1.5'>Call us</span> {phoneNumber}
                </p>
                <span className='px-2 border-s border-s-gray-300 text-sm font-semibold text-gray-600 flex justify-center items-center gap-1 '>
                    <FaLocationDot /> Kuala Lumpur
                </span>
            </div>

            {/* Sticky Header with Animation */}
            <motion.header
                animate={{
                    y: showSticky ? 0 : -100,
                    opacity: showSticky ? 1 : 0,
                }}
                transition={{ type: 'spring', stiffness: 80, damping: 20 }}
                className="w-full h-auto px-5 md:px-5 lg:px-10 xl:px-20 py-2 flex justify-between items-center italic shadow bg-white z-50 sticky top-0 left-0 right-0"
            >
                {/* Logo */}
                <div>
                    <img src={logo} alt="Logo" className='w-24 md:w-36' />
                </div>

                {/* Buttons */}
                <div className='flex space-x-6 sm:space-x-5 md:space-x-10 items-center h-full'>
                    {/* Full-size buttons (Desktop / Tablet) */}
                    <a
                        href={phoneHref}
                        className='text-white hidden font-semibold sm:text-sm lg:text-xl tracking-wider bg-gradient-to-br from-blue-500 via-sky-600 to-sky-700 p-3 rounded-md sm:flex justify-center items-center gap-2.5 shadow-md shadow-blue-900'
                    >
                        <FaPhone className='lg:text-2xl vibrate-rotate' /> Talk to Our Expert
                    </a>

                    <a
                        href={whatsappHref}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-gradient-to-br hidden from-[#25D366] to-[#128C7E] p-3 sm:flex justify-center items-center gap-2.5 text-white font-semibold sm:text-sm lg:text-xl tracking-wider rounded-md shadow-md shadow-green-900 animate-bounce'
                    >
                        <FaWhatsapp className='lg:text-3xl' /> Book Now on WhatsApp
                    </a>

                    {/* Mobile icon buttons only */}
                    <a
                        href={whatsappHref}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='sm:hidden w-auto p-3 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E]'
                    >
                        <FaWhatsapp className='text-3xl text-white' />
                    </a>

                    <a
                        href={phoneHref}
                        className='sm:hidden w-auto p-3 rounded-full bg-gradient-to-br from-blue-500 via-sky-600 to-sky-700'
                    >
                        <FaPhone className='text-[26px] text-white vibrate-rotate' />
                    </a>
                </div>

                {/* Contact info (Desktop only) */}
               
            </motion.header>
        </>
    );
}
