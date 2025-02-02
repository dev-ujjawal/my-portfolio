import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90"></div>

      <div className="relative z-10 text-center px-4">
        <div className="mb-8">
          
          <img
            src="/Img2.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-cyan-500/50 glow-cyan"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Ujjawal Kumar
          </h1>
          <p className="text-xl md:text-2xl text-cyan-500 font-light mb-6">
            Aspiring Full Stack Developer | Problem Solver | Engineer in Progress
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Second-year engineering student passionate about creating innovative web solutions
            and turning complex problems into elegant interfaces.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all transform hover:scale-105 glow-cyan-sm">
              View Projects
            </button>
            <button className="px-6 py-3 border border-cyan-500 text-cyan-500 rounded-lg hover:bg-cyan-500/10 transition-all transform hover:scale-105">
              Contact Me
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-cyan-500" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;