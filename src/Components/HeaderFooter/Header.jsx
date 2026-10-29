import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../../assets/bazacchi-green-gold-logo.png";
import GlowButton from "../button/PrimaryButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    if (!headerRef.current) return;
    const rect = headerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const navItems = [
    { name: "Il Progetto", href: "#progetto" },
    { name: "Le Ville", href: "#ville" },
    { name: "Planimetrie", href: "#planimetrie" },
    { name: "Gallery", href: "#gallery" },
    { name: "Posizione", href: "#posizione" },
  ];

  return (
    <header
      ref={headerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="max-w-[1600px] mx-auto z-50 flex justify-center px-3 sm:px-4 pt-3 sm:pt-4 transition-all duration-500 font-sans absolute top-0 left-0 right-0"
    >
      {/* Interactive Mouse-Following Spotlight Gradient Glow */}
      <div
        className="absolute pointer-events-none -inset-px transition-opacity duration-500 rounded-2xl"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(197, 160, 89, 0.12), transparent 70%)`,
        }}
      />

      <div
        className={`w-full max-w-[1600px] mx-auto flex items-center justify-between px-4 sm:px-7 py-3 rounded-2xl transition-all duration-500 relative backdrop-blur-md ${
          scrolled
            ? "bg-[#0a2014]/95 border border-[#1d3d2c] shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-[#0d2618]/75 border border-[#163523]"
        }`}
      >
        {/* Logo Section */}
        <a href="/" className="relative z-10 flex items-center gap-3 group">
          <img
            src={logo}
            alt="Bazacchi Green Logo"
            className="w-[110px] sm:w-[140px] md:w-[160px] h-auto object-contain"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-medium text-gray-200 tracking-wider relative z-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative uppercase py-1 group transition-colors duration-300 hover:text-[#c5a059]"
            >
              <span className="relative z-10 flex items-center gap-1">
                {item.name}
              </span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#c5a059]" />
            </a>
          ))}
        </nav>

        {/* Right Action CTA Button */}
        <div className="hidden lg:flex items-center relative z-10">
          <GlowButton text="RICHIEDI INFORMAZIONI" href="/#contatti" />
        </div>

        {/* Mobile Hamburger Trigger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden relative z-10 p-2 text-gray-300 hover:text-[#c5a059] transition-colors bg-white/5 rounded-xl border border-white/10"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-[#c5a059]" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown Modal Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-[calc(100%+12px)] left-3 right-3 sm:left-4 sm:right-4 bg-[#0a2014]/98 backdrop-blur-2xl border border-[#1d3d2c] rounded-2xl p-5 shadow-2xl lg:hidden z-50 flex flex-col gap-4">
          <nav className="flex flex-col gap-2 text-sm font-medium text-gray-200">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex uppercase items-center justify-between py-3 px-4 rounded-xl bg-white/[0.02] hover:bg-white/5 hover:text-[#c5a059] transition-colors border border-white/5"
              >
                <span>{item.name}</span>
                <ArrowRight className="w-4 h-4 text-[#c5a059]" />
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#1d3d2c]">
            <GlowButton text="RICHIEDI INFORMAZIONI" href="/#contatti" />
          </div>
        </div>
      )}
    </header>
  );
}
