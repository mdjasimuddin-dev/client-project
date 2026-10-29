import React from "react";
import { Play, ArrowRight } from "lucide-react";

export default function DarkForestButton({ text, href, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="relative inline-flex items-center justify-center gap-3 py-4 px-8 rounded-2xl 
                 bg-[#062017] border border-[#16382b]
                 text-[#fffdf5] font-extrabold text-xs sm:text-sm uppercase tracking-wider 
                 transition-all duration-500 ease-out cursor-pointer overflow-hidden
                 shadow-[0_10px_25px_rgba(0,0,0,0.3)]
                 hover:bg-[#0a2e21] hover:border-[#c9b27d]/60
                 hover:shadow-[0_0_35px_rgba(201,178,125,0.35)]
                 hover:-translate-y-1 active:translate-y-0 group"
    >
      {/* Light Beam Shimmer Effect running across button on hover */}
      <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[30deg] -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-out" />

      {/* Left Play Icon inside a circle badge with pulse animation */}
      <span className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/20">
        <Play className="w-3.5 h-3.5 fill-white text-white translate-x-0.5 transition-transform duration-300 group-hover:scale-110" />
      </span>

      <span className="relative z-10">{text}</span>

      {/* Right Arrow with smooth slide-in animation */}
      <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2 text-[#c9b27d]" />
    </a>
  );
}
