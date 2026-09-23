import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-brand-offwhite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-xl overflow-hidden shadow-card-hover border border-stone-200 bg-white">
                <img
                  src="images/villa.jpg"
                  alt="Modern architectural structure built with precision"
                  className="w-full h-[380px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Accent Detail Box */}
                <div className="absolute top-4 right-4 bg-brand-brown text-white p-4 rounded-lg shadow-md max-w-[200px] border border-stone-700 hidden sm:block">
                  <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">Commitment</p>
                  <p className="text-xs text-stone-200 leading-snug">Quality craftsmanship in every detail.</p>
                </div>
              </div>

              {/* Decorative Accent Line */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-brand-amber rounded-bl-xl pointer-events-none hidden sm:block"></div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Small Label */}
            <div className="inline-block px-3.5 py-1 rounded bg-stone-200/80 border border-stone-300 text-stone-800 text-xs font-bold tracking-widest uppercase">
              ABOUT RB CONSTRUCTION
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
              Building With Purpose. <br />
              Delivering With Confidence.
            </h2>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
              RB Construction is focused on delivering reliable construction solutions with attention to quality, professionalism and customer requirements.
            </p>

            {/* Paragraph 2 */}
            <p className="text-base text-stone-600 leading-relaxed font-normal">
              From planning to execution, our approach focuses on thoughtful work, clear communication and attention to detail.
            </p>

            {/* Feature Checklist */}
            <div className="pt-2 space-y-3 border-t border-stone-200">
              <div className="flex items-center gap-3 text-sm text-stone-700 font-semibold">
                <div className="w-5 h-5 rounded-full bg-stone-200 text-brand-brown flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Transparent planning and execution</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-stone-700 font-semibold">
                <div className="w-5 h-5 rounded-full bg-stone-200 text-brand-brown flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Quality material standards</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-stone-700 font-semibold">
                <div className="w-5 h-5 rounded-full bg-stone-200 text-brand-brown flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Client-centered approach</span>
              </div>
            </div>

            {/* Button */}
            <div className="pt-4">
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-brown hover:bg-stone-900 text-white text-xs font-bold uppercase tracking-wider rounded transition-all shadow-sm hover:shadow duration-200"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
