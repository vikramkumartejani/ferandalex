import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full ">
      {/* Video Background */}
      <video className="w-full " autoPlay loop muted>
        <source src="/assets/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay for video */}
      <div className="gradident absolute inset-0" />

      {/* Content on top of video */}
      <div className="absolute inset-0 flex items-center justify-center ">
        <div className="text-white text-center flex items-center justify-center bg-red-500">
          <h1 className="text-4xl font-bold mb-4">Depasim orizonturile</h1>
          <p className="text-lg">Your description or call to action</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
