// app/services/installation/page.tsx
import Link from "next/link";
import {
  FiHome,
  FiPenTool,
  FiTarget,
  FiClipboard,
  FiUserCheck,
  FiActivity,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";

const installationFeatures = [
  {
    icon: <FiHome size={32} />,
    title: "Residential & Commercial Wiring",
    description:
      "Complete electrical rough‑in and finishing for new builds, renovations, and office fit‑outs, following NEMSA standards.",
  },
  {
    icon: <FiPenTool size={32} />,
    title: "Lighting Design & Installation",
    description:
      "From ambient ceiling lights to decorative fixtures, we plan and install energy‑efficient layouts that suit your space.",
  },
  {
    icon: <FiTarget size={32} />,
    title: "Switchboard & Distribution Panels",
    description:
      "Supply, assemble, and mount consumer units, main panels, and sub‑panels for safe load distribution.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Site Assessment",
    desc: "We visit your location, evaluate power needs, and take measurements.",
    icon: <FiClipboard size={24} />,
  },
  {
    step: "02",
    title: "Custom Design",
    desc: "Our engineers draw a detailed plan covering circuits, load balancing, and future expansion.",
    icon: <FiPenTool size={24} />,
  },
  {
    step: "03",
    title: "Professional Installation",
    desc: "Certified technicians execute the work with premium materials and strict safety protocols.",
    icon: <FiUserCheck size={24} />,
  },
  {
    step: "04",
    title: "Testing & Handover",
    desc: "We conduct thorough inspections, provide certificates, and walk you through the system.",
    icon: <FiActivity size={24} />,
  },
];

const packages = [
  {
    name: "Starter Home",
    price: "From ₦150,000",
    specs: [
      "Up to 3‑bedroom flat",
      "Standard lighting & socket points",
      "Consumer unit upgrade",
      "3‑month workmanship warranty",
    ],
  },
  {
    name: "Office Package",
    price: "From ₦500,000",
    specs: [
      "Open‑plan workspace",
      "Lighting & data cabling",
      "Distribution board",
      "Emergency & exit lights",
      "12‑month full warranty",
    ],
  },
  {
    name: "Solar Integration",
    price: "Custom quote",
    specs: [
      "Hybrid inverter setup",
      "Panel mounting & wiring",
      "Changeover & transfer switches",
      "Monitoring system",
      "2‑year system warranty",
    ],
  },
];

export default function InstallationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-950">
      <div className="container mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Installation <span className="text-cyan-400">Services</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
            From wiring a single room to powering an entire commercial building, we deliver safe, code‑compliant installations every time.
          </p>
        </div>

        {/* Key features */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {installationFeatures.map((feat) => (
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

        {/* Process timeline */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-white">How We Work</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
            Our streamlined process ensures transparency, minimal disruption, and a flawless finish.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {processSteps.map((step, idx) => (
              <div
                key={step.step}
                className="relative rounded-xl bg-blue-950/60 p-6 backdrop-blur-sm transition hover:bg-blue-950/80"
              >
                <span className="absolute -top-3 right-4 text-4xl font-bold text-cyan-400/20">
                  {step.step}
                </span>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Installation packages */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-white">
            Typical Project Packages
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
            These are example scopes – every project is customised to your exact requirements.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-xl p-8 backdrop-blur-sm transition hover:-translate-y-1 ${
                  pkg.name === "Office Package"
                    ? "border-2 border-cyan-400 bg-blue-950/80"
                    : "bg-blue-950/60"
                }`}
              >
                <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                <p className="mt-2 text-3xl font-bold text-cyan-400">{pkg.price}</p>
                <ul className="mt-6 space-y-3">
                  {pkg.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <FiCheck className="mt-0.5 shrink-0 text-cyan-400" size={16} />
                      {spec}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/quote"
                  className={`mt-8 block rounded-lg px-6 py-3 text-center font-semibold transition ${
                    pkg.name === "Office Package"
                      ? "bg-cyan-500 text-white hover:bg-cyan-400"
                      : "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
                  }`}
                >
                  Get a Quote <FiArrowRight className="inline ml-1" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="rounded-xl bg-blue-950/60 p-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white">
              Ready to start your project?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-400">
              Let’s discuss your requirements and provide a free, no‑obligation estimate.
            </p>
            <Link
              href="/quote"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-3.5 font-semibold text-white transition hover:bg-cyan-400"
            >
              Request a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}