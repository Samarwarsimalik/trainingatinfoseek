import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function BannerSlider() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        className="h-[400px]"
      >
        <SwiperSlide>
          <img
            src="/img/banner-1.svg"
            alt="Banner 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/img/banner-1.svg"
            alt="Banner 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/img/banner-1.svg"
            alt="Banner 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BannerSlider;
