"use client";
import { motion } from "framer-motion";
import { HeartPulse, Building2 } from "lucide-react";

const products = [
  {
    id: "rehab",
    tag: "CUVR_REHAB",
    tagColor: "#00ff6a",
    icon: HeartPulse,
    title: "PhysioVR",
    subtitle: "How Recovery Works",
    steps: [
      {
        num: "01",
        label: "Patient Assessment",
        desc: "The clinician inputs the patient's condition, mobility range, and recovery goals. Our AI maps a personalised therapy blueprint in seconds.",
      },
      {
        num: "02",
        label: "AI Builds the Session",
        desc: "The neural engine generates a fully immersive VR rehabilitation environment tailored to the patient's specific physical and cognitive needs.",
      },
      {
        num: "03",
        label: "Immersive Recovery",
        desc: "The patient undergoes guided VR therapy with real-time biometric feedback, while clinicians monitor progress through a live analytics dashboard.",
      },
    ],
  },
  {
    id: "reality",
    tag: "CUVR_REALITY",
    tagColor: "#a855f7",
    icon: Building2,
    title: "CUVR Reality",
    subtitle: "How Property Tours Work",
    steps: [
      {
        num: "01",
        label: "Upload Floor Plan",
        desc: "The developer submits architectural drawings or CAD files. Our platform ingests the data and begins building a spatial model instantly.",
      },
      {
        num: "02",
        label: "AI Generates the VR Tour",
        desc: "Within hours, the AI converts the plans into a photorealistic, fully walkable virtual environment — complete with lighting, materials, and spatial scale.",
      },
      {
        num: "03",
        label: "Buyers Explore Remotely",
        desc: "Clients tour the property from anywhere in the world, customise interiors in real time, and agents track engagement analytics to close faster.",
      },
    ],
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-[#080808] overflow-hidden py-20">
      {/* Subtle grid */}
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
            PROCESS_PROTOCOL
          </p>
          <h2 className="font-orbitron font-bold text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            How It <span style={{ color: "#00ff6a" }}>Works</span>
          </h2>
        </motion.div>

        {/* Two product flows */}
        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product, pi) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: pi * 0.15 }}
                className="relative"
                style={{
                  background: "#0d0d0d",
                  border: "1px solid #1f1f1f",
                  padding: 32,
                }}
              >
                {/* Corner bracket — top left */}
                <div className="absolute top-4 left-4 pointer-events-none">
                  <div style={{ width: 20, height: 2, background: product.tagColor }} />
                  <div style={{ width: 2, height: 20, background: product.tagColor }} />
                </div>

                {/* Corner bracket — bottom right */}
                <div className="absolute bottom-4 right-4 pointer-events-none flex flex-col items-end">
                  <div style={{ width: 2, height: 20, background: product.tagColor }} />
                  <div style={{ width: 20, height: 2, background: product.tagColor }} />
                </div>

                {/* Product header */}
                <div className="flex items-center gap-3 mb-8 mt-2">
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 36,
                      height: 36,
                      background: `${product.tagColor}12`,
                      border: `1px solid ${product.tagColor}30`,
                    }}
                  >
                    <Icon size={15} color={product.tagColor} />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.25em] uppercase mb-0.5" style={{ color: product.tagColor }}>
                      {product.tag}
                    </p>
                    <h3 className="font-orbitron font-bold text-white text-base">{product.title}</h3>
                  </div>
                </div>

                {/* Steps */}
                <div className="space-y-0">
                  {product.steps.map((step, si) => (
                    <div key={step.num} className="flex gap-5">
                      {/* Step number + connector line */}
                      <div className="flex flex-col items-center">
                        <div
                          className="flex items-center justify-center shrink-0 font-mono font-bold"
                          style={{
                            width: 32,
                            height: 32,
                            background: `${product.tagColor}15`,
                            border: `1px solid ${product.tagColor}40`,
                            color: product.tagColor,
                            fontSize: 10,
                            letterSpacing: "0.05em",
                          }}
                        >
                          {step.num}
                        </div>
                        {si < product.steps.length - 1 && (
                          <div
                            className="w-px flex-1 my-1"
                            style={{ background: `${product.tagColor}20`, minHeight: 28 }}
                          />
                        )}
                      </div>

                      {/* Step content */}
                      <div className="pb-7">
                        <p
                          className="font-mono font-bold uppercase mb-2"
                          style={{ fontSize: 10, letterSpacing: "0.15em", color: "rgba(255,255,255,0.85)" }}
                        >
                          {step.label}
                        </p>
                        <p
                          className="font-inter leading-relaxed"
                          style={{ fontSize: 14, color: "rgba(255,255,255,0.65)" }}
                        >
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
