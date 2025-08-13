import React from 'react'
import { motion } from 'framer-motion'
import herosection from './assets/cool-space.webp'
import { FaPhone } from 'react-icons/fa'
import Contactfrom from './components/Contactfrom'

export default function HeroSection() {
    return (
        <div
            className="w-full relative"
            style={{
                backgroundImage: `url(${herosection})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            {/* Overlay */}
            <div className="w-full h-full bg-gradient-to-r from-white/70 via-white/40 to-white/80">
                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch px-4 sm:px-6 lg:10 xl:px-24 py-8 sm:py-10 gap-8 overflow-hidden">

                    {/* LEFT TEXT CONTENT */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center">
                        <div className="w-full max-w-2xl relative px-2 sm:px-5 py-5">

                            {/* Decorative corners */}
                            <span className="absolute -top-2 -left-2 w-10 sm:w-12 h-1 bg-blue-500"></span>
                            <span className="absolute -top-2 -left-2 w-1 h-10 sm:h-12 bg-blue-500"></span>
                            
                            <span className="absolute -bottom-2 -right-2 w-10 sm:w-12 h-1 bg-blue-500"></span>
                            <span className="absolute -bottom-2 -right-2 w-1 h-10 sm:h-12 bg-blue-500"></span>

                            <motion.h1
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="text-black text-xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-center lg:text-left"
                            >
                                Get a No-Obligation Aircon Service Quote Today – Selangor & Kuala Lumpur
                            </motion.h1>

                            <motion.p
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 font-semibold text-center lg:text-left"
                            >
                                Comprehensive aircond care — servicing, repairs, leak fixes, troubleshooting, and installations in one place
                            </motion.p>

                            <motion.button
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="w-full sm:w-auto mx-auto lg:mx-0 py-3 px-5 font-semibold hover:bg-blue-700 transition-colors cursor-pointer bg-blue-600 mt-6 sm:mt-8 text-white rounded-md uppercase text-sm sm:text-base md:text-lg flex justify-center items-center gap-2.5"
                            >
                                <FaPhone className="text-lg sm:text-xl md:text-2xl" /> Call Now
                            </motion.button>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-full lg:w-1/2 flex  justify-center lg:justify-end lg:px-3.5 items-center"
                    >
                        <div className="w-full max-w-md ">
                            <Contactfrom />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
