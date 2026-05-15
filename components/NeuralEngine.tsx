"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Wifi, FileText } from "lucide-react";

const logEntries = [
  { time: "14:32:01", msg: "Bridge handoff confirmed..." },
  { time: "14:32:04", msg: "Spatial integrity +0.03% integrity..." },
  { time: "14:32:07", msg: "Transmission sequence 3.2MB/s..." },
  { time: "14:32:11", msg: "Loader node scanning..." },
  { time: "14:32:15", msg: "Gateway handshake SUCCESSFUL." },
  { time: "14:32:19", msg: "Core latency within threshold..." },
  { time: "14:32:23", msg: "Memory scaffold reboot..." },
  { time: "14:32:28", msg: "Bridge handoff confirmed..." },
  { time: "14:32:32", msg: "Spatial integrity +0.01% integrity..." },
];

function NeuralViz() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    const CX = W / 2;
    const CY = H / 2;

    interface Ring { r: number; speed: number; phase: number; opacity: number }
    const rings: Ring[] = [
      { r: 60, speed: 0.008, phase: 0, opacity: 0.6 },
      { r: 110, speed: -0.005, phase: 1, opacity: 0.4 },
      { r: 160, speed: 0.003, phase: 2, opacity: 0.25 },
      { r: 210, speed: -0.002, phase: 0.5, opacity: 0.15 },
    ];

    interface Particle { angle: number; radius: number; speed: number; trail: { x: number; y: number }[] }
    const particles: Particle[] = Array.from({ length: 12 }, (_, i) => ({
      angle: (i / 12) * Math.PI * 2,
      radius: 60 + Math.floor(i / 3) * 50,
      speed: 0.01 + (i % 3) * 0.005,
      trail: [],
    }));

    let animId: number;
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Center glow
      const grd = ctx.createRadialGradient(CX, CY, 0, CX, CY, 80);
      grd.addColorStop(0, "rgba(0, 212, 255, 0.15)");
      grd.addColorStop(1, "transparent");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, W, H);

      // Rings
      rings.forEach((ring, i) => {
        ring.phase += ring.speed;
        ctx.save();
        ctx.translate(CX, CY);
        ctx.rotate(ring.phase);

        ctx.beginPath();
        ctx.setLineDash([4, 8]);
        ctx.arc(0, 0, ring.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 212, 255, ${ring.opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
        ctx.setLineDash([]);

        // Tick marks
        for (let j = 0; j < 8; j++) {
          const a = (j / 8) * Math.PI * 2;
          const x1 = Math.cos(a) * (ring.r - 4);
          const y1 = Math.sin(a) * (ring.r - 4);
          const x2 = Math.cos(a) * (ring.r + 4);
          const y2 = Math.sin(a) * (ring.r + 4);
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = `rgba(0, 212, 255, ${ring.opacity * 1.5})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        ctx.restore();
      });

      // Particles
      particles.forEach((p) => {
        p.angle += p.speed;
        const x = CX + Math.cos(p.angle) * p.radius;
        const y = CY + Math.sin(p.angle) * p.radius;

        p.trail.push({ x, y });
        if (p.trail.length > 20) p.trail.shift();

        if (p.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(p.trail[0].x, p.trail[0].y);
          p.trail.forEach((pt) => ctx.lineTo(pt.x, pt.y));
          ctx.strokeStyle = "rgba(0, 212, 255, 0.3)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 212, 255, 0.9)";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 212, 255, 0.2)";
        ctx.fill();
      });

      // Center hexagon
      ctx.save();
      ctx.translate(CX, CY);
      ctx.rotate(t * 0.005);
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 - Math.PI / 6;
        const x = Math.cos(a) * 24;
        const y = Math.sin(a) * 24;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = "rgba(0, 212, 255, 0.8)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.fillStyle = "rgba(0, 212, 255, 0.08)";
      ctx.fill();
      ctx.restore();

      t++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />;
}

function LiveLog() {
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((c) => (c >= logEntries.length ? 3 : c + 1));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
      {logEntries.slice(0, visibleCount).map((entry, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex gap-3"
        >
          <span className="text-cyan-400/50 shrink-0">{entry.time}</span>
          <span className="text-steel-400/70">{entry.msg}</span>
        </motion.div>
      ))}
      <div className="flex gap-3 pt-1">
        <span className="text-cyan-400/50 shrink-0">—</span>
        <span className="text-cyan-400/70 animate-pulse">█</span>
      </div>
    </div>
  );
}

export default function NeuralEngine() {
  return (
    <section id="neural-engine" className="relative py-24 bg-[#030d1a] overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400/60 uppercase mb-3">
            — Real-time Data Telemetry from the CUVR Core
          </p>
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white tracking-tight">
            Neural Engine Middleware
          </h2>
          <p className="font-inter text-sm text-steel-400/60 mt-3 max-w-xl leading-relaxed">
            Visualizing the distributed synaptic network processing across global nodes for core-latency spatial computing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left — Synapse viz */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative border border-white/8 bg-[#020810] overflow-hidden"
            style={{ minHeight: 480 }}
          >
            {/* Synapse label top */}
            <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-steel-400/60 uppercase">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                Core Synaptic Handoff
              </div>
            </div>

            {/* Canvas */}
            <div className="absolute inset-0 pt-12 pb-20">
              <NeuralViz />
            </div>

            {/* Bottom metric */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#020810] via-[#020810]/80 to-transparent">
              <div className="font-orbitron font-black text-5xl text-cyan-400 tabular-nums">
                0.02
              </div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-steel-400/50 uppercase mt-1">
                Synapses / Millisecond
              </div>
            </div>
          </motion.div>

          {/* Right — Telemetry */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="border border-white/8 bg-[#020810] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-steel-400/60 uppercase">
                <Wifi size={12} className="text-cyan-400" />
                Network Telemetry
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400/70">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                Online ENC-882
              </div>
            </div>

            {/* Log */}
            <div className="flex-1 p-5 overflow-hidden relative">
              <LiveLog />
              {/* Fade */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#020810] to-transparent" />
            </div>

            {/* Footer */}
            <div className="px-5 py-4 border-t border-white/5">
              <button className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-steel-400/50 hover:text-cyan-400 transition-colors uppercase">
                <FileText size={10} />
                Neural Report
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
