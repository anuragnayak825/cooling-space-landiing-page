import React from "react";
import { MessageCircle, MapPin, CheckCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function ServiceProcess() {
    const steps = [
        {
            id: "01",
            title: "WhatsApp Us",
            desc: "Get instant response from our team",
            icon: <FaWhatsapp size={40} className="text-green-500" />,
        },
        {
            id: "02",
            title: "Options & Locations",
            desc: "Share your location and service requirements",
            icon: <MapPin size={40} className="text-blue-500" />,
        },
        {
            id: "03",
            title: "Service Completed",
            desc: "Our technician arrives at your location",
            icon: <CheckCircle size={40} className="text-teal-500" />,
        },
    ];

    return (
        <section className="w-full py-16 px-6 bg-gradient-to-b from-blue-50 to-white">
            {/* Section Header */}
            <div className="text-center mb-12">
                <span className="px-4 py-1 text-sm font-semibold rounded-full bg-orange-500 text-white">
                    SERVICE PROCESS
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
                    Book Your Aircond Service in 3 Simple Steps
                </h2>
                <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                    We follow a systematic approach to ensure that every service we
                    provide is of the highest quality.
                </p>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="flex flex-col items-center xl:items-start text-center xl:text-left p-8 bg-white rounded-tl-2xl rounded-br-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className="mb-4">{step.icon}</div>
                        <h3 className="text-2xl md:text-xl lg:text-xl xl:text-2xl font-bold text-gray-800">
                            {step.title}
                        </h3>
                        <p className="text-gray-500 text-lg mt-2">{step.desc}</p>
                       
                    </div>
                ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
                <a
                    href="https://wa.me/601124419414"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg font-medium transition transform hover:scale-105"
                >
                    WhatsApp Now
                </a>
                <a
                    href="tel:+60163824522"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg font-medium transition transform hover:scale-105"
                >
                    Call Us Now
                </a>
            </div>
        </section>
    );
}
