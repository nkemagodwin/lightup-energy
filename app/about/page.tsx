// app/about/page.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiAward, FiUsers, FiCheckCircle, FiArrowRight } from "react-icons/fi";

/* -------------------------------------------------- */
/*  Animated Counter Component (reusable)             */
/* -------------------------------------------------- */
function Counter({ end, label }: { end: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const stepTime = Math.abs(Math.floor(duration / end));
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="text-4xl font-bold text-cyan-400">{count}+</span>
      <span className="text-gray-400">{label}</span>
    </div>
  );
}

/* -------------------------------------------------- */
/*  Main About Page                                   */
/* -------------------------------------------------- */
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-950 pt-17.5">
      {/* Hero */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          About <span className="text-cyan-400">Lightup Electricals</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Delivering Innovative Electrical Solutions, Renewable Energy Systems, and Smart Automation for Homes and Businesses
        </p>
      </section>

      {/* Who We Are */}
      <section className="container mx-auto px-6 py-12">
        <div className="rounded-2xl bg-blue-950/60 p-8 backdrop-blur-sm md:p-12">
          <h2 className="text-3xl font-bold text-white">Who We Are</h2>
          <div className="mt-6 space-y-4 text-gray-300">
            <p>
              Lightup Electricals is a leading provider of comprehensive electrical solutions, specializing in Solar/Inverter Systems, Smart Home Automation, and General Electrical Contracting. We take pride in delivering sustainable, high‑quality services that meet the evolving needs of our clients.
            </p>
            <p>
              With years of industry experience and a dedicated team of experts, we ensure reliable and cost‑effective solutions tailored to individual requirements. Our focus is on energy efficiency, safety, and enhancing your quality of life through innovative electrical services.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-center text-3xl font-bold text-white">Our Core Values</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            {
              icon: <FiAward size={28} />,
              title: "Commitment to Quality",
              text: "We adhere to the highest standards, using premium materials and cutting‑edge technology to ensure durable and reliable electrical systems.",
            },
            {
              icon: <FiUsers size={28} />,
              title: "Customer Focus",
              text: "Our customer‑centric approach ensures that every solution is tailored to your specific needs, ensuring complete satisfaction.",
            },
            {
              icon: <FiCheckCircle size={28} />,
              title: "Energy Efficiency",
              text: "We promote eco‑friendly solutions by offering energy‑efficient systems that help reduce costs and minimize environmental impact.",
            },
          ].map((v, i) => (
            <div
              key={i}
              className="rounded-xl bg-blue-950/60 p-8 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-blue-950/80"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                {v.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{v.title}</h3>
              <p className="text-gray-400">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-center text-3xl font-bold text-white">Meet Our Team</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {[
            { img: "/img/roy.jpg", name: "Roy Godwin", role: "CEO & Lead Engineer" },
            { img: "/img/team/team-4.jpg", name: "Jane Smith", role: "Operations Manager" },
            { img: "/img/team-1.jpg", name: "Michael Brown", role: "Solar/Inverter Specialist" },
          ].map((member, i) => (
            <div
              key={i}
              className="w-56 rounded-xl bg-blue-950/60 p-6 backdrop-blur-sm text-center transition hover:-translate-y-1"
            >
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-2 border-cyan-400/50">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-cyan-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="rounded-2xl bg-blue-950/60 p-10 backdrop-blur-sm grid grid-cols-2 gap-8 md:grid-cols-4">
          <Counter end={150} label="Projects Completed" />
          <Counter end={80} label="Happy Clients" />
          <Counter end={12} label="Years Experience" />
          <Counter end={45} label="Expert Engineers" />
        </div>
      </section>

      {/* CTA */}
      <div className="container mx-auto px-6 pb-20 text-center">
        <div className="rounded-xl bg-blue-950/60 p-10 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white">Ready to work with us?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-400">
            Let’s discuss how we can bring your electrical project to life with reliability and innovation.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-3.5 font-semibold text-white transition hover:bg-cyan-400"
          >
            Get in Touch <FiArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}