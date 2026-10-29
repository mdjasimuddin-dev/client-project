import { ArrowRight } from "lucide-react";

export default function SecondaryButton({ text, href, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="relative inline-flex items-center justify-center gap-3 py-4 px-8 rounded-full 
                 bg-[#0a2014]/60 border-2 border-[#c4a168]/60 backdrop-blur-md
                 text-[#fffdf5] font-extrabold text-xs sm:text-sm uppercase tracking-wider 
                 transition-all duration-300 ease-out cursor-pointer
                 shadow-[0_4px_20px_rgba(0,0,0,0.3)]
                 hover:bg-[#0a2014]/90 hover:border-[#d4af37]
                 hover:shadow-[0_0_35px_rgba(212,175,55,0.4),0_0_60px_rgba(197,160,89,0.2)]
                 hover:-translate-y-0.5 group"
    >
      <span>{text}</span>
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-[#c4a168]" />
    </a>
  );
}
