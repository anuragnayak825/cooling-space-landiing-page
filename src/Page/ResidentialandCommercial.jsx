import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function ResidentialandCommercial() {
    return (
        <div className="w-full h-auto py-8">
            <div className="w-full h-auto bg-blue-700">
                <div className="flex flex-col lg:flex-row justify-center items-center w-full 
                                min-h-[70vh] bg-gray-400 z-10 rounded-tl-[80px] rounded-br-[80px] 
                                lg:rounded-tl-[200px] lg:rounded-br-[200px] py-10 gap-10 px-5 lg:px-10">

                    {/* Residential Section */}
                    <div className="max-w-2xl h-full flex flex-col justify-center">
                        <h1 className="text-white text-3xl text-center font-semibold">
                            Residential Aircon Services
                        </h1>
                        <p className="text-lg font-medium text-center mt-4 text-white leading-relaxed">
                            A comfortable and inviting home is essential for your family, and in Kuala Lumpur’s hot climate, keeping cool is key.
                            At Super Tasker, we provide expert Residential Aircon Services — from installation to maintenance and repairs.
                            Whether you’re upgrading to a new unit or need a quick tune-up, we’re here to keep your home cool and comfortable.
                        </p>
                        <div className="flex justify-center items-center mt-6">
                            <button className="text-lg font-semibold cursor-pointer group 
                                               text-white bg-blue-600 rounded-md px-4 py-2 flex 
                                               justify-center items-center gap-3 
                                               hover:bg-blue-800 transition-colors duration-300">
                                Book Residential Service
                                <FaArrowRightLong className="group-hover:translate-x-2 transform transition-transform duration-300" />
                            </button>
                        </div>
                    </div>

                    {/* Commercial Section */}
                    <div className="max-w-2xl h-full flex flex-col justify-center">
                        <h1 className="text-white text-3xl text-center font-semibold">
                            Commercial Aircon Service
                        </h1>
                        <p className="text-lg break-words font-medium text-center mt-4 text-white leading-relaxed">
                            In Malaysia’s warm climate, particularly in bustling Kuala Lumpur, keeping indoor temperatures comfortable is crucial for any business.
                            Whether you run an office, retail outlet, or industrial facility, a reliable air conditioning system is essential for employees and visitors alike.
                            At Super Tasker, we provide complete commercial aircon solutions — from installation to maintenance and repairs — ensuring your business stays cool, efficient, and running smoothly all year round.
                        </p>
                        <div className="flex justify-center items-center mt-6">
                            <button className="text-lg font-semibold cursor-pointer group 
                                               text-white bg-blue-600 rounded-md px-4 py-2 flex 
                                               justify-center items-center gap-3 
                                               hover:bg-blue-800 transition-colors duration-300">
                                Book Commercial Service
                                <FaArrowRightLong className="group-hover:translate-x-2 transform transition-transform duration-300" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
