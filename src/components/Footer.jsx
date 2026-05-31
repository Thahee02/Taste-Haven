import React from 'react';
import { Utensils, Globe, Camera, Send, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const sectionEl = document.getElementById(id);
    if (sectionEl) {
      const offsetTop = sectionEl.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-brand-darkDark text-neutral-400 font-montserrat pt-16 pb-8 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo and Description Column */}
          <div className="space-y-6">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, 'home')}
              className="flex items-center space-x-2 group focus:outline-none"
            >
              <div className="p-2 border border-brand-gold bg-brand-dark rounded-none">
                <Utensils className="w-5 h-5 text-brand-gold" />
              </div>
              <span className="text-xl font-bold font-playfair tracking-wider text-white">
                TASTE HAVEN
              </span>
            </a>
            
            <p className="text-xs font-light leading-relaxed text-neutral-500">
              An upscale dining sanctuary where global ingredients meet local organics, crafted by Michelin-starred masters and served in absolute timeless elegance.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="#"
                className="p-2.5 bg-neutral-900 hover:bg-brand-gold hover:text-brand-dark text-neutral-400 border border-neutral-800 hover:border-brand-gold transition-luxury rounded-none"
                aria-label="Follow Taste Haven on Facebook"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-neutral-900 hover:bg-brand-gold hover:text-brand-dark text-neutral-400 border border-neutral-800 hover:border-brand-gold transition-luxury rounded-none"
                aria-label="Follow Taste Haven on Instagram"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-neutral-900 hover:bg-brand-gold hover:text-brand-dark text-neutral-400 border border-neutral-800 hover:border-brand-gold transition-luxury rounded-none"
                aria-label="Follow Taste Haven on Twitter / X"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-neutral-900 hover:bg-brand-gold hover:text-brand-dark text-neutral-400 border border-neutral-800 hover:border-brand-gold transition-luxury rounded-none"
                aria-label="Read Reviews on TripAdvisor"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-playfair font-bold text-lg text-white uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-3.5 text-xs font-light">
              <a
                href="#home"
                onClick={(e) => handleLinkClick(e, 'home')}
                className="hover:text-brand-gold transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleLinkClick(e, 'about')}
                className="hover:text-brand-gold transition-colors duration-300"
              >
                About Us
              </a>
              <a
                href="#menu"
                onClick={(e) => handleLinkClick(e, 'menu')}
                className="hover:text-brand-gold transition-colors duration-300"
              >
                Our Menu
              </a>
              <a
                href="#gallery"
                onClick={(e) => handleLinkClick(e, 'gallery')}
                className="hover:text-brand-gold transition-colors duration-300"
              >
                Gallery Collection
              </a>
              <a
                href="#testimonials"
                onClick={(e) => handleLinkClick(e, 'testimonials')}
                className="hover:text-brand-gold transition-colors duration-300"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="hover:text-brand-gold transition-colors duration-300"
              >
                Contact & Booking
              </a>
            </div>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="font-playfair font-bold text-lg text-white uppercase tracking-wider mb-6">
              Contact Us
            </h4>
            <div className="space-y-4 text-xs font-light text-neutral-500">
              <p className="leading-relaxed">
                <strong className="text-neutral-400 font-semibold block">Address</strong>
                104 Culinary Boulevard, Suite 500,<br />
                Gourmet Plaza, NY 10012
              </p>
              <p>
                <strong className="text-neutral-400 font-semibold block">Booking Hotlines</strong>
                +1 (555) 123-4567<br />
                +1 (555) 987-6543
              </p>
              <p>
                <strong className="text-neutral-400 font-semibold block">Enquiries Email</strong>
                inquire@tastehaven.com
              </p>
            </div>
          </div>

          {/* Luxury Newsletter Column */}
          <div>
            <h4 className="font-playfair font-bold text-lg text-white uppercase tracking-wider mb-6">
              The Club Bulletin
            </h4>
            <p className="text-xs font-light leading-relaxed text-neutral-500 mb-4">
              Subscribe to receive exclusive invitations to our private dining events, tasting menus, and culinary salons.
            </p>
            <form 
              onSubmit={(e) => e.preventDefault()} 
              className="flex border border-neutral-800 focus-within:border-brand-gold transition-luxury bg-neutral-900 p-1"
            >
              <input
                type="email"
                placeholder="Enter email address"
                required
                className="w-full px-3 py-2 bg-transparent text-white text-xs placeholder-neutral-600 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-brand-gold text-brand-dark hover:bg-white hover:text-brand-dark text-[10px] font-bold uppercase tracking-widest px-4 py-2 transition-luxury shrink-0"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-900 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-light text-neutral-600 space-y-4 sm:space-y-0">
          <p>© {currentYear} Taste Haven. All rights reserved.</p>
          <p className="tracking-wider">
            Developed by{' '}
            <a
              href="#"
              className="text-brand-gold font-semibold hover:text-white transition-colors duration-300"
            >
              UnitSpring - Smart Digital Solutions
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
