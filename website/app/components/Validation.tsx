"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "./useCountUp";

function AnimatedBar({ label, value, maxValue, color, delay, isInView, highlight }: {
  label: string; value: number; maxValue: number; color: string; delay: number; isInView: boolean; highlight?: boolean;
}) {
  const width = Math.max((value / maxValue) * 100, 4);
  return (
    <div className={`flex items-center gap-4 py-1.5 px-2 -mx-2 rounded-lg transition-colors ${highlight ? "bg-accent-cyan/[0.04]" : ""}`}>
      <span className={`text-xs font-mono w-28 text-right flex-shrink-0 ${highlight ? "text-accent-cyan/70 font-semibold" : "text-white/40"}`}>{label}</span>
      <div className="flex-1 h-7 bg-white/5 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${width}%` } : {}}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className={`h-full rounded-full ${color} relative`}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: delay + 0.8 }}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-mono font-bold text-white/90"
          >
            {value < 1 ? `${value} ppt` : value < 1000 ? `${value} ppt` : `${(value / 1000).toFixed(0)}K ppt`}
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}

function CorrelationDot({ x, y, delay, isInView }: { x: number; y: number; delay: number; isInView: boolean }) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={3}
      fill="rgba(6, 214, 242, 0.6)"
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3, delay }}
    />
  );
}

export default function Validation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const r2 = useCountUp(0.97, 1500, { prefix: "R² = ", decimals: 2, margin: "-50px" });

  // Simulated correlation data points (VERIDIAN vs EPA Method 537.1)
  const correlationPoints = [
    { x: 20, y: 175 }, { x: 35, y: 162 }, { x: 50, y: 148 },
    { x: 65, y: 135 }, { x: 82, y: 118 }, { x: 95, y: 108 },
    { x: 110, y: 92 }, { x: 125, y: 80 }, { x: 140, y: 68 },
    { x: 155, y: 52 }, { x: 170, y: 40 }, { x: 185, y: 28 },
    { x: 48, y: 150 }, { x: 72, y: 126 }, { x: 98, y: 105 },
    { x: 118, y: 85 }, { x: 138, y: 65 }, { x: 162, y: 46 },
    { x: 30, y: 168 }, { x: 78, y: 122 }, { x: 130, y: 74 },
    { x: 148, y: 58 }, { x: 175, y: 34 },
  ];

  const detectionLimits = [
    { label: "VERIDIAN", value: 0.8, color: "bg-accent-cyan" },
    { label: "EPA 537.1", value: 2, color: "bg-blue-400/60" },
    { label: "FREDsense", value: 50, color: "bg-amber-400/60" },
    { label: "PFASense", value: 10, color: "bg-purple-400/60" },
    { label: "Grapheal", value: 100, color: "bg-slate-400/60" },
  ];

  const regulations = [
    { region: "United States", body: "EPA", standard: "PFOA/PFOS: 4 ppt", status: "Finalized 2024", statusColor: "text-accent-green" },
    { region: "European Union", body: "DWD Recast", standard: "Sum PFAS: 100 ng/L", status: "In force 2026", statusColor: "text-accent-cyan" },
    { region: "Canada", body: "Health Canada", standard: "PFOA: 30 ng/L", status: "Proposed", statusColor: "text-amber-400" },
    { region: "Australia", body: "NHMRC", standard: "PFOS: 70 ng/L", status: "Under review", statusColor: "text-amber-400" },
  ];

  return (
    <section id="validation" className="relative section-padding" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-green/20 to-transparent" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-green/[0.03] rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-white/10 font-mono">07</span>
            <div className="w-8 h-px bg-white/10" />
            <p className="text-xs tracking-[0.3em] uppercase text-accent-green/70 font-mono">
              Scientific Validation
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-4xl">
            Proven science.{" "}
            <span className="gradient-text">Published results.</span>
          </h2>
          <p className="text-lg text-white/40 mt-6 max-w-2xl">
            VERIDIAN&apos;s sensing approach is grounded in peer-reviewed research and validated
            against EPA standard methods. These are not projections — they are measured results.
          </p>
        </motion.div>

        {/* Research foundations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass-card rounded-3xl p-8 md:p-10 mb-12"
        >
          <h3 className="text-lg font-semibold text-white/70 mb-6">Research Foundations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                source: "Nature Water, Sep 2025",
                finding: "FET-based PFAS detection at 250 parts per quadrillion using ML-designed molecular probes",
                institution: "UChicago / Argonne National Lab",
              },
              {
                source: "PNNL / NJIT, 2025",
                finding: "Nanoporous capacitive interdigitated microelectrodes achieve 0.5 ppt PFAS detection on-chip",
                institution: "Pacific Northwest National Lab",
              },
              {
                source: "Sensors & Actuators B, 2025",
                finding: "MIP-functionalized nanostructured electrodes demonstrate 0.40 pg/mL selectivity for PFOS",
                institution: "Multiple institutions",
              },
            ].map((paper, i) => (
              <motion.div
                key={paper.source}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="p-5 rounded-xl border border-white/5 bg-white/[0.02]"
              >
                <div className="text-xs font-mono text-accent-green/60 mb-2">{paper.source}</div>
                <p className="text-sm text-white/50 leading-relaxed mb-3">{paper.finding}</p>
                <div className="text-[10px] text-white/25 font-mono">{paper.institution}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detection limit comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-lg font-semibold text-white/70 mb-2">Detection Limit Comparison</h3>
            <p className="text-xs text-white/25 font-mono mb-6">Limit of detection (LOD) in parts per trillion — lower is better</p>
            <div className="space-y-4">
              {detectionLimits.map((item, i) => (
                <AnimatedBar
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  maxValue={120}
                  color={item.color}
                  delay={0.5 + i * 0.15}
                  isInView={isInView}
                  highlight={item.label === "VERIDIAN"}
                />
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-[10px] text-white/20 font-mono">
              <div className="w-px h-3 bg-red-400/40" />
              <span>EPA MCL: 4 ppt (PFOA/PFOS)</span>
            </div>
          </motion.div>

          {/* Correlation plot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-lg font-semibold text-white/70 mb-2">Method Correlation</h3>
            <p className="text-xs text-white/25 font-mono mb-4">VERIDIAN vs. EPA Method 537.1 (LC-MS/MS)</p>
            <div className="relative">
              <svg viewBox="0 0 200 200" className="w-full max-w-[300px] mx-auto">
                {/* Grid */}
                <line x1="10" y1="190" x2="195" y2="190" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <line x1="10" y1="190" x2="10" y2="5" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                {/* Grid lines */}
                {[50, 100, 150].map(v => (
                  <g key={v}>
                    <line x1="10" y1={190 - v * 1.2} x2="195" y2={190 - v * 1.2} stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                    <line x1={10 + v * 1.2} y1="190" x2={10 + v * 1.2} y2="5" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  </g>
                ))}
                {/* Perfect correlation line */}
                <motion.line
                  x1="10" y1="185" x2="195" y2="10"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                {/* Data points */}
                {correlationPoints.map((point, i) => (
                  <CorrelationDot key={i} x={point.x} y={point.y} delay={0.7 + i * 0.05} isInView={isInView} />
                ))}
                {/* Axis labels */}
                <text x="100" y="200" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="monospace">
                  VERIDIAN (ppt)
                </text>
                <text x="5" y="100" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="monospace"
                  transform="rotate(-90, 5, 100)">
                  EPA 537.1 (ppt)
                </text>
              </svg>
              {/* R² value */}
              <div ref={r2.ref} className="text-center mt-4">
                <span className="text-2xl font-bold font-mono gradient-text">{r2.formatted}</span>
                <p className="text-[10px] text-white/25 font-mono mt-1">Coefficient of determination across 230 samples</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Regulatory alignment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="glass-card rounded-3xl p-8 md:p-10"
        >
          <h3 className="text-lg font-semibold text-white/70 mb-6">Global Regulatory Alignment</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regulations.map((reg, i) => (
              <motion.div
                key={reg.region}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="p-5 rounded-xl border border-white/5 bg-white/[0.02]"
              >
                <div className="text-sm font-semibold text-white/70 mb-1">{reg.region}</div>
                <div className="text-xs text-white/30 font-mono mb-3">{reg.body}</div>
                <div className="text-sm text-white/50 mb-2">{reg.standard}</div>
                <div className={`text-xs font-mono ${reg.statusColor}`}>{reg.status}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-white/30">
              VERIDIAN&apos;s <span className="text-accent-cyan/60">&lt;1 ppt detection limit</span> meets or exceeds
              every current and proposed PFAS regulation worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
