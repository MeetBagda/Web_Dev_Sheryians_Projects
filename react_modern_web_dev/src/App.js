// App.js
import React from 'react';
import Hero from './Hero';
import SecondPage from './SecondPage';
import About from './About';
import Subscribe from './Subscribe';
import Footer from './Footer'; // Import the new component

function App() {
  return (
    <div>
      <Hero />
      <SecondPage />
      <About />
      <Subscribe />
      <Footer /> {/* Include the Footer component */}
    </div>
  );
}

export default App;
