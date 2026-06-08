// app/contact/page.tsx
"use client";
import { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission – replace with real API call
    setFormStatus("sent");
    // Reset after 5 seconds
    setTimeout(() => setFormStatus("idle"), 5000);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 to-blue-950 pt-17.5">
      <div className="container mx-auto px-6 py-16">
        {/* Page header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Get in <span className="text-cyan-400">Touch</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Have a question or project in mind? We’d love to hear from you. Send us a message and we’ll respond as soon as possible.
          </p>
        </div>

        {/* Content grid */}
        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          {/* Contact info cards */}
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-xl bg-blue-950/60 p-6 backdrop-blur-sm transition hover:bg-blue-950/80">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-cyan-500/10 p-3">
                  <FiMapPin className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Office Address</h3>
                  <p className="text-gray-400">12 Marina Road, Lagos Island, Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-blue-950/60 p-6 backdrop-blur-sm transition hover:bg-blue-950/80">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-cyan-500/10 p-3">
                  <FiPhone className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <a href="tel:+2348000000000" className="text-gray-400 hover:text-cyan-400">
                    +234 800 000 0000
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-blue-950/60 p-6 backdrop-blur-sm transition hover:bg-blue-950/80">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-cyan-500/10 p-3">
                  <FiMail className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <a
                    href="mailto:info@lightupelectricals.com"
                    className="text-gray-400 hover:text-cyan-400"
                  >
                    info@lightupelectricals.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-blue-950/60 p-6 backdrop-blur-sm transition hover:bg-blue-950/80">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-cyan-500/10 p-3">
                  <FiClock className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Working Hours</h3>
                  <p className="text-gray-400">Mon – Fri: 8:00 AM – 6:00 PM</p>
                  <p className="text-gray-400">Sat: 9:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-xl bg-blue-950/60 p-8 backdrop-blur-sm lg:col-span-3">
            {formStatus === "sent" ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="rounded-full bg-green-500/10 p-4">
                  <svg className="h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-white">Message Sent!</h2>
                <p className="mt-2 text-gray-400">We’ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder="How can we help?"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Describe your project or inquiry..."
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-cyan-500 px-8 py-3.5 font-semibold text-white transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16 overflow-hidden rounded-xl bg-blue-950/60 p-1 backdrop-blur-sm">
          <div className="flex h-64 items-center justify-center rounded-lg bg-gray-800 text-gray-500 md:h-80">
            <div className="text-center">
              <FiMapPin className="mx-auto text-4xl text-cyan-400" />
              <p className="mt-2">Map integration (Google Maps / Mapbox)</p>
              <p className="text-sm">12 Marina Road, Lagos Island, Lagos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}