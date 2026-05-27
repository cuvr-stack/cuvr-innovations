"use client";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative min-h-screen bg-[#080808] overflow-hidden flex flex-col justify-end">

      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.75 }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-[#080808]/60 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#080808]/70 to-transparent" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-20 pt-32">

        {/* Protocol badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#00ff6a] animate-pulse" />
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#00ff6a] uppercase">
            {h.badge}
          </span>
        </motion.div>

        {/* Line 1 */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="font-orbitron font-bold leading-none tracking-tight text-white"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
          >
            {h.line1}
          </motion.p>
        </div>

        {/* Line 2 */}
        <div className="overflow-hidden mb-6">
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-orbitron font-bold leading-none tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "#00ff6a" }}
          >
            {h.line2}
          </motion.p>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="font-inter text-base text-white/90 max-w-sm leading-relaxed mb-8"
        >
          {h.desc}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52 }}
          className="flex flex-wrap items-center gap-3"
        >
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative flex items-center gap-2.5 font-mono text-xs font-bold tracking-widest text-[#080808] bg-[#00ff6a] hover:bg-[#00dd5a] px-6 py-3 uppercase transition-colors duration-300 shadow-green-sm overflow-hidden">
            <span className="relative z-10">{h.btn1}</span>
            <ArrowRight size={13} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
          </button>

          <button
            className="flex items-center gap-2.5 font-mono text-xs tracking-widest px-6 py-3 uppercase transition-all duration-300"
            style={{ color: "#a855f7", border: "1px solid #a855f7" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(168,85,247,0.08)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
          >
            <Terminal size={11} />
            {h.btn2}
          </button>
        </motion.div>
      </div>

      {/* Bottom scan line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff6a]/20 to-transparent z-10" />
    </section>
  );
}
