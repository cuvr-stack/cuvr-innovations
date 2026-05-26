"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, HeartPulse, Building2 } from "lucide-react";
import Image from "next/image";

const domains = [
  {
    dept: "DEPT_HEALTH",
    tag: "BIODYNAMIC_SYNAPSE",
    tagColor: "#00ff6a",
    title: "PhysioVR Engine",
    description:
      "Neural-feedback loops accelerating physical recovery through gamified high-density spatial training.",
    icon: HeartPulse,
    iconColor: "#00ff6a",
    id: "physiovr",
  },
  {
    dept: "DEPT_SPATIAL",
    tag: "SPATIAL_FABRIC",
    tagColor: "#a855f7",
    title: "Void Real Estate",
    description:
      "Global property navigation. Photorealistic architectural rendering meets interactive staging.",
    icon: Building2,
    iconColor: "#a855f7",
    id: "real-estate",
  },
];

export default function ImmersiveDomains() {
  return (
    <section id="physiovr" className="relative bg-[#080808] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase mb-3" style={{color:"#a855f7"}}>
            Core Architectures
          </p>
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white">
            Immersive Domains
          </h2>
          <span className="accent-line" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {domains.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.id}
                id={d.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                className="group relative bg-[#0f0f0f] border border-[#1f1f1f] hover:border-[#2a2a2a] transition-all duration-500 overflow-hidden cursor-pointer scanlines"
              >
                {/* Image area */}
                <div className="relative h-64 bg-[#0a0a0a] overflow-hidden">
                  {/* Real images for each domain */}
                  {d.id === "real-estate" ? (
                    <Image
                      src="/home.png"
                      alt="Void Real Estate"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : d.id === "physiovr" ? (
                    <Image
                      src="/physio.png"
                      alt="PhysioVR Engine"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-grid opacity-30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon size={96} className="opacity-5" strokeWidth={0.5} style={{ color: d.iconColor }} />
                      </div>
                    </>
                  )}

                  {/* Bottom gradient overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-24 z-10"
                    style={{ background: `linear-gradient(to top, #0f0f0f, transparent)` }}
                  />

                  {/* Dept label top-right */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="font-mono text-[9px] tracking-widest text-white/40 uppercase">
                      {d.dept}
                    </span>
                  </div>

                  {/* Tag bottom-left */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span
                      className="font-mono text-[9px] tracking-widest uppercase font-bold"
                      style={{ color: d.tagColor }}
                    >
                      #{d.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-orbitron font-bold text-xl text-white">{d.title}</h3>
                    <ArrowUpRight
                      size={16}
                      className="text-white/20 group-hover:text-white/60 transition-colors mt-0.5 shrink-0"
                    />
                  </div>
                  <p className="font-inter text-white/85 leading-relaxed" style={{ fontSize: 15 }}>
                    {d.description}
                  </p>
                </div>

                {/* Corner glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at bottom left, ${d.tagColor}08, transparent 60%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
