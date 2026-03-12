"use client";

import { motion } from "framer-motion";
import ChipVisualization from "./ChipVisualization";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,214,242,0.08)_0%,transparent_60%)]" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-green/5 rounded-full blur-[100px]" />

      {/* Background chip visualization */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <ChipVisualization />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-cyan/5 border border-accent-cyan/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            <span className="text-xs tracking-widest uppercase text-accent-cyan/80 font-mono">
              MEMS Nanosensor Technology
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8"
        >
          <span className="block">Detect forever</span>
          <span className="block">chemicals in</span>
          <span className="gradient-text block">10 minutes.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          VERIDIAN is a handheld MEMS sensor system that detects PFAS contamination
          in water at sub-parts-per-trillion levels. No lab. No waiting. Just answers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-accent-cyan to-accent-green text-[#030712] font-semibold hover:shadow-[0_0_30px_rgba(6,214,242,0.3)] transition-all duration-300 hover:scale-105"
          >
            Request Early Access
          </a>
          <a
            href="#technology"
            className="px-8 py-4 rounded-full border border-white/10 text-white/70 hover:border-accent-cyan/30 hover:text-accent-cyan transition-all duration-300"
          >
            See the Science
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {[
            { value: "<1 ppt", label: "Detection Limit" },
            { value: "10 min", label: "Time to Result" },
            { value: "6", label: "PFAS Compounds" },
            { value: "$40", label: "Per Test" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-xs text-white/30 mt-1 tracking-wider uppercase font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
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
