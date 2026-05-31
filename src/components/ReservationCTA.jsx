import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function ReservationCTA({ onOpenReservation }) {
  return (
    <section className="py-20 bg-brand-gold font-montserrat overflow-hidden relative">
      {/* Subtle border details for luxury branding */}
      <div className="absolute inset-4 border border-brand-dark bg-transparent border-opacity-10 pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <ScrollReveal animation="slide-down" delay={100}>
          <span className="text-brand-dark font-semibold text-xs sm:text-sm uppercase tracking-widest block mb-3">
            Exquisite Gastronomy Awaits
          </span>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in" delay={200}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-brand-dark mb-4 leading-tight">
            Reserve Your Table Today
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={300}>
          <p className="text-sm sm:text-base text-brand-dark text-opacity-80 max-w-lg mx-auto mb-8 font-light leading-relaxed">
            Book your dining experience and enjoy unforgettable flavors crafted with passion and served in an elegant atmosphere.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={400}>
          <button
            onClick={onOpenReservation}
            className="bg-brand-dark text-white hover:bg-white hover:text-brand-dark text-xs sm:text-sm font-bold uppercase tracking-widest px-8 py-4 border border-brand-dark transition-luxury rounded-none"
          >
            Make Reservation
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
