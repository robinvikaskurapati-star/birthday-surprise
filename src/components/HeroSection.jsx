import React from 'react';
import { Sparkles, Heart, ChevronDown, Camera } from 'lucide-react';
import { personalization } from '../data/personalization';
import { soundEffects } from '../utils/soundEffects';

export default function HeroSection({ onExploreClick }) {
  const handleButtonClick = () => {
    soundEffects.playPop();
    if (onExploreClick) {
      onExploreClick();
    } else {
      const el = document.getElementById('memories');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#fff0f4] via-[#fff7f9] to-[#fff5f7]"
    >
      {/* Decorative cute background elements */}
      <div className="absolute top-12 left-10 text-pink-300 text-5xl select-none animate-float opacity-70 pointer-events-none">
        🎀
      </div>
      <div className="absolute top-20 right-12 text-pink-300 text-4xl select-none animate-float-slow opacity-70 pointer-events-none">
        ✨
      </div>
      <div className="absolute bottom-20 left-12 text-pink-300 text-4xl select-none animate-float-slow opacity-60 pointer-events-none">
        🌸
      </div>
      <div className="absolute bottom-24 right-14 text-pink-300 text-5xl select-none animate-float opacity-70 pointer-events-none">
        💖
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center animate-fadeIn">
        {/* Cute top pill badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/95 border border-pink-200 text-pink-600 text-sm font-semibold tracking-wide shadow-sm mb-6 animate-pulse">
          <Sparkles className="w-4 h-4 text-pink-500" />
          <span>{personalization.hero.badge || 'Today is your special day ✨'}</span>
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
        </div>

        {/* Personalized Big Greeting */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-gray-900 tracking-tight leading-[1.18] mb-4">
          <span className="block text-romantic-600 font-handwriting text-5xl sm:text-7xl md:text-8xl mb-2 drop-shadow-sm animate-pulse" style={{ animationDuration: '3s' }}>
            {personalization.hero.greeting || 'Happy Birthday, My Love! 🎂💗'}
          </span>
          <span className="text-gray-800 text-2xl sm:text-3xl md:text-4xl font-normal block mt-2">
            Celebrating{' '}
            <span className="font-semibold text-romantic-500 underline decoration-pink-300 decoration-wavy underline-offset-8">
              {personalization.recipient.name}
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto font-light leading-relaxed">
          {personalization.hero.subtitle || 'Today is all about you, my favorite person.'}
        </p>

        {/* Cute Birthday SVG Illustration */}
        <div className="my-8 relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center animate-float-slow select-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-200/50 to-rose-200/30 rounded-full blur-xl pointer-events-none" />
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
            {/* Soft background circle */}
            <circle cx="100" cy="100" r="85" fill="#fff0f5" stroke="#fed2dc" strokeWidth="2" strokeDasharray="4 4" />
            
            {/* Floating balloons */}
            <g className="animate-float">
              <path d="M 60,65 C 60,40 80,35 80,60 C 80,78 68,90 60,95 C 52,90 40,78 40,60 C 40,35 60,40 60,65 Z" fill="#ff8da1" opacity="0.9" />
              <path d="M 60,95 L 60,125" stroke="#f472b6" strokeWidth="1.5" />
            </g>
            <g className="animate-float-slow">
              <path d="M 140,60 C 140,35 160,30 160,55 C 160,73 148,85 140,90 C 132,85 120,73 120,55 C 120,30 140,35 140,60 Z" fill="#fbaac0" opacity="0.85" />
              <path d="M 140,90 L 140,125" stroke="#f472b6" strokeWidth="1.5" />
            </g>

            {/* Cute Birthday Present Box with Ribbon */}
            <rect x="75" y="115" width="50" height="45" rx="6" fill="#ffd1dc" stroke="#f472b6" strokeWidth="2" />
            <rect x="72" y="105" width="56" height="14" rx="4" fill="#ffb6c7" stroke="#f472b6" strokeWidth="2" />
            {/* Vertical ribbon */}
            <rect x="95" y="105" width="10" height="55" fill="#f43f68" />
            {/* Ribbon Bow */}
            <path d="M 100,105 C 85,90 85,100 100,105 Z" fill="#f43f68" />
            <path d="M 100,105 C 115,90 115,100 100,105 Z" fill="#f43f68" />
            <circle cx="100" cy="105" r="4" fill="#ffd166" />

            {/* Sparkles around box */}
            <text x="50" y="140" fontSize="16">✨</text>
            <text x="135" y="145" fontSize="16">💖</text>
            <text x="92" y="50" fontSize="18">👑</text>
          </svg>
        </div>

        {/* Romantic Call-To-Action Button */}
        <div className="mt-4 flex flex-col items-center gap-3">
          <button
            onClick={handleButtonClick}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 bg-size-200 hover:bg-right text-white font-semibold rounded-full shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 text-lg cursor-pointer"
          >
            <Camera className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <span>{personalization.hero.buttonText || "Let's Explore Our Memories 💕"}</span>
            <span className="text-pink-100 group-hover:translate-x-1 transition-transform">→</span>
          </button>

          <p className="text-xs text-pink-600/75 font-medium tracking-wide flex items-center gap-1.5 mt-2">
            <span>{personalization.hero.hintText || 'Scroll down or click to begin our journey 💕'}</span>
          </p>
        </div>

        {/* Scroll down indicator */}
        <div
          onClick={handleButtonClick}
          className="cursor-pointer mt-12 text-pink-400 hover:text-pink-600 transition-colors animate-bounce flex flex-col items-center gap-1"
        >
          <span className="text-[11px] font-semibold tracking-widest uppercase text-pink-400">Explore Memories</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
