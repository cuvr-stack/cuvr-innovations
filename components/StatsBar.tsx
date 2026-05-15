"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { key: "LATENCY_MS",    value: "0.02",  label: "Sync Threshold",      color: "#00ff6a" },
  { key: "DENSITY_RES",   value: "16K",   label: "Retinal Resolution",  color: "#a855f7" },
  { key: "NODES_ACTIVE",  value: "800k+", label: "Neural Clusters",     color: "#00e5ff" },
  { key: "PRECISION_AGC", value: "99.9%", label: "Motion Fidelity",     color: "#fbbf24" },
];

export default function StatsBar() {
  return (
    <section className="relative min-h-screen bg-[#080808] flex flex-col justify-center py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 border border-[#1a1a1a]">
          {stats.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative p-8 group ${
                i < stats.length - 1 ? "border-r border-[#1a1a1a]" : ""
              } ${i >= 2 ? "border-t border-[#1a1a1a] md:border-t-0" : ""}`}
            >
              {/* Colored top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: s.color }}
              />

              {/* Key label */}
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase mb-3 font-bold" style={{ color: s.color }}>
                {s.key}
              </p>

              {/* Value */}
              <div className="font-space font-bold text-4xl md:text-5xl text-white mb-1 tabular-nums">
                {s.value}
              </div>

              {/* Sub-label */}
              <p className="font-mono text-[10px] text-white/25 tracking-wider">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
