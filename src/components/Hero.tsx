import React from "react";
import { motion } from "motion/react";
import { ArrowDown, MapPin, Calendar, Compass, ShieldCheck } from "lucide-react";
import { BOOTH_SUMMARY, UI_TEXT } from "../data";

interface HeroProps {
  onScrollToPrograms: () => void;
}

export default function Hero({ onScrollToPrograms }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#121212]/10 py-12 md:py-20 lg:py-28 px-4 sm:px-8 bg-[#FBFBF9]" id="hero">
      {/* Decorative Blueprint Background Details */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: "radial-gradient(#121212 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Upper Tag */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
          className="w-16 h-16 flex items-center justify-center mb-6"
        >
          <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Hero Main Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-[#121212] leading-[1.05] mb-6 uppercase"
            >
              {BOOTH_SUMMARY.title}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-[#121212]/80 leading-relaxed max-w-2xl font-sans font-normal mb-8 border-l-2 border-[#121212] pl-4 sm:pl-6"
            >
              {BOOTH_SUMMARY.intro}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onScrollToPrograms}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-3 bg-[#121212] text-[#FBFBF9] px-8 py-4 text-sm font-semibold hover:bg-[#121212]/80 transition-all duration-300 focus:outline-none tracking-wide group"
                id="hero-btn-explore"
              >
                {UI_TEXT.hero.btn_cta}
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
              </button>
            </motion.div>
          </div>

          {/* Hero Visual Card (Exhibition Guide Card Style) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 w-full"
          >
            <div className="bg-[#F1F1ED] border-2 border-[#121212] p-6 sm:p-8 relative">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#121212]/15 pb-4 mb-6">
                <span className="text-xs font-mono font-bold tracking-widest text-[#121212]/60 uppercase">
                  {UI_TEXT.hero.card_title}
                </span>
                <span className="text-xs font-mono font-bold bg-[#121212]/10 text-[#121212] px-2 py-0.5 rounded-sm">
                  {UI_TEXT.hero.card_badge}
                </span>
              </div>

              {/* Card Main Info */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#121212]/5 border border-[#121212]/15 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#121212]/80" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono tracking-wider text-[#121212]/50 uppercase mb-0.5">{UI_TEXT.hero.label_location}</h4>
                    <p className="text-sm font-semibold text-[#121212]">{BOOTH_SUMMARY.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#121212]/5 border border-[#121212]/15 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-[#121212]/80" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono tracking-wider text-[#121212]/50 uppercase mb-0.5">{UI_TEXT.hero.label_hours}</h4>
                    <p className="text-sm font-semibold text-[#121212]">{BOOTH_SUMMARY.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#121212]/5 border border-[#121212]/15 flex items-center justify-center shrink-0">
                    <Compass className="w-5 h-5 text-[#121212]/80" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono tracking-wider text-[#121212]/50 uppercase mb-0.5">{UI_TEXT.hero.label_fee}</h4>
                    <p className="text-sm font-semibold text-[#121212]">{BOOTH_SUMMARY.entryFee}</p>
                  </div>
                </div>
              </div>

              {/* Card Footer / Live Info Box */}
              <div className="mt-8 pt-6 border-t border-[#121212]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-mono text-[#121212]/70">
                    {UI_TEXT.hero.status_msg} <span className="font-bold text-emerald-600">{UI_TEXT.hero.status_val}</span>
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#121212]/60">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{UI_TEXT.hero.privacy_msg}</span>
                </div>
              </div>

              {/* Blueprint Grid Lines Accents on Corners */}
              <div className="absolute -top-1 -left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-[#121212]" />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 border-t-2 border-r-2 border-[#121212]" />
              <div className="absolute -bottom-1 -left-1 w-3.5 h-3.5 border-b-2 border-l-2 border-[#121212]" />
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-[#121212]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
