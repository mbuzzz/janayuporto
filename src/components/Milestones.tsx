import React from 'react';
import { milestones } from '../data/milestones';

const Milestones: React.FC = () => {
  return (
    <section id="milestones" className="py-20 px-4 md:px-8 bg-white relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-poppins font-extrabold text-navyOutline mb-4">
            Pencapaian Hebat! 🌟
          </h2>
          <p className="font-nunito text-lg text-navyOutline/80 font-bold max-w-2xl mx-auto">
            Langkah-langkah kecil yang menjadi lompatan besar bagi Yurin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((item) => (
            <div 
              key={item.id}
              className={`${item.color} p-6 rounded-2xl anime-border anime-card-hover flex flex-col items-center text-center relative overflow-hidden group`}
            >
              {/* Decorative background element */}
              <div className="absolute -right-6 -top-6 text-white/40 transform rotate-12 group-hover:rotate-45 transition-transform duration-500">
                <item.icon size={120} />
              </div>
              
              <div className="bg-white p-4 rounded-full anime-border-sm mb-6 relative z-10 shadow-sm text-pinkPrimary group-hover:scale-110 transition-transform">
                <item.icon size={32} />
              </div>
              
              <h3 className="font-poppins font-bold text-xl text-navyOutline mb-2 relative z-10">
                {item.title}
              </h3>
              
              <span className="bg-white/80 px-3 py-1 rounded-full text-xs font-bold text-navyOutline/70 anime-border-sm mb-4 relative z-10">
                {item.date}
              </span>
              
              <p className="font-nunito font-semibold text-sm text-navyOutline/90 relative z-10">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;