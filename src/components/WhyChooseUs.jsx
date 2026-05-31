import React from 'react';
import { ChefHat, Salad, GlassWater, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: <Salad className="w-8 h-8 text-brand-gold" />,
      title: 'Fresh Ingredients',
      desc: '100% organic, seasonal herbs, and produce handpicked daily from certified sustainable, bio-dynamic local farms.'
    },
    {
      id: 2,
      icon: <ChefHat className="w-8 h-8 text-brand-gold" />,
      title: 'Expert Chefs',
      desc: 'Our culinary masterminds bring Michelin-starred training and global award accolades directly to your plate.'
    },
    {
      id: 3,
      icon: <GlassWater className="w-8 h-8 text-brand-gold" />,
      title: 'Elegant Ambience',
      desc: 'Thoughtfully designed interiors with custom brass details, dim lighting, and soft, immersive acoustics.'
    },
    {
      id: 4,
      icon: <Star className="w-8 h-8 text-brand-gold" />,
      title: 'Fast & Synchronized Service',
      desc: 'Highly attentive, synchronized table hospitality ensuring a relaxed but perfectly timed dining sequence.'
    }
  ];

  return (
    <section className="py-24 bg-brand-darkDark font-montserrat overflow-hidden border-t border-b border-brand-gold border-opacity-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal animation="slide-down" delay={100}>
            <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold">
              The Taste Haven Standard
            </span>
          </ScrollReveal>
          <ScrollReveal animation="zoom-in" delay={200}>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-white mt-2 leading-tight">
              Why Dine With Us?
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={300}>
            <div className="h-0.5 bg-brand-gold w-24 mx-auto my-4"></div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed">
              We focus on premium details and absolute consistency to deliver an unmatched culinary encounter.
            </p>
          </ScrollReveal>
        </div>

        {/* Feature Cards Grid (Dark Charcoal theme) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <ScrollReveal
              key={feature.id}
              animation="slide-up"
              delay={idx * 150}
              className="bg-brand-dark p-8 border border-neutral-800 hover:border-brand-gold transition-luxury group flex flex-col items-center text-center rounded-none"
            >
              {/* Icon Container */}
              <div className="p-4 bg-brand-darkLight group-hover:bg-brand-gold transition-luxury mb-6 rounded-none">
                <div className="group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(feature.icon, {
                    className: 'w-8 h-8 text-brand-gold group-hover:text-brand-dark transition-colors duration-500'
                  })}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-playfair font-bold text-xl text-white group-hover:text-brand-gold transition-colors duration-500 mb-3">
                {feature.title}
              </h3>

              {/* Divider */}
              <div className="h-0.5 bg-brand-gold w-10 mb-4 opacity-50 group-hover:w-16 transition-all duration-500"></div>

              {/* Description */}
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                {feature.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
