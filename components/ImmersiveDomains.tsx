"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, HeartPulse, Building2 } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const meta = [
  { dept: "DEPT_HEALTH",   tag: "BIODYNAMIC_SYNAPSE", tagColor: "#00ff6a", icon: HeartPulse, id: "physiovr",    img: "/physio.png" },
  { dept: "DEPT_SPATIAL",  tag: "SPATIAL_FABRIC",     tagColor: "#a855f7", icon: Building2,  id: "real-estate", img: "/home.png"   },
];

export default function ImmersiveDomains() {
  const { t } = useLanguage();
  const d = t.domains;

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
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: "#a855f7" }}>
            {d.sectionTag}
          </p>
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white">
            {d.sectionTitle}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {meta.map((m, i) => {
            const Icon = m.icon;
            const item = d.items[i];
            return (
              <motion.div
                key={m.id}
                id={m.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                className="group relative bg-[#0f0f0f] border border-[#1f1f1f] hover:border-[#2a2a2a] transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Image area */}
                <div className="relative h-64 bg-[#0a0a0a] overflow-hidden">
                  <Image
                    src={m.img}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-24 z-10"
                    style={{ background: "linear-gradient(to top, #0f0f0f, transparent)" }} />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="font-mono text-[9px] tracking-widest text-white/40 uppercase">{m.dept}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="font-mono text-[9px] tracking-widest uppercase font-bold" style={{ color: m.tagColor }}>
                      #{m.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-orbitron font-bold text-xl text-white">{item.title}</h3>
                    <ArrowUpRight size={16} className="text-white/20 group-hover:text-white/60 transition-colors mt-0.5 shrink-0" />
                  </div>
                  <p className="font-inter text-white/85 leading-relaxed" style={{ fontSize: 15 }}>
                    {item.desc}
                  </p>
                </div>

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at bottom left, ${m.tagColor}08, transparent 60%)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
