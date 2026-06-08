// app/faq/page.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { FiSearch, FiChevronDown, FiMessageCircle } from "react-icons/fi";

type FaqItem = {
  question: string;
  answer: string;
  category: "general" | "services" | "products" | "payment";
};

const faqs: FaqItem[] = [
  {
    question: "What areas do you serve?",
    answer: "We cover Lagos, Abuja, Port Harcourt, and surrounding states. Nationwide delivery is available for all products.",
    category: "general",
  },
  {
    question: "How do I request a quote?",
    answer: "Simply visit our Quote page, fill in your project details, and we’ll send you a detailed estimate within 24 hours.",
    category: "general",
  },
  {
    question: "How long does a typical installation take?",
    answer: "Standard home wiring takes 2–5 days depending on size. Solar installations usually take 1–3 days after site inspection.",
    category: "services",
  },
  {
    question: "Do you offer warranties?",
    answer: "Yes! All installations come with a 12‑month workmanship warranty. Products carry their respective manufacturer warranties.",
    category: "services",
  },
  {
    question: "Can you handle emergency repairs?",
    answer: "Absolutely. We provide 24/7 emergency call‑out services for critical electrical faults. Call our hotline for immediate assistance.",
    category: "services",
  },
  {
    question: "What brands of solar panels do you use?",
    answer: "We partner with top‑tier brands like Canadian Solar, Longi, and locally tested inverters such as Luminous and Felicity.",
    category: "products",
  },
  {
    question: "Can I buy just accessories without installation?",
    answer: "Yes! Our online product catalogue lets you order switches, cables, bulbs, and more. We’ll arrange pickup or delivery.",
    category: "products",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, POS payments, and mobile money. For large projects, we offer milestone‑based payment plans.",
    category: "payment",
  },
  {
    question: "Is there a deposit required?",
    answer: "A 50% deposit is required before work begins; the balance is due upon completion, or as agreed in the contract.",
    category: "payment",
  },
];

const categories = [
  { key: "all", label: "All" },
  { key: "general", label: "General" },
  { key: "services", label: "Services" },
  { key: "products", label: "Products" },
  { key: "payment", label: "Payment" },
] as const;

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-950">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Quick answers to common questions. Can’t find what you’re looking for? We’re just a message away.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-gray-800 py-3 pl-10 pr-4 text-white placeholder-gray-400 outline-none transition focus:border-cyan-400"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeCategory === cat.key
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ accordion */}
        <div className="mt-10 max-w-3xl mx-auto space-y-4">
          {filteredFaqs.length === 0 ? (
            <p className="text-center text-gray-500 py-12">No matching questions found.</p>
          ) : (
            filteredFaqs.map((faq, i) => (
              <div key={i} className="rounded-xl bg-blue-950/60 backdrop-blur-sm">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left text-lg font-medium text-white"
                >
                  {faq.question}
                  <FiChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === i ? "rotate-180 text-cyan-400" : "text-gray-400"
                    }`}
                    size={20}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="rounded-xl bg-blue-950/60 p-10 backdrop-blur-sm">
            <FiMessageCircle className="mx-auto text-4xl text-cyan-400" />
            <h2 className="mt-4 text-2xl font-bold text-white">Still have questions?</h2>
            <p className="mx-auto mt-2 max-w-xl text-gray-400">
              Our team is ready to help. Shoot us a message and we’ll get back to you in no time.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-3.5 font-semibold text-white transition hover:bg-cyan-400"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}