// app/services/page.tsx
import Link from "next/link";
import { FiZap, FiSettings, FiClipboard, FiArrowRight } from "react-icons/fi";

const services = [
  {
    icon: <FiZap size={36} />,
    title: "Installation",
    tagline: "Professional wiring and setup you can trust",
    description:
      "Whether it’s a new home, office renovation, or industrial facility, our certified electricians handle everything from lighting layouts to main panel upgrades. We use premium materials and follow NEMSA standards for maximum safety and reliability.",
    features: [
      "Full building wiring (residential & commercial)",
      "Lighting design & installation",
      "Switchboard & distribution board setup",
      "Solar PV system integration",
    ],
  },
  {
    icon: <FiSettings size={36} />,
    title: "Maintenance",
    tagline: "Keep your electrical systems running flawlessly",
    description:
      "Prevent breakdowns and extend the life of your equipment with our routine inspection and repair services. We offer flexible contracts for businesses and one‑time visits for homeowners.",
    features: [
      "Periodic safety inspections",
      "Fault detection & troubleshooting",
      "Switchgear & outlet replacements",
      "Emergency call‑out services",
    ],
  },
  {
    icon: <FiClipboard size={36} />,
    title: "Consultation",
    tagline: "Expert advice before you start your project",
    description:
      "Get clarity on your electrical needs with our in‑depth consultations. We provide load analysis, energy efficiency recommendations, and complete electrical blueprints tailored to your budget.",
    features: [
      "Load & energy audits",
      "Custom electrical plans",
      "Product selection guidance",
      "Budget planning & ROI analysis",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 to-blue-950 pt-17.5">
      <div className="container mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Our <span className="text-cyan-400">Services</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
            From a single socket repair to complete electrical design, Lightup Electricals delivers quality, safety, and efficiency.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-xl bg-blue-950/60 p-8 backdrop-blur-sm transition hover:bg-blue-950/80 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                {service.icon}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-white">{service.title}</h2>
              <p className="mt-2 text-cyan-400/80">{service.tagline}</p>

              {/* Description */}
              <p className="mt-4 flex-1 text-gray-300">{service.description}</p>

              {/* Features list */}
              <ul className="mt-6 space-y-2 border-t border-white/10 pt-6">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="mt-0.5 text-cyan-400">▹</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="rounded-xl bg-blue-950/60 p-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Ready to power your project?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-400">
              Tell us what you need and we’ll provide a free, no‑obligation quote.
            </p>
            <Link
              href="/quote"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-3.5 font-semibold text-white transition hover:bg-cyan-400"
            >
              Get a Free Quote
              <FiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}