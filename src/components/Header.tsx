import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Milestones', href: '#milestones' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-creamBg/90 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <img src="/janayulogo.png" alt="Janayu Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform" />
          <span className="font-poppins font-bold text-xl text-navyOutline hidden sm:block tracking-wide">Janayu</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-nunito font-bold text-navyOutline">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-pinkPrimary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-pinkPrimary hover:after:w-full after:transition-all">
              {link.name}
            </a>
          ))}
          <a href="#guestbook" className="bg-pinkPrimary text-white px-5 py-2 rounded-full anime-border-sm hover:-translate-y-1 transition-transform">
            Kirim Salam 💌
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-navyOutline p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-creamBg anime-border-sm border-t-0 p-4 flex flex-col gap-4 font-bold text-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="py-2 text-navyOutline hover:text-pinkPrimary">
              {link.name}
            </a>
          ))}
          <a href="#guestbook" onClick={() => setMobileMenuOpen(false)} className="bg-pinkPrimary text-white py-3 rounded-full anime-border-sm mx-4">
            Kirim Salam 💌
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;