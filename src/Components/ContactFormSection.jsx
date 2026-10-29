import React, { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Check,
  Loader2,
  Sparkles,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
    consulenza: false,
    nessunImpegno: false,
    rispostaRapida: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_xfpy0im", // আপনার সঠিক Service ID দিন
        "template_z2tgacr", // আপনার সঠিক Template ID দিন
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
          message: formData.message,
        },
        "uGYqAjzu4xJEq7hdm", // আপনার সঠিক Public Key দিন
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setIsSubmitting(false);
        setIsSubmitted(true);
      })
      .catch((error) => {
        // আসল এররটি কনসোলে দেখার জন্য
        console.error("EmailJS Error Details:", error);
        setIsSubmitting(false);
        alert(`Errore: ${error.text || "Controlla le credenziali EmailJS"}`);
      });
  };

  const inputClasses =
    "w-full rounded-xl bg-[#09211c]/90 backdrop-blur-sm border border-[#23453d] px-4 py-3.5 text-sm text-[#fffdf5] placeholder-[#85a097] focus:outline-none focus:border-[#c9b27d] focus:ring-2 focus:ring-[#c9b27d]/20 shadow-inner transition-all duration-300";

  return (
    <section
      id="contatti"
      className="relative w-full bg-[#001713] pt-16 pb-24 lg:py-32 px-4 sm:px-6 lg:px-12 font-sans text-[#fffdf5] overflow-hidden"
    >
      {/* Luxurious Ambient Background Glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(201, 178, 125, 0.4) 0%, transparent 70%)",
        }}
      />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#072d25]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[460px] lg:max-w-[680px] mx-auto">
        {/* Header Content */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c9b27d]/10 border border-[#c9b27d]/30 text-[#c9b27d] text-[11px] font-semibold tracking-[0.2em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Esclusiva Immobiliare</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#fffdf5] leading-[1.12] mb-4">
            Vuoi saperne di più
            <br />
            <span className="italic font-normal text-[#e3ce9c]">
              su questa villa?
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-lg mx-auto">
            Compila il form e sarai ricontattato per ricevere planimetrie,
            prezzi, disponibilità e tutta la documentazione riservata.
          </p>
        </div>

        {/* Form Card Container with Luxury Border */}
        <div className="relative bg-[#001c18]/80 backdrop-blur-xl border border-[#c9b27d]/20 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {isSubmitted ? (
            /* Success Message State */
            <div className="py-12 text-center flex flex-col items-center justify-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#c9b27d]/20 border border-[#c9b27d] flex items-center justify-center text-[#c9b27d] shadow-[0_0_20px_rgba(201,178,125,0.4)]">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">
                Richiesta Inviata con Successo
              </h3>
              <p className="text-sm text-gray-300 max-w-md">
                Grazie{" "}
                <span className="text-[#c9b27d] font-semibold">
                  {formData.fullName}
                </span>
                . Un nostro consulente ti contatterà al più presto all'indirizzo{" "}
                <span className="text-white underline">{formData.email}</span>.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    interest: "",
                    message: "",
                    consulenza: false,
                    nessunImpegno: false,
                    rispostaRapida: false,
                  });
                }}
                className="mt-6 text-xs uppercase tracking-wider text-[#c9b27d] hover:underline cursor-pointer font-semibold"
              >
                Invia un'altra richiesta
              </button>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Nome e cognome */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Nome e cognome *"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              {/* Email & Telefono */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Indirizzo Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Numero di Telefono *"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              {/* Dropdown: Sono interessato a */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="interest"
                  className="text-xs font-semibold text-[#c9b27d] uppercase tracking-wider pl-1"
                >
                  Sono interessato a:
                </label>
                <div className="relative">
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none pr-10 cursor-pointer ${
                      !formData.interest ? "text-[#85a097]" : "text-[#fffdf5]"
                    }`}
                  >
                    <option value="" disabled>
                      Seleziona un'opzione
                    </option>
                    <option
                      value="planimetrie"
                      className="bg-[#0a2014] text-white py-2"
                    >
                      Planimetrie e prezzi
                    </option>
                    <option
                      value="visita"
                      className="bg-[#0a2014] text-white py-2"
                    >
                      Fissare un appuntamento in cantiere
                    </option>
                    <option
                      value="capitolato"
                      className="bg-[#0a2014] text-white py-2"
                    >
                      Informazioni sul capitolato e finiture
                    </option>
                    <option
                      value="altro"
                      className="bg-[#0a2014] text-white py-2"
                    >
                      Altre informazioni
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#c9b27d] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
              {/* Textarea: Lascia un messaggio */}
              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Lascia un messaggio o note aggiuntive (opzionale)"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClasses} resize-y min-h-[110px]`}
                />
              </div>

              {/* Submit CTA Button with Loading State */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-4 px-6 rounded-xl bg-[linear-gradient(105deg,#9e7b47,#d4b47c_50%,#9b7844)] text-[#fffdf5] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_10px_25px_rgba(197,160,89,0.3)] border border-[#e5cca1]/40 hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Invio in corso...</span>
                  </>
                ) : (
                  <>
                    <span>RICHIEDI INFORMAZIONI</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom-Left Decorative Botanical Leaves */}
      <div className="absolute -bottom-6 -left-6 w-48 sm:w-64 lg:w-80 pointer-events-none opacity-80 select-none">
        <svg
          viewBox="0 0 260 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M-10 190 C20 130, 50 90, 80 40 C40 60, 0 110, -10 190 Z"
            fill="#123321"
          />
          <path
            d="M10 190 C50 140, 110 110, 160 95 C115 135, 65 165, 10 190 Z"
            fill="#183b27"
          />
          <path
            d="M-5 185 C10 120, 25 65, 35 15 C55 65, 45 125, -5 185 Z"
            fill="#234e32"
          />
          <path
            d="M35 15 L10 165"
            stroke="#3a6b4b"
            strokeWidth="1.2"
            opacity="0.6"
          />
          <path
            d="M5 185 C45 130, 85 85, 130 55 C110 110, 65 155, 5 185 Z"
            fill="#2d5e3c"
          />
          <path
            d="M130 55 L20 175"
            stroke="#4b825c"
            strokeWidth="1.2"
            opacity="0.6"
          />
          <path
            d="M25 185 C85 160, 150 155, 210 165 C155 185, 90 190, 25 185 Z"
            fill="#1d422a"
          />
        </svg>
      </div>
    </section>
  );
}
