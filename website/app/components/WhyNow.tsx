"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    year: "2024",
    month: "APR",
    title: "EPA finalizes PFAS MCLs",
    description:
      "Maximum Contaminant Levels set at 4 parts per trillion for PFOA and PFOS. The strictest water quality standard in US history.",
    color: "from-red-500 to-orange-500",
    dotColor: "bg-red-500",
    glowColor: "shadow-red-500/20",
    category: "Regulation",
  },
  {
    year: "2025",
    month: "SEP",
    title: "Nanoscale detection breakthrough",
    description:
      "UChicago/Argonne publishes in Nature Water: field-effect transistor sensor achieves 250 parts-per-quadrillion PFAS detection — 16x below EPA limits.",
    color: "from-accent-cyan to-accent-blue",
    dotColor: "bg-accent-cyan",
    glowColor: "shadow-accent-cyan/20",
    category: "Science",
  },
  {
    year: "2025",
    month: "NOV",
    title: "MIP sensor achieves sub-ppq",
    description:
      "Molecularly imprinted polymer electrochemical sensors detect PFOA at 0.45 parts-per-quadrillion in under 10 seconds. Chip-based sensing is now physically possible.",
    color: "from-accent-green to-accent-cyan",
    dotColor: "bg-accent-green",
    glowColor: "shadow-accent-green/20",
    category: "Science",
  },
  {
    year: "2026",
    month: "APR",
    title: "TSCA reporting deadline",
    description:
      "All US manufacturers and importers must report PFAS usage data. Demand for testing infrastructure surges across every sector.",
    color: "from-amber-500 to-red-500",
    dotColor: "bg-amber-500",
    glowColor: "shadow-amber-500/20",
    category: "Regulation",
  },
  {
    year: "2026",
    month: "NOW",
    title: "VERIDIAN enters the market",
    description:
      "The first MEMS-based portable PFAS sensor. Laboratory-grade detection, field-ready design. The gap between breakthrough science and commercial product — closed.",
    color: "from-accent-cyan to-accent-green",
    dotColor: "bg-accent-cyan",
    glowColor: "shadow-accent-cyan/30",
    category: "Product",
  },
];

export default function WhyNow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineGlow = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="whynow" className="relative section-padding overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-cyan/[0.03] rounded-full blur-[150px]" />

      <div className="max-w-5xl mx-auto relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-xs text-white/10 font-mono">04</span>
            <div className="w-8 h-px bg-white/10" />
            <p className="text-xs tracking-[0.3em] uppercase text-amber-400/70 font-mono">
              Timing
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Why <span className="text-amber-400">now?</span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto mt-6">
            A regulatory mandate, a scientific breakthrough, and a market with zero
            portable solutions converged in the same 18-month window.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line with scroll glow */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px">
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/20 via-accent-cyan/20 to-accent-green/20" />
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-accent-cyan/60 to-accent-green/60"
              style={{ height: lineGlow }}
            />
          </div>

          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                i % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ml-16 md:ml-0 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                <div className={`inline-flex items-center gap-2 mb-3 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${
                    item.category === "Regulation" ? "bg-red-500/5 border-red-500/15 text-red-400/60" :
                    item.category === "Science" ? "bg-accent-cyan/5 border-accent-cyan/15 text-accent-cyan/60" :
                    "bg-accent-green/5 border-accent-green/15 text-accent-green/60"
                  }`}>
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-white/30">{item.month}</span>
                  <span className={`text-sm font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.year}
                  </span>
                </div>
                <h3 className={`text-lg md:text-xl font-semibold mb-2 ${
                  i === timeline.length - 1 ? "text-accent-cyan" : "text-white/85"
                }`}>
                  {item.title}
                </h3>
                <p className="text-sm text-white/35 leading-relaxed max-w-md inline-block">
                  {item.description}
                </p>
              </div>

              {/* Enhanced dot with glow ring */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2">
                <div className={`relative w-5 h-5 rounded-full ${item.dotColor} shadow-lg ${item.glowColor} ${
                  i === timeline.length - 1 ? "animate-pulse" : ""
                }`}>
                  <div className="absolute inset-0 rounded-full border-2 border-[#030712]" />
                  {/* Outer ring */}
                  <div className={`absolute -inset-1.5 rounded-full border border-white/10 ${
                    i === timeline.length - 1 ? "border-accent-cyan/30" : ""
                  }`} />
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
