import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { gallery } from '../data/gallery';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedImage(index);
  const closeModal = () => setSelectedImage(null);
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % gallery.length);
    }
  };
  
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + gallery.length) % gallery.length);
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 md:px-8 bg-creamBg">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-poppins font-extrabold text-navyOutline mb-4">
            Galeri Momen ✨
          </h2>
          <p className="font-nunito text-lg text-navyOutline/80 font-bold max-w-2xl mx-auto">
            Kumpulan foto-foto lucu Yurin. Klik untuk melihat lebih besar!
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {gallery.map((item, index) => (
            <div 
              key={item.id}
              onClick={() => openModal(index)}
              className="group cursor-pointer relative aspect-[4/5] bg-white rounded-xl overflow-hidden anime-border-sm anime-card-hover"
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-navyOutline/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-white font-poppins font-bold text-sm bg-pinkPrimary w-max px-2 py-1 rounded-md mb-1">
                  {item.dateLabel}
                </span>
                <p className="text-white font-nunito font-semibold text-sm line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-navyOutline/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 bg-white p-2 rounded-full anime-border-sm hover:bg-pinkPrimary hover:text-white transition-colors"
            onClick={closeModal}
          >
            <X size={24} />
          </button>
          
          <button 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full anime-border-sm hover:bg-pinkPrimary hover:text-white transition-colors z-10"
            onClick={prevImage}
          >
            <ChevronLeft size={32} />
          </button>

          <div 
            className="bg-white p-4 rounded-2xl anime-border max-w-4xl w-full max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 min-h-0 bg-creamBg rounded-xl overflow-hidden mb-4 border-2 border-navyOutline">
              <img 
                src={gallery[selectedImage].src} 
                alt={gallery[selectedImage].alt}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center">
              <span className="inline-block bg-pinkHighlight text-navyOutline font-bold px-3 py-1 rounded-full text-xs mb-2 anime-border-sm">
                {gallery[selectedImage].dateLabel}
              </span>
              <p className="font-poppins font-bold text-lg text-navyOutline">
                {gallery[selectedImage].caption}
              </p>
            </div>
          </div>

          <button 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full anime-border-sm hover:bg-pinkPrimary hover:text-white transition-colors z-10"
            onClick={nextImage}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;