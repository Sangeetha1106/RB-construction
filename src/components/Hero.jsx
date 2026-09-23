import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-brand-offwhite">
      {/* Subtle Background Structural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e7e5e4_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200/70 border border-stone-300 text-stone-800 text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse"></span>
              <span>BUILDING SPACES. CREATING TRUST.</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-charcoal tracking-tight leading-[1.1]">
              Building Your Vision, <br className="hidden sm:inline" />
              <span className="text-stone-800 relative inline-block">
                Creating Your Future.
                <span className="absolute bottom-1 left-0 right-0 h-2 bg-amber-200/60 -z-10 rounded"></span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-stone-600 max-w-2xl leading-relaxed font-normal">
              Reliable construction solutions with a focus on quality, craftsmanship and professional execution.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-brand-brown hover:bg-stone-900 text-white text-sm font-bold uppercase tracking-wider rounded transition-all shadow-md hover:shadow-lg duration-200"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-stone-100 text-brand-charcoal border border-stone-300 text-sm font-bold uppercase tracking-wider rounded transition-all duration-200 shadow-sm"
              >
                <span>Explore Our Projects</span>
                <ChevronRight className="w-4 h-4 text-stone-500" />
              </a>
            </div>

            {/* Subtle Guarantee Highlight */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-stone-200 text-xs text-stone-500 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-700"></span>
                <span>Quality Crafted</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-700"></span>
                <span>Structured Planning</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-700"></span>
                <span>Transparent Delivery</span>
              </div>
            </div>

          </div>

          {/* Hero Image Right Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-stone-300 to-amber-200/50 rounded-2xl transform -rotate-1 opacity-70 blur-sm -z-10"></div>
              
              {/* Main Image Container */}
              <div className="relative rounded-xl overflow-hidden shadow-card-hover border border-stone-200 bg-white">
                <img
                  src="images/hero.jpg"
                  alt="Modern architectural construction building under sleek execution"
                  className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Architectural Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded-lg border border-stone-200 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-stone-500 uppercase tracking-wider">Engineering Focus</p>
                    <p className="text-sm font-bold text-brand-charcoal">Architectural &amp; Structural Excellence</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-brand-amber font-bold text-xs border border-stone-200">
                    RB
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
