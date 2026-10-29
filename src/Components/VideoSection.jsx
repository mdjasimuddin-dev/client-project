import React, { useState, useEffect, useRef } from "react";
import { Play, X, Maximize2, Minimize2, Volume2, VolumeX } from "lucide-react";
import DarkForestButton from "./button/DarkForestButton";

export default function YouTubeVideoSection({
  youtubeVideoId = "dQw4w9WgXcQ",
  title = "Un nuovo modo di vivere la casa",
  description = "Guarda il video e scopri come nasce Bazachi Green: dalle prime fasi di progettazione alla realizzazione delle ville, con tutti i dettagli che le rendono uniche.",
}) {
  const [isFloating, setIsFloating] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [isMuted, setIsMuted] = useState(true);

  const sectionRef = useRef(null);

  // Intersection Observer to detect when the main video section leaves viewport for floating mode
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !isClosed && !isModalOpen) {
          setIsFloating(true);
        } else {
          setIsFloating(false);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isClosed, isModalOpen]);

  return (
    <>
      {/* Main Section */}
      <section
        ref={sectionRef}
        className="relative w-full bg-[#f4f1ea] py-16 lg:py-24 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#b89753]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
          {/* বাম পাশ: YouTube Iframe Embed */}
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl bg-black aspect-[4/3] lg:aspect-[16/10] flex items-center justify-center border border-[#c9b27d]/30">
            <iframe
              className="w-full h-full object-cover border-0"
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=${
                isMuted ? 1 : 0
              }&controls=1&rel=0&modestbranding=1&enablejsapi=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

            {/* Sound Toggle Quick Overlay */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="absolute bottom-4 left-4 z-20 bg-black/75 hover:bg-black text-white px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 border border-white/20 transition-all cursor-pointer"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-red-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-green-400" />
              )}
              {isMuted ? "Audio Disattivato" : "Audio Attivo"}
            </button>
          </div>

          {/* ডান পাশ: টেক্সট কন্টেন্ট এবং CTA বাটন (Clicking opens Modal) */}
          <div className="flex flex-col items-start justify-center text-[#0a2014]">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#b89753] mb-3">
              VIDEO PRESENTAZIONE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal uppercase leading-[1.1] tracking-tight font-serif mb-6">
              Un nuovo modo <br />
              di vivere la casa
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 max-w-xl">
              {description}
            </p>

            {/* Baatan e click korlei Modal open hobe */}
            <div onClick={() => setIsModalOpen(true)}>
              <DarkForestButton
                text="Guarda il video completo"
                href="#video"
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(true);
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FULLSCREEN MODAL PLAYER (Triggered by Button) ================= */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Video Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-[#c9b27d]/40 bg-black"
          >
            <iframe
              className="w-full h-full object-cover border-0"
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* ================= FLOATING MINI PLAYER (Appears when scrolling away) ================= */}
      {isFloating && !isClosed && !isModalOpen && (
        <div
          className={`fixed z-45 transition-all duration-500 ease-out shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-[#c9b27d]/50 bg-black rounded-2xl overflow-hidden animate-fade-in ${
            isExpanded
              ? "bottom-6 right-6 w-[90vw] sm:w-[500px] aspect-[16/10]"
              : "bottom-6 right-6 w-[280px] sm:w-[340px] aspect-[16/10]"
          }`}
        >
          {/* Floating Top Control Bar */}
          <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-black/80 to-transparent p-3 z-30 flex items-center justify-between pointer-events-auto">
            <span className="text-white text-xs font-bold truncate max-w-[180px] drop-shadow-md">
              Bazachi Green
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                title={isExpanded ? "Riduci" : "Ingrandisci"}
                className="w-7 h-7 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
              >
                {isExpanded ? (
                  <Minimize2 className="w-3.5 h-3.5" />
                ) : (
                  <Maximize2 className="w-3.5 h-3.5" />
                )}
              </button>
              <button
                onClick={() => setIsClosed(true)}
                title="Chiudi video"
                className="w-7 h-7 rounded-full bg-red-600/80 hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <iframe
            className="w-full h-full object-cover border-0"
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}
    </>
  );
}
