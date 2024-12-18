import React from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Catalogue from './pages/Catalogue';
import Contact from './pages/Contact';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
