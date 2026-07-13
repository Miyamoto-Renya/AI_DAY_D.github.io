import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as Icons from "lucide-react";
import { AI_PROGRAMS, UI_TEXT } from "../data";
import { AIProgram } from "../types";

// Helper to resolve Lucide icons dynamically
const renderIcon = (name: string, color: string) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.Sparkles className="w-5 h-5" style={{ color }} />;
  return <IconComponent className="w-5 h-5" style={{ color }} />;
};

export default function ProgramShowcase() {
  const [selectedId, setSelectedId] = useState<string>(AI_PROGRAMS[0].id);

  const selectedProgram = AI_PROGRAMS.find((p) => p.id === selectedId) || AI_PROGRAMS[0];

  return (
    <section className="border-b border-[#121212]/10 py-16 md:py-24 px-4 sm:px-8 bg-[#FBFBF9]" id="programs">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2.5 h-2.5 bg-[#121212] rounded-none" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#121212]/60 uppercase">
              {UI_TEXT.programs.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-[#121212] uppercase mb-4">
            {UI_TEXT.programs.title}
          </h2>
          <p className="text-sm sm:text-base text-[#121212]/70 max-w-2xl font-sans">
            {UI_TEXT.programs.description}
          </p>
        </div>

        {/* Dual Mode Showcase Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Desktop List / Mobile Header Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="hidden lg:block text-xs font-mono font-bold text-[#121212]/40 tracking-wider mb-2 uppercase">
              {UI_TEXT.programs.list_title} ({AI_PROGRAMS.length})
            </div>

            <div className="space-y-3.5">
              {AI_PROGRAMS.map((program) => {
                const isSelected = program.id === selectedId;
                return (
                  <div key={program.id} className="block w-full text-left" id={`program-item-${program.id}`}>
                    {/* Main Program Button/Card */}
                    <button
                      onClick={() => setSelectedId(program.id)}
                      className={`w-full text-left p-5 border-2 transition-all duration-300 flex flex-col justify-between relative group focus:outline-none ${isSelected
                        ? "bg-[#121212] border-[#121212] text-[#FBFBF9]"
                        : "bg-[#F7F7F5] border-[#121212]/10 hover:border-[#121212] text-[#121212]"
                        }`}
                    >
                      {/* Active Indicator Color Block (Left edge) */}
                      <div
                        className="absolute left-0 top-0 bottom-0 w-[4px]"
                        style={{ backgroundColor: program.accentColor }}
                      />

                      <div className="flex items-start justify-between gap-4 mb-2 pl-2">
                        <div>
                          <span className={`text-[10px] font-mono tracking-wider uppercase ${isSelected ? "text-[#FBFBF9]/60" : "text-[#121212]/50"
                            }`}>
                            {program.category}
                          </span>
                          <h3 className="text-lg font-display font-black tracking-tight mt-0.5">
                            {program.title}
                          </h3>
                        </div>
                      </div>

                      <div className="pl-2">
                        <p className={`text-xs line-clamp-1 mb-0 ${isSelected ? "text-[#FBFBF9]/80" : "text-[#121212]/70"
                          }`}>
                          {program.subtitle}
                        </p>
                      </div>
                    </button>

                    {/* MOBILE COLLAPSIBLE DETAIL (Visible only on mobile screen widths) */}
                    <div className="block lg:hidden">
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden bg-[#F1F1ED] border-x-2 border-b-2 border-[#121212] px-5 pb-6 pt-4"
                          >
                            <MobileProgramDetail program={program} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Desktop Detail Panel (Hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-7 sticky top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProgram.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-[#F1F1ED] border-2 border-[#121212] p-8 relative"
              >
                {/* Accent Color Badge on Top Right corner */}
                <div
                  className="absolute right-0 top-0 text-[#FBFBF9] text-[10px] font-mono tracking-widest px-3 py-1 font-bold uppercase"
                  style={{ backgroundColor: selectedProgram.accentColor }}
                >
                  {UI_TEXT.programs.module_badge}
                </div>

                {/* Header info */}
                <div className="border-b border-[#121212]/15 pb-5 mb-6">
                  <span className="text-[11px] font-mono tracking-widest text-[#121212]/50 uppercase block mb-1">
                    {selectedProgram.category}
                  </span>
                  <h3 className="text-3xl font-display font-black tracking-tight text-[#121212] uppercase mb-1">
                    {selectedProgram.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#121212]/70">
                    {selectedProgram.subtitle}
                  </p>
                </div>

                {/* Overview paragraph */}
                <p className="text-sm text-[#121212]/80 leading-relaxed font-sans mb-6 whitespace-pre-line">
                  {selectedProgram.description}
                </p>


                {/* Steps Section */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono font-bold tracking-widest text-[#121212]/40 uppercase mb-4">
                    {UI_TEXT.programs.step_title}
                  </h4>

                  <div className="space-y-4">
                    {selectedProgram.steps.map((step, idx) => (
                      <div key={idx} className="flex gap-4 items-start relative">
                        {/* Step indicator */}
                        <div className="flex flex-col items-center shrink-0">
                          <div
                            className="w-6 h-6 rounded-none flex items-center justify-center text-[11px] font-mono font-bold text-[#FBFBF9]"
                            style={{ backgroundColor: selectedProgram.accentColor }}
                          >
                            0{step.number}
                          </div>
                          {idx < selectedProgram.steps.length - 1 && (
                            <div className="w-[1.5px] h-10 bg-[#121212]/15 mt-1" />
                          )}
                        </div>
                        {/* Step text */}
                        <div className="pb-1">
                          <h5 className="text-xs font-bold text-[#121212] leading-none mb-1">
                            {step.title}
                          </h5>
                          <p className="text-[11px] text-[#121212]/70 leading-relaxed font-sans whitespace-pre-line">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>



                {/* Decorative blueprint markings */}
                <div className="absolute -top-1 -left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-[#121212]" />
                <div className="absolute -bottom-1 -left-1 w-3.5 h-3.5 border-b-2 border-l-2 border-[#121212]" />
                <div className="absolute -top-1 -right-1 w-3.5 h-3.5 border-t-2 border-r-2 border-[#121212]" />
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-[#121212]" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for Mobile inline details inside accordion drawer
function MobileProgramDetail({ program }: { program: AIProgram }) {
  return (
    <div className="space-y-5 text-[#121212]">
      {/* Overview Paragraph */}
      <p className="text-xs text-[#121212]/85 leading-relaxed font-sans border-b border-[#121212]/10 pb-4 whitespace-pre-line">
        {program.description}
      </p>

      {/* Steps List */}
      <div>
        <h4 className="text-[10px] font-mono font-bold tracking-widest text-[#121212]/40 uppercase mb-3">
          {UI_TEXT.programs.step_title}
        </h4>
        <div className="space-y-4 pl-1">
          {program.steps.map((step, idx) => (
            <div key={idx} className="flex gap-3 items-start relative">
              <div className="flex flex-col items-center shrink-0">
                <div
                  className="w-5 h-5 flex items-center justify-center text-[10px] font-mono font-bold text-[#FBFBF9]"
                  style={{ backgroundColor: program.accentColor }}
                >
                  0{step.number}
                </div>
                {idx < program.steps.length - 1 && (
                  <div className="w-[1.2px] h-8 bg-[#121212]/15 mt-1" />
                )}
              </div>
              <div className="pb-1">
                <h5 className="text-xs font-bold leading-none mb-1 text-[#121212]">
                  {step.title}
                </h5>
                <p className="text-[11px] text-[#121212]/75 leading-relaxed font-sans whitespace-pre-line">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>



    </div>
  );
}
