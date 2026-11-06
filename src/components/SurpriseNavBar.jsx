import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Image, BookOpen, Gift, Mail, HelpCircle, Crown, Volume2, VolumeX } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

export default function SurpriseNavBar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(soundEffects.getMuted());

  const navItems = [
    { id: 'hero', label: 'Welcome', icon: Sparkles },
    { id: 'birthday-cake', label: 'Cake', icon: Gift },
    { id: 'memories', label: 'Memories', icon: Image },
    { id: 'our-story', label: 'Our Story', icon: BookOpen },
    { id: 'reasons', label: 'Reasons', icon: Heart },
    { id: 'love-letter', label: 'Letter', icon: Mail },
    { id: 'quiz', label: 'Quiz', icon: HelpCircle },
    { id: 'final-surprise', label: 'Surprise', icon: Crown },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const pct = totalScroll > 0 ? Math.min(100, Math.round((currentScroll / totalScroll) * 100)) : 0;
      setScrollProgress(pct);

      // Determine active section
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    soundEffects.playPop();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    const next = !isMuted;
    setIsMuted(next);
    soundEffects.setMuted(next);
  };

  return (
    <header className="fixed top-3 inset-x-0 z-40 px-3 flex justify-center pointer-events-none">
      <div className="pointer-events-auto max-w-2xl w-full bg-white/90 backdrop-blur-md border border-pink-200/90 rounded-full shadow-lg shadow-pink-500/10 py-1.5 px-3 flex items-center justify-between gap-2 transition-all">
        {/* Left: Journey Progress */}
        <div className="flex items-center gap-2 pl-2">
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse flex-shrink-0" />
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-pink-700 uppercase tracking-wider leading-none">
              Surprise Journey
            </span>
            <span className="text-[10px] text-gray-500 font-mono leading-tight">
              {scrollProgress}% Explored
            </span>
          </div>
        </div>

        {/* Center: Navigation quick links (icons on mobile, text on desktop) */}
        <nav className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none" aria-label="Quick Surprise Navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-sm scale-105'
                    : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                }`}
                title={item.label}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right: Sound effects mute toggle */}
        <div className="flex items-center gap-1.5 pr-1">
          <button
            onClick={toggleSound}
            className="p-1.5 rounded-full text-pink-600 hover:bg-pink-100/70 transition-colors cursor-pointer"
            title={isMuted ? 'Unmute sound effects' : 'Mute sound effects'}
            aria-label="Toggle sound effects"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-gray-400" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
