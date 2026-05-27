"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const teamMeta = [
  { photo: "/nikhil_web.png", photoHover: "/nikhil_colour.png", tagColor: "#00ff6a", initials: "" },
  { photo: "/hiba.png",       photoHover: "/hiba_colour.png",   tagColor: "#a855f7", initials: "H" },
  { photo: "/sneha.png",      photoHover: "/sneha_colour.png",  tagColor: "#00e5ff", initials: "SB" },
  { photo: "/geofred.png",    photoHover: "/geofred_colour.png",tagColor: "#fbbf24", initials: "GG" },
];

const CARD_WIDTH = 280;
const CARD_GAP   = 24;

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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group"
      style={{
        width: CARD_WIDTH,
        minWidth: CARD_WIDTH,
        background: "#0f0f0f",
        border: "1px solid #1f1f1f",
        flexShrink: 0,
        scrollSnapAlign: "start",
      }}
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

        <div className="absolute top-3 start-3 z-10">
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = a.team.length;

  const scrollTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, total - 1));
    setActiveIndex(clamped);
    scrollRef.current?.scrollTo({
      left: clamped * (CARD_WIDTH + CARD_GAP),
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const idx = Math.round(scrollRef.current.scrollLeft / (CARD_WIDTH + CARD_GAP));
    setActiveIndex(Math.max(0, Math.min(idx, total - 1)));
  };

  return (
    <section id="architects" className="relative bg-[#080808] overflow-hidden py-20">
      {/* Ghost text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <p className="font-orbitron font-bold uppercase whitespace-nowrap"
          style={{ fontSize: "clamp(3rem,10vw,8rem)", color: "rgba(255,255,255,0.015)", letterSpacing: "0.1em" }}>
          ARCHITECTS_OF_CUVR
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header + nav buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "#a855f7" }}>
              {a.badge}
            </p>
            <h2 className="font-orbitron font-bold text-white" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
              {a.titleMain}<span style={{ color: "#00ff6a" }}>{a.titleHighlight}</span>
            </h2>
          </div>

          {/* Arrow buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="flex items-center justify-center transition-all duration-300 disabled:opacity-20"
              style={{
                width: 40, height: 40,
                border: "1px solid #2a2a2a",
                background: "transparent",
                color: "#00ff6a",
              }}
              onMouseEnter={(e) => { if (activeIndex > 0) e.currentTarget.style.background = "rgba(0,255,106,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scrollTo(activeIndex + 1)}
              disabled={activeIndex === total - 1}
              className="flex items-center justify-center transition-all duration-300 disabled:opacity-20"
              style={{
                width: 40, height: 40,
                border: "1px solid #2a2a2a",
                background: "transparent",
                color: "#00ff6a",
              }}
              onMouseEnter={(e) => { if (activeIndex < total - 1) e.currentTarget.style.background = "rgba(0,255,106,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* Slider track */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-4"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>{`.architects-track::-webkit-scrollbar { display: none; }`}</style>
          {a.team.map((member, i) => (
            <TeamCard key={member.name} meta={teamMeta[i]} member={member} index={i} />
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-2 mt-8">
          {a.team.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className="transition-all duration-300"
              style={{
                width: i === activeIndex ? 24 : 6,
                height: 6,
                background: i === activeIndex ? "#00ff6a" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
