import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Innovation from './components/Innovation';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Services />
      <Innovation />
      <Contact />
    </div>
  );
}

export default App;
