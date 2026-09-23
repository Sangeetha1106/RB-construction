import React from 'react';
import { Award, Briefcase, Users, CheckCircle2 } from 'lucide-react';

const TrustHighlights = () => {
  const highlights = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'Focused on quality and attention to detail.',
    },
    {
      icon: Briefcase,
      title: 'Professional Execution',
      description: 'Structured and professional project execution.',
    },
    {
      icon: Users,
      title: 'Client Focused',
      description: 'Solutions designed around client requirements.',
    },
    {
      icon: CheckCircle2,
      title: 'Reliable Approach',
      description: 'Clear communication throughout the project.',
    },
  ];

  return (
    <section className="py-16 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-lg bg-brand-offwhite border border-stone-200/80 shadow-subtle hover:border-stone-300 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded bg-stone-100 text-brand-brown border border-stone-200 flex items-center justify-center mb-5 group-hover:bg-brand-brown group-hover:text-amber-400 transition-colors duration-200">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-charcoal mb-2 group-hover:text-brand-brown transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustHighlights;
