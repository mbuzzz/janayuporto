import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navyOutline text-white py-12 px-4 text-center">
      <div className="container mx-auto flex flex-col items-center gap-6">
        <img 
          src="/janayulogo.png" 
          alt="Janayu" 
          className="w-16 h-16 object-contain grayscale brightness-200 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
        
        <div className="flex flex-wrap justify-center gap-6 font-poppins font-bold text-sm text-white/70">
          <a href="#home" className="hover:text-pinkHighlight transition-colors">Home</a>
          <a href="#about" className="hover:text-pinkHighlight transition-colors">About</a>
          <a href="#gallery" className="hover:text-pinkHighlight transition-colors">Gallery</a>
          <a href="#milestones" className="hover:text-pinkHighlight transition-colors">Milestones</a>
        </div>
        
        <div className="w-16 h-1 bg-pinkHighlight rounded-full opacity-50"></div>
        
        <p className="font-nunito flex items-center gap-2 text-sm text-white/60">
          Created by Ayah tercinta <Heart size={16} className="text-pinkHighlight fill-pinkHighlight animate-pulse" /> for Yurin
        </p>
        <p className="font-nunito text-xs text-white/40">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;