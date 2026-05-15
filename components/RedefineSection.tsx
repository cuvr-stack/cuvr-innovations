"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function RedefineSection() {
  return (
    <section className="relative py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-[#0d0d0d] border border-[#222] overflow-hidden"
        >
          {/* Grid */}
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

          {/* Subtle glow top center */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#00ff6a]/40 to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-20 bg-[#00ff6a]/3 blur-[40px]" />

          <div className="relative z-10 py-20 px-8 md:px-16 text-center">
            {/* Heading */}
            <h2 className="font-space font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Redefine{" "}
              <em className="font-playfair italic not-italic" style={{ color: "#00ff6a", fontStyle: "italic" }}>
                Existential
              </em>{" "}
              Boundaries.
            </h2>

            <p className="font-inter text-sm text-white/35 max-w-md mx-auto leading-relaxed mb-10">
              The protocol is ready. Synchronize your vision with our development suite and
              lead the next paradigm.
            </p>

            <button className="group inline-flex items-center gap-3 font-mono text-[11px] font-bold tracking-widest text-[#080808] bg-[#00ff6a] hover:bg-[#00dd5a] px-8 py-4 uppercase transition-colors duration-300 shadow-green-sm">
              INITIATE_PROTOCOL
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
