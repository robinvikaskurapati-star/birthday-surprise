import React from 'react';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';
import { personalization } from '../data/personalization';
import { soundEffects } from '../utils/soundEffects';

export default function Footer({ onReplay }) {
  const handleScrollTop = () => {
    soundEffects.playPop();
    if (onReplay) {
      onReplay();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-14 px-4 bg-[#fff0f4] border-t border-pink-200/60 text-center relative z-20">
      <div className="max-w-md mx-auto flex flex-col items-center gap-3">
        <div className="flex items-center gap-2 text-pink-500">
          <Sparkles className="w-4 h-4" />
          <Heart className="w-5 h-5 fill-pink-500 animate-pulse" />
          <Sparkles className="w-4 h-4" />
        </div>

        <p className="text-sm font-medium text-gray-700">
          Handcrafted with endless love by{' '}
          <span className="font-bold text-pink-600">{personalization.sender?.name || 'Robin'}</span> for{' '}
          <span className="font-bold text-pink-600">{personalization.recipient?.name || 'My Sweetheart'}</span>
        </p>

        <p className="text-xs text-gray-400 font-light">
          Happy Birthday to my favorite human in the entire universe. 🎂✨
        </p>

        <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-pink-500 font-mono">
          <span>Forever & Always • {new Date().getFullYear()}</span>
          <button
            onClick={handleScrollTop}
            className="hover:underline flex items-center gap-1 cursor-pointer font-sans text-pink-600 font-semibold"
            title="Start our story again from the heart opening"
          >
            <ArrowUp className="w-3 h-3" /> Replay From Start
          </button>
        </div>
      </div>
    </footer>
  );
}
