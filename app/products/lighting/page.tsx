// app/products/lighting/page.tsx
import Link from "next/link";
import { FiSun, FiZap, FiStar, FiArrowRight, FiCheck } from "react-icons/fi";

const lightingProducts = [
  {
    icon: <FiSun size={36} />,
    name: "LED Bulbs",
    desc: "Energy‑efficient bulbs for homes and offices.",
    price: "From ₦1,500",
    features: [
      "5W – 40W equivalent",
      "Flicker‑free & long lifespan",
      "Warm white & daylight options",
    ],
  },
  {
    icon: <FiZap size={36} />,
    name: "Flood Lights",
    desc: "High‑power outdoor lighting for security and perimeters.",
    price: "From ₦8,500",
    features: [
      "IP65 waterproof rating",
      "Wide beam angle",
      "Durable aluminium housing",
    ],
  },
  {
    icon: <FiStar size={36} />,
    name: "Chandeliers",
    desc: "Elegant designs for luxury spaces.",
    price: "From ₦45,000",
    features: [
      "Crystal & modern metal finishes",
      "Dimmable LED options",
      "Custom chain lengths",
    ],
  },
];

export default function LightingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-950">
      <div className="container mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Lighting <span className="text-cyan-400">Products</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
            Brighten your world with our premium lighting range — from everyday efficiency to statement luxury.
          </p>
        </div>

        {/* Product cards */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {lightingProducts.map((product) => (
            <div
              key={product.name}
              className="flex flex-col rounded-xl bg-blue-950/60 p-8 backdrop-blur-sm transition hover:bg-blue-950/80 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                {product.icon}
              </div>

              {/* Name */}
              <h2 className="text-2xl font-bold text-white">{product.name}</h2>

              {/* Description */}
              <p className="mt-4 flex-1 text-gray-300">{product.desc}</p>

              {/* Price */}
              <p className="mt-6 text-2xl font-bold text-cyan-400">{product.price}</p>

              {/* Features list */}
              <ul className="mt-6 space-y-2 border-t border-white/10 pt-6">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                    <FiCheck className="mt-0.5 shrink-0 text-cyan-400" size={16} />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/quote"
                className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400"
              >
                Request Quote <FiArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="rounded-xl bg-blue-950/60 p-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white">
              Custom lighting projects?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-400">
              We design and supply bespoke lighting solutions for homes, offices, and events. Tell us your vision.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400 px-8 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-white"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}