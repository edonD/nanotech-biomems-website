"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fabricationSteps = [
  {
    step: "01",
    title: "Wafer Preparation",
    description: "150mm silicon wafer undergoes thermal oxidation at 1,100°C to grow a 500nm SiO₂ insulation layer. This provides electrical isolation between the silicon substrate and the sensor electrodes.",
    detail: "Oxide thickness uniformity: ±2% across wafer",
    color: "from-slate-400/20 to-slate-500/10",
    accent: "text-slate-300",
    layers: ["Si substrate", "SiO₂ 500nm"],
  },
  {
    step: "02",
    title: "Photolithography",
    description: "Photoresist is spin-coated at 4,000 RPM, then exposed to deep-UV light through a chrome-on-glass photomask. The electrode pattern — interdigitated fingers at 5µm width, 2µm gap — transfers onto the resist layer.",
    detail: "i-line stepper, 365nm, ±50nm alignment accuracy",
    color: "from-violet-400/20 to-violet-500/10",
    accent: "text-violet-300",
    layers: ["UV exposure", "Photoresist", "SiO₂", "Si"],
  },
  {
    step: "03",
    title: "Metal Deposition",
    description: "E-beam evaporation deposits a 10nm titanium adhesion layer followed by 200nm of gold. The Ti/Au bilayer provides excellent electrical conductivity and chemical stability for the electrode surface.",
    detail: "Deposition rate: 0.5 Å/s Ti, 2 Å/s Au, <10⁻⁶ Torr",
    color: "from-amber-400/20 to-amber-500/10",
    accent: "text-amber-300",
    layers: ["Au 200nm", "Ti 10nm", "SiO₂", "Si"],
  },
  {
    step: "04",
    title: "Lift-off Patterning",
    description: "The wafer is soaked in acetone to dissolve remaining photoresist, lifting off the unwanted metal. What remains is the precisely patterned gold electrode array — 128 interdigitated fingers per sensor chip.",
    detail: "Ultrasonic agitation, 40°C, 15 min process",
    color: "from-yellow-400/20 to-yellow-500/10",
    accent: "text-yellow-300",
    layers: ["Au electrodes", "SiO₂", "Si"],
  },
  {
    step: "05",
    title: "Nanostructuring",
    description: "Electrochemical roughening in 0.5M H₂SO₄ creates a dense forest of gold nanostructures — pillars, dendrites, and nanopores across the electrode surface. This increases the effective area by >1,000x.",
    detail: "Cyclic voltammetry: -0.3V to +1.5V, 25 cycles",
    color: "from-accent-cyan/20 to-accent-cyan/10",
    accent: "text-accent-cyan",
    layers: ["Au nanostructures", "Au base", "SiO₂", "Si"],
  },
  {
    step: "06",
    title: "MIP Functionalization",
    description: "Inkjet-printed MIP precursor solution is deposited onto each electrode zone. UV polymerization at 365nm cross-links the polymer around PFAS template molecules. Template extraction in methanol/acetic acid leaves molecular cavities.",
    detail: "6 MIP types per chip: PFOA, PFOS, GenX, PFBS, PFHxS, PFNA",
    color: "from-accent-green/20 to-accent-green/10",
    accent: "text-accent-green",
    layers: ["MIP layer", "Au nanostructures", "SiO₂", "Si"],
  },
  {
    step: "07",
    title: "Microfluidic Bonding",
    description: "A PDMS microfluidic layer — fabricated separately by soft lithography — is oxygen-plasma bonded to the sensor chip. Channels route the sample across all electrode zones with integrated filtration membranes.",
    detail: "Channel dimensions: 200µm × 50µm, bond strength: >2 bar",
    color: "from-blue-400/20 to-blue-500/10",
    accent: "text-blue-300",
    layers: ["PDMS microfluidics", "MIP layer", "Au electrodes", "SiO₂", "Si"],
  },
  {
    step: "08",
    title: "Dicing & Packaging",
    description: "Diamond blade dicing separates the wafer into ~500 individual sensor chips. Each chip is wire-bonded to a flexible PCB, tested against calibration standards, and sealed into a medical-grade cartridge housing.",
    detail: "~500 chips per 150mm wafer, >90% yield target, <$5 COGS",
    color: "from-accent-purple/20 to-accent-purple/10",
    accent: "text-accent-purple",
    layers: ["Cartridge housing", "Wire bonds", "Complete sensor stack"],
  },
];

const readerComponents = [
  { name: "Potentiostat / EIS Engine", detail: "10 Hz – 1 MHz frequency sweep, 16-bit ADC" },
  { name: "MCU with ML Inference", detail: "ARM Cortex-M7, TensorFlow Lite model" },
  { name: "4.3\" Touchscreen Display", detail: "480×272 IPS, sunlight-readable" },
  { name: "Li-ion Battery Pack", detail: "3,000 mAh, 50+ tests per charge" },
  { name: "Cartridge Interface", detail: "Spring-loaded pogo pins, auto-detection" },
  { name: "Connectivity Module", detail: "BLE 5.3 + Wi-Fi 6 + USB-C" },
];

function CrossSectionAnimation({ stepIndex, layers, isInView }: { stepIndex: number; layers: string[]; isInView: boolean }) {
  const layerColors: Record<string, string> = {
    "Si substrate": "bg-slate-600",
    "Si": "bg-slate-600",
    "SiO₂ 500nm": "bg-blue-400/50",
    "SiO₂": "bg-blue-400/50",
    "UV exposure": "bg-violet-400/30",
    "Photoresist": "bg-pink-400/40",
    "Au 200nm": "bg-amber-400",
    "Ti 10nm": "bg-slate-400",
    "Au electrodes": "bg-amber-400",
    "Au nanostructures": "bg-amber-300",
    "Au base": "bg-amber-500",
    "MIP layer": "bg-accent-green/60",
    "PDMS microfluidics": "bg-blue-300/40",
    "Cartridge housing": "bg-accent-purple/40",
    "Wire bonds": "bg-yellow-300/60",
    "Complete sensor stack": "bg-gradient-to-r from-accent-cyan/40 to-accent-green/40",
  };

  return (
    <div className="flex flex-col gap-0.5 w-full max-w-[200px]">
      {layers.map((layer, i) => (
        <motion.div
          key={layer}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 + (stepIndex * 0.05) + (i * 0.1) }}
          className={`h-4 rounded-sm ${layerColors[layer] || "bg-white/20"} origin-left`}
        >
          <span className="text-[8px] text-white/70 px-1 leading-4 truncate block font-mono">
            {layer}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function FabStepCard({ step, index, totalSteps }: { step: typeof fabricationSteps[0]; index: number; totalSteps: number }) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-2xl p-6 md:p-8 group hover:border-white/15 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)] transition-all duration-500"
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        {/* Step number + accent */}
        <div className="flex items-center gap-4 md:flex-col md:items-center md:w-20 flex-shrink-0">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={cardInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} border border-white/10 flex items-center justify-center`}
          >
            <span className={`text-sm font-bold font-mono ${step.accent}`}>{step.step}</span>
          </motion.div>
          {index < totalSteps - 1 && (
            <motion.div
              initial={{ height: 0 }}
              animate={cardInView ? { height: 32 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden md:block w-px bg-gradient-to-b from-white/10 to-transparent overflow-hidden"
            />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white/90">
            {step.title}
          </h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={cardInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-white/40 leading-relaxed mb-3"
          >
            {step.description}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={cardInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-white/25 text-sm font-mono"
          >
            {step.detail}
          </motion.p>
        </div>

        {/* Cross-section visualization */}
        <div className="hidden lg:flex flex-shrink-0 items-center">
          <CrossSectionAnimation stepIndex={index} layers={step.layers} isInView={cardInView} />
        </div>
      </div>
    </motion.div>
  );
}

export default function Fabrication() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="fabrication" className="relative section-padding" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-amber-400/[0.03] rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-accent-cyan/[0.03] rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-white/10 font-mono">03</span>
            <div className="w-8 h-px bg-white/10" />
            <p className="text-xs tracking-[0.3em] uppercase text-amber-400/70 font-mono">
              Fabrication
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-4xl">
            From silicon wafer to{" "}
            <span className="gradient-text">finished cartridge.</span>
          </h2>
          <p className="text-lg text-white/40 mt-6 max-w-2xl">
            Eight precision manufacturing steps transform a bare silicon wafer into a
            complete PFAS sensing cartridge. Each step builds on the last — layer by layer,
            nanometer by nanometer.
          </p>
        </motion.div>

        {/* Scroll progress indicator */}
        <div className="sticky top-20 z-20 mb-12">
          <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-400 via-accent-cyan to-accent-green rounded-full"
              style={{ width: progressWidth }}
            />
          </div>
        </div>

        {/* Fabrication steps */}
        <div className="space-y-8">
          {fabricationSteps.map((step, i) => (
            <FabStepCard key={step.step} step={step} index={i} totalSteps={fabricationSteps.length} />
          ))}
        </div>

        {/* Yield stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "~500", label: "chips per wafer", icon: "◆" },
            { value: ">90%", label: "target yield", icon: "◈" },
            { value: "<$5", label: "COGS per cartridge", icon: "◇" },
            { value: "8", label: "process steps", icon: "◆" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
              className="text-center p-6 rounded-xl border border-white/5 bg-white/[0.02]"
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-white/30 font-mono tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reader Hardware section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mt-24"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white/90">
            Reader Hardware
          </h3>
          <p className="text-white/40 mb-10 max-w-2xl">
            A compact, field-hardened instrument that drives the sensor cartridge and
            delivers results. Designed for one-handed operation in any environment.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Reader visualization */}
            <div className="glass-card rounded-2xl p-8 flex items-center justify-center">
              <div className="relative w-48 h-72">
                {/* Device outline */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01]">
                  {/* Screen */}
                  <div className="absolute top-4 left-3 right-3 h-32 rounded-lg bg-[#0a1628] border border-white/10 overflow-hidden">
                    <div className="p-2">
                      <div className="text-[7px] font-mono text-accent-cyan/60 mb-1">VERIDIAN v2.1</div>
                      <div className="text-[6px] text-white/30 mb-2">ANALYSIS COMPLETE</div>
                      {["PFOA", "PFOS", "GenX", "PFBS", "PFHxS", "PFNA"].map((compound, idx) => {
                        const values = [2.8, 5.1, 0.4, 1.2, 0.8, 0.3];
                        const statuses = ["warn", "fail", "pass", "pass", "pass", "pass"];
                        const colors = { pass: "bg-accent-green/60", warn: "bg-amber-400/60", fail: "bg-red-400/60" };
                        return (
                          <div key={compound} className="flex items-center gap-1 mb-0.5">
                            <span className="text-[5px] font-mono text-white/40 w-8">{compound}</span>
                            <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${Math.min(values[idx] * 15, 100)}%` } : {}}
                                transition={{ duration: 1, delay: 1.2 + idx * 0.1 }}
                                className={`h-full rounded-full ${colors[statuses[idx] as keyof typeof colors]}`}
                              />
                            </div>
                            <span className="text-[5px] font-mono text-white/40 w-6 text-right">{values[idx]} ppt</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/* Cartridge slot */}
                  <div className="absolute bottom-16 left-6 right-6 h-8 rounded-lg border border-dashed border-white/10 flex items-center justify-center">
                    <span className="text-[7px] text-white/20 font-mono">CARTRIDGE SLOT</span>
                  </div>
                  {/* Buttons */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                    <div className="w-2 h-2 rounded-full border border-accent-cyan/30" />
                    <div className="w-2 h-2 rounded-full border border-accent-green/30" />
                  </div>
                </div>
                {/* Dimensions */}
                <div className="absolute -right-16 top-1/2 -translate-y-1/2 text-[8px] text-white/20 font-mono flex items-center gap-1">
                  <div className="w-px h-full bg-white/10" />
                  18cm
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] text-white/20 font-mono">
                  10cm × 6cm
                </div>
              </div>
            </div>

            {/* Component list */}
            <div className="space-y-4">
              {readerComponents.map((comp, i) => (
                <motion.div
                  key={comp.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.1 + i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan/10 to-accent-green/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-mono text-accent-cyan/60">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white/80">{comp.name}</div>
                    <div className="text-xs text-white/30 font-mono">{comp.detail}</div>
                  </div>
                </motion.div>
              ))}
              {/* Weight badge */}
              <div className="flex items-center gap-3 mt-4 px-4">
                <span className="text-white/20 text-xs font-mono">Total weight:</span>
                <span className="text-accent-cyan/60 text-sm font-bold font-mono">450g</span>
                <span className="text-white/15 text-xs">— lighter than a smartphone</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
