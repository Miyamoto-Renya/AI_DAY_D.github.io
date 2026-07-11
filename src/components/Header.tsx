import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { BOOTH_SUMMARY, UI_TEXT } from "../data";

interface HeaderProps {
  onScrollToSection: (id: string) => void;
}

export default function Header({ onScrollToSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = UI_TEXT.menuItems;

  return (
    <header className="sticky top-0 z-50 bg-[#FBFBF9]/90 backdrop-blur-md border-b border-[#121212]/10 px-4 sm:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => onScrollToSection("hero")}
          className="flex items-center gap-2 group text-left focus:outline-none"
          id="btn-logo"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="font-display font-black tracking-tight text-lg text-[#121212] block leading-none truncate max-w-[200px] sm:max-w-[300px]">
              {BOOTH_SUMMARY.title}
            </span>
            <span className="text-[10px] font-mono tracking-wider text-[#121212]/60 uppercase">
              {UI_TEXT.header.badge}
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollToSection(item.id)}
              className="text-sm font-medium text-[#121212]/70 hover:text-[#121212] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#121212] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 focus:outline-none"
              id={`nav-item-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop Call to Action */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => onScrollToSection("programs")}
            className="flex items-center gap-2 px-4 py-2 border border-[#121212] text-sm font-medium hover:bg-[#121212] hover:text-[#FBFBF9] transition-all duration-300 focus:outline-none"
            id="btn-cta-desktop"
          >
            {UI_TEXT.header.btn_cta}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#121212] focus:outline-none"
          aria-label="Toggle Menu"
          id="btn-mobile-menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full bg-[#FBFBF9] border-b border-[#121212] shadow-sm animate-fadeIn">
          <div className="flex flex-col p-6 gap-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onScrollToSection(item.id);
                  setIsOpen(false);
                }}
                className="text-left py-2 text-lg font-medium text-[#121212] border-b border-[#121212]/5 hover:pl-2 hover:text-[#121212]/70 transition-all duration-200 focus:outline-none"
                id={`nav-item-mobile-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onScrollToSection("programs");
                setIsOpen(false);
              }}
              className="flex items-center justify-between w-full px-4 py-3 bg-[#121212] text-[#FBFBF9] text-sm font-medium mt-2 focus:outline-none"
              id="btn-cta-mobile"
            >
              {UI_TEXT.header.btn_cta_mobile}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
