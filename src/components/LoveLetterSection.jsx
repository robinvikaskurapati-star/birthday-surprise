import React, { useState } from 'react';
import { Mail, Heart, Sparkles, Send } from 'lucide-react';
import { personalization } from '../data/personalization';
import { soundEffects } from '../utils/soundEffects';

export default function LoveLetterSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [unfoldedStep, setUnfoldedStep] = useState(0); // 0 = sealed, 1 = flap open, 2 = slide out, 3 = unfolded

  const letterData = personalization.loveLetter || {};

  const handleOpenLetter = () => {
    if (isOpen) return;
    soundEffects.playPaperUnfold();
    setIsOpen(true);
    setUnfoldedStep(1);

    // Step 2: slide out
    setTimeout(() => {
      setUnfoldedStep(2);
    }, 400);

    // Step 3: full unfold & typewriter paragraphs
    setTimeout(() => {
      setUnfoldedStep(3);
    }, 800);
  };

  const handleResealLetter = () => {
    soundEffects.playPaperUnfold();
    setUnfoldedStep(0);
    setTimeout(() => {
      setIsOpen(false);
    }, 400);
  };

  return (
    <section id="love-letter" className="py-24 px-4 relative bg-[#fff4f7] overflow-hidden">
      {/* Decorative floating stamps / hearts */}
      <div className="absolute top-12 left-10 text-4xl select-none animate-float opacity-50 pointer-events-none">
        💌
      </div>
      <div className="absolute bottom-14 right-10 text-4xl select-none animate-float-slow opacity-50 pointer-events-none">
        🌸
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Mail className="w-3.5 h-3.5" />
          <span>A Sealed Keepsake</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-gray-900 mb-3">
          The Personal Love Letter 💌
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto text-base sm:text-lg font-light mb-12 leading-relaxed">
          Written straight from my heart, sealed just for your eyes on your special day.
        </p>

        {/* Envelope & Letter Interactive Container */}
        <div className="relative mx-auto max-w-xl">
          {!isOpen ? (
            /* Step 0: Sealed Envelope with Wax Seal */
            <div
              onClick={handleOpenLetter}
              className="cursor-pointer group relative mx-auto w-full max-w-md h-64 bg-gradient-to-br from-[#ffdbe3] via-[#ffccd7] to-[#fbaac0] rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center justify-center p-6 border-2 border-white select-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenLetter();
                }
              }}
              aria-label="Sealed Love Letter. Tap to open."
            >
              {/* Envelope Flap Triangle Design */}
              <div
                className="absolute top-0 inset-x-0 h-28 bg-[#fba0b9] rounded-b-[40px] shadow-md border-b-2 border-white/60 flex items-center justify-center transition-transform group-hover:scale-[1.01]"
              >
                {/* Wax Seal Badge with Pulse */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 shadow-lg border-2 border-rose-300 flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Heart className="w-7 h-7 fill-white animate-pulse" />
                </div>
              </div>

              <div className="mt-24 text-center z-10">
                <p className="font-handwriting text-3xl font-bold text-rose-800 drop-shadow-sm">
                  {letterData.envelopePrompt || 'A Sealed Letter For You 💌 (Tap to Open)'}
                </p>
                <span className="text-xs text-rose-700 font-semibold tracking-wide mt-1 block">
                  Tap to unseal and read ✨
                </span>
              </div>
            </div>
          ) : (
            /* Unfolded Love Letter with gentle line-by-line reveal */
            <div className={`romantic-glass rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-pink-200/90 text-left relative transition-all duration-500 ${
              unfoldedStep >= 3 ? 'animate-fadeIn scale-100' : 'scale-95 opacity-90'
            }`}>
              {/* Decorative stamp in top right corner */}
              <div className="absolute top-6 right-6 w-14 h-16 border-2 border-dashed border-pink-400/60 rounded-md p-1 flex flex-col items-center justify-center text-center bg-white/70 shadow-sm">
                <span className="text-sm">💌</span>
                <span className="text-[8px] font-bold text-pink-600 uppercase mt-0.5 tracking-tighter">Love Mail</span>
              </div>

              {/* Salutation */}
              <h3 className="font-handwriting text-3xl sm:text-4xl font-bold text-romantic-700 mb-6">
                {letterData.salutation || 'My Dearest,'}
              </h3>

              {/* Letter Paragraphs with Staggered Fade In */}
              <div className="space-y-4 text-gray-700 font-sans text-base sm:text-lg font-light leading-relaxed">
                {(letterData.paragraphs || []).map((para, i) => (
                  <p
                    key={i}
                    className="first-letter:text-2xl first-letter:font-serif first-letter:text-pink-600 animate-fadeIn"
                    style={{ animationDelay: `${i * 180}ms` }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Closing & Signature */}
              <div className="mt-8 pt-6 border-t border-pink-200/80">
                <p className="font-serif italic text-sm text-gray-500">
                  {letterData.closing || 'With all my heart and love,'}
                </p>
                <p className="font-handwriting text-3xl sm:text-4xl font-bold text-romantic-600 mt-2">
                  {letterData.signature || 'Forever your person, Dileep 💗'}
                </p>
              </div>

              {/* Reseal button */}
              <div className="mt-8 text-center">
                <button
                  onClick={handleResealLetter}
                  className="px-6 py-2.5 bg-pink-100 hover:bg-pink-200 text-pink-700 text-xs font-semibold rounded-full tracking-wider uppercase transition-colors cursor-pointer"
                >
                  Seal Letter Again 💌
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
