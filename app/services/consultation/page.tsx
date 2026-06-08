// app/services/consultation/page.tsx
import Link from "next/link";
import {
  FiBarChart2,
  FiCpu,
  FiCompass,
  FiClipboard,
  FiCheck,
  FiArrowRight,
  FiBookOpen,
} from "react-icons/fi";

const consultationFeatures = [
  {
    icon: <FiBarChart2 size={32} />,
    title: "Energy Audits & Load Analysis",
    description:
      "We evaluate your current and future power consumption to recommend the most efficient setup, reducing bills and preventing overload.",
  },
  {
    icon: <FiCpu size={32} />,
    title: "Custom Electrical Design",
    description:
      "From single‑room rewiring to multi‑floor commercial plans, we create detailed schematics that meet NEMSA codes and your exact needs.",
  },
  {
    icon: <FiCompass size={32} />,
    title: "Product & Technology Guidance",
    description:
      "Not sure which solar panels, inverters, or switchgear to choose? We provide unbiased advice based on performance data and budget.",
  },
];

const packages = [
  {
    name: "Home Advisory",
    price: "₦25,000",
    features: [
      "On‑site energy assessment",
      "Written report with recommendations",
      "Basic wiring & load schedule",
      "2D lighting layout sketch",
    ],
  },
  {
    name: "Business Blueprint",
    price: "₦150,000",
    features: [
      "Full electrical design package",
      "3D lighting & power layout",
      "Product specification sheet",
      "Bill of quantities (BOQ)",
      "One‑week technical support",
    ],
  },
  {
    name: "Enterprise Retainer",
    price: "Custom",
    features: [
      "Dedicated consultant",
      "Quarterly system audits",
      "Energy monitoring setup",
      "Procurement assistance",
      "24/7 priority support",
    ],
  },
];

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-950">
      <div className="container mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Electrical <span className="text-cyan-400">Consultation</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
            Expert guidance to design, optimize, and future‑proof your electrical systems — whether for a home, office, or industrial facility.
          </p>
        </div>

        {/* Key services */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {consultationFeatures.map((feat) => (
            <div
              key={feat.title}
              className="rounded-xl bg-blue-950/60 p-8 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-blue-950/80"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                {feat.icon}
              </div>
              <h2 className="text-xl font-semibold text-white">{feat.title}</h2>
              <p className="mt-3 text-gray-300">{feat.description}</p>
            </div>
          ))}
        </div>

        {/* How it works / process */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-white">How We Consult</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-blue-950/60 p-8 backdrop-blur-sm">
              <div className="text-3xl font-bold text-cyan-400/30">01</div>
              <h3 className="mt-2 text-lg font-semibold text-white">Discovery Call</h3>
              <p className="mt-2 text-gray-400">
                We discuss your goals, existing setup, and any pain points — over the phone or on‑site.
              </p>
            </div>
            <div className="rounded-xl bg-blue-950/60 p-8 backdrop-blur-sm">
              <div className="text-3xl font-bold text-cyan-400/30">02</div>
              <h3 className="mt-2 text-lg font-semibold text-white">Analysis & Design</h3>
              <p className="mt-2 text-gray-400">
                Our engineers perform calculations, create schematics, and prepare a detailed recommendation.
              </p>
            </div>
            <div className="rounded-xl bg-blue-950/60 p-8 backdrop-blur-sm">
              <div className="text-3xl font-bold text-cyan-400/30">03</div>
              <h3 className="mt-2 text-lg font-semibold text-white">Report & Roadmap</h3>
              <p className="mt-2 text-gray-400">
                You receive a clear, actionable report with next steps — no jargon, no pressure.
              </p>
            </div>
          </div>
        </div>

        {/* Packages */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-white">Consultation Packages</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
            Whether you need a quick advisory or a full blueprint, we have a plan that fits.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-xl p-8 backdrop-blur-sm transition hover:-translate-y-1 ${
                  pkg.name === "Business Blueprint"
                    ? "border-2 border-cyan-400 bg-blue-950/80"
                    : "bg-blue-950/60"
                }`}
              >
                <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                <p className="mt-2 text-3xl font-bold text-cyan-400">{pkg.price}</p>
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <FiCheck className="mt-0.5 shrink-0 text-cyan-400" size={16} />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/quote"
                  className={`mt-8 block rounded-lg px-6 py-3 text-center font-semibold transition ${
                    pkg.name === "Business Blueprint"
                      ? "bg-cyan-500 text-white hover:bg-cyan-400"
                      : "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
                  }`}
                >
                  Book Consultation <FiArrowRight className="inline ml-1" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="rounded-xl bg-blue-950/60 p-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white">
              Not sure where to start?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-400">
              Book a free 15‑minute discovery call and let our experts point you in the right direction.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400 px-8 py-3.5 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-white"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}