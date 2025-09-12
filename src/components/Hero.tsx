import React from 'react';
import { Star, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.6)), url('https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      ></div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-current mx-1" />
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Luxury
            <span className="block text-amber-300">Residences</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
            Experience unparalleled elegance and refined luxury at our two exquisite properties in Randburg
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a
            href="tel:+27622738240"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-xl"
          >
            <Phone size={20} />
            Book Now
          </a>
          <button
            onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white hover:bg-white hover:text-slate-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Explore Properties
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg opacity-90">
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-amber-400" />
            <span>Randburg, Johannesburg</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={20} className="text-amber-400" />
            <span>+27 (0) 62 273 8240</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;