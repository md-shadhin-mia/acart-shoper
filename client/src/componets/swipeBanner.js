import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import tempData from "../tempData";

export default function SwipeBanner() {
    const [banners, setBanner]= useState([]);
    useEffect(()=>{
      setBanner(tempData.image);
    })
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
            {banners.map((value, index)=>{
              return <SwiperSlide key={index}><div className="w-full bg-green-600 max-h-screen h-[60vh]" ><img src={value} className="object-cover w-full h-full"/></div></SwiperSlide>
            })}
          </Swiper>
        </>
      );
}
