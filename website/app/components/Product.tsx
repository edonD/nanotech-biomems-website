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
          <p className="text-xs tracking-[0.3em] uppercase text-accent-green/70 font-mono mb-4">
            The Product
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-4xl">
            Lab-grade sensing.{" "}
            <span className="gradient-text">Field-ready design.</span>
          </h2>
        </motion.div>

        {/* Product visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card rounded-3xl p-10 md:p-16 mb-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-accent-cyan/5 to-transparent" />
          <div className="relative z-10">
            {/* Stylized device illustration */}
            <div className="mx-auto w-64 h-80 md:w-80 md:h-96 relative mb-10">
              {/* Reader body */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 shadow-2xl">
                {/* Screen */}
                <div className="mx-6 mt-8 h-40 md:h-48 rounded-xl bg-[#0a1628] border border-accent-cyan/20 p-4 overflow-hidden">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                    <span className="text-[10px] font-mono text-accent-cyan/60">ANALYSIS COMPLETE</span>
                  </div>
                  <div className="space-y-2">
                    {["PFOA", "PFOS", "GenX"].map((compound, i) => (
                      <div key={compound} className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-white/40">{compound}</span>
                        <div className="flex-1 mx-3 h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${[65, 82, 23][i]}%` } : {}}
                            transition={{ duration: 1, delay: 0.8 + i * 0.2, ease: "easeOut" }}
                            className={`h-full rounded-full ${
                              i === 1
                                ? "bg-gradient-to-r from-red-500 to-red-400"
                                : i === 0
                                ? "bg-gradient-to-r from-amber-500 to-amber-400"
                                : "bg-gradient-to-r from-accent-green to-accent-cyan"
                            }`}
                          />
                        </div>
                        <span className={`text-[10px] font-mono ${
                          i === 1 ? "text-red-400" : i === 0 ? "text-amber-400" : "text-accent-green"
                        }`}>
                          {["12.3", "45.7", "2.1"][i]} ppt
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-mono text-white/20">EPA MCL: 4.0 ppt</span>
                      <span className="text-[9px] font-mono text-red-400/80">EXCEEDS LIMIT</span>
                    </div>
                  </div>
                </div>
                {/* Cartridge slot */}
                <div className="mx-10 mt-6 h-12 rounded-lg border border-dashed border-white/10 flex items-center justify-center">
                  <span className="text-[9px] font-mono text-white/20 tracking-wider">CARTRIDGE SLOT</span>
                </div>
              </div>
            </div>
            <p className="text-white/30 text-sm max-w-md mx-auto">
              The VERIDIAN reader: 18 x 10 x 6 cm, rechargeable via USB-C, stores 1,000+ test results locally.
            </p>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="glass-card rounded-2xl p-6 relative"
              >
                <div className="text-5xl font-bold text-accent-cyan/[0.07] absolute top-4 right-4 font-mono">
                  {s.step}
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center mb-4">
                    <span className="text-accent-cyan font-mono text-sm font-bold">{s.step}</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-white/80">{s.title}</h4>
                  <p className="text-white/35 text-sm leading-relaxed">{s.description}</p>
                </div>
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
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between items-center py-4 border-b border-white/5"
              >
                <span className="text-white/30 text-sm">{spec.label}</span>
                <span className="text-white/70 text-sm font-mono text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
