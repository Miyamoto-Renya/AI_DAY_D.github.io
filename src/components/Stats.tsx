import React from "react";
import * as Icons from "lucide-react";
import { BOOTH_STATS, UI_TEXT } from "../data";

// Helper to resolve Lucide icons dynamically
const renderIcon = (name: string) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.HelpCircle className="w-5 h-5 text-[#121212]/70" />;
  return <IconComponent className="w-5 h-5 text-[#121212]" />;
};

export default function Stats() {
  return (
    <section className="border-b border-[#121212]/10 py-12 px-4 sm:px-8 bg-[#FBFBF9]" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BOOTH_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#F7F7F5] border border-[#121212]/15 p-6 hover:border-[#121212] transition-colors duration-300 relative group flex flex-col justify-between"
              id={`stat-card-${idx}`}
            >
              {/* Card Header Info */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono tracking-widest text-[#121212]/50 uppercase">
                    {UI_TEXT.stats.badge_prefix} 0{idx + 1}
                  </span>
                  <div className="w-8 h-8 bg-[#121212]/5 border border-[#121212]/10 flex items-center justify-center rounded-sm">
                    {renderIcon(stat.iconName)}
                  </div>
                </div>

                <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#121212] tracking-tight mb-2 uppercase">
                  {stat.value}
                </div>
              </div>

              {/* Description Footer */}
              <div className="mt-4 pt-4 border-t border-[#121212]/5">
                <h5 className="text-xs font-mono font-bold tracking-wider text-[#121212] mb-1">
                  {stat.label}
                </h5>
                <p className="text-xs text-[#121212]/60 leading-relaxed font-sans whitespace-pre-line">
                  {stat.description}
                </p>
              </div>

              {/* Visual Corner Indicator */}
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#121212] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
