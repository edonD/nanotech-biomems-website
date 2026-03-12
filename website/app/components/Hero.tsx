"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ChipVisualization from "./ChipVisualization";

function CountUpStat({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;

    const match = value.match(/^([^0-9]*)([0-9]+)(.*)$/);
    if (!match) return;
    const prefix = match[1];
    const target = parseInt(match[2], 10);
    const suffix = match[3];

    const duration = 1800;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplayed(`${prefix}${Math.round(eased * target)}${suffix}`);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl md:text-3xl font-bold gradient-text">{displayed}</div>
      <div className="text-xs text-white/30 mt-1 tracking-wider uppercase font-mono">{label}</div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const chipY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const chipScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial gradient background with parallax */}
      <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,214,242,0.08)_0%,transparent_60%)]" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-green/5 rounded-full blur-[100px]" />
      </motion.div>

      {/* Background chip visualization with parallax */}
      <motion.div
        style={{ y: chipY, scale: chipScale }}
        className="absolute inset-0 flex items-center justify-center opacity-60 pointer-events-none"
      >
        <ChipVisualization />
      </motion.div>

      <motion.div style={{ y: contentY }} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-cyan/5 border border-accent-cyan/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            <span className="text-xs tracking-widest uppercase text-accent-cyan/80 font-mono">
              MEMS Nanosensor Technology
            </span>
          </div>
        </motion.div>

        {/* Cinematic headline reveal */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
          <motion.span
            className="block overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.span
              className="block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            >
              Detect forever
            </motion.span>
          </motion.span>
          <motion.span
            className="block overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.span
              className="block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.33, 1, 0.68, 1] }}
            >
              chemicals in
            </motion.span>
          </motion.span>
          <motion.span
            className="block overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.span
              className="shimmer-text block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
            >
              10 minutes.
            </motion.span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          VERIDIAN is a handheld MEMS sensor system that detects PFAS contamination
          in water at sub-parts-per-trillion levels. No lab. No waiting. Just answers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-accent-cyan to-accent-green text-[#030712] font-semibold hover:shadow-[0_0_40px_rgba(6,214,242,0.4)] transition-all duration-300 hover:scale-105"
          >
            Request Early Access
          </a>
          <a
            href="#technology"
            className="px-8 py-4 rounded-full border border-white/10 text-white/70 hover:border-accent-cyan/30 hover:text-accent-cyan hover:bg-accent-cyan/5 transition-all duration-300"
          >
            See the Science
          </a>
        </motion.div>

        {/* Stats bar with count-up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          <CountUpStat value="<1 ppt" label="Detection Limit" />
          <CountUpStat value="10 min" label="Time to Result" />
          <CountUpStat value="6" label="PFAS Compounds" />
          <CountUpStat value="$40" label="Per Test" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-white/10 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-accent-cyan/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
