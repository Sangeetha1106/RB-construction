import React from 'react';
import {
  ShieldCheck,
  Briefcase,
  MessageSquare,
  Users,
  SearchCheck,
  CheckCircle2,
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Quality Workmanship',
      description: 'Dedicated to high material standards and skilled execution.',
    },
    {
      icon: Briefcase,
      title: 'Professional Execution',
      description: 'Structured workflows ensuring project milestones are met cleanly.',
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      description: 'Transparent site updates, progress reporting and direct access.',
    },
    {
      icon: Users,
      title: 'Client-Centric Approach',
      description: 'Tailored solutions configured around your distinct needs.',
    },
    {
      icon: SearchCheck,
      title: 'Attention to Detail',
      description: 'Meticulous structural checks and refined finishing standards.',
    },
    {
      icon: CheckCircle2,
      title: 'Reliable Project Approach',
      description: 'Predictable scheduling and straightforward project delivery.',
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-stone-900 text-white relative overflow-hidden">
      {/* Decorative Ambient Radial Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-amber/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <div className="inline-block px-3.5 py-1 rounded-full bg-stone-800 border border-stone-700 text-amber-400 text-xs font-bold tracking-widest uppercase">
              OUR COMMITMENT
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Why Choose <br />
              <span className="text-amber-400">RB Construction?</span>
            </h2>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
              We focus on building strong relationships alongside durable structures. Our approach combines craftsmanship, clarity, and dependable execution.
            </p>

            <div className="pt-4 border-t border-stone-800 space-y-3 text-sm text-stone-400">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>Focus on long-term structural integrity</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>Transparent and straightforward process</span>
              </p>
            </div>
          </div>

          {/* Right Column: 6 Feature Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-stone-800/80 border border-stone-700/80 hover:border-amber-500/50 hover:bg-stone-800 transition-all duration-300 group shadow-sm"
                >
                  <div className="w-12 h-12 rounded-lg bg-stone-900 border border-stone-700 text-amber-400 flex items-center justify-center mb-5 group-hover:bg-amber-400 group-hover:text-stone-900 transition-colors duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
