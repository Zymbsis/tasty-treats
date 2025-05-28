"use client";

import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./swiper.css";

const Slider = ({ children }: { children: ReactNode[] }) => (
  <Swiper
    spaceBetween={20}
    breakpoints={{
      [768]: { spaceBetween: 32 },
      [1280]: { spaceBetween: 16 },
    }}
    slidesPerView={1}
    modules={[Pagination, Autoplay, Mousewheel]}
    pagination={{
      clickable: true,
      modifierClass: "custom-pagination-",
      renderBullet: function (_, className) {
        return `<span class=${className}>.</span>`;
      },
    }}
    autoplay={{ pauseOnMouseEnter: true, waitForTransition: true }}
    loop
    speed={800}
    followFinger
    mousewheel
    className="h-[302px] w-[518px] md:h-[468px] md:w-[871px]"
  >
    {children.map((Slide, index) => (
      <SwiperSlide key={index}>{Slide}</SwiperSlide>
    ))}
  </Swiper>
);

export default Slider;
