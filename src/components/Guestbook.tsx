import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, Gift, X } from 'lucide-react';

interface Message {
  id: string;
  name: string;
  text: string;
  date: string;
}

const Guestbook: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [showQris, setShowQris] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('janayu_guestbook');
    if (stored) {
      setMessages(JSON.parse(stored));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      name: name.trim() || 'Tamu Rahasia',
      text: text.trim(),
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
    };

    const updatedMessages = [newMessage, ...messages].slice(0, 10); // Keep last 10 messages
    setMessages(updatedMessages);
    localStorage.setItem('janayu_guestbook', JSON.stringify(updatedMessages));
    
    setName('');
    setText('');
  };

  return (
    <section id="guestbook" className="py-20 px-4 md:px-8 bg-pinkHighlight/20">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-3xl p-6 md:p-10 anime-border flex flex-col md:flex-row gap-10">
          
          {/* Form Section */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="text-pinkPrimary" size={32} />
              <h2 className="text-3xl font-poppins font-extrabold text-navyOutline">
                Kirim Salam 💌
              </h2>
            </div>
            <p className="font-nunito font-semibold text-navyOutline/80 mb-6">
              Tinggalkan pesan, doa, atau sapaan manis untuk Yurin!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-poppins font-bold text-sm text-navyOutline mb-2">
                  Nama Kamu (opsional)
                </label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Paman, Tante, atau Kakak..."
                  className="w-full px-4 py-3 rounded-xl anime-border-sm focus:outline-none focus:ring-2 focus:ring-pinkPrimary font-nunito"
                />
              </div>
              <div>
                <label className="block font-poppins font-bold text-sm text-navyOutline mb-2">
                  Pesan Manis
                </label>
                <textarea 
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Sehat selalu ya Yurin..."
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl anime-border-sm focus:outline-none focus:ring-2 focus:ring-pinkPrimary font-nunito resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-pinkPrimary text-white font-bold py-3 rounded-xl anime-border flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-[4px_4px_0_#1B2A4A] transition-all"
              >
                Kirim Pesan <Send size={20} />
              </button>
            </form>

            <div className="mt-6 pt-6 border-t-2 border-dashed border-pinkHighlight/50 text-center">
              <button 
                onClick={() => setShowQris(true)}
                className="inline-flex items-center gap-2 bg-creamBg text-navyOutline font-bold px-6 py-3 rounded-full anime-border-sm hover:bg-pinkHighlight/20 transition-colors"
              >
                <Gift size={20} className="text-pinkPrimary" />
                Beri Kado / THR untuk Yurin 🎁
              </button>
            </div>
          </div>

          {/* Messages List */}
          <div className="w-full md:w-1/2 flex flex-col">
            <h3 className="font-poppins font-bold text-xl text-navyOutline mb-4 flex items-center gap-2">
              Pesan Terbaru
            </h3>
            
            <div className="flex-1 bg-creamBg rounded-2xl anime-border-sm p-4 overflow-y-auto max-h-[400px] space-y-4">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-navyOutline/50 p-8 text-center">
                  <span className="text-4xl mb-2">🌸</span>
                  <p className="font-nunito font-bold">Belum ada pesan. Jadilah yang pertama!</p>
                </div>
              ) : (
                messages.map((msg) => (
                  <div key={msg.id} className="bg-white p-4 rounded-xl anime-border-sm relative">
                    {/* Bubble tail */}
                    <div className="absolute -left-2 top-4 w-4 h-4 bg-white border-l-2 border-b-2 border-navyOutline transform rotate-45"></div>
                    
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-poppins font-bold text-pinkPrimary">{msg.name}</span>
                      <span className="text-xs font-nunito font-bold text-navyOutline/50">{msg.date}</span>
                    </div>
                    <p className="font-nunito font-medium text-navyOutline">{msg.text}</p>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>

      {/* QRIS Modal */}
      {showQris && (
        <div className="fixed inset-0 z-[100] bg-navyOutline/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowQris(false)}>
          <div className="bg-white p-6 rounded-3xl anime-border max-w-sm w-full relative text-center" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute -top-4 -right-4 bg-white p-2 rounded-full anime-border hover:bg-pinkPrimary hover:text-white transition-colors z-10"
              onClick={() => setShowQris(false)}
            >
              <X size={24} />
            </button>
            
            <h3 className="font-poppins font-extrabold text-2xl text-navyOutline mb-2">Terima Kasih! 💖</h3>
            <p className="font-nunito text-navyOutline/80 font-bold mb-6 text-sm">
              Scan QRIS di bawah ini untuk memberikan kado atau THR spesial buat Yurin.
            </p>
            
            <div className="bg-creamBg p-4 rounded-2xl anime-border-sm mb-4 inline-block">
              <img src="/qris.jpeg" alt="QRIS Yurin" className="w-full max-w-[200px] h-auto rounded-xl mx-auto" />
            </div>
            
            <p className="font-nunito font-extrabold text-pinkPrimary text-sm">
              Semoga rezekinya dilipatgandakan! ✨
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Guestbook;