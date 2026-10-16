import React, { useState } from 'react';
import { Heart, Sparkles, Smile, Music, Gift, Sun, Coffee, Check, Star } from 'lucide-react';
import { personalization } from '../data/personalization';

export default function ReasonsSection() {
  const [openedReasons, setOpenedReasons] = useState({});

  const toggleReason = (id) => {
    setOpenedReasons((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const openAll = () => {
    const all = {};
    personalization.reasons.forEach((r) => {
      all[r.id] = true;
    });
    setOpenedReasons(all);
  };

  const openedCount = Object.values(openedReasons).filter(Boolean).length;
  const totalCount = personalization.reasons.length;

  const getReasonIcon = (iconName) => {
    switch (iconName) {
      case 'smile':
        return <Smile className="w-5 h-5 text-pink-500" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'music':
        return <Music className="w-5 h-5 text-rose-500" />;
      case 'heart':
      case 'handHeart':
        return <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />;
      case 'gift':
        return <Gift className="w-5 h-5 text-purple-500" />;
      case 'coffee':
        return <Coffee className="w-5 h-5 text-amber-600" />;
      case 'sun':
        return <Sun className="w-5 h-5 text-orange-500" />;
      default:
        return <Heart className="w-5 h-5 text-pink-500" />;
    }
  };

  return (
    <section id="reasons" className="py-20 px-4 relative bg-[#fff9fa]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-pink-600" />
            <span>From The Depths Of My Heart</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-gray-900 mb-3">
            A Few Reasons Why You're My Favorite Person 💗
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto text-base sm:text-lg font-light mb-6">
            Tap each card to reveal one of the countless reasons why I adore you.
          </p>

          {/* Progress Pill */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-pink-200 shadow-sm text-xs font-medium text-pink-700">
            <span>
              Revealed: <strong className="font-bold">{openedCount}</strong> of {totalCount} reasons
            </span>
            {openedCount < totalCount && (
              <button
                onClick={openAll}
                className="underline text-pink-500 hover:text-pink-700 transition-colors ml-2 font-semibold"
              >
                Reveal All
              </button>
            )}
            {openedCount === totalCount && (
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> All Opened!
              </span>
            )}
          </div>
        </div>

        {/* Reasons Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalization.reasons.map((item, index) => {
            const isOpened = !!openedReasons[item.id];

            return (
              <div
                key={item.id}
                onClick={() => toggleReason(item.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative select-none border flex flex-col justify-between min-h-[220px] ${
                  isOpened
                    ? 'bg-white shadow-lg border-pink-300 -translate-y-1'
                    : 'bg-white/80 hover:bg-white shadow-sm hover:shadow-md border-pink-100/90'
                }`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                      {getReasonIcon(item.icon)}
                    </span>
                    <span className="text-[11px] font-bold text-pink-400 font-mono">
                      #{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-gray-800 text-lg mb-2">
                    {item.title}
                  </h3>

                  {/* Body Content */}
                  {isOpened ? (
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light animate-fadeIn">
                      {item.reason}
                    </p>
                  ) : (
                    <div className="py-6 flex flex-col items-center justify-center text-center text-pink-400 group-hover:text-pink-600 transition-colors">
                      <Heart className="w-6 h-6 animate-pulse" />
                      <span className="text-xs font-medium mt-2">Tap to read 💕</span>
                    </div>
                  )}
                </div>

                {/* Bottom hint */}
                <div className="mt-4 pt-3 border-t border-pink-50 flex items-center justify-between text-[11px] text-pink-400">
                  <span>{isOpened ? 'Read with love' : 'Hidden message'}</span>
                  <span className="text-xs">{isOpened ? '💖' : '💌'}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
