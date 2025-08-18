import React from 'react';
import { motion } from 'framer-motion';
import Aboutimg from '../assets/air_flow.webp';

export default function About() {

    const slideRight = {
        hidden: { opacity: 0, x: 60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.3 }
        }
    };

    const slideLeft = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }
        }
    };

    // Container for text content to stagger children animation
    const contentContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5,
                ease: [0.4, 0, 0.2, 1],
            }
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
        }
    };

    return (
        <div
            className="w-full overflow-hidden h-auto px-4 sm:px-6 md:px-10 lg:px-10 xl:px-20 py-8 lg:py-16 flex flex-col lg:flex-row items-center lg:items-start gap-8"
        >
            {/* Left - Image */}
            <div
                className="w-full lg:w-1/2 flex justify-center"

            >
                <img
                    data-aos="zoom-in-right"
                    src={Aboutimg}
                    alt="Aircon Service"
                    className="w-full max-w-[600px] lg:max-w-[640px] xl:max-w-[600px] h-auto rounded-md shadow-md object-cover"
                />
            </div>

            {/* Right - Content */}
            <motion.div
                className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideRight}
            >
                {/* Add a container to stagger children */}
                <motion.div
                    variants={contentContainer}
                    className="w-full flex flex-col items-center lg:items-start space-y-6 lg:space-y-3 xl:space-y-6 text-center lg:text-left"
                >
                    <motion.button
                        className="px-4 py-2 font-semibold bg-gray-50 rounded-md shadow-md shadow-gray-300 text-base sm:text-lg lg:text-sm xl:text-lg"
                        variants={slideRight}
                    >
                        You’re in the Right Place
                    </motion.button>

                    <motion.h1
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-[28px] xl:text-[40px] font-bold leading-snug"
                        variants={slideRight}
                    >
                        Find Nearest Service From Your Home
                    </motion.h1>

                    <motion.p
                        className="text-base sm:text-lg lg:text-sm xl:text-lg font-medium text-gray-600 leading-relaxed"
                        variants={slideRight}
                    >
                        If you’re looking for expert aircon installation, repair, or maintenance, you’ve come to the right place.
                        Based in Kuala Lumpur, we cater to both residential and commercial clients, delivering dependable,
                        efficient, and professional aircond services tailored to each customer’s unique needs.
                    </motion.p>

                    <motion.button
                        onClick={() => { window.location.href = 'https://wa.me/601124419414' }}
                        className="px-4 sm:px-6 cursor-pointer py-2 sm:py-3 lg:py-2 xl:py-3 font-bold text-lg tracking-wide bg-sky-500 hover:bg-sky-600 text-white rounded-md transition duration-300"
                        variants={fadeUp}
                    >
                        Schedule My Appointment
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    );
}
