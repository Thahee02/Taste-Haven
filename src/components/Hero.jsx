import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hero({ onOpenReservation }) {
  const handleScrollToMenu = (e) => {
    e.preventDefault();
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      const offsetTop = menuSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden font-montserrat"
    >
      {/* Background Image with Premium Dark Overlay (Avoiding Gradients, using solid opacity layer) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 ease-linear scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80')`,
        }}
      ></div>
      
      {/* Solid Charcoal Overlay for High Luxury Contrast */}
      <div className="absolute inset-0 bg-brand-dark bg-opacity-75"></div>

      {/* Main Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        {/* Subtitle Badge */}
        <ScrollReveal animation="slide-down" delay={200} duration={900}>
          <div className="inline-flex items-center space-x-2 border border-brand-gold border-opacity-35 px-4 py-1.5 mb-6 bg-brand-darkDark bg-opacity-60">
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-ping"></span>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-brand-gold">
              Welcome to Taste Haven
            </span>
          </div>
        </ScrollReveal>

        {/* Large Headline */}
        <ScrollReveal animation="zoom-in" delay={400} duration={1000}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-playfair tracking-tight text-white leading-tight mb-6">
            Experience <br />
            <span className="text-brand-gold">Exceptional Dining</span>
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal animation="slide-up" delay={600} duration={900}>
          <p className="text-sm sm:text-base md:text-lg font-light text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Discover exquisite flavors crafted with passion and served in an elegant atmosphere. 
            A gastronomic journey tailored for fine food connoisseurs.
          </p>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal animation="slide-up" delay={850} duration={955}>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5 justify-center w-full max-w-md sm:max-w-none">
            <button
              onClick={onOpenReservation}
              className="bg-brand-gold text-brand-dark hover:bg-white hover:text-brand-dark px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest border border-brand-gold hover:border-white transition-luxury rounded-none"
            >
              Reserve a Table
            </button>
            <a
              href="#menu"
              onClick={handleScrollToMenu}
              className="bg-transparent border border-white text-white hover:border-brand-gold hover:text-brand-gold px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center justify-center space-x-2 transition-luxury rounded-none"
            >
              <span>View Menu</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              window.scrollTo({
                top: aboutSection.offsetTop - 80,
                behavior: 'smooth',
              });
            }
          }}
          className="flex flex-col items-center text-neutral-400 hover:text-brand-gold transition-colors duration-300 group focus:outline-none"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold mb-2 opacity-65 group-hover:opacity-100 transition-opacity">
            Scroll Down
          </span>
          <div className="w-[24px] h-[40px] border-2 border-neutral-400 group-hover:border-brand-gold rounded-full flex justify-center p-1.5 transition-colors">
            <div className="w-[4px] h-[8px] bg-neutral-400 group-hover:bg-brand-gold rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
}
