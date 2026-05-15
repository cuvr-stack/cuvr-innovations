"use client";
import { motion } from "framer-motion";
import { Brain, Cpu, Globe } from "lucide-react";

const edges = [
  {
    icon: Brain,
    number: "Λ",
    title: "Domain Experts",
    description:
      "Decades of combined expertise across science, spatial engineering, and enterprise commerce.",
  },
  {
    icon: Cpu,
    number: "Σ",
    title: "Engineering First",
    description:
      "We are the technology that answers the requirements of developing synaptic humanity.",
  },
  {
    icon: Globe,
    number: "Θ",
    title: "Multisystemic",
    description:
      "Positioned as a real leader in the UAE, bridging the gap between global innovation hubs.",
  },
];

export default function CompetitiveEdge() {
  return (
    <section className="relative py-24 bg-[#030d1a] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white tracking-tight">
            The CUVR Competitive Edge
          </h2>
        </motion.div>

        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-6 md:divide-x md:divide-white/5">
          {edges.map((edge, i) => (
            <motion.div
              key={edge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="px-0 md:px-10 first:pl-0 last:pr-0 group"
            >
              {/* Greek symbol */}
              <div className="font-orbitron font-black text-5xl text-cyan-400/20 group-hover:text-cyan-400/40 transition-colors mb-6 leading-none">
                {edge.number}
              </div>
              <h3 className="font-orbitron font-bold text-lg text-white mb-4 tracking-tight">
                {edge.title}
              </h3>
              <p className="font-inter text-sm text-steel-400/60 leading-relaxed">
                {edge.description}
              </p>
              {/* Bottom accent */}
              <div className="mt-8 w-8 h-px bg-cyan-400/30 group-hover:w-16 group-hover:bg-cyan-400/60 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
