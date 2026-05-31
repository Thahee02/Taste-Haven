import React from 'react';
import { Award, Users, UtensilsCrossed } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function About() {
  const stats = [
    {
      id: 1,
      icon: <Award className="w-6 h-6 text-brand-gold" />,
      number: '15+',
      title: 'Years Experience',
      desc: 'Of culinary craftsmanship and refinement.'
    },
    {
      id: 2,
      icon: <Users className="w-6 h-6 text-brand-gold" />,
      number: '10,000+',
      title: 'Happy Customers',
      desc: 'Who have shared our gastronomic journey.'
    },
    {
      id: 3,
      icon: <UtensilsCrossed className="w-6 h-6 text-brand-gold" />,
      number: '50+',
      title: 'Signature Dishes',
      desc: 'Masterfully prepared by Michelin chefs.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-brand-gray font-montserrat overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Story + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Column: Image with offset frame */}
          <ScrollReveal animation="slide-right" delay={200} className="relative">
            {/* Background Decorative Gold Frame (No Gradients) */}
            <div className="absolute top-4 left-4 right-[-16px] bottom-[-16px] border border-brand-gold hidden sm:block pointer-events-none z-0"></div>
            
            {/* Image Container */}
            <div className="relative z-10 overflow-hidden bg-brand-dark shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80"
                alt="Our Culinary Directors at work"
                className="w-full h-[32rem] object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            
            {/* Floating luxury credential */}
            <div className="absolute bottom-6 left-6 z-20 bg-brand-dark text-white p-5 border-l-4 border-brand-gold shadow-lg max-w-xs hidden sm:block">
              <p className="text-xs uppercase tracking-widest text-brand-gold font-bold mb-1">
                Michelin Guide
              </p>
              <p className="text-sm font-playfair font-semibold">
                "Recognized for culinary excellence & extraordinary hospitality."
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column: Narrative Story */}
          <ScrollReveal animation="slide-left" delay={300} className="flex flex-col space-y-6">
            <div>
              <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold font-montserrat">
                Our Heritage
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-brand-dark mt-2 leading-tight">
                Crafting Culinary Masterpieces Since 2011
              </h2>
            </div>

            <div className="h-0.5 bg-brand-gold w-20"></div>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
              At **Taste Haven**, we believe that dining is not merely about food; it is an immersive sensory journey. 
              Founded in 2011, our philosophy centers on uniting ancient culinary secrets with innovative gastronomic techniques 
              to craft dishes that evoke emotion and leave lasting impressions.
            </p>

            <p className="text-sm text-neutral-500 leading-relaxed font-light">
              Our executive chef, inspired by global cuisines and armed with Michelin-starred experience, meticulously selects 
              organic, seasonal ingredients from sustainable, local farms. Every flavor profile is scrutinized, and every presentation 
              is executed with artistic precision, creating an atmosphere where luxury meets warm, authentic hospitality.
            </p>

            {/* Chef Signature Block */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-gold border-opacity-30">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=150&h=150&q=80"
                  alt="Executive Chef"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-playfair text-brand-dark font-bold text-lg block">
                  Jean-Luc Sterling
                </span>
                <span className="text-xs text-brand-gold uppercase tracking-wider block">
                  Executive Chef & Co-Founder
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <ScrollReveal
              key={stat.id}
              animation="slide-up"
              delay={150 * idx}
              className="bg-white p-8 border border-neutral-100 hover:border-brand-gold hover:shadow-lg transition-luxury group flex flex-col items-center text-center rounded-none"
            >
              <div className="p-3 bg-brand-gray group-hover:bg-brand-dark transition-luxury mb-4 rounded-none">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold font-playfair text-brand-dark group-hover:text-brand-gold transition-colors duration-500 mb-2">
                {stat.number}
              </h3>
              <p className="text-sm font-semibold uppercase tracking-wider text-neutral-800 mb-2">
                {stat.title}
              </p>
              <p className="text-xs text-neutral-400 font-light max-w-xs leading-relaxed">
                {stat.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
