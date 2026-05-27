"use client";
import Image from "next/image";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const socials = [
  { icon: Linkedin,  href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter,   href: "#", label: "Twitter / X" },
  { icon: Youtube,   href: "#", label: "YouTube" },
];

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  const cols = [
    { label: f.colDirectory, links: f.links.directory, numbered: true },
    { label: f.colNode,      links: f.links.node,      numbered: false },
    { label: f.colLegal,     links: f.links.legal,     numbered: false },
  ];

  return (
    <footer className="bg-[#080808] border-t border-[#141414]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-5">
              <Image src="/cuvr.png" alt="CUVR Logo" width={40} height={40} style={{ objectFit: "contain" }} />
              <span className="font-orbitron font-bold text-lg text-white tracking-tight">
                CUVR<span className="text-[#00ff6a]">.</span><span className="text-[#00ff6a]">INNOVATION</span>
              </span>
            </a>
            <p className="font-inter text-xs text-white/70 leading-relaxed mb-5 max-w-[200px]">
              {f.copyright}
            </p>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ff6a] animate-pulse" />
              <span className="font-mono text-[9px] tracking-widest text-[#00ff6a]/60 uppercase">
                {f.status}
              </span>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="font-mono text-[9px] tracking-[0.25em] text-white/60 uppercase mb-4">
                {f.colFollow}
              </h4>
              <div className="flex items-center gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} aria-label={label}
                    className="flex items-center justify-center transition-all duration-300 group"
                    style={{ width: 32, height: 32, border: "1px solid #2a2a2a", background: "transparent" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,255,106,0.4)"; e.currentTarget.style.background = "rgba(0,255,106,0.06)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.background = "transparent"; }}
                  >
                    <Icon size={13} className="text-white/50 group-hover:text-[#00ff6a] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.label}>
              <h4 className="font-mono text-[9px] tracking-[0.25em] text-white/60 uppercase mb-5">
                {col.label}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="font-mono text-xs text-white/75 hover:text-[#00ff6a] transition-colors tracking-wide"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {col.numbered && "num" in link ? (
                        <>
                          <span className="text-white/30 mr-2">[{(link as { num: string; text: string; href: string }).num}]</span>
                          {link.text}
                        </>
                      ) : (
                        link.text
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-[#111] px-6 py-3 max-w-7xl mx-auto flex items-center justify-between">
        <span className="font-mono text-[9px] tracking-widest text-white/50 uppercase">
          CUVR.INNOVATION
        </span>
        <span className="font-mono text-[9px] tracking-widest text-white/50 uppercase">
          Protocol V4.1X
        </span>
      </div>
    </footer>
  );
}
