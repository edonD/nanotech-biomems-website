"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TiltCard from "./TiltCard";

const applications = [
  {
    title: "Municipal Water Utilities",
    stat: "66,000+",
    statLabel: "US systems mandated to test",
    description:
      "Every public water system in America must now monitor for PFAS under EPA's 2024 MCL rule. VERIDIAN enables utilities to screen intake sources, treatment stages, and distribution points daily instead of quarterly — catching contamination events before they reach consumers.",
    accent: "from-accent-cyan/10 to-accent-cyan/5",
    border: "hover:border-accent-cyan/20",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4v24" />
        <path d="M8 8l8-4 8 4" />
        <path d="M6 14h20v14H6z" />
        <path d="M12 20h8" />
        <path d="M12 24h8" />
      </svg>
    ),
  },
  {
    title: "Military & DoD Sites",
    stat: "700+",
    statLabel: "contaminated installations",
    description:
      "AFFF firefighting foam has contaminated water at hundreds of military bases. DoD has allocated $3.4B for PFAS remediation, but cleanup can't start without characterization data. VERIDIAN provides rapid site assessment at a fraction of current costs.",
    accent: "from-red-400/10 to-red-500/5",
    border: "hover:border-red-400/20",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4l12 6v10l-12 8-12-8V10z" />
        <path d="M16 4v24" />
        <path d="M4 10l12 8 12-8" />
      </svg>
    ),
  },
  {
    title: "Environmental Consulting",
    stat: "10x",
    statLabel: "more data points per project",
    description:
      "Environmental consultants managing PFAS investigations test thousands of monitoring wells and surface water locations. At $400/lab test, budgets limit data density. At $40/test with instant results, consultants can build high-resolution contamination maps that precisely delineate plume boundaries.",
    accent: "from-accent-green/10 to-accent-green/5",
    border: "hover:border-accent-green/20",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="12" />
        <path d="M10 16c0-6 6-10 10-6" />
        <path d="M22 16c0 6-6 10-10 6" />
        <circle cx="16" cy="16" r="3" />
      </svg>
    ),
  },
  {
    title: "Industrial Compliance",
    stat: "$1.2T",
    statLabel: "estimated remediation market",
    description:
      "Chemical plants, semiconductor fabs, and manufacturing facilities face PFAS discharge limits. Continuous monitoring of effluent streams with VERIDIAN replaces monthly grab samples, enabling real-time process control and instantaneous exceedance alerts.",
    accent: "from-amber-400/10 to-amber-500/5",
    border: "hover:border-amber-400/20",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 6h4v8l-6 12h20l-6-12V6h4" />
        <path d="M10 22h12" />
        <circle cx="16" cy="26" r="1" fill="currentColor" />
        <circle cx="20" cy="24" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Agriculture & Food Safety",
    stat: "20M+",
    statLabel: "acres irrigated with PFAS-impacted water",
    description:
      "PFAS in irrigation water accumulates in crops and livestock. Farms near contaminated sites need affordable screening to verify water sources are safe. VERIDIAN enables farmers to test irrigation wells, runoff, and water storage without lab contracts.",
    accent: "from-accent-green/10 to-green-500/5",
    border: "hover:border-green-400/20",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 28V12" />
        <path d="M10 16c0-6 6-8 6-12 0 4 6 6 6 12" />
        <path d="M8 24c0-4 8-6 8-10 0 4 8 6 8 10" />
        <path d="M8 28h16" />
      </svg>
    ),
  },
  {
    title: "Emergency Response",
    stat: "<10 min",
    statLabel: "from sample to decision",
    description:
      "When a fire, industrial spill, or flooding event occurs, first responders need to know immediately if water sources are compromised. VERIDIAN's portability and speed enable real-time contamination assessment in the field during active incidents.",
    accent: "from-accent-purple/10 to-purple-500/5",
    border: "hover:border-purple-400/20",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4L4 16h8v12h8V16h8z" />
      </svg>
    ),
  },
];

export default function Applications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="applications" className="relative section-padding" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent-purple/70 font-mono mb-4">
            Applications
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-4xl">
            Protecting water{" "}
            <span className="gradient-text-warm">everywhere it matters.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, i) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            >
              <TiltCard
                className={`glass-card rounded-2xl p-8 h-full group ${app.border} transition-all duration-500 relative overflow-hidden`}
                maxTilt={4}
              >
                {/* Subtle gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${app.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                <div className="relative z-10">
                  <div className="text-accent-cyan/40 group-hover:text-accent-cyan/70 transition-colors mb-6">
                    {app.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-white/85">{app.title}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold gradient-text">{app.stat}</span>
                    <span className="text-xs text-white/30">{app.statLabel}</span>
                  </div>
                  <p className="text-white/35 text-sm leading-relaxed">{app.description}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
