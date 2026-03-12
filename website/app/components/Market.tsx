"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Market() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="market" className="relative section-padding overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-green/20 to-transparent" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent-green/[0.03] rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent-green/70 font-mono mb-4">
            Market Opportunity
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            A <span className="gradient-text">$1.45 billion</span> market
            <br />
            with zero portable solutions.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              value: "$1.45B",
              label: "PFAS testing market by 2033",
              sublabel: "11.5% CAGR",
              color: "from-accent-cyan/10 to-accent-cyan/5",
              borderColor: "border-accent-cyan/15",
            },
            {
              value: "$1.2T",
              label: "Estimated PFAS remediation market",
              sublabel: "Testing is the prerequisite",
              color: "from-accent-green/10 to-accent-green/5",
              borderColor: "border-accent-green/15",
            },
            {
              value: "66K+",
              label: "US water systems mandated to test",
              sublabel: "Non-discretionary demand",
              color: "from-accent-purple/10 to-accent-purple/5",
              borderColor: "border-accent-purple/15",
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className={`rounded-2xl border ${item.borderColor} bg-gradient-to-b ${item.color} p-8 text-center`}
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-3">
                {item.value}
              </div>
              <div className="text-sm text-white/50 mb-1">{item.label}</div>
              <div className="text-xs text-white/25 font-mono">{item.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Business model highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
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
                margin: "87% gross margin",
                recurring: true,
              },
              {
                title: "Reader Hardware",
                price: "$3,500",
                detail: "$800 COGS",
                margin: "77% gross margin",
                recurring: false,
              },
              {
                title: "Data & Compliance SaaS",
                price: "$99-299/mo",
                detail: "Cloud dashboard + reporting",
                margin: "90%+ gross margin",
                recurring: true,
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-sm text-white/40 mb-2">{item.title}</div>
                <div className="text-2xl font-bold text-white/80 mb-1">{item.price}</div>
                <div className="text-xs text-white/25 font-mono mb-2">{item.detail}</div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-green/10 border border-accent-green/20">
                  <span className="text-xs text-accent-green/70 font-mono">{item.margin}</span>
                </div>
                {item.recurring && (
                  <div className="mt-2 text-[10px] text-accent-cyan/40 font-mono tracking-wider">
                    RECURRING
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
