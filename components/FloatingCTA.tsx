"use client";
import { useEffect, useState } from "react";
import { CalendarCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const { isAr } = useLanguage();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-6 z-50 transition-all duration-500"
      style={{
        right: isAr ? "auto" : 24,
        left:  isAr ? 24 : "auto",
        opacity:   visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <button
        onClick={scrollToContact}
        className="group flex items-center gap-2.5 font-mono font-bold uppercase shadow-lg transition-all duration-300"
        style={{
          background: "#a855f7",
          color: "#fff",
          fontSize: 11,
          letterSpacing: "0.15em",
          padding: "14px 22px",
          boxShadow: "0 0 24px rgba(168,85,247,0.4)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#9333ea";
          e.currentTarget.style.boxShadow = "0 0 36px rgba(168,85,247,0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#a855f7";
          e.currentTarget.style.boxShadow = "0 0 24px rgba(168,85,247,0.4)";
        }}
      >
        <CalendarCheck size={14} className="group-hover:scale-110 transition-transform" />
        {isAr ? "احجز عرضاً" : "Book a Demo"}
      </button>
    </div>
  );
}
