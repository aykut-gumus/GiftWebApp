'use client';

import { useState, useEffect } from 'react';

export default function Header() {
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
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Ana Sayfa', href: '#hero' },
    { id: 'how-it-works', label: 'Nasıl Çalışır', href: '#how-it-works' },
    { id: 'testimonials', label: 'Yorumlar', href: '#testimonials' },
    { id: 'footer', label: 'İletişim', href: '#footer' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              Hediye Bulucu
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium relative group"
              >
                {item.label}
                {/* Hover Underline Effect */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
            
            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('hero')}
              className="px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white text-sm font-semibold rounded-full hover:from-pink-600 hover:via-purple-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Hediye Önerisi Al
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 text-white hover:text-pink-400 transition-colors duration-300"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 top-3' : 'top-1'
              }`}></span>
              <span className={`absolute left-0 w-6 h-0.5 bg-current top-3 transform transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 top-3' : 'top-5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-4 border-t border-white/10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-white/80 hover:text-white transition-colors duration-300 text-base font-medium py-2 px-4 rounded-lg hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile CTA Button */}
            <button
              onClick={() => scrollToSection('hero')}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white font-semibold rounded-full hover:from-pink-600 hover:via-purple-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Hediye Önerisi Al
            </button>
          </nav>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
} 