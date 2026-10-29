import React, { useState } from "react";
import { Maximize2, ZoomIn, ZoomOut, Compass } from "lucide-react";

// Image-er moto Custom SVG Icons
const locationIcons = {
  scuole: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7 text-[#d4af37]"
    >
      <path d="M4 12L16 6L28 12L16 18L4 12Z" />
      <path d="M8 14V22L16 26L24 22V14" />
      <path d="M16 18V26" />
    </svg>
  ),
  supermercati: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7 text-[#d4af37]"
    >
      <path d="M9 12L12 7M23 12L20 7" />
      <path d="M5 12H27L25 25H7L5 12Z" />
      <path d="M12 16V21M16 16V21M20 16V21" />
    </svg>
  ),
  centro: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7 text-[#d4af37]"
    >
      <path d="M16 5L20 11V26H12V11L16 5Z" />
      <path d="M6 16H12V26H6V16Z" />
      <path d="M20 16H26V26H20V16Z" />
      <circle cx="16" cy="14" r="1.5" />
      <path d="M15 26V21H17V26" />
    </svg>
  ),
  autostrada: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7 text-[#d4af37]"
    >
      <path d="M7 26L12 6M25 26L20 6" />
      <path d="M16 6V10M16 14V18M16 22V26" />
      <path d="M9 12H23" />
    </svg>
  ),
  parchi: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7 text-[#d4af37]"
    >
      <circle cx="16" cy="11" r="4" />
      <path d="M16 15V22" />
      <path d="M7 24C10 21 14 21 16 23C18 21 22 21 25 24" />
      <path d="M9 27C13 25 19 25 23 27" />
    </svg>
  ),
};

export default function LocationSection({
  googleMapsUrl = "https://maps.app.goo.gl/LfWHjyV25iDwKDHZA",
  // World map porjonto zoom out ba wide view debar jonno embed url-er scale/zoom parameter adjust kora hoyeche
  embedMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1132233.153712613!2d8.5!3d45.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4780b4b2c1514781%3A0xc47e33e970a2ea9c!2sVia%20dei%20Bazachi%2C%2029122%20Piacenza%20PC%2C%20Italy!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd",
}) {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.3, 2.2));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.3, 0.6)); // World map ba wider view-er jonno scale komanor sujog rakha hoyeche
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  const topPlaces = [
    { icon: "scuole", title: "Scuole", time: "2 minuti" },
    { icon: "supermercati", title: "Supermercati", time: "3 minuti" },
    { icon: "centro", title: "Centro di Piacenza", time: "10 minuti" },
  ];

  const bottomPlaces = [
    { icon: "autostrada", title: "Autostrada A1", time: "5 minuti" },
    { icon: "parchi", title: "Parchi e aree verdi", time: "2 minuti" },
  ];

  return (
    <section
      id="posizione"
      className="w-full bg-[#0b1310] py-16 lg:py-24 font-sans text-white relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[480px] lg:max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header Text */}
        <div className="mb-8 lg:mb-12 lg:text-center max-w-2xl lg:mx-auto">
          <span className="text-[#d4af37] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase bg-[#d4af37]/10 px-3 py-1.5 rounded-md border border-[#d4af37]/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
            LA POSIZIONE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.12] mt-4 mb-4">
            Borgotrebbia,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c5a059]">
              tutto a portata di mano
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
            Le ville si trovano in una zona residenziale tranquilla e ben
            collegata, ideale per chi cerca privacy senza rinunciare alla
            comodità dei servizi.
          </p>
        </div>
      </div>

      {/* Google Maps Container */}
      <div className="max-w-[480px] lg:max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 mb-10 lg:mb-14 relative z-10">
        <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[500px] lg:rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-[#c5a059]/40 bg-[#071f18]">
          {/* Live Google Map iframe with Scale Transition */}
          <div
            className="w-full h-full transition-transform duration-500 ease-out"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <iframe
              title="Bazachi Green Google Map"
              src={embedMapUrl}
              className="w-full h-full border-0 filter contrast-125 opacity-90 hover:opacity-100 transition-opacity"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Highlighted Custom Location Pin Badge */}
          <div className="absolute top-6 left-6 pointer-events-none z-20 hidden sm:block">
            <div className="flex items-center bg-[#0b1310]/95 backdrop-blur-md text-white pl-2 pr-5 py-2.5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.8)] border border-[#c5a059]/40">
              <div className="relative -ml-4 mr-3 w-12 h-12 shrink-0 flex items-center justify-center animate-bounce">
                <svg
                  viewBox="0 0 48 56"
                  className="w-full h-full drop-shadow-md"
                >
                  <path
                    d="M24 2C12.95 2 4 10.95 4 22C4 35.5 24 54 24 54C24 54 44 35.5 44 22C44 10.95 35.05 2 24 2Z"
                    fill="#d4af37"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <circle cx="24" cy="22" r="9" fill="#111c16" />
                  <circle cx="24" cy="22" r="3.5" fill="#d4af37" />
                </svg>
              </div>

              <div className="text-left">
                <p className="text-sm sm:text-base font-bold leading-tight text-white tracking-tight">
                  Bazachi Green
                </p>
                <p className="text-xs text-[#d4af37] font-medium">
                  Via dei Bazachi
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Zoom & Control Buttons */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex flex-col gap-2">
            <button
              onClick={handleZoomIn}
              aria-label="Zoom In"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0b1310]/90 hover:bg-[#0b1310] text-[#d4af37] flex items-center justify-center shadow-lg border border-[#c5a059]/40 transition-all duration-200 hover:scale-105 cursor-pointer"
            >
              <ZoomIn className="w-5 h-5" />
            </button>

            <button
              onClick={handleZoomOut}
              aria-label="Zoom Out"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0b1310]/90 hover:bg-[#0b1310] text-[#d4af37] flex items-center justify-center shadow-lg border border-[#c5a059]/40 transition-all duration-200 hover:scale-105 cursor-pointer"
            >
              <ZoomOut className="w-5 h-5" />
            </button>

            <button
              onClick={handleResetZoom}
              aria-label="Reset View"
              title="Reset View"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0b1310]/90 hover:bg-[#0b1310] text-[#d4af37] flex items-center justify-center shadow-lg border border-[#c5a059]/40 transition-all duration-200 hover:scale-105 cursor-pointer"
            >
              <Compass className="w-5 h-5" />
            </button>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apri mappa a schermo intero"
              title="Open Google Maps"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e6c55d] to-[#c5a059] text-[#111c16] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-200 hover:scale-105 cursor-pointer mt-1"
            >
              <Maximize2 className="w-5 h-5 font-bold" />
            </a>
          </div>
        </div>
      </div>

      {/* Nearby Services / Distances Container */}
      <div className="max-w-[480px] lg:max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col gap-7 lg:hidden">
          <div className="grid grid-cols-3 gap-2 text-center">
            {topPlaces.map((place, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border border-[#c5a059]/30 bg-[#111c16] flex items-center justify-center mb-2.5 shadow-md">
                  {locationIcons[place.icon]}
                </div>
                <p className="text-xs font-bold text-white leading-tight">
                  {place.title}
                </p>
                <p className="text-xs text-[#d4af37] mt-0.5">{place.time}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            {bottomPlaces.map((place, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 bg-[#111c16]/70 p-3 rounded-xl border border-[#c5a059]/30 shadow-md"
              >
                <div className="w-12 h-12 rounded-full border border-[#c5a059]/30 bg-[#0b1310] flex items-center justify-center shrink-0">
                  {locationIcons[place.icon]}
                </div>
                <div className="text-left min-w-0">
                  <p className="text-xs font-bold text-white leading-tight truncate">
                    {place.title}
                  </p>
                  <p className="text-xs text-[#d4af37] mt-0.5">{place.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-5 gap-6">
          {[...topPlaces, ...bottomPlaces].map((place, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#111c16]/85 border border-[#c5a059]/30 shadow-lg hover:border-[#d4af37] transition-all duration-300 transform hover:-translate-y-1.5 group"
            >
              <div className="w-16 h-16 rounded-full border border-[#c5a059]/40 bg-[#0b1310] flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:scale-110 transition-transform duration-300">
                {locationIcons[place.icon]}
              </div>
              <p className="text-sm font-bold text-white mb-1">{place.title}</p>
              <p className="text-xs font-medium text-[#d4af37]">{place.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
