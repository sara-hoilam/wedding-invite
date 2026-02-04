import React, { useState } from 'react';
import { Heart, Calendar, Download, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  const [showCalendarOptions, setShowCalendarOptions] = useState(false);

  // Event Details: Nov 15, 2026, 10:00 AM HKT (UTC+8) -> 02:00:00 UTC
  // End: 4:00 PM HKT -> 08:00:00 UTC
  const eventTitle = "Sara & Sebastian Wedding";
  const eventDetails = "Join us to celebrate our wedding at the Sheraton Tung Chung Hotel!";
  const eventLocation = "Sheraton Tung Chung Hotel, 9 Yi Tung Road, Tung Chung, Hong Kong";
  
  // Google Calendar URL
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=20261115T020000Z/20261115T080000Z&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(eventLocation)}`;

  // ICS File Generation
  const handleDownloadICS = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Sara and Sebastian//Wedding//EN
BEGIN:VEVENT
UID:${Date.now()}@saraandsebastian.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:20261115T020000Z
DTEND:20261115T080000Z
SUMMARY:${eventTitle}
DESCRIPTION:${eventDetails}
LOCATION:${eventLocation}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'sara-and-sebastian-wedding.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowCalendarOptions(false);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#FDFBF7] overflow-hidden p-6">
      
      {/* SVG Wavy Border Frame */}
      <div className="absolute inset-4 md:inset-8 pointer-events-none text-sage-600/40">
        <svg width="100%" height="100%" className="overflow-visible">
            <rect 
                x="0" y="0" 
                width="100%" height="100%" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                rx="30" ry="30"
                style={{ filter: 'url(#squiggly-0)' }}
            />
            <defs>
                <filter id="squiggly-0">
                    <feTurbulence baseFrequency="0.01" numOctaves="3" result="noise" seed="0" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                </filter>
            </defs>
        </svg>
      </div>

      {/* Decorative Bow (Top Center) */}
      <div className="absolute top-12 md:top-16 z-20 text-sage-600 animate-in fade-in duration-1000">
        <svg width="80" height="60" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Loops */}
          <path d="M50 30 C 65 5, 95 5, 95 30 C 95 55, 65 55, 50 30" />
          <path d="M50 30 C 35 5, 5 5, 5 30 C 5 55, 35 55, 50 30" />
          {/* Knot */}
          <circle cx="50" cy="30" r="4" fill="currentColor" className="text-sage-100" stroke="currentColor" />
          {/* Ribbons */}
          <path d="M50 34 C 55 45, 70 55, 80 60" />
          <path d="M50 34 C 45 45, 30 55, 20 60" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center mt-10 md:mt-0 w-full max-w-4xl">
        
        {/* Date */}
        <p className="font-sans text-xl md:text-2xl text-sage-700 tracking-[0.3em] mb-12 font-medium animate-in slide-in-from-top-4 delay-200 uppercase">
          15 Nov 2026
        </p>

        {/* Names */}
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-sage-600 mb-8 md:mb-12 rotate-[-2deg] leading-tight drop-shadow-sm animate-in zoom-in-95 delay-300 italic">
          Sara <br className="md:hidden" />
          <span className="text-4xl md:text-6xl align-middle mx-4 text-sage-400">&</span> 
          <br className="md:hidden" />
          Sebastian
        </h1>

        <p className="font-sans text-stone-500 tracking-widest uppercase text-sm md:text-base animate-in slide-in-from-bottom delay-500">
            Save the Date
        </p>

        {/* Add to Calendar Button */}
        <div className="relative mt-10 animate-in slide-in-from-bottom delay-700">
            <button 
                onClick={() => setShowCalendarOptions(!showCalendarOptions)}
                className="group px-6 py-2.5 bg-white/50 backdrop-blur-sm border border-sage-300 rounded-full text-sage-700 font-sans text-xs tracking-[0.15em] uppercase hover:bg-sage-600 hover:text-white hover:border-sage-600 transition-all duration-300 flex items-center gap-2 mx-auto shadow-sm"
            >
                <Calendar size={14} className="group-hover:scale-110 transition-transform" />
                Add to Calendar
            </button>

            {/* Calendar Options Dropdown */}
            {showCalendarOptions && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white/95 backdrop-blur-md shadow-xl rounded-lg py-2 border border-sage-100 z-50 flex flex-col animate-in zoom-in-95 duration-200 overflow-hidden">
                    <a 
                        href={googleCalendarUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-3 text-left hover:bg-sage-50 text-stone-600 text-xs font-sans tracking-wide flex items-center gap-3 transition-colors"
                    >
                        <ExternalLink size={14} className="text-sage-500" /> 
                        Google Calendar
                    </a>
                    <div className="h-px bg-sage-50 w-full"></div>
                    <button 
                        onClick={handleDownloadICS}
                        className="px-5 py-3 text-left hover:bg-sage-50 text-stone-600 text-xs font-sans tracking-wide w-full flex items-center gap-3 transition-colors"
                    >
                        <Download size={14} className="text-sage-500" /> 
                        Apple / Outlook (.ics)
                    </button>
                </div>
            )}
        </div>
      </div>

      {/* Scattered Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-[20%] left-[10%] text-sage-600/40 w-6 h-6 rotate-[-15deg] animate-pulse" style={{ animationDuration: '3s' }} />
        <Heart className="absolute top-[30%] right-[15%] text-sage-400/50 w-4 h-4 rotate-[15deg]" />
        <Heart className="absolute bottom-[20%] left-[15%] text-sage-500/30 w-8 h-8 rotate-[-30deg]" />
        <Heart className="absolute bottom-[40%] right-[8%] text-sage-600/40 w-5 h-5 rotate-[45deg] animate-pulse" style={{ animationDuration: '4s' }} />
        <Heart className="absolute top-[15%] left-[25%] text-sage-300/60 w-3 h-3 rotate-[10deg]" />
      </div>

    </section>
  );
};