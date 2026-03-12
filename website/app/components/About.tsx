"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const credentials = [
  "M.Sc. Microsystems Engineering",
  "Cleanroom Fabrication (Class 100/1000)",
  "MEMS Sensor Design & Characterization",
  "Electrochemical Surface Science",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative section-padding" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent-blue/70 font-mono mb-4">
            About
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-4xl">
            Built by engineers who{" "}
            <span className="gradient-text">think in nanometers.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg text-white/50 leading-relaxed mb-6">
              VERIDIAN was founded on a simple observation: the tools we use to detect
              water contamination haven&apos;t kept pace with the science that makes
              detection possible. While nanoscale sensing has advanced by orders of
              magnitude in academic labs, the water industry still relies on the same
              sample-and-ship model it used 30 years ago.
            </p>
            <p className="text-lg text-white/50 leading-relaxed mb-6">
              Our founding team brings deep expertise in MEMS design, nanofabrication,
              electrochemistry, and microfluidics — the exact skill set needed to
              translate recent breakthroughs in nanostructured sensors into a product
              that works reliably in the field.
            </p>
            <p className="text-lg text-white/50 leading-relaxed mb-8">
              We&apos;re not just building a sensor. We&apos;re building the
              infrastructure for a world where knowing what&apos;s in your water is
              as easy as checking the weather.
            </p>

            {/* Founder profile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-cyan/20 to-accent-green/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold gradient-text">V</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white/80">Founding Team</div>
                  <div className="text-xs text-white/30 font-mono">Microsystems Engineers</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {credentials.map((cred, i) => (
                  <motion.span
                    key={cred}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-accent-cyan/5 border border-accent-cyan/10 text-accent-cyan/50"
                  >
                    {cred}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            {[
              {
                title: "Microsystems Engineering",
                description: "Cleanroom fabrication, photolithography, thin-film deposition, DRIE, wafer-level packaging. We design and build sensor chips from scratch.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
                  </svg>
                ),
                gradient: "from-accent-cyan/10 to-accent-blue/5",
              },
              {
                title: "Electrochemical Sensing",
                description: "Deep expertise in impedance spectroscopy, voltammetry, and electrode surface functionalization. We understand the physics from first principles.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 12h4l3-8 4 16 3-8h6" />
                  </svg>
                ),
                gradient: "from-accent-green/10 to-accent-cyan/5",
              },
              {
                title: "Microfluidic Integration",
                description: "Passive and active flow control, capillary systems, on-chip filtration. Sample handling that works without pumps or external equipment.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 3v18" />
                    <path d="M5 8c0 4 7 4 7 8s7 4 7 0" />
                  </svg>
                ),
                gradient: "from-accent-blue/10 to-accent-purple/5",
              },
              {
                title: "Machine Learning for Sensors",
                description: "Signal processing models trained on thousands of spectra. Edge inference on embedded hardware for real-time, matrix-corrected results.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="6" cy="6" r="2" /><circle cx="18" cy="6" r="2" />
                    <circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="M7.5 7.5l3 3M16.5 7.5l-3 3M7.5 16.5l3-3M16.5 16.5l-3-3" />
                  </svg>
                ),
                gradient: "from-accent-purple/10 to-accent-cyan/5",
              },
            ].map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="glass-card rounded-xl p-6 group hover:border-accent-cyan/15 hover:shadow-[0_0_30px_rgba(6,214,242,0.04)] transition-all duration-500 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cap.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 border border-accent-cyan/15 flex items-center justify-center text-accent-cyan/40 group-hover:text-accent-cyan/70 transition-colors">
                      {cap.icon}
                    </div>
                    <h4 className="font-semibold text-white/80">{cap.title}</h4>
                  </div>
                  <p className="text-sm text-white/35 leading-relaxed ml-11">{cap.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Vision quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative rounded-3xl p-10 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/[0.04] via-transparent to-accent-green/[0.04]" />
          <div className="absolute inset-0 border border-white/5 rounded-3xl" />
          <div className="relative z-10">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-white/60 leading-relaxed max-w-3xl mx-auto">
              &ldquo;Communities near military bases, manufacturing plants, and airports deserve to know what&apos;s in their water{" "}
              <span className="text-white/90 font-normal">today</span>, not in six weeks.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-cyan/20 to-accent-green/20 border border-white/10 flex items-center justify-center">
                <span className="text-sm font-bold text-accent-cyan/70">V</span>
              </div>
              <div className="text-left">
                <div className="text-sm text-white/50">VERIDIAN Founding Team</div>
                <div className="text-xs text-white/25 font-mono">Microsystems Engineers</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
