import React from "react";

const Hero = () => {
  return (
    <div className="relative h-full flex items-center justify-center text-white">
      <div className="text-center px-6 mx-auto max-w-3xl">
        <h1 className="text-[80px] font-bold mb-4 leading-tight">Unleash Your Radiant Beauty</h1>
        <p className="text-lg mb-6">
        Experience the transformative power of self-care at Radiant Beauty Lounge
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 font-semibold py-2 px-6 rounded">
          Book appointment
        </button>
      </div>
    </div>
  );
};

export default Hero;
