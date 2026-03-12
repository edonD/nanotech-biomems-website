"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ── Animated EIS Nyquist Plot ── */
function NyquistPlot({ isInView }: { isInView: boolean }) {
  // Nyquist semicircle path (Z_real vs -Z_imag)
  const path = "M 20,140 Q 40,140 60,120 Q 90,80 110,55 Q 130,35 150,35 Q 170,40 185,60 Q 195,80 195,100 Q 195,120 190,130 Q 185,140 180,140";
  const pathClean = "M 20,140 Q 50,140 70,125 Q 95,95 115,70 Q 135,48 155,42 Q 175,42 188,58 Q 198,75 200,100 Q 200,125 195,140";

  return (
    <div className="relative">
      <div className="text-[10px] font-mono text-white/25 mb-2 text-center">Nyquist Plot — Impedance Response</div>
      <svg viewBox="0 0 220 160" className="w-full max-w-[280px] mx-auto">
        {/* Axes */}
        <line x1="15" y1="145" x2="210" y2="145" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        <line x1="15" y1="145" x2="15" y2="20" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        {/* Labels */}
        <text x="110" y="158" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="monospace">Z&apos; (Real) →</text>
        <text x="8" y="80" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="monospace" transform="rotate(-90, 8, 80)">-Z&apos;&apos; (Imag) →</text>
        {/* Baseline curve (no PFAS) */}
        <motion.path
          d={path}
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        {/* PFAS-bound curve (shifted) */}
        <motion.path
          d={pathClean}
          fill="none"
          stroke="rgba(6,214,242,0.7)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        {/* Legend */}
        <line x1="130" y1="15" x2="145" y2="15" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="148" y="18" fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="monospace">Baseline</text>
        <line x1="130" y1="25" x2="145" y2="25" stroke="rgba(6,214,242,0.7)" strokeWidth="2" />
        <text x="148" y="28" fill="rgba(6,214,242,0.7)" fontSize="5" fontFamily="monospace">+ PFAS bound</text>
      </svg>
    </div>
  );
}

/* ── Animated MIP Binding ── */
function MIPBinding({ isInView }: { isInView: boolean }) {
  return (
    <div className="relative">
      <div className="text-[10px] font-mono text-white/25 mb-2 text-center">Molecular Recognition — Lock and Key</div>
      <svg viewBox="0 0 200 120" className="w-full max-w-[260px] mx-auto">
        {/* MIP substrate */}
        <rect x="10" y="70" width="180" height="40" rx="4" fill="rgba(0,255,136,0.08)" stroke="rgba(0,255,136,0.2)" strokeWidth="0.5" />
        <text x="100" y="95" textAnchor="middle" fill="rgba(0,255,136,0.4)" fontSize="6" fontFamily="monospace">MIP POLYMER MATRIX</text>
        {/* Cavities */}
        {[40, 100, 160].map((cx, i) => (
          <g key={cx}>
            <motion.path
              d={`M ${cx - 12},70 Q ${cx - 12},82 ${cx - 6},86 Q ${cx},90 ${cx + 6},86 Q ${cx + 12},82 ${cx + 12},70`}
              fill="rgba(6,214,242,0.05)"
              stroke="rgba(6,214,242,0.3)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.2 }}
            />
            {/* PFAS molecule approaching */}
            <motion.g
              initial={{ y: -40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.8 + i * 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
            >
              {/* Fluorinated chain */}
              <line x1={cx} y1={42} x2={cx} y2={58} stroke="rgba(6,214,242,0.6)" strokeWidth="1.5" />
              <circle cx={cx} cy={40} r={3} fill="rgba(6,214,242,0.4)" stroke="rgba(6,214,242,0.6)" strokeWidth="0.5" />
              {/* F atoms */}
              {[46, 52, 58].map((y) => (
                <g key={y}>
                  <circle cx={cx - 4} cy={y} r={1.5} fill="rgba(0,255,136,0.3)" />
                  <circle cx={cx + 4} cy={y} r={1.5} fill="rgba(0,255,136,0.3)" />
                </g>
              ))}
              {/* Carboxyl head */}
              <circle cx={cx} cy={62} r={4} fill="rgba(239,68,68,0.3)" stroke="rgba(239,68,68,0.4)" strokeWidth="0.5" />
              <text x={cx} y={64} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="4" fontFamily="monospace">COOH</text>
            </motion.g>
            {/* Labels */}
            <text x={cx} y={108} textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="4" fontFamily="monospace">
              {["PFOA", "PFOS", "GenX"][i]}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ── Animated Electrode Build-up ── */
function ElectrodeBuildUp({ isInView }: { isInView: boolean }) {
  const layers = [
    { label: "Si Substrate", color: "rgba(100,116,139,0.5)", height: 20 },
    { label: "SiO₂ Insulation", color: "rgba(59,130,246,0.3)", height: 8 },
    { label: "Au Electrode", color: "rgba(245,158,11,0.6)", height: 10 },
    { label: "Nanostructures", color: "rgba(245,178,11,0.4)", height: 14 },
    { label: "MIP Coating", color: "rgba(0,255,136,0.3)", height: 8 },
  ];

  let yOffset = 100;

  return (
    <div className="relative">
      <div className="text-[10px] font-mono text-white/25 mb-2 text-center">Electrode Cross-Section — Layer Build-up</div>
      <svg viewBox="0 0 260 130" className="w-full max-w-[300px] mx-auto">
        {layers.map((layer, i) => {
          yOffset -= layer.height;
          const y = yOffset;
          return (
            <motion.g key={layer.label}>
              <motion.rect
                x="40"
                y={y}
                width="160"
                height={layer.height}
                fill={layer.color}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.5"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.3 }}
                style={{ transformOrigin: `120px ${y + layer.height}px` }}
              />
              {/* Nanostructure visual details */}
              {layer.label === "Nanostructures" && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.5 }}
                >
                  {Array.from({ length: 16 }).map((_, j) => (
                    <rect key={j} x={48 + j * 10} y={y} width={2} height={-4 - Math.random() * 6}
                      fill="rgba(245,178,11,0.5)" rx="1" />
                  ))}
                </motion.g>
              )}
              <motion.text
                x="210"
                y={y + layer.height / 2 + 2}
                fill="rgba(255,255,255,0.35)"
                fontSize="5"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.3 }}
              >
                {layer.label}
              </motion.text>
            </motion.g>
          );
        })}
        {/* Scale indicator */}
        <motion.g initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 2 }}>
          <line x1="15" y1="50" x2="15" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          <line x1="12" y1="50" x2="18" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          <line x1="12" y1="100" x2="18" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          <text x="15" y="78" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="5" fontFamily="monospace" transform="rotate(-90, 15, 78)">~500nm</text>
        </motion.g>
      </svg>
    </div>
  );
}

/* ── Microfluidic Flow ── */
function MicrofluidicFlow({ isInView }: { isInView: boolean }) {
  return (
    <div className="relative">
      <div className="text-[10px] font-mono text-white/25 mb-2 text-center">Microfluidic Sample Path</div>
      <svg viewBox="0 0 260 100" className="w-full max-w-[300px] mx-auto">
        {/* Channel paths */}
        <motion.path
          d="M 20,50 L 60,50 L 60,25 L 120,25 L 120,50 L 160,50 L 160,25 L 220,25 L 220,50 L 240,50"
          fill="none"
          stroke="rgba(59,130,246,0.3)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, delay: 0.3 }}
        />
        {/* Flow particles */}
        {[0, 0.2, 0.4, 0.6, 0.8].map((offset, i) => (
          <motion.circle
            key={i}
            r="2"
            fill="rgba(6,214,242,0.8)"
            initial={{ opacity: 0 }}
            animate={isInView ? {
              opacity: [0, 1, 1, 0],
              offsetDistance: ["0%", "100%"],
            } : {}}
            transition={{
              duration: 3,
              delay: 1 + offset * 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
            style={{
              offsetPath: `path("M 20,50 L 60,50 L 60,25 L 120,25 L 120,50 L 160,50 L 160,25 L 220,25 L 220,50 L 240,50")`,
            }}
          />
        ))}
        {/* Labels */}
        <text x="20" y="70" fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="monospace">INLET</text>
        <text x="80" y="15" fill="rgba(255,255,255,0.2)" fontSize="5" fontFamily="monospace">FILTER</text>
        <text x="170" y="15" fill="rgba(255,255,255,0.2)" fontSize="5" fontFamily="monospace">ELECTRODE ARRAY</text>
        <text x="225" y="70" fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="monospace">WASTE</text>
        {/* Dimensions */}
        <text x="130" y="95" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="5" fontFamily="monospace">Channel: 200µm × 50µm</text>
      </svg>
    </div>
  );
}

const techLayers = [
  {
    number: "01",
    title: "Nanostructured Electrode Array",
    description:
      "Gold interdigitated microelectrode arrays fabricated via MEMS lithography on silicon substrates. Nanostructuring increases effective sensing surface area by >1,000x compared to planar electrodes, enabling detection at parts-per-quadrillion levels.",
    detail: "128 individually addressable electrode fingers at 200nm pitch on a 5mm chip. CMOS-compatible process: thin-film deposition → photolithography → reactive ion etching.",
    diagram: "electrode",
  },
  {
    number: "02",
    title: "Molecularly Imprinted Polymer Layer",
    description:
      "Synthetic molecular receptors templated to the exact 3D shape of specific PFAS molecules. Each electrode in the array targets a different PFAS compound — PFOA, PFOS, GenX, PFBS, PFHxS, PFNA — enabling simultaneous 6-compound detection.",
    detail: "MIPs provide antibody-level selectivity without biological instability. No cold chain. No degradation. 18-month shelf life at room temperature. Cost: <$0.50 per sensor.",
    diagram: "mip",
  },
  {
    number: "03",
    title: "Electrochemical Impedance Spectroscopy",
    description:
      "When PFAS molecules bind to the MIP recognition cavities, they alter the electrode's impedance signature. A frequency sweep from 1 Hz to 1 MHz generates a rich spectral fingerprint that enables both identification and quantification.",
    detail: "Impedance change follows a modified Randles circuit model for MIP binding kinetics. SNR exceeds 40 dB at 4 ppt PFOS — well above detection threshold.",
    diagram: "eis",
  },
  {
    number: "04",
    title: "Integrated Microfluidic Handling",
    description:
      "On-chip microfluidic channels handle sample metering, particulate filtration, and precise delivery to the electrode array. Add 500µL of water — the chip does the rest. No pipettes, no reagents, no training.",
    detail: "Passive capillary-driven flow eliminates external pumps. Hydrophilic surface treatments ensure consistent wetting. Filtration membrane removes particles >1µm.",
    diagram: "fluidic",
  },
  {
    number: "05",
    title: "On-Board ML Signal Processing",
    description:
      "A neural network trained on thousands of impedance spectra runs on the reader's embedded processor. It converts raw frequency-domain data into calibrated PFAS concentrations in real time, compensating for temperature, pH, and matrix effects.",
    detail: "±15% accuracy vs. EPA Method 537.1 across groundwater, surface water, and treated effluent. Continuous OTA model updates improve accuracy over time.",
    diagram: "ml",
  },
];

function MLDiagram({ isInView }: { isInView: boolean }) {
  return (
    <div className="relative">
      <div className="text-[10px] font-mono text-white/25 mb-2 text-center">Signal Processing Pipeline</div>
      <svg viewBox="0 0 260 80" className="w-full max-w-[300px] mx-auto">
        {/* Input layer */}
        {[20, 30, 40, 50, 60].map((y, i) => (
          <motion.circle key={`in-${i}`} cx="30" cy={y} r="4" fill="rgba(139,92,246,0.3)" stroke="rgba(139,92,246,0.5)" strokeWidth="0.5"
            initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 0.3 + i * 0.05 }} />
        ))}
        {/* Hidden layer 1 */}
        {[18, 28, 38, 48, 52, 62].map((y, i) => (
          <motion.circle key={`h1-${i}`} cx="90" cy={y} r="4" fill="rgba(6,214,242,0.2)" stroke="rgba(6,214,242,0.4)" strokeWidth="0.5"
            initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 0.6 + i * 0.05 }} />
        ))}
        {/* Hidden layer 2 */}
        {[25, 40, 55].map((y, i) => (
          <motion.circle key={`h2-${i}`} cx="155" cy={y} r="4" fill="rgba(6,214,242,0.2)" stroke="rgba(6,214,242,0.4)" strokeWidth="0.5"
            initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 0.9 + i * 0.05 }} />
        ))}
        {/* Output layer (6 PFAS) */}
        {[15, 25, 35, 45, 55, 65].map((y, i) => (
          <motion.circle key={`out-${i}`} cx="220" cy={y} r="4" fill="rgba(0,255,136,0.2)" stroke="rgba(0,255,136,0.4)" strokeWidth="0.5"
            initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 1.2 + i * 0.05 }} />
        ))}
        {/* Connections (simplified) */}
        <motion.g initial={{ opacity: 0 }} animate={isInView ? { opacity: 0.1 } : {}} transition={{ delay: 1.5 }}>
          {[20, 30, 40, 50, 60].map((y1) =>
            [18, 28, 38, 48, 52, 62].map((y2) => (
              <line key={`${y1}-${y2}`} x1="34" y1={y1} x2="86" y2={y2} stroke="rgba(255,255,255,0.5)" strokeWidth="0.3" />
            ))
          )}
          {[18, 28, 38, 48, 52, 62].map((y1) =>
            [25, 40, 55].map((y2) => (
              <line key={`h-${y1}-${y2}`} x1="94" y1={y1} x2="151" y2={y2} stroke="rgba(255,255,255,0.5)" strokeWidth="0.3" />
            ))
          )}
          {[25, 40, 55].map((y1) =>
            [15, 25, 35, 45, 55, 65].map((y2) => (
              <line key={`o-${y1}-${y2}`} x1="159" y1={y1} x2="216" y2={y2} stroke="rgba(255,255,255,0.5)" strokeWidth="0.3" />
            ))
          )}
        </motion.g>
        {/* Layer labels */}
        <text x="30" y="75" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5" fontFamily="monospace">EIS Data</text>
        <text x="122" y="75" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="5" fontFamily="monospace">Hidden Layers</text>
        <text x="220" y="75" textAnchor="middle" fill="rgba(0,255,136,0.4)" fontSize="5" fontFamily="monospace">6 PFAS</text>
      </svg>
    </div>
  );
}

function getDiagram(type: string, isInView: boolean) {
  switch (type) {
    case "electrode": return <ElectrodeBuildUp isInView={isInView} />;
    case "mip": return <MIPBinding isInView={isInView} />;
    case "eis": return <NyquistPlot isInView={isInView} />;
    case "fluidic": return <MicrofluidicFlow isInView={isInView} />;
    case "ml": return <MLDiagram isInView={isInView} />;
    default: return null;
  }
}

export default function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

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
              { scale: "5µm", label: "Electrode Width", color: "bg-accent-blue/20 border-accent-blue/30" },
              { scale: "~100nm", label: "Nanostructures", color: "bg-amber-400/20 border-amber-400/30" },
              { scale: "~1nm", label: "MIP Cavity", color: "bg-accent-green/20 border-accent-green/30" },
              { scale: "0.7nm", label: "PFOS Molecule", color: "bg-accent-purple/20 border-accent-purple/30" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="flex items-center gap-2 md:gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <div className={`flex-shrink-0 rounded-xl border ${item.color} px-3 md:px-4 py-3 text-center min-w-[80px] md:min-w-[100px]`}>
                  <div className="text-base md:text-xl font-bold font-mono text-white/80">{item.scale}</div>
                  <div className="text-[9px] md:text-[10px] text-white/30 mt-1">{item.label}</div>
                </div>
                {i < 4 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" className="text-white/10 flex-shrink-0">
                    <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech layers with diagrams */}
        <div className="space-y-8">
          {techLayers.map((layer, i) => (
            <motion.div
              key={layer.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              className="glass-card rounded-2xl p-6 md:p-8 group hover:border-accent-cyan/20 transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                {/* Text content */}
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-accent-cyan/30 font-mono text-sm mt-1">{layer.number}</span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white/90">
                        {layer.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-white/40 leading-relaxed mb-3 ml-9">
                    {layer.description}
                  </p>
                  <p className="text-white/25 text-sm leading-relaxed font-mono ml-9">
                    {layer.detail}
                  </p>
                </div>

                {/* Animated diagram */}
                <div className="lg:w-[320px] flex-shrink-0 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  {getDiagram(layer.diagram, isInView)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
