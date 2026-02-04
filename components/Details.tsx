import React from 'react';
import { MapPin, Wine, Sun, Utensils, HeartHandshake, Plane } from 'lucide-react';
import { TimelineEvent } from '../types';

const timeline: TimelineEvent[] = [
  {
    time: "10:00 AM",
    title: "The Ceremony",
    description: "Garden Courtyard",
    icon: <Sun className="w-6 h-6 text-sage-600" />
  },
  {
    time: "11:30 AM",
    title: "Cocktail Hour",
    description: "The Terrace",
    icon: <Wine className="w-6 h-6 text-sage-600" />
  },
  {
    time: "12:30 PM",
    title: "Lunch Reception",
    description: "Grand Ballroom",
    icon: <Utensils className="w-6 h-6 text-sage-600" />
  },
  {
    time: "3:00 PM",
    title: "Farewell",
    description: "Warm Send-off",
    icon: <HeartHandshake className="w-6 h-6 text-sage-600" />
  }
];

export const Details: React.FC = () => {
  return (
    <section id="details" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-sage-600 font-sans text-xs tracking-[0.2em] uppercase">The Plan</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mt-4">
            Wedding Details
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
          
          {/* Location Card */}
          <div className="bg-sage-50 p-10 rounded-t-[50%] rounded-b-lg text-center h-full min-h-[600px] flex flex-col items-center justify-center sticky top-24">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
              <MapPin className="w-8 h-8 text-sage-600" />
            </div>
            
            <h3 className="font-serif text-3xl mb-4 text-stone-800 px-4">Sheraton Tung Chung Hotel</h3>
            
            <p className="font-sans text-stone-600 mb-6 font-light leading-relaxed">
              9 Yi Tung Road, Tung Chung<br/>
              @Terrace Level 2
            </p>

            <div className="flex items-center justify-center gap-3 text-sage-600 mb-8 opacity-80">
               <div className="flex items-center gap-1">
                 <Plane className="w-4 h-4" />
                 <span className="font-sans text-xs tracking-wider uppercase">Near HK Airport</span>
               </div>
               <span className="text-stone-300">|</span>
               <div className="flex items-center gap-1">
                 <span className="text-lg leading-none">🇭🇰</span>
                 <span className="font-sans text-xs tracking-wider uppercase">Hong Kong</span>
               </div>
            </div>

            <a 
              href="https://www.google.com/maps/search/?api=1&query=Sheraton+Hong+Kong+Tung+Chung+Hotel" 
              target="_blank" 
              rel="noreferrer"
              className="inline-block border-b border-sage-600 pb-1 text-sage-800 text-sm tracking-wider uppercase hover:text-sage-500 transition-colors"
            >
              View Map
            </a>
          </div>

          {/* Timeline */}
          <div className="space-y-10 py-4 self-center">
            {timeline.map((event, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-sage-200 flex items-center justify-center bg-white group-hover:border-sage-400 transition-colors shadow-sm">
                    {event.icon}
                  </div>
                  {idx !== timeline.length - 1 && <div className="h-full w-px bg-sage-100 my-2"></div>}
                </div>
                <div className="pb-8 pt-1">
                  <span className="font-sans text-sage-600 font-medium text-sm block mb-1 tracking-wider">{event.time}</span>
                  <h4 className="font-serif text-2xl text-stone-800 mb-2">{event.title}</h4>
                  <p className="font-sans text-stone-500 font-light text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};