import React, { useState } from "react";
import {
  Home,
  Bath,
  Layers,
  Car,
  Trees,
  Bed,
  ZoomIn,
  ZoomOut,
  Maximize2,
  X,
} from "lucide-react";

import floorPlanPdfImg from "../assets/floorPlanImage.jpeg"; // আপনার প্রোজেক্টের পাথ অনুযায়ী ঠিক করে নেবেন
import GlowButton from "./button/PrimaryButton";

export default function FloorPlansSection({
  floorPlanImage = floorPlanPdfImg,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 0.5, 1));
  };

  const groundFeatures = [
    {
      icon: <Home className="w-4 h-4 text-[#9e7b47]" />,
      text: "Soggiorno con cucina a vista 35 mq",
    },
    { icon: <Bath className="w-4 h-4 text-[#9e7b47]" />, text: "Bagno" },
    {
      icon: <Layers className="w-4 h-4 text-[#9e7b47]" />,
      text: "Lavanderia separata",
    },
    {
      icon: <Car className="w-4 h-4 text-[#9e7b47]" />,
      text: "Garage 14 qm",
    },
    {
      icon: <Trees className="w-4 h-4 text-[#9e7b47]" />,
      text: "Giardino privato e pergola",
    },
  ];

  const firstFeatures = [
    {
      icon: <Bed className="w-4 h-4 text-[#9e7b47]" />,
      text: "3 camere da letto",
    },
    {
      icon: <Bath className="w-4 h-4 text-[#9e7b47]" />,
      text: "Secondo bagno finestrato",
    },
    {
      icon: <Home className="w-4 h-4 text-[#9e7b47]" />,
      text: "Loggia privata 7 mq",
    },
  ];

  return (
    <section
      id="planimetrie"
      className="w-full bg-[#f4f1ea] py-16 lg:py-28 px-4 sm:px-6 lg:px-12 font-sans text-[#141e18]"
    >
      <div className="max-w-[480px] lg:max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-2xl mb-12 lg:mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#b89753] mb-2.5">
            LE VILLE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold uppercase leading-tight mb-4 text-[#141e18]">
            Spazi moderni e funzionali
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Ogni villa si sviluppa su due livelli e offre ingresso indipendente,
            giardino privato,{" "}
            <span className="font-bold text-[#141e18]">
              pergola e garage collegato
            </span>{" "}
            direttamente all'abitazione.
          </p>
        </div>

        {/* --- SINGLE BLUEPRINT DISPLAY WITH ZOOM TRIGGER --- */}
        <div className="w-full bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#e5cca1]/40 flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10">
          {/* Blueprint Image Container (Click to Open Zoom Modal) */}
          <div
            onClick={() => {
              setIsModalOpen(true);
              setZoomLevel(1);
            }}
            className="w-full lg:col-span-7 rounded-2xl overflow-hidden shadow-md bg-[#f9f8f6] border border-gray-100 aspect-[4/3] lg:aspect-[4/3] relative group cursor-pointer"
          >
            <img
              src={floorPlanImage}
              alt="Planimetria Piano Terra e Piano Primo"
              className="w-full h-full object-contain object-center bg-white p-2 transition-transform duration-500 group-hover:scale-105"
            />

            {/* Zoom Hint Overlay Badge */}
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-3.5 py-2 rounded-full text-xs font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg border border-white/20">
              <Maximize2 className="w-4 h-4 text-[#c9b27d]" />
              Clicca per ingrandire
            </div>
          </div>

          {/* Features Lists (Both Ground & First Floor Details Combined) */}
          <div className="w-full lg:col-span-5 flex flex-col justify-center gap-6">
            {/* Piano Terra Block */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-lg bg-[#071f18] text-[#fffdf5] font-extrabold uppercase text-xs tracking-wider w-max mb-4 shadow-sm">
                Piano terra
              </span>
              <ul className="flex flex-col gap-3">
                {groundFeatures.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-800"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f2ebd9] flex items-center justify-center shrink-0 border border-[#e2d5bd]">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Piano Primo Block */}
            <div className="pt-2 border-t border-gray-200">
              <span className="inline-block px-4 py-1.5 rounded-lg bg-[#071f18] text-[#fffdf5] font-extrabold uppercase text-xs tracking-wider w-max mb-4 shadow-sm">
                Piano primo
              </span>
              <ul className="flex flex-col gap-3 mb-6">
                {firstFeatures.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-800"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f2ebd9] flex items-center justify-center shrink-0 border border-[#e2d5bd]">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              <GlowButton text="Scarica le planimetrie" href="#contatti" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= FULLSCREEN ZOOMABLE LIGHTBOX MODAL ================= */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          {/* Top Control Toolbar */}
          <div className="absolute top-5 right-5 z-50 flex items-center gap-3">
            <button
              onClick={handleZoomIn}
              title="Zoom In"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <button
              onClick={handleZoomOut}
              title="Zoom Out"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              title="Chiudi"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Zoomable Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[92vw] max-h-[88vh] overflow-auto flex items-center justify-center rounded-2xl bg-white p-4 shadow-2xl"
          >
            <img
              src={floorPlanImage}
              alt="Planimetria Dettaglio"
              style={{
                transform: `scale(${zoomLevel})`,
                transition: "transform 0.3s ease",
              }}
              className="max-w-full max-h-[80vh] object-contain cursor-grab"
            />
          </div>
        </div>
      )}
    </section>
  );
}
