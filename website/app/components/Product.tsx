"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const specs = [
  { label: "Analytes", value: "PFOA, PFOS, GenX, PFBS, PFHxS, PFNA" },
  { label: "Detection Limit", value: "<1 ppt (parts per trillion)" },
  { label: "Range", value: "1 – 10,000 ppt" },
  { label: "Sample Volume", value: "500 µL (~10 drops)" },
  { label: "Time to Result", value: "<10 minutes" },
  { label: "Accuracy", value: "±15% vs. EPA Method 537.1" },
  { label: "Reader Weight", value: "450g (handheld)" },
  { label: "Battery", value: "50+ tests per charge" },
  { label: "Connectivity", value: "Bluetooth / Wi-Fi / USB-C" },
  { label: "Cartridge Storage", value: "Room temp, 18-month shelf life" },
];

const steps = [
  {
    step: "01",
    title: "Collect",
    description: "Add 500µL of water to the disposable sensor cartridge. No special containers, no preservation chemicals.",
  },
  {
    step: "02",
    title: "Insert",
    description: "Snap the cartridge into the VERIDIAN reader. The microfluidic channels automatically meter, filter, and deliver the sample to the electrode array.",
  },
  {
    step: "03",
    title: "Analyze",
    description: "The reader runs an impedance sweep across all 6 MIP-functionalized electrode zones. The on-board ML model processes the spectral data in real time.",
  },
  {
    step: "04",
    title: "Report",
    description: "Quantitative PFAS concentrations for all 6 EPA-regulated compounds display on screen. Results sync to the cloud dashboard for compliance documentation.",
  },
];

export default function Product() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="product" className="relative section-padding" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-green/20 to-transparent" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-accent-green/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-white/10 font-mono">05</span>
            <div className="w-8 h-px bg-white/10" />
            <p className="text-xs tracking-[0.3em] uppercase text-accent-green/70 font-mono">
              The Product
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-4xl">
            Lab-grade sensing.{" "}
            <span className="gradient-text">Field-ready design.</span>
          </h2>
        </motion.div>

        {/* Product visualization - Reader + Cartridge side by side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16 relative"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Reader Device */}
            <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-transparent to-accent-blue/5" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent-cyan/10 rounded-full blur-[80px]" />
              <div className="relative z-10">
                <div className="text-xs font-mono text-accent-cyan/50 mb-6 tracking-wider">READER UNIT</div>
                {/* Device frame */}
                <div className="mx-auto w-full max-w-xs rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 p-4 shadow-[0_0_40px_rgba(6,214,242,0.08)]">
                  {/* Screen */}
                  <div className="rounded-xl bg-[#060e1f] border border-accent-cyan/15 p-5 mb-4 relative overflow-hidden">
                    {/* Scan line effect */}
                    <motion.div
                      className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent pointer-events-none z-10"
                      animate={{ top: ["0%", "100%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                    />
                    {/* Status bar */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                        <span className="text-[10px] font-mono text-accent-cyan/70">ANALYSIS COMPLETE</span>
                      </div>
                      <span className="text-[9px] font-mono text-white/20">09:42</span>
                    </div>
                    {/* Results */}
                    <div className="space-y-3">
                      {[
                        { name: "PFOA", value: 12.3, pct: 65, status: "warn" },
                        { name: "PFOS", value: 45.7, pct: 82, status: "danger" },
                        { name: "GenX", value: 2.1, pct: 15, status: "safe" },
                        { name: "PFBS", value: 0.8, pct: 8, status: "safe" },
                        { name: "PFHxS", value: 6.2, pct: 38, status: "warn" },
                        { name: "PFNA", value: 1.4, pct: 12, status: "safe" },
                      ].map((compound, i) => (
                        <div key={compound.name} className="flex items-center gap-3">
                          <span className="text-[10px] font-mono text-white/40 w-10">{compound.name}</span>
                          <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${compound.pct}%` } : {}}
                              transition={{ duration: 1.2, delay: 0.8 + i * 0.1, ease: "easeOut" }}
                              className={`h-full rounded-full ${
                                compound.status === "danger"
                                  ? "bg-gradient-to-r from-red-600 to-red-400"
                                  : compound.status === "warn"
                                  ? "bg-gradient-to-r from-amber-600 to-amber-400"
                                  : "bg-gradient-to-r from-emerald-600 to-emerald-400"
                              }`}
                            />
                          </div>
                          <span className={`text-[10px] font-mono w-14 text-right ${
                            compound.status === "danger"
                              ? "text-red-400"
                              : compound.status === "warn"
                              ? "text-amber-400"
                              : "text-emerald-400"
                          }`}>
                            {compound.value} ppt
                          </span>
                        </div>
                      ))}
                    </div>
                    {/* Footer */}
                    <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center">
                      <span className="text-[9px] font-mono text-white/15">EPA MCL: 4.0 ppt (PFOA/PFOS)</span>
                      <span className="text-[9px] font-mono text-red-400/80 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                        2 EXCEED
                      </span>
                    </div>
                  </div>
                  {/* Cartridge slot */}
                  <div className="rounded-lg bg-white/[0.02] border border-dashed border-accent-cyan/15 py-3 flex items-center justify-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-cyan/30">
                      <rect x="4" y="8" width="16" height="12" rx="2" />
                      <path d="M8 8V6a4 4 0 018 0v2" />
                    </svg>
                    <span className="text-[9px] font-mono text-accent-cyan/25 tracking-wider">CARTRIDGE INSERTED</span>
                  </div>
                </div>
                <p className="text-white/25 text-xs text-center mt-4 font-mono">
                  18 x 10 x 6 cm &middot; 450g &middot; USB-C
                </p>
              </div>
            </div>

            {/* Cartridge Detail */}
            <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-green/5 via-transparent to-accent-cyan/5" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent-green/10 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="text-xs font-mono text-accent-green/50 mb-6 tracking-wider">SENSOR CARTRIDGE</div>
                {/* Cartridge visualization */}
                <div className="mx-auto w-full max-w-xs">
                  <div className="rounded-xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 p-6">
                    {/* Chip layout */}
                    <div className="aspect-[3/2] rounded-lg bg-[#060e1f] border border-accent-green/15 p-4 mb-4 relative overflow-hidden">
                      {/* Grid pattern representing electrode array */}
                      <div className="absolute inset-3 grid grid-cols-6 gap-1">
                        {Array.from({ length: 24 }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: [0.1, 0.4, 0.1] } : {}}
                            transition={{
                              duration: 2,
                              delay: i * 0.05,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                            className="rounded-sm bg-accent-cyan/30"
                          />
                        ))}
                      </div>
                      {/* Labels */}
                      <div className="absolute bottom-2 left-3 right-3 flex justify-between">
                        {["PFOA", "PFOS", "GenX", "PFBS", "PFHxS", "PFNA"].map((label) => (
                          <span key={label} className="text-[6px] font-mono text-accent-cyan/30">{label}</span>
                        ))}
                      </div>
                    </div>
                    {/* Microfluidic channels */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex-1 h-1 rounded-full bg-gradient-to-r from-accent-cyan/20 to-accent-green/20" />
                      <span className="text-[8px] font-mono text-white/20">FLOW PATH</span>
                      <div className="flex-1 h-1 rounded-full bg-gradient-to-r from-accent-green/20 to-accent-cyan/20" />
                    </div>
                    {/* Details */}
                    <div className="space-y-2">
                      {[
                        { label: "Electrode Array", value: "128 channels, 200nm pitch" },
                        { label: "MIP Layer", value: "6 PFAS-specific receptors" },
                        { label: "Sample Prep", value: "Passive capillary microfluidics" },
                        { label: "Filter", value: "Integrated 1µm membrane" },
                      ].map((item) => (
                        <div key={item.label} className="flex justify-between text-[9px]">
                          <span className="text-white/25 font-mono">{item.label}</span>
                          <span className="text-accent-green/40 font-mono">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-white/25 text-xs text-center mt-4 font-mono">
                    Single-use &middot; $40/cartridge &middot; 18-month shelf life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-10 text-center text-white/70">
            Four steps. Ten minutes. Complete PFAS profile.
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                className="glass-card rounded-2xl p-6 relative group hover:border-accent-cyan/15 transition-all duration-300"
              >
                <div className="text-5xl font-bold text-accent-cyan/[0.07] absolute top-4 right-4 font-mono group-hover:text-accent-cyan/10 transition-colors">
                  {s.step}
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center mb-4 group-hover:bg-accent-cyan/15 group-hover:shadow-[0_0_20px_rgba(6,214,242,0.1)] transition-all duration-300">
                    <span className="text-accent-cyan font-mono text-sm font-bold">{s.step}</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-white/80">{s.title}</h4>
                  <p className="text-white/35 text-sm leading-relaxed">{s.description}</p>
                </div>
                {/* Arrow connector (hidden on small screens) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <svg width="12" height="12" viewBox="0 0 12 12" className="text-accent-cyan/20">
                      <path d="M2 6h8M7 3l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specs table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="glass-card rounded-3xl p-8 md:p-10"
        >
          <h3 className="text-xl font-semibold mb-8 text-white/70">Technical Specifications</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            {specs.map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                className="flex justify-between items-center py-4 border-b border-white/5 hover:bg-white/[0.02] -mx-3 px-3 rounded transition-colors"
              >
                <span className="text-white/30 text-sm">{spec.label}</span>
                <span className="text-white/70 text-sm font-mono text-right">{spec.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
