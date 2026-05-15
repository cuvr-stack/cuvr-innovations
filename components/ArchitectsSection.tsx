"use client";
import { motion } from "framer-motion";
import { User } from "lucide-react";

const team = [
  {
    name: "Dr. Risa Varsa",
    title: "Chief Neural Architect",
    tag: "NEURAL",
    desc: "Pioneering the nexus of middleware and bio-cognitive spatial mapping.",
  },
  {
    name: "Sarah Chen",
    title: "Land Systems Engineer",
    tag: "SYSTEMS",
    desc: "Architect of spatial twin-networks and new micro-latency protocols.",
  },
  {
    name: "Markus Viana",
    title: "Operations Director",
    tag: "OPS",
    desc: "Scaling rollout across divisions, securing global scale and enterprise fields.",
  },
  {
    name: "Ilara Rodrigues",
    title: "Head of AI Ethics",
    tag: "ETHICS",
    desc: "Ensuring synaptic integrity and ethical standards within the neural environment.",
  },
];

export default function ArchitectsSection() {
  return (
    <section id="architects" className="relative min-h-screen bg-[#080808] overflow-hidden flex flex-col justify-center py-24">
      {/* Background ghost text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <p
          className="font-space font-bold uppercase whitespace-nowrap"
          style={{
            fontSize: "clamp(3rem,10vw,8rem)",
            color: "rgba(255,255,255,0.015)",
            letterSpacing: "0.1em",
          }}
        >
          ARCHITECTS_OF_CUVR
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" mb-14"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4"
            style={{ color: "rgb(168, 85, 247)" }}>
            CORE_PERSONNEL
          </p>
          <h2 className="font-space font-bold text-white"
            style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Architects of CUVR
          </h2>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
              style={{ background: "#0f0f0f", border: "1px solid #1f1f1f" }}
            >
              {/* Photo placeholder */}
              <div
                className="relative overflow-hidden flex items-center justify-center"
                style={{ height: 200, background: "#0a0a0a", borderBottom: "1px solid #1f1f1f" }}
              >
                <User size={60} style={{ color: "rgba(255,255,255,0.05)" }} strokeWidth={0.5} />

                {/* Scanlines */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 6px)",
                  }}
                />

                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.2em",
                      color: "#00ff6a",
                      border: "1px solid rgba(0,255,106,0.25)",
                      padding: "2px 8px",
                      background: "rgba(0,0,0,0.6)",
                    }}
                  >
                    {member.tag}
                  </span>
                </div>

                {/* Green top accent on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "#00ff6a" }}
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-space font-bold text-white text-sm leading-tight mb-1">
                  {member.name}
                </h3>
                <p className="font-mono uppercase mb-2"
                  style={{ fontSize: 9, letterSpacing: "0.15em", color: "#00ff6a", opacity: 0.7 }}>
                  {member.title}
                </p>
                <p className="font-inter text-xs leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.35)" }}>
                  {member.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
