"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMail, FiPhone, FiMapPin, FiArrowUp, FiChevronDown } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState(false);

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 text-gray-300">
      <div className="container mx-auto px-6 py-12 md:py-16">
        {/* Mobile‑only top: brand + social */}
        <div className="mb-10 flex flex-col items-start gap-6 md:hidden">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-white"
          >
            Lightup<span className="text-cyan-400"> Energy</span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-gray-400">
            Illuminating spaces with premium electrical solutions and trusted service since 2010.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="rounded-full bg-gray-800 p-3 text-gray-400 transition hover:bg-cyan-400 hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full bg-gray-800 p-3 text-gray-400 transition hover:bg-cyan-400 hover:text-white"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="rounded-full bg-gray-800 p-3 text-gray-400 transition hover:bg-cyan-400 hover:text-white"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-12 md:gap-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link
              href="/"
              className="inline-block text-2xl font-bold tracking-tight text-white"
            >
              Lightup<span className="text-cyan-400"> Energy</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              Illuminating spaces with premium electrical solutions and trusted service since 2010.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full bg-gray-800 p-2.5 text-gray-400 transition-all duration-300 hover:bg-cyan-400 hover:text-white"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full bg-gray-800 p-2.5 text-gray-400 transition-all duration-300 hover:bg-cyan-400 hover:text-white"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded-full bg-gray-800 p-2.5 text-gray-400 transition-all duration-300 hover:bg-cyan-400 hover:text-white"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Explore
            </h4>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/about"
                className="text-gray-400 transition-colors duration-200 hover:text-white hover:underline underline-offset-4"
              >
                About
              </Link>
              <Link
                href="/products/lighting"
                className="text-gray-400 transition-colors duration-200 hover:text-white hover:underline underline-offset-4"
              >
                Products
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 transition-colors duration-200 hover:text-white hover:underline underline-offset-4"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="text-gray-400 transition-colors duration-200 hover:text-white hover:underline underline-offset-4"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Services
            </h4>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/services/installation"
                className="text-gray-400 transition-colors duration-200 hover:text-white hover:underline underline-offset-4"
              >
                Installation
              </Link>
              <Link
                href="/services/maintenance"
                className="text-gray-400 transition-colors duration-200 hover:text-white hover:underline underline-offset-4"
              >
                Maintenance
              </Link>
              <Link
                href="/services/consultation"
                className="text-gray-400 transition-colors duration-200 hover:text-white hover:underline underline-offset-4"
              >
                Consultation
              </Link>
            </nav>
          </div>

          {/* Contact + Newsletter */}
          <div className="md:col-span-4">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Get in touch
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 shrink-0 text-cyan-400" size={18} />
                <span>12 Marina Road, Lagos Island, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="shrink-0 text-cyan-400" size={18} />
                <a
                  href="tel:+2348022694004"
                  className="transition-colors hover:text-white"
                >
                  +234 802 269 4004
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="shrink-0 text-cyan-400" size={18} />
                <a
                  href="mailto:info@lightupelectricals.com"
                  className="transition-colors hover:text-white"
                >
                  info@lightupelectricals.com
                </a>
              </li>
            </ul>
            <form
              className="mt-6 flex flex-col gap-3 sm:flex-row"
              onSubmit={handleSubscribe}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-400 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
              <button
                type="submit"
                className="rounded-lg bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Mobile Accordion Sections */}
        <div className="space-y-4 md:hidden">
          {/* Explore Accordion */}
          <div className="border-b border-white/10 pb-4">
            <button
              onClick={() => toggleSection("explore")}
              className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold uppercase tracking-widest text-cyan-400"
              aria-expanded={openSection === "explore"}
            >
              Explore
              <FiChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  openSection === "explore" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                openSection === "explore" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <nav className="overflow-hidden space-y-3 pt-2">
                <Link href="/about" className="block text-gray-400 transition-colors hover:text-white">
                  About
                </Link>
                <Link href="/products/lighting" className="block text-gray-400 transition-colors hover:text-white">
                  Products
                </Link>
                <Link href="/contact" className="block text-gray-400 transition-colors hover:text-white">
                  Contact
                </Link>
                <Link href="/blog" className="block text-gray-400 transition-colors hover:text-white">
                  Blog
                </Link>
              </nav>
            </div>
          </div>

          {/* Services Accordion */}
          <div className="border-b border-white/10 pb-4">
            <button
              onClick={() => toggleSection("services")}
              className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold uppercase tracking-widest text-cyan-400"
              aria-expanded={openSection === "services"}
            >
              Services
              <FiChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  openSection === "services" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                openSection === "services" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <nav className="overflow-hidden space-y-3 pt-2">
                <Link href="/services/installation" className="block text-gray-400 transition-colors hover:text-white">
                  Installation
                </Link>
                <Link href="/services/maintenance" className="block text-gray-400 transition-colors hover:text-white">
                  Maintenance
                </Link>
                <Link href="/services/consultation" className="block text-gray-400 transition-colors hover:text-white">
                  Consultation
                </Link>
              </nav>
            </div>
          </div>

          {/* Contact Accordion */}
          <div className="border-b border-white/10 pb-4">
            <button
              onClick={() => toggleSection("contact")}
              className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold uppercase tracking-widest text-cyan-400"
              aria-expanded={openSection === "contact"}
            >
              Get in touch
              <FiChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  openSection === "contact" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                openSection === "contact" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <ul className="overflow-hidden space-y-4 pt-2 text-gray-400">
                <li className="flex items-start gap-3">
                  <FiMapPin className="mt-0.5 shrink-0 text-cyan-400" size={18} />
                  <span>12 Marina Road, Lagos Island, Nigeria</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiPhone className="shrink-0 text-cyan-400" size={18} />
                  <a href="tel:+2348022694004" className="transition-colors hover:text-white">
                    +234 802 269 4004
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FiMail className="shrink-0 text-cyan-400" size={18} />
                  <a href="mailto:info@lightupelectricals.com" className="transition-colors hover:text-white">
                    info@lightupelectricals.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile newsletter */}
          <form
            className="flex flex-col gap-3 pt-2"
            onSubmit={handleSubscribe}
          >
            <label htmlFor="footer-email-mobile" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email-mobile"
              type="email"
              placeholder="Your email"
              className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
            <button
              type="submit"
              className="rounded-lg bg-cyan-500 py-3 text-sm font-semibold text-white transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              {subscribed ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-5 text-sm text-gray-500 md:flex-row">
          <p>&copy; {currentYear} Lightup Electricals. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1 rounded-full bg-gray-800 p-2.5 text-gray-400 transition hover:bg-cyan-400 hover:text-white"
            aria-label="Back to top"
          >
            <FiArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}