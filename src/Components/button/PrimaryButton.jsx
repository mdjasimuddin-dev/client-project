import React from "react";
import { ArrowRight } from "lucide-react";

export default function GlowButton({ text, href, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="relative inline-flex items-center justify-center gap-3 py-4 px-8 rounded-full 
                 bg-gradient-to-r from-[#9e7b47] via-[#c4a168] to-[#9b7844] 
                 text-[#fffdf5] font-extrabold text-xs sm:text-sm uppercase tracking-wider 
                 transition-all duration-300 ease-out cursor-pointer
                 shadow-[0_4px_20px_rgba(197,160,89,0.2)]
                 hover:shadow-[0_0_35px_rgba(212,175,55,0.7),0_0_60px_rgba(197,160,89,0.4)]
                 hover:-translate-y-0.5 group"
    >
      <span>{text}</span>
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
    </a>
  );
}
