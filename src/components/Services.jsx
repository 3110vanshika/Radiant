import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import service1 from '../assets/service1.jpg'

const Services = () => {
  return (
    <div className="px-10 py-10">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
            <div>
                <img src={service1} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Services;
