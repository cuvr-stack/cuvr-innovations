"use client";
import { motion } from "framer-motion";
import { HeartPulse, Building2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SystemImpact() {
  const { t } = useLanguage();
  const imp = t.impact;

  const panels = [
    { data: imp.rehab,  icon: HeartPulse, accent: "#00ff6a" },
    { data: imp.realty, icon: Building2,  accent: "#a855f7" },
  ];

  return (
    <section className="relative bg-[#080808] overflow-hidden py-20">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "#00ff6a" }}>
            {imp.badge}
          </p>
          <h2 className="font-orbitron font-bold text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            {imp.titleMain}<span style={{ color: "#00ff6a" }}>{imp.titleHighlight}</span>
          </h2>
          <p className="font-inter text-base mb-12 max-w-2xl" style={{ color: "rgba(255,255,255,0.7)" }}>
            {imp.subtitle}
          </p>
        </motion.div>

        {/* Two panels */}
        <div className="grid md:grid-cols-2 gap-6">
          {panels.map(({ data, icon: Icon, accent }, pi) => (
            <motion.div
              key={data.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: pi * 0.15 }}
              className="relative"
              style={{ background: "#0d0d0d", border: "1px solid #1f1f1f" }}
            >
              {/* Coloured top bar */}
              <div style={{ height: 3, background: accent }} />

              <div className="p-8">
                {/* Panel header */}
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: 40, height: 40,
                      background: `${accent}12`,
                      border: `1px solid ${accent}30`,
                    }}
                  >
                    <Icon size={16} color={accent} />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.25em] uppercase mb-0.5" style={{ color: accent }}>
                      {data.tag}
                    </p>
                    <h3 className="font-orbitron font-bold text-white text-base">{data.title}</h3>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                  {data.stats.map((stat, si) => (
                    <motion.div
                      key={si}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: pi * 0.15 + si * 0.08 }}
                      className="relative p-4"
                      style={{ background: "#111", border: "1px solid #1a1a1a" }}
                    >
                      <p
                        className="font-orbitron font-bold mb-2"
                        style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: accent }}
                      >
                        {stat.value}
                      </p>
                      <p className="font-inter leading-snug" style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* CTA row */}
                <div className="flex items-center gap-2 mt-6 pt-6" style={{ borderTop: "1px solid #1a1a1a" }}>
                  <CheckCircle2 size={13} color={accent} />
                  <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Results based on early pilot programmes
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
