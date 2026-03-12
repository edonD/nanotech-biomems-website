"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Get Started
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
          className="glass-card rounded-3xl p-8 md:p-12 text-left"
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs text-white/30 uppercase tracking-wider font-mono mb-2">
                  Name
                </label>
                <input
                  type="text"
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
                  placeholder="Company or agency"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/20 focus:border-accent-cyan/30 focus:outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-white/30 uppercase tracking-wider font-mono mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/20 focus:border-accent-cyan/30 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-white/30 uppercase tracking-wider font-mono mb-2">
                Role
              </label>
              <select className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white/50 focus:border-accent-cyan/30 focus:outline-none transition-colors appearance-none">
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
          </form>
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
