import React from "react";
import { Heart } from "lucide-react";
import { BOOTH_SUMMARY, UI_TEXT } from "../data";

interface FooterProps {
  onScrollToSection: (id: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  return (
    <footer className="bg-[#121212] text-[#FBFBF9] py-12 md:py-16 px-4 sm:px-8 border-t border-[#FBFBF9]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pb-12 border-b border-[#FBFBF9]/10">

          {/* Footer Logo & Brand info */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center text-[#121212]">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-black tracking-tight text-lg text-[#FBFBF9] uppercase">
                {BOOTH_SUMMARY.title}
              </span>
            </div>

            <p className="text-xs text-[#FBFBF9]/60 leading-relaxed font-sans max-w-sm">
              {BOOTH_SUMMARY.intro}
            </p>
          </div>

          {/* Sitemaps */}
          <div className="flex flex-col items-start md:items-end">
            <div className="w-full md:w-auto">
              <h4 className="text-xs font-mono tracking-widest text-[#FBFBF9]/40 uppercase mb-4 md:text-right">
                {UI_TEXT.footer.sitemap_title}
              </h4>
              <ul className="space-y-2.5 md:text-right">
                <li>
                  <button
                    onClick={() => onScrollToSection("hero")}
                    className="text-xs text-[#FBFBF9]/80 hover:text-[#FBFBF9] hover:underline transition-colors focus:outline-none"
                    id="footer-link-hero"
                  >
                    {UI_TEXT.footer.link_top}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onScrollToSection("stats")}
                    className="text-xs text-[#FBFBF9]/80 hover:text-[#FBFBF9] hover:underline transition-colors focus:outline-none"
                    id="footer-link-stats"
                  >
                    {UI_TEXT.footer.link_about}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onScrollToSection("programs")}
                    className="text-xs text-[#FBFBF9]/80 hover:text-[#FBFBF9] hover:underline transition-colors focus:outline-none"
                    id="footer-link-programs"
                  >
                    {UI_TEXT.footer.link_programs}
                  </button>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Footer Base copyright info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#FBFBF9]/40 font-mono">
          <div>
            © {new Date().getFullYear()} {BOOTH_SUMMARY.title}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-1.5 font-sans">
            <span>{UI_TEXT.footer.msg_bottom}</span>
            <Heart className="w-3 h-3 text-rose-500 fill-current" />
          </div>
        </div>

      </div>
    </footer>
  );
}
