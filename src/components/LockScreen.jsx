import React, { useState } from 'react';
import { Lock, Heart, Key, Sparkles, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalization } from '../data/personalization';

export default function LockScreen({ onUnlock }) {
  const [inputVal, setInputVal] = useState('');
  const [errorShake, setErrorShake] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const security = personalization.security || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanInput = inputVal.trim().toLowerCase();
    const correctCode = (security.passcode || 'love').trim().toLowerCase();

    if (cleanInput === correctCode || cleanInput === (security.magicKey || 'surprise').toLowerCase()) {
      // Success! Fire celebratory confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f43f68', '#fbaac0', '#ffd166'],
        });
      } catch {}

      onUnlock();
    } else {
      setErrorShake(true);
      setTimeout(() => setErrorShake(false), 600);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#fff0f4] via-[#fff7f9] to-[#fff5f7] relative overflow-hidden">
      {/* Decorative background stickers */}
      <div className="absolute top-12 left-10 text-5xl select-none animate-float opacity-50 pointer-events-none">
        🌸
      </div>
      <div className="absolute bottom-12 right-10 text-5xl select-none animate-float-slow opacity-50 pointer-events-none">
        💖
      </div>

      <div className="max-w-md w-full romantic-glass rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-pink-200/90 text-center relative z-10">
        {/* Lock Icon */}
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-xl shadow-pink-500/25 flex items-center justify-center text-white mb-6 animate-pulse">
          <Lock className="w-10 h-10" />
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-2">
          {security.lockedTitle || 'A Secret Birthday Surprise 🔐💖'}
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-gray-600 font-light leading-relaxed mb-6">
          {security.lockedSubtitle || "This private digital love letter is locked just for Robin's favorite person."}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="password"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Enter secret passcode..."
              className={`w-full px-5 py-3.5 rounded-2xl border bg-white/90 text-center text-gray-800 placeholder-pink-300 font-medium tracking-wider focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-base ${
                errorShake ? 'border-red-400 bg-red-50/50 animate-shake' : 'border-pink-200'
              }`}
              autoFocus
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 text-white font-semibold rounded-2xl shadow-lg shadow-pink-500/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-base"
          >
            <Key className="w-5 h-5" />
            <span>Unlock My Surprise ✨</span>
          </button>
        </form>

        {/* Error message */}
        {errorShake && (
          <p className="text-xs text-rose-600 font-medium mt-3 animate-fadeIn">
            Oops! That wasn't the secret code. Try again sweetheart! 💕
          </p>
        )}

        {/* Hint toggle */}
        <div className="mt-6 pt-4 border-t border-pink-100 flex flex-col items-center">
          <button
            onClick={() => setShowHint(!showHint)}
            className="text-xs text-pink-500 hover:text-pink-700 flex items-center gap-1 font-medium transition-colors"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{showHint ? 'Hide Hint' : 'Need a hint?'}</span>
          </button>
          {showHint && (
            <p className="text-xs text-gray-500 mt-2 bg-pink-50 px-3 py-1.5 rounded-xl border border-pink-200/80 animate-fadeIn">
              {security.hint || 'Hint: The sweet word that brought us together 💖'}
            </p>
          )}
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-8px); }
          40%, 80% { transform: translateX(8px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
