import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Heart, Sparkles } from 'lucide-react';
import { personalization } from '../data/personalization';

export default function DaysCounter() {
  const [elapsed, setElapsed] = useState(null);
  const anniversaryStr = personalization.dates?.anniversaryDate;

  useEffect(() => {
    if (!anniversaryStr || typeof anniversaryStr !== 'string' || !anniversaryStr.trim()) {
      setElapsed(null);
      return;
    }

    // Parse date parts safely to avoid UTC/timezone off-by-one issues
    const parts = anniversaryStr.trim().split('-');
    if (parts.length < 3) {
      setElapsed(null);
      return;
    }

    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);

    if (isNaN(year) || isNaN(month) || isNaN(day)) {
      setElapsed(null);
      return;
    }

    const startDate = new Date(year, month, day, 0, 0, 0);
    if (isNaN(startDate.getTime())) {
      setElapsed(null);
      return;
    }

    const calculateTime = () => {
      const now = new Date();
      const diff = Math.max(0, now.getTime() - startDate.getTime());

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setElapsed({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [anniversaryStr]);

  return (
    <section className="py-12 px-4 relative">
      <div className="max-w-3xl mx-auto">
        <div className="romantic-glass rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden border border-pink-200/90 shadow-xl">
          {/* Subtle background decoration */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-200/40 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-rose-200/30 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>Counting Every Golden Moment</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-800 mb-2">
              Our Journey Together
            </h3>

            {elapsed ? (
              <div>
                <p className="text-sm text-gray-600 mb-6 font-light">
                  Loving you more and more with every single heartbeat:
                </p>

                {/* Counter boxes */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto">
                  <div className="bg-white/95 rounded-2xl p-4 shadow-sm border border-pink-100 flex flex-col items-center">
                    <span className="text-3xl sm:text-4xl font-bold font-display text-pink-600">
                      {elapsed.days}
                    </span>
                    <span className="text-xs uppercase font-medium tracking-wider text-gray-500 mt-1">
                      Days
                    </span>
                  </div>

                  <div className="bg-white/95 rounded-2xl p-4 shadow-sm border border-pink-100 flex flex-col items-center">
                    <span className="text-3xl sm:text-4xl font-bold font-display text-pink-600">
                      {elapsed.hours}
                    </span>
                    <span className="text-xs uppercase font-medium tracking-wider text-gray-500 mt-1">
                      Hours
                    </span>
                  </div>

                  <div className="bg-white/95 rounded-2xl p-4 shadow-sm border border-pink-100 flex flex-col items-center">
                    <span className="text-3xl sm:text-4xl font-bold font-display text-pink-600">
                      {elapsed.minutes}
                    </span>
                    <span className="text-xs uppercase font-medium tracking-wider text-gray-500 mt-1">
                      Minutes
                    </span>
                  </div>

                  <div className="bg-white/95 rounded-2xl p-4 shadow-sm border border-pink-100 flex flex-col items-center">
                    <span className="text-3xl sm:text-4xl font-bold font-display text-pink-600 tabular-nums">
                      {elapsed.seconds}
                    </span>
                    <span className="text-xs uppercase font-medium tracking-wider text-gray-500 mt-1">
                      Seconds
                    </span>
                  </div>
                </div>

                <p className="text-xs text-pink-500 mt-4 flex items-center justify-center gap-1 font-medium">
                  <Heart className="w-3 h-3 fill-pink-500" />
                  <span>And countless more memories to come</span>
                  <Heart className="w-3 h-3 fill-pink-500" />
                </p>
              </div>
            ) : (
              <div className="py-4">
                <p className="text-base sm:text-xl text-pink-700 font-handwriting text-2xl sm:text-3xl font-semibold mb-2">
                  "Every single moment spent with you is special, timeless and forever precious." ⏳✨
                </p>
                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                  (Tip: Enter your anniversary date format 'YYYY-MM-DD' in <code className="bg-pink-100 px-1.5 py-0.5 rounded text-pink-800 text-[11px]">src/data/personalization.js</code> to track exact days together!)
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
