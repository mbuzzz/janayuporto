import React, { useState, useEffect } from 'react';
import { calculateAge } from '../utils/age';

const Hero: React.FC = () => {
  const [age, setAge] = useState(() => calculateAge('2024-04-16'));

  useEffect(() => {
    // Update age dynamically every minute in case the date changes while the page is open
    const interval = setInterval(() => {
      setAge(calculateAge('2024-04-16'));
    }, 60000); // 1 minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-12 px-4">
      <div className="z-10 text-center max-w-2xl mx-auto flex flex-col items-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-pinkHighlight/20 rounded-full blur-3xl scale-150"></div>
          <img 
            src="/janayulogo.png" 
            alt="Janayu Logo" 
            className="w-48 h-48 md:w-64 md:h-64 object-contain animate-pulse-glow relative z-10"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-poppins font-extrabold text-navyOutline mb-4 tracking-tight drop-shadow-sm">
          Janayu Rin Faizah
        </h1>
        <h2 className="text-2xl md:text-3xl font-poppins font-bold text-pinkPrimary mb-6">
          ( Yurin )
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-8">
          <span className="bg-white px-4 py-1 rounded-full anime-border-sm text-sm font-bold text-pinkPrimary">
            Born • 16 April 2024
          </span>
          <span className="bg-pinkPrimary text-white px-4 py-1 rounded-full anime-border-sm text-sm font-bold shadow-sm">
            Age • {age}
          </span>
        </div>
        
        <p className="text-lg md:text-xl font-nunito font-semibold text-navyOutline/80 mb-10 max-w-md">
          Konnichiwa! Selamat datang di dunia kecil Yurin yang penuh kejutan dan tawa. ✨
        </p>
        
        <a 
          href="#gallery" 
          className="bg-white text-navyOutline px-8 py-3 rounded-full font-bold text-lg anime-border hover:-translate-y-1 hover:shadow-[6px_6px_0_#F3A0B1] transition-all"
        >
          Lihat Galeri Yurin
        </a>
      </div>
    </section>
  );
};

export default Hero;