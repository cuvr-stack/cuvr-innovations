"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";

const milestones = [
  {
    quarter: "Q1 2024",
    title: "Middleware V4.0",
    status: "complete",
    description:
      "Ultra-Low Latency Environment Integration complete. Cinematic distributed architecture dashboard stable.",
    cta: "View Docs",
  },
  {
    quarter: "Q3 2024",
    title: "Spatial Twin Network",
    status: "complete",
    description:
      "Global synchronization for spatial property access. Real-time multi-node collaboration framework active.",
    cta: "View Docs",
  },
  {
    quarter: "Q1/Q2 2025",
    title: "Operation Interface Zero",
    status: "active",
    description:
      "Direct BCI integration for high-fidelity rehab telemetry and immersive enterprise simulation forms.",
    cta: "View Docs",
  },
];

export default function ExpansionRoadmap() {
  return (
    <section id="roadmap" className="relative py-28 bg-[#020810] overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/8 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400/60 uppercase mb-4">
            — A Decentralised Trajectory Through the Digital Void
          </p>
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white tracking-tight">
            Expansion Roadmap
          </h2>
          <p className="font-inter text-sm text-steel-400/60 mt-3 max-w-md mx-auto">
            Future-prouting human interaction.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal connector (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {milestones.map((m, i) => (
              <motion.div
                key={m.quarter}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative group"
              >
                {/* Node dot */}
                <div className="hidden lg:flex absolute -top-0.5 left-1/2 -translate-x-1/2 -translate-y-full pb-3 justify-center">
                  <div className={`w-3 h-3 rounded-full border-2 ${
                    m.status === "complete"
                      ? "bg-cyan-400 border-cyan-400 shadow-cyan-sm"
                      : "bg-[#020810] border-cyan-400 animate-pulse-slow"
                  }`} />
                </div>

                {/* Card */}
                <div className={`relative border bg-[#061224] p-6 h-full flex flex-col group-hover:-translate-y-1 transition-transform duration-300 ${
                  m.status === "active"
                    ? "border-cyan-400/40 shadow-[0_0_30px_rgba(0,212,255,0.08)]"
                    : "border-white/8"
                }`}>
                  {/* Active indicator */}
                  {m.status === "active" && (
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                  )}

                  {/* Quarter badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-mono text-[10px] tracking-widest text-cyan-400/60 uppercase border border-cyan-400/20 px-2 py-1">
                      {m.quarter}
                    </div>
                    {m.status === "complete" ? (
                      <CheckCircle2 size={14} className="text-cyan-400" />
                    ) : (
                      <Clock size={14} className="text-cyan-400 animate-pulse" />
                    )}
                  </div>

                  <h3 className="font-orbitron font-bold text-lg text-white mb-3 tracking-tight">
                    {m.title}
                  </h3>
                  <p className="font-inter text-sm text-steel-400/70 leading-relaxed flex-1">
                    {m.description}
                  </p>

                  <button className="mt-6 flex items-center gap-2 font-mono text-[11px] tracking-wider text-cyan-400/60 hover:text-cyan-400 transition-colors group/btn">
                    {m.cta}
                    <ArrowRight size={11} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
