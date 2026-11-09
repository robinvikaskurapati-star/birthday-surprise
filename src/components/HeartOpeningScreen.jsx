import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, Heart, Volume2, VolumeX, Hand } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../utils/soundEffects';
import { personalization } from '../data/personalization';

export default function HeartOpeningScreen({ onOpenComplete }) {
  // Animation states: 'idle' | 'dragging' | 'shooting' | 'impacted' | 'doors_opening' | 'revealed' | 'finished'
  const [animState, setAnimState] = useState('idle');
  const [isMuted, setIsMuted] = useState(false);
  const [sparkleParticles, setSparkleParticles] = useState([]);
  const [impactBursts, setImpactBursts] = useState([]);

  const containerRef = useRef(null);
  const heartRef = useRef(null);
  const arrowRef = useRef(null);

  // Arrow position & orientation
  const [arrowPos, setArrowPos] = useState({ x: 0, y: 0 });
  const [arrowAngle, setArrowAngle] = useState(-90); // Angle in degrees pointing towards heart
  const [initialPos, setInitialPos] = useState({ x: 0, y: 0 });
  const [targetHeartPos, setTargetHeartPos] = useState({ x: 0, y: 0 });

  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const lastSoundProgressRef = useRef(0);

  // Calculate coordinates on mount and window resize
  const measurePositions = useCallback(() => {
    if (!containerRef.current || !heartRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const heartRect = heartRef.current.getBoundingClientRect();

    const hX = heartRect.left + heartRect.width / 2;
    const hY = heartRect.top + heartRect.height / 2;
    setTargetHeartPos({ x: hX, y: hY });

    // Initial arrow position: bottom center, angled towards heart
    const aX = containerRect.width / 2;
    const aY = Math.min(containerRect.height * 0.76, containerRect.height - 120);

    setInitialPos({ x: aX, y: aY });
    setArrowPos({ x: aX, y: aY });

    // Calculate angle towards heart
    const dx = hX - aX;
    const dy = hY - aY;
    const angleDeg = Math.atan2(dy, dx) * (180 / Math.PI);
    setArrowAngle(angleDeg);
  }, []);

  useEffect(() => {
    measurePositions();
    const t = setTimeout(measurePositions, 80);
    window.addEventListener('resize', measurePositions);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', measurePositions);
    };
  }, [measurePositions]);

  // Audio mute toggle
  const toggleMute = (e) => {
    e.stopPropagation();
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    soundEffects.setMuted(nextMute);
  };

  // Add floating sparkle on drag
  const addSparkle = (x, y) => {
    const icons = ['✨', '💖', '⭐', '🌸', '💕'];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    const p = {
      id: Date.now() + Math.random(),
      x,
      y,
      icon: randomIcon,
      size: Math.random() * 12 + 14,
    };
    setSparkleParticles((prev) => [...prev.slice(-12), p]);
    setTimeout(() => {
      setSparkleParticles((prev) => prev.filter((item) => item.id !== p.id));
    }, 750);
  };

  // Trigger heart opening sequence upon arrow impact
  const triggerImpactAndOpen = useCallback(() => {
    setAnimState('impacted');
    soundEffects.playArrowWhoosh();

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 85,
        origin: {
          x: targetHeartPos.x / (window.innerWidth || 1),
          y: targetHeartPos.y / (window.innerHeight || 1),
        },
        colors: ['#ff4d79', '#ff758c', '#ffd166', '#ffffff', '#ff9a9e'],
      });
    } catch {}

    // Impact shockwave particles
    const bursts = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      angle: (i * 360) / 8,
      dist: 60 + Math.random() * 40,
    }));
    setImpactBursts(bursts);

    // Play heart opening flourish
    setTimeout(() => {
      soundEffects.playHeartOpenFlourish();
      setAnimState('doors_opening');
    }, 150);

    // Radiant glowing reveal
    setTimeout(() => {
      setAnimState('revealed');
    }, 550);

    // Smooth transition to website
    setTimeout(() => {
      setAnimState('finished');
      if (onOpenComplete) {
        onOpenComplete();
      }
    }, 1300);
  }, [targetHeartPos, onOpenComplete]);

  // Launch arrow flight towards heart center with physics
  const launchArrowFlight = useCallback((startX, startY) => {
    setAnimState('shooting');
    soundEffects.playArrowWhoosh();

    const dx = targetHeartPos.x - startX;
    const dy = targetHeartPos.y - startY;
    const finalAngleRad = Math.atan2(dy, dx);
    const finalAngleDeg = finalAngleRad * (180 / Math.PI);
    setArrowAngle(finalAngleDeg);

    // Arrow tip reaches exact heart center (offsetting center of arrow container)
    const targetStopX = targetHeartPos.x - Math.cos(finalAngleRad) * 35;
    const targetStopY = targetHeartPos.y - Math.sin(finalAngleRad) * 35;

    const startTime = performance.now();
    const duration = 280; // ms flight time

    const animateFlight = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);

      // Ease out cubic flight
      const ease = 1 - Math.pow(1 - progress, 3);
      const curX = startX + (targetStopX - startX) * ease;
      const curY = startY + (targetStopY - startY) * ease;

      setArrowPos({ x: curX, y: curY });

      if (progress < 1) {
        requestAnimationFrame(animateFlight);
      } else {
        setArrowPos({ x: targetStopX, y: targetStopY });
        triggerImpactAndOpen();
      }
    };

    requestAnimationFrame(animateFlight);
  }, [targetHeartPos, triggerImpactAndOpen]);

  // Pointer Down on Arrow
  const handlePointerDown = (e) => {
    if (animState !== 'idle') return;
    isDraggingRef.current = true;
    setAnimState('dragging');
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    soundEffects.playPop();

    try {
      e.currentTarget.setPointerCapture?.(e.pointerId);
    } catch {}
  };

  // Pointer Move (drag)
  const handlePointerMove = (e) => {
    if (!isDraggingRef.current || animState !== 'dragging') return;

    const curX = e.clientX;
    const curY = e.clientY;
    setArrowPos({ x: curX, y: curY });

    // Dynamic rotation towards heart center
    const dx = targetHeartPos.x - curX;
    const dy = targetHeartPos.y - curY;
    const angleDeg = Math.atan2(dy, dx) * (180 / Math.PI);
    setArrowAngle(angleDeg);

    // Sparkle trail while dragging
    if (Math.random() > 0.4) {
      addSparkle(curX, curY);
    }

    // Proximity ratio to target (0 at start, 1 when close)
    const distToHeart = Math.hypot(dx, dy);
    const initialDist = Math.hypot(targetHeartPos.x - initialPos.x, targetHeartPos.y - initialPos.y) || 1;
    const progress = Math.min(1, Math.max(0, 1 - distToHeart / initialDist));

    if (Math.abs(progress - lastSoundProgressRef.current) > 0.18) {
      soundEffects.playDragSparkle(progress);
      lastSoundProgressRef.current = progress;
    }

    // Direct collision threshold
    if (distToHeart < 50) {
      isDraggingRef.current = false;
      triggerImpactAndOpen();
    }
  };

  // Pointer Up (release arrow)
  const handlePointerUp = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    try {
      e.currentTarget.releasePointerCapture?.(e.pointerId);
    } catch {}

    const curX = e.clientX;
    const curY = e.clientY;

    // Launch arrow towards heart from current drag position!
    launchArrowFlight(curX, curY);
  };

  // Instant tap fallback for quick launch / accessibility
  const handleDirectLaunch = () => {
    if (animState !== 'idle') return;
    launchArrowFlight(initialPos.x, initialPos.y);
  };

  // Keyboard accessibility
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleDirectLaunch();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between px-4 py-6 select-none transition-opacity duration-700 bg-gradient-to-b from-[#fff0f4] via-[#fff5f7] to-[#ffeef3] overflow-hidden ${
        animState === 'finished' ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* Dynamic Sparkle Trail */}
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
      <div className="w-full max-w-md flex items-center justify-between pt-2 z-20">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 border border-pink-200 text-pink-700 text-xs font-semibold shadow-sm backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-spin" style={{ animationDuration: '6s' }} />
          <span>A Romantic Surprise For {personalization.recipient.name || 'You'}</span>
        </div>

        {/* Audio Mute Toggle */}
        <button
          onClick={toggleMute}
          className="p-2 rounded-full bg-white/85 border border-pink-200 text-pink-600 hover:bg-pink-50 transition-colors shadow-sm cursor-pointer"
          title={isMuted ? 'Unmute sound effects' : 'Mute sound effects'}
          aria-label="Toggle sound effects"
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-gray-400" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Floating Ambient Stickers */}
      <div className="absolute top-20 left-8 text-3xl select-none animate-float opacity-50 pointer-events-none">
        🎀
      </div>
      <div className="absolute top-24 right-10 text-2xl select-none animate-float-slow opacity-60 pointer-events-none">
        ✨
      </div>
      <div className="absolute bottom-28 left-10 text-2xl select-none animate-float-slow opacity-50 pointer-events-none">
        🌸
      </div>
      <div className="absolute bottom-32 right-8 text-3xl select-none animate-float opacity-60 pointer-events-none">
        💖
      </div>

      {/* Trajectory dotted line connecting arrow to heart target while dragging */}
      {(animState === 'dragging' || animState === 'shooting') && (
        <svg className="fixed inset-0 pointer-events-none z-10 w-full h-full">
          <defs>
            <linearGradient id="trajGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#ff4d79" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ffd166" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <line
            x1={arrowPos.x}
            y1={arrowPos.y}
            x2={targetHeartPos.x}
            y2={targetHeartPos.y}
            stroke="url(#trajGrad)"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            className="animate-pulse"
          />
        </svg>
      )}

      {/* ============================================================== */}
      {/* CENTER: 3D PINK HEART TARGET WITH SPLITTING DOOR HALVES        */}
      {/* ============================================================== */}
      <div
        ref={heartRef}
        className="relative my-auto flex flex-col items-center justify-center z-20"
        style={{ perspective: '1000px' }}
      >
        {/* Magical inner radiant background (revealed as heart doors open) */}
        <div
          className={`absolute rounded-full pointer-events-none transition-all duration-700 ease-out flex items-center justify-center ${
            animState === 'doors_opening' || animState === 'revealed'
              ? 'scale-[3.5] opacity-100'
              : 'scale-0 opacity-0'
          }`}
          style={{
            width: '220px',
            height: '220px',
            background: 'radial-gradient(circle, rgba(255,182,193,0.95) 0%, rgba(255,105,180,0.8) 45%, rgba(255,255,255,0) 75%)',
            boxShadow: '0 0 60px rgba(255,105,180,0.8), 0 0 100px rgba(255,215,0,0.6)',
          }}
        >
          <span className="text-4xl animate-spin" style={{ animationDuration: '8s' }}>✨</span>
        </div>

        {/* Ambient Heart Pulsing Glow */}
        <div
          className={`absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-pink-400/25 blur-2xl transition-transform duration-500 pointer-events-none ${
            animState === 'idle' ? 'animate-pulse scale-105' : 'scale-125'
          }`}
        />

        {/* Impact Shockwave Ring */}
        {animState === 'impacted' && (
          <div className="absolute w-40 h-40 rounded-full border-4 border-rose-400 animate-ping pointer-events-none" />
        )}

        {/* Impact Star Burst Particles */}
        {animState === 'impacted' &&
          impactBursts.map((b) => (
            <div
              key={b.id}
              className="absolute text-xl pointer-events-none transition-all duration-300"
              style={{
                transform: `rotate(${b.angle}deg) translate(${b.dist}px) rotate(-${b.angle}deg)`,
              }}
            >
              💖
            </div>
          ))}

        {/* THE 3D HEART WITH TWO DOOR HALVES */}
        <div
          className={`relative w-44 h-44 sm:w-52 sm:h-52 cursor-pointer transition-transform duration-300 ${
            animState === 'idle'
              ? 'hover:scale-105'
              : animState === 'impacted'
              ? 'scale-110 animate-bounce'
              : ''
          }`}
          onClick={handleDirectLaunch}
          title="Cupid's Target — Tap to shoot arrow!"
        >
          {/* Heart Target Bullseye Indicator (Subtle ring to aim for) */}
          {animState === 'idle' && (
            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
              <div className="w-12 h-12 rounded-full border-2 border-dashed border-white/70 animate-spin flex items-center justify-center" style={{ animationDuration: '10s' }}>
                <div className="w-4 h-4 rounded-full bg-white/80 shadow-sm" />
              </div>
            </div>
          )}

          {/* LEFT DOOR HALF */}
          <div
            className="absolute inset-0 z-20 transition-all duration-700 ease-out"
            style={{
              transformOrigin: 'left center',
              transform:
                animState === 'doors_opening' || animState === 'revealed'
                  ? 'perspective(700px) rotateY(-85deg) translateX(-40px)'
                  : 'none',
              filter: 'drop-shadow(0 15px 25px rgba(225, 29, 72, 0.35))',
            }}
          >
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              style={{ clipPath: 'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)' }}
            >
              <defs>
                <linearGradient id="heart3dLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff758c" />
                  <stop offset="45%" stopColor="#ff4d79" />
                  <stop offset="100%" stopColor="#be123c" />
                </linearGradient>
                <linearGradient id="glossLeft" x1="0%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Left Heart Body */}
              <path
                d="M 100,180 C 40,130 10,90 10,55 C 10,24 34,10 65,10 C 82,10 94,18 100,28 C 106,18 118,10 135,10 C 166,10 190,24 190,55 C 190,90 160,130 100,180 Z"
                fill="url(#heart3dLeft)"
              />
              {/* Glossy Upper Highlight */}
              <ellipse cx="65" cy="40" rx="25" ry="15" fill="url(#glossLeft)" transform="rotate(-15 65 40)" />
              {/* Golden Center Split Seam Edge */}
              <line x1="100" y1="28" x2="100" y2="180" stroke="#ffd166" strokeWidth="1.5" strokeOpacity="0.8" />
            </svg>
          </div>

          {/* RIGHT DOOR HALF */}
          <div
            className="absolute inset-0 z-20 transition-all duration-700 ease-out"
            style={{
              transformOrigin: 'right center',
              transform:
                animState === 'doors_opening' || animState === 'revealed'
                  ? 'perspective(700px) rotateY(85deg) translateX(40px)'
                  : 'none',
              filter: 'drop-shadow(0 15px 25px rgba(225, 29, 72, 0.35))',
            }}
          >
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              style={{ clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)' }}
            >
              <defs>
                <linearGradient id="heart3dRight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff8da1" />
                  <stop offset="50%" stopColor="#ff4d79" />
                  <stop offset="100%" stopColor="#9f1239" />
                </linearGradient>
                <linearGradient id="glossRight" x1="50%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Right Heart Body */}
              <path
                d="M 100,180 C 40,130 10,90 10,55 C 10,24 34,10 65,10 C 82,10 94,18 100,28 C 106,18 118,10 135,10 C 166,10 190,24 190,55 C 190,90 160,130 100,180 Z"
                fill="url(#heart3dRight)"
              />
              {/* Glossy Upper Highlight */}
              <ellipse cx="135" cy="40" rx="22" ry="12" fill="url(#glossRight)" transform="rotate(15 135 40)" />
              {/* Golden Center Split Seam Edge */}
              <line x1="100" y1="28" x2="100" y2="180" stroke="#ffd166" strokeWidth="1.5" strokeOpacity="0.8" />
            </svg>
          </div>
        </div>

        {/* Romantic instruction banner */}
        <div className="mt-6 text-center max-w-xs">
          <p className="font-handwriting text-2xl sm:text-3xl font-bold text-rose-700 drop-shadow-sm">
            {animState === 'dragging'
              ? 'Release towards the heart! 💘'
              : animState === 'shooting' || animState === 'impacted'
              ? 'Direct hit! Opening... ✨'
              : 'Drag Cupid’s Arrow to unlock 🏹'}
          </p>
          <p className="text-xs text-gray-500 font-light mt-1">
            Aim at the glowing 3D heart and release to shoot!
          </p>
        </div>
      </div>

      {/* ============================================================== */}
      {/* CUPID'S ARROW (DRAGGABLE & SHOOTABLE TOWARDS HEART)            */}
      {/* ============================================================== */}
      <div
        ref={arrowRef}
        onPointerDown={handlePointerDown}
        tabIndex={0}
        role="button"
        aria-label="Drag Cupid Arrow to aim and shoot at heart"
        onKeyDown={handleKeyDown}
        className={`fixed z-30 cursor-grab active:cursor-grabbing select-none transition-all duration-300 ${
          animState === 'dragging'
            ? 'scale-115 drop-shadow-[0_10px_20px_rgba(255,105,180,0.6)]'
            : animState === 'idle'
            ? 'animate-bounce drop-shadow-md hover:scale-105'
            : animState === 'revealed'
            ? 'opacity-0 scale-75 pointer-events-none'
            : 'pointer-events-none'
        }`}
        style={{
          left: `${arrowPos.x}px`,
          top: `${arrowPos.y}px`,
          transform: `translate(-50%, -50%) rotate(${arrowAngle}deg)`,
          touchAction: 'none',
        }}
      >
        {/* Realistic SVG Cupid Arrow */}
        <svg
          width="110"
          height="34"
          viewBox="0 0 110 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          <defs>
            {/* Metallic Gold Arrowhead Gradient */}
            <linearGradient id="goldTip" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff3b0" />
              <stop offset="50%" stopColor="#ffd166" />
              <stop offset="100%" stopColor="#d48b00" />
            </linearGradient>

            {/* Rose Gold Wood Shaft */}
            <linearGradient id="arrowShaft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4a373" />
              <stop offset="50%" stopColor="#f4a261" />
              <stop offset="100%" stopColor="#e76f51" />
            </linearGradient>

            {/* Feather Fletching Gradient */}
            <linearGradient id="featherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#ffb3c6" />
              <stop offset="100%" stopColor="#ff4d79" />
            </linearGradient>
          </defs>

          {/* 1. Sleek Rose-Gold Arrow Shaft */}
          <rect x="22" y="15.5" width="68" height="3" rx="1.5" fill="url(#arrowShaft)" />
          {/* Golden Shaft Rings */}
          <rect x="36" y="15" width="2" height="4" rx="1" fill="#ffd166" />
          <rect x="75" y="15" width="2" height="4" rx="1" fill="#ffd166" />

          {/* 2. Golden Heart-Shaped Cupid Arrowhead */}
          <path
            d="M 108,17 L 90,8 C 92,13 93,15 93,17 C 93,19 92,21 90,26 Z"
            fill="url(#goldTip)"
            filter="drop-shadow(0 2px 4px rgba(212,139,0,0.4))"
          />
          {/* Arrowhead center glint highlight */}
          <line x1="92" y1="17" x2="106" y2="17" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />

          {/* 3. Feathers / Fletchings (Swan Wings Style) */}
          {/* Upper Feathers */}
          <path
            d="M 6,17 C 12,9 24,7 28,7 L 22,17 Z"
            fill="url(#featherGrad)"
            stroke="#ffffff"
            strokeWidth="0.8"
          />
          <path
            d="M 12,17 C 17,11 25,10 28,10 L 23,17 Z"
            fill="#ffffff"
            opacity="0.7"
          />

          {/* Lower Feathers */}
          <path
            d="M 6,17 C 12,25 24,27 28,27 L 22,17 Z"
            fill="url(#featherGrad)"
            stroke="#ffffff"
            strokeWidth="0.8"
          />
          <path
            d="M 12,17 C 17,23 25,24 28,24 L 23,17 Z"
            fill="#ffffff"
            opacity="0.7"
          />

          {/* 4. Cute Pink Ribbon Tied to Notch */}
          <circle cx="21" cy="17" r="2.5" fill="#ff4d79" />
          <path
            d="M 21,17 Q 16,11 12,12 Q 17,17 21,17"
            fill="#ff758c"
            opacity="0.8"
          />
          <path
            d="M 21,17 Q 16,23 12,22 Q 17,17 21,17"
            fill="#ff758c"
            opacity="0.8"
          />
        </svg>

        {/* Drag Pulse Indicator around arrow head */}
        {animState === 'idle' && (
          <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-pink-400/30 animate-ping pointer-events-none" />
        )}
      </div>

      {/* ============================================================== */}
      {/* BOTTOM HINT & INSTANT SHOOT FALLBACK BUTTON                    */}
      {/* ============================================================== */}
      <div className="w-full max-w-sm flex flex-col items-center gap-3 pb-3 z-20">
        {/* Launch pad base indication */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-pink-200/80 shadow-sm text-xs text-rose-600 font-medium">
          <span>💘 Cupid's Arrow</span>
          <span className="text-gray-300">•</span>
          <span>Drag arrow or tap below</span>
        </div>

        {/* Fallback accessible tap-to-shoot button */}
        <button
          onClick={handleDirectLaunch}
          className="text-xs text-pink-600 hover:text-pink-800 underline font-medium tracking-wide flex items-center gap-1 py-1 px-3 rounded-full hover:bg-pink-100/50 transition-colors cursor-pointer"
          aria-label="Tap to shoot Cupid's arrow instantly"
        >
          <Hand className="w-3.5 h-3.5" />
          <span>Tap here to shoot Cupid's arrow instantly 💕</span>
        </button>
      </div>
    </div>
  );
}
