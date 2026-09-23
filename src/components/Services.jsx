import React from 'react';
import { Home, Building2, Hammer, Wrench, ArrowUpRight } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Quality homes built with attention to design, materials and structural standards.',
      link: '#contact',
    },
    {
      icon: Building2,
      title: 'Commercial Construction',
      description: 'Commercial spaces built to support your business requirements and operational flow.',
      link: '#contact',
    },
    {
      icon: Hammer,
      title: 'Renovation & Remodeling',
      description: 'Transforming existing structures with thoughtful updates and structural integrity.',
      link: '#contact',
    },
    {
      icon: Wrench,
      title: 'Construction Solutions',
      description: 'End-to-end management, planning coordination and quality oversight for your project.',
      link: '#contact',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-amber bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal">
            Construction solutions designed around your project requirements.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {servicesList.map((svc, index) => {
            const IconComp = svc.icon;
            return (
              <div
                key={index}
                className="group relative bg-brand-offwhite rounded-xl p-7 border border-stone-200 shadow-subtle hover:shadow-card-hover hover:border-stone-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Arrow */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-white border border-stone-200 text-brand-brown flex items-center justify-center group-hover:bg-brand-brown group-hover:text-amber-400 group-hover:border-brand-brown transition-colors duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-amber-100 group-hover:text-brand-brown transition-colors duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-brand-charcoal mb-3 group-hover:text-brand-brown transition-colors">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-stone-600 leading-relaxed font-normal">
                    {svc.description}
                  </p>
                </div>

                {/* Bottom Border Highlight on Hover */}
                <div className="mt-8 pt-4 border-t border-stone-200/60 flex items-center gap-1.5 text-xs font-bold text-brand-brown group-hover:text-brand-amber transition-colors">
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
