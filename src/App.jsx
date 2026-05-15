import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main id="product-container" className="product-grid">
        {/* We will render our products here soon! */}
      </main>
    </>
  );
}

export default App;
