"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function CountUpValue({ end, suffix, prefix, isInView }: { end: number; suffix?: string; prefix?: string; isInView: boolean }) {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isInView || hasStarted.current) return;
    hasStarted.current = true;
    const duration = 2000;
    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
    };
    requestAnimationFrame(step);
  }, [isInView, end]);

  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  );
}

const impacts = [
  { end: 100, suffix: "x", label: "Faster than lab testing" },
  { end: 10, suffix: "x", label: "Lower cost per test" },
  { end: 6, suffix: "", label: "PFAS compounds simultaneously" },
  { end: 0, suffix: "", label: "Sample prep required", static: "0" },
];

export default function ImpactStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="impact" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/[0.06] via-accent-green/[0.04] to-accent-blue/[0.06]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-green/30 to-transparent" />
      {/* Subtle glow orbs */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-accent-cyan/[0.04] rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-accent-green/[0.04] rounded-full blur-[100px] -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {impacts.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-3">
                {item.static ? (
                  item.static
                ) : (
                  <CountUpValue end={item.end} suffix={item.suffix} isInView={isInView} />
                )}
              </div>
              <div className="text-xs md:text-sm text-white/35 tracking-wider leading-snug">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
