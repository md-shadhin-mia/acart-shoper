import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function SwipeBanner() {
    return (
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide><div className="w-full h-20 bg-green-600" >Slide 1</div></SwiperSlide>
            <SwiperSlide><div className="w-full h-20 bg-green-600" >Slide 1</div></SwiperSlide>
            <SwiperSlide><div className="w-full h-20 bg-green-600" >Slide 1</div></SwiperSlide>
            <SwiperSlide><div className="w-full h-20 bg-green-600" >Slide 1</div></SwiperSlide>
            <SwiperSlide><div className="w-full h-20 bg-green-600" >Slide 1</div></SwiperSlide>
            <SwiperSlide><div className="w-full h-20 bg-green-600" >Slide 1</div></SwiperSlide>
            <SwiperSlide><div className="w-full h-20 bg-green-600" >Slide 1</div></SwiperSlide>
            <SwiperSlide><div className="w-full h-20 bg-green-600" >Slide 1</div></SwiperSlide>
            <SwiperSlide><div className="w-full h-20 bg-green-600" >Slide 1</div></SwiperSlide>
          </Swiper>
        </>
      );
}
