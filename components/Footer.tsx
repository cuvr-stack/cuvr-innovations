"use client";

const cols = [
  {
    label: "DIRECTORY",
    links: [
      { num: "01", text: "PhysioVR", href: "#physiovr" },
      { num: "02", text: "Real Estate", href: "#real-estate" },
      { num: "03", text: "Tech Stack", href: "#technology" },
    ],
    numbered: true,
  },
  {
    label: "NODE",
    links: [
      { text: "About_Us", href: "#about" },
      { text: "Careers_Void", href: "#" },
      { text: "Contact_Terminal", href: "#" },
    ],
    numbered: false,
  },
  {
    label: "LEGAL_BIT",
    links: [
      { text: "End_User_License", href: "#" },
      { text: "Privacy_Shield", href: "#" },
    ],
    numbered: false,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#141414]">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="font-space font-bold text-3xl text-white mb-4 tracking-tight">
              CUVR<span className="text-[#00ff6a]">.</span>
            </div>
            <p className="font-inter text-xs text-white/25 leading-relaxed mb-6 max-w-[180px]">
              © 2024 CUVR Innovation Labs.<br />
              All Rights Reserved.<br />
              Encrypted Data Frame Register.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ff6a] animate-pulse" />
              <span className="font-mono text-[9px] tracking-widest text-[#00ff6a]/60 uppercase">
                Global OPN Active
              </span>
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.label}>
              <h4 className="font-mono text-[9px] tracking-[0.25em] text-white/25 uppercase mb-5">
                {col.label}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="font-mono text-xs text-white/40 hover:text-white transition-colors tracking-wide"
                    >
                      {col.numbered && "num" in link ? (
                        <>
                          <span className="text-white/20 mr-2">[{(link as { num: string; text: string; href: string }).num}]</span>
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
      <div className="border-t border-[#111] px-6 py-4 max-w-7xl mx-auto flex items-center justify-between">
        <span className="font-mono text-[9px] tracking-widest text-white/15 uppercase">
          CUVR.INNOVATION — Neural Systems
        </span>
        <span className="font-mono text-[9px] tracking-widest text-white/15 uppercase">
          Protocol V4.1X
        </span>
      </div>
    </footer>
  );
}
