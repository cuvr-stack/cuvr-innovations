"use client";
import { motion } from "framer-motion";

const stats = [
  { key: "LATENCY_MS",    value: "0.02",  label: "Sync Threshold",     color: "#00ff6a" },
  { key: "DENSITY_RES",   value: "16K",   label: "Retinal Resolution", color: "#a855f7" },
  { key: "NODES_ACTIVE",  value: "800k+", label: "Neural Clusters",    color: "#00e5ff" },
  { key: "PRECISION_AGC", value: "99.9%", label: "Motion Fidelity",    color: "#fbbf24" },
];

export default function OurStory() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#080808] overflow-hidden flex flex-col justify-center py-24"
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        {/* ── Story content ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4"
              style={{ color: "rgb(168,85,247)" }}
            >
              LAB.09 // ORIGIN
            </p>
            <h2
              className="font-space font-bold text-white leading-tight mb-3"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Our Story: The<br />Convergence.
            </h2>
            <span className="block w-8 h-[2px] bg-[#00ff6a]" />
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="font-inter text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              In 2021, CUVR Innovation Labs was founded on a singular premise that
              reality is not fixed, but a variable to be optimized. Born from the
              intersection of neural-computation and high-fidelity spatial optics,
              we began our journey in a small laboratory in Tokyo.
            </p>

            <div className="pl-5" style={{ borderLeft: "2px solid rgba(0,255,106,0.4)" }}>
              <p className="font-inter text-sm italic leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                &ldquo;We didn&apos;t just want to build better screens; we wanted to remove
                the screen entirely, creating a direct neural handshake between
                intent and environment.&rdquo;
              </p>
            </div>

            <p className="font-inter text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Today, our systems power the world&apos;s most advanced medical recovery
              protocols and virtual urban planning modules, proving that the digital
              void is the most fertile ground for human progress.
            </p>
          </motion.div>
        </div>

        {/* ── Stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ border: "1px solid #1a1a1a" }}
        >
          {stats.map((s, i) => (
            <div
              key={s.key}
              className="relative p-8 group"
              style={{
                borderRight: i < stats.length - 1 ? "1px solid #1a1a1a" : "none",
              }}
            >
              {/* Coloured top bar on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: s.color }}
              />
              <p
                className="font-mono font-bold uppercase mb-3"
                style={{ fontSize: 9, letterSpacing: "0.2em", color: s.color }}
              >
                {s.key}
              </p>
              <div
                className="font-space font-bold text-white tabular-nums mb-1"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {s.value}
              </div>
              <p className="font-mono" style={{ fontSize: 10, color: "rgba(255,255,255,0.25)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
