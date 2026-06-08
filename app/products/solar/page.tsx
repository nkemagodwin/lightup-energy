// app/products/solar/page.tsx
import Link from "next/link";
import { FiSun, FiBattery, FiZap, FiArrowRight, FiCheck } from "react-icons/fi";

const solarProducts = [
  {
    icon: <FiSun size={36} />,
    name: "Monocrystalline Panels",
    power: "200W – 400W",
    description:
      "High‑efficiency panels with excellent low‑light performance. Ideal for residential and commercial rooftops.",
    price: "From ₦75,000",
    features: [
      "25‑year linear power warranty",
      "Anti‑reflective coating",
      "Corrosion‑resistant frame",
    ],
  },
  {
    icon: <FiZap size={36} />,
    name: "Pure Sine Wave Inverters",
    power: "1kVA – 10kVA",
    description:
      "Reliable power conversion with built‑in MPPT charge controllers. Supports grid‑tied and off‑grid setups.",
    price: "From ₦120,000",
    features: [
      "LCD display & remote monitoring",
      "Overload & short‑circuit protection",
      "Compatible with lithium & lead‑acid batteries",
    ],
  },
  {
    icon: <FiBattery size={36} />,
    name: "Deep Cycle Batteries",
    power: "Lithium‑ion & Tubular",
    description:
      "Long‑lasting energy storage for uninterrupted power. Available in various capacities.",
    price: "From ₦95,000",
    features: [
      "3,000+ cycles @ 80% DoD (LiFePO4)",
      "Maintenance‑free operation",
      "Built‑in BMS for safety",
    ],
  },
];

export default function SolarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-950 pt-17.5">
      <div className="container mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Solar <span className="text-cyan-400">Solutions</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
            Harness clean, reliable energy with our premium range of solar panels, inverters, and batteries — designed for Nigerian homes and businesses.
          </p>
        </div>

        {/* Product cards */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {solarProducts.map((product) => (
            <div
              key={product.name}
              className="flex flex-col rounded-xl bg-blue-950/60 p-8 backdrop-blur-sm transition hover:bg-blue-950/80 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                {product.icon}
              </div>

              {/* Name & power */}
              <h2 className="text-2xl font-bold text-white">{product.name}</h2>
              <span className="mt-1 inline-block text-sm font-medium text-cyan-400">
                {product.power}
              </span>

              {/* Description */}
              <p className="mt-4 flex-1 text-gray-300">{product.description}</p>

              {/* Price */}
              <p className="mt-6 text-2xl font-bold text-yellow-400">{product.price}</p>

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
                Get a Quote <FiArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="rounded-xl bg-blue-950/60 p-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white">
              Not sure what you need?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-400">
              Our engineers can design a custom solar package that fits your budget and energy goals.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400 px-8 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-white"
            >
              Contact an Expert
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}