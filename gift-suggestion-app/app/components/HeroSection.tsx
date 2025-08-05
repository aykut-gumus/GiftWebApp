'use client';

import { useEffect, useState } from 'react';
import AIHighlight from './AIHighlight';
import CTAButton from './CTAButton';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden pt-16 sm:pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles - Hidden on mobile for performance */}
        <div className="hidden sm:block absolute top-20 left-10 w-4 h-4 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="hidden sm:block absolute top-40 right-20 w-6 h-6 bg-pink-400 rounded-full animate-bounce opacity-40"></div>
        <div className="hidden sm:block absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-50"></div>
        <div className="hidden sm:block absolute bottom-20 right-10 w-5 h-5 bg-indigo-400 rounded-full animate-pulse opacity-30"></div>
        
        {/* Gradient Orbs - Smaller on mobile */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Geometric Shapes - Hidden on mobile */}
        <div className="hidden lg:block absolute top-1/3 right-1/3 w-32 h-32 border-2 border-purple-300/30 rounded-full animate-spin-slow"></div>
        <div className="hidden lg:block absolute bottom-1/3 left-1/3 w-24 h-24 border-2 border-pink-300/30 rotate-45 animate-pulse"></div>
      </div>

      <div className={`text-center max-w-4xl sm:max-w-5xl mx-auto relative z-10 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Decorative Elements - Hidden on mobile */}
        <div className="hidden sm:block absolute -top-20 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-60"></div>
        
        {/* Main Title with Enhanced Effects */}
        <div className="relative mb-6 sm:mb-8">
          {/* Multiple Glow Layers */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent blur-lg opacity-30 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent blur-md opacity-20 animate-pulse delay-500"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent blur-sm opacity-25 animate-pulse delay-1000"></div>
          
          {/* Main Title */}
          <h1 className="relative text-4xl sm:text-6xl md:text-8xl font-black mb-4 sm:mb-6 leading-tight">
            {/* Primary Gradient */}
            <span className="bg-gradient-to-r from-yellow-300 via-orange-400 via-pink-500 via-purple-500 to-indigo-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-2xl">
              HEDİYE
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 via-pink-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent animate-gradient-x drop-shadow-2xl">
              BULUCU
            </span>
          </h1>
          
          {/* Animated Border Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-orange-500 via-pink-500 via-purple-500 to-indigo-400 rounded-lg blur-xl opacity-20 animate-pulse"></div>
          
          {/* Floating Sparkles Around Title */}
          <div className="absolute -top-4 -left-4 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute -top-2 -right-2 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-60 delay-300"></div>
          <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60 delay-600"></div>
          <div className="absolute -bottom-4 -right-4 w-3 h-3 bg-indigo-400 rounded-full animate-ping opacity-60 delay-900"></div>
          <div className="absolute top-1/2 -left-6 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping opacity-60 delay-1200"></div>
          <div className="absolute top-1/2 -right-6 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping opacity-60 delay-1500"></div>
        </div>
        
        {/* Enhanced Slogan */}
        <div className="relative mb-8 sm:mb-12">
          <p className="text-lg sm:text-2xl md:text-3xl text-white mb-2 sm:mb-4 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-lg px-2">
            Sevdiklerin için en uygun hediyeyi
          </p>
          <p className="text-lg sm:text-2xl md:text-3xl bg-gradient-to-r from-yellow-200 via-orange-200 via-pink-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent font-bold drop-shadow-lg px-2 animate-pulse">
            yapay zekâ ile bul!
          </p>
        </div>
        
        {/* Enhanced AI Badge */}
        <div className="mb-8 sm:mb-12 transform hover:scale-105 transition-transform duration-300">
          <AIHighlight />
        </div>
        
        {/* Enhanced CTA Button Container */}
        <div className="relative">
          {/* Multiple Pulsing Rings - Reduced on mobile */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-full blur-lg sm:blur-xl opacity-20 sm:opacity-30 animate-pulse"></div>
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-full blur-2xl opacity-20 animate-pulse delay-500"></div>
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
          
          {/* Animated Border Rings - Hidden on mobile */}
          <div className="hidden sm:block absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 p-1 opacity-0 hover:opacity-100 transition-opacity duration-500 animate-spin-slow">
            <div className="w-full h-full bg-white rounded-full"></div>
          </div>
          
          {/* Sparkle Effects Around Button - Hidden on mobile */}
          <div className="hidden sm:block absolute -top-4 -left-4 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
          <div className="hidden sm:block absolute -top-2 -right-2 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-60 delay-300"></div>
          <div className="hidden sm:block absolute -bottom-2 -left-2 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60 delay-600"></div>
          <div className="hidden sm:block absolute -bottom-4 -right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-60 delay-900"></div>
          
          {/* Main Button */}
          <div className="relative">
            <CTAButton />
          </div>
          
          {/* Energy Waves - Hidden on mobile */}
          <div className="hidden sm:block absolute inset-0 rounded-full border-2 border-purple-300/30 scale-0 hover:scale-125 transition-transform duration-1000 ease-out"></div>
          <div className="hidden sm:block absolute inset-0 rounded-full border-2 border-pink-300/30 scale-0 hover:scale-150 transition-transform duration-1000 ease-out delay-200"></div>
        </div>

        {/* Bottom Decorative Line - Hidden on mobile */}
        <div className="hidden sm:block absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-t from-transparent via-purple-400 to-transparent opacity-60"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-0.5 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 