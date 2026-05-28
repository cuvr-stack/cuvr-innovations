"use client";
import { motion } from "framer-motion";
import { Telescope, Target } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function VisionMission() {
  const { t } = useLanguage();
  const vm = t.visionMission;

  const cards = [
    {
      tag:       vm.vision.tag,
      title:     vm.vision.title,
      desc:      vm.vision.desc,
      stat:      vm.vision.stat,
      icon:      Telescope,
      accentTop: "#00ff6a",
      accentBot: "#a855f7",
    },
    {
      tag:       vm.mission.tag,
      title:     vm.mission.title,
      desc:      vm.mission.desc,
      stat:      vm.mission.stat,
      icon:      Target,
      accentTop: "#a855f7",
      accentBot: "#00ff6a",
    },
  ];

  return (
    <section className="relative bg-[#080808] overflow-hidden py-20">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "#00ff6a" }}>
            {vm.badge}
          </p>
          <h2 className="font-orbitron font-bold text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Vision &amp; <span style={{ color: "#00ff6a" }}>Mission</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.tag}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative group"
                style={{
                  background: "#0d0d0d",
                  border: "1px solid #1f1f1f",
                  padding: 36,
                }}
              >
                {/* Top accent line on hover */}
                <div
                  className="absolute top-0 start-0 end-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to right, ${card.accentTop}, ${card.accentBot})` }}
                />

                {/* Corner bracket — top start */}
                <div className="absolute top-4 start-4 pointer-events-none">
                  <div style={{ width: 20, height: 2, background: card.accentTop }} />
                  <div style={{ width: 2, height: 20, background: card.accentTop }} />
                </div>

                {/* Corner bracket — bottom end */}
                <div className="absolute bottom-4 end-4 pointer-events-none flex flex-col items-end">
                  <div style={{ width: 2, height: 20, background: card.accentBot }} />
                  <div style={{ width: 20, height: 2, background: card.accentBot }} />
                </div>

                {/* Icon + tag */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: 40, height: 40,
                      background: `${card.accentTop}12`,
                      border: `1px solid ${card.accentTop}30`,
                    }}
                  >
                    <Icon size={16} color={card.accentTop} />
                  </div>
                  <span
                    className="font-mono font-bold uppercase tracking-widest"
                    style={{ fontSize: 10, color: card.accentTop }}
                  >
                    {card.tag}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-orbitron font-bold text-white leading-tight mb-4"
                  style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)" }}
                >
                  {card.title}
                </h3>

                {/* Description — plain, benefit-driven */}
                <p
                  className="font-inter leading-relaxed mb-8"
                  style={{ color: "rgba(255,255,255,0.85)", fontSize: 15 }}
                >
                  {card.desc}
                </p>

                {/* Stat */}
                <div
                  className="pt-6"
                  style={{ borderTop: `1px solid rgba(255,255,255,0.06)` }}
                >
                  <p
                    className="font-orbitron font-bold"
                    style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: card.accentTop }}
                  >
                    {card.stat.value}
                  </p>
                  <p
                    className="font-mono uppercase mt-1"
                    style={{ fontSize: 10, letterSpacing: "0.2em", color: "rgba(255,255,255,0.5)" }}
                  >
                    {card.stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
