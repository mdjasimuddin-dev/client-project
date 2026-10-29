import React from "react";
import {
  Flame,
  Sun,
  ShieldCheck,
  AppWindow,
  SlidersHorizontal,
  DoorClosed,
  Car,
  BellRing,
} from "lucide-react";

export default function FeaturesGridSection() {
  const dotazioni = [
    {
      icon: (
        <Flame className="w-7 h-7 text-[#c9b27d] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
      ),
      title: "Riscaldamento a pavimento con pompa di calore",
    },
    {
      icon: (
        <Sun className="w-7 h-7 text-[#c9b27d] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45" />
      ),
      title: "Impianto fotovoltaico da 6 KW",
    },
    {
      icon: (
        <ShieldCheck className="w-7 h-7 text-[#c9b27d] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12" />
      ),
      title: "Cappotto termico",
    },
    {
      icon: (
        <AppWindow className="w-7 h-7 text-[#c9b27d] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
      ),
      title: "Serramenti in PVC ad alte prestazioni",
    },
    {
      icon: (
        <SlidersHorizontal className="w-7 h-7 text-[#c9b27d] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-90" />
      ),
      title: "Tapparelle motorizzate",
    },
    {
      icon: (
        <DoorClosed className="w-7 h-7 text-[#c9b27d] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />
      ),
      title: "Porta blindata",
    },
    {
      icon: (
        <Car className="w-7 h-7 text-[#c9b27d] transition-transform duration-500 group-hover:scale-110 group-hover:translate-x-1" />
      ),
      title: "Garage con portone motorizzato",
    },
    {
      icon: (
        <BellRing className="w-7 h-7 text-[#c9b27d] transition-transform duration-500 group-hover:scale-110 group-hover:animate-bounce" />
      ),
      title: "Predisposizione per climatizzazione e allarme",
    },
  ];

  return (
    <section className="relative w-full bg-[#001b17] py-10 lg:py-28 px-4 sm:px-6 lg:px-12 font-sans text-[#fffdf5] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#c9b27d]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Custom CSS Animation for Rotating Border Beam */}
      <style>{`
        @keyframes border-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-border-spin {
          animation: border-spin 4s linear infinite;
        }
      `}</style>

      <div className="max-w-[1200px] mx-auto flex flex-col items-center relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#c9b27d] mb-3">
            DOTAZIONI DI SERIE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal uppercase leading-tight tracking-tight">
            Qualità, efficienza
            <br />e comfort ogni giorno
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 w-full">
          {dotazioni.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center p-6 rounded-3xl bg-[#03241e] border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden"
            >
              {/* Continuous Animated Rotating Border Gradient on Hover */}
              <div className="absolute -inset-[2px] rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-[-100%] animate-border-spin bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_70%,#c9b27d_85%,#fff_95%,transparent_100%)]" />
              </div>

              {/* Inner card background mask to keep the body dark */}
              <div className="absolute inset-[1px] rounded-[23px] bg-[#03241e] z-0 transition-colors duration-500 group-hover:bg-[#052b24]" />

              {/* Card Content Wrapper */}
              <div className="relative z-10 flex flex-col items-center w-full">
                {/* Circular Icon Badge */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#c9b27d]/30 bg-[#062621] flex items-center justify-center mb-5 transition-all duration-500 group-hover:border-[#c9b27d] group-hover:shadow-[0_0_30px_rgba(201,178,125,0.35)] group-hover:scale-110 group-hover:bg-[#09352c]">
                  {item.icon}
                </div>

                {/* Feature Title */}
                <p className="text-xs sm:text-sm font-medium leading-snug text-gray-200 max-w-[200px] transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
