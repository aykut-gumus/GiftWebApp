'use client';

import { useState } from 'react';

export default function AIHighlight() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center mb-6 sm:mb-8">
      <div 
        className={`
          relative inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 
          bg-white/15 backdrop-blur-md border border-white/30 rounded-full shadow-lg
          transform transition-all duration-300 ease-out
          hover:shadow-xl sm:hover:shadow-2xl hover:scale-105
          ${isHovered ? 'shadow-purple-200' : ''}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated Background - Hidden on mobile */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-indigo-400/10 rounded-full animate-pulse"></div>
        
        {/* Glow Effect - Hidden on mobile */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-indigo-400/20 rounded-full blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center">
          <span className="text-2xl sm:text-3xl mr-2 sm:mr-3 animate-bounce">🤖</span>
          <span className="text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent drop-shadow-sm">
            Yapay Zekâ Destekli Öneri Sistemi
          </span>
        </div>
        
        {/* Sparkle Effects - Hidden on mobile */}
        <div className="hidden sm:block absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="hidden sm:block absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
} 