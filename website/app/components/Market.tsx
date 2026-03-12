"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import TiltCard from "./TiltCard";

function MarketCounter({ value, prefix = "", suffix = "", isInView }: { value: number; prefix?: string; suffix?: string; isInView: boolean }) {
  const [displayed, setDisplayed] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;
    const duration = 2000;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplayed(Math.round(eased * value));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  const formatted = displayed >= 1000
    ? displayed >= 1000000
      ? `${(displayed / 1000000000).toFixed(displayed >= 1000000000 ? 2 : 1)}`
      : displayed.toLocaleString()
    : String(displayed);

  return <span>{prefix}{formatted}{suffix}</span>;
}

export default function Market() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="market" className="relative section-padding overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-green/20 to-transparent" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent-green/[0.03] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-purple/[0.03] rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-white/10 font-mono">08</span>
            <div className="w-8 h-px bg-white/10" />
            <p className="text-xs tracking-[0.3em] uppercase text-accent-green/70 font-mono">
              Market Opportunity
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            A <span className="gradient-text">$1.45 billion</span> market
            <br />
            with zero portable solutions.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              rawValue: 1.45,
              displayValue: "$1.45B",
              label: "PFAS testing market by 2033",
              sublabel: "11.5% CAGR",
              color: "from-accent-cyan/10 to-accent-cyan/5",
              borderColor: "border-accent-cyan/15",
              hoverBorder: "hover:border-accent-cyan/30",
              glowColor: "hover:shadow-[0_0_40px_rgba(6,214,242,0.08)]",
            },
            {
              rawValue: 1.2,
              displayValue: "$1.2T",
              label: "Estimated PFAS remediation market",
              sublabel: "Testing is the prerequisite",
              color: "from-accent-green/10 to-accent-green/5",
              borderColor: "border-accent-green/15",
              hoverBorder: "hover:border-accent-green/30",
              glowColor: "hover:shadow-[0_0_40px_rgba(0,255,136,0.08)]",
            },
            {
              rawValue: 66000,
              displayValue: "66K+",
              label: "US water systems mandated to test",
              sublabel: "Non-discretionary demand",
              color: "from-accent-purple/10 to-accent-purple/5",
              borderColor: "border-accent-purple/15",
              hoverBorder: "hover:border-accent-purple/30",
              glowColor: "hover:shadow-[0_0_40px_rgba(139,92,246,0.08)]",
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              <TiltCard
                className={`rounded-2xl border ${item.borderColor} ${item.hoverBorder} ${item.glowColor} bg-gradient-to-b ${item.color} p-8 text-center transition-all duration-500`}
                maxTilt={3}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-3">
                  {item.displayValue}
                </div>
                <div className="text-sm text-white/50 mb-1">{item.label}</div>
                <div className="text-xs text-white/25 font-mono">{item.sublabel}</div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Competitive positioning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="glass-card rounded-3xl p-8 md:p-10 mb-12"
        >
          <h3 className="text-lg font-semibold text-white/70 mb-8 text-center">
            Competitive Landscape
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-white/30 font-mono text-xs py-3 pr-4 min-w-[100px]">Solution</th>
                  <th className="text-center text-white/30 font-mono text-xs py-3 px-2">LOD</th>
                  <th className="text-center text-white/30 font-mono text-xs py-3 px-2">Time</th>
                  <th className="text-center text-white/30 font-mono text-xs py-3 px-2">Cost/Test</th>
                  <th className="text-center text-white/30 font-mono text-xs py-3 px-2 hidden sm:table-cell">Portable</th>
                  <th className="text-center text-white/30 font-mono text-xs py-3 px-2 hidden sm:table-cell">Multi-analyte</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "VERIDIAN", lod: "<1 ppt", time: "<10 min", cost: "$40", portable: true, multi: true, highlight: true },
                  { name: "EPA 537.1 Lab", lod: "2 ppt", time: "2-8 weeks", cost: "$300-500", portable: false, multi: true, highlight: false },
                  { name: "Cyclopure", lod: "~10 ppt", time: "Hours", cost: "~$150", portable: false, multi: false, highlight: false },
                  { name: "FREDsense", lod: "~50 ppt", time: "~30 min", cost: "~$100", portable: true, multi: false, highlight: false },
                  { name: "Test strips", lod: "~100 ppt", time: "~15 min", cost: "$10-25", portable: true, multi: false, highlight: false },
                ].map((row, i) => (
                  <motion.tr
                    key={row.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                    className={`border-b border-white/5 ${row.highlight ? "bg-accent-cyan/[0.04]" : "hover:bg-white/[0.02]"} transition-colors`}
                  >
                    <td className={`py-3 pr-4 font-mono text-xs ${row.highlight ? "text-accent-cyan font-semibold" : "text-white/50"}`}>
                      {row.name}
                      {row.highlight && <span className="ml-2 text-[9px] px-1.5 py-0.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan/60">US</span>}
                    </td>
                    <td className={`py-3 px-2 text-center font-mono text-xs ${row.highlight ? "text-accent-green/80" : "text-white/40"}`}>{row.lod}</td>
                    <td className={`py-3 px-2 text-center font-mono text-xs ${row.highlight ? "text-accent-green/80" : "text-white/40"}`}>{row.time}</td>
                    <td className={`py-3 px-2 text-center font-mono text-xs ${row.highlight ? "text-accent-green/80" : "text-white/40"}`}>{row.cost}</td>
                    <td className="py-3 px-2 text-center hidden sm:table-cell">
                      {row.portable
                        ? <span className="text-accent-green/60 text-xs">&#10003;</span>
                        : <span className="text-white/15 text-xs">&#10005;</span>}
                    </td>
                    <td className="py-3 px-2 text-center hidden sm:table-cell">
                      {row.multi
                        ? <span className="text-accent-green/60 text-xs">&#10003;</span>
                        : <span className="text-white/15 text-xs">&#10005;</span>}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Business model highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="glass-card rounded-3xl p-8 md:p-10"
        >
          <h3 className="text-lg font-semibold text-white/70 mb-8 text-center">
            Razor-and-blade model with 87% gross margin on consumables
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sensor Cartridges",
                price: "$40/test",
                detail: "Single-use, $5 COGS",
                margin: "87%",
                marginLabel: "gross margin",
                recurring: true,
                icon: "◇",
              },
              {
                title: "Reader Hardware",
                price: "$3,500",
                detail: "$800 COGS",
                margin: "77%",
                marginLabel: "gross margin",
                recurring: false,
                icon: "◆",
              },
              {
                title: "Data & Compliance SaaS",
                price: "$99-299/mo",
                detail: "Cloud dashboard + reporting",
                margin: "90%+",
                marginLabel: "gross margin",
                recurring: true,
                icon: "◈",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-accent-green/15 hover:bg-accent-green/[0.02] transition-all duration-500 group"
              >
                <div className="text-accent-green/20 text-2xl mb-3 group-hover:text-accent-green/40 transition-colors">{item.icon}</div>
                <div className="text-xs text-white/40 mb-2 font-mono tracking-wider">{item.title}</div>
                <div className="text-2xl font-bold text-white/80 mb-1">{item.price}</div>
                <div className="text-xs text-white/25 font-mono mb-3">{item.detail}</div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-green/10 border border-accent-green/20">
                  <span className="text-lg font-bold text-accent-green/80 font-mono">{item.margin}</span>
                  <span className="text-[10px] text-accent-green/50 font-mono">{item.marginLabel}</span>
                </div>
                {item.recurring && (
                  <div className="mt-3 text-[10px] text-accent-cyan/40 font-mono tracking-wider flex items-center justify-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/30 animate-pulse" />
                    RECURRING REVENUE
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
