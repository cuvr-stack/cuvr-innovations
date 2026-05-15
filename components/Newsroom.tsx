"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Newspaper } from "lucide-react";

const articles = [
  {
    date: "SEPT 11, 2024",
    title: "Seed Funding Secured for Global Expansion",
    excerpt:
      "CUVR Innovations closes its seed round, unlocking capital to scale its middleware platform and VR rehabilitation division across three new markets.",
    tag: "FUNDING",
  },
  {
    date: "AUG 30, 2024",
    title: "New B2B Headquarters Launched in Dubai",
    excerpt:
      "CUVR opening of our Dubai HQ on Innovation HQ connects CUVR Digital City to support multilateral operations.",
    tag: "EXPANSION",
  },
  {
    date: "JULY 19, 2024",
    title: "Middleware V4.0 Online Globally",
    excerpt:
      "Deployment of the latest synaptic middleware V4.0 across multi-distributed nodes achieves new benchmark latency status.",
    tag: "TECHNOLOGY",
  },
];

export default function Newsroom() {
  return (
    <section id="newsroom" className="relative py-24 bg-[#020810]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12 flex-wrap gap-4"
        >
          <div>
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white tracking-tight mb-2">
              Newsroom
            </h2>
            <p className="font-inter text-sm text-steel-400/50">
              Latest updates from the CUVR ecosystems.
            </p>
          </div>
          <a href="#" className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-cyan-400/60 hover:text-cyan-400 uppercase transition-colors border border-cyan-400/20 hover:border-cyan-400/40 px-4 py-2">
            <Newspaper size={11} />
            BusinessMedia &amp;+
          </a>
        </motion.div>

        {/* Articles */}
        <div className="grid md:grid-cols-3 gap-5">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group border border-white/8 bg-[#061224] hover:border-cyan-400/20 hover:bg-[#071830] transition-all duration-400 p-6 flex flex-col cursor-pointer"
            >
              {/* Meta */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[9px] tracking-widest text-steel-400/40 uppercase">
                  {article.date}
                </span>
                <span className="font-mono text-[9px] tracking-widest text-cyan-400/50 uppercase border border-cyan-400/15 px-2 py-0.5">
                  {article.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-orbitron font-bold text-base text-white leading-snug mb-3 tracking-tight group-hover:text-cyan-400/90 transition-colors">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="font-inter text-xs text-steel-400/60 leading-relaxed flex-1 mb-6">
                {article.excerpt}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-steel-400/40 group-hover:text-cyan-400/70 transition-colors">
                Read Release
                <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
