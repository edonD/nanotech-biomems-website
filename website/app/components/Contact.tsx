"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative section-padding" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-cyan/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-green/[0.04] rounded-full blur-[100px]" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent-cyan/70 font-mono mb-4">
            Pilot Program
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            Be first to{" "}
            <span className="gradient-text">test your water.</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto mb-12 leading-relaxed">
            We&apos;re selecting pilot partners for our field validation program.
            Water utilities, environmental consultants, and government agencies
            with active PFAS monitoring needs — we want to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card rounded-3xl p-8 md:p-12 text-left gradient-border"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-6"
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs text-white/30 uppercase tracking-wider font-mono mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/20 focus:border-accent-cyan/30 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/30 uppercase tracking-wider font-mono mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Company or agency"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/20 focus:border-accent-cyan/30 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs text-white/30 uppercase tracking-wider font-mono mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/20 focus:border-accent-cyan/30 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/30 uppercase tracking-wider font-mono mb-2">
                      Testing Volume
                    </label>
                    <input
                      type="text"
                      placeholder="Estimated tests/month"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/20 focus:border-accent-cyan/30 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-white/30 uppercase tracking-wider font-mono mb-2">
                    Role
                  </label>
                  <select className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white/50 focus:border-accent-cyan/30 focus:outline-none transition-colors appearance-none cursor-pointer">
                    <option value="">Select your role</option>
                    <option value="utility">Water Utility Operator</option>
                    <option value="consultant">Environmental Consultant</option>
                    <option value="government">Government / Regulatory</option>
                    <option value="industrial">Industrial Facility Manager</option>
                    <option value="military">DoD / Military</option>
                    <option value="investor">Investor</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-white/30 uppercase tracking-wider font-mono mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your PFAS monitoring needs..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/20 focus:border-accent-cyan/30 focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-green text-[#030712] font-semibold hover:shadow-[0_0_30px_rgba(6,214,242,0.3)] transition-all duration-300 hover:scale-[1.02]"
                >
                  Request Pilot Access
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 rounded-full bg-accent-green/10 border border-accent-green/20 flex items-center justify-center mx-auto mb-6"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-green">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-white/90 mb-3">Application Received</h3>
                <p className="text-white/40 max-w-md mx-auto leading-relaxed">
                  Thank you for your interest in the VERIDIAN pilot program.
                  Our team will review your application and respond within 48 hours.
                </p>
                <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/5 border border-accent-cyan/10">
                  <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                  <span className="text-xs text-white/40 font-mono">Pilot slots remaining: limited</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 text-white/20 text-sm"
        >
          <p>contact@veridian-sensing.com</p>
        </motion.div>
      </div>
    </section>
  );
}
