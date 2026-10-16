import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Wind, Flame, Check } from 'lucide-react';
import { personalization } from '../data/personalization';

export default function CakeSection() {
  const [candlesLit, setCandlesLit] = useState(true);
  const [wishText, setWishText] = useState('');
  const [wishSaved, setWishSaved] = useState(false);
  const [hasBlownOut, setHasBlownOut] = useState(false);

  const blowOutCandles = () => {
    if (!candlesLit) return;
    setCandlesLit(false);
    setHasBlownOut(true);

    // Fire big celebratory confetti shower
    try {
      const count = 200;
      const defaults = {
        origin: { y: 0.7 },
        colors: ['#ff6b8b', '#ff8da1', '#ffc2d1', '#ffe5ec', '#ffd166', '#a0c4ff'],
      };

      function fire(particleRatio, opts) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
        });
      }

      fire(0.25, { spread: 26, startVelocity: 55 });
      fire(0.2, { spread: 60 });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
      fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
      fire(0.1, { spread: 120, startVelocity: 45 });
    } catch {
      // Confetti fallback
    }
  };

  const relightCandles = () => {
    setCandlesLit(true);
  };

  const saveWish = (e) => {
    e.preventDefault();
    if (!wishText.trim()) return;
    try {
      localStorage.setItem('birthday_surprise_secret_wish', wishText);
    } catch {}
    setWishSaved(true);
    setTimeout(() => setWishSaved(false), 4000);
  };

  return (
    <section id="birthday-cake" className="py-20 px-4 relative overflow-hidden bg-[#fff5f7]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/80 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Celebration</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-gray-900 mb-3">
          {personalization.cake.sectionTitle}
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto text-base sm:text-lg font-light mb-10">
          {personalization.cake.sectionSubtitle}
        </p>

        {/* Illustrated Birthday Cake Container */}
        <div className="relative mx-auto w-[280px] sm:w-[320px] h-[310px] flex flex-col items-center justify-end select-none group">
          {/* Candles Row */}
          <div className="absolute top-[28px] flex items-end justify-center gap-6 sm:gap-8 z-30">
            {[1, 2, 3].map((candleIndex) => (
              <div
                key={candleIndex}
                onClick={blowOutCandles}
                className="cursor-pointer flex flex-col items-center relative"
                title="Tap to blow out!"
              >
                {/* Flame or Smoke */}
                {candlesLit ? (
                  <div className="relative mb-1 flex items-center justify-center">
                    {/* Outer glow */}
                    <div className="w-5 h-7 rounded-full bg-gradient-to-t from-orange-400 via-yellow-300 to-white candle-flame shadow-lg shadow-yellow-300/80" />
                    <div className="absolute w-2 h-3 rounded-full bg-blue-300/70 bottom-0" />
                  </div>
                ) : (
                  <div className="h-7 flex items-center justify-center relative">
                    <div className="smoke-puff text-xs opacity-70">💨</div>
                  </div>
                )}

                {/* Candle Stick */}
                <div className="w-4 h-14 rounded-t-sm bg-gradient-to-r from-pink-300 via-white to-pink-300 shadow-md border-t border-pink-400 relative overflow-hidden">
                  {/* Decorative diagonal stripes */}
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#f472b6,#f472b6_3px,transparent_3px,transparent_6px)] opacity-50" />
                </div>
              </div>
            ))}
          </div>

          {/* Top Cake Tier */}
          <div className="relative z-20 w-[180px] sm:w-[200px] h-[75px] bg-gradient-to-b from-[#ffd1dc] to-[#fbaac0] rounded-t-2xl shadow-md border-t-4 border-white/80 flex items-center justify-center">
            {/* Frosting Drips */}
            <div className="absolute -bottom-2 inset-x-0 flex justify-around">
              <span className="w-6 h-4 bg-[#fbaac0] rounded-b-full"></span>
              <span className="w-5 h-6 bg-[#fbaac0] rounded-b-full"></span>
              <span className="w-7 h-5 bg-[#fbaac0] rounded-b-full"></span>
              <span className="w-6 h-6 bg-[#fbaac0] rounded-b-full"></span>
              <span className="w-5 h-4 bg-[#fbaac0] rounded-b-full"></span>
            </div>
            {/* Strawberries / Cherries on top */}
            <div className="absolute -top-3 inset-x-4 flex justify-between px-2">
              <span className="text-sm">🍓</span>
              <span className="text-sm">🍒</span>
              <span className="text-sm">🍓</span>
            </div>
            <span className="text-white font-handwriting text-lg font-bold tracking-wide drop-shadow">Sweet Love</span>
          </div>

          {/* Bottom Cake Tier */}
          <div className="relative z-10 w-[240px] sm:w-[270px] h-[95px] bg-gradient-to-b from-[#ffb6c7] to-[#f4759c] rounded-t-3xl shadow-lg border-t-4 border-white/80 flex flex-col items-center justify-center overflow-hidden">
            {/* Cream Piping / Pearl Garland */}
            <div className="absolute top-2 inset-x-2 flex justify-around text-[10px] text-white/90">
              <span>●</span><span>●</span><span>●</span><span>●</span><span>●</span><span>●</span><span>●</span><span>●</span><span>●</span>
            </div>
            <div className="text-white font-handwriting text-2xl font-bold tracking-wider drop-shadow-md">
              Happy Birthday 🎂
            </div>
            {/* Sprinkles */}
            <div className="absolute bottom-2 inset-x-4 flex justify-between text-xs opacity-75">
              <span>✨</span><span>💖</span><span>🌸</span><span>💖</span><span>✨</span>
            </div>
          </div>

          {/* Cake Stand / Platter */}
          <div className="w-[280px] sm:w-[310px] h-[16px] bg-gradient-to-r from-gray-200 via-white to-gray-200 rounded-full shadow-xl border-t border-gray-100 z-10" />
          <div className="w-[100px] h-[14px] bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-lg shadow-sm" />
        </div>

        {/* Interactive Controls & Status */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="text-sm sm:text-base font-medium text-pink-700 transition-all duration-300">
            {candlesLit ? personalization.cake.instructionBefore : personalization.cake.instructionAfter}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {candlesLit ? (
              <button
                onClick={blowOutCandles}
                className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500 hover:bg-pink-600 active:scale-95 text-white font-semibold rounded-full shadow-md shadow-pink-500/20 transition-all duration-200"
              >
                <Wind className="w-4 h-4" />
                <span>Blow Out Candles 💨</span>
              </button>
            ) : (
              <button
                onClick={relightCandles}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-pink-300 hover:bg-pink-50 text-pink-600 font-semibold rounded-full shadow-sm transition-all duration-200 text-sm"
              >
                <Flame className="w-4 h-4 text-orange-500" />
                <span>Relight Candles 🕯️</span>
              </button>
            )}
          </div>
        </div>

        {/* Secret Wish Card (Appears after blowing out candles) */}
        {hasBlownOut && (
          <div className="mt-10 max-w-md mx-auto romantic-glass rounded-2xl p-6 shadow-xl border border-pink-200/80 transition-all animate-float-slow">
            <h3 className="text-lg font-semibold text-pink-800 flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span>Make Your Birthday Wish ✨</span>
            </h3>
            <p className="text-xs text-gray-600 mb-4 font-light">
              Type your secret wish below. Your wish will be safely locked in your heart!
            </p>

            <form onSubmit={saveWish} className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="text"
                  value={wishText}
                  onChange={(e) => setWishText(e.target.value)}
                  placeholder={personalization.cake.secretWishPlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-sm bg-white/90 text-gray-800 placeholder-pink-300"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white font-medium rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Seal My Wish With Love 💌</span>
              </button>
            </form>

            {wishSaved && (
              <div className="mt-3 text-xs text-emerald-600 font-medium flex items-center justify-center gap-1.5 animate-pulse">
                <Check className="w-3.5 h-3.5" />
                <span>{personalization.cake.wishSavedMessage}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
