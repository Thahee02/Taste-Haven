import React, { useState } from 'react';
import { menuItems, menuCategories } from '../data/menuData';
import ScrollReveal from './ScrollReveal';

export default function Menu({ onOpenReservation }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white font-montserrat overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal animation="slide-down" delay={100}>
            <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold font-montserrat">
              Taste Haven Culinary Selection
            </span>
          </ScrollReveal>
          <ScrollReveal animation="zoom-in" delay={200}>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-brand-dark mt-2 leading-tight">
              Our Signature Menu
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={300}>
            <div className="h-0.5 bg-brand-gold w-24 mx-auto my-4"></div>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-lg mx-auto leading-relaxed">
              Explore our curated select of fine dining masterworks. Crafted with organic, high-end ingredients.
            </p>
          </ScrollReveal>
        </div>

        {/* Filter Category Tabs (Avoiding Gradients, clean outline transitions) */}
        <ScrollReveal animation="fade-in" delay={350} className="flex justify-center flex-wrap gap-2 mb-16">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 text-xs uppercase tracking-widest font-bold border transition-luxury rounded-none ${
                activeCategory === category
                  ? 'bg-brand-dark border-brand-dark text-brand-gold'
                  : 'bg-transparent border-neutral-200 text-neutral-500 hover:text-brand-dark hover:border-brand-dark'
              }`}
            >
              {category}
            </button>
          ))}
        </ScrollReveal>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="bg-brand-gray border border-neutral-100 hover:border-brand-gold hover:shadow-lg transition-luxury flex flex-col justify-between group overflow-hidden rounded-none animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Dish Image Container */}
              <div className="relative h-64 overflow-hidden bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Floating Tags */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                  {item.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 bg-brand-dark bg-opacity-80 border border-brand-gold border-opacity-35 text-[9px] uppercase tracking-widest text-brand-gold font-bold font-montserrat"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dish Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-playfair font-bold text-lg text-brand-dark group-hover:text-brand-gold transition-colors duration-500 leading-tight">
                      {item.name}
                    </h3>
                    <span className="font-montserrat font-bold text-brand-gold text-lg shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed mb-6 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Sub Action (Reserve table) */}
                <div className="border-t border-neutral-200 pt-4 flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
                    {item.category} Selection
                  </span>
                  <button
                    onClick={onOpenReservation}
                    className="text-xs font-semibold text-brand-dark hover:text-brand-gold uppercase tracking-widest focus:outline-none transition-luxury"
                  >
                    Order To Table
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to view menu */}
        <ScrollReveal animation="slide-up" delay={400} className="text-center mt-16">
          <button
            onClick={onOpenReservation}
            className="bg-brand-dark text-brand-gold hover:bg-brand-gold hover:text-brand-dark px-10 py-4 text-xs font-bold uppercase tracking-widest border border-brand-gold transition-luxury rounded-none"
          >
            Reserve Table To Enjoy Full Menu
          </button>
        </ScrollReveal>

      </div>
    </section>
  );
}
