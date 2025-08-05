'use client';

import { useState, useEffect } from 'react';

interface Step {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

const steps: Step[] = [
  {
    id: 1,
    icon: "👤",
    title: "Kişi Bilgilerini Gir",
    description: "Hediye alacağın kişinin yaşını, ilgi alanlarını, hobilerini ve tercihlerini belirt.",
    color: "from-pink-500 to-purple-500"
  },
  {
    id: 2,
    icon: "🤖",
    title: "AI Analiz Etsin",
    description: "Yapay zekâmız kişinin özelliklerini analiz ederek en uygun hediye kategorilerini belirler.",
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: 3,
    icon: "💡",
    title: "Öneriler Al",
    description: "Kişiselleştirilmiş hediye önerilerini al ve en uygun olanını seç.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    id: 4,
    icon: "🎁",
    title: "Mutlu Et",
    description: "Seçtiğin hediyeyi al ve sevdiklerini mutlu et!",
    color: "from-blue-500 to-cyan-500"
  }
];

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-blue-900/80 via-cyan-900/80 to-teal-900/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 via-blue-100 to-teal-100 bg-clip-text text-transparent drop-shadow-lg">
            Nasıl Çalışır?
          </h2>
          <p className="text-lg sm:text-xl text-white max-w-2xl sm:max-w-3xl mx-auto drop-shadow-lg px-2">
            Hediye Bulucu, yapay zekâ teknolojisi ile kişiselleştirilmiş hediye önerileri sunar. 
            Sadece birkaç adımda mükemmel hediyeyi bul!
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`
                relative group
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{
                animationDelay: `${index * 200}ms`,
                transitionDelay: `${index * 200}ms`
              }}
            >
              {/* Step Card */}
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 h-full border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="text-center mb-4 sm:mb-6">
                  <div className="text-4xl sm:text-6xl mb-3 sm:mb-4 animate-bounce-gentle">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 drop-shadow-sm">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed drop-shadow-sm">
                    {step.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-400/5 to-teal-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Decorative Elements - Hidden on mobile */}
                <div className="hidden sm:block absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse opacity-60"></div>
                <div className="hidden sm:block absolute bottom-4 left-4 w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full animate-ping opacity-40"></div>
              </div>

              {/* Connection Line (for desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transform -translate-y-1/2 z-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 text-center">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚡</div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 drop-shadow-sm">Hızlı Sonuç</h3>
            <p className="text-xs sm:text-sm text-gray-200 drop-shadow-sm">
              Saniyeler içinde kişiselleştirilmiş öneriler al
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 text-center">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 drop-shadow-sm">Doğru Öneriler</h3>
            <p className="text-xs sm:text-sm text-gray-200 drop-shadow-sm">
              AI teknolojisi ile %95 doğruluk oranı
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 text-center">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔒</div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 drop-shadow-sm">Güvenli</h3>
            <p className="text-xs sm:text-sm text-gray-200 drop-shadow-sm">
              Kişisel bilgileriniz güvende kalır
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
              Hemen Başla!
            </h3>
            <p className="text-sm sm:text-base text-gray-200 mb-4 sm:mb-6 max-w-2xl mx-auto drop-shadow-sm px-2">
              Yapay zekâ destekli hediye önerilerimizi deneyin ve sevdiklerinizi mutlu edin.
            </p>
            <button className="px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:via-blue-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base">
              Hediye Önerisi Al
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 