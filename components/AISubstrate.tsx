"use client";
import { motion } from "framer-motion";
import { Eye, Zap } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Eye,
    label: "COGNITIVE ADAPTATION",
    desc: "Real-time environmental shifts based on user cognitive load and ocular metrics.",
  },
  {
    icon: Zap,
    label: "ZERO-LAG SYNAPSE",
    desc: "Edge-compute AI ensuring sub-millisecond response for total biological synchronization.",
  },
];

export default function AISubstrate() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden py-20"
      style={{ background: "#080808" }}
    >
      {/* Keyframes */}
      <style>{`
        @keyframes scanMove {
          0%   { top: -2px;  opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { top: 100%;  opacity: 0; }
        }
        .ai-scan-line { animation: scanMove 3.5s linear infinite; }

        @keyframes scanGlow {
          0%   { top: -30px;              opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { top: calc(100% - 30px); opacity: 0; }
        }
        .ai-scan-glow { animation: scanGlow 3.5s linear infinite; }
      `}</style>

      {/* Square grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Brain card ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
            style={{
              background: "#0b0b14",
              border: "1px solid #1f1f1f",
              padding: 20,
            }}
          >
            {/* Top-left corner bracket — green */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none">
              <div style={{ width: 28, height: 2, background: "#00ff6a" }} />
              <div style={{ width: 2, height: 28, background: "#00ff6a" }} />
            </div>

            {/* Bottom-right corner bracket — purple */}
            <div className="absolute bottom-4 right-4 z-20 pointer-events-none flex flex-col items-end">
              <div style={{ width: 2, height: 28, background: "#a855f7" }} />
              <div style={{ width: 28, height: 2, background: "#a855f7" }} />
            </div>

            {/* Inner frame with brain image */}
            <div
              className="relative overflow-hidden"
              style={{ border: "1px solid #1a1a2e", height: 380 }}
            >
              {/* Brain image — original colours, fills inner frame */}
              <Image
                src="/brain.png"
                alt="Neural brain"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Subtle horizontal reference lines */}
              {[25, 50, 75].map((pct) => (
                <div
                  key={pct}
                  className="absolute left-0 right-0 pointer-events-none"
                  style={{
                    top: `${pct}%`,
                    height: 1,
                    background: "rgba(255,255,255,0.04)",
                    zIndex: 5,
                  }}
                />
              ))}

              {/* Scanning green line */}
              <div
                className="ai-scan-line absolute left-0 right-0 pointer-events-none"
                style={{
                  height: 2,
                  background: "#00ff6a",
                  boxShadow: "0 0 10px #00ff6a, 0 0 28px #00ff6a88",
                  zIndex: 10,
                }}
              />

              {/* Scan glow band */}
              <div
                className="ai-scan-glow absolute left-0 right-0 pointer-events-none"
                style={{
                  height: 60,
                  background:
                    "linear-gradient(to bottom, transparent, rgba(0,255,106,0.07), transparent)",
                  zIndex: 10,
                }}
              />

              {/* CRT scanlines texture */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 6px)",
                  zIndex: 6,
                }}
              />
            </div>
          </motion.div>

          {/* ── Right: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p
              className="font-mono uppercase mb-5"
              style={{ fontSize: 10, letterSpacing: "0.3em", color: "#00ff6a" }}
            >
              Neural Engine V8.0
            </p>

            <h2
              className="font-orbitron font-bold text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              AI: The Core<br />Substrate.
            </h2>

            <div
              className="pl-5 mb-10"
              style={{ borderLeft: "2px solid rgba(0,255,106,0.4)" }}
            >
              <p className="font-inter text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                Beyond rendering, CUVR systems are driven by a proprietary neural core that learns
                from biometric feedback. We don&apos;t just output pixels; we simulate cognitive presence.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.12 }}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="shrink-0 flex items-center justify-center"
                      style={{
                        width: 40,
                        height: 40,
                        background: "rgba(168,85,247,0.08)",
                        border: "1px solid #2a2a2a",
                      }}
                    >
                      <Icon size={15} color="#a855f7" />
                    </div>
                    <div>
                      <p
                        className="font-mono font-bold uppercase mb-1.5"
                        style={{ fontSize: 11, letterSpacing: "0.2em", color: "rgba(255,255,255,0.85)" }}
                      >
                        {f.label}
                      </p>
                      <p className="font-inter text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                        {f.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
