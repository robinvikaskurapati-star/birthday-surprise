import React, { useState, useEffect } from 'react';
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
import LockScreen from './components/LockScreen';
import { personalization } from './data/personalization';

export default function App() {
  const security = personalization.security || {};
  const isSecurityEnabled = security.enabled !== false;

  const [isUnlocked, setIsUnlocked] = useState(!isSecurityEnabled);

  useEffect(() => {
    if (!isSecurityEnabled) return;

    // 1. Check if previously unlocked in this browser
    const stored = localStorage.getItem('birthday_site_unlocked');
    if (stored === 'true') {
      setIsUnlocked(true);
      return;
    }

    // 2. Check for magic private URL parameter (e.g. ?key=surprise or ?pass=love)
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const keyParam = urlParams.get('key') || urlParams.get('pass');
      const expectedKey = (security.magicKey || 'surprise').toLowerCase();
      const expectedPass = (security.passcode || 'love').toLowerCase();

      if (keyParam && (keyParam.toLowerCase() === expectedKey || keyParam.toLowerCase() === expectedPass)) {
        setIsUnlocked(true);
        localStorage.setItem('birthday_site_unlocked', 'true');
      }
    } catch {}
  }, [isSecurityEnabled, security.magicKey, security.passcode]);

  const handleUnlock = () => {
    setIsUnlocked(true);
    localStorage.setItem('birthday_site_unlocked', 'true');
  };

  const handleLockAgain = () => {
    localStorage.removeItem('birthday_site_unlocked');
    setIsUnlocked(false);
  };

  const handleExplore = () => {
    const cakeEl = document.getElementById('birthday-cake');
    if (cakeEl) {
      cakeEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If locked, render lock screen
  if (!isUnlocked) {
    return (
      <div className="relative">
        <FloatingHearts />
        <LockScreen onUnlock={handleUnlock} />
      </div>
    );
  }

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
      <Footer onLock={isSecurityEnabled ? handleLockAgain : null} />
    </div>
  );
}
