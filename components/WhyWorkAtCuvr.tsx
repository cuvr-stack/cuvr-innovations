"use client";
import { motion } from "framer-motion";
import { Cpu, Users, Sparkles } from "lucide-react";

const cards = [
  {
    icon: Cpu,
    title: "FRONTIER TECH",
    desc: "Access to proprietary 10X neural-link hardware and edge-compute devices that don't exist in the public sector.",
  },
  {
    icon: Users,
    title: "SYNAPSE CULTURE",
    desc: "A decentralized workforce of elite engineers, designers, and neuroscientists collaborating in &ldquo;The Void&rdquo;.",
  },
  {
    icon: Sparkles,
    title: "POST-REALITY",
    desc: "Full immersive medical benefits, all-immersive travel stipends, and hardware ownership programs.",
  },
];

export default function WhyWorkAtCuvr() {
  return (
    <section className="relative min-h-screen bg-[#080808] overflow-hidden flex flex-col justify-center py-24">
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4"
            style={{ color: "#00ff6a" }}>
            PERSONNEL_ACQUISITION
          </p>
          <h2 className="font-space font-bold text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            WHY WORK AT CUVR
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-7"
                style={{
                  background: "#0f0f0f",
                  border: "1px solid #1f1f1f",
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 flex items-center justify-center mb-6"
                  style={{
                    background: card.icon === Users ? "rgb(168, 85, 247,0.08)":"rgba(0,255,106,0.08)",
                    border: `1px solid ${card.icon === Users ? "rgb(168, 85, 247,0.15)" :"rgba(0,255,106,0.15)"}`,
                  }}
                >
                  <Icon size={16} color={card.icon === Users ? "#a855f7" : "#00ff6a"} />
                </div>

                <h3 className="font-mono font-bold text-white uppercase mb-3"
                  style={{ fontSize: 11, letterSpacing: "0.15em" }}>
                  {card.title}
                </h3>

                <p className="font-inter text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  <span dangerouslySetInnerHTML={{ __html: card.desc }} />
                </p>

                {/* Bottom accent on hover */}
                <div
                  className="mt-6 w-6 h-[1px] group-hover:w-12 transition-all duration-500"
                  style={{ background: "#00ff6a" }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
