"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function CountUpValue({ end, suffix, isInView }: { end: number; suffix?: string; isInView: boolean }) {
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

  return <span>{count}{suffix}</span>;
}

const impacts = [
  {
    end: 100,
    suffix: "x",
    label: "Faster than lab testing",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    sublabel: "10 min vs. weeks",
  },
  {
    end: 10,
    suffix: "x",
    label: "Lower cost per test",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    sublabel: "$40 vs. $400",
  },
  {
    end: 6,
    suffix: "",
    label: "PFAS compounds simultaneously",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    sublabel: "PFOA, PFOS, GenX, PFBS, PFHxS, PFNA",
  },
  {
    end: 0,
    suffix: "",
    label: "Sample preparation required",
    isStatic: true,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    sublabel: "Just add water",
  },
];

export default function ImpactStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="impact" ref={ref} className="relative py-28 md:py-36 overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/[0.06] via-accent-green/[0.04] to-accent-blue/[0.06]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-green/30 to-transparent" />
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />
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
              className="text-center group"
            >
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.12 + 0.1 }}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.03] border border-white/5 text-accent-cyan/40 mb-4 group-hover:border-accent-cyan/20 group-hover:text-accent-cyan/60 transition-all duration-300"
              >
                {item.icon}
              </motion.div>
              {/* Number */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold shimmer-text mb-2 relative inline-block">
                {item.isStatic ? (
                  "0"
                ) : (
                  <CountUpValue end={item.end} suffix={item.suffix} isInView={isInView} />
                )}
                {/* Glow behind number */}
                <div className="absolute inset-0 blur-2xl bg-accent-cyan/8 rounded-full -z-10" />
              </div>
              <div className="text-xs md:text-sm text-white/35 tracking-wider leading-snug mb-1">
                {item.label}
              </div>
              <div className="text-[10px] text-white/15 font-mono">
                {item.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
