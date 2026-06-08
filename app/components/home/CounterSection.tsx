"use client";
import { useState, useEffect, useRef } from "react";

export default function CounterSection() {
  const [activeProjects, setActiveProjects] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);
  const [totalQuotes, setTotalQuotes] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const animateCounter = (
      setter: React.Dispatch<React.SetStateAction<number>>,
      target: number,
      speed = 60
    ) => {
      let current = 0;
      const increment = Math.ceil(target / speed);
      let rafId: number;
      const step = () => {
        current += increment;
        if (current >= target) {
          setter(target);
          return;
        }
        setter(current);
        rafId = requestAnimationFrame(step);
      };
      rafId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(rafId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const clean1 = animateCounter(setActiveProjects, 24);
          const clean2 = animateCounter(setCompletedProjects, 138);
          const clean3 = animateCounter(setTotalQuotes, 47);
          observer.unobserve(entries[0].target);
          return () => {
            clean1();
            clean2();
            clean3();
          };
        }
      },
      { threshold: 0.3 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-primary py-16 text-white">
      <div className="container mx-auto flex flex-wrap justify-center gap-8 text-center">
        <div className="w-36">
          <h2 className="text-5xl font-bold text-accent">{activeProjects}</h2>
          <p className="mt-1 text-lg">Active Projects</p>
        </div>
        <div className="w-36">
          <h2 className="text-5xl font-bold text-accent">{completedProjects}</h2>
          <p className="mt-1 text-lg">Completed Projects</p>
        </div>
        <div className="w-36">
          <h2 className="text-5xl font-bold text-accent">{totalQuotes}</h2>
          <p className="mt-1 text-lg">Total Quotes (30 days)</p>
        </div>
      </div>
    </section>
  );
}