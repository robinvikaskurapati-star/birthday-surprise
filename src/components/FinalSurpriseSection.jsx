import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Crown, ArrowUp, Gift, Star } from 'lucide-react';
import { personalization } from '../data/personalization';

export default function FinalSurpriseSection({ onReplay }) {
  const [revealed, setRevealed] = useState(false);
  const surprise = personalization.finalSurprise;

  const triggerSurprise = () => {
    setRevealed(true);

    // Multi-shot fireworks confetti celebration
    const end = Date.now() + 3.5 * 1000;
    const colors = ['#f43f68', '#ec487f', '#ffd166', '#a0c4ff', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <section id="final-surprise" className="py-24 px-4 relative bg-gradient-to-b from-[#fff4f7] via-[#ffeef3] to-[#ffe5ec] overflow-hidden text-center">
      {/* Decorative floating stickers */}
      <div className="absolute top-10 left-10 text-4xl select-none animate-float opacity-70 pointer-events-none">
        👑
      </div>
      <div className="absolute bottom-16 right-12 text-4xl select-none animate-float-slow opacity-70 pointer-events-none">
        🌸
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {!revealed ? (
          /* Locked Final Surprise Button Screen */
          <div className="py-12 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-white/90 border-2 border-pink-300 shadow-xl flex items-center justify-center text-pink-500 mb-6 animate-pulse">
              <Gift className="w-12 h-12" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
              Before You Go...
            </h2>
            <p className="text-gray-600 max-w-md mx-auto text-base sm:text-lg font-light mb-8">
              There is one more thing I want to tell you before this day ends.
            </p>

            <button
              onClick={triggerSurprise}
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-bold text-lg sm:text-xl rounded-full shadow-xl shadow-pink-500/30 hover:shadow-2xl hover:shadow-pink-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Sparkles className="w-6 h-6 animate-spin" style={{ animationDuration: '4s' }} />
              <span>{surprise.buttonPrompt}</span>
              <Heart className="w-6 h-6 fill-white animate-bounce" />
            </button>
          </div>
        ) : (
          /* Emotional Grand Reveal Screen */
          <div className="romantic-glass rounded-3xl p-8 sm:p-14 shadow-2xl border-2 border-pink-300/80 text-center relative transition-all duration-700 animate-fadeIn">
            {/* Crown Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-pink-500 text-white shadow-lg mb-6 animate-bounce">
              <Crown className="w-8 h-8" />
            </div>

            {/* Grand Birthday Wish Title */}
            <h2 className="text-4xl sm:text-6xl font-handwriting font-bold text-romantic-600 mb-4 leading-tight drop-shadow-sm">
              {surprise.title}
            </h2>

            {/* Beautiful Message */}
            <div className="my-8 space-y-4 max-w-xl mx-auto">
              <p className="text-lg sm:text-2xl text-gray-800 font-display font-medium leading-relaxed">
                "{surprise.message}"
              </p>
              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                {surprise.subMessage}
              </p>
            </div>

            {/* Robin's Signature */}
            <div className="mt-8 pt-6 border-t border-pink-200/80">
              <p className="font-handwriting text-3xl sm:text-4xl font-bold text-romantic-700">
                {surprise.signature}
              </p>
            </div>

            {/* Return to beginning / replay button */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onReplay}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-pink-300 text-pink-600 hover:bg-pink-50 font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <ArrowUp className="w-4 h-4" />
                <span>{surprise.replayButton}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
