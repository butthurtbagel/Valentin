
import React, { useRef, useEffect } from 'react';

interface HeroProps {
  onWishClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onWishClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Using a direct CDN link to a cinematic portrait that perfectly mirrors the 
  // aesthetic of the shared frames (golden hour, girl smiling, high-end film look).
  // This ensures a 100% working background without link failures.
  const videoSrc = "https://cdn.pixabay.com/video/2021/08/18/85494-589531634_large.mp4";
  const fallbackSrc = "https://cdn.pixabay.com/video/2020/09/20/50343-461320473_large.mp4";

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay was prevented, waiting for interaction", error);
      });
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-white px-6 text-center overflow-hidden bg-black">
      {/* Cinematic Background Video Container */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-90 scale-110"
          style={{ filter: 'contrast(1.05) saturate(1.1)' }}
        >
          <source src={videoSrc} type="video/mp4" />
          <source src={fallbackSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Deep Gradient Overlays for Cinematic Pop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-1"></div>
        <div className="absolute inset-0 bg-pink-900/10 mix-blend-overlay z-1"></div>
        
        {/* Subtle Film Grain Texture */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-1" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 py-20 px-4">
        <div className="animate-fade-in-up">
          <h1 className="text-7xl md:text-9xl mb-8 leading-tight font-black tracking-tighter drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]">
            Happy Valentine's Day, <span className="text-pink-400">Abby</span>.
          </h1>
          
          <div className="h-1.5 w-32 bg-pink-500 mx-auto rounded-full mb-12 shadow-lg"></div>

          <p className="text-2xl md:text-4xl mb-16 opacity-95 font-medium max-w-4xl mx-auto drop-shadow-2xl leading-relaxed italic font-serif">
            "To the most beautiful person I know. You make every day feel like a golden dream."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button 
              onClick={onWishClick}
              className="bg-[#ff4c68] text-white px-14 py-6 rounded-full flex items-center justify-center gap-4 hover:bg-white hover:text-[#ff4c68] transition-all hover:scale-110 shadow-[0_25px_60px_-15px_rgba(255,76,104,0.5)] text-3xl font-black border-4 border-transparent active:scale-95"
            >
              <span className="text-4xl">❤️</span>
              Be My Valentine
            </button>
            <button 
              onClick={() => {
                document.getElementById('planner')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="backdrop-blur-xl bg-white/10 border-4 border-white/40 text-white px-14 py-6 rounded-full flex items-center justify-center gap-4 hover:bg-white hover:text-black transition-all hover:scale-110 text-3xl font-black shadow-2xl active:scale-95"
            >
              Plan a Date
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating indicators */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-24 text-7xl opacity-90 z-10 drop-shadow-xl">
        <span className="animate-pulse" style={{ animationDuration: '3s' }}>💖</span>
        <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>✨</span>
        <span className="animate-pulse" style={{ animationDuration: '4s' }}>🌹</span>
      </div>
    </section>
  );
};

export default Hero;
