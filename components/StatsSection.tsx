"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 2, label: "PRODUCTS IN MARKET", suffix: "" },
  { value: 12, label: "CLIENTS SERVED", suffix: "" },
  { value: 45, label: "PROPERTIES LISTED", suffix: "" },
  { value: 18, label: "EMPLOYEES", suffix: "" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="relative bg-[#020810] border-y border-white/5 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0 md:divide-x md:divide-white/5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="px-0 md:px-10 first:pl-0 last:pr-0 text-center md:text-left"
            >
              <div className="font-orbitron font-black text-5xl md:text-6xl text-white tabular-nums">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-mono text-[10px] tracking-widest text-steel-400/50 mt-2 uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
