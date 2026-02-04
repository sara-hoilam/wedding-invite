import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Details } from './components/Details';
import { Inspirations } from './components/Inspirations';
import { RSVP } from './components/RSVP';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="w-full overflow-x-hidden scroll-smooth">
      <Navigation />
      <main>
        <Hero />
        <Story />
        <Details />
        <Inspirations />
        <RSVP />
      </main>
      <Footer />
    </div>
  );
}

export default App;