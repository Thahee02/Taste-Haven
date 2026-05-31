import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';
import { galleryImages } from '../data/galleryData';
import ScrollReveal from './ScrollReveal';

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  // Close lightbox on Escape press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIdx === null) return;
      if (e.key === 'Escape') setLightboxIdx(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIdx]);

  const handlePrev = () => {
    setLightboxIdx((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIdx((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-24 bg-brand-gray font-montserrat overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal animation="slide-down" delay={100}>
            <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold">
              Taste Haven Visual Story
            </span>
          </ScrollReveal>
          <ScrollReveal animation="zoom-in" delay={200}>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-brand-dark mt-2 leading-tight">
              Our Gallery
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={300}>
            <div className="h-0.5 bg-brand-gold w-24 mx-auto my-4"></div>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-lg mx-auto leading-relaxed">
              Take a visual tour through our kitchen, our dining salon, and our exquisite culinary presentations.
            </p>
          </ScrollReveal>
        </div>

        {/* Masonry/Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, idx) => (
            <ScrollReveal
              key={img.id}
              animation="zoom-in"
              delay={idx * 100}
              className="relative aspect-[4/3] group overflow-hidden bg-brand-dark shadow-md cursor-pointer border border-neutral-100"
            >
              <div 
                onClick={() => setLightboxIdx(idx)}
                className="w-full h-full"
              >
                {/* Image */}
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Luxurious Dark Hover Overlay (No Gradients) */}
                <div className="absolute inset-0 bg-brand-dark bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex flex-col justify-end p-6 z-10">
                  <div className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <div className="flex items-center space-x-2 text-brand-gold mb-1">
                      <Eye className="w-4 h-4" />
                      <span className="text-[10px] uppercase tracking-widest font-bold font-montserrat">
                        {img.category}
                      </span>
                    </div>
                    <h3 className="font-playfair font-bold text-lg text-white leading-tight mb-1">
                      {img.title}
                    </h3>
                    <p className="text-[10px] text-neutral-300 font-light leading-normal">
                      {img.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Premium Fullscreen Lightbox Modal */}
      {lightboxIdx !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-darkDark bg-opacity-95 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setLightboxIdx(null)}
        >
          {/* Close Lightbox Button */}
          <button
            onClick={() => setLightboxIdx(null)}
            className="absolute top-6 right-6 p-2 text-white hover:text-brand-gold hover:bg-neutral-800 rounded-full transition-colors z-55"
            aria-label="Close gallery fullscreen view"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Slider Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 p-3 bg-neutral-900 bg-opacity-50 hover:bg-opacity-85 text-white hover:text-brand-gold border border-neutral-800 transition-luxury z-55 rounded-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Main Content Area (Stops propagation so clicking details won't close lightbox) */}
          <div 
            className="relative max-w-4xl w-full flex flex-col items-center justify-center max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Slider Wrapper */}
            <div className="relative w-full max-h-[65vh] overflow-hidden bg-brand-dark border border-neutral-800 flex justify-center items-center">
              <img
                src={galleryImages[lightboxIdx].image}
                alt={galleryImages[lightboxIdx].title}
                className="max-w-full max-h-[65vh] object-contain animate-zoom-in duration-300"
              />
            </div>

            {/* Slider Image Description bar */}
            <div className="w-full bg-brand-dark p-6 border-t border-brand-gold border-opacity-20 text-left space-y-1 font-montserrat">
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">
                  {galleryImages[lightboxIdx].category}
                </span>
                <span className="text-xs text-neutral-400">
                  {lightboxIdx + 1} / {galleryImages.length}
                </span>
              </div>
              <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white">
                {galleryImages[lightboxIdx].title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed pt-1">
                {galleryImages[lightboxIdx].description}
              </p>
            </div>
          </div>

          {/* Next Slider Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 p-3 bg-neutral-900 bg-opacity-50 hover:bg-opacity-85 text-white hover:text-brand-gold border border-neutral-800 transition-luxury z-55 rounded-none"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      )}
    </section>
  );
}
