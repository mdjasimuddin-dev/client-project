import React from "react";
import {
  CheckCircle2,
  Home,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import projectImage from "../assets/property.avif"; // Proyojonmoto image path adjust kore neben

export default function IlProgettoSection() {
  return (
    <section
      id="progetto"
      className="bg-[#0b1310] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden"
    >
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#16382b]/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text & Info Column */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-center lg:text-left">
            {/* Small Label with Glow */}
            <div>
              <span className="inline-flex items-center gap-2 text-[#d4af37] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase bg-[#d4af37]/10 px-4 py-2 rounded-lg border border-[#d4af37]/30 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#d4af37]" />
                IL PROGETTO
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] font-serif">
              8 ville bifamiliari <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f3e2c7] to-[#c5a059]">
                5 ancora disponibili
              </span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Un complesso residenziale moderno e riservato, progettato per
              offrire comfort, indipendenza e qualità della vita nel cuore di
              Borgo Trebbia.
            </p>

            {/* Icon Badges / Stats Row with Hover Animations */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-[#c5a059]/20">
              {/* Stat 1 */}
              <div className="group/stat flex flex-col items-center lg:items-start text-center lg:text-left p-4 rounded-2xl bg-white/[0.02] border border-[#c5a059]/15 transition-all duration-500 hover:bg-[#d4af37]/5 hover:border-[#d4af37]/40 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)]">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-3 transition-transform duration-500 group-hover/stat:scale-110 group-hover/stat:rotate-6 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                  <Home className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-sm sm:text-base md:text-lg font-bold text-white group-hover/stat:text-[#d4af37] transition-colors">
                  3 ville
                </span>
                <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mt-0.5">
                  già vendute
                </span>
              </div>

              {/* Stat 2 */}
              <div className="group/stat flex flex-col items-center lg:items-start text-center lg:text-left p-4 rounded-2xl bg-white/[0.02] border border-[#c5a059]/15 transition-all duration-500 hover:bg-[#d4af37]/5 hover:border-[#d4af37]/40 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)]">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-3 transition-transform duration-500 group-hover/stat:scale-110 group-hover/stat:rotate-6 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-sm sm:text-base md:text-lg font-bold text-white group-hover/stat:text-[#d4af37] transition-colors">
                  5 unità
                </span>
                <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mt-0.5">
                  disponibili
                </span>
              </div>

              {/* Stat 3 */}
              <div className="group/stat flex flex-col items-center lg:items-start text-center lg:text-left p-4 rounded-2xl bg-white/[0.02] border border-[#c5a059]/15 transition-all duration-500 hover:bg-[#d4af37]/5 hover:border-[#d4af37]/40 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)]">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-3 transition-transform duration-500 group-hover/stat:scale-110 group-hover/stat:rotate-6 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-sm sm:text-base md:text-lg font-bold text-white group-hover/stat:text-[#d4af37] transition-colors">
                  Solo 8 ville
                </span>
                <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mt-0.5">
                  totali
                </span>
              </div>
            </div>
          </div>

          {/* Right Image Column with Premium Hover & Shine Effects */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#c5a059]/30 shadow-[0_25px_60px_rgba(0,0,0,0.9)] group">
              {/* Shimmer Light Beam Effect across image container */}
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[30deg] -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out z-20 pointer-events-none" />

              {/* Image Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1310] via-transparent to-transparent opacity-60 z-10 pointer-events-none" />

              <img
                src={projectImage}
                alt="Bazachi Green Villas Project"
                className="w-full h-[320px] sm:h-[420px] md:h-[500px] object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Bottom Card Badge Overlay with Smooth Entrance & Glow */}
              <div className="absolute bottom-5 left-5 right-5 z-30 bg-[#0b1310]/90 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-[#c5a059]/40 flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:border-[#d4af37]/80 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]">
                <div>
                  <p className="text-xs text-[#d4af37] font-bold uppercase tracking-widest mb-0.5">
                    Borgo Trebbia
                  </p>
                  <h4 className="text-sm sm:text-base md:text-lg font-serif font-bold text-white">
                    Residenza Esclusiva
                  </h4>
                </div>

                <span className="text-xs font-extrabold px-4 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e2c7] to-[#c5a059] text-[#111c16] uppercase tracking-wider shadow-md transition-transform duration-300 group-hover:scale-105">
                  Classe A4
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
