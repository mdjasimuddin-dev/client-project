import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  XCircle,
  Sparkles,
  X,
  Lock,
} from "lucide-react";
import { FaEuroSign } from "react-icons/fa6";

import villaImg1 from "../assets/Modern Villa at Blue Twilight.png";
import villaImg2 from "../assets/Modern Villa at Sunset by the Pool.webp";
import villaImg3 from "../assets/property.avif";
import villaImg4 from "../assets/Modern Cliffside Villa at Sunset.webp";
import villaImg5 from "../assets/Twilight Mediterranean Villa Retreat.webp";
import villaImg6 from "../assets/1.webp";
import villaImg7 from "../assets/2.webp";
import villaImg8 from "../assets/3.jpg";
import GlowButton from "./button/PrimaryButton";

const defaultVillas = [
  {
    id: "V1",
    status: "VENDUTA",
    isSold: true,
    image: villaImg1,
    price: "Reserved",
  },
  {
    id: "V2",
    status: "VENDUTA",
    isSold: true,
    image: villaImg2,
    price: "Reserved",
  },
  {
    id: "V3",
    status: "VENDUTA",
    isSold: true,
    image: villaImg3,
    price: "Reserved",
  },
  {
    id: "V4",
    status: "DISPONIBILE",
    isSold: false,
    image: villaImg4,
    price: "390.000",
  },
  {
    id: "V5",
    status: "DISPONIBILE",
    isSold: false,
    image: villaImg5,
    price: "390.000",
  },
  {
    id: "V6",
    status: "DISPONIBILE",
    isSold: false,
    image: villaImg6,
    price: "390.000",
  },
  {
    id: "V7",
    status: "DISPONIBILE",
    isSold: false,
    image: villaImg7,
    price: "390.000",
  },
  {
    id: "V8",
    status: "DISPONIBILE",
    isSold: false,
    image: villaImg8,
    price: "390.000",
  },
];

export default function AvailabilitySection({
  villas = defaultVillas,
  ctaHref = "#contatti",
}) {
  const [selectedVilla, setSelectedVilla] = useState(null);

  return (
    <section
      id="disponibilita"
      className="relative w-full bg-[#f4f1ea] py-20 lg:py-28 px-4 sm:px-6 lg:px-12 font-sans text-[#141e18] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#b89753]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[480px] lg:max-w-[1200px] mx-auto relative z-10">
        {/* Header Content */}
        <div className="mb-10 lg:mb-16 lg:text-center max-w-2xl lg:mx-auto">
          <div className="inline-flex items-center gap-2 text-[#b89753] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase bg-[#b89753]/10 px-4 py-2 rounded-lg border border-[#b89753]/30 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            LA DISPONIBILITÀ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#141e18] leading-[1.12] mb-4">
            Solo 5 ville ancora
            <br className="lg:hidden" /> disponibili
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Il progetto prevede 8 ville bifamiliari: 3 ville sono già state
            vendute.
            <br />
            Prenota ora la tua villa e scegli le finiture secondo il capitolato.
          </p>
        </div>

        {/* Villas 4x2 Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {villas.map((villa) => (
            <div
              key={villa.id}
              onClick={() => setSelectedVilla(villa)}
              className="group relative flex flex-col items-center bg-white p-3.5 sm:p-4 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#e5cca1]/50 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(184,151,83,0.2)] hover:border-[#b89753]"
            >
              {/* Villa Name */}
              <span className="text-lg sm:text-xl font-extrabold text-[#141e18] tracking-tight mb-1.5 font-serif">
                Villa {villa.id}
              </span>

              {/* Status Badge */}
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-white mb-3 shadow-sm ${
                  villa.isSold
                    ? "bg-gradient-to-r from-[#d93838] to-[#b91c1c] shadow-[0_4px_12px_rgba(217,56,56,0.3)]"
                    : "bg-gradient-to-r from-[#22c55e] to-[#15803d] shadow-[0_4px_12px_rgba(34,197,94,0.3)] animate-pulse"
                }`}
              >
                {villa.isSold ? (
                  <XCircle className="w-3 h-3" />
                ) : (
                  <CheckCircle className="w-3 h-3" />
                )}
                {villa.status}
              </span>

              {/* Villa Thumbnail Card */}
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-inner bg-[#0a2014] relative">
                <img
                  src={villa.image}
                  alt={`Villa ${villa.id} - ${villa.status}`}
                  className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 ${
                    villa.isSold ? "opacity-75 saturate-[0.7]" : "opacity-100"
                  }`}
                />

                {/* Sold Overlay Icon */}
                {villa.isSold && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                    <span className="bg-red-600/90 text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md shadow-lg border border-red-400/30">
                      Venduta
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>

              <span className="text-[11px] font-semibold text-[#b89753] mt-3 uppercase tracking-wider group-hover:underline">
                {villa.isSold ? "Visualizza stato →" : "Scopri dettagli →"}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Gold CTA Button */}
        <div className="w-full max-w-md mx-auto">
          <a
            href={ctaHref}
            className="w-full flex items-center justify-center gap-3 py-4 px-8 rounded-2xl bg-[linear-gradient(105deg,#9e7b47,#c4a168_50%,#9b7844)] text-[#fffdf5] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_10px_25px_rgba(158,123,71,0.3)] hover:brightness-110 transition-all duration-300 group"
          >
            Verifica la disponibilità
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </div>
      </div>

      {/* ================= MODAL WITH CONDITIONAL BOOKED CHECK ================= */}
      {selectedVilla && (
        <div
          onClick={() => setSelectedVilla(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#e5cca1]"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVilla(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="w-full h-60 sm:h-68 relative bg-black">
              <img
                src={selectedVilla.image}
                alt={`Villa ${selectedVilla.id}`}
                className={`w-full h-full object-cover object-center ${
                  selectedVilla.isSold ? "saturate-50 opacity-80" : ""
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-6 text-white">
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">
                  Borgo Trebbia
                </span>
                <h3 className="text-2xl font-serif font-bold">
                  Villa {selectedVilla.id}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 flex flex-col gap-5 text-[#141e18]">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <span className="text-sm font-semibold text-gray-600">
                  Stato attuale:
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase text-white ${
                    selectedVilla.isSold ? "bg-red-600" : "bg-green-600"
                  }`}
                >
                  {selectedVilla.status}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <span className="text-sm font-semibold text-gray-600">
                  Tipologia:
                </span>
                <span className="text-sm font-bold text-gray-900">
                  Villa Bifamiliare con Giardino
                </span>
              </div>

              <div className="flex items-center justify-between pb-1">
                <span className="text-sm font-semibold text-gray-600">
                  Condizioni:
                </span>
                <span className="text-sm font-bold text-[#b89753] flex items-center">
                  {selectedVilla.price}{" "}
                  {!selectedVilla.isSold && <FaEuroSign />}
                </span>
              </div>

              {/* Conditional Action: If Sold, show Already Booked notice; If Available, show Form CTA */}
              {/* {selectedVilla.isSold ? (
                <div className="mt-3 p-4 rounded-2xl bg-red-50 border border-red-200 flex items-center gap-3.5 text-red-800">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold">
                      Immobile già venduto (Already Booked)
                    </h4>
                    <p className="text-xs text-red-600 mt-0.5">
                      Questa unità è stata assegnata. Non è possibile inviare
                      richieste di prenotazione.
                    </p>
                  </div>
                </div>
              ) : (
                <a
                  href={ctaHref}
                  onClick={() => setSelectedVilla(null)}
                  className="mt-3 w-full py-4 rounded-xl bg-[linear-gradient(105deg,#9e7b47,#c4a168_50%,#9b7844)] text-[#fffdf5] font-extrabold text-xs uppercase tracking-wider text-center hover:brightness-110 transition-all shadow-[0_8px_20px_rgba(158,123,71,0.3)] flex items-center justify-center gap-2"
                >
                  Richiedi informazioni per questa villa
                  <ArrowRight className="w-4 h-4" />
                </a>
              )} */}

              {!selectedVilla.isSold && (
                <GlowButton
                  text="Richiedi informazioni per questa villa"
                  href={ctaHref}
                  onClick={() => setSelectedVilla(null)}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
