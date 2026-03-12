"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const navLinks = [
  { label: "The Crisis", href: "#problem" },
  { label: "Science", href: "#technology" },
  { label: "Fabrication", href: "#fabrication" },
  { label: "Product", href: "#product" },
  { label: "Applications", href: "#applications" },
  { label: "Validation", href: "#validation" },
  { label: "Market", href: "#market" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <footer ref={ref} className="relative border-t border-white/5 py-16 md:py-20 px-6">
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-accent-cyan/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-green flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-[#030712]">
                  <path d="M12 2L12 22" />
                  <path d="M2 12L22 12" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-white/80">VERIDIAN</span>
            </div>
            <p className="text-sm text-white/25 leading-relaxed max-w-xs">
              Real-time PFAS water sensing. Laboratory-grade detection in 10 minutes, on-site, at a fraction of lab costs.
            </p>
            <div className="mt-4">
              <a href="mailto:contact@veridian-sensing.com" className="text-xs text-accent-cyan/40 hover:text-accent-cyan/70 transition-colors font-mono">
                contact@veridian-sensing.com
              </a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xs text-white/30 uppercase tracking-wider font-mono mb-4">Navigate</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/25 hover:text-white/60 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Technology */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xs text-white/30 uppercase tracking-wider font-mono mb-4">Technology</h4>
            <div className="space-y-2">
              {[
                "MEMS Nanostructured Electrodes",
                "Molecularly Imprinted Polymers",
                "Electrochemical Impedance Spectroscopy",
                "Integrated Microfluidics",
                "Edge ML Signal Processing",
              ].map((tech) => (
                <div key={tech} className="text-sm text-white/20">{tech}</div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-white/15 font-mono">
            &copy; 2026 Veridian Sensing Inc. All rights reserved.
          </p>
          <p className="text-[10px] text-white/10 font-mono">
            Sub-parts-per-trillion PFAS detection. Handheld. Field-deployable. Real-time.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
