import React from 'react';
import { Sparkles, Heart, ChevronDown, Gift } from 'lucide-react';
import { personalization } from '../data/personalization';

export default function HeroSection({ onExploreClick }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden bg-gradient-to-b from-[#fff0f4] via-[#fff7f9] to-[#fff5f7]">
      {/* Decorative cute background elements */}
      <div className="absolute top-10 left-10 text-pink-200 text-6xl select-none animate-float opacity-70 pointer-events-none">
        🎀
      </div>
      <div className="absolute top-16 right-12 text-pink-200 text-5xl select-none animate-float-slow opacity-70 pointer-events-none">
        ✨
      </div>
      <div className="absolute bottom-20 left-12 text-pink-200 text-5xl select-none animate-float-slow opacity-60 pointer-events-none">
        🌸
      </div>
      <div className="absolute bottom-24 right-14 text-pink-200 text-6xl select-none animate-float opacity-70 pointer-events-none">
        💖
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Cute top pill badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 border border-pink-200 text-pink-600 text-sm font-semibold tracking-wide shadow-sm mb-6 animate-pulse">
          <Sparkles className="w-4 h-4 text-pink-500" />
          <span>{personalization.hero.badge || 'Today is your special day ✨'}</span>
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
        </div>

        {/* Personalized Big Greeting */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-gray-900 tracking-tight leading-[1.15] mb-4">
          <span className="block text-romantic-600 font-handwriting text-5xl sm:text-7xl md:text-8xl mb-2 drop-shadow-sm">
            {personalization.hero.greeting}
          </span>
          <span className="text-gray-800 text-2xl sm:text-3xl md:text-4xl font-normal block mt-2">
            Celebrating <span className="font-semibold text-romantic-500 underline decoration-pink-300 decoration-wavy underline-offset-8">{personalization.recipient.name}</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto font-light leading-relaxed">
          {personalization.hero.subtitle}
        </p>

        {/* Romantic Call-To-Action Button */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <button
            onClick={onExploreClick}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 bg-size-200 hover:bg-right text-white font-semibold rounded-full shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 text-lg"
          >
            <Gift className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <span>{personalization.hero.buttonText}</span>
            <span className="text-pink-100 group-hover:translate-x-1 transition-transform">→</span>
          </button>

          <p className="text-xs text-pink-600/70 font-medium tracking-wide flex items-center gap-1.5 mt-2">
            <span>{personalization.hero.hintText}</span>
          </p>
        </div>

        {/* Subtle scroll down indicator */}
        <div
          onClick={onExploreClick}
          className="cursor-pointer mt-16 text-pink-400 hover:text-pink-600 transition-colors animate-bounce flex flex-col items-center gap-1"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-pink-400">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
