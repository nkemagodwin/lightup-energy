// app/products/accessories/page.tsx
import Link from "next/link";
import { FiCpu, FiToggleLeft, FiGrid, FiArrowRight, FiCheck } from "react-icons/fi";

const accessories = [
  {
    icon: <FiCpu size={36} />,
    name: "Cables & Wires",
    spec: "Copper & Aluminium, all gauges",
    description:
      "High‑quality wiring for residential, commercial, and industrial installations. Durable insulation and full NIS compliance.",
    price: "From ₦500 per metre",
    features: [
      "Flexible & rigid options",
      "Flame‑retardant PVC insulation",
      "Available in 1mm² – 16mm²",
    ],
  },
  {
    icon: <FiToggleLeft size={36} />,
    name: "Switches & Sockets",
    spec: "Modern, durable designs",
    description:
      "Enhance any space with our range of sleek switches, dimmers, and power outlets. Designed for safety and style.",
    price: "From ₦2,500",
    features: [
      "1‑gang, 2‑gang & multi‑gang",
      "UK & EU standard options",
      "Scratch‑resistant polycarbonate",
    ],
  },
  {
    icon: <FiGrid size={36} />,
    name: "Distribution Boards",
    spec: "Single & three‑phase",
    description:
      "Complete consumer units and panel boards with circuit breakers. Ready for immediate installation.",
    price: "From ₦18,000",
    features: [
      "IP65 weatherproof enclosures",
      "Pre‑wired options available",
      "Compatible with MCB, RCD, RCBO",
    ],
  },
];

export default function AccessoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-950 pt-17.5">
      <div className="container mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Electrical <span className="text-cyan-400">Accessories</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
            From cables to consumer units – every component you need for a safe, complete electrical system.
          </p>
        </div>

        {/* Product cards */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {accessories.map((item) => (
            <div
              key={item.name}
              className="flex flex-col rounded-xl bg-blue-950/60 p-8 backdrop-blur-sm transition hover:bg-blue-950/80 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                {item.icon}
              </div>

              {/* Name & spec */}
              <h2 className="text-2xl font-bold text-white">{item.name}</h2>
              <span className="mt-1 inline-block text-sm font-medium text-cyan-400">
                {item.spec}
              </span>

              {/* Description */}
              <p className="mt-4 flex-1 text-gray-300">{item.description}</p>

              {/* Price */}
              <p className="mt-6 text-2xl font-bold text-yellow-400">{item.price}</p>

              {/* Features list */}
              <ul className="mt-6 space-y-2 border-t border-white/10 pt-6">
                {item.features.map((feat, idx) => (
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
              Bulk orders welcome!
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-400">
              Need accessories for a large project? We offer competitive trade pricing and fast nationwide delivery.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400 px-8 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-white"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}