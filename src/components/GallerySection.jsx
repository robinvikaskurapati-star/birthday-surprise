import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Heart, Sparkles, Image as ImageIcon } from 'lucide-react';
import { personalization } from '../data/personalization';

export default function GallerySection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const galleryItems = personalization.gallery;

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  // Romantic placeholder art renderer if user hasn't added custom photos yet
  const renderCardVisual = (item, index) => {
    if (item.image) {
      return (
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded-sm group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      );
    }

    // High quality aesthetic illustrated placeholder
    const gradients = [
      'from-pink-100 via-rose-100 to-amber-50',
      'from-rose-100 via-pink-200 to-purple-100',
      'from-peach-100 via-pink-100 to-rose-200',
      'from-purple-100 via-pink-100 to-pink-50',
      'from-rose-50 via-pink-100 to-red-100',
      'from-pink-100 via-rose-200 to-amber-100',
    ];

    const icons = ['☕', '✨', '🌿', '🌙', '💖', '🥂'];

    return (
      <div
        className={`w-full h-full bg-gradient-to-br ${gradients[index % gradients.length]} rounded-sm flex flex-col items-center justify-center p-4 text-center border border-pink-200/50 relative overflow-hidden`}
      >
        <div className="text-4xl mb-2 animate-bounce" style={{ animationDuration: '3s' }}>
          {icons[index % icons.length]}
        </div>
        <p className="text-xs font-semibold text-pink-800 tracking-wide">{item.title}</p>
        <span className="text-[10px] text-pink-600/70 mt-1 font-mono">Tap to enlarge</span>
      </div>
    );
  };

  return (
    <section id="memories" className="py-20 px-4 relative bg-[#fff4f7]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Cherished Memories</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-gray-900 mb-3">
            Our Scrapbook & Polaroids 📸💗
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto text-base sm:text-lg font-light">
            Every snapshot holds a sweet memory of us laughing, loving, and growing together.
          </p>
          <p className="text-xs text-pink-600/70 mt-2">
            (To add your personal photos: drop images into <code className="bg-white/80 px-1 py-0.5 rounded font-mono">public/photos/</code> and update <code className="bg-white/80 px-1 py-0.5 rounded font-mono">personalization.js</code>!)
          </p>
        </div>

        {/* Polaroid Scrapbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className={`cursor-pointer group relative bg-white p-4 pb-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] ${item.rotation} hover:rotate-0`}
            >
              {/* Cute Washi Tape at top */}
              <div className="washi-tape -top-3 left-1/2 -translate-x-1/2" />

              {/* Photo Area */}
              <div className={`w-full ${item.aspect || 'aspect-square'} bg-pink-50 rounded-sm overflow-hidden mb-4 relative shadow-inner`}>
                {renderCardVisual(item, index)}
              </div>

              {/* Handwritten Style Caption */}
              <div className="text-center px-1">
                <p className="font-handwriting text-2xl font-bold text-gray-800 leading-tight">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2 font-light">
                  {item.caption}
                </p>
                <span className="inline-block mt-2 text-[10px] uppercase font-semibold tracking-wider text-pink-400">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
              aria-label="Close photo viewer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-md transition-all hover:scale-110"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-md transition-all hover:scale-110"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Modal Image Display */}
            <div className="w-full max-h-[60vh] min-h-[250px] rounded-xl overflow-hidden flex items-center justify-center bg-pink-50 mb-4">
              {galleryItems[selectedImageIndex].image ? (
                <img
                  src={galleryItems[selectedImageIndex].image}
                  alt={galleryItems[selectedImageIndex].title}
                  className="max-h-[60vh] w-auto object-contain"
                />
              ) : (
                <div className="py-16 text-center px-4">
                  <div className="text-6xl mb-3">📸💖</div>
                  <h4 className="text-xl font-display font-bold text-pink-700">
                    {galleryItems[selectedImageIndex].title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-2 max-w-sm mx-auto">
                    Replace this in <code className="bg-pink-100 px-1 py-0.5 rounded text-pink-700">personalization.js</code> with your real picture!
                  </p>
                </div>
              )}
            </div>

            {/* Caption & Info */}
            <div className="text-center max-w-lg">
              <h3 className="font-handwriting text-3xl font-bold text-gray-900">
                {galleryItems[selectedImageIndex].title}
              </h3>
              <p className="text-sm text-gray-600 mt-1 font-light">
                {galleryItems[selectedImageIndex].caption}
              </p>
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-pink-500 font-medium">
                <Heart className="w-3.5 h-3.5 fill-pink-500" />
                <span>{galleryItems[selectedImageIndex].date}</span>
                <Heart className="w-3.5 h-3.5 fill-pink-500" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
