import React from "react";
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    date: "Jan 2022",
    text: "Excellent service and timely support. Highly recommend!",
  },
  {
    id: 2,
    name: "Sarah Lee",
    date: "Mar 2022",
    text: "Professional and affordable. Great experience overall.",
  },
  {
    id: 3,
    name: "Michael Smith",
    date: "Jul 2022",
    text: "The team handled our installation with expertise and care.",
  },
  {
    id: 4,
    name: "Emily Davis",
    date: "Nov 2022",
    text: "Support was very helpful and quick to respond to our queries.",
  },
];

export default function ReviewTimelineSwiper() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading with Rating */}
        <h2 className="text-3xl font-semibold mb-8 text-center flex flex-col items-center">
          Google Verified Feedback
          <span className="flex items-center gap-2 mt-2 text-yellow-500 text-xl font-bold">
            {/* 4 full stars */}
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
            {/* 1 half star */}
            <FaStarHalfAlt className="text-yellow-500" />
          </span>
          <span className="ml-2 text-gray-700 font-medium">4.7</span>
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: "3rem" }}
        >
          {reviews.map(({ id, name, text }) => {
            return (
              <SwiperSlide key={id}>
                <div
                  className="relative rounded-lg p-8 mx-4 bg-gray-50 shadow-lg"
                  style={{ minHeight: "220px" }}
                >
                  <div className="absolute top-6 left-6 opacity-20">
                    <FaQuoteLeft size={50} />
                  </div>
                  <p className="mb-6 mt-10 italic font-medium">"{text}"</p>
                  <div className="font-bold text-lg">{name}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
