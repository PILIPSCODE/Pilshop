"use client";
import React from "react";
// import Swiper core and required modules
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
    <div className="flex flex-row justify-center mt-4 pointer-events-none ">
      <div className="w-11/12 h-80 relative ">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          scrollbar={{ draggable: true }}
          className="w-full  h-full  rounded-lg"
        >
          <SwiperSlide>
          

            <Image
              src="https://res.cloudinary.com/dfgatp7se/image/upload/v1691294839/fgwy3osmenvazcth5cyy.jpg"
              className="absolute z-10"
              alt=""
              sizes="(max-width:100%)"
              fill
              style={{
                objectFit: 'cover',
                maxWidth:"100%",
                maxHeight:"100%",
              }}
            />
      
          </SwiperSlide>
          <SwiperSlide>
        
            <Image
              src="https://res.cloudinary.com/dfgatp7se/image/upload/v1691295034/asset/safu49dl816v8dzgj6ov.jpg"
              className="absolute z-10"
              fill
              sizes="(max-width:100%)"
              alt=""
              style={{
                objectFit: 'cover',
                maxWidth:"100%",
                minHeight:"80%",
              }}
            />
            
          </SwiperSlide>
          <SwiperSlide>
         
            <Image
              src="https://res.cloudinary.com/dfgatp7se/image/upload/v1691295078/asset/qfraroanluvxszrq0wih.jpg"
              className="absolute z-10"
              alt=""
              sizes="(max-width:100%)"
              fill
              style={{
                objectFit: 'cover',
                maxWidth:"100%",
                maxHeight:"100%",

              }}
            />
         
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
