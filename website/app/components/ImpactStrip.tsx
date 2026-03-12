"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const impacts = [
  { value: "100x", label: "Faster than lab testing" },
  { value: "10x", label: "Lower cost per test" },
  { value: "6", label: "PFAS compounds simultaneously" },
  { value: "0", label: "Sample prep required" },
];

export default function ImpactStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="impact" ref={ref} className="relative py-20 overflow-hidden">
      {/* Dramatic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/[0.06] via-accent-green/[0.04] to-accent-blue/[0.06]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-green/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {impacts.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2">
                {item.value}
              </div>
              <div className="text-xs md:text-sm text-white/30 tracking-wider">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
