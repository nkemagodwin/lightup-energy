"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { heroSlides } from "../../data/content";

export default function HeroCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      loop
      autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
      navigation
      className="h-125 md:h-150"
    >
      {heroSlides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="relative h-full w-full">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = slide.fallback;
              }}
            />
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-6 py-2 text-white">
            <h5 className="text-lg font-semibold">{slide.caption}</h5>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}