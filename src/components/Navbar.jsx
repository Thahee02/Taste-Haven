import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Utensils } from 'lucide-react';

export default function Navbar({ onOpenReservation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Dynamic height & style on scroll
      setIsScrolled(window.scrollY > 50);

      // Section spy detection
      const scrollPos = window.scrollY + 120;
      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const sectionEl = document.getElementById(sectionId);
        if (sectionEl) {
          const offsetTop = sectionEl.offsetTop;
          const offsetHeight = sectionEl.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const sectionId = href.substring(1);
    const sectionEl = document.getElementById(sectionId);
    if (sectionEl) {
      const offsetTop = sectionEl.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 font-montserrat ${
        isScrolled
          ? 'bg-brand-darkDark bg-opacity-95 py-4 border-b border-brand-gold border-opacity-10 shadow-lg backdrop-blur-md'
          : 'bg-brand-darkDark bg-opacity-40 py-6 border-b border-white border-opacity-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on Left */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="p-2 border border-brand-gold bg-brand-dark rounded-none group-hover:bg-brand-gold group-hover:border-white transition-luxury">
              <Utensils className="w-5 h-5 text-brand-gold group-hover:text-brand-dark transition-colors duration-500" />
            </div>
            <span className="text-xl sm:text-2xl font-bold font-playfair tracking-wider text-white group-hover:text-brand-gold transition-colors duration-500">
              TASTE HAVEN
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative text-xs uppercase tracking-widest font-semibold transition-luxury focus:outline-none hover:text-brand-gold py-2 ${
                    isActive ? 'text-brand-gold' : 'text-neutral-300'
                  }`}
                >
                  {link.name}
                  {/* Underline indicator */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 hover:w-full'
                    }`}
                  ></span>
                </a>
              );
            })}
          </div>

          {/* Reserve Table Button (Desktop) */}
          <div className="hidden lg:block">
            <button
              onClick={onOpenReservation}
              className="bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark text-xs uppercase tracking-widest font-bold px-6 py-3 transition-luxury rounded-none"
            >
              Reserve Table
            </button>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-300 hover:text-brand-gold p-1.5 focus:outline-none rounded-sm transition-colors duration-300"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Drawer Menu */}
      <div
        className={`fixed top-[73px] right-0 bottom-0 w-80 bg-brand-darkDark border-l border-brand-gold border-opacity-10 z-50 transform transition-transform duration-500 ease-out lg:hidden shadow-2xl flex flex-col justify-between py-8 px-6 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Navigation Links */}
        <div className="space-y-6 flex flex-col">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm uppercase tracking-widest font-semibold py-2.5 border-b border-neutral-900 focus:outline-none transition-luxury hover:text-brand-gold hover:pl-2 ${
                  isActive ? 'text-brand-gold pl-2 border-brand-gold border-opacity-20' : 'text-neutral-300'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Reserve Button in Mobile Drawer */}
        <div className="mt-8">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenReservation();
            }}
            className="w-full text-center bg-brand-gold text-brand-dark hover:bg-white hover:text-brand-dark text-xs uppercase tracking-widest font-bold py-4 border border-brand-gold transition-luxury rounded-none"
          >
            Reserve Table
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 top-[73px] bg-brand-darkDark bg-opacity-70 backdrop-blur-sm z-40 lg:hidden"
        ></div>
      )}
    </nav>
  );
}
