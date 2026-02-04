import React from 'react';

export const Inspirations: React.FC = () => {
  return (
    <section id="attire" className="py-24 bg-[#FAF9F6] overflow-hidden relative">
      {/* Background Texture Effect (Optional - simulating watercolor wash) */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-sage-100/30 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-6xl md:text-7xl text-stone-700 mb-4 transform -rotate-2 italic">
            The Details
          </h2>
          <span className="font-sans text-stone-500 text-sm md:text-base tracking-[0.2em] uppercase block mb-8">
            Attire Guide
          </span>
          
          <div className="max-w-2xl mx-auto space-y-2 font-sans text-stone-600 font-light text-sm md:text-lg leading-relaxed mb-10">
            <p>We would love to see you in your formal attire.</p>
            <p>We encourage you to dress according to our wedding color.</p>
          </div>

          {/* Color Palette - Moved above 'For Her' */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-[#B2C6B2]" title="Sage"></div>
            <div className="w-10 h-10 rounded-full bg-[#6B8E6B]" title="Green"></div>
            <div className="w-10 h-10 rounded-full bg-[#3A4F3A]" title="Dark Green"></div>
            <div className="w-10 h-10 rounded-full bg-[#EAD6C2]" title="Beige"></div>
          </div>
        </div>

        <div className="space-y-24 md:space-y-32">

          {/* Section 1: For Her */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-24">
            {/* Image (Left) */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                 <div className="grid grid-cols-4 gap-2 items-end max-w-md">
                     <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=200&auto=format&fit=crop" className="rounded-md h-40 object-cover opacity-80" alt="Dress" />
                     <img src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=200&auto=format&fit=crop" className="rounded-md h-48 object-cover opacity-80" alt="Dress" />
                     <img src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=200&auto=format&fit=crop" className="rounded-md h-44 object-cover opacity-80" alt="Dress" />
                     <img src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=200&auto=format&fit=crop" className="rounded-md h-52 object-cover opacity-80" alt="Dress" />
                 </div>
            </div>

            {/* Text (Right) */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="font-serif text-4xl md:text-5xl text-stone-600 mb-6 italic">For Her</h3>
                <div className="font-sans text-stone-600 font-light tracking-wide text-lg">
                    <p>Formal or cocktail dress</p>
                </div>
            </div>
          </div>

          {/* Section 2: For Him */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-24">
             {/* Image (Left) */}
             <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div className="grid grid-cols-5 gap-2 items-end max-w-lg">
                     <img src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=200&auto=format&fit=crop" className="rounded-md h-44 object-cover grayscale opacity-90" alt="Suit" />
                     <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=200&auto=format&fit=crop" className="rounded-md h-52 object-cover grayscale opacity-90" alt="Suit" />
                     <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=200&auto=format&fit=crop" className="rounded-md h-48 object-cover grayscale opacity-90" alt="Suit" />
                     <img src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=200&auto=format&fit=crop" className="rounded-md h-52 object-cover grayscale opacity-80" alt="Suit" />
                     <img src="https://images.unsplash.com/photo-1497339100210-9e87df79c218?q=80&w=200&auto=format&fit=crop" className="rounded-md h-48 object-cover grayscale opacity-80" alt="Suit" />
                 </div>
             </div>

             {/* Text (Right) */}
             <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="font-serif text-4xl md:text-5xl text-stone-600 mb-6 italic">For Him</h3>
                
                <div className="font-sans text-stone-600 font-light tracking-wide text-lg">
                    <p>Shirts and formal attire, no jeans and shorts please</p>
                </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};