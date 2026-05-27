"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const teamMeta = [
  { photo: "/nikhil_web.png", photoHover: "/nikhil_colour.png", tagColor: "#00ff6a", initials: "" },
  { photo: "/hiba.png",       photoHover: "/hiba_colour.png",   tagColor: "#a855f7", initials: "H" },
  { photo: "/sneha.png",      photoHover: "/sneha_colour.png",   tagColor: "#00e5ff", initials: "SB" },
  { photo: "/geofred.png",   photoHover: "/geofred_colour.png", tagColor: "#fbbf24", initials: "GG" },
];

function TeamCard({ meta, member, index }: {
  meta: typeof teamMeta[0];
  member: { name: string; title: string; tag: string; desc: string };
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -4 }}
      className="group"
      style={{ width: 280, background: "#0f0f0f", border: "1px solid #1f1f1f", flexShrink: 0 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Photo */}
      <div className="relative overflow-hidden"
        style={{ height: 300, background: "#0a0a0a", borderBottom: "1px solid #1f1f1f" }}>
        {meta.photo ? (
          <>
            <img src={meta.photo} alt={member.name}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "center top",
                opacity: hovered ? 0 : 1, transition: "opacity 0.4s ease" }} />
            {meta.photoHover && (
              <img src={meta.photoHover} alt={`${member.name} colour`}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
                  objectFit: "cover", objectPosition: "center top",
                  opacity: hovered ? 1 : 0, transition: "opacity 0.4s ease" }} />
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${meta.tagColor}18, transparent)` }}>
            <span className="font-orbitron font-bold"
              style={{ fontSize: 56, color: meta.tagColor, opacity: 0.35 }}>
              {meta.initials}
            </span>
          </div>
        )}

        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.06) 3px,rgba(0,0,0,0.06) 6px)" }} />

        <div className="absolute top-3 left-3 z-10">
          <span className="font-mono"
            style={{ fontSize: 9, letterSpacing: "0.2em", color: meta.tagColor,
              border: `1px solid ${meta.tagColor}40`, padding: "2px 8px", background: "rgba(0,0,0,0.7)" }}>
            {member.tag}
          </span>
        </div>

        <div className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: meta.tagColor }} />
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-orbitron font-bold text-white text-sm leading-tight mb-1">{member.name}</h3>
        <p className="font-mono uppercase mb-3" style={{ fontSize: 9, letterSpacing: "0.15em", color: meta.tagColor }}>
          {member.title}
        </p>
        <p className="font-inter leading-relaxed" style={{ color: "rgba(255,255,255,0.85)", fontSize: 13 }}>
          {member.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function ArchitectsSection() {
  const { t } = useLanguage();
  const a = t.architects;

  return (
    <section id="architects" className="relative bg-[#080808] overflow-hidden py-20">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <p className="font-orbitron font-bold uppercase whitespace-nowrap"
          style={{ fontSize: "clamp(3rem,10vw,8rem)", color: "rgba(255,255,255,0.015)", letterSpacing: "0.1em" }}>
          ARCHITECTS_OF_CUVR
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "#a855f7" }}>
            {a.badge}
          </p>
          <h2 className="font-orbitron font-bold text-white" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            {a.titleMain}<span style={{ color: "#00ff6a" }}>{a.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-6">
          {a.team.map((member, i) => (
            <TeamCard key={member.name} meta={teamMeta[i]} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
