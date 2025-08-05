'use client';

import { useState, useEffect } from 'react';

export default function CTAButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 200);
  };

  return (
    <div className="relative group">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500 scale-110 group-hover:scale-125"></div>
      
      {/* Main Button Container */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          relative px-8 py-4 sm:px-12 sm:py-6 
          bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 
          hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700
          text-white font-bold text-lg sm:text-xl rounded-2xl
          transform transition-all duration-300 ease-out
          shadow-2xl hover:shadow-3xl
          border-2 border-white/20 hover:border-white/40
          overflow-hidden
          ${isPressed ? 'scale-95' : 'hover:scale-105'}
        `}
      >
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
        
        {/* Content Container */}
        <div className="relative flex items-center justify-center space-x-3">
          {/* Gift Icon */}
          <div className={`
            text-2xl sm:text-3xl transition-all duration-300
            ${isHovered ? 'animate-bounce' : ''}
          `}>
            🎁
          </div>
          
          {/* Text */}
          <span className="font-black tracking-wide drop-shadow-lg">
            Hediye Önerisi Al!
          </span>
          
          {/* Arrow Icon */}
          <div className={`
            text-xl sm:text-2xl transition-all duration-300
            ${isHovered ? 'translate-x-2' : 'translate-x-0'}
          `}>
            →
          </div>
        </div>
        
        {/* Ripple Effect */}
        {isPressed && (
          <div className="absolute inset-0 bg-white/30 rounded-2xl animate-ping"></div>
        )}
      </button>
      
      {/* Floating Elements - Subtle and Clean */}
      <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-pink-400 rounded-full opacity-60 animate-pulse delay-500"></div>
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-indigo-400 rounded-full opacity-60 animate-pulse delay-1500"></div>
    </div>
  );
} 