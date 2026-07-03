import React, { useState, useEffect } from 'react';
import { calculateAge } from '../utils/age';

const About: React.FC = () => {
  const [age, setAge] = useState(() => calculateAge('2024-04-16'));

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calculateAge('2024-04-16'));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-white relative">
      {/* Anime decor line */}
      <div className="absolute top-0 left-0 w-full h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iNCIgZmlsbD0iI0YzQTBCMSIvPjwvc3ZnPg==')] bg-repeat-x opacity-30"></div>
      
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Photo Polaroid Style */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-white p-4 pb-12 rotate-[-3deg] anime-border shadow-xl w-3/4 max-w-sm hover:rotate-0 transition-transform duration-300">
              <div className="aspect-square overflow-hidden border-2 border-navyOutline bg-pinkHighlight/20">
                <img 
                  src="/fotobayi.jpg" 
                  alt="Janayu" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center font-poppins font-bold text-xl mt-6 text-pinkPrimary">
                Halo, panggil aku Yurin! 🌸
              </p>
            </div>
          </div>

          {/* Story Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-5xl font-poppins font-extrabold text-navyOutline">
              Sedikit Cerita Tentangku
            </h2>
            <div className="space-y-4 font-nunito text-lg text-navyOutline/80 font-medium">
              <p>
                Aku lahir pada tanggal <span className="font-bold text-pinkPrimary">16 April 2024</span>. Aku adalah anak kesayangan dari Ayah <span className="font-bold text-pinkPrimary">Rifqy Iza Fahrizal</span> dan Mama <span className="font-bold text-pinkPrimary">Indah Tri Wulandari</span>.
                Saat ini umurku sudah <span className="font-bold text-pinkPrimary">{age}</span>!
              </p>
              <p>
                Setiap hari ada saja hal baru yang Yurin pelajari. Mulai dari ngoceh gak jelas, main air, sampai mencoba berdiri sendiri. Papa dan Mama bilang Yurin itu sumber kebahagiaan mereka. ✨
              </p>
            </div>

            {/* Mini Timeline */}
            <div className="mt-8 pt-6 border-t-2 border-dashed border-pinkHighlight/50">
              <h3 className="font-poppins font-bold text-xl mb-4">Hal Favoritku:</h3>
              <ul className="grid grid-cols-2 gap-3 font-nunito font-bold">
                <li className="flex items-center gap-2">
                  <span className="text-2xl">🍼</span> Minum Susu
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">🎶</span> Lagu Anak-anak
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">🧸</span> Mainan Berbunyi
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">😴</span> Bobo Siang
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;