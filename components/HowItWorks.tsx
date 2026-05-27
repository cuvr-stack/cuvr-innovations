"use client";
import { motion } from "framer-motion";
import { HeartPulse, Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();
  const h = t.howItWorks;

  const products = [
    { data: h.rehab,   icon: HeartPulse, tagColor: "#00ff6a" },
    { data: h.reality, icon: Building2,  tagColor: "#a855f7" },
  ];

  return (
    <section className="relative bg-[#080808] overflow-hidden py-20">
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
          className="mb-16"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "#00ff6a" }}>
            {h.sectionTag}
          </p>
          <h2 className="font-orbitron font-bold text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            {h.sectionTitle} <span style={{ color: "#00ff6a" }}>{h.sectionHighlight}</span>
          </h2>
        </motion.div>

        {/* Two product flows */}
        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product, pi) => {
            const Icon = product.icon;
            const { tagColor, data } = product;
            return (
              <motion.div
                key={data.tag}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: pi * 0.15 }}
                className="relative"
                style={{ background: "#0d0d0d", border: "1px solid #1f1f1f", padding: 32 }}
              >
                {/* Corner bracket — top start */}
                <div className="absolute top-4 start-4 pointer-events-none">
                  <div style={{ width: 20, height: 2, background: tagColor }} />
                  <div style={{ width: 2, height: 20, background: tagColor }} />
                </div>

                {/* Corner bracket — bottom end */}
                <div className="absolute bottom-4 end-4 pointer-events-none flex flex-col items-end">
                  <div style={{ width: 2, height: 20, background: tagColor }} />
                  <div style={{ width: 20, height: 2, background: tagColor }} />
                </div>

                {/* Product header */}
                <div className="flex items-center gap-3 mb-8 mt-2">
                  <div
                    className="flex items-center justify-center"
                    style={{ width: 36, height: 36, background: `${tagColor}12`, border: `1px solid ${tagColor}30` }}
                  >
                    <Icon size={15} color={tagColor} />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.25em] uppercase mb-0.5" style={{ color: tagColor }}>
                      {data.tag}
                    </p>
                    <h3 className="font-orbitron font-bold text-white text-base">{data.title}</h3>
                  </div>
                </div>

                {/* Steps */}
                <div className="space-y-0">
                  {data.steps.map((step, si) => (
                    <div key={si} className="flex gap-5">
                      <div className="flex flex-col items-center">
                        <div
                          className="flex items-center justify-center shrink-0 font-mono font-bold"
                          style={{
                            width: 32, height: 32,
                            background: `${tagColor}15`,
                            border: `1px solid ${tagColor}40`,
                            color: tagColor,
                            fontSize: 10,
                          }}
                        >
                          {String(si + 1).padStart(2, "0")}
                        </div>
                        {si < data.steps.length - 1 && (
                          <div className="w-px flex-1 my-1" style={{ background: `${tagColor}20`, minHeight: 28 }} />
                        )}
                      </div>
                      <div className="pb-7">
                        <p className="font-mono font-bold uppercase mb-2"
                          style={{ fontSize: 10, letterSpacing: "0.15em", color: "rgba(255,255,255,0.85)" }}>
                          {step.label}
                        </p>
                        <p className="font-inter leading-relaxed" style={{ fontSize: 14, color: "rgba(255,255,255,0.65)" }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
