import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Apnar project-er image path onujayi import gulo adjust kore neben
import galleryMain from "../assets/Modern Villa at Blue Twilight.png";
import thumb1 from "../assets/Modern Villa at Sunset by the Pool.webp";
import thumb2 from "../assets/Luxurious Tropical Modern Living Room.webp";
import thumb3 from "../assets/Sunset Luxury Bedroom Retreat.webp";
import thumb4 from "../assets/Sunset Spa Bathroom Retreat.webp";

const defaultImages = [
  {
    id: 1,
    src: galleryMain,
    alt: "Esterno villa Bazachi Green con giardino e pergola",
  },
  {
    id: 2,
    src: thumb1,
    alt: "Soggiorno moderno e luminoso con ampie vetrate",
  },
  {
    id: 3,
    src: thumb2,
    alt: "Camera da letto padronale elegante",
  },
  {
    id: 4,
    src: thumb3,
    alt: " Zona giorno e dettagli di design interno",
  },
  {
    id: 5,
    src: thumb4,
    alt: " Zona giorno e dettagli di design interno",
  },
];

export default function GallerySection({ images = defaultImages }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Thumbnail list-e dekhanor jonno 3-ti image select kora
  const getVisibleThumbnails = () => {
    const thumbs = [];
    for (let i = 1; i <= 3; i++) {
      const index = (activeIndex + i) % images.length;
      thumbs.push({ ...images[index], originalIndex: index });
    }
    return thumbs;
  };

  const visibleThumbnails = getVisibleThumbnails();

  return (
    <section
      id="gallery"
      className="relative w-full bg-[#f4f1ea] py-20 lg:py-28 px-4 sm:px-6 lg:px-12 font-sans text-[#1a1a1a] overflow-hidden"
    >
      {/* Background Ambient Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#b89753]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[480px] lg:max-w-[1200px] mx-auto relative z-10">
        {/* Header Content */}
        <div className="mb-10 lg:mb-16 lg:text-center max-w-2xl lg:mx-auto">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#b89753] mb-3">
            GALLERY
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#141e18] leading-[1.12] mb-4">
            Immagina
            <br className="lg:hidden" /> la tua nuova vita
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Spazi luminosi, ambienti moderni e un{" "}
            <strong className="font-bold text-[#141e18]">giardino</strong> tutto
            per te. Sfoglia le immagini e lasciati ispirare.
          </p>
        </div>

        {/* Gallery Interactive Container */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
          {/* Top Featured Large Image with Zoom & Fade Animation */}
          <div className="w-full h-[280px] sm:h-[380px] lg:h-[560px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative bg-[#0a2014] group">
            <img
              key={activeIndex}
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="w-full h-full object-cover object-center animate-fade-in transition-transform duration-700 ease-out hover:scale-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Bottom 3 Thumbnails Row with Left/Right Arrows Overlay */}
          <div className="relative flex items-center px-1">
            {/* Left Arrow Button */}
            <button
              onClick={handlePrev}
              aria-label="Immagine precedente"
              className="absolute -left-3 sm:-left-6 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-[#8c6d43] shadow-[0_5px_20px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer border border-gray-200"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
            </button>

            {/* 3 Thumbnails Grid */}
            <div className="w-full grid grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
              {visibleThumbnails.map((item) => {
                const isSelected = activeIndex === item.originalIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(item.originalIndex)}
                    className={`group relative h-[105px] sm:h-[140px] lg:h-[210px] rounded-2xl overflow-hidden shadow-md focus:outline-none cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                      isSelected
                        ? "border-3 border-[#b89753] shadow-[0_0_20px_rgba(184,151,83,0.3)] scale-[1.02]"
                        : "border-2 border-transparent opacity-85 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />
                  </button>
                );
              })}
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={handleNext}
              aria-label="Immagine successiva"
              className="absolute -right-3 sm:-right-6 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-[#8c6d43] shadow-[0_5px_20px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer border border-gray-200"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-3 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Vai all'immagine ${index + 1}`}
                className={`rounded-full transition-all duration-500 cursor-pointer ${
                  activeIndex === index
                    ? "w-8 h-2.5 bg-[#b89753] shadow-sm"
                    : "w-2.5 h-2.5 bg-[#d5c7b2] hover:bg-[#b89753]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
