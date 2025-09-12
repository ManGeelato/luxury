import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Properties from './components/Properties';
import Facilities from './components/Facilities';
import Rules from './components/Rules';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Properties />
      <Facilities />
      <Rules />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;