import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight, Heart, Sparkles, Hand, Volume2, VolumeX } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../utils/soundEffects';
import { personalization } from '../data/personalization';

export default function HeartOpeningScreen({ onOpenComplete }) {
  const [progress, setProgress] = useState(0); // 0.0 to 1.0
  const [isDragging, setIsDragging] = useState(false);
  const [isOpeningFinished, setIsOpeningFinished] = useState(false);
  const [sparkleParticles, setSparkleParticles] = useState([]);
  const [isMuted, setIsMuted] = useState(false);

  const trackRef = useRef(null);
  const dragStartX = useRef(0);
  const currentProgressRef = useRef(0);
  const lastSoundProgressRef = useRef(0);

  // Sync mute state with soundEffects engine
  const toggleMute = (e) => {
    e.stopPropagation();
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    soundEffects.setMuted(nextMute);
  };

  // Sparkle generator during drag
  const addSparkle = useCallback((clientX, clientY) => {
    const icons = ['✨', '💖', '⭐', '🌸', '💕'];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    const newSparkle = {
      id: Date.now() + Math.random(),
      x: clientX,
      y: clientY,
      icon: randomIcon,
      size: Math.random() * 12 + 12,
    };
    setSparkleParticles((prev) => [...prev.slice(-12), newSparkle]);
    setTimeout(() => {
      setSparkleParticles((prev) => prev.filter((p) => p.id !== newSparkle.id));
    }, 900);
  }, []);

  // Complete opening sequence with celebration
  const completeOpening = useCallback(() => {
    setIsOpeningFinished(true);
    setProgress(1);

    soundEffects.playHeartOpenFlourish();

    // Trigger celebratory sparkles & confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.55 },
        colors: ['#ff6b8b', '#ff8da1', '#ffc2d1', '#ffd166', '#ffffff'],
      });
    } catch {}

    // Seamless delay before revealing main experience
    setTimeout(() => {
      if (onOpenComplete) {
        onOpenComplete();
      }
    }, 1100);
  }, [onOpenComplete]);

  // Pointer down handler on arrow / drag handle
  const handlePointerDown = (e) => {
    if (isOpeningFinished) return;
    setIsDragging(true);
    dragStartX.current = e.clientX;
    soundEffects.playPop();

    // Capture pointer if available
    try {
      e.target.setPointerCapture?.(e.pointerId);
    } catch {}
  };

  // Pointer move handler
  const handlePointerMove = (e) => {
    if (!isDragging || isOpeningFinished) return;

    if (!trackRef.current) return;
    const trackRect = trackRef.current.getBoundingClientRect();
    const trackWidth = Math.max(trackRect.width - 56, 120); // Width minus handle width

    // Calculate delta relative to track left or drag start
    const currentX = e.clientX;
    const relativeX = Math.max(0, Math.min(currentX - trackRect.left - 28, trackWidth));
    const newProgress = Math.min(1, Math.max(0, relativeX / trackWidth));

    currentProgressRef.current = newProgress;
    setProgress(newProgress);

    // Spawn sparkles along drag trail
    if (Math.random() > 0.4) {
      addSparkle(e.clientX, e.clientY);
    }

    // Play subtle sparkle pitch as progress increases
    if (Math.abs(newProgress - lastSoundProgressRef.current) > 0.15) {
      soundEffects.playDragSparkle(newProgress);
      lastSoundProgressRef.current = newProgress;
    }

    // Threshold check (dragged at least 82% of track)
    if (newProgress >= 0.82) {
      setIsDragging(false);
      completeOpening();
    }
  };

  // Pointer up handler (release drag)
  const handlePointerUp = (e) => {
    if (!isDragging || isOpeningFinished) return;
    setIsDragging(false);

    try {
      e.target.releasePointerCapture?.(e.pointerId);
    } catch {}

    // If released before threshold, animate back smoothly
    if (currentProgressRef.current < 0.82) {
      const startP = currentProgressRef.current;
      const startTime = performance.now();
      const snapBack = (now) => {
        const elapsed = now - startTime;
        const factor = Math.min(1, elapsed / 250);
        const currentP = startP * (1 - factor);
        setProgress(currentP);
        currentProgressRef.current = currentP;
        if (factor < 1) {
          requestAnimationFrame(snapBack);
        }
      };
      requestAnimationFrame(snapBack);
    }
  };

  // Fallback tap to open for accessibility
  const handleDirectOpen = () => {
    if (isOpeningFinished) return;
    completeOpening();
  };

  // Keyboard accessibility
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleDirectOpen();
    }
  };

  // Visual calculations based on drag progress (0 to 1)
  const leftHalfTransform = `translateX(-${progress * 48}px) rotate(-${progress * 28}deg)`;
  const rightHalfTransform = `translateX(${progress * 48}px) rotate(${progress * 28}deg)`;
  const innerGlowOpacity = Math.min(1, progress * 1.5);
  const glowScale = 1 + progress * 0.4;
  const bowOpacity = Math.max(0, 1 - progress * 1.2);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between px-4 py-8 select-none transition-opacity duration-700 bg-gradient-to-b from-[#fff0f4] via-[#fff5f7] to-[#ffeef3] overflow-hidden ${
        isOpeningFinished ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* Sparkle Trail Particles */}
      {sparkleParticles.map((sp) => (
        <div
          key={sp.id}
          className="fixed pointer-events-none z-50 text-pink-500 animate-ping"
          style={{
            left: `${sp.x}px`,
            top: `${sp.y}px`,
            fontSize: `${sp.size}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {sp.icon}
        </div>
      ))}

      {/* Top Header Bar */}
      <div className="w-full max-w-md flex items-center justify-between pt-2">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-pink-200 text-pink-700 text-xs font-semibold shadow-sm backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-spin" style={{ animationDuration: '6s' }} />
          <span>A Surprise For {personalization.recipient.name || 'You'}</span>
        </div>

        {/* Audio Mute Toggle */}
        <button
          onClick={toggleMute}
          className="p-2 rounded-full bg-white/80 border border-pink-200 text-pink-600 hover:bg-pink-50 transition-colors shadow-sm cursor-pointer"
          title={isMuted ? 'Unmute sound effects' : 'Mute sound effects'}
          aria-label="Toggle sound effects"
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-gray-400" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Center Interactive Heart Area */}
      <div className="relative flex flex-col items-center justify-center my-auto">
        {/* Soft Ambient Floating Bows & Sparkles */}
        <div className="absolute -top-16 -left-16 text-3xl select-none animate-float opacity-60 pointer-events-none">
          🎀
        </div>
        <div className="absolute -top-12 -right-14 text-2xl select-none animate-float-slow opacity-60 pointer-events-none">
          ✨
        </div>
        <div className="absolute -bottom-14 -left-12 text-2xl select-none animate-float-slow opacity-50 pointer-events-none">
          🌸
        </div>
        <div className="absolute -bottom-16 -right-12 text-3xl select-none animate-float opacity-60 pointer-events-none">
          💖
        </div>

        {/* Radiant Inner Glow that intensifies as heart opens */}
        <div
          className="absolute w-56 h-56 rounded-full bg-gradient-to-r from-pink-300 via-rose-300 to-amber-200 blur-2xl pointer-events-none transition-all duration-150"
          style={{
            opacity: 0.35 + innerGlowOpacity * 0.65,
            transform: `scale(${glowScale})`,
          }}
        />

        {/* Inside Secret Preview (emerges as heart splits) */}
        <div
          className="absolute flex flex-col items-center justify-center text-center z-10 pointer-events-none transition-all duration-200"
          style={{
            opacity: Math.min(1, progress * 1.8),
            transform: `scale(${0.6 + progress * 0.4})`,
          }}
        >
          <span className="text-3xl animate-bounce">🎂</span>
          <span className="font-handwriting text-2xl font-bold text-rose-600 drop-shadow">
            Happy Birthday!
          </span>
          <span className="text-[11px] font-semibold text-pink-500 tracking-wider uppercase mt-1">
            My Love 💗
          </span>
        </div>

        {/* The Two-Half Animated Heart */}
        <div
          onClick={handleDirectOpen}
          className="relative w-48 h-44 sm:w-56 sm:h-52 cursor-pointer flex items-center justify-center select-none group"
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          title="Drag arrow below, or tap here to open!"
          aria-label="Interactive Birthday Heart. Pull arrow or tap to open."
        >
          {/* Left Half of Heart */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-transform duration-75 origin-bottom-left"
            style={{ transform: leftHalfTransform }}
          >
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full drop-shadow-xl filter"
              style={{
                clipPath: 'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)',
              }}
            >
              <defs>
                <linearGradient id="heartGradientLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff758c" />
                  <stop offset="60%" stopColor="#ff4b72" />
                  <stop offset="100%" stopColor="#d91e4a" />
                </linearGradient>
                <radialGradient id="highlightLeft" cx="30%" cy="30%" r="40%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </radialGradient>
              </defs>
              <path
                d="M 100,180 C 40,130 10,90 10,55 C 10,24 34,10 65,10 C 82,10 94,18 100,28 C 106,18 118,10 135,10 C 166,10 190,24 190,55 C 190,90 160,130 100,180 Z"
                fill="url(#heartGradientLeft)"
              />
              <path
                d="M 100,180 C 40,130 10,90 10,55 C 10,24 34,10 65,10 C 82,10 94,18 100,28 C 106,18 118,10 135,10 C 166,10 190,24 190,55 C 190,90 160,130 100,180 Z"
                fill="url(#highlightLeft)"
              />
            </svg>
          </div>

          {/* Right Half of Heart */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-transform duration-75 origin-bottom-right"
            style={{ transform: rightHalfTransform }}
          >
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full drop-shadow-xl filter"
              style={{
                clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)',
              }}
            >
              <defs>
                <linearGradient id="heartGradientRight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff8da1" />
                  <stop offset="60%" stopColor="#ff5277" />
                  <stop offset="100%" stopColor="#c71542" />
                </linearGradient>
              </defs>
              <path
                d="M 100,180 C 40,130 10,90 10,55 C 10,24 34,10 65,10 C 82,10 94,18 100,28 C 106,18 118,10 135,10 C 166,10 190,24 190,55 C 190,90 160,130 100,180 Z"
                fill="url(#heartGradientRight)"
              />
            </svg>
          </div>

          {/* Decorative Pink Ribbon and Bow across the heart (fades as it unties) */}
          <div
            className="absolute z-20 flex flex-col items-center justify-center pointer-events-none transition-all duration-150"
            style={{
              opacity: bowOpacity,
              transform: `scale(${1 - progress * 0.3}) translateY(${progress * 15}px)`,
            }}
          >
            {/* Satin ribbon band */}
            <div className="w-28 sm:w-32 h-6 bg-gradient-to-r from-pink-100 via-white to-pink-100 rounded-full shadow-md border border-pink-200/90 flex items-center justify-center">
              <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest">
                With Love
              </span>
            </div>
            {/* Ribbon Bow knot */}
            <div className="text-3xl -mt-2 animate-pulse">🎀</div>
          </div>
        </div>

        {/* Romantic instruction banner */}
        <div className="mt-6 text-center">
          <p className="text-base sm:text-lg font-handwriting text-2xl font-bold text-rose-700 drop-shadow-sm">
            "Pull the little arrow to open your surprise 💗"
          </p>
          <p className="text-xs text-gray-500 font-light mt-1">
            Drag the handle to the right, or simply tap to open
          </p>
        </div>
      </div>

      {/* Bottom Drag Slider Track & Fallback Button */}
      <div className="w-full max-w-sm flex flex-col items-center gap-4 pb-4">
        {/* The Draggable Slider Track */}
        <div
          ref={trackRef}
          className="relative w-full h-14 bg-white/85 rounded-full border-2 border-pink-300/80 shadow-md p-1.5 flex items-center backdrop-blur-sm overflow-hidden select-none"
        >
          {/* Progress fill ribbon behind handle */}
          <div
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-pink-300 via-rose-400 to-pink-500 rounded-full opacity-60 transition-all duration-75"
            style={{ width: `${Math.max(12, progress * 100)}%` }}
          />

          {/* Track background text hint */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-xs font-semibold uppercase tracking-wider text-pink-600/75 animate-pulse pl-10 flex items-center gap-1.5">
              <span>Slide to reveal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* The Draggable Handle / Arrow */}
          <div
            onPointerDown={handlePointerDown}
            className={`relative z-20 w-11 h-11 rounded-full bg-gradient-to-br from-pink-500 via-rose-500 to-rose-600 shadow-lg border-2 border-white flex items-center justify-center text-white cursor-grab active:cursor-grabbing transition-transform duration-75 ${
              isDragging ? 'scale-110 shadow-pink-500/50' : 'hover:scale-105'
            }`}
            style={{
              transform: `translateX(${progress * (trackRef.current ? Math.max(trackRef.current.clientWidth - 56, 120) : 180)}px)`,
            }}
            role="slider"
            aria-valuenow={Math.round(progress * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Pull to open surprise"
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            {progress > 0.75 ? (
              <Heart className="w-5 h-5 fill-white animate-ping" />
            ) : (
              <ArrowRight className="w-5 h-5 animate-pulse" />
            )}
          </div>
        </div>

        {/* Fallback accessible tap button */}
        <button
          onClick={handleDirectOpen}
          className="text-xs text-pink-600 hover:text-pink-800 underline font-medium tracking-wide flex items-center gap-1 py-1 px-3 rounded-full hover:bg-pink-100/50 transition-colors"
          aria-label="Tap to open surprise without dragging"
        >
          <Hand className="w-3.5 h-3.5" />
          <span>Tap here if you prefer to open instantly 💕</span>
        </button>
      </div>
    </div>
  );
}
