import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS, UI_TEXT } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="border-b border-[#121212]/10 py-16 md:py-24 px-4 sm:px-8 bg-[#FBFBF9]" id="faq">
      <div className="max-w-4xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <HelpCircle className="w-4 h-4 text-[#121212]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#121212]/60 uppercase">
              {UI_TEXT.faq.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-[#121212] uppercase mb-4">
            {UI_TEXT.faq.title}
          </h2>
          <p className="text-sm text-[#121212]/70 max-w-xl mx-auto font-sans">
            {UI_TEXT.faq.description}
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border-2 transition-colors duration-300 ${isOpen ? "bg-[#F1F1ED] border-[#121212]" : "bg-[#F7F7F5] border-[#121212]/10 hover:border-[#121212]"
                  }`}
                id={`faq-item-${faq.id}`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-0 select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex gap-3 items-center">
                    <span className="font-mono text-sm font-black text-[#121212]/30 shrink-0">
                      Q{index + 1}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#121212] tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 bg-[#121212]/5 flex items-center justify-center shrink-0 border border-[#121212]/10 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                    }`}>
                    <ChevronDown className="w-4 h-4 text-[#121212]" />
                  </div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 pt-1 border-t border-[#121212]/10">
                        <div className="flex gap-3 items-start pl-7">
                          <span className="font-mono text-xs font-bold text-emerald-600 shrink-0 mt-0.5">
                            {UI_TEXT.faq.answer_badge}
                          </span>
                          <p className="text-xs sm:text-sm text-[#121212]/75 leading-relaxed font-sans">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
