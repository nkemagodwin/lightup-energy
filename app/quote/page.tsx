// app/quote/page.tsx
"use client";
import { useState } from "react";
import { FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const serviceOptions = [
  "Lighting Installation",
  "Solar System Design & Installation",
  "Electrical Accessories Purchase",
  "Maintenance / Repair",
  "Consultation / Audit",
  "Other",
];

const budgetOptions = [
  "Under ₦50,000",
  "₦50,000 – ₦200,000",
  "₦200,000 – ₦500,000",
  "₦500,000 – ₦2,000,000",
  " ₦2,000,000 And Above",
  "Not sure yet",
];

const timelineOptions = [
  "ASAP / Urgent",
  "Within 1 week",
  "2–4 Days",
  "1–4 weeks",
  "1–3 months",
  "Flexible",
];

export default function QuotePage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: "",
    budget: "",
    timeline: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call – replace with real fetch/axios
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 to-blue-950 pt-17.5">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Request a <span className="text-cyan-400">Free Quote</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Tell us about your project and we’ll send you a detailed estimate within 24 hours. No obligation, no pressure.
          </p>
        </div>

        {/* Form container */}
        <div className="mx-auto mt-14 max-w-3xl">
          {status === "success" ? (
            <div className="flex flex-col items-center rounded-2xl bg-blue-950/60 p-12 backdrop-blur-sm">
              <FiCheckCircle className="text-6xl text-green-400" />
              <h2 className="mt-4 text-2xl font-bold text-white">Quote Request Sent!</h2>
              <p className="mt-2 max-w-md text-center text-gray-400">
                Thank you, {formState.name.split(" ")[0] || "friend"}! We’ll review your details and get back to you shortly.
              </p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setFormState({
                    name: "",
                    email: "",
                    phone: "",
                    service: "",
                    description: "",
                    budget: "",
                    timeline: "",
                  });
                }}
                className="mt-6 rounded-full bg-cyan-500 px-8 py-3 font-semibold text-white transition hover:bg-cyan-400"
              >
                Submit Another Quote
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl bg-blue-950/60 p-8 backdrop-blur-sm space-y-8">
              {/* Name & Email */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>

              {/* Phone & Service */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="+234 800 000 0000"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  >
                    <option value="" disabled>Select service…</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  required
                  value={formState.description}
                  onChange={handleChange}
                  placeholder="Describe what you need — location, size, any special requirements…"
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-vertical"
                />
              </div>

              {/* Budget & Timeline */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formState.budget}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  >
                    <option value="" disabled>Select budget…</option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formState.timeline}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  >
                    <option value="" disabled>Select timeline…</option>
                    {timelineOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Error message */}
              {status === "error" && (
                <div className="flex items-center gap-3 rounded-lg bg-red-500/10 p-4 text-red-400">
                  <FiAlertCircle size={20} />
                  <span>Something went wrong. Please try again later.</span>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-8 py-3.5 font-semibold text-white transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    Send Quote Request
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}