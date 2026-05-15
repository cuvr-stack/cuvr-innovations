"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function EstablishLink() {
  const [form, setForm] = useState({ mac: "", corp: "", policy: "" });

  return (
    <section className="relative min-h-screen bg-[#080808] overflow-hidden flex flex-col justify-center py-24">
      {/* Grid */}
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-8"
              style={{
                border: "1px solid rgb(168, 85, 247,0.03)",
                padding: "4px 12px",
                background: "rgb(168, 85, 247,0.05)",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-pulse" />
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase"
                style={{ color: "rgb(168, 85, 247)" }}>
                INITIALIZE_CONN
              </span>
            </div>

            <h2 className="font-space font-bold text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2.2rem,4.5vw,3.5rem)" }}>
              Establish<br />
              <em className="font-playfair italic not-italic"
                style={{ fontStyle: "italic", color: "#00ff6a" }}>
                Neural Link.
              </em>
            </h2>

            <p className="font-inter text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.4)", maxWidth: 340 }}>
              The protocol is ready. Synchronize your vision with our development suite and
              lead the next paradigm.
            </p>
          </motion.div>

          {/* Right — form card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
            style={{
              background: "#0d0d0d",
              border: "1px solid #1f1f1f",
              padding: 32,
            }}
          >
            {/* Top-left corner bracket */}
            <div className="absolute top-4 left-4 pointer-events-none">
              <div style={{ width: 20, height: 2, background: "#00ff6a" }} />
              <div style={{ width: 2, height: 20, background: "#00ff6a" }} />
            </div>

            {/* Bottom-right corner bracket */}
            <div className="absolute bottom-4 right-4 pointer-events-none flex flex-col items-end">
              <div style={{ width: 2, height: 20, background: "#a855f7" }} />
              <div style={{ width: 20, height: 2, background: "#a855f7" }} />
            </div>

            <div className="space-y-5">
              {/* MAC_SECURITY */}
              <div>
                <label className="font-mono uppercase block mb-2"
                  style={{ fontSize: 9, letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)" }}>
                  MAC_SECURITY
                </label>
                <input
                  type="text"
                  placeholder="node-identifier"
                  value={form.mac}
                  onChange={(e) => setForm({ ...form, mac: e.target.value })}
                  className="w-full bg-transparent font-mono text-sm text-white placeholder-white/20 outline-none py-2.5 px-3 transition-colors"
                  style={{ border: "1px solid #2a2a2a", fontSize: 12 }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(0,255,106,0.4)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
                />
              </div>

              {/* CORP_LINK */}
              <div>
                <label className="font-mono uppercase block mb-2"
                  style={{ fontSize: 9, letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)" }}>
                  CORP_LINK
                </label>
                <input
                  type="email"
                  placeholder="entity@domain.io"
                  value={form.corp}
                  onChange={(e) => setForm({ ...form, corp: e.target.value })}
                  className="w-full bg-transparent font-mono text-sm text-white placeholder-white/20 outline-none py-2.5 px-3 transition-colors"
                  style={{ border: "1px solid #2a2a2a", fontSize: 12 }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(0,255,106,0.4)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
                />
              </div>

              {/* POLICY_PLEDGE */}
              <div>
                <label className="font-mono uppercase block mb-2"
                  style={{ fontSize: 9, letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)" }}>
                  POLICY_PLEDGE
                </label>
                <input
                  type="text"
                  placeholder="intent_descriptor"
                  value={form.policy}
                  onChange={(e) => setForm({ ...form, policy: e.target.value })}
                  className="w-full bg-transparent font-mono text-sm text-white placeholder-white/20 outline-none py-2.5 px-3 transition-colors"
                  style={{ border: "1px solid #2a2a2a", fontSize: 12 }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(0,255,106,0.4)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
                />
              </div>

              {/* Submit */}
              <button
                className="group w-full flex items-center justify-center gap-3 font-mono font-bold uppercase transition-colors duration-300"
                style={{
                  background: "#00ff6a",
                  color: "#080808",
                  padding: "14px 24px",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  marginTop: 8,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#00dd5a")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#00ff6a")}
              >
                ESTABLISH_LINK
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
