import React, { useEffect, useState } from "react";
import Header from "../Header";
import Confetti from "react-confetti";
import Footer1 from "./Footer1";
import Lottie from 'lottie-react'

import  animationData from '../assets/Cd9DeO0Wyr.json'

export default function ThankyouPage() {
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleGoBack = () => {
        window.history.back();
    };

    useEffect(() => {
        window.scrollTo(0, 0); // scroll to top when component mounts
    }, []);

    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center h-auto bg-gradient-to-br from-pink-100 via-yellow-100 to-purple-200 overflow-hidden relative px-4">
                {/* 🎉 Confetti */}
                <Confetti
                    width={windowDimensions.width}
                    height={windowDimensions.height}
                    numberOfPieces={800}
                    recycle={false}
                />

                {/* ✅ Animated Checkmark */}
                <Lottie
                    
                    className="mb-6 mt-6 "
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                />
                {/* <div className="w-32 h-32 mb-6 rounded-full bg-green-600 flex items-center justify-center shadow-xl">
                    <svg
                        className="w-20 h-20"
                        viewBox="0 0 52 52"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="26"
                            cy="26"
                            r="25"
                            stroke="white"
                            strokeWidth="2"
                            fill="none"
                        />
                        <path
                            d="M14 27l7 7 16-16"
                            fill="none"
                            stroke="white"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{
                                strokeDasharray: 48,
                                strokeDashoffset: 48,
                                animation: "drawCheck 0.5s forwards 0.5s",
                            }}
                        />
                    </svg>
                </div> */}

                {/* 📝 Message */}
                <h1 className="text-2xl lg:text-6xl font-bold text-purple-700 mb-2">Thank You!</h1>
                <p className="mt-2 text-xl text-gray-700 mb-6 text-center max-w-xl">
                    Thank you for reaching out! Our team will get back to you as soon as
                    possible.
                </p>

                {/* 🔙 Back Button */}
                <button
                    onClick={handleGoBack}
                    className="bg-purple-700 mb-14 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-300"
                >
                    Go Back
                </button>

                {/* Footer */}
                <div className="absolute bottom-6 text-sm text-gray-500">
                    © 2025 | Made with ❤️
                </div>

                <style>{`
          @keyframes drawCheck {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>
            </div>
            <Footer1 />
        </>
    );
}
