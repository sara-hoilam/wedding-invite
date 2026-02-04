import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-sage-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl text-stone-800 mb-6">S & S</h2>
        <p className="font-sans text-stone-500 text-xs tracking-[0.2em] uppercase mb-8">
          #SaraAndSebastian2026
        </p>
        <p className="text-stone-400 text-xs font-light">
          &copy; {new Date().getFullYear()} Sara & Sebastian. All rights reserved.
        </p>
      </div>
    </footer>
  );
};