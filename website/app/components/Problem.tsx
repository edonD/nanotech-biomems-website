"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    number: "98%",
    label: "of Americans have PFAS in their blood",
    color: "text-red-400",
  },
  {
    number: "$300-500",
    label: "cost per lab test for PFAS",
    color: "text-amber-400",
  },
  {
    number: "2-8 weeks",
    label: "wait time for lab results",
    color: "text-orange-400",
  },
  {
    number: "66,000+",
    label: "US water systems must comply with new EPA limits",
    color: "text-red-500",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="relative section-padding" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-red-400/70 font-mono mb-4">
            The Crisis
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-4xl">
            Forever chemicals are{" "}
            <span className="text-red-400">everywhere.</span>
            <br />
            Testing for them is{" "}
            <span className="text-amber-400">stuck in the past.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg text-white/50 leading-relaxed mb-6">
              PFAS are a class of ~15,000 synthetic chemicals that never break down.
              They&apos;re in your drinking water, your blood, your children&apos;s blood.
              They cause cancer, thyroid disease, immune suppression, and liver damage.
            </p>
            <p className="text-lg text-white/50 leading-relaxed mb-6">
              In 2024, the EPA set maximum contaminant levels for PFOA and PFOS at{" "}
              <span className="text-white font-semibold">4 parts per trillion</span> —
              one of the strictest standards ever enacted. Every public water system in
              America must test and comply.
            </p>
            <p className="text-lg text-white/50 leading-relaxed">
              The problem? The only way to test is to collect samples in specialized bottles,
              ship them to one of ~200 certified labs with $500K instruments, and wait weeks
              for results. Labs are overwhelmed. Backlogs are growing. Communities are drinking
              water they don&apos;t know is contaminated.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="glass-card rounded-2xl p-6 flex items-center gap-6"
              >
                <span className={`text-3xl md:text-4xl font-bold ${stat.color} whitespace-nowrap`}>
                  {stat.number}
                </span>
                <span className="text-white/40 text-sm leading-snug">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Comparison visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="glass-card rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-xl font-semibold mb-10 text-center text-white/70">
            Current Testing vs. VERIDIAN
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Current */}
            <div className="rounded-2xl border border-red-500/10 bg-red-500/[0.02] p-8">
              <div className="text-red-400 font-mono text-xs tracking-widest uppercase mb-6">
                Current Lab Testing
              </div>
              <div className="space-y-5">
                {[
                  { label: "Cost", value: "$300–500 per sample" },
                  { label: "Time", value: "2–8 weeks turnaround" },
                  { label: "Equipment", value: "$500K+ LC-MS/MS" },
                  { label: "Location", value: "Certified lab only" },
                  { label: "Operator", value: "PhD chemist required" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center border-b border-white/5 pb-3">
                    <span className="text-white/30 text-sm">{item.label}</span>
                    <span className="text-red-300/70 text-sm font-mono">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Veridian */}
            <div className="rounded-2xl border border-accent-cyan/10 bg-accent-cyan/[0.02] p-8 glow-cyan">
              <div className="text-accent-cyan font-mono text-xs tracking-widest uppercase mb-6">
                VERIDIAN
              </div>
              <div className="space-y-5">
                {[
                  { label: "Cost", value: "$40 per test" },
                  { label: "Time", value: "<10 minutes" },
                  { label: "Equipment", value: "$3,500 handheld reader" },
                  { label: "Location", value: "Any field site" },
                  { label: "Operator", value: "Minimal training" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center border-b border-white/5 pb-3">
                    <span className="text-white/30 text-sm">{item.label}</span>
                    <span className="text-accent-cyan/80 text-sm font-mono">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
