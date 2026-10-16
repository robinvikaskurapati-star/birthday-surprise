import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Heart } from 'lucide-react';
import { personalization } from '../data/personalization';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [useSynth, setUseSynth] = useState(!personalization.music.audioSrc);
  const audioRef = useRef(null);
  const synthTimerRef = useRef(null);
  const audioCtxRef = useRef(null);

  // Soothing pentatonic / romantic music-box melody notes (frequencies in Hz)
  // C4, E4, G4, A4, B4, C5, D5, E5, G5
  const melodyNotes = [
    523.25, 659.25, 783.99, 1046.50, // C5, E5, G5, C6
    880.00, 783.99, 659.25, 587.33, // A5, G5, E5, D5
    523.25, 587.33, 659.25, 523.25, // C5, D5, E5, C5
    783.99, 659.25, 587.33, 523.25, // G5, E5, D5, C5
  ];

  const playMusicBoxNote = (freq) => {
    if (!audioCtxRef.current) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtxRef.current = new AudioContextClass();
      }
    }

    const ctx = audioCtxRef.current;
    if (!ctx) return;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Music box bell timbre
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    // Soft attack, gentle exponential decay
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.15, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 1.8);
  };

  const startSynthMelody = () => {
    let noteIndex = 0;
    const playNext = () => {
      playMusicBoxNote(melodyNotes[noteIndex]);
      noteIndex = (noteIndex + 1) % melodyNotes.length;
    };

    playNext();
    synthTimerRef.current = setInterval(playNext, 600);
  };

  const stopSynthMelody = () => {
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      // Pause
      if (audioRef.current && !useSynth) {
        audioRef.current.pause();
      }
      stopSynthMelody();
      setIsPlaying(false);
    } else {
      // Start
      if (personalization.music.audioSrc && !useSynth) {
        audioRef.current
          ?.play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Audio file failed to play or not found, fallback to synthesized music box
            setUseSynth(true);
            startSynthMelody();
            setIsPlaying(true);
          });
      } else {
        startSynthMelody();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    return () => {
      stopSynthMelody();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {personalization.music.audioSrc && !useSynth && (
        <audio
          ref={audioRef}
          src={personalization.music.audioSrc}
          loop
          onError={() => setUseSynth(true)}
        />
      )}

      <button
        onClick={togglePlay}
        className={`group flex items-center gap-3 px-4 py-2.5 rounded-full shadow-lg transition-all duration-300 border ${
          isPlaying
            ? 'bg-white/90 border-pink-300 text-pink-600 shadow-pink-200/60'
            : 'bg-white/80 hover:bg-white border-pink-200 text-gray-600 shadow-gray-200/50'
        } backdrop-blur-md hover:scale-105 active:scale-95`}
        title={isPlaying ? 'Pause background music' : 'Play romantic birthday melody'}
        aria-label="Toggle background music"
      >
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
            isPlaying ? 'bg-pink-100 text-pink-600 animate-pulse' : 'bg-gray-100 text-gray-500'
          }`}
        >
          {isPlaying ? <Music className="w-4 h-4 animate-spin text-pink-500" style={{ animationDuration: '6s' }} /> : <VolumeX className="w-4 h-4" />}
        </div>

        <div className="text-left pr-1 hidden sm:block">
          <p className="text-xs font-semibold text-pink-700 leading-tight flex items-center gap-1">
            <span>{isPlaying ? 'Playing Melody' : 'Play Music'}</span>
            {isPlaying && <Heart className="w-3 h-3 text-pink-500 fill-pink-500 inline" />}
          </p>
          <p className="text-[10px] text-gray-500 leading-none truncate max-w-[120px]">
            {personalization.music.title || 'Music Box Melody'}
          </p>
        </div>

        {/* Dancing music bars when playing */}
        {isPlaying && (
          <div className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 bg-pink-400 rounded-full animate-bounce h-2" style={{ animationDelay: '0.1s' }}></span>
            <span className="w-0.5 bg-pink-500 rounded-full animate-bounce h-3" style={{ animationDelay: '0.3s' }}></span>
            <span className="w-0.5 bg-pink-400 rounded-full animate-bounce h-1.5" style={{ animationDelay: '0.2s' }}></span>
          </div>
        )}
      </button>
    </div>
  );
}
