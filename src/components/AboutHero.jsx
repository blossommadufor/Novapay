import React from "react";

const AboutHero = () => {
  return (
    <div className="relative min-h-screen w-full bg-tertiary bg-[url('/assets/bg.jpg')] bg-cover bg-center bg-no-repeat pt-16 md:pt-20 text-gray-200">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xs flex items-center justify-center px-4 sm:px-8 md:px-16">
        
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 items-center text-center max-w-3xl mx-auto pt-8 sm:pt-10">
          
          <p className="text-whitee py-1 px-3 sm:px-4 rounded-3xl text-xs sm:text-sm bg-white/20 backdrop-blur-xs tracking-wide">
            Finance Made Simple
          </p>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight sm:leading-tight md:leading-tight">
            Empowering <br className="hidden sm:inline" /> Financial Freedom
          </h1>
          
          <p className="text-secondary text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
            Transforming the way people manage money with innovation, security, and trust
          </p>

        </div>
      </div>
    </div>
  );
};

export default AboutHero;