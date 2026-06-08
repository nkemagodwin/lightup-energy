"use client";
import { useState } from "react";
import Image from "next/image";
import { useToast } from "./ToastProvider";
import type { Product } from "../data/content";

export default function ProductCard({ product }: { product: Product }) {
  const { showToast } = useToast();
  const [imgSrc, setImgSrc] = useState(product.img);

  return (
    <div className="rounded-xl bg-white shadow-md transition-transform hover:-translate-y-1">
      <Image
        src={imgSrc}
        alt={product.name}
        width={500}
        height={192}
        className="h-48 w-full object-cover"
        onError={() => {
          if (imgSrc !== product.fallback) {
            setImgSrc(product.fallback);
          }
        }}
      />
      <div className="p-4 text-center">
        <h3 className="mb-1 text-lg font-semibold text-primary">{product.name}</h3>
        <p className="mb-3 text-sm text-gray-600">{product.desc}</p>
        <div className="flex justify-center gap-2">
          <button
            onClick={() => showToast(`"${product.name}" added to cart!`)}
            className="rounded-full bg-green-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-green-700"
          >
            Add to Cart
          </button>
          <button
            onClick={() => showToast(`Viewing details for: ${product.name}`)}
            className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white hover:bg-opacity-90"
          >
            View Item
          </button>
        </div>
      </div>
    </div>
  );
}