import React, { useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Residential', 'Commercial', 'Renovation'];

  const projectsData = [
    {
      id: 1,
      name: 'Modern Residence',
      category: 'Residential',
      location: 'Metro Area, Phase 1',
      image: 'images/hero.jpg',
    },
    {
      id: 2,
      name: 'Contemporary Home',
      category: 'Residential',
      location: 'Suburban Layout',
      image: 'images/villa.jpg',
    },
    {
      id: 3,
      name: 'Luxury Villa',
      category: 'Residential',
      location: 'Eco-Park Enclave',
      image: 'images/hero.jpg',
    },
    {
      id: 4,
      name: 'Commercial Building',
      category: 'Commercial',
      location: 'Business District',
      image: 'images/commercial.jpg',
    },
    {
      id: 5,
      name: 'Residential Development',
      category: 'Residential',
      location: 'Skyline Sector',
      image: 'images/apartments.jpg',
    },
    {
      id: 6,
      name: 'Modern Architecture',
      category: 'Renovation',
      location: 'Heritage Square',
      image: 'images/renovation.jpg',
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-amber bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
            Our Projects
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal">
            A glimpse into construction and architectural work.
          </p>

          {/* Interactive Category Filter Buttons */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-brand-brown text-amber-400 shadow-sm border border-brand-brown'
                    : 'bg-stone-100 text-stone-600 border border-stone-200 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-brand-offwhite rounded-xl overflow-hidden border border-stone-200 shadow-subtle hover:shadow-card-hover hover:border-stone-300 transition-all duration-300 flex flex-col"
            >
              {/* Image Box */}
              <div className="relative h-64 overflow-hidden bg-stone-100">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md text-brand-charcoal text-[11px] font-bold uppercase tracking-wider rounded border border-stone-200">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-brand-charcoal mb-2 group-hover:text-brand-brown transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium mb-4">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* View Project Arrow Link */}
                <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs font-bold text-brand-brown group-hover:text-brand-amber transition-colors">
                  <span>View Details</span>
                  <div className="w-7 h-7 rounded-full bg-white border border-stone-200 flex items-center justify-center group-hover:bg-brand-brown group-hover:text-amber-400 group-hover:border-brand-brown transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-stone-400 font-medium italic">
            Note: Concept placeholder cards representing design capabilities.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;
