import React from 'react';
import FloatingHearts from './components/FloatingHearts';
import BackgroundMusic from './components/BackgroundMusic';
import HeroSection from './components/HeroSection';
import DaysCounter from './components/DaysCounter';
import CakeSection from './components/CakeSection';
import TimelineSection from './components/TimelineSection';
import GallerySection from './components/GallerySection';
import ReasonsSection from './components/ReasonsSection';
import LoveLetterSection from './components/LoveLetterSection';
import LoveQuizSection from './components/LoveQuizSection';
import FinalSurpriseSection from './components/FinalSurpriseSection';
import Footer from './components/Footer';

export default function App() {
  const handleExplore = () => {
    const cakeEl = document.getElementById('birthday-cake');
    if (cakeEl) {
      cakeEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fff9fa] text-gray-800 relative selection:bg-pink-200 selection:text-pink-900">
      {/* Background Floating Hearts & Click Sparkles */}
      <FloatingHearts />

      {/* Persistent Floating Romantic Background Music Player */}
      <BackgroundMusic />

      {/* Main Sections */}
      <main>
        <HeroSection onExploreClick={handleExplore} />
        <DaysCounter />
        <CakeSection />
        <TimelineSection />
        <GallerySection />
        <ReasonsSection />
        <LoveLetterSection />
        <LoveQuizSection />
        <FinalSurpriseSection onReplay={handleReplay} />
      </main>

      {/* Romantic Footer */}
      <Footer />
    </div>
  );
}
