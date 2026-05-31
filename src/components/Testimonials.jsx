import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonialsData';
import ScrollReveal from './ScrollReveal';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white font-montserrat overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal animation="slide-down" delay={100}>
            <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold">
              Patron Experiences
            </span>
          </ScrollReveal>
          <ScrollReveal animation="zoom-in" delay={200}>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-brand-dark mt-2 leading-tight">
              Testimonials
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={300}>
            <div className="h-0.5 bg-brand-gold w-24 mx-auto my-4"></div>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-lg mx-auto leading-relaxed">
              Read honest stories and dining feedback shared by our esteemed guests.
            </p>
          </ScrollReveal>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <ScrollReveal
              key={test.id}
              animation="slide-up"
              delay={idx * 150}
              className="bg-brand-gray border border-neutral-100 p-8 flex flex-col justify-between relative group hover:border-brand-gold hover:shadow-lg transition-luxury rounded-none"
            >
              {/* Premium Quote Mark Decoration */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-neutral-200 group-hover:text-brand-gold group-hover:opacity-20 transition-colors duration-500 pointer-events-none" />

              {/* Review Text */}
              <div className="flex-grow space-y-4">
                {/* Stars Row */}
                <div className="flex items-center space-x-1">
                  {[...Array(test.rating)].map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className="w-4 h-4 fill-brand-gold text-brand-gold"
                    />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed italic font-light">
                  "{test.review}"
                </p>
              </div>

              {/* Profile Block */}
              <div className="flex items-center space-x-4 border-t border-neutral-200 pt-6 mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-gold border-opacity-35 shrink-0">
                  <img
                    src={test.photo}
                    alt={test.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-sm sm:text-base text-brand-dark group-hover:text-brand-gold transition-colors duration-500">
                    {test.name}
                  </h4>
                  <span className="text-[10px] text-neutral-400 font-medium block">
                    {test.role}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
