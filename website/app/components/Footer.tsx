"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-green flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-[#030712]">
                <path d="M12 2L12 22" />
                <path d="M2 12L22 12" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </div>
            <span className="text-sm font-bold tracking-tight text-white/70">VERIDIAN</span>
          </div>

          <div className="flex gap-8 text-xs text-white/25">
            <a href="#problem" className="hover:text-white/50 transition-colors">Problem</a>
            <a href="#technology" className="hover:text-white/50 transition-colors">Technology</a>
            <a href="#product" className="hover:text-white/50 transition-colors">Product</a>
            <a href="#applications" className="hover:text-white/50 transition-colors">Applications</a>
            <a href="#contact" className="hover:text-white/50 transition-colors">Contact</a>
          </div>

          <p className="text-xs text-white/15">
            &copy; 2026 Veridian Sensing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
