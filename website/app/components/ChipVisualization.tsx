"use client";

import { motion } from "framer-motion";

export default function ChipVisualization() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      {/* Outer glow */}
      <div className="absolute inset-0 bg-accent-cyan/5 rounded-full blur-[60px]" />

      {/* Wafer circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute inset-8 md:inset-12 rounded-full border border-white/[0.06] overflow-hidden"
      >
        {/* Rotating grid pattern */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          {/* Concentric rings */}
          {[0.3, 0.5, 0.7, 0.9].map((scale, i) => (
            <div
              key={i}
              className="absolute border border-accent-cyan/[0.04] rounded-full"
              style={{
                inset: `${(1 - scale) * 50}%`,
              }}
            />
          ))}

          {/* Radial lines */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`line-${i}`}
              className="absolute top-1/2 left-1/2 h-px bg-gradient-to-r from-transparent via-accent-cyan/[0.05] to-transparent"
              style={{
                width: "100%",
                transformOrigin: "0 0",
                transform: `rotate(${i * 30}deg) translateX(-50%)`,
              }}
            />
          ))}
        </motion.div>

        {/* Center chip */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative"
          >
            {/* Chip body */}
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-accent-cyan/20 shadow-[0_0_30px_rgba(6,214,242,0.1)] flex items-center justify-center">
              {/* Electrode grid */}
              <div className="grid grid-cols-4 gap-0.5 md:gap-1 p-2 md:p-3">
                {Array.from({ length: 16 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: [0.15, 0.6, 0.15],
                      boxShadow: [
                        "0 0 0 rgba(6,214,242,0)",
                        "0 0 4px rgba(6,214,242,0.3)",
                        "0 0 0 rgba(6,214,242,0)",
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      delay: i * 0.15,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    className="w-2 h-2 md:w-3 md:h-3 rounded-[2px] bg-accent-cyan/40"
                  />
                ))}
              </div>
            </div>

            {/* Bond wires */}
            {[
              { x: -8, y: -32, label: "PFOA" },
              { x: 32, y: -8, label: "PFOS" },
              { x: -8, y: 32, label: "GenX" },
              { x: -32, y: -8, label: "MIP" },
            ].map((wire, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + i * 0.2 }}
                className="absolute hidden md:block"
                style={{
                  left: `calc(50% + ${wire.x}px)`,
                  top: `calc(50% + ${wire.y}px)`,
                }}
              >
                <span className="text-[7px] font-mono text-accent-cyan/30 whitespace-nowrap">
                  {wire.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scanning line */}
        <motion.div
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent"
        />
      </motion.div>
    </div>
  );
}
