'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ayşe K.",
    rating: 5,
    comment: "Harika bir deneyim! Kardeşim için mükemmel bir hediye buldum. Yapay zekâ gerçekten çok akıllı öneriler veriyor.",
    avatar: "👩‍💼",
    date: "2 gün önce"
  },
  {
    id: 2,
    name: "Mehmet Y.",
    rating: 5,
    comment: "Annemin doğum günü için ne alacağımı bilmiyordum. Bu uygulama sayesinde çok beğendiği bir hediye aldım!",
    avatar: "👨‍💻",
    date: "1 hafta önce"
  },
  {
    id: 3,
    name: "Zeynep A.",
    rating: 5,
    comment: "Sevgilim için özel bir hediye arıyordum. AI önerileri gerçekten kişiselleştirilmiş ve harika!",
    avatar: "👩‍🎨",
    date: "3 gün önce"
  },
  {
    id: 4,
    name: "Can D.",
    rating: 5,
    comment: "Arkadaşımın evlilik yıldönümü için mükemmel bir hediye buldum. Çok teşekkürler!",
    avatar: "👨‍🎓",
    date: "5 gün önce"
  },
  {
    id: 5,
    name: "Elif S.",
    rating: 5,
    comment: "Babam için teknoloji meraklısı olduğunu bildiğim halde ne alacağımı bilemiyordum. AI harika öneriler verdi!",
    avatar: "👩‍⚕️",
    date: "1 hafta önce"
  },
  {
    id: 6,
    name: "Burak K.",
    rating: 5,
    comment: "Kız arkadaşım için romantik bir hediye arıyordum. Sonuç muhteşem oldu, çok mutlu oldu!",
    avatar: "👨‍🍳",
    date: "4 gün önce"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-sm sm:text-lg ${i < rating ? 'text-yellow-300' : 'text-gray-400'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-emerald-900/50 via-green-900/50 via-teal-900/50 to-cyan-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-emerald-100 via-green-100 to-teal-100 bg-clip-text text-transparent drop-shadow-lg">
            Kullanıcı Deneyimleri
          </h2>
          <p className="text-lg sm:text-xl text-white max-w-2xl sm:max-w-2xl mx-auto drop-shadow-lg px-2">
            Hediye Bulucu ile mutlu olan kullanıcılarımızın yorumları
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`
                relative bg-white/15 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/30
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{
                animationDelay: `${index * 200}ms`,
                transitionDelay: `${index * 200}ms`
              }}
            >
              {/* Decorative Elements - Hidden on mobile */}
              <div className="hidden sm:block absolute top-4 right-4 text-4xl opacity-10">💝</div>
              <div className="hidden sm:block absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full animate-pulse"></div>
              
              {/* Rating */}
              <div className="flex items-center mb-3 sm:mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Comment */}
              <p className="text-sm sm:text-base text-white mb-3 sm:mb-4 leading-relaxed italic drop-shadow-sm">
                "{testimonial.comment}"
              </p>

              {/* User Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-2xl sm:text-3xl mr-2 sm:mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-white drop-shadow-sm text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-200 drop-shadow-sm">{testimonial.date}</p>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-green-400/10 to-teal-400/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-lg border border-white/30">
            <div className="text-3xl sm:text-4xl font-bold text-emerald-200 mb-1 sm:mb-2 drop-shadow-sm">10K+</div>
            <div className="text-white drop-shadow-sm text-sm sm:text-base">Mutlu Kullanıcı</div>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-lg border border-white/30">
            <div className="text-3xl sm:text-4xl font-bold text-green-200 mb-1 sm:mb-2 drop-shadow-sm">50K+</div>
            <div className="text-white drop-shadow-sm text-sm sm:text-base">Başarılı Hediye</div>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-lg border border-white/30">
            <div className="text-3xl sm:text-4xl font-bold text-teal-200 mb-1 sm:mb-2 drop-shadow-sm">4.9/5</div>
            <div className="text-white drop-shadow-sm text-sm sm:text-base">Ortalama Puan</div>
          </div>
        </div>
      </div>
    </section>
  );
} 