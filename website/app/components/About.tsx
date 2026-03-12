"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
            <p className="text-lg text-white/50 leading-relaxed">
              We&apos;re not just building a sensor. We&apos;re building the
              infrastructure for a world where knowing what&apos;s in your water is
              as easy as checking the weather.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Capabilities */}
            {[
              {
                title: "Microsystems Engineering",
                description: "Cleanroom fabrication, photolithography, thin-film deposition, DRIE, wafer-level packaging. We design and build sensor chips from scratch.",
              },
              {
                title: "Electrochemical Sensing",
                description: "Deep expertise in impedance spectroscopy, voltammetry, and electrode surface functionalization. We understand the physics from first principles.",
              },
              {
                title: "Microfluidic Integration",
                description: "Passive and active flow control, capillary systems, on-chip filtration. Sample handling that works without pumps or external equipment.",
              },
              {
                title: "Machine Learning for Sensors",
                description: "Signal processing models trained on thousands of spectra. Edge inference on embedded hardware for real-time, matrix-corrected results.",
              },
            ].map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <h4 className="font-semibold text-white/80 mb-2">{cap.title}</h4>
                <p className="text-sm text-white/35 leading-relaxed">{cap.description}</p>
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
