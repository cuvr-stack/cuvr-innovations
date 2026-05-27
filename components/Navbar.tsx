"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, lang, toggleLang } = useLanguage();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? "bg-[#080808]/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <Image src="/cuvr.png" alt="CUVR Logo" width={40} height={40} style={{ objectFit: "contain" }} />
          <span className="font-orbitron font-bold text-lg tracking-tight text-white">
            CUVR<span className="text-[#00ff6a]">.</span><span className="text-[#00ff6a]">INNOVATION</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-orbitron font-bold text-white/75 hover:text-[#00ff6a] transition-colors uppercase"
              style={{ fontSize: 11, letterSpacing: "0.08em" }}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side — lang toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="font-mono text-[10px] tracking-widest uppercase transition-all duration-300 px-3 py-2 border"
            style={{
              color: "#00ff6a",
              borderColor: "rgba(0,255,106,0.3)",
              background: "rgba(0,255,106,0.05)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,255,106,0.12)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,255,106,0.05)")}
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>

          <button
            className="font-mono text-[11px] tracking-widest text-white px-5 py-2 transition-all duration-300 uppercase"
            style={{ background: "#a855f7" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#9333ea")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#a855f7")}
          >
            {t.nav.cta}
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white/50 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#080808]/98 border-b border-white/5"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {t.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("#")) {
                      e.preventDefault();
                      setOpen(false);
                      const id = link.href.slice(1);
                      setTimeout(() => {
                        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                      }, 320);
                    } else {
                      setOpen(false);
                    }
                  }}
                  className="font-orbitron font-bold text-white/75 hover:text-[#00ff6a] border-b border-white/5 pb-3 uppercase"
                  style={{ fontSize: 12, letterSpacing: "0.08em" }}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 mt-1">
                <button
                  onClick={toggleLang}
                  className="font-mono text-[10px] tracking-widest uppercase px-4 py-2.5 border"
                  style={{ color: "#00ff6a", borderColor: "rgba(0,255,106,0.3)", background: "rgba(0,255,106,0.05)" }}
                >
                  {lang === "en" ? "عربي" : "EN"}
                </button>
                <button className="flex-1 font-mono text-[11px] tracking-widest text-white px-5 py-2.5 uppercase" style={{ background: "#a855f7" }}>
                  {t.nav.cta}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
