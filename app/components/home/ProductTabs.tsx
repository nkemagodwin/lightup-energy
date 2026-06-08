"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import ProductCard from "../../components/ProductCard";
import { lightingProducts, solarProducts } from "../../data/content";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("lighting");

  return (
    <>
      <div className="flex justify-center gap-4 py-8">
        <button
          onClick={() => setActiveTab("lighting")}
          className={`rounded-full px-6 py-2 font-semibold transition ${
            activeTab === "lighting"
              ? "bg-accent text-primary"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Lighting & Fittings
        </button>
        <button
          onClick={() => setActiveTab("solar")}
          className={`rounded-full px-6 py-2 font-semibold transition ${
            activeTab === "solar"
              ? "bg-accent text-primary"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Solar & Inverter Systems
        </button>
      </div>

      <section className="container mx-auto px-6 pb-16">
        {activeTab === "lighting" && (
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={20}
            slidesPerView="auto"
            navigation
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {lightingProducts.map((prod, idx) => (
              <SwiperSlide key={idx}>
                <ProductCard product={prod} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {activeTab === "solar" && (
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={20}
            slidesPerView="auto"
            navigation
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {solarProducts.map((prod, idx) => (
              <SwiperSlide key={idx}>
                <ProductCard product={prod} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>
    </>
  );
}