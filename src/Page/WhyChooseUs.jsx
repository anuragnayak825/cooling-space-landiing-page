import React from 'react'
import img from '../assets/272.jpg';
import { FaTools, FaClock, FaTags, FaSmile } from 'react-icons/fa';

export default function WhyChooseUs() {
    const serviceFeatures = [
        {
            title: "Highly Experienced Technicians",
            description:
                "With years of hands-on expertise, our team has worked on everything from simple aircon units to complex commercial systems, ensuring reliable performance every time.",
            icon: <FaTools className="text-blue-600 text-5xl" />
        },
        {
            title: "Reliable & Timely Service",
            description:
                "We value your time — that’s why we work efficiently to keep your system running smoothly, minimizing any disruption to your home or business.",
            icon: <FaClock className="text-green-600 text-5xl" />
        },
        {
            title: "Affordable Prices",
            description:
                "Enjoy competitive rates on all our air conditioning services without sacrificing quality or attention to detail.",
            icon: <FaTags className="text-yellow-600 text-5xl" />
        },
        {
            title: "Customer Satisfaction",
            description:
                "Your satisfaction is our top priority. We go above and beyond to make sure your air conditioning system is performing at its best.",
            icon: <FaSmile className="text-pink-600 text-5xl" />
        }
    ];

    return (
        <div className='w-full h-auto lg:px-10 py-10'>
            {/* Heading */}
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
                Your Trusted Cooling Experts
            </h2>
            <p className="text-sm md:text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
                At Super Tasker, we combine expertise, reliability, and customer-focused service to deliver the best aircon solutions for your home or business.
            </p>

            <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-10 max-w-7xl mx-auto px-4'>
                {/* Features grid */}
                <div className='flex-1 w-full'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        {serviceFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-300 shadow-md rounded-xl p-8 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
                            >
                                {feature.icon}
                                <h3 className="text-xl font-semibold mt-4 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className='w-full flex justify-center items-center'>

                        <button onClick={() => { window.location.href = 'https://wa.me/601124419414' }} className='w-auto zoom-up-in my-0 mx-auto px-4 py-2.5 bg-yellow-400 font-bold text-xl rounded-md shadow-md shadow-gray-400 cursor-pointer mt-6'>Get Special 20% Off Today</button>
                    </div>

                </div>

                {/* Image */}
                <div className='flex-1 w-full max-w-md lg:max-w-full'>
                    <img src={img} alt="Why Choose Us" className='w-full h-auto rounded-lg object-cover' />
                </div>
            </div>
        </div>
    );
}
