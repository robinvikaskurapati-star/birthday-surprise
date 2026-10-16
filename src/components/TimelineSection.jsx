import React from 'react';
import { Heart, Sparkles, MessageCircle, Smile, Star, Infinity, BookOpen } from 'lucide-react';
import { personalization } from '../data/personalization';

export default function TimelineSection() {
  const getIcon = (type) => {
    switch (type) {
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-pink-500" />;
      case 'message':
        return <MessageCircle className="w-4 h-4 text-pink-500" />;
      case 'heart':
        return <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />;
      case 'smile':
        return <Smile className="w-4 h-4 text-pink-500" />;
      case 'star':
        return <Star className="w-4 h-4 text-pink-500 fill-pink-500" />;
      case 'infinity':
        return <Infinity className="w-4 h-4 text-pink-500" />;
      default:
        return <Heart className="w-4 h-4 text-pink-500" />;
    }
  };

  return (
    <section id="our-story" className="py-20 px-4 relative bg-[#fff9fa]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Our Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-gray-900 mb-3">
            Our Love Story 📖💗
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto text-base sm:text-lg font-light">
            Every step, every laugh, and every quiet moment that brought us closer together.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central dotted spine line */}
          <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-pink-300 via-rose-300 to-pink-200 border-l-2 border-dashed border-pink-300" />

          <div className="space-y-12">
            {personalization.timeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : 'sm:flex-row'
                  }`}
                >
                  {/* Timeline Badge Center Pin */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-pink-400 shadow-md flex items-center justify-center z-10 hover:scale-110 transition-transform">
                    {getIcon(item.icon)}
                  </div>

                  {/* Content Card */}
                  <div className="ml-16 sm:ml-0 sm:w-1/2 px-2 sm:px-8">
                    <div className="romantic-glass rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-pink-200/80 group">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-pink-100 text-pink-700">
                          {item.tag}
                        </span>
                        <span className="text-xs text-pink-500 font-medium font-mono">
                          {item.date}
                        </span>
                      </div>

                      <h3 className="text-xl font-display font-bold text-gray-800 group-hover:text-pink-600 transition-colors mb-2">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
