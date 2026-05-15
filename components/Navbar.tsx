"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Cuvr Rehab", href: "https://www.cuvr.ae" },
  { label: "Cuvr Realtor", href: "#real-estate" },
  { label: "Technology", href: "#technology" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        <a href="#" className="flex items-center gap-2 group">
          {/* Logo mark — two overlapping bars */}
          <div className="flex flex-col gap-[3px]">
            <div className="w-4 h-[2px] bg-[#00ff6a]" />
            <div className="w-3 h-[2px] bg-[#00ff6a] opacity-60" />
          </div>
          <span className="font-space font-700 text-sm tracking-tight text-white">
            CUVR<span className="text-[#00ff6a]">.</span>
            <span className="text-white/50 text-xs">INNOVATION</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-inter text-xs text-white/50 hover:text-white transition-colors tracking-wide"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="font-mono text-[11px] tracking-widest text-white border border-white/30 hover:border-white hover:bg-white/5 px-5 py-2 transition-all duration-300 uppercase">
            CONNECT_NODE
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
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-inter text-sm text-white/50 hover:text-white border-b border-white/5 pb-3"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </a>
              ))}
              <button className="font-mono text-[11px] tracking-widest text-white border border-white/30 px-5 py-2.5 uppercase mt-1">
                CONNECT_NODE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
