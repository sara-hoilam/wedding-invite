import React from 'react';

export const Story: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-sage-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          
          {/* Image Grid */}
          <div className="w-full md:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://picsum.photos/400/600" 
                alt="Sara and Sebastian" 
                className="rounded-t-full w-full h-64 object-cover shadow-lg translate-y-8"
              />
              <img 
                src="https://picsum.photos/401/601" 
                alt="Couple holding hands" 
                className="rounded-t-full w-full h-64 object-cover shadow-lg"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-sage-200 rounded-full opacity-50"></div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="text-sage-600 font-sans text-xs tracking-[0.2em] uppercase">Our Journey</span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mt-4 mb-8">
              How We Met
            </h2>
            <p className="font-sans text-stone-600 leading-relaxed mb-6 font-light">
              We met through the dating app Bumble in January 2024, where the algorithm recognized us before we even knew it—marking us as a "Best Bee" match.
            </p>
            <p className="font-sans text-stone-600 leading-relaxed font-light">
              Despite our cultural differences as a Chilean/Chinese couple, we've learned and grown so much with each other and are ready for the next chapter of our life. We are so excited to start this journey with our favorite people.
            </p>
            
            <div className="mt-10 font-serif text-3xl italic text-gold-500">
              "Forever begins now."
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};