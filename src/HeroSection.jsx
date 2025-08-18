import React from 'react'
import { motion } from 'framer-motion'
import herosection from './assets/cool-space.webp'
import { FaPhone, FaPhoneAlt } from 'react-icons/fa'
import Contactfrom from './components/Contactfrom'

export default function HeroSection() {
    return (
        <div
            className="w-full relative"
            style={{
                backgroundImage: "url('/cool-space.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            {/* Overlay */}
            <div className="w-full h-full bg-gradient-to-r from-white/70 via-white/40 to-white/80">
                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch px-4 sm:px-6 lg:10 xl:px-24 py-8 sm:py-10 gap-8 overflow-hidden">

                    {/* LEFT TEXT CONTENT */}
                    <div className="w-full lg:w-[55%]  flex flex-col  items-start justify-center">
                        <div className="w-full max-w-4xl relative px-2 sm:px-10  py-5">

                            {/* Decorative corners */}
                            {/* Decorative corners */}
                            <span data-aos="fade-right" className="absolute hidden xl:block -top-2 -left-2 lg:w-[60%] xl:w-3/4 h-0.5 bg-blue-500"></span>
                            <span data-aos="fade-right" className="absolute hidden xl:block -top-2 -left-2  w-6 sm:w-8 md:w-6 lg:w-6 h-6 sm:h-8 md:h-6 bg-blue-500"></span>
                            <span data-aos="fade-right" className="absolute hidden xl:block -top-2 right-[42%] sm:right-[26%] w-0.5 h-8 sm:h-10 md:h-12 bg-blue-500"></span>
                            <span data-aos="fade-right" className="absolute hidden xl:block -top-2 -left-2 w-0.5 h-1/2 sm:h-[70%] md:h-[85%] xl:h-[86%] bg-blue-500 "></span>
                            <span data-aos="fade-right" className="absolute hidden xl:block bottom-[69px] -left-2 w-6 sm:w-8 md:w-10 h-0.5 bg-blue-500"></span>


                            {/* Decorative corners */}
                            <span data-aos="fade-right" className="absolute   block xl:hidden   -top-2 -left-2 w-10 sm:w-12 h-1 bg-blue-500"></span>
                            <span data-aos="fade-right" className="absolute   block xl:hidden  -top-2 -left-2 w-1 h-10 sm:h-12 bg-blue-500"></span>

                            <span data-aos="fade-left" className="absolute   block xl:hidden -bottom-2 -right-2 w-10 sm:w-12 h-1 bg-blue-500"></span>
                            <span data-aos="fade-left" className="absolute block xl:hidden  -bottom-2 -right-2 w-1 h-10 sm:h-12 bg-blue-500"></span>



                            <motion.h1
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="text-black text-xl sm:text-3xl md:text-4xl xl:text-6xl tracking-wide font-bold md:text-center  lg:text-left"
                            >
                                Your Trusted Aircon Experts in Selangor <br className=' hidden md:block' /> & Kuala Lumpur
                            </motion.h1>

                            <motion.p
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-base sm:text-lg md:text-xl mt-4 sm:mt-10 font-semibold md:text-center lg:text-left"
                            >
                                Get All Your Aircon Needs Sorted — from Servicing and Repairs to Leak Fixes and Installations, All in One Place!
                            </motion.p>

                            <motion.button
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                onClick={() => { window.location.href = 'tel:+601124419414' }}
                                className="w-auto mx-auto sm:w-auto lg:mx-0  py-6 px-5 font-semibold hover:bg-blue-700 transition-colors cursor-pointer bg-blue-600 mt-6 sm:mt-10 text-white  text-sm sm:text-base md:text-lg flex justify-center items-center gap-2.5"
                            >
                                <FaPhoneAlt className="text-lg sm:text-xl md:text-2xl" /> Talk to Our Expert
                            </motion.button>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-full lg:w-[40%] flex  justify-center lg:justify-end lg:px-3.5 items-center"
                    >
                        <div className="w-full lg:max-w-md ">
                            <Contactfrom />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
