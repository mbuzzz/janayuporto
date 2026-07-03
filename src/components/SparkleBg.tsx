import React from 'react';

const SparkleBg: React.FC = () => {
  // Generate random sparkles/petals
  const particles = Array.from({ length: 20 }).map((_, i) => {
    const isPetal = i % 2 === 0;
    const left = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = 8 + Math.random() * 7;
    const size = 10 + Math.random() * 15;

    return (
      <div
        key={i}
        className="absolute animate-float-slow opacity-60 pointer-events-none"
        style={{
          left: `${left}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: isPetal ? '#FF7CA8' : '#F3A0B1',
          borderRadius: isPetal ? '50% 0 50% 0' : '50%',
          filter: 'blur(2px)',
        }}
      />
    );
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles}
    </div>
  );
};

export default SparkleBg;