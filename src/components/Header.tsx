import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}>
              Luxury Accommodations
            </h1>
          </div>
          
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className={`hover:text-amber-600 transition-colors ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('properties')}
                className={`hover:text-amber-600 transition-colors ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                Properties
              </button>
              <button
                onClick={() => scrollToSection('facilities')}
                className={`hover:text-amber-600 transition-colors ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                Facilities
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`hover:text-amber-600 transition-colors ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                Contact
              </button>
              <a
                href="tel:+27622738240"
                className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors flex items-center gap-2"
              >
                <Phone size={16} />
                Book Now
              </a>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('hero')}
                className="block px-3 py-2 text-slate-700 hover:text-amber-600 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('properties')}
                className="block px-3 py-2 text-slate-700 hover:text-amber-600 w-full text-left"
              >
                Properties
              </button>
              <button
                onClick={() => scrollToSection('facilities')}
                className="block px-3 py-2 text-slate-700 hover:text-amber-600 w-full text-left"
              >
                Facilities
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-slate-700 hover:text-amber-600 w-full text-left"
              >
                Contact
              </button>
              <a
                href="tel:+27622738240"
                className="block px-3 py-2 text-amber-600 font-semibold"
              >
                Book Now: +27 (0) 62 273 8240
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;