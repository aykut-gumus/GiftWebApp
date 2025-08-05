'use client';

export default function FloatingGifts() {
  const gifts = [
    { emoji: '🎁', delay: 0, position: 'top-20 left-10' },
    { emoji: '🎀', delay: 1000, position: 'top-40 right-20' },
    { emoji: '💝', delay: 2000, position: 'bottom-40 left-20' },
    { emoji: '🎈', delay: 1500, position: 'bottom-20 right-10' },
    { emoji: '⭐', delay: 500, position: 'top-1/3 right-1/3' },
    { emoji: '💎', delay: 2500, position: 'bottom-1/3 left-1/3' },
    { emoji: '🌹', delay: 3000, position: 'top-1/2 left-1/4' },
    { emoji: '💍', delay: 3500, position: 'bottom-1/2 right-1/4' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {gifts.map((gift, index) => (
        <div
          key={index}
          className={`absolute ${gift.position} animate-float`}
          style={{
            animationDelay: `${gift.delay}ms`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          <div className="text-2xl md:text-3xl opacity-60 hover:opacity-100 transition-opacity duration-300 transform hover:scale-110">
            {gift.emoji}
          </div>
        </div>
      ))}
    </div>
  );
} 