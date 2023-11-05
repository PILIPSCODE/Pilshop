"use client";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  return (
    <div className="flex flex-row justify-center mt-4 pointer-events-none mb-9 ">
      <div className="w-full h-80 max-sm:h-48 relative ">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            700:{
             spaceBetween:10,
             slidesPerView:2
            },
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="w-full  h-full bg-white rounded-lg"
        >
          <SwiperSlide className="relative">
        
            <Image
              src="https://res.cloudinary.com/dfgatp7se/image/upload/v1691295034/asset/safu49dl816v8dzgj6ov.jpg"
              className="absolute z-10 object-cover object-bottom"
              fill
              sizes="(max-width:100%)"
              alt=""
            />
            
          </SwiperSlide>
          <SwiperSlide className="relative">
        
            <Image
               src="https://res.cloudinary.com/dfgatp7se/image/upload/v1691294839/fgwy3osmenvazcth5cyy.jpg"
              className="absolute z-10 object-cover object-bottom"
              fill
              sizes="(max-width:100%)"
              alt=""
            />
            
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
