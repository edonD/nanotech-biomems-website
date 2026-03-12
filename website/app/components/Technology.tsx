"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techLayers = [
  {
    number: "01",
    title: "Nanostructured Electrode Array",
    description:
      "Gold interdigitated microelectrode arrays fabricated via MEMS lithography on silicon substrates. Nanostructuring increases effective sensing surface area by >1,000x compared to planar electrodes, enabling detection at parts-per-quadrillion levels.",
    detail: "Fabricated using standard CMOS-compatible processes: thin-film deposition, photolithography, reactive ion etching. Each 5mm chip contains 128 individually addressable electrode fingers at 200nm pitch.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="8" width="32" height="32" rx="4" />
        <line x1="16" y1="12" x2="16" y2="36" />
        <line x1="24" y1="12" x2="24" y2="36" />
        <line x1="32" y1="12" x2="32" y2="36" />
        <circle cx="16" cy="20" r="2" fill="currentColor" />
        <circle cx="24" cy="28" r="2" fill="currentColor" />
        <circle cx="32" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Molecularly Imprinted Polymer Layer",
    description:
      "Synthetic molecular receptors templated to the exact 3D shape of specific PFAS molecules. Each electrode in the array targets a different PFAS compound — PFOA, PFOS, GenX, PFBS, PFHxS, PFNA — enabling simultaneous 6-compound detection.",
    detail: "MIPs provide antibody-level selectivity without biological instability. No cold chain. No degradation. 18-month shelf life at room temperature. Manufacturing cost: <$0.50 per sensor.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 6L24 42" />
        <circle cx="24" cy="14" r="6" />
        <circle cx="24" cy="30" r="4" />
        <path d="M18 14L12 8" />
        <path d="M30 14L36 8" />
        <path d="M20 30L14 36" />
        <path d="M28 30L34 36" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Electrochemical Impedance Spectroscopy",
    description:
      "When PFAS molecules bind to the MIP recognition cavities, they alter the electrode's impedance signature. A frequency sweep from 1 Hz to 1 MHz generates a rich spectral fingerprint that enables both identification and quantification.",
    detail: "The impedance change follows a Randles circuit model modified for MIP binding kinetics. Signal-to-noise ratio exceeds 40 dB at 4 ppt PFOS concentration — well above the detection threshold.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 24 C10 14, 14 34, 18 24 C22 14, 26 34, 30 24 C34 14, 38 34, 42 24" />
        <line x1="6" y1="38" x2="42" y2="38" />
        <line x1="6" y1="38" x2="6" y2="10" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Integrated Microfluidic Handling",
    description:
      "On-chip microfluidic channels handle sample metering, particulate filtration, and precise delivery to the electrode array. Add 500µL of water — the chip does the rest. No pipettes, no reagents, no training.",
    detail: "Passive capillary-driven flow eliminates the need for external pumps. Embedded hydrophilic surface treatments ensure consistent wetting. Filtration membrane removes particles >1µm.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 12 L20 12 L20 20 L28 20 L28 12 L40 12" />
        <path d="M20 20 L20 28 L28 28 L28 20" />
        <path d="M8 36 L20 36 L20 28" />
        <path d="M40 36 L28 36 L28 28" />
        <circle cx="24" cy="24" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "On-Board ML Signal Processing",
    description:
      "A neural network trained on thousands of impedance spectra runs on the reader's embedded processor. It converts raw frequency-domain data into calibrated PFAS concentrations in real time, compensating for temperature, pH, and matrix effects.",
    detail: "The model achieves ±15% accuracy vs. EPA Method 537.1 across diverse water matrices including groundwater, surface water, and treated effluent. Continuous OTA model updates improve accuracy over time.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="16" r="3" />
        <circle cx="12" cy="32" r="3" />
        <circle cx="24" cy="12" r="3" />
        <circle cx="24" cy="24" r="3" />
        <circle cx="24" cy="36" r="3" />
        <circle cx="36" cy="24" r="3" />
        <line x1="15" y1="16" x2="21" y2="13" />
        <line x1="15" y1="16" x2="21" y2="24" />
        <line x1="15" y1="32" x2="21" y2="24" />
        <line x1="15" y1="32" x2="21" y2="36" />
        <line x1="27" y1="12" x2="33" y2="24" />
        <line x1="27" y1="24" x2="33" y2="24" />
        <line x1="27" y1="36" x2="33" y2="24" />
      </svg>
    ),
  },
];

export default function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="technology" className="relative section-padding" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent-cyan/70 font-mono mb-4">
            The Science
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-4xl">
            Five layers of{" "}
            <span className="gradient-text">nanotechnology</span>
            <br />
            on a chip smaller than a postage stamp.
          </h2>
        </motion.div>

        {/* Scale visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card rounded-3xl p-8 md:p-10 mb-16"
        >
          <div className="text-center mb-8">
            <p className="text-white/40 text-sm">Sensing at the molecular scale</p>
          </div>
          <div className="flex items-center justify-between gap-2 md:gap-4 overflow-x-auto pb-2">
            {[
              { scale: "5mm", label: "Sensor Chip", color: "bg-accent-cyan/20 border-accent-cyan/30" },
              { scale: "200nm", label: "Electrode Pitch", color: "bg-accent-blue/20 border-accent-blue/30" },
              { scale: "~1nm", label: "MIP Cavity", color: "bg-accent-green/20 border-accent-green/30" },
              { scale: "0.7nm", label: "PFOS Molecule", color: "bg-accent-purple/20 border-accent-purple/30" },
            ].map((item, i) => (
              <div key={item.label} className="flex items-center gap-2 md:gap-4">
                <div className={`flex-shrink-0 rounded-xl border ${item.color} px-4 py-3 text-center min-w-[100px]`}>
                  <div className="text-lg md:text-xl font-bold font-mono text-white/80">{item.scale}</div>
                  <div className="text-[10px] text-white/30 mt-1">{item.label}</div>
                </div>
                {i < 3 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" className="text-white/10 flex-shrink-0">
                    <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech layers */}
        <div className="space-y-6">
          {techLayers.map((layer, i) => (
            <motion.div
              key={layer.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="glass-card rounded-2xl p-8 md:p-10 group hover:border-accent-cyan/20 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="flex items-start gap-4 md:w-16 flex-shrink-0">
                  <span className="text-accent-cyan/30 font-mono text-sm">{layer.number}</span>
                </div>
                <div className="flex-shrink-0 text-accent-cyan/50 group-hover:text-accent-cyan/80 transition-colors">
                  {layer.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white/90">
                    {layer.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed mb-3">
                    {layer.description}
                  </p>
                  <p className="text-white/25 text-sm leading-relaxed font-mono">
                    {layer.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
