import React, { useState, useEffect } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Heart, Sparkles, Image as ImageIcon, Eye, Award } from 'lucide-react';
import { personalization } from '../data/personalization';
import { soundEffects } from '../utils/soundEffects';
import { resolveAsset } from '../utils/assets';

export default function GallerySection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [discoveredIndices, setDiscoveredIndices] = useState(new Set());
  const [allDiscoveredCelebrated, setAllDiscoveredCelebrated] = useState(false);

  const galleryItems = personalization.gallery || [];
  const totalItems = galleryItems.length;

  const markDiscovered = (index) => {
    setDiscoveredIndices((prev) => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  };

  const openLightbox = (index) => {
    soundEffects.playPop();
    setSelectedImageIndex(index);
    markDiscovered(index);
  };

  const closeLightbox = () => {
    soundEffects.playPop();
    setSelectedImageIndex(null);
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    soundEffects.playPop();
    const nextIdx = (selectedImageIndex + 1) % totalItems;
    setSelectedImageIndex(nextIdx);
    markDiscovered(nextIdx);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    soundEffects.playPop();
    const prevIdx = (selectedImageIndex - 1 + totalItems) % totalItems;
    setSelectedImageIndex(prevIdx);
    markDiscovered(prevIdx);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, totalItems]);

  // Check if all memories discovered
  const isAllDiscovered = totalItems > 0 && discoveredIndices.size >= totalItems;

  useEffect(() => {
    if (isAllDiscovered && !allDiscoveredCelebrated) {
      setAllDiscoveredCelebrated(true);
      soundEffects.playHeartOpenFlourish();
    }
  }, [isAllDiscovered, allDiscoveredCelebrated]);

  // Render individual photo image with graceful fallback and custom object positioning
  const renderPhotoImg = (item, extraClasses = '') => {
    const rawSrc = item.image || `images/memories/photo${item.id}.jpeg`;
    const imgSrc = resolveAsset(rawSrc);

    return (
      <img
        src={imgSrc}
        alt={item.title}
        loading="lazy"
        style={{ objectPosition: item.objectPosition || 'center' }}
        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${extraClasses}`}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = resolveAsset(`images/memories/photo${item.id || 1}.jpeg`);
        }}
      />
    );
  };

  return (
    <section id="memories" className="py-24 px-4 relative bg-[#fff4f7] overflow-hidden">
      {/* Decorative Scrapbook Corner Stickers */}
      <div className="absolute top-10 left-8 text-4xl select-none animate-float opacity-50 pointer-events-none">
        🌸
      </div>
      <div className="absolute bottom-12 right-8 text-4xl select-none animate-float-slow opacity-50 pointer-events-none">
        🎀
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Cherished Scrapbook</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-gray-900 mb-3">
            Our Memories Inside The Heart 📸💗
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Every snapshot, every laugh, and every quiet moment we've shared. Tap any photograph to open the memory.
          </p>

          {/* Discovery Meter */}
          <div className="mt-4 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-pink-200 text-xs font-medium text-pink-700 shadow-sm">
            <Eye className="w-3.5 h-3.5 text-pink-500" />
            <span>
              Memories Discovered: <strong className="font-bold">{discoveredIndices.size}</strong> of {totalItems}
            </span>
          </div>
        </div>

        {/* Secret Easter Egg Love Note (Unlocks when all memories are clicked) */}
        {isAllDiscovered && (
          <div className="mb-12 max-w-2xl mx-auto romantic-glass rounded-3xl p-6 sm:p-8 border-2 border-amber-300 shadow-xl text-center animate-fadeIn bg-gradient-to-r from-amber-50 via-pink-50 to-rose-50">
            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-rose-400 text-white flex items-center justify-center shadow-md mb-3 animate-bounce">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-200/80 px-3 py-1 rounded-full">
              ✨ Secret Memory Unlocked ✨
            </span>
            <h3 className="font-handwriting text-3xl font-bold text-romantic-700 mt-3 mb-2">
              "You are my absolute favorite view."
            </h3>
            <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed max-w-lg mx-auto">
              Every single picture with you holds a lifetime of warmth, but my favorite place will always be looking into your beautiful eyes holding your hand. Happy Birthday, my love! 💗
            </p>
          </div>
        )}

        {/* Central Featured Collage Hero Highlight */}
        {galleryItems.length > 0 && (
          <div className="mb-14 max-w-3xl mx-auto">
            <div
              onClick={() => openLightbox(0)}
              className="cursor-pointer group relative bg-white p-4 sm:p-6 pb-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 border border-pink-200 select-none"
            >
              {/* Cute Washi Tape at Top */}
              <div className="washi-tape -top-3 left-1/2 -translate-x-1/2 bg-pink-200/90" />

              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Central Photo */}
                <div className="w-full sm:w-1/2 aspect-[16/10] rounded-2xl overflow-hidden shadow-inner bg-pink-50 relative">
                  {renderPhotoImg(galleryItems[0])}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-pink-600 shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-pink-500" />
                    <span>Featured Memory</span>
                  </div>
                </div>

                {/* Scrapbook Text Details */}
                <div className="w-full sm:w-1/2 text-left sm:pr-4">
                  <span className="text-xs font-semibold text-pink-500 uppercase tracking-widest">
                    {galleryItems[0].date || 'Special Memory'}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-gray-800 group-hover:text-pink-600 transition-colors mt-1 mb-2">
                    {galleryItems[0].title}
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                    {galleryItems[0].caption}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-600 group-hover:translate-x-1 transition-transform">
                    <span>Open Memory Polaroid</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Multi-Style Scrapbook Grid: Polaroids, Heart Frames & Rounded Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {galleryItems.map((item, index) => {
            const isDiscovered = discoveredIndices.has(index);
            const style = item.frameStyle || (index % 3 === 0 ? 'heart' : index % 3 === 1 ? 'polaroid' : 'rounded');

            // 1. Heart Frame Style
            if (style === 'heart') {
              return (
                <div
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  className={`cursor-pointer group relative bg-white/95 p-5 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center border border-pink-200 ${
                    item.rotation || ''
                  } hover:rotate-0`}
                >
                  <div className="washi-tape -top-2.5 left-1/2 -translate-x-1/2" />
                  
                  {/* Heart-Shaped Clip Photo */}
                  <div className="relative w-40 h-40 my-3 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <div
                      className="w-full h-full overflow-hidden shadow-md"
                      style={{
                        clipPath: 'path("M 80,144 C 32,104 8,72 8,44 C 8,19.2 27.2,8 52,8 C 65.6,8 75.2,14.4 80,22.4 C 84.8,14.4 94.4,8 108,8 C 132.8,8 152,19.2 152,44 C 152,72 128,104 80,144 Z")',
                      }}
                    >
                      {renderPhotoImg(item)}
                    </div>
                    {/* Heart outline frame accent */}
                    <div className="absolute -bottom-1 text-xs">💖</div>
                  </div>

                  <h4 className="font-display font-bold text-gray-800 text-base mt-2 group-hover:text-pink-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 font-light mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                  <span className="text-[10px] font-mono text-pink-400 mt-3 block">
                    {item.date} {isDiscovered ? '✓' : ''}
                  </span>
                </div>
              );
            }

            // 2. Polaroid Card Style
            if (style === 'polaroid') {
              return (
                <div
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  className={`cursor-pointer group relative bg-white p-3.5 pb-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${
                    item.rotation || ''
                  } hover:rotate-0`}
                >
                  <div className="washi-tape -top-2.5 left-1/2 -translate-x-1/2" />

                  {/* Photo Window */}
                  <div className={`w-full ${item.aspect || 'aspect-square'} bg-pink-50 rounded-sm overflow-hidden mb-3 shadow-inner relative`}>
                    {renderPhotoImg(item)}
                  </div>

                  {/* Handwritten Polaroid Bottom */}
                  <div className="text-center px-1">
                    <p className="font-handwriting text-xl font-bold text-gray-800 leading-tight group-hover:text-pink-600 transition-colors">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-gray-500 font-light mt-1 line-clamp-2">
                      {item.caption}
                    </p>
                    <span className="text-[10px] font-mono text-pink-400 mt-2 block">
                      {item.date} {isDiscovered ? '✓' : ''}
                    </span>
                  </div>
                </div>
              );
            }

            // 3. Rounded Scrapbook Style
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`cursor-pointer group relative bg-white/95 p-4 pb-5 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-200/90 ${
                  item.rotation || ''
                } hover:rotate-0`}
              >
                <div className="washi-tape -top-2.5 left-1/2 -translate-x-1/2" />

                {/* Photo window */}
                <div className={`w-full ${item.aspect || 'aspect-[4/3]'} rounded-xl overflow-hidden mb-3 bg-pink-50 shadow-inner relative`}>
                  {renderPhotoImg(item)}
                </div>

                <div className="text-left px-1">
                  <h4 className="font-display font-bold text-gray-800 text-sm group-hover:text-pink-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 font-light mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[10px] text-pink-500">
                    <span className="font-mono">{item.date}</span>
                    <span>{isDiscovered ? 'Discovered 💖' : 'Tap to open'}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Helpful instructions note for Robin */}
        <div className="mt-12 text-center text-xs text-pink-600/70">
          <p>
            (Robin: Drop your photos into <code className="bg-white/80 px-1.5 py-0.5 rounded font-mono text-pink-800">public/images/memories/</code> and edit captions in <code className="bg-white/80 px-1.5 py-0.5 rounded font-mono text-pink-800">src/data/personalization.js</code>!)
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 select-none animate-fadeIn"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-50 cursor-pointer"
            title="Close Lightbox (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 p-3 rounded-full transition-all z-50 cursor-pointer hover:scale-110 active:scale-95"
            title="Previous Memory (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 p-3 rounded-full transition-all z-50 cursor-pointer hover:scale-110 active:scale-95"
            title="Next Memory (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Card */}
          <div
            className="max-w-xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl relative animate-scaleUp p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Memory Counter */}
            <div className="flex items-center justify-between text-xs text-pink-500 font-semibold mb-3">
              <span className="flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 fill-pink-500" />
                <span>Memory {selectedImageIndex + 1} of {totalItems}</span>
              </span>
              <span className="font-mono text-gray-400">
                {galleryItems[selectedImageIndex].date}
              </span>
            </div>

            {/* Photo in Lightbox (Full uncropped view tailored to natural dimensions) */}
            <div className="w-full max-h-[68vh] rounded-2xl overflow-hidden bg-pink-50/50 flex items-center justify-center shadow-inner mb-4 p-1">
              <img
                src={resolveAsset(galleryItems[selectedImageIndex].image || `images/memories/photo${galleryItems[selectedImageIndex].id}.jpeg`)}
                alt={galleryItems[selectedImageIndex].title}
                className="max-h-[64vh] max-w-full w-auto h-auto object-contain mx-auto rounded-xl shadow-sm"
              />
            </div>

            {/* Caption & Title */}
            <div className="text-center">
              <h3 className="font-display font-bold text-gray-900 text-xl sm:text-2xl mb-1">
                {galleryItems[selectedImageIndex].title}
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed max-w-md mx-auto">
                {galleryItems[selectedImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
