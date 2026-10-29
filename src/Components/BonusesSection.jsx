import React from "react";
import { Check, ArrowRight } from "lucide-react";
import pergolaImg from "../assets/Twilight Modern Villa with Pool  1.jpg"; // Apnar image path onujayi adjust kore neben
import solarImg from "../assets/Fotovoltaico da 6 kW in omaggio 1.png";
import GlowButton from "./button/PrimaryButton";

export default function BonusesSection({
  pergolaImageSrc = pergolaImg,
  solarImageSrc = solarImg,
}) {
  const bonuses = [
    {
      title: "Pergola in omaggio",
      image: pergolaImageSrc,
      features: [
        "Spazio esterno da vivere",
        "Design moderno",
        "Perfetta per la tua famiglia",
      ],
    },
    {
      title: "Fotovoltaico da 6 kW in omaggio",
      image: solarImageSrc,
      features: [
        "Energia pulita",
        "Più risparmio in bolletta",
        "Una casa più sostenibile",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#001b17] py-20 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-[1200px] mx-auto justify-center flex flex-col items-center">
        {/* Section Header */}
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#c9b27d] mb-12 text-center">
          Un valore in più per la tua nuova casa
        </p>

        {/* Cards Grid (Mobile: 1 col, Desktop: 2 cols) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-12">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="bg-[#f4f1ea] rounded-3xl overflow-hidden shadow-2xl flex flex-col sm:flex-row items-stretch border border-[#e5cca1]/30 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="w-full sm:w-1/2 h-60 sm:h-auto relative overflow-hidden">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/20 via-transparent to-transparent" />
              </div>

              {/* Card Content */}
              <div className="w-full sm:w-1/2 p-6 sm:p-8 flex flex-col justify-center text-[#0a2014]">
                <h3 className="text-xl sm:text-2xl font-serif font-bold uppercase leading-tight mb-5">
                  {bonus.title}
                </h3>

                <ul className="flex flex-col gap-3">
                  {bonus.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 font-medium"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#c9b27d]/20 flex items-center justify-center shrink-0 text-[#0a2014]">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="w-full flex items-center justify-center">
          <GlowButton text="Scopri tutti i vantaggi" href="#contatti" />
        </div>
      </div>
    </section>
  );
}
