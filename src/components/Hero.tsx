import heroVideo from '../assets/hero_video.mp4'; 

const Hero = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Video */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Floating Tags */}
      <div className="absolute top-1/3 left-0 bg-black/70 px-4 py-2 text-sm font-semibold tracking-widest uppercase">
        Designer Ratings
      </div>
      <div className="absolute top-1/3 right-0 bg-black/70 px-4 py-2 text-sm font-semibold tracking-widest uppercase">
        Services
      </div>
    </section>
  );
};

export default Hero;