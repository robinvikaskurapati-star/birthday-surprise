import React, { useState } from 'react';
import HeartOpeningScreen from './components/HeartOpeningScreen';
import SurpriseNavBar from './components/SurpriseNavBar';
import CursorHeartTrail from './components/CursorHeartTrail';
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
  // State: whether the initial heart has been pulled/opened
  const [isHeartOpened, setIsHeartOpened] = useState(false);

  const handleHeartOpenComplete = () => {
    setIsHeartOpened(true);
    // Smooth scroll to top of experience
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplay = () => {
    // Scroll to top and reset heart opening screen
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsHeartOpened(false);
    }, 300);
  };

  const handleExploreMemories = () => {
    const memoriesEl = document.getElementById('memories');
    if (memoriesEl) {
      memoriesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fff9fa] text-gray-800 relative selection:bg-pink-200 selection:text-pink-900">
      {/* SECTION A: The Little Heart Opening Entrance */}
      {!isHeartOpened && (
        <HeartOpeningScreen onOpenComplete={handleHeartOpenComplete} />
      )}

      {/* Floating Desktop Heart Cursor Trail (Extra Creative Feature #1) */}
      <CursorHeartTrail />

      {/* Background Floating Hearts & Tap Sparkles */}
      <FloatingHearts />

      {/* Persistent Floating Romantic Background Music Player (Section J) */}
      <BackgroundMusic />

      {/* Once the heart is opened, reveal the full birthday experience */}
      {isHeartOpened && (
        <>
          {/* Quick Journey Navigation & Progress Meter (Extra Creative Features #3 & #5) */}
          <SurpriseNavBar />

          <main className="transition-opacity duration-1000 animate-fadeIn">
            {/* SECTION B: Personalized Birthday Welcome */}
            <HeroSection onExploreClick={handleExploreMemories} />

            {/* SECTION H: Days Together Counter */}
            <DaysCounter />

            {/* SECTION F: Interactive Birthday Cake */}
            <CakeSection />

            {/* SECTION D: Our Love Story Timeline */}
            <TimelineSection />

            {/* SECTION C: Our Memories Inside The Heart (Scrapbook & Polaroids) */}
            <GallerySection />

            {/* SECTION E: A Few Reasons Why You're My Favorite Person 💗 */}
            <ReasonsSection />

            {/* SECTION G: The Personal Love Letter */}
            <LoveLetterSection />

            {/* SECTION I: Cute Love Quiz */}
            <LoveQuizSection />

            {/* SECTION K: The Final Surprise */}
            <FinalSurpriseSection onReplay={handleReplay} />
          </main>

          {/* Romantic Scrapbook Footer */}
          <Footer onReplay={handleReplay} />
        </>
      )}
    </div>
  );
}
