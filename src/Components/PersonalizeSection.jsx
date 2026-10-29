import React from "react";
import { ArrowRight } from "lucide-react";
import bedroomImg from "../assets/Warm Luxury Bedroom at Sunset.webp"; // প্রজেক্ট অনুযায়ী পাথ ঠিক করে নেবেন

function SwatchIcon({ className }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect
        x="14"
        y="10"
        width="12"
        height="42"
        rx="2"
        transform="rotate(-12 14 10)"
      />
      <line x1="16" y1="18" x2="21" y2="17" />
      <line x1="17" y1="24" x2="22" y2="23" />
      <line x1="18" y1="30" x2="23" y2="29" />
      <line x1="20" y1="36" x2="25" y2="35" />

      <path d="M26 16L36 12L44 46L32 50Z" />
      <line x1="33" y1="20" x2="37" y2="18" />
      <line x1="35" y1="27" x2="39" y2="25" />
      <line x1="37" y1="34" x2="41" y2="32" />

      <path d="M38 22L49 20L54 48L41 51Z" />
      <line x1="44" y1="27" x2="49" y2="26" />
      <line x1="45" y1="34" x2="50" y2="33" />
      <line x1="47" y1="41" x2="52" y2="40" />

      <circle cx="26" cy="45" r="2" fill="currentColor" />
    </svg>
  );
}

export default function PersonalizeSection({
  imageSrc = bedroomImg,
  finishesHref = "#finiture",
}) {
  return (
    <section className="relative w-full bg-[#001b17] py-20 lg:py-28 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      {/* ব্যাকগ্রাউন্ড অ্যাম্বিয়েন্ট গ্লো */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#dcb98a]/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Slowed Down Comet Spin Animation (5s duration for slow & smooth motion) */}
      <style>{`
        @keyframes comet-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-comet-spin {
          animation: comet-spin 5s linear infinite;
        }
      `}</style>

      <div className="max-w-[440px] lg:max-w-[1250px] mx-auto flex flex-col lg:grid lg:grid-cols-12 lg:items-center lg:gap-8 relative z-10">
        {/* Left Side Box: Outer Frame with Slow & Smooth Comet Border Animation */}
        <div className="w-full lg:col-span-6 z-10 relative p-[3.5px] rounded-[28px] overflow-hidden shadow-[0_0_35px_rgba(220,185,138,0.3)]">
          {/* Slowed Down Comet Beam */}
          <div className="absolute inset-[-150%] animate-comet-spin bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_75%,#ffea9f_88%,#ffffff_95%,transparent_100%)] pointer-events-none" />

          {/* Outer Frame Background */}
          <div className="relative bg-[#dcb98a] p-2.5 sm:p-3 rounded-[25px] z-10 h-full">
            <div className="bg-[linear-gradient(145deg,#8c6d43,#765934_55%,#8f7045)] border border-[#ebd3b0]/40 rounded-[18px] px-6 py-9 sm:px-10 sm:py-12 flex flex-col items-center text-center text-[#fffdf5] h-full justify-between">
              {/* Header: Icon + Title */}
              <div className="flex items-center justify-center gap-3 sm:gap-5 mb-6 w-full">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                  <SwatchIcon className="w-12 h-12 sm:w-14 sm:h-14 text-[#f5e3c6] shrink-0" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-sans font-extrabold uppercase tracking-wide leading-[1.2] text-left text-white drop-shadow-md">
                  Personalizza
                  <br />
                  la tua casa
                </h2>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#f7efe2] leading-relaxed font-normal mb-8 max-w-[340px] sm:max-w-md">
                Acquistando in fase di costruzione potrai scegliere pavimenti,
                rivestimenti e finiture secondo le opzioni previste dal
                capitolato.
              </p>

              {/* CTA Button */}
              <a
                href="#contatti"
                className="w-full sm:w-auto min-w-[260px] inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl bg-[#f3e2c7] text-[#5e4527] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:bg-[#faeedb] hover:shadow-[0_0_25px_rgba(243,226,199,0.4)] transition-all duration-300 group/btn"
              >
                <span>Scopri le finiture</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5 text-[#5e4527]" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Bedroom Image */}
        <div className="w-[96%] mx-auto lg:w-full lg:col-span-6 -mt-3 lg:mt-0 overflow-hidden rounded-b-[24px] lg:rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#dcb98a]/30 group/img">
          <img
            src={imageSrc}
            alt="Camera da letto moderna personalizzabile"
            className="w-full h-[280px] sm:h-[360px] lg:h-[480px] object-cover object-center block transform transition-transform duration-700 ease-out group-hover/img:scale-110"
          />
        </div>
      </div>
    </section>
  );
}
