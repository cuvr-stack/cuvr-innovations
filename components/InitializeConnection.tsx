"use client";
import { motion } from "framer-motion";
import { MapPin, Hexagon } from "lucide-react";

const columns = [
  {
    title: "PARTNER PROGRAM",
    links: ["Strategic Partners and ecosystem.", "Become a Gateway Node."],
    isText: true,
  },
  {
    title: "OUR EXPERTISE",
    links: ["Neural Middleware and real estate.", "Healthcare Protocol.", "Spatial Commerce."],
    isText: true,
  },
  {
    title: "PR DESK",
    links: ["Media inquiries and newsroom access.", "media@cuvr.io"],
    isText: true,
  },
  {
    title: "GENERAL",
    links: ["General partnerships and enterprise access.", "hello@cuvr.io"],
    isText: true,
  },
];

export default function InitializeConnection() {
  return (
    <section className="relative py-24 bg-[#020810] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — address block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white tracking-tight mb-8">
              INITIALIZE<br />
              <span className="text-gradient-cyan">CONNECTION</span>
            </h2>

            <p className="font-inter text-sm text-steel-400/60 leading-relaxed mb-10 max-w-sm">
              Secure your node in our ecosystems, our spatial home for rapid implementation with our innovative spatial teams.
            </p>

            {/* HQ block */}
            <div className="space-y-6">
              <div>
                <div className="font-mono text-[9px] tracking-[0.25em] text-steel-400/30 uppercase mb-2">
                  Global Headquarters
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={12} className="text-cyan-400 mt-0.5 shrink-0" />
                  <p className="font-inter text-sm text-steel-400/60 leading-relaxed">
                    Suburban District City, Simulation Arc Phase 5, LAN<br />
                    Dubai, UAE
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="font-mono text-[9px] tracking-[0.25em] text-steel-400/30 uppercase mb-2">
                    BioSolidus CUVR
                  </div>
                  <p className="font-inter text-sm text-steel-400/50">Node ID: CUVR-P4</p>
                </div>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.25em] text-steel-400/30 uppercase mb-2">
                    &nbsp;
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-emerald-400/70">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    Online
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — link columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="grid grid-cols-2 gap-8"
          >
            {columns.map((col, i) => (
              <div key={col.title}>
                <div className="font-mono text-[9px] tracking-[0.25em] text-steel-400/30 uppercase mb-4">
                  {col.title}
                </div>
                <ul className="space-y-2.5">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      {link.includes("@") ? (
                        <a
                          href={`mailto:${link}`}
                          className="font-inter text-xs text-cyan-400/60 hover:text-cyan-400 transition-colors"
                        >
                          {link}
                        </a>
                      ) : (
                        <p className="font-inter text-xs text-steel-400/50 leading-relaxed">
                          {link}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom status */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 pt-8 border-t border-white/5 flex items-center justify-center"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-steel-400/30 uppercase text-center">
            Giving is the best getting of all that you will get —
          </p>
        </motion.div>
      </div>
    </section>
  );
}
