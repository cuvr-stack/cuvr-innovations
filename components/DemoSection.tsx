"use client";
import { motion } from "framer-motion";
import { Play, HeartPulse, Building2 } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const demos = [
  {
    id:      "rehab",
    tag:     "CUVR_REHAB",
    accent:  "#00ff6a",
    icon:    HeartPulse,
    title:   "PhysioVR in Action",
    desc:    "Watch how a clinician sets up a personalised VR rehabilitation session and monitors the patient's biometric response in real time.",
    video:   "/demo-rehab.mp4",   // drop demo-rehab.mp4 in /public when ready
    thumb:   "/physio.png",
  },
  {
    id:      "realty",
    tag:     "CUVR_REALTY",
    accent:  "#a855f7",
    icon:    Building2,
    title:   "CUVR Realty in Action",
    desc:    "See how an architectural floor plan is transformed into a photorealistic, walkable VR property tour — ready for remote buyers in hours.",
    video:   "/demo-realty.mp4",  // drop demo-realty.mp4 in /public when ready
    thumb:   "/home.png",
  },
];

function DemoCard({ demo, index }: { demo: typeof demos[0]; index: number }) {
  const [playing, setPlaying] = useState(false);
  const Icon = demo.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative group"
      style={{ background: "#0d0d0d", border: "1px solid #1f1f1f" }}
    >
      {/* Corner brackets */}
      <div className="absolute top-4 start-4 pointer-events-none z-10">
        <div style={{ width: 20, height: 2, background: demo.accent }} />
        <div style={{ width: 2, height: 20, background: demo.accent }} />
      </div>
      <div className="absolute bottom-4 end-4 pointer-events-none z-10 flex flex-col items-end">
        <div style={{ width: 2, height: 20, background: demo.accent }} />
        <div style={{ width: 20, height: 2, background: demo.accent }} />
      </div>

      {/* Video / thumbnail area */}
      <div className="relative overflow-hidden" style={{ height: 260, background: "#0a0a0a" }}>
        {playing ? (
          <video
            src={demo.video}
            autoPlay
            controls
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            {/* Thumbnail */}
            <img
              src={demo.thumb}
              alt={demo.title}
              className="w-full h-full object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-500"
            />

            {/* Scanlines */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.08) 3px,rgba(0,0,0,0.08) 6px)",
              }}
            />

            {/* Play button */}
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group/play"
            >
              <div
                className="flex items-center justify-center transition-all duration-300 group-hover/play:scale-110"
                style={{
                  width: 64, height: 64,
                  border: `2px solid ${demo.accent}`,
                  background: `${demo.accent}18`,
                  backdropFilter: "blur(8px)",
                }}
              >
                <Play size={22} color={demo.accent} fill={demo.accent} />
              </div>
            </button>

            {/* Tag */}
            <div className="absolute top-4 end-4">
              <span
                className="font-mono text-[9px] tracking-widest uppercase font-bold"
                style={{
                  color: demo.accent,
                  border: `1px solid ${demo.accent}40`,
                  padding: "2px 8px",
                  background: "rgba(0,0,0,0.7)",
                }}
              >
                #{demo.tag}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <Icon size={14} color={demo.accent} />
          <h3 className="font-orbitron font-bold text-white text-base">{demo.title}</h3>
        </div>
        <p className="font-inter text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
          {demo.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function DemoSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#080808] overflow-hidden py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "#a855f7" }}>
            VISUAL_PROOF
          </p>
          <h2 className="font-orbitron font-bold text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            See It In <span style={{ color: "#a855f7" }}>Action</span>
          </h2>
          <p className="font-inter text-base max-w-xl" style={{ color: "rgba(255,255,255,0.7)" }}>
            We sell highly visual products. Watch both platforms in action before booking a call.
          </p>
        </motion.div>

        {/* Demo cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {demos.map((demo, i) => (
            <DemoCard key={demo.id} demo={demo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
