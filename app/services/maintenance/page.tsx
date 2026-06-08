// app/services/maintenance/page.tsx
import Link from "next/link";
import { FiTool, FiClock, FiAlertTriangle, FiArrowRight, FiCheck } from "react-icons/fi";

const maintenanceFeatures = [
  {
    icon: <FiTool size={32} />,
    title: "Routine Inspections",
    description:
      "Scheduled checks of wiring, switchgear, and appliances to identify wear before it becomes a hazard. Includes thermal imaging and insulation testing.",
  },
  {
    icon: <FiAlertTriangle size={32} />,
    title: "Fault Diagnosis & Repair",
    description:
      "Fast identification of faults, from tripping breakers to burnt sockets, using advanced diagnostic tools to restore power safely.",
  },
  {
    icon: <FiClock size={32} />,
    title: "Emergency Call‑Outs",
    description:
      "24/7 rapid response for critical electrical failures. Our engineers are on standby to minimize downtime and keep your property safe.",
  },
];

const packages = [
  {
    name: "Home Basic",
    price: "₦30,000 / year",
    benefits: [
      "Bi‑annual inspections",
      "Socket & switch testing",
      "Minor repairs included",
      "Priority phone support",
    ],
  },
  {
    name: "Business Pro",
    price: "₦120,000 / year",
    benefits: [
      "Quarterly inspections",
      "Full emergency cover",
      "Panel & RCD testing",
      "Dedicated account manager",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    benefits: [
      "Unlimited site visits",
      "Asset management",
      "24/7 engineer dispatch",
      "Energy monitoring",
    ],
  },
];

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-950">
      <div className="container mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Electrical <span className="text-cyan-400">Maintenance</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
            Keep your electrical systems safe, efficient, and compliant with our comprehensive maintenance programs for homes and businesses.
          </p>
        </div>

        {/* Key services */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {maintenanceFeatures.map((feat) => (
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

        {/* Maintenance packages */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-white">
            Maintenance Packages
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
            Choose a plan that fits your property and budget. All packages include certified engineers and NEMSA‑compliant service.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-xl p-8 backdrop-blur-sm transition hover:-translate-y-1 ${
                  pkg.name === "Business Pro"
                    ? "border-2 border-cyan-400 bg-blue-950/80"
                    : "bg-blue-950/60"
                }`}
              >
                <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                <p className="mt-2 text-3xl font-bold text-cyan-400">{pkg.price}</p>
                <ul className="mt-6 space-y-3">
                  {pkg.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <FiCheck className="mt-0.5 shrink-0 text-cyan-400" size={16} />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/quote"
                  className={`mt-8 block rounded-lg px-6 py-3 text-center font-semibold transition ${
                    pkg.name === "Business Pro"
                      ? "bg-cyan-500 text-white hover:bg-cyan-400"
                      : "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
                  }`}
                >
                  Get Started <FiArrowRight className="inline ml-1" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="rounded-xl bg-blue-950/60 p-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white">
              Need emergency repair now?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-400">
              Call our 24/7 hotline for immediate assistance from a certified electrician.
            </p>
            <Link
              href="tel:+2348022694004"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-500 px-8 py-3.5 font-semibold text-white transition hover:bg-red-400"
            >
              Call Now: +234 802 269 4004
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}