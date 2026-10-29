import React, { useState } from "react";
import { Title } from "react-head";
import { X } from "lucide-react";
import HeroSection from "../../Components/HeroSection";
import HeroImage from "../../assets/Modern Villa at Blue Twilight.png";
import Header from "../../Components/HeaderFooter/Header";
import VideoSection from "../../Components/VideoSection";
import IlProgettoSection from "../../Components/IlProgettoSection";
import BonusesSection from "../../Components/BonusesSection";
import FeaturesGridSection from "../../Components/FeaturesGridSection";
import PersonalizeSection from "../../Components/PersonalizeSection";
import GallerySection from "../../Components/GallerySection";
import LocationSection from "../../Components/LocationSection";
import AvailabilitySection from "../../Components/AvailabilitySection";
import ContactFormSection from "../../Components/ContactFormSection";
import FloorPlansSection from "../../Components/FloorPlansSection";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoId = "VRnYsvOHryc"; // আপনার প্রজেক্টের ইউটিউব ভিডিও আইডি

  return (
    <div>
      <Title>Bazachi Green | Home</Title>

      <Header />

      {/* Hero Section with Video Modal Trigger */}
      <HeroSection
        imageSrc={HeroImage}
        contactHref="#contatti"
        onVideoClick={() => setIsModalOpen(true)}
      />

      {/* Video Section (Includes Floating Mini Player feature) */}
      <VideoSection
        youtubeVideoId={videoId}
        title="Un nuovo modo di vivere la casa"
        description="Guarda il video e scopri come nasce Bazachi Green: dalle prime fasi di progettazione alla realizzazione delle ville, con tutti i dettagli che le rendono uniche."
        videoHref="#video"
        onOpenModal={() => setIsModalOpen(true)}
      />

      <IlProgettoSection />
      <BonusesSection />
      <FloorPlansSection />
      <FeaturesGridSection />
      <PersonalizeSection />
      <GallerySection />
      <LocationSection />
      <AvailabilitySection />
      <ContactFormSection />

      {/* ================= GLOBAL FULLSCREEN VIDEO MODAL ================= */}
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
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1`}
              title="Bazachi Green Presentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
