"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Activity, Building2 } from "lucide-react";

const products = [
  {
    tag: "CUVR REHAB",
    title: "Pioneering Human Motion",
    description:
      "Immersive VR environments, specifically designed for neurological rehabilitation and physical human healing. Building therapeutic solutions for the next decade of patient care.",
    cta: "Visit Rehab",
    ctaHref: "#",
    icon: Activity,
    accent: "#00d4ff",
    borderAccent: "border-cyan-400/30",
    tagColor: "text-cyan-400 border-cyan-400/30",
  },
  {
    tag: "CUVR REAL ESTATE",
    title: "Digital Property Platform",
    description:
      "The definitive portal for simultaneously wealth/insights and high-fidelity, immersive spatial value. Enabling enterprise-scale virtual twin property experiences.",
    cta: "Visit Platform",
    ctaHref: "#",
    icon: Building2,
    accent: "#a78bfa",
    borderAccent: "border-violet-400/30",
    tagColor: "text-violet-400 border-violet-400/30",
  },
];

export default function CoreEcosystem() {
  return (
    <section id="ecosystem" className="relative py-24 bg-[#020810]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-cyan-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white tracking-tight mb-4">
            Our Core Ecosystem
          </h2>
          <p className="font-inter text-sm text-steel-400/60 max-w-md mx-auto leading-relaxed">
            Pioneering blockchain for spatial innovation and high-fidelity real estate.
          </p>
        </motion.div>

        {/* Product cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.tag}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -4 }}
                className={`group relative border ${product.borderAccent} bg-[#061224] hover:bg-[#071830] transition-all duration-500 overflow-hidden`}
                style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)" }}
              >
                {/* Image/visual placeholder — swap in real asset later */}
                <div className="relative h-56 bg-[#030d1a] border-b border-white/5 overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon size={80} className="text-white/4" strokeWidth={0.4} />
                  </div>
                  {/* Scanlines */}
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.07)_2px,rgba(0,0,0,0.07)_4px)]" />
                  {/* Glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#061224] to-transparent" />
                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className={`font-mono text-[9px] tracking-widest uppercase border px-2.5 py-1 ${product.tagColor} bg-[#020810]/70`}>
                      {product.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="font-orbitron font-bold text-xl text-white mb-3 tracking-tight">
                    {product.title}
                  </h3>
                  <p className="font-inter text-sm text-steel-400/70 leading-relaxed mb-7">
                    {product.description}
                  </p>
                  <a
                    href={product.ctaHref}
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-wider transition-all duration-300 group/link"
                    style={{ color: product.accent }}
                  >
                    {product.cta}
                    <ArrowUpRight size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-0 right-0 w-full h-px" style={{ background: product.accent }} />
                  <div className="absolute top-0 right-0 w-px h-full" style={{ background: product.accent }} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
