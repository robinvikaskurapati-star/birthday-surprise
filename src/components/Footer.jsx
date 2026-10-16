import React from 'react';
import { Heart, Sparkles, Lock } from 'lucide-react';
import { personalization } from '../data/personalization';

export default function Footer({ onLock }) {
  return (
    <footer className="py-12 px-4 bg-[#fff0f4] border-t border-pink-200/60 text-center relative z-20">
      <div className="max-w-md mx-auto flex flex-col items-center gap-3">
        <div className="flex items-center gap-2 text-pink-500">
          <Sparkles className="w-4 h-4" />
          <Heart className="w-5 h-5 fill-pink-500 animate-pulse" />
          <Sparkles className="w-4 h-4" />
        </div>

        <p className="text-sm font-medium text-gray-700">
          Handcrafted with endless love by{' '}
          <span className="font-bold text-pink-600">{personalization.sender.name}</span> for{' '}
          <span className="font-bold text-pink-600">{personalization.recipient.name}</span>
        </p>

        <p className="text-xs text-gray-400 font-light">
          Happy Birthday, my favorite human in the entire universe. 🎂✨
        </p>

        <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-pink-400/80 font-mono">
          <span>Forever & Always • {new Date().getFullYear()}</span>
          {onLock && (
            <button
              onClick={onLock}
              className="text-pink-500 hover:text-pink-700 underline flex items-center gap-1 cursor-pointer"
              title="Lock website"
            >
              <Lock className="w-3 h-3" /> Lock
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}
