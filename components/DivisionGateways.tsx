"use client";
import { motion } from "framer-motion";
import { ExternalLink, Activity, Globe2 } from "lucide-react";

const divisions = [
  {
    tag: "HEALTHCARE PROTOCOL",
    metric: "0.02",
    metricLabel: "SYNAPSES / MS",
    description:
      "Restoring mobility through stimulated neuroelectricity and immersive physical therapy environments. Exclusive rehabilitation systems for the next decade.",
    cta: "Initialize Access",
    icon: Activity,
    accent: "#00d4ff",
    gradient: "from-cyan-400/10 to-transparent",
    image: null,
  },
  {
    tag: "SPATIAL COMMERCE",
    metric: "1.2",
    metricLabel: "NEURAL CORE PF",
    description:
      "High-fidelity virtual twin environments for enterprise property development and global spatial sales.",
    cta: "Explore Assets",
    icon: Globe2,
    accent: "#7c3aed",
    gradient: "from-purple-500/10 to-transparent",
    image: null,
  },
];

export default function DivisionGateways() {
  return (
    <section id="ecosystem" className="relative py-24 bg-[#020810]">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-cyan-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400/60 uppercase mb-3">
            — Specialized Protocols for Diverse Industries
          </p>
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white tracking-tight">
            Division Gateways
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {divisions.map((div, i) => {
            const Icon = div.icon;
            return (
              <motion.div
                key={div.tag}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden border border-white/8 bg-[#061224] hover:border-cyan-400/30 transition-all duration-500 cursor-pointer"
                style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)" }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${div.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Image placeholder — user will supply asset */}
                <div className="relative h-52 bg-[#030d1a] border-b border-white/5 overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon size={64} className="text-white/5" strokeWidth={0.5} />
                  </div>
                  {/* Scanlines */}
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.08)_2px,rgba(0,0,0,0.08)_4px)]" />
                  {/* Tag chip */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1.5 border border-current/30 px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase"
                      style={{ color: div.accent, borderColor: `${div.accent}40` }}>
                      <div className="w-1 h-1 rounded-full bg-current animate-pulse" />
                      {div.tag}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <div className="font-orbitron font-black text-5xl mb-1" style={{ color: div.accent }}>
                    {div.metric}
                  </div>
                  <div className="font-mono text-[9px] tracking-widest text-steel-400/50 mb-4 uppercase">
                    {div.metricLabel}
                  </div>
                  <p className="font-inter text-sm text-steel-400/80 leading-relaxed mb-6">
                    {div.description}
                  </p>
                  <button className="flex items-center gap-2 font-mono text-xs tracking-wider group-hover:gap-3 transition-all duration-300"
                    style={{ color: div.accent }}>
                    {div.cta}
                    <ExternalLink size={12} />
                  </button>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-30 group-hover:opacity-60 transition-opacity">
                  <div className="absolute top-0 right-0 w-full h-px bg-current" style={{ color: div.accent }} />
                  <div className="absolute top-0 right-0 w-px h-full bg-current" style={{ color: div.accent }} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
