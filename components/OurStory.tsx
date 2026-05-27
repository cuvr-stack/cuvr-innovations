"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const statColors = ["#00ff6a", "#a855f7", "#00e5ff", "#fbbf24"];

export default function OurStory() {
  const { t } = useLanguage();
  const s = t.story;

  return (
    <section id="about" className="relative bg-[#080808] overflow-hidden py-20">
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
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "rgb(168,85,247)" }}>
              {s.badge}
            </p>
            <h2 className="font-orbitron font-bold text-white leading-tight mb-3"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              {s.titleMain}{" "}
              <span style={{ color: "#a855f7" }}>
                {s.titleHighlight.split("\n").map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </span>
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
            <p className="font-inter text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
              {s.para1}
            </p>
            <div className="pl-5" style={{ borderLeft: "2px solid rgba(0,255,106,0.4)" }}>
              <p className="font-inter text-base italic leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                &ldquo;{s.quote}&rdquo;
              </p>
            </div>
            <p className="font-inter text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
              {s.para2}
            </p>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ border: "1px solid #1a1a1a" }}
        >
          {s.stats.map((stat, i) => (
            <div
              key={stat.key}
              className="relative p-8 group"
              style={{ borderRight: i < s.stats.length - 1 ? "1px solid #1a1a1a" : "none" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: statColors[i] }}
              />
              <p className="font-mono font-bold uppercase mb-3"
                style={{ fontSize: 9, letterSpacing: "0.2em", color: statColors[i] }}>
                {stat.key}
              </p>
              <div className="font-orbitron font-bold text-white tabular-nums mb-1"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                {stat.value}
              </div>
              <p className="font-mono" style={{ fontSize: 10, color: "rgba(255,255,255,0.75)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
